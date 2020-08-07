import express from 'express';


import serverRenderer from './middleware/renderer';
import Loadable from 'react-loadable';

const PORT = process.env.port||'8080';;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
app.use(router);
router.use('*', serverRenderer);
// start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
       
        console.log("listening on " + PORT + "...");
    });
});
