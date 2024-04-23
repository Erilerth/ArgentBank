import './_header.scss';
import Logo from '../../assets/images/header/argentBankLogo.png';

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
          <a className='main-nav-item' href='./login'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}
