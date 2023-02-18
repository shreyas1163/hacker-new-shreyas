import React from 'react'

import NewsList from './components/NewsList'

import NotFound from './containers/NotFoundPageComponent';

let newsListWrapper =(routerProps)=><NewsList {...routerProps} value={routerProps}/>
let newsWrapper=()=><NewsList/>
const myRoutes= [
  {
    path: '/',
    exact: true,
    component: newsWrapper
  },
  {
    path: '/news/:id',
    component: newsListWrapper
  },
  
  {
    component: NotFound
  }
];

export default myRoutes;