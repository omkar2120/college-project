import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import StudentLogin from '../../student/component/StudentLogin';
import Navbar from '../component/Navbar';

const Home = () => {
  return <div>
     <BrowserRouter>
       <Routes>
           <Route path="/" exact element={<Navbar/>} />
           <Route path="/studlogin" element={<StudentLogin/>} />
         </Routes>
      </BrowserRouter>
  </div>;
};

export default Home;
