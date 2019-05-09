import { ActionType, LeaveType, WorkflowStatus } from '../actions';
import moment from 'moment';
import _ from 'lodash';

export const leaveHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.LEAVE_NEW_LIST:
            const leavesList = _.chain([...action.payload, ...state])
                .uniqBy('id')
                .map((item) => {
                    const timestamp = moment(item.applyDate).unix();
                    const datetimeView = moment(item.applyDate).format('Do MMMM YYYY');
                    const leaveTypeView = Object.keys(LeaveType).find((x) => {
                        return LeaveType[x] === item.leaveType
                    })
                    const actionStatusView = Object.keys(WorkflowStatus).find((x) => {
                        return WorkflowStatus[x] === item.actionStatus
                    })
                    return { ...item, timestamp, datetimeView, leaveTypeView, actionStatusView }
                })
                .orderBy('timestamp', 'desc').value();
            return [...leavesList];
        default:
            return state;
    }
}

export default {
    leaveHistory: leaveHistoryReducer
}