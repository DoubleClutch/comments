import React from 'react';
import Reply from './reply';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="comments">
        <div className="comment">
          <div className="commentUserPhoto">
            <img src="http://imgur.com/EMkYAVw.jpg" alt="random face" />
          </div>
          <div className="commentUserName">Michael</div>
          <div className="commentTimeCreated">about 15 hours ago</div>
          <div className="commentUserMessage">This Product is good!!!</div>
        </div>
        <div className="replies">
          <Reply />
        </div>
      </div>
    );
  }
}

export default Comment;
