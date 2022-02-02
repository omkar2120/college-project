import React from 'react';
import Navbar from './global/component/Navbar';
import StudentLogin from './student/component/StudentLogin';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

function App() {
  return <div>
   <BrowserRouter>
       <Routes>
           <Route path="/" exact element={<Navbar/>} />
           <Route path="/studlogin" element={<StudentLogin/>} />
         </Routes>
      </BrowserRouter>
  </div>;
}

export default App;
