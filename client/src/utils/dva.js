import React from 'react';
import { create } from 'dva-core';
import { Provider, connect } from 'react-redux';

export { connect };

export default function(options) {
  const app = create(options);

  options.models.forEach((model) => app.model(model));

  app.start();
  // eslint-disable-next-line no-underscore-dangle
  const store = app._store;

  app.start = (container) => () => (
    <Provider store={store}>{container}</Provider>
  );
  app.getStore = () => store;

  return app;
}
