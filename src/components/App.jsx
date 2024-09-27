import { useState } from "react";

import "../blocks/page.css";
import Header from "./Header";
import Main from "./Main";
import ModalWithForm from "../components/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
