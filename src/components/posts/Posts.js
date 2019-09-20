import React, { useEffect } from 'react';
import { getPosts } from '../../actions/postsActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostForm from './PostForm';
import Typography from '@material-ui/core/Typography';

import PostItem from './PostItem';
import Progress from '../layout/Progress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  title: {
    textAlign: 'center'
  }
}));

const Posts = ({
  getPosts,
  post: { posts, loading, isSearch, foundedPosts }
}) => {
  const classes = useStyles();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Progress />
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <PostForm />
      </Grid>
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.title}
        >
          ...or read other posts
        </Typography>
        <Paper className={classes.paper}>
          {!isSearch
            ? posts.map(post => (
                <PostItem key={post.id} post={post} showButtons={true} />
              ))
            : foundedPosts.map(post => (
                <PostItem key={post.id} post={post} showButtons={true} />
              ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
