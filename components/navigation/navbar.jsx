import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./Navbar.module.css";
import Navbar from "./navbar";
import bot from "./bot";
import stock from "./stock";
import buycoin from "./buycoin";
import Dashboard from "./dashbord"; // Import the Dashboard component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/bot" component={Page1} />
        <Route path="/stock" component={Page2} />
        <Route path="/buycoin" component={Page3} />
        <Route path="/dashboard" component={Dashboard} /> {/* Add the route for the Dashboard component */}
      </Switch>
    </Router>
  );
};

export default App;
