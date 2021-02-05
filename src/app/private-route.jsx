import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, auth, inRole, ...rest}) => {
  return (
    <Route {...rest} render={() => auth ? <Component /> :
     <Redirect to="/" />
    } />
  );
};

export default PrivateRoute;