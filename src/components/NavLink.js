import React from 'react';
import { Link } from 'react-router';

function NavLink(props) {
	return <Link {...props}
              to={props.to}
              activeClassName="active" />
}
export default NavLink;
