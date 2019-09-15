import { GET_POSTS } from './types';
import axios from 'axios';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://simple-blog-api.crew.red/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {}
};
