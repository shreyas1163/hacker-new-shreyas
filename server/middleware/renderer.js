import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";
import createSagaMiddleware from "redux-saga";
import {StaticRouter} from 'react-router';
import App from '../../src/components/App';
import newsReducer from '../../src/reducers';
import rootSaga from '../../src/sagas';
import { matchRoutes } from 'react-router-config';
import Routes from '../../src/routes';



const path = require("path");
const fs = require("fs");



export default (req, res, next) => {

    var context = [];
    var html = [];
    let promises = [];
    const matchingRoutes = matchRoutes(Routes, req.url);    
    matchingRoutes.forEach(route => {
        if (route.loadData) {
          promises.push(route);
        }
    });
    const sagaMiddleware = createSagaMiddleware();
    const reduxDevTools = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    const store = createStore(newsReducer,compose(applyMiddleware(sagaMiddleware), reduxDevTools));     
    sagaMiddleware.run(rootSaga)
    Promise.all(promises).then( dataArr => {
        // render our app, do something with dataArr, send response
      
      
    // Let's add the data to the context
    context = { dataArr };
   
    // rendering the app as a string 
    html = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}><Provider store={store}><App /></Provider></StaticRouter>);

    })
    // pointing  to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(500).send('Oops, better luck next time!')
        }
        if (context.status === 404) {
            console.log("you are here")
            res.status(404);
          }
        
        // injecting the rendered app into html and sending it   
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
}
