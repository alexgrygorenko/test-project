import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PostItem from './PostItem';
import { getPost, addComment } from '../../actions/postsActions';
import Progress from '../layout/Progress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
  },
  link: {
    textDecoration: 'none'
  }
}));

const BackLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} />
));

const Post = ({ getPost, addComment, match, post: { loading, post } }) => {
  const classes = useStyles();

  const [comment, setComment] = useState('');

  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  const onChange = e => {
    setComment(e.target.value);
  };

  const clearComment = () => {
    setComment('');
  };

  const addNewComment = () => {
    addComment({
      postId: match.params.id,
      body: comment
    });
  };

  return loading || post === null ? (
    <Progress />
  ) : (
    <Fragment>
      <Button component={BackLink}>
        <ArrowBackIcon fontSize="small" />
        Go back to all posts
      </Button>
      <Container className={classes.container}>
        <PostItem className={classes.post} post={post}></PostItem>
        <TextField
          value={comment}
          onChange={onChange}
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
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={addNewComment}
          >
            Add comment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={clearComment}
          >
            Clear field
          </Button>
        </Container>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost, addComment }
)(Post);
