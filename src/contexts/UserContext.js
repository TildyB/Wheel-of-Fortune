import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userPoints, setPoints] = useState();
    const [userName, setUserName] = useState("");
    
    return (
        <UserContext.Provider value={{userPoints, setPoints, userName, setUserName}}>
        {children}
        </UserContext.Provider>
    );
    };

