import React from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '../helpers/Tooltip';

const MainMenu = (props) => {

  const menuItems = [
    { label: 'Dashboard', link: '/', icon: 'star' },
    { label: 'Incident Logging', link: '/logging', icon: 'alert-circle' },
    { label: 'Program / Activations & Areas', link: '/program', icon: 'trello' },
    { label: 'Chat', link: '/chat', icon: 'message-square' },
    { label: 'Contact List', link: '/contacts', icon: 'phone' },
    { label: 'Task List', link: '/tasks', icon: 'list' },
    { label: 'File Manager', link: '/files', icon: 'file-text' },
    { label: 'Integrated Map', link: '/map', icon: 'map' },
    { label: 'Resource Positioning', link: '/resources', icon: 'map-pin' },
    { label: 'Fleet Management', link: '/fleet', icon: 'truck' },
    { label: 'Procedures', link: '/procedures', icon: 'book' },
    { label: 'Help', link: '/help', icon: 'help-circle' },
    { label: 'Settings', link: '/settings', icon: 'settings' }
  ];

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
          {menuItems.map((menuItem, index) => {
            return (
              <Tooltip
                key={index}
                addClasses='nav-link'
                placement="right"
                tooltip={menuItem.label}>
                <NavLink
                  exact
                  to={menuItem.link}
                  activeClassName='active'>
                  <i data-feather={menuItem.icon}></i>
                </NavLink>
              </Tooltip>
            );
          })}

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