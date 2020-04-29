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
        <Route component={Dashboard} exact path="/" />
        <Route component={IncidentLogging} exact path="/logging" />
        <Route component={ProgramActivationsAreas} exact path="/program" />
        <Route component={Chat} exact path="/chat" />
        <Route component={ContactList} exact path="/contacts" />
        <Route component={TaskList} exact path="/tasks" />
        <Route component={FileManager} exact path="/files" />
        <Route component={IntegratedMap} exact path="/map" />
        <Route component={ResourcePositioning} exact path="/resources" />
        <Route component={FleetManagement} exact path="/fleet" />
        <Route component={Procedures} exact path="/procedures" />
        <Route component={Help} exact path="/help" />
        <Route component={Settings} exact path="/settings" />
    </Switch>
);

export default Routes;