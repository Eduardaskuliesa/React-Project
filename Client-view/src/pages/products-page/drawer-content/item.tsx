import React from 'react';
import IconButton, { IconButtonProps } from '../../../components/presentational/icon-button';
import classes from './item.module.scss';

type ItemProps = {
  children: React.ReactNode,
  icon: IconButtonProps['icon'],
};

const Item: React.FC<ItemProps> = ({ children, icon }) => (
  <div className={classes.item}>
    <span>{children}</span>
    <span>
      <IconButton icon={icon} color="white" />
    </span>
  </div>
);

export default Item;
