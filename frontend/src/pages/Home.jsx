import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const clickHandler = (path) => {
    navigate(path);
  };

  return (
    <div className="p-4">
      <button className="btn btn-primary m-2" onClick={() => clickHandler('/login')}>Login</button>
      <button className="btn btn-secondary m-2" onClick={() => clickHandler('/signup')}>Sign Up</button>
    </div>
  );
}

export default Home;