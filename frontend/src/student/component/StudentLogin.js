import React from 'react';
import  Grid  from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { InputLabel, Typography , TextField, Button, FormControl, Avatar } from '@mui/material';
import OTPInput from 'otp-input-react'
import { display, margin, width } from '@mui/system';

const StudentLogin = () => {
  return <div style={{padding:'50px'}}>
          <Container
               style={{
                 display:'flex', 
                 }}
                >
             <Box sx={{ 
                  backgroundColor:'#5D5852', 
                  height:'400px',
                  width:'60%',
                  boxShadow:15
                  
                    }}>
                  <Typography variant="h3" style={{textAlign:"center", margin:'120px'}}>
                    DELTA
                  </Typography>
             </Box>

             <Box sx={{                        //second div 
                height:'400px',
                width:'50%' ,
                float:'right',
                boxShadow:15
                 }}>
                 <Box sx={{ textAlign:'center', marginTop:'80px'}}>
                   <FormControl>
                      <div style={{display:'flex'}}>
                        <TextField id="outlined-basic" label="EnterEmail/PhoneNo" placeholder="Enter Email/Phone No" variant="outlined" sx
                          ={{width:'90%'}} />
                        <Button variant="contained" style={{width:'35%', marginLeft:'10px'}}>Get OTP</Button>
                      </div>
                      <div style={{display:'inline'}}>
                        <Typography varient="h5" style={{margin:'20px'}} > Enter Valid OTP</Typography>
                            <OTPInput otpType="number" secure="true"  autoFocus OTPLength={4} style={{ justifyContent:'center', margin:'20px' }} />
                               <Button variant="contained" sx={{bgcolor:"red", margin:'10px'}} >Verify</Button>
                               <Button variant="contained">Resend</Button> 

                      </div>

</FormControl>
                 </Box>
             </Box>
          </Container>
          
           
  </div>;
};

export default StudentLogin;
