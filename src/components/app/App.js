import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout/Layout';
import ProfilePage from '../profile/ProfilePage';
import NewActivity from '../newActivity/NewActivityPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
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
