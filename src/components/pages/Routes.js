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
import SignIn from './Auth/Auth';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/logging">
                <IncidentLogging animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/program">
                <ProgramActivationsAreas animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/chat">
                <Chat animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/contacts">
                <ContactList animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/tasks">
                <TaskList animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/files">
                <FileManager animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/map">
                <IntegratedMap animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/resources">
                <ResourcePositioning animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/fleet">
                <FleetManagement animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/procedures">
                <Procedures animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/help">
                <Help animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/settings">
                <Settings animateClass={props.pagesAnimation} />
            </Route>
            <Route exact path="/signin">
                <SignIn animateClass={props.pagesAnimation} />
            </Route>
        </Switch>
    );
};

export default Routes;