import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'


const EditAccount = () => {
  const paperStyle={padding:20, height: '63vh', width:1090, margin:'20px auto'}
  const user = {marginLeft: '90px'}
  const account = {marginLeft: '50px'}
  const form = { display:'flex', flexDirection: 'column', alignItems:'center'}
  const textField = {marginTop: '20px', borderRadius:'60px', width:'300px'}
  const btn = {marginTop: '20px', backgroundColor:'#7e6df7', color:'white', fontWeight:'bold', width:'300px'}


  return (
    <Grid>
      <h3 style={user}>Hello User! </h3>
      <Paper elevation={10} style={paperStyle}>
      <h2 style={account}>Edit Account</h2> 
      <Grid style={form}> 
        <TextField label="Username" size="small" fullWidth variant='outlined'style={textField} required />
        <TextField label="Email" type='email' size="small" fullWidth variant='outlined' style={textField} required />
        <TextField label="Password" type='password' size="small" fullWidth variant='outlined' style={textField} required />
        <TextField label="Confirm Password" type='password' size="small" fullWidth variant='outlined' style={textField} required />
        <Button type='submit' style={btn} fullWidth variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>SAVE</Button>

      </Grid>
      </Paper>
    </Grid>


  )
}

export default EditAccount
