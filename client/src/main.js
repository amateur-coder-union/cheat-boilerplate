import { setConfig } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

setConfig({
  pureRender: true, // RHL will not change render method
});

render(<App />, document.getElementById('root'));
