import './_profile.scss';
import MockAccount from '../../data/mockAccount.json';
import Account from '../../components/Account/Account';
import { useSelector } from 'react-redux';
import {
  selectCurrentFirstName,
  selectCurrentLastName,
} from '../../features/auth/authSlice';

export default function Profile() {
  const firstName = useSelector(selectCurrentFirstName);
  const lastName = useSelector(selectCurrentLastName);
  const userName = `${firstName} ${lastName}`;

  while (userName === ' ') {
    window.location.reload();
  }

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        <button className='edit-button'>Edit Name</button>
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {MockAccount.map((evt, id) => (
        <Account
          key={id}
          title={evt.title}
          amount={evt.amount}
          desc={evt.description}
        />
      ))}
    </main>
  );
}
