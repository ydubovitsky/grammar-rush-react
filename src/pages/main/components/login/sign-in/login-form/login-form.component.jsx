import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../../../../../common/components/button/button.component';
import { authSelector, login } from '../../../../../../redux/features/auth/auth.slice';
import { FETCH_STATUS } from '../../../../../../redux/types';
import styles from './login-form.module.css';

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const { authEntity, status } = useSelector(authSelector);

  useEffect(() => {
    redirectOnSuccessLogin(status);
  }, [status])

  const handleFormChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const showIsUserExist = (status) => {
    if (status === FETCH_STATUS.ERROR) {
      return <h3>Ooops, wrong username/password</h3>
    }
  }

  const redirectOnSuccessLogin = (status) => {
    if (status === FETCH_STATUS.AUTHENTICATED) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="">
      <div className={styles.left}>
        <h1>Login</h1>
        {showIsUserExist(status)}
        <div className={cn(styles.form)}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleFormChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleFormChange} />
          <div className={styles.buttons}>
            <ButtonComponent handler={() => dispatch(login(form))} name="Log In" />
            <ButtonComponent handler={() => navigate("/")} name="Cancel" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
