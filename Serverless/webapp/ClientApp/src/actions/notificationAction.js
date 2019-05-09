
import { ActionType } from './actionType';
import _ from 'lodash';


export const notificationInit = {
    id: '',
    position: {
        vertical: 'bottom',
        horizontal: 'left',
    },
    open: true,
    variant: ['success', 'warning', 'error', 'info'][0],
    message: '',
    data: {},
    priority: 0
}

export const enqueueNotification = (message) => (dispatch, getState) => {
    dispatch({
        type: ActionType.NEW_NOTIFICATION,
        payload: message
    });
}

export const dequeueNotification = (message) => (dispatch, getState) => {
    dispatch({
        type: ActionType.CLEAR_NOTIFICATION,
        payload: message
    })
}

export const notify = (message) => (dispatch, getState) => {
    dispatch({
        type: ActionType.DISPLAY_NOTIFICATION,
        payload: message
    })
}

export const runNotificationService = () => (dispatch, getState) => {
    setInterval(async () => {
        if (getState().notifications.length > 0) {
            console.log(getState().notifications);
            const index = getState().notifications.length - 1;
            const notification = getState().notifications[index];
            await task(() => dispatch(notify(notification)));
            await task(() => dispatch(dequeueNotification(notification)));
            //await task(() => dispatch(notify({ ...notification, open: false })));
            dispatch(notify({ ...notification, open: false }))
        }
    }, 9000);
};

export const task = (callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback();
            resolve();
        }, 4000)
    });
}