import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import  LoginPage from '../auth/loginPage/LoginPage';
import Layout from '../layout/Layout';
import ProfilePage from '../auth/profilePage/ProfilePage';
import NewActivity from '../activities/newActivity/NewActivityPage';
import NewUser from '../auth/newUser/NewUser';
import ActivitiesPage from '../activities/activitiesListing/activitiesListing';
import ActivityPage from '../activities/activityPage/activityPage';
import NotFound from '../notFoundPage/notFoundPage';
import { AuthContextProvider } from '../auth/context';
import RequireAuth from '../auth/RequireAuth';
import Myplans from '../activities/myPlans/myPlans';


function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<NewUser/>} />
          <Route path="/activities" element={<RequireAuth><ActivitiesPage/></RequireAuth>} />
          <Route path="/activities/:activityId" element={<RequireAuth><ActivityPage/></RequireAuth>} />
          <Route path="/newactivity" element={<RequireAuth><NewActivity/></RequireAuth>} />
          <Route path="/myplans" element={<RequireAuth><Myplans/></RequireAuth>}/>
          <Route path='/myaccount' element={<RequireAuth><ProfilePage /></RequireAuth>} />
      </Route>

      <Route path="/404" element={<Layout />}>
        <Route index element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
    </AuthContextProvider>

  );
}

export default App;
