import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showToastifySuccess, showToastifyError } from '../../config/toastifyConfig';
import { verifyUser } from '../../api/verifyApi';

const Verify: React.FC = () => {
  const { token } = useParams<{ token?: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!token) {
      showToastifyError('Invalid verification token.');
      setLoading(false);
      return;
    }
    const verifyUserCall = async () => {
      try {
        const response = await verifyUser(token);
        showToastifySuccess(response);
        navigate('/'); 
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : 'An unknown error occurred';
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
