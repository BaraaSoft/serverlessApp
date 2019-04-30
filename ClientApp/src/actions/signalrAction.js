import { ActionType } from './actionType';
import { WorkflowStatus } from './workflowStatus';
import { enqueueNotification, notificationInit } from './notificationAction';
import { fetchLeaves } from './LeaveListviewActions';

//import '@aspnet/signalr';

export const signalrInit = () => (dispatch) => {
    let connection = window.$SR = new window.signalR.HubConnectionBuilder()
        .withUrl('http://iwids-02/iwowhr_signalr/LeaveSignalr/')
        .build();

    dispatch(startSignalrConnection(connection));

    connection.on('LeaveStatus', async (data) => {
        const leaveNo = data.leaveTransactionNo;
        const status = Object.keys(WorkflowStatus).find(x => {
            return WorkflowStatus[x] === data.actionStatus;
        })
        const message = `Leave application No. ${leaveNo} is ${status}`
        await dispatch(enqueueNotification({
            ...notificationInit,
            message: message,
            data: data,
            variant: 'info',
            priority: 1,
            id: Math.floor(Math.random() * 1000).toString()
        }))

        await dispatch(fetchLeaves(0));
    });
}


export const startSignalrConnection = (connection) => (dispatch) => {
    connection.start().then(function () {
        console.log(" >> workflowstatus -> connected");
        dispatch(subscribeByEmail(connection));
    }).catch((error) => {
        setTimeout(() => {
            dispatch(startSignalrConnection(connection));
        }, 10000);
    });
}

export const subscribeByEmail = (connection) => (dispatch) => {
    connection.invoke("GroupUser", "winteriscoming@got.com").then((e) => {
        console.log(" >> workflowstatus -> GroupUser Invoked")
    }).catch(function (err) {
        return console.error(err.toString());
    });
}


