import React from 'react'
import { Grid, Paper, TextField, Button, TextareaAutosize, Container } from '@material-ui/core'


const EditBounty = () => {
  const paperStyle={padding:20, height: '63vh', width:1090, margin:'20px auto'}
  const user = {marginLeft: '90px'}
  const account = {marginLeft: '50px'}
  const form = { display:'flex', flexDirection: 'column', alignItems:'center'}
  const row = { display:'flex', alignItems:'center', justifyContent:'center'}
  const textField = {marginTop: '20px', width:'300px', margin:'10px 10px'}
  const textArea = {marginTop: '20px', width:'590px', padding:'15px'}
  const btn = {marginTop: '20px', backgroundColor:'#7e6df7', color:'white', fontWeight:'bold', width:'300px'}


  return (
    <Grid>
      <h3 style={user}>Hello User! </h3>
      <Paper elevation={10} style={paperStyle}>
      <h2 style={account}>Edit Bounty</h2> 
      <Grid style={form}> 
        <Container style={row}>
          <TextField label="Project" size="small" fullWidth variant='outlined'style={textField} required />
          <TextField label="Bounty Title" type='email' size="small" fullWidth variant='outlined' style={textField} required />
        </Container>
        <Container style={row}>
          <TextField label="Reward Points" size="small" fullWidth variant='outlined'style={textField} required />
          <TextField label="Urgency" type='email' size="small" fullWidth variant='outlined' style={textField} required />
        </Container>
        <Container style={row}>
          <TextField label="Type" size="small" fullWidth variant='outlined'style={textField} required />
          <TextField type='date' size="small" fullWidth variant='outlined' style={textField} required />
        </Container>
        <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Description" style={textArea} fullWidth variant='outlined'/>       
        <Button type='submit' style={btn} fullWidth variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>SAVE</Button>

      </Grid>
      </Paper>
    </Grid>


  )
}

export default EditBounty
