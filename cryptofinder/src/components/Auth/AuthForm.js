import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/crypto.png'
import classes from './AuthForm.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/Slice/auth-slice';
import { useNavigate } from 'react-router-dom';



// let logoutTimer;

const AuthForm = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const tokenData = useSelector(state => state.auth.tokenData);



  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(authActions.logout());
    }, tokenData.duration);
  }, [tokenData]);



  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;



    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZ7QKsOk8RwjlbHxjzIC3wu_g33n9XeBc";

    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZ7QKsOk8RwjlbHxjzIC3wu_g33n9XeBc";
    }


    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { 'Content-Type': 'application/json' }

      })
      .then(async (res) => {

        setIsLoading(false);
        if (res.ok) {
          return res.json(); // console.log(res);
        } else {

          let errorMessage = 'Authentication failed!';

          throw new Error(errorMessage);
        }
      })
      .then((data) => {

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        const Data = [`${data.idToken}`, `${expirationTime.toISOString()}`];

        dispatch(authActions.login(Data));
        navigate('/home');

      })
      .catch((err) => {
        alert(err.message);
        // console.log(err);
      });
  };




  return (
    <>
      <section className={classes.auth}>
        <img className={classes.register} src={logo} alt="Logo" width="150px" height='auto' />
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input type='password' id='password' required ref={passwordInputRef} />
          </div>
          <div className={classes.actions}>
            {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
            {isLoading && <p>Sending Request...</p>}
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
