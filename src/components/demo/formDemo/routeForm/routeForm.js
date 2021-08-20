import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoca, changeVehicle } from '../../../../redux/action/routeAction';

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

function RouteForm() {

  const [vehicle, setVehicle] = useState('car');

  const classes = useStyles();
  const dispatch = useDispatch();

  const onSelectedVehicle = (e) => {
    let valueOption = e.target.value;
    setVehicle(valueOption);

    const action = changeVehicle(valueOption);
    dispatch(action);
  }

  const originDefault = useSelector(state => state.searchMap.origin);
  const destiDefault = useSelector(state => state.searchMap.destination);

  const formik = useFormik({
    initialValues: {
      origin: originDefault,
      destination: destiDefault,
    },
    onSubmit: values => {
      const newOrigin = values.origin;
      const newDestination = values.destination;

      const action = changeLoca(newOrigin, newDestination, vehicle);
      dispatch(action);
    }
  });



  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl component="fieldset">
          <RadioGroup onChange={onSelectedVehicle} className={classes.radioGroup} row aria-label="position" name="position" defaultValue="top" value={vehicle}>
            <FormControlLabel className={classes.itemRadio} value="car" control={<Radio color="primary" />} label="Xe ôtô" />
            <FormControlLabel className={classes.itemRadio} value="motorcycle" control={<Radio color="primary" />} label="Xe máy" />
            <FormControlLabel className={classes.itemRadio} value="foot" control={<Radio color="primary" />} label="Đi bộ" />
            <FormControlLabel className={classes.itemRadio} value="bike" control={<Radio color="primary" />} label="Xe đạp" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-error">Diểm bắt đầu</InputLabel>
          <Input
            type="text"
            name="origin"
            defaultValue={originDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br /><br /><br />
        <FormControl>
          <InputLabel htmlFor="component-error">Diểm kết thức</InputLabel>
          <Input
            type="text"
            name="destination"
            defaultValue={originDefault}
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-describedby="component-error-text"
          />
        </FormControl><br />

        <Button
          type='submit'
          style={{ marginTop: '30px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '30px', paddingRight: '30px' }} variant="contained" color="primary">
          Route
        </Button>
      </form>

    </div>
  );
}
export default RouteForm 
