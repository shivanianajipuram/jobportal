import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // load from localStorage on refresh
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUser({ email });
    }
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("email", userData.email);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("email");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);