import useQuery from 'hooks/use-query';
import React from 'react';
import ApiServices from 'services/api-services';
import CerealCardLayout from './cereal-card.layout';
import CerealCard from './cereals-card';
import Header from './header';

// Komponentas, negali būti asinchroninis, jo grąžinimas vyksta sinchroniškai
const CerealsPage = () => {
  const {
    data: cereals,
  } = useQuery(ApiServices.fetchCereals, []);

  const headerTitle = `All products (${cereals.length})`;

  return (
    <>
      <Header>{headerTitle}</Header>
      {
        cereals.length > 0 && (
          <CerealCardLayout>
            {cereals.map((beer) => <CerealCard key={beer.id} {...beer} />)}
          </CerealCardLayout>
        )
      }
    </>
  );
};

export default CerealsPage;
