import React from 'react';
import ReactDOM from 'react-dom';
// set up import App container
import App from './components/App';

// mock server for offline use
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
