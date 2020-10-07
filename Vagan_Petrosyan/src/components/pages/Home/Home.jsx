import React from 'react';
import {Container} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Container maxWidth="md">
            <h1>Home Page</h1>
            <List>
                <Link to="/about">
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="About Page" />
                    </ListItem>
                </Link>
                <Link to="/chats">
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 2" />
                    </ListItem>
                </Link>
            </List>
        </Container>
    );
};

export default Home;