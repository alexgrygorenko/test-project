import { GET_POSTS, SEARCH_POST, NOT_SEARCHING } from '../../actions/types';

const initialState = {
  posts: [],
  foundedPosts: [],
  isSearch: false,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
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
    default:
      return state;
  }
};
