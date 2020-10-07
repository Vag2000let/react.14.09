import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";
import Message from "../Message";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        margin: 0,
        padding: theme.spacing(4),
        border: '1px solid #333',
        width: '100%',
        borderRadius: 12,
    }
}));

const MessageList = ({ messages } ) => {
    const  classes = useStyles();
    return (
        <Box component="ul" className={classes.list}>
            {messages.map(({id, author, message}) => (
                <Message key={id} author={author} message={message} />
            ))}
        </Box>
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            author: PropTypes.string,
            message: PropTypes.string,
        }),
    ).isRequired,
};

export default MessageList;