import React from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import IconButton from '../presentational/icon-button';
import classes from './drawer-layouts.module.scss';
import cls from '../../helpers/cls';
import DrawerContent from '.';

const isHTMLElement = (el: EventTarget | null): el is HTMLElement => el instanceof HTMLElement;

const DrawerLayout = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const drawerHtmlElementRef = React.useRef<HTMLElement | null>(null);

  const drawerClasses = [classes.drawer];
  if (open) drawerClasses.push(classes.open);

  const mainSectionClasses = [classes.main];
  if (open) mainSectionClasses.push(classes.open);

  React.useEffect(() => {
    const handleClickAway = (event: WindowEventMap['click']) => {
      const drawerHtmlElement = drawerHtmlElementRef.current;

      if (open && drawerHtmlElement !== null && isHTMLElement(event.target)) {
        const targetDescendentOfDrawer = event.target.contains(drawerHtmlElement);
        if (!targetDescendentOfDrawer) {
          setOpen(false);
        }
      }
    };

    window.addEventListener('click', handleClickAway);

    return () => {
      window.removeEventListener('click', handleClickAway);
    };
  }, [open]);

  return (
    <div className={classes.layout}>
      <aside className={cls(...drawerClasses)} ref={drawerHtmlElementRef}>
        <DrawerContent />
      </aside>
      <main className={cls(...mainSectionClasses)}>
        <Outlet />
      </main>
      <div className={classes.toggler}>
        <IconButton
          icon={open ? faXmark : faBars}
          color={open ? 'white' : 'primary'}
          onClick={(event) => {
            event.stopPropagation();
            setOpen(!open);
          }}
        />
      </div>
    </div>
  );
};
export default DrawerLayout;
