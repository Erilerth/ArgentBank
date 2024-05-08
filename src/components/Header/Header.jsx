import './_header.scss';
import Logo from '../../assets/images/header/argentBankLogo.webp';
import { useSelector } from 'react-redux';
import {
  selectCurrentFirstName,
  selectCurrentToken,
} from '../../features/auth/authSlice';

export default function Header() {
  const token = useSelector(selectCurrentToken);
  const firstName = useSelector(selectCurrentFirstName);
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
            <a className='main-nav-item' href='./index.html'>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
