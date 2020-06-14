import React from 'react';
import Signout from '../../../Auth/Signout';
import { MessageSquare, Bell, Edit, HelpCircle, Settings } from 'react-feather';
import { Dropdown } from 'react-bootstrap';

function NavbarRight(props) {

	// The forwardRef is important!!
	// Dropdown needs access to the DOM node in order to position the Menu
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<a
			className="dropdown-link new-indicator"
			href="."
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</a>
	));

	// forwardRef again here!
	// Dropdown needs access to the DOM of the Menu to measure it
	const CustomMenu = React.forwardRef(
	  ({ children, className, 'aria-labelledby': labeledBy }, ref) => {
	    return (
	      <div
	        ref={ref}
	        className={className}
	        aria-labelledby={labeledBy}
	      >
	        {children}
	      </div>
	    );
	  },
	);

	return (
		<>
			<div className="navbar-right">
				<Dropdown className="dropdown-message">
					<Dropdown.Toggle as={CustomToggle}>
						<MessageSquare />
						<span>5</span>
					</Dropdown.Toggle>
					<Dropdown.Menu as={CustomMenu} className="dropdown-menu-right">
						<div className="dropdown-header">New Messages</div>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/350" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<strong>Socrates Itumay</strong>
									<p>nam libero tempore cum so...</p>
									<span>Mar 15 12:32pm</span>
								</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/500" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<strong>Joyce Chua</strong>
									<p>on the other hand we denounce...</p>
									<span>Mar 13 04:16am</span>
								</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/600" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<strong>Althea Cabardo</strong>
									<p>is there anyone who loves...</p>
									<span>Mar 13 02:56am</span>
								</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/500" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<strong>Adrian Monino</strong>
									<p>duis aute irure dolor in repre...</p>
									<span>Mar 12 10:40pm</span>
								</div>
							</div>
						</Dropdown.Item>
						<div className="dropdown-footer">
							<a href=".">View all Messages</a>
						</div>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown-notification">
					<Dropdown.Toggle as={CustomToggle}>
						<Bell />
						<span>2</span>
					</Dropdown.Toggle>
					<Dropdown.Menu as={CustomMenu} className="dropdown-menu-right">
						<div className="dropdown-header">Notifications</div>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/350" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
									<span>Mar 15 12:32pm</span>
								</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/500" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<p><strong>Joyce Chua</strong> just created a new blog post</p>
									<span>Mar 13 04:16am</span>
								</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/600" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<p><strong>Althea Cabardo</strong> just created a new blog post</p>
									<span>Mar 13 02:56am</span>
								</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item>
							<div className="media">
								<div className="avatar avatar-sm avatar-online">
									<img src="https://via.placeholder.com/500" className="rounded-circle" alt="" />
								</div>
								<div className="media-body mg-l-15">
									<p><strong>Adrian Monino</strong> added new comment on your photo</p>
									<span>Mar 12 10:40pm</span>
								</div>
							</div>
						</Dropdown.Item>
						<div className="dropdown-footer">
							<a href=".">View all Notifications</a>
						</div>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="dropdown-profile">
					<Dropdown.Toggle as={CustomToggle}>
						<div className="avatar avatar-sm">
							<img src="https://via.placeholder.com/500" className="rounded-circle" alt="" />
						</div>
					</Dropdown.Toggle>
					<Dropdown.Menu as={CustomMenu} className="dropdown-menu-right tx-13 user-menu">
						<div className="avatar avatar-lg mg-b-15">
							<img src="https://via.placeholder.com/500" className="rounded-circle" alt="" />
						</div>
						<h6 className="tx-semibold mg-b-5">{props.authUser.first_name} {props.authUser.last_name}</h6>
						<p className="mg-b-25 tx-12 tx-color-03">{props.authUser.role}</p>
						<Dropdown.Divider />
						<Dropdown.Item href="https://ineedhelpers.com"><HelpCircle /> Help</Dropdown.Item>
						<Dropdown.Item><Settings /> Settings</Dropdown.Item>
						<Dropdown.Item><Edit /> Change Password</Dropdown.Item>
						<Signout isDropdownItem={true} />
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</>
	)
}

export default NavbarRight;
