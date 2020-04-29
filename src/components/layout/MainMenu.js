import React from 'react';
import Tooltip from '../helpers/Tooltip';

const MainMenu = (props) => {

  let buttonProp = {
    tooltip: 'Switch to dark mode',
    addClasses: 'nav-link btn-dark-mode'
  };

  if (props.isDark) {
    buttonProp = {
      tooltip: 'Switch to classic mode',
      addClasses: 'nav-link btn-dark-mode active'
    };
  }

  return (
    <div className="main-sidebar">
      <div className="main-sidebar-body">
        <nav className="nav flex-column main-menu">
          <Tooltip addClasses="nav-link active" tooltip="Dashboard" placement="right" data-section-name="dashboard">
            <i data-feather="star"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Incident Logging" placement="right" data-section-name="incident-logging">
            <i data-feather="alert-circle"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Program / Activations & Areas" placement="right" data-section-name="program-activations-areas">
            <i data-feather="trello"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Chat" placement="right" data-section-name="chat">
            <i data-feather="message-square"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Contact List" placement="right" data-section-name="contact-list">
            <i data-feather="phone"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Task List" placement="right" data-section-name="task-list">
            <i data-feather="list"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="File Manager" placement="right" data-section-name="file-manager">
            <i data-feather="file-text"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Integrated Map" placement="right" data-section-name="integrated-map">
            <i data-feather="map"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Resource Positioning" placement="right" data-section-name="resource-positioning">
            <i data-feather="map-pin"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Fleet Management" placement="right" data-section-name="fleet-management">
            <i data-feather="truck"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Procedures" placement="right" data-section-name="procedures">
            <i data-feather="book"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Help" placement="right" data-section-name="help">
            <i data-feather="help-circle"></i>
          </Tooltip>
          <Tooltip addClasses="nav-link" tooltip="Settings" placement="right" data-section-name="settings">
            <i data-feather="settings"></i>
          </Tooltip>
          <Tooltip
            placement="right"
            trigger="hover"
            addClasses={buttonProp.addClasses}
            tooltip={buttonProp.tooltip}
            click={props.click}>
            <i className="far fa-moon-stars"></i>
          </Tooltip>
        </nav>
      </div>
    </div>
  )
}

export default MainMenu;