import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
const rootRoute = {
	path: '/',
	component: App,
	childRoutes: [
		require('./routes/Main')
	]
};
render(<Router history={browserHistory}
               routes={rootRoute} />,
	document.getElementById('app'));
