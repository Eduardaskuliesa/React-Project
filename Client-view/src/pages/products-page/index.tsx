import useQuery from 'hooks/use-query';
import React from 'react';
import ApiServices from 'services/api-services';
import DrawerLayout from '../../components/layouts/drawer-layouts';
import CerealCardLayout from './cereal-card.layout';
import CerealCard from './cereals-card';
import DrawerContent from './drawer-content';
import Header from './header';

// Komponentas, negali būti asinchroninis, jo grąžinimas vyksta sinchroniškai
const CerealsPage = () => {
  const {
    data: cereals,
  } = useQuery(ApiServices.fetchCereals, []);

  const headerTitle = `All products (${cereals.length})`;

  return (
    <DrawerLayout drawerContent={<DrawerContent />}>
      <Header>{headerTitle}</Header>
      {cereals.length > 0 && (
        <CerealCardLayout>
          {cereals.map((cereal) => <CerealCard {...cereal} />)}
        </CerealCardLayout>
      )}
    </DrawerLayout>
  );
};

export default CerealsPage;
