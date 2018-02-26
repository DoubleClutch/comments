import React from 'react';
import Comments from '../client/src/components/comments';
import Comment from '../client/src/components/comment';


describe('Render test', () => {
  it('Comments should render Comment block', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.find(Comment).exists()).toEqual(true);
  });
});
