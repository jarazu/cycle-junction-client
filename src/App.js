import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from './Pages/Product/AddProduct/AddProduct';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Authprovider from './contexts/Authprovider';
import Home from './Pages/Home/Home';
import ExploreProducts from './Pages/Product/ExploreProducts/ExploreProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import BuyNow from './Pages/Product/BuyNow/BuyNow';

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Switch>
              <Route path="/explore-products">
                  <ExploreProducts />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/register">
                  <Register />
              </Route>
              <PrivateRoute path="/dashboard">
                  <Dashboard />
              </PrivateRoute>
              <Route exact path="/addProduct">
                  <AddProduct />
              </Route>
              <PrivateRoute path="/buy-now/:id">
                <BuyNow/>
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>  
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
