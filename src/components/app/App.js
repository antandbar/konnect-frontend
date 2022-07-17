import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import  LoginPage from '../auth/loginPage/LoginPage';
import Layout from '../layout/Layout';
import ProfilePage from '../auth/profilePage/ProfilePage';
import NewActivity from '../activities/newActivity/NewActivityPage';
import NewUser from '../newUser/NewUser';
import ActivitiesPage from '../activities/activitiesListing/activitiesListing';
import ActivityPage from '../activities/activityPage/activityPage';
import NotFound from '../notFoundPage/notFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<ActivitiesPage/>}/>
          <Route path="/register" element={<NewUser/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/activities">
                <Route index element={<ActivitiesPage/>}/>
                <Route path=":activityId" element={<ActivityPage/>} />
                <Route path="/activities/new" element={<NewActivity/>} />

            </Route>
          <Route path='/myaccount' element={<ProfilePage />} />
      </Route>

      <Route path="/404" element={<Layout />}>
        <Route index element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
