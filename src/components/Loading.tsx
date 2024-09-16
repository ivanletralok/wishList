import { IonLoading } from '@ionic/react';
import { useProductsStore } from '../store/useProductsStore';

function Loading() {
   const showLoading = useProductsStore((state) => state.loading);
  return (
    <>
      <IonLoading className="custom-loading text-blue-500" isOpen={showLoading} message="Loading..."/>
    </>
  );
}
export default Loading;