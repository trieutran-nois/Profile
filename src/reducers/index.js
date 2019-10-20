import { combineReducers } from 'redux';

import store from './store';
import setting from './setting';

const appReducers = combineReducers({
    store,
    setting
});

export default appReducers;

