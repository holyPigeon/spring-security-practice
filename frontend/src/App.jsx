import React, { useState, useEffect } from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import routes from './routes';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("name") !== null) setIsLogin(false);
  }, []);

  return (
    <div className="flex justify-center h-screen overflow-hidden">
      <div className="w-[80%] p-6 space-y-4 m-auto bg-base-200 rounded-md shadow-md ring-2 ring-gray-800/50 md:max-w-md">

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>

      </div>
    </div>
  );
};

export default App;
