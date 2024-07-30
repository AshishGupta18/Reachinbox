import React from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectHandler() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    if (token) {
      localStorage.setItem('jwt', token);
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
}

export default RedirectHandler;
