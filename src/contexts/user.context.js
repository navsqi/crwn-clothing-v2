import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //   signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("🚀 ~ unsubscribe ~ user:", user);
      setCurrentUser(user);
    });

    return unsubscribe; // Clean up function to unsubscribe from listener when component unmounts
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
