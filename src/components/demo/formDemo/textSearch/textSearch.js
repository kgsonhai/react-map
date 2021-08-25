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
import apiTextSearch from '../../../../api/apiTextSearch';
import { changeTextPlace, changeUrl } from '../../../../redux/action/routeAction';
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

export default function TextSearch() {


    const classes = useStyles();
    const dispatch = useDispatch();

    const addressDefault =  useSelector(state => state.textSearchPlace.address);
    const locationDefault =  useSelector(state => state.textSearchPlace.location);


    const formik = useFormik({
        initialValues: {
            address: addressDefault,
            location: locationDefault
        },
        onSubmit: values => {
            const address = values.address;
            const location = values.location;

            const action = changeTextPlace(address,location);
            dispatch(action);
        }
    });

    const Address =  useSelector(state => state.textSearchPlace.address);
    const Location =  useSelector(state => state.textSearchPlace.location);
    const Key =  useSelector(state => state.textSearchPlace.key);


    useEffect(() => {
      const getMap = async () => {
        try {
          const params = {
            text:Address,
            location:Location,
            Key: Key
          };
          const response = await apiTextSearch.getAll(params);
  
          const url = 'https://api-dev.map4d.vn/sdk/place/text-search?' + queryString.stringify(params);  
          const json = JSON.stringify(response);

          console.log(url);

          const actionUrl = changeUrl(url,json);
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
                    title="API Place"
                />
            </Card>
            <br/><br/>

            <form onSubmit={formik.handleSubmit}>

                <FormControl>
                    <InputLabel htmlFor="component-error">Nhập tên hoặc địa chỉ</InputLabel>
                    <Input
                        type="text"
                        name="address"
                        defaultValue={addressDefault}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        aria-describedby="component-error-text"
                    />
                </FormControl><br /><br/>

                <FormControl>
                    <InputLabel htmlFor="component-error">Nhập vị trí tọa độ</InputLabel>
                    <Input
                        type="text"
                        name="location"
                        defaultValue={locationDefault}
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
