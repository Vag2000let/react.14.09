import React from "react";
import Header from "../Header";
import ChatList from "../ChatList";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {Container} from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: theme.spacing(9),
    },
});

const Layout = ({children, classes}) => {
    return (
        <div className={classes.root}>
            <Header />
            <ChatList />
            <Container maxWidth="md" classes={{root: classes.container}}>
                {children}
            </Container>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
    classes: PropTypes.shape({
        root: PropTypes.string,
        container: PropTypes.string,
    }).isRequired,
};

export default withStyles(styles)(Layout);
