import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiNearbySearch from '../../../../api/apiNearbySearch';
import { changeNearbyPlace, changeUrl } from '../../../../redux/action/routeAction';
import queryString from 'query-string';


const useStyles = makeStyles((theme) => ({
  root: {
    minheight: 500,
    marginLeft: '20px',
    marginRight: '20px',
    fontSize: 16,

  },
  card: {
    background: '#d4edda',
  },
  content: {
    marginBottom: '10px',
  },
  radioGroup: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function nearBySearch() {


  const classes = useStyles();
  const dispatch = useDispatch();

  const locationDefault = useSelector(state => state.nearbySearchPlace.location);
  const radiusDefault = useSelector(state => state.nearbySearchPlace.radius);
  const textDefault = useSelector(state => state.nearbySearchPlace.text);


  const formik = useFormik({
    initialValues: {
      location: locationDefault,
      radius: radiusDefault,
      text: textDefault,
    },
    onSubmit: values => {
      const location = values.location;
      const radius = values.radius;
      const text = values.text;


      const action = changeNearbyPlace(location, radius, text);
      dispatch(action);
    }
  });

  const Location = useSelector(state => state.nearbySearchPlace.location);
  const Radius = useSelector(state => state.nearbySearchPlace.radius);
  const Text = useSelector(state => state.nearbySearchPlace.text);
  const Key = useSelector(state => state.nearbySearchPlace.key);


  useEffect(() => {
    const getMap = async () => {
      try {
        const params = {
          location: Location,
          radius: Radius,
          text: Text,
          Key: Key
        };
        const response = await apiNearbySearch.getAll(params);

        const url = 'https://api-dev.map4d.vn/sdk/place/nearby-search?' + queryString.stringify(params);
        const json = JSON.stringify(response);


        const actionUrl = changeUrl(url, json);
        dispatch(actionUrl);

      } catch (error) {
        console.log('loi :' + error);
      }
    }
    getMap();
  })



  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <CloseIcon />
            </IconButton>
          }
          title="API Near-Search"
        />
      </Card>
      <br /><br />

      <form onSubmit={formik.handleSubmit}>

        <FormControl>
          <InputLabel htmlFor="component-error">Tọa độ</InputLabel>
          <Input
            type="text"
            name="location"
            defaultValue={locationDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br /><br />

        <FormControl>
          <InputLabel htmlFor="component-error">Bán kính</InputLabel>
          <Input
            type="text"
            name="radius"
            defaultValue={radiusDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br />

        <FormControl>
          <InputLabel htmlFor="component-error">Địa chỉ</InputLabel>
          <Input
            type="text"
            name="text"
            defaultValue={textDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br />

        <Button
          type='submit'
          style={{ marginTop: '30px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '30px', paddingRight: '30px' }} variant="contained" color="primary">
          Send
        </Button>
      </form>

    </div>
  );
}


export default nearBySearch