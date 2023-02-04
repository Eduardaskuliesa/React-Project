import CerealsModel from 'models/cereals';
import React from 'react';
import ApiServices from 'services/api-services';
import DrawerLayout from '../../components/layouts/drawer-layouts';
import DrawerContent from './drawer-content';

// Komponentas, negali būti asinchroninis, jo grąžinimas vyksta sinchroniškai
const ProductsPage = () => {
  const [cereals, setCereals] = React.useState<CerealsModel[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<null | string>(null);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fecthCereals = await ApiServices.fetchCereals();
        setCereals(fecthCereals);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  let mainContent: React.ReactNode;
  if (error !== null) {
    mainContent = <div style={{ color: 'red' }}>{error}</div>;
  } else if (loading) {
    mainContent = '... loading';
  } else {
    mainContent = <pre>{JSON.stringify(cereals, null, 4)}</pre>;
  }

  return (
    <DrawerLayout drawerContent={<DrawerContent />}>
      {mainContent}
    </DrawerLayout>
  );
};

export default ProductsPage;
