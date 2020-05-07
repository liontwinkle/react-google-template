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

const Routes = (props) => {
    const properties = props;

    /* Change this way of passing props to pages to use Global state and make these rows much shorter */
    
    return (
    <Switch>
        <Route render={(props) => <Dashboard {...props} animateClass={properties.pagesAnimation} />} exact path="/" />
        <Route render={(props) => <IncidentLogging {...props} animateClass={properties.pagesAnimation} />} exact path="/logging" />
        <Route render={(props) => <ProgramActivationsAreas {...props} animateClass={properties.pagesAnimation} />} exact path="/program" />
        <Route render={(props) => <Chat {...props} animateClass={properties.pagesAnimation} />} exact path="/chat" />
        <Route render={(props) => <ContactList {...props} animateClass={properties.pagesAnimation} />} exact path="/contacts" />
        <Route render={(props) => <TaskList {...props} animateClass={properties.pagesAnimation} />} exact path="/tasks" />
        <Route render={(props) => <FileManager {...props} animateClass={properties.pagesAnimation} />} exact path="/files" />
        <Route render={(props) => <IntegratedMap {...props} animateClass={properties.pagesAnimation} />} exact path="/map" />
        <Route render={(props) => <ResourcePositioning {...props} animateClass={properties.pagesAnimation} />} exact path="/resources" />
        <Route render={(props) => <FleetManagement {...props} animateClass={properties.pagesAnimation} />} exact path="/fleet" />
        <Route render={(props) => <Procedures {...props} animateClass={properties.pagesAnimation} />} exact path="/procedures" />
        <Route render={(props) => <Help {...props} animateClass={properties.pagesAnimation} />} exact path="/help" />
        <Route render={(props) => <Settings {...props} animateClass={properties.pagesAnimation} />} exact path="/settings" />
    </Switch>
    );
};

export default Routes;