import React from 'react';
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import classes from './icon-button.module.scss';
import cls from '../../helpers/cls';

export type IconButtonProps = Omit<FontAwesomeIconProps, 'onClick' | 'color'> & {
  color?: 'primary' | 'white',
  onClick?: VoidFunction,
};

const IconButton: React.FC<IconButtonProps> = ({
  color = 'primary',
  onClick,
  ...fontAwsomeIconProps
}) => (
  <button type="button" className={cls(classes.btn, classes[color])} onClick={onClick}>
    <FontAwesomeIcon {...fontAwsomeIconProps} />
  </button>
);

export default IconButton;
