import { ActionType } from './actionType';
import { WorkflowStatus } from './workflowStatus';
import { enqueueNotification, notificationInit } from './notificationAction';
//import '@aspnet/signalr';

export const signalrInit = () => (dispatch) => {
    let connection = window.$SR = new window.signalR.HubConnectionBuilder()
        .withUrl('http://iwids-02/iwowhr_signalr/LeaveSignalr/')
        .build();

    console.log(connection)
    // connection.hub.start().done(function () {
    //     hub.server.joinGameRoom("GroupUser");
    //     console.log(" >> workflowstatus connected ::")
    //     console.log("connected");
    // });
    console.log(">> Signalr Hub :: ");
    //console.log(Hub);



    // let connection = window.$SR = new window.signalR.HubConnectionBuilder()
    //     .withUrl('http://iwids-02/iwowhr_signalr/LeaveSignalr/')
    //     .build();


    window.$SR.start().then(function () {
        console.log(" >> workflowstatus connected");
        window.$SR.invoke("GroupUser", "winteriscoming@got.com").then((e) => {
            console.log(" >> workflowstatus -> GroupUser Invoked")
            console.log(e);
        }).catch(function (err) {
            return console.error(err.toString());
        });
    });




    window.$SR.on('LeaveStatus', (user, data) => {
        console.log(" >> workflowstatus change -> user ::")
        console.log(user);
        console.log(" >> workflowstatus change -> data ::")
        console.log(data);
    });
}

export const workflowStatusChange = (data) => (dispatch) => {

}


