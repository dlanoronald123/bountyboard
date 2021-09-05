import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Avatar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


const Navbar = () => {
  const logo = {backgroundColor: '#90c10c', marginRight: "10px", marginLeft: "60px"}
  const logout = {marginRight: "80px"}
  const nav = {backgroundColor: '#7e6df7'}
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={nav}>
        <Toolbar>
        <Avatar style={logo}><MonetizationOnIcon/></Avatar>
          <Typography variant="h6" className={classes.title}>
            BOUNTY BOARD
          </Typography>
          <Button color="inherit" style={logout}>LOG OUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
