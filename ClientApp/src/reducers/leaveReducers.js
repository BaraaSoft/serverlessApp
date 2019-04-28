
import { ActionType, LeaveType } from '../actions';


const LeaveApplyTransInit = {
    leaveDate: null,
    laveType: null,
    leaveReason: ''
}

const LeaveApplyTransactionsReducer = (state = LeaveApplyTransInit, action) => {
    switch (action.type) {
        case ActionType.APPLY_LEAVE:
            return action.payload;
        case ActionType.LEAVE_DATE_CHANGE:
            return { ...state, leaveDate: action.payload };
        case ActionType.LEAVE_TYPE_CHANGE:
            return { ...state, leaveType: action.payload };
        case ActionType.LEAVE_REASON_CHANGE:
            return { ...state, leaveReason: action.payload }
        case ActionType.APPLY_LEAVE_CLEAR:
            return { ...LeaveApplyTransInit };
        default:
            return state;
    }
}

export default {
    leaveApplyTransaction: LeaveApplyTransactionsReducer
}