import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deletePost, setPost } from '../../actions/postsActions';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const PostItem = ({ setPost, deletePost, post: { title, body, id }, post }) => {
  const classes = useStyles();

  const deleteCurPost = () => {
    deletePost(id);
  };
  const setCurrent = () => {
    setPost({ title, body, id });
  };

  return (
    <Card className={classes.card}>
      {/* <CardActionArea> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Button size="small" color="primary">
          See Comments
          {/* <Link to={`/posts/${id}`}>See Comments</Link> */}
        </Button>
        <Button size="small" className={classes.update} onClick={setCurrent}>
          Update Post
        </Button>
        <Button size="small" className={classes.delete} onClick={deleteCurPost}>
          Delete Post
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(
  null,
  { deletePost, setPost }
)(PostItem);
