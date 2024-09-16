import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import ProductList from '../components/ProductList';
import useProduct from '../hooks/useProduct';

const Product: React.FC = () => {
  const { products, filterProducts } = useProduct();

  const handleSearch = (event: CustomEvent) => {
    const query = event.detail.value as string;
    filterProducts(query);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar
            animated={true}
            placeholder='Search'
            onIonInput={handleSearch}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ProductList products={products} />
      </IonContent>
    </IonPage>
  );
};

export default Product;
