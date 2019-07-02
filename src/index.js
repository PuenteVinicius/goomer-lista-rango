import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Routes from './screens/routes';

import * as serviceWorker from './serviceWorker';

import './index.css';

import store from './store/store'

const outerTheme = createMuiTheme({
  typography: {
    fontFamily:
      '"Montserrat", sans-serif',
  },
});

ReactDOM.render(
<Provider store={store}>
  <ThemeProvider theme={outerTheme}>
    <Routes />
  </ThemeProvider>
</Provider>,
document.getElementById('root'));
serviceWorker.unregister();

