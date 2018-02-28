import axios from 'axios';
import React from 'react';

class Reply extends React.Component {
  constructor(props) {
    super();
    this.state = {
      replies: [],
    };
  }

  componentDidMount() {
    this.getReply(this.props.commentId);
  }

  getReply(commentId) {
    const fetchUrl = `http://127.0.0.1:3004/replies/${commentId}`;

    axios.get(fetchUrl)
      .then((response) => {
        this.storeReplies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  storeReplies(data) {
    this.setState({
      replies: data,
    });
  }

  render() {
    return (
      <div>
        {this.state.replies.map((item, index) => {
          return (
            <div className="reply" key={index}>
              <div className="replyUserPhoto">
                <img src={item.profile_photo} alt="random face" />
              </div>
              <div className="replyUserName">{item.name}</div>
              <div className="replyTimeCreated">{item.date}</div>
              <div className="replyUserMessage">{item.message}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Reply;
