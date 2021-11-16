// IMPORTING APIS
import React from "react";
import Box from '@mui/material/Box';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import {useHistory } from 'react-router-dom';

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  
  const history = useHistory();
  const {user, logOut} = useAuth();
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        {/* <BrowserRouter> */}
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                <Link to="/">
                  Cycle Junction
                </Link>
              </Typography>

              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/explore-products"
                    >
                      <ListItemIcon>
                        <ExploreIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Explore </Typography>
                    </MenuItem>

                {user?.email? 

                    <span>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        to="/dashboard"
                      >
                        <ListItemIcon>
                          <BookmarksIcon />
                        </ListItemIcon>
                        <Typography variant="h6"> Dashboard </Typography>
                      </MenuItem>

                      <MenuItem
                        onClick={ () => logOut(history)}
                      >
                        <ListItemIcon>
                          <LogoutIcon />
                        </ListItemIcon>
                        <Typography variant="h6"> Logout</Typography>
                      </MenuItem>
                    </span>
                    :<span>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        to="/login"
                      >
                        <ListItemIcon>
                          <LoginIcon />
                        </ListItemIcon>
                        <Typography variant="h6">Login</Typography>
                      </MenuItem>
                    </span>
                  }
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/explore-products"
                    color="inherit"
                  >
                    <ExploreIcon />
                    Explore
                  </Button>
                  {user?.email? 
                        <span>
                            <Link style={{textDecoration: 'none', color: 'white'}} to='/dashboard'><Button color="inherit"><BookmarksIcon/>Dashboard</Button></Link>
                            <Button color="inherit"  onClick={logOut}><LogoutIcon/>Logout</Button>
                        </span>
                     : <Link style={{textDecoration: 'none', color: 'white'}} to='/login'><Button color="inherit"> <LoginIcon/>Login</Button></Link>
                  }

                </div>
              )}
            </Toolbar>
          </AppBar>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/College" component={College} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Personal" component={Personal} />
          </Switch> */}
        {/* </BrowserRouter> */}
      </HideOnScroll>
    </div>
  );
};

export default Header;
