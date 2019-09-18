import axios from 'axios';
import {
  GET_POSTS,
  SEARCH_POST,
  NOT_SEARCHING,
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  UPDATE_CURRENT,
  CLEAR_CURRENT,
  GET_POST
} from './types';

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

export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
    );
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    console.log('Error =(');
  }
};

export const deletePost = postID => async dispatch => {
  try {
    await axios.delete(`https://simple-blog-api.crew.red/posts/${postID}`);
    dispatch({
      type: DELETE_POST,
      payload: postID
    });
  } catch (err) {
    console.log('Error =(');
  }
};

export const addPost = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(formData);

    const res = await axios.post(
      'https://simple-blog-api.crew.red/posts',
      body,
      config
    );

    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (err) {
    console.log('Error =(');
  }
};

export const updatePost = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(formData);

    const res = await axios.put(
      `https://simple-blog-api.crew.red/posts/${formData.id}`,
      body,
      config
    );
    dispatch({
      type: UPDATE_CURRENT,
      payload: res.data
    });
  } catch (err) {
    console.log('Error =(');
  }
};

export const setPost = post => dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: post
  });
};

export const clearCurrent = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENT
  });
};

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
