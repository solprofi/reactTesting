import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render a text area and a button', () => {
  expect(wrapped.find('textarea').length).toBe(1);
  expect(wrapped.find('button').length).toBe(1);
});

describe('the text area', () => {
  let value;
  beforeEach(() => {
    value = 'new comment';
    wrapped.find('textarea').simulate('change', {
      target: {
        value,
        name: 'comment'
      }
    });
    wrapped.update();
  });

  it('should allow user to write in the textarea', () => {
    expect(wrapped.find('textarea').prop('value')).toBe(value);
  });

  it('should clear the textarea after the form is submitted', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toBe('');
  });
});




