import React from 'react';
import classes from './header.module.scss';

type HeaderProps = {
  children: React.ReactNode
};

const Header: React.FC<HeaderProps> = ({ children }) => (
  <div className={classes.header}>{children}</div>
);

export default Header;
