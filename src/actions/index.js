import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';
import axios from 'axios';

export const saveComment = (payload) => ({
  type: SAVE_COMMENT,
  payload
});

export const fetchComments = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return ({
    type: FETCH_COMMENTS,
    payload: response,
  });
};

export const changeAuth = (payload) => ({
  type: CHANGE_AUTH,
  payload
});
