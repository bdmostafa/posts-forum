import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

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

    // Process Images
    const [image, setImage] = useState();
    useEffect(() => {
        setImage(`https://source.unsplash.com/random?${id}`);
        // setImage(`https://api.adorable.io/avatars/285/${id}.png`);
    }, [id])

console.log(id)
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
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Container>
    );
};

export default Comments;