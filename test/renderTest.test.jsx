import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../client/src/components/comments';
import Comment from '../client/src/components/comment';
import SingleComment from '../client/src/components/singleComment';
import Reply from '../client/src/components/reply';
import ReplyBlock from '../client/src/components/replyBlock';

describe('Render test in comments component', () => {
  const commentsComponent = shallow(<Comments />);

  it('should render a loading text with a loading status', () => {
    commentsComponent.setState({ status: 'loading' });
    expect(commentsComponent.find('.loading').exists()).toEqual(true);
  });

  it('Should render a Comment component with a done status', () => {
    commentsComponent.setState({ status: 'done' });
    expect(commentsComponent.find(Comment).exists()).toEqual(true);
  });
});

describe('Render test in comment component', () => {
  const commentComponent = shallow(<Comment comments={[1, 2, 3, 4, 5, 6]} />);

  it('Should render a Single Comment component', () => {
    expect(commentComponent.find(SingleComment).exists()).toEqual(true);
  });

  it('Should render a Reply component', () => {
    expect(commentComponent.find(Reply).exists()).toEqual(true);
  });

  const startValue = 0;
  const endValue = 5;
  it('should show more comments block if there are comments that are not shown', () => {
    commentComponent.setState({
      start: startValue,
      end: endValue,
    });
    expect(commentComponent.find('.showMore').exists()).toEqual(true);
  });

  const newEndValue = 6;
  it('should not show more comments block if there are no more comments that can be shown', () => {
    commentComponent.setState({
      end: newEndValue,
    });
    expect(commentComponent.find('.showMore').exists()).toEqual(false);
  });
});

describe('Render test in Single Comment component', () => {
  const data = {
    id: 2,
    name: 'koa',
    user_role: 'superman',
    profile_photo: 'http://imgur.com/v3ocr9F.jpg',
    message: 'I love the quality',
    date: new Date(),
    product_id: 1,
    user_id: 2,
  };
  const singleCommentComponent = shallow(<SingleComment comment={data} />);

  it('Should render a Comment user profile photo', () => {
    expect(singleCommentComponent.find('.commentUserPhoto').exists()).toEqual(true);
  });

  it('Should render a Comment user name', () => {
    expect(singleCommentComponent.find('.commentUserName').exists()).toEqual(true);
  });

  it('Should render a Comment user role if exists', () => {
    expect(singleCommentComponent.find('.commentUserRole').exists()).toEqual(true);
  });

  it('Should render a Comment created time', () => {
    expect(singleCommentComponent.find('.commentTimeCreated').exists()).toEqual(true);
  });

  it('Should render a Comment message', () => {
    expect(singleCommentComponent.find('.commentUserMessage').exists()).toEqual(true);
  });

  it('Should render a Like button', () => {
    expect(singleCommentComponent.find('.commentLikeButton').exists()).toEqual(true);
  });

  it('Should render a Dislike button', () => {
    expect(singleCommentComponent.find('.commentDislikeButton').exists()).toEqual(true);
  });

  it('Should render a Reply button', () => {
    expect(singleCommentComponent.find('.replyButton').exists()).toEqual(true);
  });

  const replyClicked = true;
  it('Should show a Reply block when reply button is clicked', () => {
    singleCommentComponent.setState({ replyVisibility: replyClicked });
    expect(singleCommentComponent.find(ReplyBlock).exists()).toEqual(true);
  });
});

describe('Render test in Reply component', () => {
  const data = {
    id: 1,
    name: 'jest',
    profile_photo: 'http://imgur.com/EMkYAVw.jpg',
    message: 'Great!',
    date: new Date(),
    parentCommentId: 1,
  };
  const replyComponent = shallow(<Reply commentId={data} />);
  replyComponent.setState({
    replies: [data],
  });

  it('Should render a Reply user profile photo', () => {
    expect(replyComponent.find('.replyUserPhoto').exists()).toEqual(true);
  });

  it('Should render a Reply user name', () => {
    expect(replyComponent.find('.replyUserName').exists()).toEqual(true);
  });

  it('Should render a Reply user role if exists', () => {
    expect(replyComponent.find('.replyUserRole').exists()).toEqual(true);
  });

  it('Should render a Reply created time', () => {
    expect(replyComponent.find('.replyTimeCreated').exists()).toEqual(true);
  });

  it('Should render a Reply message', () => {
    expect(replyComponent.find('.replyUserMessage').exists()).toEqual(true);
  });

  it('Should render a Like button', () => {
    expect(replyComponent.find('.commentLikeButton').exists()).toEqual(true);
  });

  it('Should render a Dislike button', () => {
    expect(replyComponent.find('.commentDislikeButton').exists()).toEqual(true);
  });

  it('Should render a Reply button', () => {
    expect(replyComponent.find('.replyButton').exists()).toEqual(true);
  });

  const replyClicked = true;
  it('Should show a Reply block when reply button is clicked', () => {
    replyComponent.setState({ replyVisibility: replyClicked });
    expect(replyComponent.find(ReplyBlock).exists()).toEqual(true);
  });
});

describe('Render test in Reply Block component', () => {
  const replyBlockComponent = shallow(<ReplyBlock />);

  it('Should render a reply block', () => {
    expect(replyBlockComponent.find('.replyBlock').exists()).toEqual(true);
  });

  it('Should render a send button', () => {
    expect(replyBlockComponent.find('button').exists()).toEqual(true);
  });

  it('Should render a textarea', () => {
    expect(replyBlockComponent.find('textarea').exists()).toEqual(true);
  });
});
