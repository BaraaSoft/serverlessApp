
import { ActionType } from '../actions';


const LeaveTransactionsReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.APPLY_LEAVE:
            return action.payload;
        default:
            return state;
    }
}

export default {
    leaveTransactions: LeaveTransactionsReducer
}