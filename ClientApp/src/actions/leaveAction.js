
import LeaveApi from '../http/LeaveApi';
import { ActionType } from './actionType';
import { enqueueNotification } from './notificationAction';

const employeeIdInit = 'C7214A22-27D0-4AE3-BB9B-58D2BD296D81';

const notificationInit = {
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

export const applyLeave = (employeeId = employeeIdInit) => async (dispatch, getState) => {
    LeaveApi
        .post(`/${employeeId}/Leave/Apply`, getState().leaveApplyTransaction)
        .then((response) => {
            dispatch({
                type: ActionType.APPLY_LEAVE,
                payload: response.data
            });

            dispatch(enqueueNotification({
                ...notificationInit,
                data: response.data,
                message: 'Leave application submitted Sucessfully',
                priority: 10,
                id: Math.floor(Math.random() * 1000).toString()
            }))

        }).catch(error => {
            dispatch(enqueueNotification({
                ...notificationInit,
                message: 'Error while processing your request',
                data: error,
                variant: 'error',
                priority: 10,
                id: Math.floor(Math.random() * 1000).toString()
            }))
        });

}

export const setFormLeaveDate = (date) => (dispatch) => {
    dispatch({
        type: ActionType.LEAVE_DATE_CHANGE,
        payload: date
    })
}

export const setFormLeaveType = (leave) => (dispatch) => {
    dispatch({
        type: ActionType.LEAVE_TYPE_CHANGE,
        payload: leave
    })
}

export const setFormLeaveReason = (reason) => (dispatch) => {
    dispatch({
        type: ActionType.LEAVE_REASON_CHANGE,
        payload: reason
    })
}