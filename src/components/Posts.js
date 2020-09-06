import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, Divider, Container } from '@material-ui/core';

const Posts = ({ post: { id, title, body } }) => {
    // console.log(id)
    return (
        <Container>
            <ListItem>
                    <ListItemText primary={title} secondary={body} />
                </ListItem>
                <Link to={`/post/${id}`}>Show More</Link>
                <Divider />
        </Container>
    );
};

export default Posts;