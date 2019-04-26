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

import './style/ListView.css'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 560,
        // overflowY: 'scroll',
        // height: '80vh',
        // paddingLeft: '48px',
        // paddingRight: '48px',
        backgroundColor: theme.palette.background.paper,

    },
    inline: {
        display: 'inline',
    },
    ListItem: {
        zIndex: '2'
    }
});



class ListView extends Component {

    renderList() {
        const { classes } = this.props;
        return [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 5, 6, 8, 9, 10, 11, 11, 1, 1].map(x => {
            return (
                <div style={{ zIndex: '4' }}>
                    <ListItem alignItems="flex-start" className={classes.ListItem} >
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                        Ali Connors
                                        </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
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

export default withStyles(styles)(ListView);