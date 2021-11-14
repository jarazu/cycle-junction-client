import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from './Pages/Product/AddProduct/AddProduct';
import AllProducts from './Pages/Product/AllProducts/AllProducts';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/products">
                <AllProducts />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route exact path="/">
                <AddProduct />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>  
      </Router>
    </div>
  );
}

export default App;
