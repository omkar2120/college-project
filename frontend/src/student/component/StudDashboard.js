import React from 'react';
import Box from '@mui/material/Box'
import { Container, CssBaseline, Divider } from '@mui/material';
import { width } from '@mui/system';
import Quote from './Quote';

const StudDashboard = () => {
  return(
    <div style={{ display:'flex'}}>
    <Box style={{ width:'25%', height:'100vh' }}>
       <Quote/>
    </Box> 
    <Box style={{ width:"50%" , backgroundColor:'darkblue'}}>
         <h1>Hello Second</h1>
    </Box>

    <Box style={{ width:'25%' , backgroundColor:'deepskyblue'}}>
      <h1>Hello Third</h1>

    </Box>
    </div>
  )
      
        
  
};

export default StudDashboard;
