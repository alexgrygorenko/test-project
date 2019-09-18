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
} from '../../actions/types';

const initialState = {
  posts: [],
  foundedPosts: [],
  current: null,
  isSearch: false,
  loading: true,
  errors: null,
  post: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload.reverse(),
        loading: false
      };
    case SEARCH_POST:
      return {
        ...state,
        foundedPosts: state.posts.filter(
          post =>
            post.title.toLowerCase().includes(payload.toLowerCase()) ||
            post.body.toLowerCase().includes(payload.toLowerCase())
        ),
        isSearch: true,
        loading: false
      };
    case NOT_SEARCHING:
      return {
        ...state,
        isSearch: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case GET_POSTS:
      return {
        ...state,
        current: null,
        loading: false
      };
    case UPDATE_CURRENT:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id !== payload.id ? post : payload
        ),
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    default:
      return state;
  }
};
