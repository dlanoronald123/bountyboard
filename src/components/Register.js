import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import GTranslateIcon from '@material-ui/icons/GTranslate';

const Register = () => {
	const paperStyle={padding:20, height: '80vh', width:380, margin:'20px auto'}
	const title = {display: 'flex', justifyContent:'center', marginTop: '35px'}
	const logo = {backgroundColor: '#90c10c', marginRight: "10px"}
	const subtitle = {margin: '20px'}
	const signup = {marginTop: '20px'}
	const textField = {marginTop: '5px'}
	const btn = {marginTop: '20px', backgroundColor:'#7e6df7', color:'white', fontWeight:'bold'}
	const footer = {marginTop: '40px', color:'gray'}
	const Line = ({ color }) => (
    <hr
        style={{
					  marginTop: 30,
						marginBottom: 30,
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

  return (
    <>
		<Grid>
    <h1 style={title}><Avatar style={logo}><MonetizationOnIcon/></Avatar>  Bounty Board</h1>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<h3 stye={subtitle}>Sign up for an acount</h3>
				</Grid>

				<TextField label="Enter Email" fullWidth required style={textField}/>
        <TextField label="Enter Username" fullWidth required style={textField}/>
				<TextField label="Enter Password" type='password' fullWidth required style={textField}/>
        <TextField label="Confirm Password" type='password' fullWidth required style={textField}/>
					<Button type='submit' style={btn} fullWidth variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>SIGN UP</Button>
						<h4 align='center' style={subtitle}>OR</h4>
						<Button type='submit' fullWidth variant='outlined'  onClick={() => {
							alert("I'm a button.");
						}}><Avatar style={logo}><GTranslateIcon/></Avatar>Use RADMafia Account</Button>
					<Line color="black" />

					<Typography align='center' style={signup}>
						Already have an account?
						<Link href="#">
							 Log In
						</Link>
					</Typography>
			</Paper>

			<h6 align='center' style={footer}>&copy; RAD Gaming Guild 2021</h6>
		</Grid>

	
    </>
  )
}

export default Register
