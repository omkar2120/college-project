import React, { useState } from 'react';
import "./Header.css"
import Sidebar from './Sidebar';
import {FaBars} from "react-icons/fa"
function Header({list}) {
  const [sidebar,setSidebar]=useState(false)
  return<><div className="header">
    <h3>BBA-CA</h3>
    <FaBars className='iconBar' onClick={()=>{setSidebar(!sidebar)}}/>
    </div>
     <Sidebar sidebar={sidebar} setSidebar={setSidebar} list={list}/>
    </>
}

export default Header;
