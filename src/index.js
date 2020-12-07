import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ClickCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
