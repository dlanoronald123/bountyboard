import React from 'react'
import {Grid, Container } from '@material-ui/core'


const Footer = () => {
  const footer ={backgroundColor:'transparent', color:'gray', marginTop: '50px'}
  return (
    <Grid align='center'>
      <Container position="static" style={footer}>
        <h5>© RAD Gaming Guild 2021</h5>
      </Container>
    </Grid>
  )
}

export default Footer
