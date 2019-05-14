import React, { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

const Home = suspenseContainer(lazy(() => import('./pages/home')));

function suspenseContainer(Component) {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

const routes = (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </HashRouter>
);

export default routes;
