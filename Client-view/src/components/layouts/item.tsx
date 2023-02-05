import React from 'react';
import { Link } from 'react-router-dom';
import IconButton, { IconButtonProps } from '../presentational/icon-button';
import classes from './item.module.scss';

type ItemProps = {
  children: React.ReactNode,
  icon: IconButtonProps['icon'],
  link: string,
};

const Item: React.FC<ItemProps> = ({ children, icon, link }) => (
  <Link to={link} className={classes.item}>
    <span className={classes.text}>{children}</span>
    <span>
      <IconButton icon={icon} color="white" />
    </span>
  </Link>
);

export default Item;
