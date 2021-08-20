import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import React, { useEffect, useRef, useState } from 'react';
import JSONPretty from 'react-json-pretty';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import apiRoute from '../../../api/routeApi';




const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100%',
    marginRight: '20px',
    marginLeft: '10px',
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
    border: '1px solid #ddd',
  },
  TabContext: {
    backgroundColor: '#090e25',
  }

}));

function Result() {

  const classes = useStyles();
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mapRef = useRef();
  const initMap = () => {
    let options = {
      center: { lat: 10.773201, lng: 106.700147 },
      zoom: 17,
      controls: true
    }
    let map = new map4d.Map(mapRef.current, options);

    let polyline = new map4d.Polyline({
      path: [
          [106.699380, 10.772431],
          [106.700147, 10.773201],
          [106.700763, 10.771783],
          [106.701901, 10.772302],
          [106.701493, 10.773267],
          [106.702835, 10.773599]
      ],
      strokeColor: "#ff0000",
      strokeOpacity: 1.0,
      strokeWidth: 5})
    // Thêm polyline vào bản đồ
    polyline.setMap(map)
  }

  useEffect(() => {

    initMap();

  },[value]);


  const Vehicle = useSelector(state => state.searchMap.vehicle);
  const Origin = useSelector(state => state.searchMap.origin);
  const Destination = useSelector(state => state.searchMap.destination);
  const Key = useSelector(state => state.searchMap.key);

  
  const [contentJson,setContent] = useState();
  const [requestUrl,setRequestUrl] = useState();


  useEffect(() => {
    const getMap = async () => {
      try {
        const params = {
          origin: Origin,
          destination: Destination,
          mode: Vehicle,
          Key: Key
        };
        const response = await apiRoute.getAll(params);

        const url = 'https://api-dev.map4d.vn/sdk/route?' + queryString.stringify(params);
        setRequestUrl(url);

        const json = JSON.stringify(response);
        setContent(json);

      } catch (error) {
        console.log('loi :' + error);
      }
    }
    getMap();
  })

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" className={classes.TabContext} defaultValue="0">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Map" value="0" />
            <Tab label="Request URL" value="1" />
            <Tab label="JSON Response" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="0" style={{ padding: '0px' }}>
          <div ref={mapRef}
            id="map"
            style={{ width: '100%', height: '510px', position: 'relative' }}
          ></div>
        </TabPanel>
        <TabPanel value="1"><a href={requestUrl}>{requestUrl}</a></TabPanel>
        <TabPanel value="2"><JSONPretty id="json-pretty" data={contentJson}></JSONPretty></TabPanel>
      </TabContext>
    </div>
  );
}
export default Result
