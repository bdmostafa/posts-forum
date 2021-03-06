import React, { useEffect } from 'react';
import Posts from './Posts';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Container } from '@material-ui/core';

const Home = ({ posts, setPosts }) => {
    // const [posts, setPosts] = useContext(PostContext);

    // Fetch the data
    const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }
    // console.log(posts);

    // useEffect hook executes when page is loaded
    useEffect(loadData, []);

    // Function to generate posts randomly
    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
    posts && shuffle(posts);

    // Material UI Style and Modifications
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();

    return (
        <Container>
            <List className={classes.root}>
                {
                    posts && posts.map(post => <Posts key={post.id} post={post}></Posts>)
                }
            </List>
        </Container>
    );
};

export default Home;