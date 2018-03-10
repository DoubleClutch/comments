import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../client/src/components/comments';
import Comment from '../client/src/components/comment';
import SingleComment from '../client/src/components/singleComment';
import Reply from '../client/src/components/reply';

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

describe('Render test in comments component', () => {
  const commentComponent = shallow(<Comment comments={[1, 2, 3, 4, 5, 6]} />);

  it('Should render a Single Comment component', () => {
    expect(commentComponent.find(SingleComment).exists()).toEqual(true);
  });

  it('Should render a Reply component', () => {
    expect(commentComponent.find(Reply).exists()).toEqual(true);
  });

  // it('Should have a handleShowMore function', () => {
  //   expect(commentComponent.find(handleShowMore()).exists()).toEqual(true);
  // });

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
