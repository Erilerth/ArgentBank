// import './utils/styles/_reset.scss';
import './utils/styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
