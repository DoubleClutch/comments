/*eslint-disable*/
import React from 'react';
import Reply from './reply';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0
    };
  }

  componentWillMount() {
    this.handleShowMore();
  }

  timeDiff(curDate, itemDate) {
    const diffYear = Math.floor(Math.abs(curDate.getFullYear() - itemDate.getFullYear()));
    const diffMonth = Math.floor(Math.abs(curDate.getMonth() - itemDate.getMonth()));
    const diffDay = Math.floor(Math.abs(curDate.getDate() - itemDate.getDate()));
    const diffHour = Math.floor(Math.abs(curDate.getHours() - itemDate.getHours()));
    const diffMin = Math.floor(Math.abs(curDate.getMinutes() - itemDate.getMinutes()));
    let diffMessage = '';

    if (diffYear >= 1) {
      diffMessage = `about ${diffYear} years ago`;
    } else if (diffMonth >= 1 && diffMonth < 12) {
      diffMessage = `about ${diffMonth} months ago`;
    } else if (diffDay >= 1 && diffDay < 30) {
      diffMessage = `about ${diffDay} days ago`;
    } else if (diffHour >= 1 && diffHour < 24) {
      diffMessage = `about ${diffHour} hours ago`;
    } else if (diffMin > 1 && diffMin < 60) {
      diffMessage = `about ${diffMin} minutes ago`;
    }

    return diffMessage;
  }

  handleShowMore() {
    if (this.state.end + 5 > this.props.comments.length) {
      this.setState({
        end: this.props.comments.length
      });
    } else {
      this.setState({
        end: this.state.end + 5
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.slice(this.state.start, this.state.end).map((item, index) => {
          const curDate = new Date();
          const itemDate = new Date(item.date);
          const diffMessage = this.timeDiff(curDate, itemDate);

          if (item.user_role !== '') {
            return (
              <div className="comments" key={index}>
                <div className="comment">
                  <div className="commentUserPhoto">
                    <img src={item.profile_photo} alt="random face" />
                  </div>
                  <div className="commentUserName">{item.name}</div>
                  <div className="commentUserRole">{item.user_role}</div>
                  <div className="commentTimeCreated">{diffMessage}</div>
                  <div className="commentUserMessage">{item.message}</div>
                </div>
                <div className="replies">
                  <Reply commentId={item.id} />
                </div>
              </div>
            );
          } else {
            return (
              <div className="comments" key={index}>
                <div className="comment">
                  <div className="commentUserPhoto">
                    <img src={item.profile_photo} alt="random face" />
                  </div>
                  <div className="commentUserName">{item.name}</div>
                  <div className="commentTimeCreated">{diffMessage}</div>
                  <div className="commentUserMessage">{item.message}</div>
                </div>
                <div className="replies">
                  <Reply commentId={item.id} />
                </div>
              </div>
            );
          }

        })}
        {this.state.end !== this.props.comments.length &&
          <div className="showMore" onClick={this.handleShowMore.bind(this)}>Show more comments</div>
        }
      </div>
    );
  }
}

export default Comment;
