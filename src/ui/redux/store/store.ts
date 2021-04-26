import { createStore,applyMiddleware } from 'redux';
import rootReducer from "../reducers/root/rootReducer";
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.__store__ = store;
