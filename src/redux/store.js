import { createStore, applyMiddleware }  from 'redux';
import reduxLogger  from 'redux-logger'
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(reduxLogger)
)

export default store;