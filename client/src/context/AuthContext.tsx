import  { createContext, useContext, useState, ReactNode } from "react";
import { User } from "firebase/auth";

// Define the shape of our context
interface AuthContextProps {
  user: User | null;                   // The Firebase user object
  setUser: (user: User | null) => void; // Function to set/update user
}

// Create the context with a default value
const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
});

// Create a Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing AuthContext
export const useAuth = () => useContext(AuthContext);
