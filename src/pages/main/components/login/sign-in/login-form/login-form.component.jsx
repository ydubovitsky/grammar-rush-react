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
      return <h3>Упс... Неправильные имя пользователя или пароль</h3>
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
        <h1>Войти</h1>
        {showIsUserExist(status)}
        <div className={cn(styles.form)}>
          <label htmlFor="username">Имя пользователя</label>
          <input type="text" name="username" onChange={handleFormChange} />
          <label htmlFor="password">Пароль</label>
          <input type="password" name="password" onChange={handleFormChange} />
          <div className={styles.buttons}>
            <ButtonComponent handler={() => dispatch(login(form))} name="Войти" />
            <ButtonComponent handler={() => navigate("/")} name="Отмена" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
