import React from 'react';

import '../../dist/css/replyBlock.scss';

class ReplyBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 2,
    };
  }

  setNewHeight(event) {
    const curHeight = Math.floor((event.target.value.length) / 20);
    if (curHeight > 2 && curHeight !== this.state.height) {
      this.setState({
        height: curHeight,
      });
    }
  }

  render() {
    return (
      <div className="replyBlock">
        <button>Send</button>
        <textarea
          rows={this.state.height}
          placeholder="Reply..."
          onKeyUp={this.setNewHeight.bind(this)}>
        </textarea>
      </div>
    );
  }
}

export default ReplyBlock;
