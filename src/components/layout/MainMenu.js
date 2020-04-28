import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="mail-sidebar">
        <div className="mail-sidebar-body">
          <nav className="nav flex-column main-menu">
            <span className="change-section nav-link active" data-toggle="tooltip" title="Dashboard" data-placement="right" data-section-name="dashboard">
              <i data-feather="star"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Incident Logging" data-placement="right" data-section-name="incident-logging">
              <i data-feather="alert-circle"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Program / Activations & Areas" data-placement="right" data-section-name="program-activations-areas">
              <i data-feather="trello"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Chat" data-placement="right" data-section-name="chat">
              <i data-feather="message-square"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Contact List" data-placement="right" data-section-name="contact-list">
              <i data-feather="phone"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Task List" data-placement="right" data-section-name="task-list">
              <i data-feather="list"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="File Manager" data-placement="right" data-section-name="file-manager">
              <i data-feather="file-text"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Integrated Map" data-placement="right" data-section-name="integrated-map">
              <i data-feather="map"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Resource Positioning" data-placement="right" data-section-name="resource-positioning">
              <i data-feather="map-pin"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Fleet Management" data-placement="right" data-section-name="fleet-management">
              <i data-feather="truck"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Procedures" data-placement="right" data-section-name="procedures">
              <i data-feather="book"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Help" data-placement="right" data-section-name="help">
              <i data-feather="help-circle"></i>
            </span>
            <span className="change-section nav-link" data-toggle="tooltip" title="Settings" data-placement="right" data-section-name="settings">
              <i data-feather="settings"></i>
            </span>
            <span className="nav-link btn-dark-mode" data-toggle="tooltip" title="Switch to dark mode" data-placement="right" data-title="dark">
              <i className="far fa-moon-stars"></i>
            </span>
          </nav>
        </div>
      </div>
    )
  }
}