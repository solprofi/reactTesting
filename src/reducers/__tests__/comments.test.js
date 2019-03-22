import { SAVE_COMMENT } from '../../actions/types';
import commentsReducer from '../comments';

it('should handle actions of type SAVE_COMMENT', () => {
  const comment = 'new comment';

  expect(commentsReducer([], {
    type: SAVE_COMMENT,
    payload: comment,
  })).toEqual([comment]);
});

it('should handle action with unknown type', () => {
  expect(commentsReducer([], {})).toEqual([]);
});
