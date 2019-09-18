import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { addPost } from '../../actions/postsActions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(2),
    border: '2px solid #3f51b5',
    borderRadius: '10px',
    padding: '20px'
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

const PostForm = ({ addPost }) => {
  const classes = useStyles();

  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const clearFields = () => {
    setPost({
      title: '',
      body: ''
    });
  };

  const addNewPost = () => {
    addPost(post);
    clearFields();
  };

  return (
    <form className={classes.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Leave your own post
      </Typography>
      <TextField
        name="title"
        value={post.title}
        onChange={onChange}
        label="Title"
        placeholder="Your post title"
        fullWidth
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        name="body"
        onChange={onChange}
        value={post.body}
        label="Content"
        multiline
        fullWidth
        rows="4"
        placeholder="Tell something cool =)"
        className={classes.textField}
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true
        }}
      />
      <Container className={classes.buttonContainer}>
        <Button
          onClick={addNewPost}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Post
        </Button>
        <Button
          onClick={clearFields}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Clear fields
        </Button>
      </Container>
    </form>
  );
};

export default connect(
  null,
  { addPost }
)(PostForm);
