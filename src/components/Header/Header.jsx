import './_header.scss';
import Logo from '../../assets/images/header/argentBankLogo.webp';

export default function Header() {
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
          <a className='main-nav-item' href='/login'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </a>

          {/* <a className='main-nav-item' href='./index.html'>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </a> */}
        </div>
      </nav>
    </header>
  );
}
