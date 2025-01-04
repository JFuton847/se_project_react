import React, { createContext, useState, useEffect } from "react";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    // Get user data from local storage if available
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : { name: "", avatar: "" };
  });

  useEffect(() => {
    // Optionally, save the user data to local storage on update
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={(currentUser, setCurrentUser)}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
