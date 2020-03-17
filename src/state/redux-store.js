import {applyMiddleware, combineReducers, createStore} from "redux";
import tableReducer from './table-reducer';
import thunkMiddleWare  from "redux-thunk";
import { reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    tablePage: tableReducer,
    form:formReducer
});




let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;