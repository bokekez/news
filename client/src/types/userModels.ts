export interface User {
  id: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}
