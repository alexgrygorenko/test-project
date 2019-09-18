import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 350,
    margin: '30px 0px',
    backgroundColor: '#f5f5f5'
  },
  media: {
    height: 200
  },
  update: {
    color: '#00a152'
  },
  delete: {
    color: '#f50057'
  }
});

const Post = () => {
  return <div>Hello, I`m a post!</div>;
};

export default Post;
