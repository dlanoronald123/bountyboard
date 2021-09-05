import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const DashboardHunter = () => {

  const paperStyle={padding:20, width:1090, margin:'40px auto',display:'flex',flexDirection:'column', flexWrap:'wrap'}
  const paperStyleApproval={padding:20, width:500, margin:'20px auto',display:'flex',flexDirection:'column', flexWrap:'wrap'}
  const paperContainer= {display:'flex', justifyContent:'center'}
  const user = {marginLeft: '90px',marginTop: '30px'}
  const account = {marginLeft: '50px'}
  const body= {marginTop:'15px'}
  const dialogBody= {marginBottom:'15px'}
  const urgency = {color: '#7e6df7', fontWeight:'bold'}
  const subContent = { fontWeight:'bold'}
  const content = { fontWeight:'normal'}
  const modalTitle = {display:'flex', justifyContent:'space-between'}
  const modalSubtitle = {display:'flex', justifyContent:'space-between',marginBottom:'20px'}
  const form = { display:'flex',flexWrap:'wrap', justifyContent:'center', alignItems:'center'}
  const card= { display:'flex',flexWrap:'wrap', justifyContent:'center', alignItems:'center', width:'800px', border:'1px solid gray', boxShadow:' 5px 5px 5px rgba(0,0,0,0.8)', marginBottom:'30px'}
  const historyCard = {width:'400px',borderRadius: '15px', border:'1px solid gray', boxShadow:' 5px 5px 5px rgba(0,0,0,0.8)', margin:'10px'};
  const actions = {display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 10px'};
  const points = {color: '#F8CC6A', marginTop:'20px', fontWeight:'bold'}
  const spanPoint = {color: '#F8CC6A'}

  return (
    <>
      <h3 style={user}>Hello, User! You have <span style={spanPoint}>2908 POINTS</span> </h3>
      <Paper elevation={10} style={paperStyle}>
        <h2 style={account}>Dashboard</h2> 
        <Grid style={form}> 
          <Card style={card}>
          <CardContent>
              <div style={modalTitle}>
                <Typography variant="h5" component="h2">
                  BOUNTY TITLE              
                </Typography>
                <Typography variant="h5" component="h2">
                  PROJECT             
                </Typography>
              </div>
              <div style={modalSubtitle}>
                <Typography style={urgency}>
                  URGENCY
                </Typography>
                <Typography color="textSecondary">
                  BOUNTY TYPE
                </Typography>
              </div>
              <Typography variant="body2" component="p" style={dialogBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
              </Typography>
                <Typography style={subContent}>
                  STATUS:<span style={content}> For Claiming</span>
                </Typography>
                <Typography style={subContent}>
                  DEADLINE:<span style={content}> September 6, 2021</span>
                </Typography>
                <Typography style={points}>
                  600 POINTS
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Paper>

      <Paper elevation={10} style={paperStyle}>
        <h2 style={account}>History</h2> 
        <Grid style={form}> 

          <Card style={historyCard} >
            <CardContent>
              <Typography variant="h5" component="h2">
                BOUNTY TITLE              
              </Typography>
              <Typography style={urgency}>
              DATE FINISHED: September 6, 2021
              </Typography>
              <Typography variant="body2" component="p" style={body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
              </Typography>
            </CardContent>
            <CardActions style={actions}>
                <h3 style={points}>500 PTS</h3>
                <Typography variant="h6" component="h2">
                  BOUNTY TYPE              
                </Typography>             
            </CardActions>
          </Card>

          <Card style={historyCard} >
            <CardContent>
              <Typography variant="h5" component="h2">
                BOUNTY TITLE              
              </Typography>
              <Typography style={urgency}>
              DATE FINISHED: September 6, 2021
              </Typography>
              <Typography variant="body2" component="p" style={body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
              </Typography>
            </CardContent>
            <CardActions style={actions}>
                <h3 style={points}>500 PTS</h3>
                <Typography variant="h6" component="h2">
                  BOUNTY TYPE              
                </Typography>             
            </CardActions>
          </Card>

          <Card style={historyCard} >
            <CardContent>
              <Typography variant="h5" component="h2">
                BOUNTY TITLE              
              </Typography>
              <Typography style={urgency}>
              DATE FINISHED: September 6, 2021
              </Typography>
              <Typography variant="body2" component="p" style={body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
              </Typography>
            </CardContent>
            <CardActions style={actions}>
                <h3 style={points}>500 PTS</h3>
                <Typography variant="h6" component="h2">
                  BOUNTY TYPE              
                </Typography>             
            </CardActions>
          </Card>
        </Grid>
      </Paper>
      <div style={paperContainer}>
        <Paper elevation={10} style={paperStyleApproval}>
          <h2 style={account}>For Approval</h2> 
          <Grid style={form}> 

            <Card style={historyCard} >
              <CardContent>
                <Typography variant="h5" component="h2">
                  BOUNTY TITLE              
                </Typography>
                <Typography style={urgency}>
                URGENCY
                </Typography>
                <Typography variant="body2" component="p" style={body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
                </Typography>
              </CardContent>
              <CardActions style={actions}>
                  <h3 style={points}>500 PTS</h3>
                  <Typography variant="h6" component="h2">
                    BOUNTY TYPE              
                  </Typography>             
              </CardActions>
            </Card>

            <Card style={historyCard} >
              <CardContent>
                <Typography variant="h5" component="h2">
                  BOUNTY TITLE              
                </Typography>
                <Typography style={urgency}>
                URGENCY
                </Typography>
                <Typography variant="body2" component="p" style={body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
                </Typography>
              </CardContent>
              <CardActions style={actions}>
                  <h3 style={points}>500 PTS</h3>
                  <Typography variant="h6" component="h2">
                    BOUNTY TYPE              
                  </Typography>             
              </CardActions>
            </Card>
          </Grid>
        </Paper>

        <Paper elevation={10} style={paperStyleApproval}>
          <h2 style={account}>Approved</h2> 
          <Grid style={form}> 

            <Card style={historyCard} >
              <CardContent>
                <Typography variant="h5" component="h2">
                  BOUNTY TITLE              
                </Typography>
                <Typography style={urgency}>
                URGENCY
                </Typography>
                <Typography variant="body2" component="p" style={body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
                </Typography>
              </CardContent>
              <CardActions style={actions}>
                  <h3 style={points}>500 PTS</h3>
                  <Typography variant="h6" component="h2">
                    BOUNTY TYPE              
                  </Typography>             
              </CardActions>
            </Card>

            <Card style={historyCard} >
              <CardContent>
                <Typography variant="h5" component="h2">
                  BOUNTY TITLE              
                </Typography>
                <Typography style={urgency}>
                URGENCY
                </Typography>
                <Typography variant="body2" component="p" style={body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus ante. Nullam et iaculis leo, sed dictum mi. Quisque a libero ex. Curabitur ut sodales quam, sed tempor odio. Nunc non nisi sed justo eleifend facilisis.
                </Typography>
              </CardContent>
              <CardActions style={actions}>
                  <h3 style={points}>500 PTS</h3>
                  <Typography variant="h6" component="h2">
                    BOUNTY TYPE              
                  </Typography>             
              </CardActions>
            </Card>
          </Grid>
        </Paper>
      </div>
    </>
  )
}

export default DashboardHunter
