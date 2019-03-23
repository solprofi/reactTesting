import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';
import Root from '../Root';
import moxios from 'moxios';


beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'fetch 1' },
      { name: 'fetch 2' },
      { name: 'fetch 3' },
      { name: 'fetch 4' },
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

let wrapped;
it('can fetch a list of comments and display them', (done) => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('#fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(4);
    done();

    wrapped.unmount();
  });
});
