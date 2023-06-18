import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './sign-in.module.css';
import { useNavigate } from 'react-router-dom';
import LoginForm from './login-form/login-form.component';
import { authStatusSelector } from '../../../../../redux/features/auth/auth.slice';
import RegistrationForm from './registration-form/registration-form.component';
import ButtonComponent from '../../../../../common/components/button/button.component';

const SignInComponent = () => {

  const navigate = useNavigate();
  const status = useSelector(authStatusSelector);
  const [isLogin, setIsLogin] = useState(true);

  const registrationHandler = () => {
    setIsLogin(!isLogin);
  }

  useEffect(() => {
    if (status === 'succeeded' || status === 'created') {
      navigate("/");
    }
  }, [])

  const showLoginOrRegistrationForm = () => {
    return isLogin ? <LoginForm /> : <RegistrationForm />
  }

  return (
    //TODO Переделать валидацию
    <div className={cn(styles.container, status === 'failed' ? styles.inValid : '')}>
      <div className={styles.left}>
        {showLoginOrRegistrationForm()}
      </div>
      <div className={styles.right}>
        <h1>Здравствуй!</h1>
        <h4>Пожалуйста, войди или зарегистрируйся</h4>
        <ButtonComponent handler={registrationHandler} name={isLogin ? "Зарегистрироваться?" : "Войти?"} />
      </div>
    </div>
  )
}

export default SignInComponent;
