import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import './_loginPage.scss';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, message, id } = useSelector(
    (state) => state.auth
  );

  const handleChange = (evt) => {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      setErrMsg(message);
    }

    if (isSuccess || id) {
      navigate('/profile');
      window.location.reload();
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch, id]);

  useEffect(() => {
    setErrMsg('');
  }, [formData]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='email'>Username</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
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
