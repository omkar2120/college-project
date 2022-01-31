import React from 'react';
// import Header from './global/component/Header';
import ManageStudent from './teacher/pages/ManageStudent';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
function App() {
  return <div className='app'>
    <BrowserRouter>
  <Routes>
      <Route path="/" element={<ManageStudent/>}/>
  </Routes>
  </BrowserRouter>
  </div>;
}

export default App;
