import { combineReducers } from 'redux';
import leaveReducers from './leaveReducers';
import notificationReducers from './notificationReducers';
import leaveListviewReducers from './LeaveListviewReducers';
export default combineReducers({
    ...leaveReducers,
    ...notificationReducers,
    ...leaveListviewReducers
});