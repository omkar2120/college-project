import React from 'react';
import { Container,FormControl ,FormGroup,Box,Typography,Grid,TextField,Radio,FormControlLabel,RadioGroup,FormLabel,MenuItem,Select,InputLabel,Button} from '@mui/material';
import { fontSize } from '@mui/system';
function AddStudent() {
    
  return  <div style={{width:"90%",height:"80%"}} className='addContainer'>
<Typography component="h3"
            variant="h2"
            style={{ textAlign: "center" ,wordSpacing:"7px" ,textTransform:"uppercase" ,fontSize:"35px",fontWeight:"bolder" ,color:"#060606"}}>
                Add Student
</Typography>
<Grid container spacing={2} style={{marginTop:"2%"}}>
<Grid item lg="6" md="12">
<FormControl fullWidth>
  <InputLabel>Year</InputLabel>
  <Select
    label="Year"
  >
    <MenuItem value={1}>First</MenuItem>
    <MenuItem value={2}>Second</MenuItem>
    <MenuItem value={3}>Third</MenuItem>
  </Select>
</FormControl></Grid>
    <Grid item lg="6" md="12"><FormControl fullWidth>
  <InputLabel>Semester</InputLabel>
  <Select
    label="Semester"
  >
    <MenuItem value={1}>SEM-1</MenuItem>
    <MenuItem value={2}>SEM-2</MenuItem>
    <MenuItem value={3}>SEM-3</MenuItem>
  </Select>
</FormControl>
    </Grid>


    <Grid item lg="12" md="12">
    <TextField size="Normal" margin='normal'  label="Full Name" variant="standard" fullWidth style={{color:'black',fontWeight:"bold"}}/>
    </Grid>
    <Grid item lg="6" md="12">
    <TextField margin='normal'  label="Email" variant="standard" fullWidth style={{color:'black',fontWeight:"bold"}}/></Grid>
    <Grid item lg="6" md="12">
    <TextField margin='normal'  label="Mobile" variant="standard" fullWidth style={{color:'black',fontWeight:"bold"}}/>
    </Grid>
    <Grid item lg="12" md="12">
        <Grid container  spacing={2} style={{marginTop:"2%"}}>
    <Grid item lg="6" md="12">
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl></Grid>
    <Grid item lg="6" md="12">
        <FormControl>
            <FormLabel>DOB </FormLabel>
            
    <TextField margin='normal'   variant="standard" fullWidth type="date" style={{color:'black',fontWeight:"bold"}}/>
        </FormControl>
    </Grid>
    </Grid>
    </Grid>
    <Grid item lg="6" md="12" style={{marginTop:"2%"}}><Button fullWidth variant='contained' color="error">clear</Button></Grid>
    <Grid item lg="6" md="12" style={{marginTop:"2%"}}><Button fullWidth variant='contained' color="success">Add</Button></Grid>
</Grid>

          
        
  </div>;
}

export default AddStudent;
