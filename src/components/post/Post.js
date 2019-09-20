import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentItem from './CommentItem';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PostItem from '../posts/PostItem';
import { getPost, addComment } from '../../actions/postsActions';
import Progress from '../layout/Progress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2)
  },
  container: {
    margin: theme.spacing(2),
    alignItems: 'center'
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

const Post = ({
  getPost,
  addComment,
  match,
  post: { loading, post, comments }
}) => {
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
      postId: post.id,
      body: comment
    });
    clearComment();
  };

  return loading || post === null ? (
    <Progress />
  ) : (
    <Container className={classes.root}>
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
        <Container className={classes.container}>
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment}></CommentItem>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost, addComment }
)(Post);
