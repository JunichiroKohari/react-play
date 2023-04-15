import { Switch, Route } from 'react-router-dom';
import { page1Routes } from './Page1Routes';
import { Home } from '../Home';
import { Page2 } from '../Page2';

export const Router = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
        )}>
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    )
}