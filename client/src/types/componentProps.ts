export interface TopBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  onRefresh: () => void;
  onLogin: () => void;
}