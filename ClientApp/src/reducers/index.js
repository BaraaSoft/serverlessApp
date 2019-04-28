import { combineReducers } from 'redux';
import leaveReducers from './leaveReducers';
import notificationReducers from './notificationReducers'
export default combineReducers({
    ...leaveReducers,
    ...notificationReducers
});