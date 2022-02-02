import React from "react";
// import { styled } from "@mui/material/styles";
import {sideBarData} from "../sidebarlist"
import "./ManageStudent.css";
import { data } from "../ManageData";
import Header from "../../global/component/Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import {NavLink} from "react-router-dom"
import AddStudent from "../component/AddStudent"
function ManageStudent() {
  const [dropdown, setDropdown] = useState({
    isOpen: false,
    key: false,
  });
  return (
    <div style={{ height: "100%" }}>
      <Header list={sideBarData}/>
      <div className="layout">
        <div className="manageFunctionality">
          <ul>
            <List>
              {data.map((d, k) => (
                <ul>
                  <NavLink  to={d.link?d.link:"#"} style={{textDecoration: 'none' ,color:"#141414"}}>
                  <ListItem
                    button
                    key={k}
                    className="listItm"
                    style={{ marginTop: "50px", fontSize: "35px" }}
                    onClick={() => {
                      if(d.dropdown.length>0){
                      setDropdown({ isOpen: !dropdown.isOpen, key: k });
                    }
                    }}
                  >
                    <ListItemIcon>{d.icon}</ListItemIcon>
                    <ListItemText primary={d.name} />
                  </ListItem>
                  </NavLink>
                  <ul
                    className={
                      dropdown.isOpen && dropdown.key === k ? "dropdown" : "none"
                    }
                  >
                    {d.dropdown.map((dr) => (
                      <ListItem  style={{textTransform:"uppercase", marginTop:"10px",fontSize: "25px"}} onClick={()=>{setDropdown({...dropdown, isOpen: !dropdown.isOpen})}}>
                        <ListItemText>
                          {dr}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </ul>
                </ul>
              ))}
            </List>
          </ul>
        </div>
        <div className="display">
          <AddStudent/>
        </div>
      </div>
    </div>
  );
}

export default ManageStudent;
