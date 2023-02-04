import React from 'react';
import Item from './item';
import linksData from './links-data';

const DrawerContent = () => (
  <div>
    {linksData.map(({ icon, text }) => (
      <Item key={text} icon={icon}>
        {text}
      </Item>
    ))}
  </div>
);

export default DrawerContent;
