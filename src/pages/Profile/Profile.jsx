import './_profile.scss';
import MockAccount from '../../data/mockAccount.json';
import Account from '../../components/Account/Account';
import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectCurrentToken,
} from '../../features/auth/authSlice';

export default function Profile() {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const tokenAbbr = `${token?.slice(0, 9)}...`;
  console.log(tokenAbbr);

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {user}
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
