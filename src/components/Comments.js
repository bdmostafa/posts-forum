import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container, ListItemIcon } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


// Material UI styles and modifications
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    block: {
        display: 'block',
    },
}));

// Nested destructuring the essential properties of comment object
const Comments = ({ comment: { id, name, email, body } }) => {
    // console.log(id, name, email, body);
    const classes = useStyles();

    // Generate unique images randomly
    const [image, setImage] = useState();
    useEffect(() => {
        setImage(`https://source.unsplash.com/random?${id}`);
    }, [id])

    return (
        <Container>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.block}
                                    color="textPrimary"
                                >
                                    {email}
                                </Typography>
                                {body}
                            </React.Fragment>
                        }
                    />
                    <ListItemIcon >
                        <ShareIcon />
                        <ThumbUpAltIcon />
                    </ListItemIcon>
                </ListItem>



                <Divider />
            </List>
        </Container>
    );
};

export default Comments;