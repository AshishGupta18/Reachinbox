import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function RedirectHandler() {
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('jwtToken', token);
      // Redirect to the desired page after storing the token
      history.push('/');
    }
  }, [history]);

  return <div>Loading...</div>;
}

export default RedirectHandler;
