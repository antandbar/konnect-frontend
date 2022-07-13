import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import  LoginPage from '../auth/loginPage/LoginPage';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout/Layout';
import ProfilePage from '../profile/ProfilePage';
import NewActivity from '../newActivity/NewActivityPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/login" element={<LoginPage />} />
        <Route index element={<NewActivity/>} />
        <Route path='/myaccount' element={<ProfilePage />} />
      </Route>

      <Route path="/404" element={<LoginPage />}>
        <Route index element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
