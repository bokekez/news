import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showToastifySuccess, showToastifyError } from '../../config/toastifyConfig';
import { verifyUser } from '../../api/verifyApi';
import { AuthContext } from '../../context/authContext';
import { MESSAGES } from '../../constants/Messages';

const Verify: React.FC = () => {
  const { token } = useParams<{ token?: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      showToastifyError('Invalid verification token.');
      setLoading(false);
      return;
    }
    const verifyUserCall = async () => {
      try {
        const response = await verifyUser(token);

        authContext?.setUser(response)
        showToastifySuccess(MESSAGES.USER.VERIFIED);
        navigate('/'); 
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : MESSAGES.ERROR.UNKNOWN;
        showToastifyError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyUserCall();
    }
  }, [token, navigate]);

  if (loading) {
    return <p>Verifying your account...</p>;
  }

  return null;
};

export default Verify;
