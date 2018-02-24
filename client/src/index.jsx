import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/comments';

import '../dist/css/main.scss';

// ReactDOM.render(<Comments />, document.getElementById('comments'));
// ReactDOM.render(window.Comments, document.getElementById('comments'));
window.Comments = Comments;
