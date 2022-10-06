import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const StateUserContetx = ({ children }) => {
  const [UserLogin, setUserLogin] = useState(false);
  const [UserLogout, setUserLogout] = useState(true);
  const [NameOfUser, setNameOfUser] = useState("");
  return (
    <UserContext.Provider
      value={{
        UserLogin,
        setUserLogin,
        UserLogout,
        setUserLogout,
        NameOfUser,
        setNameOfUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const GlobalUserContetx = () => useContext(UserContext);
