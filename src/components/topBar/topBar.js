import AppBar from '@material-ui/core/AppBar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { RouterConfig } from '../../config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBarcolorBackground: {
    backgroundColor: '#021032',
  },
  title: {
    flexGrow: 1,
    margin: 3,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logo: {
    margin: 10,
    marginLeft: 100,
    marginTop: 20,
  },
  itemBar: {
    color: '#ffff',
    fontSize:15,
    opacity: 0.92,
    
  },
  ListBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }

}));

function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.AppBarcolorBackground}>

          <Typography className={classes.title} variant="h3" noWrap>
            <img className={classes.logo} src="https://maps.vietmap.vn/web/images/vietmap-logo.png"  />
          </Typography>

          <Tabs className={classes.ListBar}>
            <Tab className={classes.itemBar} label="Maps API" />
            <Tab className={classes.itemBar} label="Giải pháp GIS" />
            <Tab className={classes.itemBar} label={<Link to={RouterConfig.demo.home}>Demo Sdk Api</Link>} />
            <Tab className={classes.itemBar} label="Tài liệu" />
            <Tab className={classes.itemBar} label="Bảng giá" />
            <Tab className={classes.itemBar} label="Liên hệ" />
          </Tabs>

        </Toolbar>
      </AppBar>
    </div>
  );
}
export default TopBar

