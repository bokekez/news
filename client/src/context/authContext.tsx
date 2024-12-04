import { createContext, useState, ReactNode, FC } from 'react';
import { User, AuthContextType } from '../types/userModels';
import { showToastifySuccess } from '../config/toastifyConfig';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    showToastifySuccess('Logged in successfully!');
  };

  const logout = () => {
    setUser(null);
    showToastifySuccess('Logged out successfully!');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };