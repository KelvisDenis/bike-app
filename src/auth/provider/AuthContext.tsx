import { createContext, useContext, useState } from "react";
import type { AuthContextType } from "./IAuthContextType";



const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth")
  );

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  }

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
