import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


const DashboardBounty = () => {

  const paperStyle={padding:20, width:1090, margin:'40px auto',display:'flex',flexDirection:'column', flexWrap:'wrap'}
  const user = {marginLeft: '90px',marginTop: '30px'}
  const account = {marginLeft: '50px'}
  const body= {marginTop:'15px'}
  const dialogBody= {marginBottom:'15px'}
  const dialogFooter= {display:'flex',justifyContent:'space-between' }
  const urgency = {color: '#7e6df7', fontWeight:'bold'}
  const subContent = { fontWeight:'bold'}
  const content = { fontWeight:'normal'}
  const modalTitle = {display:'flex', justifyContent:'space-between'}
  const modalSubtitle = {display:'flex', justifyContent:'space-between',marginBottom:'20px'}
  const form = { display:'flex',flexWrap:'wrap', justifyContent:'center', alignItems:'center'}
  const actions = {display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 10px'};
  const points = {color: '#F8CC6A', marginLeft:'15px', fontWeight:'bold'}
  const spanPoint = {color: '#F8CC6A'}
  const dialog = {borderRadius:"50px"}
  const btnClaim = {backgroundColor:'#7e6df7',borderRadius: '15px', color:'white', fontWeight:'bold', width:'100px', marginBottom:'10px'}
  const btnCancel = {backgroundColor:'#b5576b',borderRadius: '15px', color:'white', fontWeight:'bold', width:'100px', marginBottom:'10px'}

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const card = {width:'400px',borderRadius: '15px', border:'1px solid gray', boxShadow:' 5px 5px 5px rgba(0,0,0,0.8)', margin:'10px'};

  return (
    <>
      <h3 style={user}>Hello, User! You have <span style={spanPoint}>2908 POINTS</span> </h3>
      <Paper elevation={10} style={paperStyle}>
        <h2 style={account}>Bounty Board</h2> 
        <Grid style={form}> 
          <Card style={card} onClick={handleClickOpen} >
            <CardContent>
              <Typography variant="h5" component="h2">
                BOUNTY TITLE              
              </Typography>
              <Typography>
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
          <Dialog
          open={open}
          style={dialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
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
                <Typography style={subContent}>
                  MAX PARTICIPANTS:<span style={content}> 6</span>
                </Typography>
            </CardContent>
            <div style={dialogFooter}>
              <h3 style={points}>500 PTS</h3>
              <div>
                <DialogActions>
                <Button style={btnCancel} onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button style={btnClaim} onClick={handleClose} color="primary" autoFocus>
                  Claim
                </Button>
                </DialogActions>
              </div>
            </div>
          </Dialog>

        </Grid>
      </Paper>
    </>
  )
}

export default DashboardBounty
