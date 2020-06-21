import React from "react";
import {Switch, Route} from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Landing from "./Components/Landing";

export default(
   <Switch>
      <Route exact path="/" component = {Landing}
/>
   <Route path="/me" component = {AboutMe} />
   </Switch>
)