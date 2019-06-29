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

         <Typography className={classes.typo} variant="h4"  >
            P2PI Insurance
          </Typography>
          <Typography variant="subtitle2">
              Everything is better together
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}