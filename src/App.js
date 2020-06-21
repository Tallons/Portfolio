import React from 'react';
import Header from "./Components/Header";
import routes from "./router";
import {withRouter} from "react-router-dom";
import './App.scss';

function App(props) {
  return (
    <div className="App">
              {props.location.pathname === "/"
        ? (<>
   <Header />
   {routes}
   </>
   ) : (
   <>
    {routes}
   </>)}

    </div>
  );
}

export default withRouter(App);
