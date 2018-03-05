import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReplyBlock from './replyBlock';

import '../../dist/css/singleComment.scss';

class SingleComment extends React.Component {
  constructor(props) {
    super();
    this.state = {
      likeStatus: null,
      replyVisibility: false,
    };
  }

  timeDiff(curDate, itemDate) {
    const diffYear = Math.floor(Math.abs(curDate.getFullYear() - itemDate.getFullYear()));
    const diffMonth = Math.floor(Math.abs(curDate.getMonth() - itemDate.getMonth()));
    const diffDay = Math.floor(Math.abs(curDate.getDate() - itemDate.getDate()));
    const diffHour = Math.floor(Math.abs(curDate.getHours() - itemDate.getHours()));
    const diffMin = Math.floor(Math.abs(curDate.getMinutes() - itemDate.getMinutes()));
    let diffMessage = '';

    if (diffYear > 1) {
      diffMessage = `about ${diffYear} years ago`;
    } else if (diffMonth > 1 && diffMonth <= 12) {
      diffMessage = `about ${diffMonth} months ago`;
    } else if (diffDay > 1 && diffDay <= 30) {
      diffMessage = `about ${diffDay} days ago`;
    } else if (diffHour > 1 && diffHour <= 24) {
      diffMessage = `about ${diffHour} hours ago`;
    } else if (diffMin > 1 && diffMin <= 60) {
      diffMessage = `about ${diffMin} minutes ago`;
    }

    return diffMessage;
  }

  toggleLike(status) {
    if (this.state.likeStatus === null) {
      if (status === true) {
        this.setState({
          likeStatus: true,
        });
      } else {
        this.setState({
          likeStatus: false,
        });
      }
    } else {
      this.setState({
        likeStatus: null,
      });
    }
  }

  toggleReply() {
    this.setState({
      replyVisibility: !this.state.replyVisibility,
    });
  }

  render() {
    const curDate = new Date();
    const itemDate = new Date(this.props.comment.date);
    const diffMessage = this.timeDiff(curDate, itemDate);

    return (
      <div className="comments">
        <div className="comment">
          <div className="commentUserPhoto">
            <img src={this.props.comment.profile_photo} alt="random face" />
          </div>
          <div className="commentUserName">{this.props.comment.name}</div>
          {this.props.comment.user_role !== '' &&
            <div className="commentUserRole">{this.props.comment.user_role}</div>
          }
          <div className="commentTimeCreated">{diffMessage}</div>
          <div className="commentUserMessage">{this.props.comment.message}</div>
          {this.state.likeStatus === null &&
            <div>
              <div className="commentLikeButton" onClick={this.toggleLike.bind(this, true)}>
                <div>Like</div>
              </div>
              <div className="commentDislikeButton" onClick={this.toggleLike.bind(this, false)}>
                <div>Dislike</div>
              </div>
            </div>
          }
          {this.state.likeStatus === true &&
            <div>
              <div className="commentLikeButtonClicked" value={true} onClick={this.toggleLike.bind(this, true)}>
                <img className="thumbs" src="./img/thumbsup.png" alt="thumbs" />
                <div className="likeWord">Like</div>
              </div>
              <div className="commentDislikeButton" value={false} onClick={this.toggleLike.bind(this, false)}>
                <div>Dislike</div>
              </div>
            </div>
          }
          {this.state.likeStatus === false &&
            <div>
              <div className="commentLikeButton" value={true} onClick={this.toggleLike.bind(this, true)}>
                <div>Like</div>
              </div>
              <div className="commentDislikeButtonClicked" value={false} onClick={this.toggleLike.bind(this, false)}>
                <img className="thumbs" src="./img/thumbsdown.png" alt="thumbs" />
                <div className="likeWord">Dislike</div>
              </div>
            </div>
          }
          <div className="replyButton" onClick={this.toggleReply.bind(this)}>Reply</div>
          <ReactCSSTransitionGroup
            transitionName="replyTransition"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {this.state.replyVisibility === true &&
              <ReplyBlock />
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default SingleComment;
