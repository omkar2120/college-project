import React from 'react';
import Home from './global/pages/Home';
import StudentHome from './student/pages/StudentHome';
// import Header from './global/component/Header';
import AdimDashBoard from './admin/pages/AdimDashBoard';
import ManageStudent from './teacher/pages/ManageStudent';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TeacherDashboard from './teacher/pages/TeacherDashboard';
import "./App.css"
function App() {
  return <div className='app'>
    <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<TeacherDashboard/>}/>
      <Route exact path="teacher/manage/student" element={<ManageStudent/>}/>
      <Route exact path='/admin' element={<AdimDashBoard/>}/>
  </Routes>
  </BrowserRouter>
  </div>
}

export default App;
