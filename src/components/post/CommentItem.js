import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const CommentItem = props => {
  const classes = useStyles();

  const { comment } = props;
  return (
    <List
      component="nav"
      className={classes.root}
      aria-label="contacts"
      key={comment.id}
    >
      <ListItem>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary={comment.body} />
      </ListItem>
    </List>
  );
};

export default CommentItem;
