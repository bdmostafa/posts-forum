import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import logo from '../components/images/logo.png';
import { Link } from 'react-router-dom';

// Material UI Styles and Modifications
const useStyles = makeStyles((theme) => ({
    logo: {
        maxWidth: 120,
        padding: '1rem'
    },
    heading: {
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '.5rem',
        opacity: .80,
        color: 'deepskyblue',
        '& h4': {
            marginTop: '-1rem',
            color: 'black'
        }
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Header = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 100 new mails" color="inherit">
                    <Badge badgeContent={100} color="secondary">
                        <PostAddIcon />
                    </Badge>
                </IconButton>
                <p>Posts</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 51 new notifications" color="inherit">
                    <Badge badgeContent={51} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 100 news feed" color="inherit">
                    <Badge badgeContent={100} color="secondary">
                        <RssFeedIcon />
                    </Badge>
                </IconButton>
                <p>RSS Feed</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <PersonOutlineIcon />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <div className={classes.grow}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Toolbar>
                        <Link to="/"> <img src={logo} alt="post forum logo" className={classes.logo} /> </Link>
                    </Toolbar>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 100 new mails" color="inherit">
                            <Badge badgeContent={100} color="secondary">
                                <PostAddIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 51 new notifications" color="inherit">
                            <Badge badgeContent={51} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 100 news feed" color="inherit">
                            <Badge badgeContent={100} color="secondary">
                                <RssFeedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <PersonOutlineIcon />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <div className={classes.heading}>
                <h1>Welcome to Post Forum</h1>
                <h4>This is a social platform in which you can see the posts, like, shares within seconds. So Hurry up and enjoy with different walks of human life!</h4>
            </div>
        </div>
    );
};

export default Header;