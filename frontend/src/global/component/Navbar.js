import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return <div>
<h1> 
<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        color="default"
        bgColor="white"
        elevation={2}
        sx={{ }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h5"  color="inherit" noWrap sx={{ flexGrow: 1  }}>
            DELTA
          </Typography>
          <Link to="/studlogin">
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 , fontWeight:'bold', color:'#972010', borderColor:'#972010' }}>
             Student Login
          </Button>
</Link>
          <Button  href="#"  variant="outlined" sx={{ my: 1, mx: 1.5 ,fontWeight:'bold', color:'#972010', borderColor:'#972010' }}>
            Teacher Login
          </Button>
        </Toolbar>
        </AppBar>
        </h1>

  </div>
};

export default Navbar;
