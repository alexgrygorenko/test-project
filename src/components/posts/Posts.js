import React, { useEffect, Fragment } from 'react';
import { getPosts } from '../../actions/postsActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostForm from './PostForm';

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
        <Paper className={classes.paper}>
          <PostForm></PostForm>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {!isSearch
            ? posts.map(post => <PostItem key={post.id} post={post} />)
            : foundedPosts.map(post => <PostItem key={post.id} post={post} />)}
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
