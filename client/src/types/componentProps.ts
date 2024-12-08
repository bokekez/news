import { Dispatch, SetStateAction } from 'react';

export interface TopBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  onLogin: () => void;
  isSmallScreen: boolean;
  setShowSmallCat: (showSmallCat: boolean) => void;
  showSmallCat: boolean;
}

export interface HomeHeaderProps {
  setShowHeader: (value: boolean) => void;
}

type ButtonVariant = 'primary' | 'user' | 'logout' | 'smallActive' | 'smallInactive';

export interface ButtonProps {
  label?: string;
  onClick: () => void;
  variant?: ButtonVariant;
}

export interface CategorySidebarProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

export interface LoginDialogProps {
  handleClose: () => void;
}

export interface NewsWidgetProps {
  category?: string;
}
