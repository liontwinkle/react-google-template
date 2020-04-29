import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import IncidentLogging from './IncidentLogging/IncidentLogging';
import ProgramActivationsAreas from './ProgramActivationsAreas/ProgramActivationsAreas';
import Chat from './Chat/Chat'
import ContactList from './ContactList/ContactList'
import TaskList from './TaskList/TaskList';
import FileManager from './FileManager/FileManager';
import IntegratedMap from './IntegratedMap/IntegratedMap';
import ResourcePositioning from './ResourcePositioning/ResourcePositioning';
import FleetManagement from './FleetManagement/FleetManagement';
import Procedures from './Procedures/Procedures';
import Help from './Help/Help';
import Settings from './Settings/Settings';

const Routes = () => (
    <Switch>
        <Route component={Dashboard} exact path="/"  />
        <Route component={IncidentLogging} path="/logging"  />
        <Route component={ProgramActivationsAreas} path="/program"  />
        <Route component={Chat} path="/chat"  />
        <Route component={ContactList} path="/contacts"  />
        <Route component={TaskList} path="/tasks"  />
        <Route component={FileManager} path="/files"  />
        <Route component={IntegratedMap} path="/map"  />
        <Route component={ResourcePositioning} path="/resources"  />
        <Route component={FleetManagement} path="/fleet"  />
        <Route component={Procedures} path="/procedures"  />
        <Route component={Help} path="/help"  />
        <Route component={Settings} path="/settings"  />
    </Switch>
);

export default Routes;