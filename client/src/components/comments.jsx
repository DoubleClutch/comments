import axios from 'axios';
import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      comments: [],
    };
  }

  componentWillMount() {
    if (this.props.id !== undefined) {
      this.getComments(this.props.id);
    } else {
      this.getComments(1);
    }
  }

  getComments(productId) {
    if (this.props !== undefined) {
      const fetchUrl = `http://127.0.0.1:3004/comments/${productId}`;

      axios.get(fetchUrl)
        .then((response) => {
          this.storeComments(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  storeComments(data) {
    this.setState({
      status: 'done',
      comments: data,
    });
  }

  render() {
    return (
      <div>
        {this.state.status === 'loading' ? (
          <div>loading</div>
        ) : (
          <Comment comments={this.state.comments} />
        )}
      </div>
    );
  }
}

export default Comments;
