import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"
import img from "./Avtar2.jpg"
export default function Sidebar({sidebar,setSidebar,list}) {
    
    console.log(list)
  return <div className={sidebar?"sideBarMain":'sideBarNone'}>
      <div onClick={()=>{setSidebar(!sidebar)}}>

      </div>
      <div className="sidebarContentContainer">
          <div className="profileContainer">
              <div className="dp">
                  <img src={img}/>

              </div>
              <div className="dpDetails">
                  <div className="dpDetailsName"><h4>Amit Thakur</h4></div>
                  <div className="dpDetailsClass"><b style={{color:"red"}}>BBA-CA</b></div>

              </div>
              <div className="listContainer">
                  <List>
                      {list.map((li,k)=>(
                          <NavLink to={li.path} style={{textDecoration:"none"}}>
                          <ListItem  key={k} style={{width:"100%",marginTop:"15px",fontSize:"25px"}}>
                              <ListItemIcon>{li.icon}</ListItemIcon>
                              <ListItemText primary={li.list}/>
                          </ListItem>
                          </NavLink>
                      ))}
                  </List>

              </div>

          </div>

      </div>

  </div>;
}