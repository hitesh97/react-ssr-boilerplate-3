import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';


const app = express();
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: (proxyReqOpts) => {
        proxyReqOpts.headers['x-forwarded-host'] = 'localhost:3000';
        return proxyReqOpts;
    }
}));
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve)
            });
        }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);


        // if there is a replace (redirect) action in context object
        if (context.url) {
            return res.redirect(301, "/");
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });

});

app.listen(3000, () => {
    console.log('Listenong on port 3000');
});
