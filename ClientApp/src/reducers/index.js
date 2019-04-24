import { combineReducers } from 'redux';
import leaveReducers from './leaveReducers';
export default combineReducers({
    ...leaveReducers
});