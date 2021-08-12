import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import apiRoute from '../../../api/routeApi';
import '../../../styles/route.css';
import LeftMenu from './leftMenu';
import OptionAlerts from './option';
import TabsMap from './TabsMaps';




function PageRoute(props) {

    return (
        <div className="body">
            <LeftMenu />
            <OptionAlerts />
            <TabsMap />
        </div>
    );
}

export default PageRoute;