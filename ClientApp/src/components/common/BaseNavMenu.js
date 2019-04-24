import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        color: '#3f51b5',
        fontSize: '26px',
        fontWeight: '400',
        letterSpacing: '10px',
        textTransform: 'capitalize'
    },
    button: {
        margin: theme.spacing.unit,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

});



class BaseNavMenu extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Link className={classes.grow} to='/'>
                            <Typography color="red" variant="h6" className={classes.grow}>
                                LEAVE APP
                            </Typography>
                        </Link>
                        <div>
                            <Link className={classes.link} to='/applyleave'>
                                <Button size="large" variant="outlined" color="primary" className={classes.button}>
                                    Apply Leave
                                </Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


BaseNavMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseNavMenu);