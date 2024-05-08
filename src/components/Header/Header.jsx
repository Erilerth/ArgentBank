import './_header.scss';
import Logo from '../../assets/images/header/argentBankLogo.webp';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentFirstName,
  selectCurrentToken,
  logout,
  reset,
} from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const token = useSelector(selectCurrentToken);
  const firstName = useSelector(selectCurrentFirstName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
    window.location.reload();
  };

  return (
    <header>
      <nav className='main-nav'>
        <a className='main-nav-logo' href='/'>
          <img
            className='main-nav-logo-image'
            src={Logo}
            alt='Argent Bank Logo'
          />
          <h1 className='sr-only'>Argent Bank</h1>
        </a>
        <div>
          <a className='main-nav-item' href={token ? '/profile' : '/login'}>
            <i className='fa fa-user-circle'></i>
            {token ? firstName : 'Sign In'}
          </a>

          {token && (
            <button className='main-nav-item' onClick={onLogout}>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
