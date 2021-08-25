import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useFormik } from 'formik';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGraph, changeGraphVehicle, changeUrl } from '../../../../redux/action/routeAction';
import apiGraph from '../../../../api/apiGraph';




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

export default function Graph() {

  const[xe, setXe] = useState('car');


  const classes = useStyles();
  const dispatch = useDispatch();

  const onSelectedVehicle = (e) => {
    let valueOption = e.target.value;
    setXe(valueOption);

    const actionV = changeGraphVehicle(valueOption);
    dispatch(actionV);
  }

  const pointDefault = useSelector(state => state.Graphs.points);
  const vehicleDefault = useSelector(state => state.Graphs.vehicle);

  const formik = useFormik({
    initialValues: {
      point: pointDefault,
      vehicle: vehicleDefault
    },
    onSubmit: values => {
      const points = values.point;
      const vehicle = xe;

      const action = changeGraph(points,vehicle);
      dispatch(action);
    }
  });



  const Point = useSelector(state => state.Graphs.points);
  const Vehicle = useSelector(state => state.Graphs.vehicle);
  const Key = useSelector(state => state.Graphs.key);


  useEffect(() => {
    const getMap = async () => {
      try {
        const params = {
          points: Point,
          mode:Vehicle,
          Key: Key
        };

        const response = await apiGraph.getAll(params);

        const url = 'https://api-dev.map4d.vn/sdk/route/graph?' + queryString.stringify(params);
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
          title="API Graph"
        />
      </Card>
      <br /><br />

      <form onSubmit={formik.handleSubmit} >

        <FormControl>
          <InputLabel htmlFor="component-error">Nhập danh sách tọa độ</InputLabel>
          <Input
            type="text"
            name="point"
            defaultValue={pointDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br />

        <FormControl component="fieldset">
          <RadioGroup  onChange={onSelectedVehicle} className={classes.radioGroup} row aria-label="position" name="position" defaultValue="top" value={xe}>
            <FormControlLabel className={classes.itemRadio} value="car" control={<Radio color="primary" />} label="Xe ôtô" />
            <FormControlLabel className={classes.itemRadio} value="motorcycle" control={<Radio color="primary" />} label="Xe máy" />
            <FormControlLabel className={classes.itemRadio} value="foot" control={<Radio color="primary" />} label="Đi bộ" />
            <FormControlLabel className={classes.itemRadio} value="bike" control={<Radio color="primary" />} label="Xe đạp" />
          </RadioGroup>
        </FormControl>

        <Button
          type='submit'
          style={{ marginTop: '30px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '30px', paddingRight: '30px' }} variant="contained" color="primary">
          Send
        </Button>
      </form>

    </div>
  );
}
