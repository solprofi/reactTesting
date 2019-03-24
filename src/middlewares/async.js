export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  } else {
    action.payload.then((response) => {
      const newData = {
        ...action,
        payload: response,
      };

      dispatch(newData);
    });
  }
};