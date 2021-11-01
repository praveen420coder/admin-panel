import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute.js";
import { isUserLoggedIn } from "./actions/auth.action.js";
import getAllCategory from "./actions/category.action.js";
import { useDispatch, useSelector } from "react-redux";
import Products from "./container/Products";
import Orders from "./container/Orders";
import Category from "./container/Category/index.js";
import { getInitialData } from "./actions/initialData.action.js";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        {/* <PrivateRoute path="/page" component={NewPage} /> */}
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
