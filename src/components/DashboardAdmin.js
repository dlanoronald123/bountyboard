import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  }
});

const DashboardAdmin = () => {
  const paperStyle={padding:20, width:1090, margin:'40px auto',display:'flex',flexWrap:'wrap'}
  const user = {marginLeft: '90px',marginTop: '30px'}
  const account = {marginLeft: '50px'}
  const email = {color: '#F8CC6A'}
  const form = { display:'flex',flexWrap:'wrap', justifyContent:'center', alignItems:'center'}
  const classes = useStyles();
  const actions = {display:'flex', justifyContent:'space-between'};
  const points = {color: '#F8CC6A'}
  const card = {width:'400px',borderRadius: '15px', border:'1px solid gray', boxShadow:' 5px 5px 5px rgba(0,0,0,0.8)', margin:'10px'};
  const content = {display:'flex', flexDirection:'column',flexWrap:'wrap', alignItems:'center', justifyContent:'center',borderRadius: '15px', border:'1px solid gray', boxShadow:' 5px 5px 5px rgba(0,0,0,0.8)', margin:'10px'};
  const btn = {backgroundColor:'#7e6df7',borderRadius: '15px', color:'white', fontWeight:'bold', width:'100px', marginBottom:'10px'}
  const btnLearn = {backgroundColor:'#7e6df7',borderRadius: '15px', color:'white', fontWeight:'bold', width:'130px', marginBottom:'10px'}

  return (
    <>
      <h3 style={user}>Hello Admin ! </h3>
      <Paper elevation={10} style={paperStyle}>
      <h2 style={account}>Users for Approval</h2> 
      <Grid style={form}>   
        <Card style={content}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight='bold'>
              USERNAME
            </Typography>
            <Typography className={classes.pos} style={email}>
              email@radgamingguild.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button type='submit' style={btn} variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>APPROVE</Button>
          </CardActions>
        </Card>

        <Card style={content}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight='bold'>
              USERNAME
            </Typography>
            <Typography className={classes.pos} style={email}>
              email@radgamingguild.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button type='submit' style={btn} variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>APPROVE</Button>
          </CardActions>
        </Card>

        

        <Card style={content}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight='bold'>
              USERNAME
            </Typography>
            <Typography className={classes.pos} style={email}>
              email@radgamingguild.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button type='submit' style={btn} variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>APPROVE</Button>
          </CardActions>
        </Card>

        <Card style={content}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight='bold'>
              USERNAME
            </Typography>
            <Typography className={classes.pos} style={email}>
              email@radgamingguild.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button type='submit' style={btn} variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>APPROVE</Button>
          </CardActions>
        </Card>

        <Card style={content}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight='bold'>
              USERNAME
            </Typography>
            <Typography className={classes.pos} style={email}>
              email@radgamingguild.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button type='submit' style={btn} variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>APPROVE</Button>
          </CardActions>
        </Card>


        <Card style={content}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight='bold'>
              USERNAME
            </Typography>
            <Typography className={classes.pos} style={email}>
              email@radgamingguild.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button type='submit' style={btn} variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>APPROVE</Button>
          </CardActions>
        </Card>


        <Card style={content}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight='bold'>
              USERNAME
            </Typography>
            <Typography className={classes.pos} style={email}>
              email@radgamingguild.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button type='submit' style={btn} variant='contained' onClick={() => {
							alert("I'm a button.");
						}}>APPROVE</Button>
          </CardActions>
        </Card>


      </Grid>
      </Paper>

      <Paper elevation={10} style={paperStyle}>
        <h2 style={account}>Bounty for Approval</h2> 
        <Grid style={form}> 
          <Card style={card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                BOUNTY TITLE              
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                URGENCY
              </Typography>
              <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions style={actions}>
              <h3 style={points}>500 PTS</h3>
              <Button style={btnLearn}>Learn More</Button>
            </CardActions>
          </Card>


          <Card style={card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                BOUNTY TITLE              
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                URGENCY
              </Typography>
              <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions style={actions}>
              <h3 style={points}>500 PTS</h3>
              <Button style={btnLearn}>Learn More</Button>
            </CardActions>
          </Card>

          <Card style={card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                BOUNTY TITLE              
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                URGENCY
              </Typography>
              <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions style={actions}>
              <h3 style={points}>500 PTS</h3>
              <Button style={btnLearn}>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Paper>

    </>



  )
}
export default DashboardAdmin
