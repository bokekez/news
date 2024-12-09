import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetchNewsBySearchTerm, fetchNewsByCategory } from '../api/newsApi';
import Home from '../views/home/Home';
import { AuthContext } from '../context/authContext';
import { Article } from '../types/articleModel';

jest.mock('../api/newsApi', () => ({
  fetchNewsBySearchTerm: jest.fn(),
  fetchNewsByCategory: jest.fn(),
}));

jest.mock('../api/favoritesApi', () => ({
  fetchFavorites: jest.fn(),
}));

jest.mock('../components/NewsCard/NewsCard', () => ({
  __esModule: true,
  default: (props: { article: Article }) => <div>{props.article.title || 'News Card'}</div>,
}));

jest.mock('../components/NewsWidget/NewsWidget', () => ({
  __esModule: true,
  default: () => <div>News Widget</div>,
}));

jest.mock('../context/authContext', () => ({
  AuthContext: React.createContext({
    user: { id: '123', name: 'Test User' },
  }),
}));

jest.mock('../config/toastifyConfig', () => ({
  showToastifyError: jest.fn(),
}));

jest.mock('../components/LoginDialog/LoginDialog', () => ({
  __esModule: true,
  default: (props: { handleClose: () => void }) => (
    <button onClick={props.handleClose}>Close Dialog</button>
  ),
}));

jest.mock('../components/Button/Button', () => ({
  __esModule: true,
  default: (props: { label: string; onClick: () => void }) => (
    <button onClick={props.onClick}>{props.label}</button>
  ),
}));

// jest.mock('../components/TopBar/TopBar', () => ({
//   __esModule: true,
//   default: ({ searchTerm, setSearchTerm, setShowSmallCat }: any) => (
//     <div>
//       <input
//         placeholder="Search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={() => setShowSmallCat(true)}>Toggle Categories</button>
//     </div>
//   ),
// }));

// jest.mock('../components/Categories/Categories', () => ({
//   __esModule: true,
//   default: ({ onCategorySelect, activeCategory }: { onCategorySelect: (category: string) => void, activeCategory: string }) => (
//     <div data-testid="categories-mock">
//       <button onClick={() => onCategorySelect('Technology')} data-testid="category-technology">
//         Technology
//       </button>
//       <p>Active Category: {activeCategory}</p>
//     </div>
//   ),
// }));

const mockArticle: Article = {
  source: {
    id: 'BBC',
    name: 'British Broadcasting Corporation',
  },
  author: 'Test Name',
  title: 'Test Title',
  description: 'Random description',
  url: 'www.bbc.com',
  urlToImage: 'www.bbc.com',
  publishedAt: '09-12-2024',
  content: 'News here',
};

const mockUser = { id: '1', username: 'Test User', firstName: 'test', lastName: 'user' };

const mockSetUser = jest.fn();
const mockLogin = jest.fn();
const mockLogout = jest.fn();

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Home component', () => {
    render(
      <AuthContext.Provider
        value={{ user: mockUser, setUser: mockSetUser, login: mockLogin, logout: mockLogout }}
      >
        <Home />
      </AuthContext.Provider>
    );
    expect(screen.getByText(/Make News your homepage/i)).toBeInTheDocument();
  });

  test('fetches news by search term', async () => {
    const mockFetchNewsBySearchTerm = fetchNewsBySearchTerm as jest.MockedFunction<
      typeof fetchNewsBySearchTerm
    >;
    mockFetchNewsBySearchTerm.mockResolvedValue([mockArticle]);
    render(
      <AuthContext.Provider
        value={{ user: mockUser, setUser: mockSetUser, login: mockLogin, logout: mockLogout }}
      >
        <Home />
      </AuthContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText(/Search news/i);
    const searchButton = screen.getByText(/Search/i);

    fireEvent.change(searchInput, { target: { value: 'Technology' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockFetchNewsBySearchTerm).toHaveBeenCalledWith('Technology');
    });
  });

  test('fetches news by category when selected', async () => {
    const mockFetchNewsByCategory = fetchNewsByCategory as jest.MockedFunction<
      typeof fetchNewsByCategory
    >;
    mockFetchNewsByCategory.mockResolvedValue([mockArticle]);
    render(
      <AuthContext.Provider
        value={{ user: mockUser, setUser: mockSetUser, login: mockLogin, logout: mockLogout }}
      >
        <Home />
      </AuthContext.Provider>
    );

    fireEvent.click(screen.getByText(/Health/i));

    await waitFor(() => {
      expect(mockFetchNewsByCategory).toHaveBeenCalledWith('Health');
    });
  });

  test('renders mobile layout for small screens', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    render(
      <AuthContext.Provider
        value={{ user: mockUser, setUser: mockSetUser, login: mockLogin, logout: mockLogout }}
      >
        <Home />
      </AuthContext.Provider>
    );

    expect(screen.getByText(/Featured/i)).toBeInTheDocument();
    expect(screen.getByText(/Latest/i)).toBeInTheDocument();
  });

  test('closes login dialog on click', () => {
    const noUser = { id: '', username: '', firstName: '', lastName: '' };
    render(
      <AuthContext.Provider
        value={{ user: noUser, setUser: mockSetUser, login: mockLogin, logout: mockLogout }}
      >
        <Home />
      </AuthContext.Provider>
    );
    fireEvent.click(screen.getByText(/Login/i));
    fireEvent.click(screen.getByText(/Close Dialog/i));
    expect(screen.queryByText(/Close Dialog/i)).not.toBeInTheDocument();
  });

  test('renders Categories component on small screen when showSmallCat is true', async () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    render(
      <AuthContext.Provider
        value={{ user: mockUser, setUser: mockSetUser, login: mockLogin, logout: mockLogout }}
      >
        <Home />
      </AuthContext.Provider>
    );

    const toggleButton = screen.getByTestId('toggle-small-categories');
    fireEvent.click(toggleButton);

    await waitFor(() => expect(screen.getByText('Sports')).toBeInTheDocument());
  });

  test('matches snapshot', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    const { asFragment } = render(
      <AuthContext.Provider
        value={{ user: mockUser, setUser: mockSetUser, login: mockLogin, logout: mockLogout }}
      >
        <Home />
      </AuthContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
