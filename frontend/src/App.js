import React from 'react';
import Navbar from './global/component/Navbar';
import StudentLogin from './student/component/StudentLogin';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import StudDashboard from './student/component/StudDashboard';
import Notfound from './global/component/Notfound';

function App() {
  return <div>
   <BrowserRouter>
       <Routes>
           <Route path="/" exact element={<Navbar/>} />
           <Route path="/studlogin" element={<StudentLogin/>} />
           <Route  path="studashboard" element={<StudDashboard/>} />
           <Route path="*" element={<Notfound/>} />
         </Routes> 
      </BrowserRouter>
  </div>;
}

export default App;
