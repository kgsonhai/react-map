import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { RouterConfig } from '../../../config';

const useStyles = makeStyles({
  root: {
    marginLeft: '25px',
    marginRight: '30px',
    maxWidth: 180,
    maxHeight: 340,
    borderRadius: 5,
    boxShadow: "2px 5px 10px 4px #dddd",
  },
  itemMenu: {
    color: '#007AFC'
  },
  itemText: {
    fontSize: 17,
    padding: 5,
  },
  onActive: {
    background: '#007BFF',
    color: '#fff',
  }
});

export default function ApiMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList className="listMenu">
        <MenuItem className={classes.onActive}>
          <Typography className={classes.itemText} variant="inherit">
            <Link to={RouterConfig.demo.autosugest.autosugest}>autosugest</Link>
          </Typography>
        </MenuItem>
        <MenuItem className={classes.itemMenu}>
          <Typography className={classes.itemText} variant="inherit">
            <Link to={RouterConfig.demo.route.route}>route</Link>
          </Typography>
        </MenuItem>
        <MenuItem className={classes.itemMenu}>
          <Typography className={classes.itemText} variant="inherit">Geocoding</Typography>
        </MenuItem>
        <MenuItem className={classes.itemMenu}>
          <Typography className={classes.itemText} variant="inherit">AutoComplete</Typography>
        </MenuItem>
        <MenuItem className={classes.itemMenu}>
          <Typography className={classes.itemText} variant="inherit">Reserve</Typography>
        </MenuItem>
        <MenuItem className={classes.itemMenu}>
          <Typography className={classes.itemText} variant="inherit">Matrix</Typography>
        </MenuItem>
        <MenuItem className={classes.itemMenu}>
          <Typography className={classes.itemText} variant="inherit">VRP</Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
