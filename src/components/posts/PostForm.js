import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { addPost, updatePost, clearCurrent } from '../../actions/postsActions';

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

const PostForm = ({ addPost, current, updatePost, clearCurrent }) => {
  const classes = useStyles();
  useEffect(() => {
    if (current !== null) {
      setPost({
        title: current.title,
        body: current.body
      });
    } else {
      setPost({
        title: '',
        body: ''
      });
    }
  }, [current]);

  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const clearAll = () => {
    if (current) clearCurrent();
    setPost({
      title: '',
      body: ''
    });
  };

  const onSubmit = () => {
    if (current) {
      const id = current.id;
      updatePost({ ...post, id });
    } else {
      addPost(post);
    }
    clearAll();
  };

  return (
    <form className={classes.container}>
      <Typography gutterBottom variant="h4" component="h2">
        {!current ? 'Leave your own post' : 'Update existing post'}
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
          onClick={onSubmit}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {current ? 'Update post' : 'Post'}
        </Button>
        <Button
          onClick={clearAll}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          {current ? 'Discard changes' : 'Clear fields'}
        </Button>
      </Container>
    </form>
  );
};

const mapStateToProps = state => ({
  current: state.post.current
});

export default connect(
  mapStateToProps,
  { addPost, updatePost, clearCurrent }
)(PostForm);
