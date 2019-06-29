import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    colorPrimary:"#416788"
  },
  typo:{
    color:"#416788"
  },
  navabarStyle:{
    colorPrimary:"#416788"
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div style={{display:"flex",flexDirection:"column"}}>
         <Typography className={classes.typo} variant="h4"  >
         <Link to = "/"> P2PI Insurance</Link>
          </Typography>
          <div style={{paddingLeft:"50px"}}>
          <Typography variant="subtitle2">
              Everything is better together
          </Typography>
          </div>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}