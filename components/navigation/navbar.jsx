import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import bot from "./bot.js";
import stock from "./stock.js";
import buycoin from "./buycoin.js";
import Dashboard from "./dashbord.js"; // Import the Dashboard component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/bot.js" component={Page1} />
        <Route path="/stock.js" component={Page2} />
        <Route path="/buycoin.js" component={Page3} />
        <Route path="/dashboard.js" component={Dashboard} /> {/* Add the route for the Dashboard component */}
      </Switch>
    </Router>
  );
};

export default App;
