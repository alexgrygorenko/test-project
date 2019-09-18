import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #3f51b5',
    borderRadius: '10px',
    padding: '20px'
  }
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>404. Page Not Found!</Container>
  );
};

export default NotFound;
