import cn from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../../../../../common/components/button/button.component';
import { authSelector, register } from '../../../../../../redux/features/auth/auth.slice';
import styles from './registration-form.module.css';

const RegistrationForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const { authEntity, status } = useSelector(authSelector);

  const handleFormChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const showIsUserExist = (status) => {
    if (status === 'failed') {
      return <h3>{"signUp.error"}</h3>
    }
  }


  return (
    <div className="">
      <div className={styles.left}>
        <h1>Registration</h1>
        {showIsUserExist(status)}
        <div className={cn(styles.form)}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleFormChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleFormChange} />
          <label htmlFor="password">Verification password</label>
          <input type="password" name="password2" onChange={handleFormChange} />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={handleFormChange} />
          <div className={styles.buttons}>
            <ButtonComponent handler={() => dispatch(register(form))} name="Register" />
            <ButtonComponent handler={() => navigate("/")} name="Cancel" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;
