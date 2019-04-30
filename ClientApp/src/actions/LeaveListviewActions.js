import { enqueueNotification, notificationInit } from './notificationAction'
import { LeaveType } from "./leaveType";
import { ActionType } from './actionType';
import LeaveApi from "../http/LeaveApi";

const empId = 'C7214A22-27D0-4AE3-BB9B-58D2BD296D81';


export const fetchLeaves = (page) => (dispatch) => {
    LeaveApi.get(`/${empId}/Leave/Histories`).then((response) => {
        console.log(response);
        dispatch({
            type: ActionType.LEAVE_NEW_LIST,
            payload: response.data
        });
    }).catch(error => {
        console.log(">> fetchLeaves - Error ::");
        console.log(error)
        dispatch(
            enqueueNotification({
                ...notificationInit,
                id: Math.floor(Math.random() * 1000).toString(),
                message: 'Error while loading leave history check your connection',
                variant: 'error',
                priority: 1,
            })
        );
    })
}


{
    // headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Credentials': true,
    //     proxy: {
    //         host: '172.168.11.110',
    //         port: 8080,
    //         auth: {
    //             username: null,
    //             password: null
    //         }
    //     },
    // }
}