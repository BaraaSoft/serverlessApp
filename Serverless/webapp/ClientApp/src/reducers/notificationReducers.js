import { ActionType, LeaveType } from '../actions';

const notificationInit = {
    id: '',
    position: {
        vertical: 'bottom',
        horizontal: 'left',
    },
    open: false,
    variant: ['success', 'warning', 'error', 'info'][0],
    message: '',
    data: {},
    priority: 0
}

const notificationsReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.NEW_NOTIFICATION:
            return [...state, action.payload];
        case ActionType.CLEAR_NOTIFICATION:
            const notifications = state.filter(x => x.id !== action.payload.id)
            console.log(notifications);
            return notifications;
        default:
            return state;
    }
}

const notificationReducer = (state = notificationInit, action) => {
    switch (action.type) {
        case ActionType.DISPLAY_NOTIFICATION:
            return { ...action.payload };
        default:
            return state;
    }
}


export default {
    notifications: notificationsReducer,
    notification: notificationReducer
}