import React, { useEffect } from "react";
import {
  Route, Switch, useHistory
} from "react-router-dom";
import { RouterConfig } from "../../config";
import './demo.css';
import AutosugestForm from "./formDemo/autosugestForm";
import Graph from "./formDemo/graph/graph";
import RouteForm from "./formDemo/routeForm/routeForm";
import TextSearch from "./formDemo/textSearch/textSearch";
import Result from "./result/result";
import ApiMenu from "./apiMenu/apiMenu";

function Demo() {
  const histoty = useHistory()
  useEffect(() => {
    histoty.push({
      pathname: RouterConfig.demo.autosugest.autosugest
    })
  }, [])
  return (
    <div className="Root">
      <ApiMenu/>
      <Switch>
        <Route exact path={RouterConfig.demo.autosugest.autosugest}>
          <AutosugestForm />
        </Route>
        <Route exact path={RouterConfig.demo.route.route}>
          <RouteForm />
        </Route>
        <Route exact path={RouterConfig.demo.place.textSearch}>
          <TextSearch />
        </Route>
        <Route exact path={RouterConfig.demo.route.graph}>
          <Graph />
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
