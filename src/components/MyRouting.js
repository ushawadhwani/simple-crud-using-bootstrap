import { Switch, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Dashboard from "./Dashboard";
import Home from "./Home";

export default function MyRouting() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <AboutUs />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
