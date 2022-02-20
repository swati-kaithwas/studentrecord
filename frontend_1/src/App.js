import React from 'react';
import { useEffect } from 'react';
import {Container,AppBar,Typography,Grow,Grid, List} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import  {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import { Navbar } from './components/Navbar';
import {Liste}from './components/List';
const App=()=>{
  const classes=useStyles();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts);
  },[dispatch])
  return (
    <div>
         <Navbar/>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          
          <Typography className={classes.heading} variant='h4' align='center'>Tuition Student Records</Typography>
        
        </AppBar>
        <Grow in>
          <Container>
            <Grid container >
              <Grid item xs={12} sm={7}>
                <Posts/>
                <Liste/>
              </Grid>
              <Grid item xs={12} sm={4}>
             <div div className='x' display="flex" direction="row"><Form/></div>  
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      
    </div>
  );
}

export default App;