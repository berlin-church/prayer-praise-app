import { ComponentClass } from 'react';

import { AuthCallback } from '../containers/AuthCallback';
import EditMessage from '../containers/EditMessage';
import Me from '../containers/Me';
import Praise from '../containers/Praise';
import Prayer from '../containers/Prayer';
import Root from '../containers/Root';

interface IRouteDefinition {
  exact: boolean;
  path: string;
  component: ComponentClass<any>;
}

interface IRoutes {
  [propName: string]: IRouteDefinition;
}

const routes: IRoutes = {
  authCallback: {
    component: AuthCallback,
    exact: true,
    path: '/authCallback'
  },
  base: {
    component: Root,
    exact: true,
    path: '/'
  },
  editMessage: {
    component: EditMessage,
    exact: true,
    path: '/edit/messages/:id'
  },
  me: {
    component: Me,
    exact: true,
    path: '/me'
  },
  praise: {
    component: Praise,
    exact: true,
    path: '/praise'
  },
  prayer: {
    component: Prayer,
    exact: true,
    path: '/prayer'
  }
};

export default routes;
