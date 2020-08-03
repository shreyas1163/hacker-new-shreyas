import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";
import createSagaMiddleware from "redux-saga";

import App from '../../src/components/App';
import newsReducer from '../../src/reducers';
import rootSaga from '../../src/sagas';

const path = require("path");
const fs = require("fs");



export default (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        const sagaMiddleware = createSagaMiddleware();

        const reduxDevTools = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

        const store = createStore(newsReducer,compose(applyMiddleware(sagaMiddleware), reduxDevTools));
        
        sagaMiddleware.run(rootSaga)
        
        // render the app as a string
        const html = ReactDOMServer.renderToString(<Provider store={store}><App /></Provider>);

        // inject the rendered app into our html and send it   
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
}