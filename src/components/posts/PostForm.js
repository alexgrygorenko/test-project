import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(2)
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

const PostForm = () => {
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

  const consolePost = () => {
    console.log(post);
    clearFields();
  };

  return (
    <form className={classes.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Leave Your Own Post
      </Typography>
      <TextField
        name="title"
        value={post.title}
        onChange={onChange}
        label="Title"
        placeholder="Your Post Title"
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
          onClick={consolePost}
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

export default PostForm;
