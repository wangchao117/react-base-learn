import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import registerServiceWorker from './registerServiceWorker';
// 样式重置
import './base/reset.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
