import React, { useState, useContext } from 'react';
import styles from './LoginDialog.module.scss';
import { loginUser, registerUser } from '../../api/authApi';
import { showToastifyError, showToastifySuccess } from '../../config/toastifyConfig';
import { AuthContext } from '../../context/authContext';

interface LoginDialogProps {
  handleClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ handleClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const authContext = useContext(AuthContext);
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'login' | 'register'
  ) => {
    const { name, value } = e.target;
    if (type === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(loginData.username, loginData.password);

      authContext?.setUser(response)
      handleClose();
      showToastifySuccess(`${loginData.username} logged in successfully!`);
    } catch (error) {
      console.log('test', error)
      showToastifyError(String(error));
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerUser(registerData);

      if (data.message === 'User already exists') {
        return showToastifyError('This username is already taken. Please try another.');
      }

      handleClose();
      showToastifySuccess('Registration successful! Check your email to verify your account.');
    } catch (error) {
      console.log('test', error)
      showToastifyError(String(error));
    }
  };

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.dialog} onClick={stopPropagation}>
        <button className={styles.closeButton} onClick={handleClose}>
          X
        </button>
        <div className={styles.tabs}>
          <button
            className={activeTab === 'login' ? styles.activeTab : ''}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={activeTab === 'register' ? styles.activeTab : ''}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className={styles.form}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={(e) => handleInputChange(e, 'login')}
                required
                className={styles.input}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, 'login')}
                required
                className={styles.input}
              />
            </label>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        )}
        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit} className={styles.form}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={(e) => handleInputChange(e, 'register')}
                required
                className={styles.input}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={(e) => handleInputChange(e, 'register')}
                required
                className={styles.input}
              />
            </label>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={registerData.firstName}
                onChange={(e) => handleInputChange(e, 'register')}
                required
                className={styles.input}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={registerData.lastName}
                onChange={(e) => handleInputChange(e, 'register')}
                required
                className={styles.input}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={(e) => handleInputChange(e, 'register')}
                required
                className={styles.input}
              />
            </label>
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginDialog;
