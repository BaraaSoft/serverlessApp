
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux';
import {
    LeaveType,
    setFormLeaveDate,
    setFormLeaveType,
    setFormLeaveReason,
    applyLeave,
    enqueueNotification
} from '../actions'
import './style/LeaveApplication.css'

const styles = theme => ({
    grid: {
        width: '100%',
    },
    datePicker: {
        width: '100%'
    },
    formControl: {
        marginTop: '18px',
        margin: theme.spacing.unit,
        minWidth: '100%',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
        marginTop: '44px',
        flexGrow: '1'
    },
    button: {
        marginTop: '58px',
        width: '100%',
    }
});

class LeaveApplication extends Component {
    state = {
        // The first commit of Material-UI
        // selectedDate: new Date('2014-08-18T21:11:54'),
        selectedDate: null,
    };

    handleDateChange(moment) {
        const datetime = moment.toDate();
        this.props.setFormLeaveDate(datetime);
        console.log("Leave:")
        console.log(datetime.toJSON())
    }

    handleLeaveTypeChange(e) {
        this.props.setFormLeaveType(e.target.value);
        console.log(e.target.value)
    }

    handleTextChange(e) {
        this.props.setFormLeaveReason(e.target.value);
    }

    handleSubmit(e) {
        this.props.applyLeave();
        // this.props.enqueueNotification({
        //     id: Math.floor(Math.random() * 1000).toString(),
        //     position: {
        //         vertical: 'bottom',
        //         horizontal: 'left',
        //     },
        //     open: true,
        //     variant: ['success', 'warning', 'error', 'info'][0],
        //     message: 'sucessfully submitted your leave',
        //     data: {}
        // });
        this.props.history.push("/");
    }

    renderLeaveList() {
        return Object.keys(LeaveType).map(x => {
            return (
                <MenuItem value={LeaveType[x]}>{x}</MenuItem>
            );
        });
    }

    render() {
        //let LeaveDate, LeaveType, LeaveReason;
        const { classes,
            leaveApplyTransaction: { leaveDate, leaveType, leaveReason }
        } = this.props;

        const { selectedDate } = this.state;
        return (

            <div className="lv-container">
                <div className="lv-box">
                    <h2 className="lv-title" >Apply Leave Here</h2>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Grid container className={classes.grid} justify="space-around">
                            <DatePicker
                                className={classes.datePicker}
                                margin="normal"
                                label="Select Date"
                                value={leaveDate}
                                onChange={this.handleDateChange.bind(this)}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-controlled-open-select">{leaveType ? '' : 'Leave Type'}</InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={leaveType}
                            onChange={this.handleLeaveTypeChange.bind(this)}
                            inputProps={{
                                name: 'age',
                                id: 'demo-controlled-open-select',
                            }}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {this.renderLeaveList()}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Leave Reason"
                        multiline
                        rowsMax="7"
                        value={leaveReason}
                        onChange={this.handleTextChange.bind(this)}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button onClick={this.handleSubmit.bind(this)} size="large" variant="outlined" color="primary" className={classes.button}>
                        Apply Leave
                   </Button>
                </div>
            </div>
        );
    }
}

LeaveApplication.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps({ leaveApplyTransaction }) {
    return { leaveApplyTransaction }
}


export default connect(mapStateToProps, {
    setFormLeaveDate,
    setFormLeaveType,
    setFormLeaveReason,
    applyLeave,
    enqueueNotification
})(withStyles(styles)(LeaveApplication));