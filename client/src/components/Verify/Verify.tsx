import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showToastifySuccess, showToastifyError } from '../../config/toastifyConfig';
import { verifyUser } from '../../api/verifyApi';

const Verify: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUserCall = async () => {
      try {
        const response = await verifyUser(token);
        showToastifySuccess(response);
        navigate('/'); 
      } catch (error: any) {
        showToastifyError(error.response?.data?.error);
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
