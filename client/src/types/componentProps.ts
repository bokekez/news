import { Dispatch, SetStateAction } from 'react';

export interface TopBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  onLogin: () => void;
}

