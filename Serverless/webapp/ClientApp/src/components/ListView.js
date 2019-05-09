import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { fetchLeaves } from '../actions';

import './style/ListView.css'

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 960,
        // overflowY: 'scroll',
        // height: '80vh',
        // paddingLeft: '48px',
        // paddingRight: '48px',
        backgroundColor: theme.palette.background.paper,

    },
    inline: {
        display: 'inline',
        color: '#9e9c9c'
    },
    ListItem: {
        zIndex: '2'
    }
});



class ListView extends Component {


    componentDidMount() {
        this.props.fetchLeaves(0);
    }

    renderList() {
        const { classes, leaveHistory } = this.props;
        return leaveHistory.map(leave => {
            const {
                leaveTransactionNo,
                reason,
                datetimeView,
                leaveTypeView,
                actionStatusView
            } = leave;
            return (
                <div key={leaveTransactionNo} style={{ zIndex: '4' }}>
                    <ListItem alignItems="flex-start" className={classes.ListItem} >
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`Leave No. ${leaveTransactionNo ? leaveTransactionNo : ''} / ${actionStatusView ? actionStatusView : ''} `}
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                        {datetimeView}
                                    </Typography>
                                    {` —  ${leaveTypeView} leave - ${reason}`}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <li>
                        <Divider variant="inset" />
                    </li>
                </div>
            );
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="list-container">
                <div className="list-holder">
                    <List className={classes.root}>
                        {this.renderList()}
                    </List>
                </div>
            </div>
        );
    }
}

ListView.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = ({ leaveHistory }) => {
    return { leaveHistory };
}

export default connect(mapStateToProps, { fetchLeaves })(withStyles(styles)(ListView));