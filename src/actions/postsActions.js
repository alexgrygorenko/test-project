import axios from 'axios';
import { GET_POSTS, SEARCH_POST, NOT_SEARCHING } from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://simple-blog-api.crew.red/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    console.log('Error =(');
  }
};

// export const addPost = post => dispatch => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//     const body = JSON.stringify(formData);

//     const res = await axios.post(
//       'https://simple-blog-api.crew.red/posts',
//       body,
//       config
//     );

//     dispatch({
//       type: ADD_POST,
//       payload: res.data
//     });
//   } catch (err) {
//     console.log('Error =(');
//   }
// }

export const searchPost = pattern => dispatch => {
  try {
    dispatch({
      type: SEARCH_POST,
      payload: pattern
    });
  } catch (err) {
    console.log('Error =(');
  }
};

export const notSearching = () => dispatch => {
  try {
    dispatch({
      type: NOT_SEARCHING
    });
  } catch (err) {
    console.log('Error =(');
  }
};
