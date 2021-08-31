import { Link } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { listMenu, RouterConfig } from '../../../config';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

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

const data = {
  child: [
    {
      id: 1,
      name: "Place",
      child: [
        {
          id: 2,
          name: "Detail",
          pathName: RouterConfig.demo.place.detail
        },
        {
          id: 3,
          name: "Text search",
          pathName: RouterConfig.demo.place.textSearch
        }
      ]
    },
    {
      id: 4,
      name: "Route",
      child: [
        {
          id: 5,
          name: "Route",
          pathName: RouterConfig.demo.route.route
        },
        {
          id: 6,
          name: "Graph",
          pathName: RouterConfig.demo.route.graph
        }
      ]
    }
  ]
}
const checkSelect=(data, pathName)=>{
  if(!data?.child?.length>0&&data?.pathName){
    if(data.pathName == pathName){
      return true;
    }
    return false
  }
  else if(data?.child?.length>0&&!data?.pathName){
    let check = false
    data?.child.forEach(item=>{
      check = check||checkSelect(item, pathName)
    })
    return check
  }
}
const RenderMenu = ({ data }) => {

  const history = useHistory()
  const location = useLocation()

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const onClickPath=()=>{
    history.push({
      pathname: data?.pathName
    })
  }

  useEffect(()=>{
    let check = checkSelect(data, location.pathname)
    setOpen(check)
  }, [location.pathname])

  if (!data?.name && data?.child?.length > 0) {
    return (
      <List>
        {
          data?.child?.map(item => {
            return (
              <RenderMenu data={item} key={item.id} />
            )
          })
        }
      </List>
    )
  }
  else if (data?.name && data?.child?.length > 0 && !data?.pathName) {
    return (
      <>
        <ListItem selected={open} button onClick={handleClick}>
          <ListItemText primary={data?.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto">
          <List component="div" disablePadding>
            {
              data?.child?.map(item => {
                return (
                  <RenderMenu data={item} key={item.id} />
                )
              })
            }
          </List>
        </Collapse>
      </>
    )
  }
  else if(data?.pathName&&!data?.child?.length>0){
    return(
      <ListItem selected={open} button onClick={onClickPath}>
            <ListItemText primary={data?.name} />
      </ListItem>
    )
  }
}


export default function ApiMenu() {
  return (
    <RenderMenu data={data} />
  )
}

// export default function ApiMenu() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(true);
//   const [check, setCheck] = useState();


//   const handleClick = (params) => {
//     setCheck(params);
//     setOpen(!open);
//   };

//   const filterMenu = (parentId) => {
//     var result = [];
//     const MenuMap = listMenu.map(item => {
//       if (item.children === parentId) {
//         result.push(item);
//       }
//     });
//     return result;
//   }


//   const displayMenu = filterMenu(0).map(item => (
//     <>
//       {
//         (item.children === 0) ?
//           <>
//             <ListItem key={item.ids} button onClick={() => handleClick(item.ids)}>
//               {
//                 (filterMenu(item.ids).length > 0)
//                   ?
//                   <ListItemText>
//                     <Link to={item.url} className={classes.itemBar}>{item.name}</Link>
//                     {open ? <AddCircleOutlineRoundedIcon className={classes.iconItem}/> : <RemoveCircleOutlineIcon className={classes.iconItem}/>}
//                   </ListItemText>
//                   :
//                   <NavLink to={item.url} className={classes.itemBar}>
//                     {item.name}
//                   </NavLink>
//               }
//             </ListItem>


//             {
//               (filterMenu(item.ids).length > 0) ?
//                 <Collapse in={(check === item.ids) ? !open : null} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     {filterMenu(item.ids).map(subItem =>
//                       <ListItem button className={classes.nested}>
//                         <NavLink to={subItem.url} className={classes.itemSub}>
//                           {subItem.name}
//                         </NavLink>
//                       </ListItem>
//                     )}
//                   </List>
//                 </Collapse>
//                 : ''
//             }


//           </>
//           :
//           ''
//       }



//     </>
//   )

//   )

//   return (
//     <List
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       className={classes.root}
//     >
//       {displayMenu}

//     </List>
//   );
// }
