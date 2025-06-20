import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        {/* default route */}
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </>
  );
}

