import { createContext, useEffect, useMemo } from "react";
import * as auth from "../middleware/auth";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUserByUserEmail } from "../middleware/user";
import { setUser, clearUser, setLocalUser } from "../store/userSlice";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const localUser = useSelector((state) => state.user.localUser);

  useEffect(() => {
    getCurrentUser()
      .then((user) => dispatch(setUser(user)))
      .catch(() => dispatch(clearUser()));
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserTypeByEmail(user.email)
        .then((localUser) => dispatch(setLocalUser(localUser)))
        .catch(() => dispatch(setLocalUser(null)));
    }
  }, [user]);

  const getCurrentUser = async () => {
    try {
      return await auth.getCurrentUser();
    } catch (err) {
      setUser(null);
    }
  };

  const signIn = async (username, password) => {
    try {
      await auth.signIn(username, password);
      getCurrentUser().then((user) => dispatch(setUser(user)));
    } catch (error) {
      message.error("Error in signIn:", error);
    }
  };

  const signOut = async () => {
    try {
      auth.signOut();
      dispatch(clearUser());
    } catch (error) {
      message.error("Error in signOut:", error);
    }
  };

  const fetchUserTypeByEmail = async (email) => {
    try {
      return await getUserByUserEmail(email);
    } catch (error) {
      console.error("Error fetching user by email:", error);
      throw error;
    }
  };

  const authValue = useMemo(
    () => ({
      user,
      localUser,
      signIn,
      signOut,
    }),
    [user, localUser, signIn, signOut]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
