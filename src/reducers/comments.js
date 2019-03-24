import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';

export default (state = [], { type, payload }) => {
  switch (type) {
  case SAVE_COMMENT:
    return [...state, payload];
  case FETCH_COMMENTS: {
    console.log(payload.data);
    const comments = payload.data.map(comment => comment.name).slice(0, 10);
    return [...state, ...comments];
  }
  default:
    return state;
  }
};
