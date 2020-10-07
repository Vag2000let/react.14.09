import React from "react";
import Drawer from '@material-ui/core/Drawer';
import cn from 'classnames';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from '@material-ui/icons/Assignment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {NavLink, Link} from "react-router-dom";
import mockChats from "./mockChats";

const useStyles = makeStyles(theme => ({
        drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        },
        toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        },
        secondList: {
            marginTop: 'auto',
        },
        active: {
            textDecoration: 'none',
        },
    }
));

const ChatList = () => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: cn(classes.drawerPaper),
            }}
            open
        >
            <div className={classes.toolbarIcon}>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {mockChats.map(({id, name}) => (
                    <NavLink key={id} to={`/chats/${id}`} activeClassName={classes.active}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    </NavLink>
                    ))}
            </List>
            <Divider className={classes.secondList} />
            <List>
                <ListSubheader inset>Saved reports</ListSubheader>
                <Link to="/about">
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
};

export default ChatList;
