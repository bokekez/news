import { Routes, Route } from 'react-router-dom';
import Verify from '../components/Verify/Verify';
import Home from '../views/home/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verify/:token" element={<Verify />} />
    </Routes>
  );
};

export default AppRoutes;
