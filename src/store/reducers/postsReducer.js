import { GET_POSTS } from '../../actions/types';

const initialState = {
  posts: [],
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
    default:
      return state;
  }
};
