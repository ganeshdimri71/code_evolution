// import { createStore } from 'redux'
import { createStore, applyMiddleware } from 'redux/lib/redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';



const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)))

export default store