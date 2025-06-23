import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, end, children }: { to: string; end?: boolean; children: React.ReactNode }) => (
  <NavLink to={to} end={end}
    className={({ isActive }) => isActive ? 'nav-link selected' : 'nav-link'}>
    {children}
  </NavLink>
);

const Nav: React.FC = () => (
  <nav className="main-nav">
    <span className="logo-abs">rodos</span>
    <div className="nav-items">
      <NavItem to="/" end>Home</NavItem>
      <NavItem to="/showcase">Showcase</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </div>
  </nav>
);

export default Nav; 