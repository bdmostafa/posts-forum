import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';
import { Container, ListItem, ListItemText, Divider, Button } from '@material-ui/core';

const PostDetail = () => {
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);
    const [like, setLike] = useState(999);
    const [share, setShare] = useState(99);

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

    // Handle like Button
    const increaseLike = () => {
        setLike(like + 1);
    }

    // Handle like Button
    const increaseShare = () => {
        setShare(share + 1);
    }


    return (
        <Container>
            <ListItem>
                <ListItemText primary={title} secondary={body} />
            </ListItem>
            <Button
                variant="contained"
                color="primary"
            >
                {comments.length} Comments &#128516;
            </Button>
            <Button
                variant="contained"
                color="primary"
                style={{marginLeft: '10px'}}
                onClick={increaseLike}
            >
                {like} Likes ❤️
            </Button>
            <Button
                variant="contained"
                color="primary"
                style={{marginLeft: '10px'}}
                onClick={increaseShare}
            >
                {share} Shares 💘
            </Button>
             <br /><br />
            <Divider />
            {
                comments && comments.map(comment => <Comments key={comment.id} comment={comment} ></Comments>)
            }
        </Container>
    );
};

export default PostDetail;