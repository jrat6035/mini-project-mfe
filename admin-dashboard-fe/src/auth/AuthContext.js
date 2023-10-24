import { createContext, useState, useEffect } from "react";
import * as auth from "../utils/authUtils";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const user = await auth.getCurrentUser();
      console.log(user);
      setUser(user);
    } catch (err) {
      console.log(err);
      setUser(null);
    }
  };

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  const signIn = async (username, password) => {
    try {
      await auth.signIn(username, password);
      getCurrentUser();
    } catch (error) {
      console.error("Error in signIn:", error); 
    }
  };
  const signOut = async () => {
    try {
      auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error in signOut:", error); 
    }
  };

  const authValue = {
    user,
    isLoading,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
