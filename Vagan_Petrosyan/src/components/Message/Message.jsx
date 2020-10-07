import React from "react";
import cn from "classnames";
import {Box, makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    messageClass: {
        borderRadius: 4,
        padding: theme.spacing(1),
        color: theme.palette.common.white,
        marginBottom: theme.spacing(1),
    },
    author: {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.light,

    },
    bot: {
        marginRight: 'auto',
        backgroundColor: theme.palette.primary.dark,
    },
}));
const Message = ({ author, message }) => {
    const classes = useStyles();
    return (
        <Box
            component="li"
            className = {cn(classes.messageClass, {
                [classes.author]: author !== 'Bot',
                [classes.bot]: author === 'Bot',
        })}
        >
            <span>{ `${author}: ${message}` }</span>
        </Box>
    );
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}

export default Message;


