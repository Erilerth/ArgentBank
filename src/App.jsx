// import './utils/styles/_reset.scss';
import './utils/styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import RequireAuth from './features/auth/RequireAuth';
import ErrPage from './pages/ErrPage/ErrPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Public routes */}
          <Route index element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<ErrPage />} />

          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path='profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
