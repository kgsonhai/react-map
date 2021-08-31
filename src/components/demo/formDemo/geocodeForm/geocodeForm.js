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
import apiRoute from '../../../../api/routeApi';
import { changeATSuggest, changeUrl, changeGeocoding } from '../../../../redux/action/routeAction';
import queryString from 'query-string';
import GeocodeApi from '../../../../api/apiGeocode';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 260,
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

export default function geocodeForm() {


  const classes = useStyles();
  const dispatch = useDispatch();

  const addressDefault = useSelector(state => state.ATGeocode.address);
  console.log(addressDefault)
  const formik = useFormik({
    initialValues: {
      address: addressDefault,
    },
    onSubmit: values => {
      const address = values.address;

      const action = changeGeocoding(address);
      dispatch(action);
    }
  });

  const Text = useSelector(state => state.ATGeocode.address);
  const Key = useSelector(state => state.ATGeocode.key);

  useEffect(() => {
    const getMap = async () => {
      try {
        const params = {
          address: Text,
          Key: Key
        };
        const response = await GeocodeApi.getAll(params);

        const url = 'https://api-dev.map4d.vn/sdk/v2/geocode?' + queryString.stringify(params);
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
          title="API GEOCODE"
        />
      </Card>
      <br /><br />

      <form onSubmit={formik.handleSubmit} >

        <FormControl>
          <InputLabel htmlFor="component-error">địa chỉ</InputLabel>
          <Input
            type="text"
            name="address"
            defaultValue={addressDefault}
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