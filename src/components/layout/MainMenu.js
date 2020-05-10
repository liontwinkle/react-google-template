import React from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '../../helpers/Tooltip';
import { Star, AlertCircle, Trello, MessageSquare, Phone, List, FileText, Map, MapPin, Truck, Book, HelpCircle, Settings } from 'react-feather';

const MainMenu = (props) => {

  const menuItems = [
    { label: 'Dashboard', link: '/', icon: Star },
    { label: 'Incident Logging', link: '/logging', icon: AlertCircle },
    { label: 'Program / Activations & Areas', link: '/program', icon: Trello },
    { label: 'Chat', link: '/chat', icon: MessageSquare },
    { label: 'Contact List', link: '/contacts', icon: Phone },
    { label: 'Task List', link: '/tasks', icon: List },
    { label: 'File Manager', link: '/files', icon: FileText },
    { label: 'Integrated Map', link: '/map', icon: Map },
    { label: 'Resource Positioning', link: '/resources', icon: MapPin },
    { label: 'Fleet Management', link: '/fleet', icon: Truck },
    { label: 'Procedures', link: '/procedures', icon: Book },
    { label: 'Help', link: '/help', icon: HelpCircle }, 
    { label: 'Settings', link: '/settings', icon: Settings }
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
                  <menuItem.icon />
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