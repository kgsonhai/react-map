import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Route, Switch, useHistory
} from "react-router-dom";
import Result from "./result/result";
import ApiMenu from "./apiMenu/apiMenu";
import { RouterConfig } from "../../config";
import RouteForm from "./formDemo/routeForm/routeForm";
import AutosugestForm from "./formDemo/autosugestForm";

function Demo() {
  const histoty = useHistory()
  useEffect(() => {
    histoty.push({
      pathname: RouterConfig.demo.autosugest.autosugest
    })
  }, [])
  return (
    <>
      <ApiMenu />
      <Switch>
        <Route exact path={RouterConfig.demo.autosugest.autosugest}>
          <AutosugestForm />
        </Route>
        <Route exact path={RouterConfig.demo.route.route}>
          <RouteForm />
        </Route>
      </Switch>
      <Result />
    </>
  )
}

Demo.propTypes = {
  //
};

export default Demo;
