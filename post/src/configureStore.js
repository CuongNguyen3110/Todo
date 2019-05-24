import rootReducer from './reducer/index';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { connectRoutes } from 'redux-first-router';


const routesMap = {
    'POST_FORM': '/',
    'POSTS': {
        path: '/posts'
    }
}

const { reducer: location, middleware, enhancer } = connectRoutes(routesMap);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer({location}), 
    compose(
        enhancer,
        applyMiddleware(sagaMiddleware, middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

export default store;