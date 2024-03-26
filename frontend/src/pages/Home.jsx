import React from 'react';
import { useNavigate } from 'react-router-dom';

import LogIn from './Login';
import SignUp from './SignUp';

function Home() {
    let navigate = useNavigate();

    const clickHandler = (path) => {
        navigate(path);
    };

    return (
        <>
            <p>this is home.</p>
            <div className="p-4">
                <button className="btn btn-primary m-2" onClick={() => clickHandler('/login')}>Login</button>
                <button className="btn btn-secondary m-2" onClick={() => clickHandler('/signup')}>Sign Up</button>
            </div>
        </>


    );
}

export default Home;