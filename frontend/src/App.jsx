import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'


const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("name") !== null) setIsLogin(false);
  }, []);

  return (
    <div className="flex justify-center h-screen overflow-hidden">
      <div className="w-[80%] p-6 space-y-4 m-auto bg-base-200 rounded-md shadow-md ring-2 ring-gray-800/50 md:max-w-md">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
