import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Dashboard.css';

import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarksIcon from "@material-ui/icons/Bookmarks";
// import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {useHistory } from 'react-router-dom';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import Adminroute from '../Login/Adminroute/Adminroute';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from '../Product/AddProduct/AddProduct';
import ManageAllOrders from '../Orders/ManageAllOrders/ManageAllOrders';

const drawerWidth = 200;

const Dashboard = (props) => {
 const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {checkAdmin, logOut} = useAuth();
  
const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawer-btn-area" style={{textAlign: 'initial'}}>
      <Toolbar>
        <img src="https://i.ibb.co/gDFtVWn/android-chrome-192x192.png" alt="" width="50" />
      </Toolbar>
      <Divider />
      <Link to='/'><Button variant="contained">Home</Button></Link> <br/>
      
      {checkAdmin && 
        <Box>
            <Link to={`${url}/manage-all-order`}><Button variant="contained">Manage All Order</Button></Link>
            <Link to={`${url}/addProduct`}><Button variant="contained">Add Product</Button></Link>
            <Link to={`${url}/makeAdmin`}><Button variant="contained">Make Admin</Button></Link>
            <Link to={`${url}/manage-products`}><Button variant="contained">
            Manage Products</Button></Link>
        </Box> 
      }
      {!checkAdmin && <Box>
            <Link to={`${url}/payment`}><Button variant="contained">Payment</Button></Link>
            <Link to={`${url}/myorder`}><Button variant="contained">My Order</Button></Link>
            <Link to={`${url}/review`}><Button variant="contained">Review</Button></Link>
        </Box> }
      <Link to={`${url}`} sx={{textDecoration: 'none'}}><Button variant="contained">Dashboard</Button></Link>
      <Button variant="contained" onClick={() => logOut(history)}><LogoutIcon/>Logout</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <Typography paragraph> */}
          <Switch>
            <Route exact path={path}>
                <DashboardHome></DashboardHome>
            </Route>
            <Adminroute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
            </Adminroute>
            <Adminroute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
            </Adminroute>
            <Adminroute path={`${path}/manage-all-order`}>
                <ManageAllOrders></ManageAllOrders>
            </Adminroute>
            manage-all-order
          </Switch>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;