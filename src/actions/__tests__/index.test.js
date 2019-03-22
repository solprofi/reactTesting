import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('saveComment', () => {
  it('should have a correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('should have a correct payload', () => {
    const action = saveComment('payload');
    expect(action.payload).toEqual('payload');
  });
});
