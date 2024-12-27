import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../blocks/page.css";
import { coordinates, APIkey } from "../utils/constants.js";
import Header from "./Header";
import Main from "./Main";
import ModalWithForm from "../components/ModalWithForm";
import ItemModal from "../components/ItemModal";
import Profile from "../components/Profile";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import Footer from "./Footer";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import AddItemModal from "../components/AddItemModal";
import RegisterModal from "../components/RegisterModal";
import LoginModal from "../components/LoginModal";
import { getItems, addItems, deleteItems } from "../utils/api.js";
import { signup, signin, getCurrentUser } from "../utils/auth.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    const { name, imageUrl, weather } = values;
    return addItems({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        console.log("Item added:", values);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  const onRegister = (values) => {
    signup(values)
      .then(() => {
        console.log("User registered successfully:", values);
        return onLogin({ email: values.email, password: values.password });
      })
      .catch((error) => {
        console.error("Error during registration or login:", error);
      });
  };

  const onLogin = (values) => {
    signin(values)
      .then((res) => {
        if (res.token) {
          console.log("User logged in successfully:", res);
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          closeActiveModal();
          fetchCurrentUser();
        } else {
          throw new Error("No token received from server");
        }
      })
      .catchj((error) => {
        console.error("Error during login:", error);
      });
  };

  const onDeleteItem = (item) => {
    deleteItems(item._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((currentItem) => currentItem._id !== item._id)
        );
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Failed to delete item", error);
      });
  };

  const fetchCurrentUser = () => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        console.error("Error fetching current user:", err);
      });
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        //set clothing items using data that was returned
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      fetchCurrentUser()
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              setActiveModal={setActiveModal}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onDeleteItem={onDeleteItem}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          {activeModal === "add-garment" && (
            <AddItemModal
              onClose={closeActiveModal}
              isOpen={activeModal === "add-garment"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              isOpen={activeModal === "register"}
              onClose={closeActiveModal}
              onRegister={onRegister}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={closeActiveModal}
              onLogin={onLogin}
            />
          )}
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteItem={onDeleteItem}
          />
          <Footer />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
