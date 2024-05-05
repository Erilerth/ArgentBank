import { useState, useEffect } from 'react';
import './_loginPage.scss';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');

  const { username, password } = formData;

  const handleChange = (evt) => {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  useEffect(() => {
    setErrMsg('');
  }, [formData]);

  const handleSubmit = (evt) => {
    try {
      evt.preventDefault();
      console.log(formData);
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg('No server Response');
      } else if (err.originalStatus?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };
  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              required
              name='password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <p className='err-msg'>{errMsg}</p>
          <button className='sign-in-button'>Sign In</button>
        </form>
      </section>
    </main>
  );
}
