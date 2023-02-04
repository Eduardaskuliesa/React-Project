import React from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../presentational/icon-button';
import classes from './drawer-layouts.module.scss';
import cls from '../../helpers/cls';

type DrawerLayoutProps = {
  drawerContent: React.ReactNode,
  children: React.ReactNode
};

const DrawerLayout: React.FC<DrawerLayoutProps> = ({
  drawerContent,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const drawerClasses = [classes.drawer];
  if (open) drawerClasses.push(classes.open);

  const mainSectionClasses = [classes.main];
  if (open) mainSectionClasses.push(classes.open);

  return (
    <div className={classes.layout}>
      <aside className={cls(...drawerClasses)}>
        {drawerContent}
      </aside>
      <main className={cls(...mainSectionClasses)}>
        {children}
      </main>
      <div className={classes.toggler}>
        <IconButton icon={open ? faXmark : faBars} onClick={() => setOpen(!open)} />
      </div>
    </div>
  );
};

export default DrawerLayout;
