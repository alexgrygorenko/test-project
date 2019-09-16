import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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

const PostItem = ({ post: { title, body, id } }) => {
  const classes = useStyles();

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
        <Button size="small" className={classes.update}>
          Update Post
        </Button>
        <Button size="small" className={classes.delete}>
          Delete Post
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;
