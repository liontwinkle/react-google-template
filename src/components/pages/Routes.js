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
import SignIn from './SignIn/SignIn';

const Routes = (props) => {
    return (
        <Switch>
            <Route render={() => <Dashboard animateClass={props.pagesAnimation} />} exact path="/" />
            <Route render={() => <IncidentLogging animateClass={props.pagesAnimation} />} exact path="/logging" />
            <Route render={() => <ProgramActivationsAreas animateClass={props.pagesAnimation} />} exact path="/program" />
            <Route render={() => <Chat animateClass={props.pagesAnimation} />} exact path="/chat" />
            <Route render={() => <ContactList animateClass={props.pagesAnimation} />} exact path="/contacts" />
            <Route render={() => <TaskList animateClass={props.pagesAnimation} />} exact path="/tasks" />
            <Route render={() => <FileManager animateClass={props.pagesAnimation} />} exact path="/files" />
            <Route render={() => <IntegratedMap animateClass={props.pagesAnimation} />} exact path="/map" />
            <Route render={() => <ResourcePositioning animateClass={props.pagesAnimation} />} exact path="/resources" />
            <Route render={() => <FleetManagement animateClass={props.pagesAnimation} />} exact path="/fleet" />
            <Route render={() => <Procedures animateClass={props.pagesAnimation} />} exact path="/procedures" />
            <Route render={() => <Help animateClass={props.pagesAnimation} />} exact path="/help" />
            <Route render={() => <Settings animateClass={props.pagesAnimation} />} exact path="/settings" />
            <Route exact path="/signin">
                <SignIn animateClass={props.pagesAnimation} />
            </Route>
        </Switch>
    );
};

export default Routes;