import React, { useEffect } from "react";
import {
  Route, Switch, useHistory, useLocation
} from "react-router-dom";
import { RouterConfig } from "../../config";
import './demo.css';
import AutosugestForm from "./formDemo/autosugestForm";
import Graph from "./formDemo/graph/graph";
import RouteForm from "./formDemo/routeForm/routeForm";
import TextSearch from "./formDemo/textSearch/textSearch";
import Result from "./result/result";
import ApiMenu from "./apiMenu/apiMenu";
import GeocodeForm from "./formDemo/geocodeForm/geocodeForm";
import NearBySearch from "./formDemo/nearBySearch/nearBySearch";
import RasterForm from "./formDemo/rasterForm/rasterForm";

function Demo() {
  const location = useLocation()
  const histoty = useHistory()
  useEffect(() => {
    if(location.pathname==RouterConfig.demo.home){
      histoty.push({
        pathname: RouterConfig.demo.autosugest.autosugest
      })
    }
  }, [location.pathname])
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
        <Route exact path={RouterConfig.demo.geocode.geocode}>
          <GeocodeForm />
        </Route>
        <Route exact path={RouterConfig.demo.place.textSearch}>
          <TextSearch />
        </Route>
        <Route exact path={RouterConfig.demo.place.nearbySearch}>
          <NearBySearch />
        </Route>
        <Route exact path={RouterConfig.demo.route.graph}>
          <Graph />
        </Route>
        <Route exact path={RouterConfig.demo.tile.raster}>
          <RasterForm />
        </Route>
      </Switch>
      <Result />
    </div>
  )
}

Demo.propTypes = {
  //
};

export default Demo;
