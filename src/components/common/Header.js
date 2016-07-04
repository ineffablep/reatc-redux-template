import React  from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/about"activeClassName="active">About Us</Link>
      <Link to="/contact"activeClassName="active">Contact Us</Link>
    </nav>
  );
};
export default Header;
