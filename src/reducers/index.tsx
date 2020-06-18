import {loginReducer} from './loginReducer';
import {signupReducer} from './signupReducer';
import {combineReducers} from 'redux';


export const Reducers = combineReducers({
    login: loginReducer,
    signup: signupReducer
})