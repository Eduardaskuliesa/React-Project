import React from 'react';
import classes from './cereal-card-layout.module.scss';

type CerealCardLayoutProps = {
  children: React.ReactNode,
};

const CerealCardLayout: React.FC<CerealCardLayoutProps> = ({ children }) => (
  <div className={classes.layout}>{children}</div>
);

export default CerealCardLayout;
