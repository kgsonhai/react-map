import { Link } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { listMenu } from '../../../config';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    maxWidth: 460,
    backgroundSize: 'contain',
    backgroundColor: '#f2f5ecfc',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  itemBar: {
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '22px',
    padding: '8px',
    color: '#2167d2',
    fontVariantCaps: 'petite-caps',
    fontFamily: 'Times New Roman',
  },
  itemSub: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#5e7fb1',
    fontVariantCaps: 'petite-caps',
    fontFamily: 'Times New Roman',
  },
  iconItem: {
    fontSize: 'small',
  }
}));


export default function ApiMenu() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const filterMenu = (parentId) => {
    var result = [];
    const MenuMap = listMenu.map(item => {
      if (item.children === parentId) {
        result.push(item);
      }
    });
    return result;
  }


  const displayMenu = filterMenu(0).map(item => (
    <>
      {
        (item.children == 0) ?
          <>
            <ListItem key={item.ids} button onClick={handleClick}>
              {
                (filterMenu(item.ids).length > 0)
                  ?
                  <ListItemText>
                    <Link to={item.url} className={classes.itemBar}>{item.name}</Link>
                    {open ? <AddCircleOutlineRoundedIcon className={classes.iconItem}/> : <RemoveCircleOutlineIcon className={classes.iconItem}/>}
                  </ListItemText>
                  :
                  <NavLink to={item.url} className={classes.itemBar}>
                    {item.name}
                  </NavLink>
              }
            </ListItem>


            {
              (filterMenu(item.ids).length > 0) ?
                <Collapse in={!open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {filterMenu(item.ids).map(subItem =>
                      <ListItem button className={classes.nested}>
                        <NavLink to={subItem.url} className={classes.itemSub}>
                          {subItem.name}
                        </NavLink>
                      </ListItem>
                    )}
                  </List>
                </Collapse>
                : ''
            }


          </>
          :
          ''
      }



    </>
  )

  )

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {displayMenu}

    </List>
  );
}
