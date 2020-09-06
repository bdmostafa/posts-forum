import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, Divider, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Material UI styles
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
    },
}));

const Posts = ({ post: { id, title, body } }) => {
    // console.log(id)
    const classes = useStyles();

    return (
        <Container>
            <ListItem>
                <ListItemText primary={title} secondary={body} />
            </ListItem>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Show More</Link>
            </Button>
            <Divider />
        </Container>
    );
};

export default Posts;