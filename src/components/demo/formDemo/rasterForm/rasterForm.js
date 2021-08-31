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
import apiRaster from '../../../../api/apiRaster';
import { TileRaster, changeUrl } from '../../../../redux/action/routeAction';
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

function rasterForm() {


  const classes = useStyles();
  const dispatch = useDispatch();

  const zoomDefault = useSelector(state => state.rasterSearch.zoom);
  const XDefault = useSelector(state => state.rasterSearch.X);
  const YDefault = useSelector(state => state.rasterSearch.Y);


  const formik = useFormik({
    initialValues: {
      zoom: zoomDefault,
      x: XDefault,
      y: YDefault,
    },
    onSubmit: values => {
      const zoom = values.zoom;
      const x = values.x;
      const y = values.y;


      const action = TileRaster(zoom, x, y);
      dispatch(action);
    }
  });

  const Zoom = useSelector(state => state.rasterSearch.zoom);
  const X = useSelector(state => state.rasterSearch.X);
  const Y = useSelector(state => state.rasterSearch.Y);
  const Key = useSelector(state => state.rasterSearch.key);


  useEffect(() => {


    const getMap = async () => {
      try {
        const params = {
          zoom: Zoom,
          X: X,
          Y: Y,
          Key: Key,
        };
        const key = {
          Key: Key
        }
        const response = await apiRaster.getAll(params);

        const url = 'https://api-dev.map4d.vn/sdk/tile/raster' + '/' + (Zoom) + '/' + (X) + '/' + (Y) + '?' + queryString.stringify(key);

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
          title="API RASTER"
        />
      </Card>
      <br /><br />

      <form onSubmit={formik.handleSubmit}>

        <FormControl>
          <InputLabel htmlFor="component-error">Zoom</InputLabel>
          <Input
            type="number"
            name="zoom"
            defaultValue={zoomDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br /><br />

        <FormControl>
          <InputLabel htmlFor="component-error">X</InputLabel>
          <Input
            type="number"
            name="x"
            defaultValue={XDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br />

        <FormControl>
          <InputLabel htmlFor="component-error">Y</InputLabel>
          <Input
            type="number"
            name="y"
            defaultValue={YDefault}
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


export default rasterForm