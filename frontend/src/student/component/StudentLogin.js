import React , {useState} from 'react';
import  Grid  from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { InputLabel, Typography , TextField, Button, FormControl, } from '@mui/material';
import OTPInput from 'otp-input-react'
import GoogleButton from "react-google-button";

const StudentLogin = () => {

    const [data , setdata] = useState({})

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
                 <Box sx={{ textAlign:'center', marginTop:'40px'}}>
                   <FormControl>
                      <div style={{display:'flex'}}>
                         <TextField 
                           id="outlined-basic" 
                           label="EnterEmail/PhoneNo" 
                           placeholder="Enter Email/Phone No"
                           variant="outlined"
                           type="number"
                           type="email"
                           sx={{width:'90%'}}
                           />

                         <Button 
                            variant="contained"
                            style={{width:'35%', marginLeft:'10px'}}
                            >Get OTP
                          </Button>
                      </div>
                      <div style={{display:'inline'}}>
                        <Typography 
                           varient="h5" 
                           style={{margin:'20px'}} > 
                           Enter Valid OTP
                        </Typography>
                           
                            <OTPInput otpType="number" secure="true"  autoFocus OTPLength={4} style={{ justifyContent:'center', margin:'20px' }} />
                               <Button variant="contained" sx={{bgcolor:"red", margin:'10px'}} >Verify</Button>
                               <Button variant="contained">Resend</Button> 

                      </div>
                      <Button variant="contained">LogIn</Button> 
                      <GoogleButton
                         className="googleBtn"
                         type="light"
                         label="Sign up with Google"
                         onClick={() => {
                         console.log("Google button clicked");   
                          }}
                         style={{marginTop:'20px' , marginLeft:'50px'}}
                      />
</FormControl>
                 </Box>
             </Box>
          </Container>
          
           
  </div>;
};

export default StudentLogin;
