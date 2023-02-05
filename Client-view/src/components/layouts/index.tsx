import React from 'react';
import Item from './item';
import linksData from './link-data';

const DrawerContent = () => (
  <div>
    {linksData.map(({ icon, text, link }) => (
      <Item key={text} icon={icon} link={link}>
        {text}
      </Item>
    ))}
  </div>
);

export default DrawerContent;
