
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
import { LeaveType } from '../actions'
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
        marginTop: '44px'
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
        console.log("Leave:")
        console.log(datetime.toJSON())
    }

    handleLeaveTypeChange(e) {
        console.log(e.target.value)
    }

    handleTextChange(e) {

    }

    renderLeaveList() {
        return Object.keys(LeaveType).map(x => {
            return (
                <MenuItem value={LeaveType[x]}>{x}</MenuItem>
            );
        });
    }

    render() {
        const { classes } = this.props;
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
                                value={selectedDate}
                                onChange={this.handleDateChange}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.age}
                            onChange={this.handleLeaveTypeChange}
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
                        value={this.state.multiline}
                        onChange={this.handleTextChange}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button size="large" variant="outlined" color="primary" className={classes.button}>
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


export default withStyles(styles)(LeaveApplication);