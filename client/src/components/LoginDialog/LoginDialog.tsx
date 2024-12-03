import React, { useState, useContext } from 'react';
import styles from './LoginDialog.module.scss';
import { loginUser } from '../../api/authApi';
import { showToastifyError, showToastifySuccess } from '../../config/toastifyConfig';
// import { AuthContext } from '../../context/AuthContext';

interface LoginDialogProps {
  handleClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const authContext = useContext(AuthContext);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);

      if (data.message === 'Invalid credentials') {
        return showToastifyError('Invalid username or password. Please try again.');
      }

      localStorage.setItem('authToken', data.accessToken);
      // authContext?.setUser({
      //   id: data.id,
      //   username: data.username,
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      // });

      handleClose();
      showToastifySuccess(`${username} logged in successfully!`);
    } catch {
      showToastifyError('Login failed. Please check your credentials and try again.');
    }
  };

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.dialog} onClick={stopPropagation}>
        <button className={styles.closeButton} onClick={handleClose}>
          X
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
              className={styles.input}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginDialog;
