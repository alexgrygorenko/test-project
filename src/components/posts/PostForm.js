import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles(theme => ({
  root: {
    border: '2px solid black',
    margin: '30px 0px'
  }
}));

const PostForm = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography align="center"> Leave Your Post </Typography>
    </Container>
  );
};

export default PostForm;
