import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PostItem from './PostItem';
import { getPost } from '../../actions/postsActions';
import Progress from '../layout/Progress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2),
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Post = ({ getPost, match, post: { loading, post } }) => {
  const classes = useStyles();

  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Progress />
  ) : (
    <Container className={classes.container}>
      <PostItem className={classes.post} post={post}></PostItem>
      <TextField
        value=""
        label="Comment Form"
        placeholder="Leave your comment here!"
        multiline
        fullWidth
        rows="4"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
      <Container className={classes.buttonContainer}>
        <Button variant="contained" color="primary" className={classes.button}>
          Add comment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Clear field
        </Button>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
