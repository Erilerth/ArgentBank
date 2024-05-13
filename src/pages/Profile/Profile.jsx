import './_profile.scss';
import MockAccount from '../../data/mockAccount.json';
import Account from '../../components/Account/Account';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeUsername,
  selectCurrentFirstName,
  selectCurrentLastName,
  selectCurrentUsername,
} from '../../features/auth/authSlice';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [usernameForm, setUsernameForm] = useState(false);
  const firstNameRedux = useSelector(selectCurrentFirstName);
  const lastNameRedux = useSelector(selectCurrentLastName);
  const userNameRedux = useSelector(selectCurrentUsername);

  const [ChangeUsernameForm, setChangeUsernameForm] = useState({
    userName: userNameRedux,
    firstName: firstNameRedux,
    lastName: lastNameRedux,
  });
  const { userName, firstName, lastName } = ChangeUsernameForm;

  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.auth);

  while (userNameRedux === '') {
    window.location.reload();
  }

  useEffect(() => {
    if (isSuccess) window.location.reload();
  });

  const handleChange = (evt) => {
    setChangeUsernameForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleSave = () => {
    dispatch(changeUsername(userName));
  };

  const handleCancel = () => {
    setUsernameForm(false);
  };

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {userNameRedux}
        </h1>
        <button className='edit-button' onClick={() => setUsernameForm(true)}>
          Edit Name
        </button>
        {usernameForm && (
          <form onSubmit={handleSubmit}>
            <section>
              <div>
                <label htmlFor='userName'>User name: </label>
                <input
                  type='text'
                  id='userName'
                  name='userName'
                  value={userName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='userName'>First name: </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={firstName}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div>
                <label htmlFor='userName'>Last name: </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={lastName}
                  onChange={handleChange}
                  disabled
                />
              </div>
            </section>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </form>
        )}
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
