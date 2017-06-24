import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/base.module.css';
import './styles/colors.module.css';
import './styles/queries.module.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
