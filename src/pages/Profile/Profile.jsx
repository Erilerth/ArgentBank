import './_profile.scss';
import MockAccount from '../../data/mockAccount.json';
import Account from '../../components/Account/Account';

export default function Profile() {
  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          test
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
