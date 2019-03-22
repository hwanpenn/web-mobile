import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__index__index" */'../index/index'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
        "title": "首页",
        "exact": true,
        "Routes": [require('./TitleWrapper.jsx').default],
        "_title": "首页",
        "_title_default": "商城"
      },
      {
        "path": "/category",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__category__model.js' */'/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/pages/category/model.js').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__category__index" */'../category/index'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
        "title": "分类",
        "exact": true,
        "Routes": [require('./TitleWrapper.jsx').default],
        "_title": "分类",
        "_title_default": "商城"
      },
      {
        "path": "/test",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__test__index" */'../test/index'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
        "title": "测试页面",
        "exact": true,
        "Routes": [require('./TitleWrapper.jsx').default],
        "_title": "测试页面",
        "_title_default": "商城"
      },
      {
        "path": "/exception",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__ExceptionLayout" */'../../layouts/ExceptionLayout'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
        "routes": [
          {
            "path": "/exception/403",
            "title": "无权限",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__ExceptionLayout" */'../exception/403'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
            "exact": true,
            "Routes": [require('./TitleWrapper.jsx').default],
            "_title": "无权限",
            "_title_default": "商城"
          },
          {
            "path": "/exception/500",
            "title": "服务器出错了",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__ExceptionLayout" */'../exception/500'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
            "exact": true,
            "Routes": [require('./TitleWrapper.jsx').default],
            "_title": "服务器出错了",
            "_title_default": "商城"
          },
          {
            "component": () => React.createElement(require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "商城",
            "_title_default": "商城"
          }
        ],
        "_title": "商城",
        "_title_default": "商城"
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/src/components/PageLoading/index').default,
}),
        "title": "页面没找到",
        "exact": true,
        "Routes": [require('./TitleWrapper.jsx').default],
        "_title": "页面没找到",
        "_title_default": "商城"
      },
      {
        "component": () => React.createElement(require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
        "_title": "商城",
        "_title_default": "商城"
      }
    ],
    "_title": "商城",
    "_title_default": "商城"
  },
  {
    "component": () => React.createElement(require('/Users/hwanpenn/Downloads/hwanpenn/58Australia/10week/10week-h5/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
    "_title": "商城",
    "_title_default": "商城"
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
