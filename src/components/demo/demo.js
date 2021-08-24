import React, { useEffect } from "react";
import {
  Route, Switch, useHistory
} from "react-router-dom";
import { RouterConfig } from "../../config";
import ApiMenu from "./apiMenu/apiMenu";
import AutosugestForm from "./formDemo/autosugestForm";
import RouteForm from "./formDemo/routeForm/routeForm";
import Result from "./result/result";
import './demo.css';

function Demo() {
  const histoty = useHistory()
  useEffect(() => {
    histoty.push({
      pathname: RouterConfig.demo.autosugest.autosugest
    })
  }, [])
  return (
    <div className="Root">
      <ApiMenu />
      <Switch>
        <Route exact path={RouterConfig.demo.autosugest.autosugest}>
          <AutosugestForm />
        </Route>
        <Route exact path={RouterConfig.demo.route.route}>
          <RouteForm />
        </Route>
      </Switch>
      <Result/>
    </div>
  )
}

Demo.propTypes = {
  //
};

export default Demo;
