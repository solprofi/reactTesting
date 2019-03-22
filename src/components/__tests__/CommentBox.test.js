import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('should render a text area and a button', () => {
  expect(wrapped.find('textarea').length).toBe(1);
  expect(wrapped.find('button').length).toBe(1);
});

