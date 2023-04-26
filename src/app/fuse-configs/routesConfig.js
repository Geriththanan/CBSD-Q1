import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';
import TimeLineConfig from 'app/main/TimeLine/TimeLineConfig';
import CustomCardConfig from 'app/main/Card/CustomCardConfig';

const routeConfigs = [
  ExampleConfig,
  TimeLineConfig,
  CustomCardConfig,
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/example" />,
  },
  {
    exact: true,
    path: '/timeline',
    component: () => <Redirect to="/timeline" />,
  },
  {
    exact: true,
    path: '/custom-card',
    component: () => <Redirect to="/custom-card" />,
  },
  {
    path: '/loading',
    exact: true,
    component: () => <FuseLoading />,
  },
  {
    path: '/404',
    component: () => <Error404Page />,
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

export default routes;
