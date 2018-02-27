import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../client/src/components/comments';
import Comment from '../client/src/components/comment';
import Reply from '../client/src/components/reply';

describe('Render test', () => {
  it('Comments component should render a Comment component', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.find(Comment).exists()).toEqual(true);
  });

  it('Comment component should render comment user profile photo', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('Comment component should render comment user name', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('.commentUserName')).toHaveLength(1);
  });

  it('Comment component should render comment user message', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('.commentUserMessage')).toHaveLength(1);
  });

  it('Comment component should render a Reply component', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find(Reply).exists()).toEqual(true);
  });

  it('Reply component should render reply user profile photo', () => {
    const wrapper = shallow(<Reply />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('Reply component should render reply user name', () => {
    const wrapper = shallow(<Reply />);
    expect(wrapper.find('.replyUserName')).toHaveLength(1);
  });

  it('Reply component should render reply user message', () => {
    const wrapper = shallow(<Reply />);
    expect(wrapper.find('.replyUserMessage')).toHaveLength(1);
  });
});
