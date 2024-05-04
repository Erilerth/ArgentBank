import './_loginPage.scss';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import { useLoginMutation } from '../../features/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [login, { isLogin }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser('');
      setPwd('');
      navigate('/');
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
      errRef.current.focus();
    }
  };

  const handleUserInput = (evt) => setUser(evt.target.value);
  const handlePwdInput = (evt) => setPwd(evt.target.value);

  const content = isLogin ? (
    <h1>Loading...</h1>
  ) : (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'sr-only'}></p>

        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              ref={userRef}
              value={user}
              onChange={handleUserInput}
              autoComplete='off'
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={pwd}
              onChange={handlePwdInput}
              required
            />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <button className='sign-in-button'>Sign In</button>
        </form>
      </section>
    </main>
  );

  return content;
}
