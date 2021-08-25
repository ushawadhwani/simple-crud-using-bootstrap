import { Switch, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import EmployeeList from "./Employee/EmployeeList";

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
      <Route path="/employees">
        <EmployeeList />
      </Route>
    </Switch>
  );
}
