import React from 'react';
import Reply from './reply';

class Comment extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {this.props.comments.map((item, index) => {
          return (
            <div className="comments" key={index}>
              <div className="comment">
                <div className="commentUserPhoto">
                  <img src={item.profile_photo} alt="random face" />
                </div>
                <div className="commentUserName">{item.name}</div>
                <div className="commentTimeCreated">{item.date}</div>
                <div className="commentUserMessage">{item.message}</div>
              </div>
              <div className="replies">
                <Reply commentId={item.id} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comment;
