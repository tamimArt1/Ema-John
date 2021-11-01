import { useForm } from 'react-hook-form';
import cls from '../Login/Login.module.scss';
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { emailPasswordSignUp, googleClient } = useFirebase();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    emailPasswordSignUp(data.email, data.password);
  };

  return (
    <div className={cls.login_container}>
      <div className={cls.wrapper}>
        <h1 style={{ marginBottom: '1rem' }}>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={cls.login_input}
            {...register('email')}
            placeholder='Email'
            type='email'
          />{' '}
          <br />
          <input
            className={cls.login_input}
            {...register('password')}
            placeholder='Password'
            type='password'
          />
          <br />
          <input className={cls.login_btn} type='submit' />
        </form>
        <h5 style={{ marginTop: '2rem', marginBottom: '0.7rem' }}>
          Already have an account? click below to go in login page
        </h5>
        <Link to='/login'>Login page</Link>
        <h3 style={{ marginTop: '2rem' }}>
          -------------------- Or Login with Google? -----------------
        </h3>
        <button className={cls.google_btn} onClick={googleClient}>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
