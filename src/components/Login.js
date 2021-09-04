import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import GTranslateIcon from '@material-ui/icons/GTranslate';

const Login = () => {
	const paperStyle={padding:20, height: '70vh', width:380, margin:'20px auto'}
	const title = {display: 'flex', justifyContent:'center', marginTop: '35px'}
	const logo = {backgroundColor: '#90c10c', marginRight: "10px"}
	const subtitle = {margin: '20px'}
	const signup = {marginTop: '20px'}
	const textField = {marginTop: '20px'}
	const btn = {marginTop: '20px', backgroundColor:'#7e6df7', color:'white', fontWeight:'bold'}
	const footer = {marginTop: '30px', color:'gray'}
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
					<h4>Log in to RAD Bounty Board</h4>
				</Grid>

				<TextField label="Enter Email" fullWidth required style={textField}/>
				<TextField label="Enter Password" type='password' fullWidth required style={textField}/>
					<Button type='submit' style={btn} fullWidth variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>LOG IN</Button>
						<h6 align='center' style={subtitle}>OR</h6>
						<Button type='submit' fullWidth variant='outlined'  onClick={() => {
							alert("I'm a button.");
						}}><Avatar style={logo}><GTranslateIcon/></Avatar>Use RADMafia Account</Button>
					<Line color="black" />

					<Typography align='center' style={signup}>
						Can't Log In ? * 
						<Link href="#">
							Sign up for an account
						</Link>
					</Typography>
			</Paper>

			<h6 align='center' style={footer}>&copy; RAD Gaming Guild 2021</h6>
		</Grid>

	
    </>
  )
}

export default Login
