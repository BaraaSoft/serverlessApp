
import LeaveApi from '../http/LeaveApi';
import { ActionType } from './actionType';
import { enqueueNotification } from './notificationAction';
import { fetchLeaves } from './LeaveListviewActions';
import { WorkflowStatus } from './workflowStatus';

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


export const transformDataTo = (leaveTrans, employeeId) => {
    return {
        leaveType: leaveTrans.leaveType,
        applyDate: leaveTrans.leaveDate.toJSON(),
        reason: leaveTrans.leaveReason,
        actionStatus: WorkflowStatus.Pending,
        employeeId
    }
}

export const applyLeave = (employeeId = employeeIdInit) => async (dispatch, getState) => {

    const data = transformDataTo(getState().leaveApplyTransaction)
    LeaveApi
        .post(`/leaves`,
            transformDataTo(getState().leaveApplyTransaction, employeeId)
        ).then(async (response) => {
            await dispatch({
                type: ActionType.APPLY_LEAVE,
                payload: response.data
            });

            await dispatch(enqueueNotification({
                ...notificationInit,
                data: response.data,
                message: 'Leave application submitted Sucessfully',
                priority: 10,
                id: Math.floor(Math.random() * 1000).toString(),
            }))

            await dispatch(clearFormApplyLeave());
            await dispatch(fetchLeaves());
            await setTimeout(() => {
                dispatch(fetchLeaves())
            }, 5000);


        }).catch(error => {
            dispatch(enqueueNotification({
                ...notificationInit,
                message: 'Error while processing your request',
                data: error,
                variant: 'error',
                priority: 9,
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

export const clearFormApplyLeave = () => (dispatch) => {
    dispatch({
        type: ActionType.APPLY_LEAVE_CLEAR,
        payload: null
    });
}