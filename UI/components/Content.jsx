import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EmployeeDirectory from "./EmployeeDirectory.jsx";
import EmployeeCreate from "./EmployeeCreate.jsx";
import EmployeeDetail from "./EmployeeDetail.jsx";

class Content extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/directory" />
        <Route path="/directory" component={EmployeeDirectory} />
        <Route path="/empCreate" component={EmployeeCreate} />
        <Route path="/empEdit/:id" component={EmployeeDetail} />
      </Switch>
    );
  }
}

export default Content;
