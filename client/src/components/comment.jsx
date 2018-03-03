import React from 'react';
import SingleComment from './singleComment';
import Reply from './reply';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
    };
  }

  componentWillMount() {
    this.handleShowMore();
  }

  handleShowMore() {
    if (this.state.end + 5 > this.props.comments.length) {
      this.setState({
        end: this.props.comments.length,
      });
    } else {
      this.setState({
        end: this.state.end + 5,
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.slice(this.state.start, this.state.end).map((item, index) => {
          return (
            <div className="comments" key={index}>
              <SingleComment comment={item}/>
              <div className="replies">
                <Reply commentId={item.id} />
              </div>
            </div>
          );
        })}
        {this.state.end !== this.props.comments.length &&
          <div className="showMore" onClick={this.handleShowMore.bind(this)}>Show more comments</div>
        }
      </div>
    );
  }
}

export default Comment;
