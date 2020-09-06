import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';
import { Container, ListItem, ListItemText, Button } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const PostDetail = () => {
    const { postId } = useParams();

    // State Management on Post, Comments, Likes, Shares
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);
    const [like, setLike] = useState(999);
    const [share, setShare] = useState(99);

    // Destructing postDetails properties
    const { title, body } = postDetail;

    // Function to fecth post and comments
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

    // Handle like Button
    const increaseLike = () => {
        setLike(like + 1);
    }

    // Handle share Button
    const increaseShare = () => {
        setShare(share + 1);
    }

    // console.log(comments);

    return (
        <Container style={{ backgroundColor: 'lightcyan', padding: '1.5rem' }}>
            <ListItem>
                <ListItemText primary={title} secondary={body} />
            </ListItem>
            <Button
                variant="contained"
                color="default"
            >
                <ChatBubbleOutlineIcon />    {comments.length} Comments
            </Button>
            <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: '10px' }}
                onClick={increaseLike}
            >

                <ThumbUpAltIcon />  {like} Likes
            </Button>
            <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: '10px' }}
                onClick={increaseShare}
            >
                <ShareIcon />   {share} Shares
            </Button>
            <br /><br />
            <h2>Comments</h2>
            {
                comments && comments.map(comment => <Comments key={comment.id} comment={comment} ></Comments>)
            }
            <Link to="/" style={{ textDecoration: 'none', marginLeft: '1.5rem' }}>
                <Button
                    variant="contained"
                    color="primary"
                >
                    <ArrowBackIcon />  Go Back
                </Button>
            </Link>
        </Container>
    );
};

export default PostDetail;