import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import StudentLogin from '../../student/component/StudentLogin';
import Navbar from '../component/Navbar';

const Home = () => {
  return <div>
     <Navbar/>
     <StudentLogin/>
  </div>;
};

export default Home;
