import React from 'react';

// Plugins
import { Routes, Route } from 'react-router';
import Home from '../layout/Home';
import Login from '../auth/Login';
import LoginSpanish from '../auth/LoginSpanish';
import SignUp from '../auth/SignUp';
import SignUpSpanish from '../auth/SignUpSpanish';
import Dashboard from '../layout/Dashboard';
import Translate from '../layout/Translate';

const AppRoutes = () => {
  return (
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login-esp' element={<LoginSpanish />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup-esp' element={<SignUpSpanish />} />
          <Route path='/translate' element={<Translate />} />
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
  )
}

export default AppRoutes