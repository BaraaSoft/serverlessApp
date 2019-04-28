
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { runNotificationService, notify } from '../actions';
import StatusMessage from './StatusMessage';


class NotificationsHub extends Component {


    componentDidMount() {
        this.props.runNotificationService();
    }

    handleOnClose = () => {
        const { notification, notify } = this.props;
        notify({ ...notification, open: false });
        console.log("notification closed");
    }

    render() {
        const { notification } = this.props;
        return (
            <div>
                <StatusMessage onClose={this.handleOnClose.bind(this)} notification={notification} />
            </div>
        );
    }
}

const mapStateToProps = ({ notification }) => {
    return { notification };
}

export default connect(mapStateToProps, { runNotificationService, notify })(NotificationsHub);