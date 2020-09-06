import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';
import { Container, ListItem, ListItemText, Divider } from '@material-ui/core';

const PostDetail = () => {
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);

    const loadData = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))


        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }

    // useEffect executes when postId is available/changed
    useEffect(loadData, [postId])

    // console.log(comments);

    // Destructing postDetails properties
    const { title, body } = postDetail;

    return (
        <Container>
            <ListItem>
                <ListItemText primary={title} secondary={body} />
            </ListItem>
            <button> {comments.length} Comments</button>
            <Divider />
            {
                comments && comments.map(comment => <Comments key={comment.id} comment={comment} ></Comments>)
            }

        </Container>
    );
};

export default PostDetail;