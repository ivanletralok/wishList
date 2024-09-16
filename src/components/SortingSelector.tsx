import React from 'react';
import { IonSelect, IonSelectOption, IonList } from '@ionic/react';

interface SortingSelectorProps {
  sortOrder: string;
  onSortOrderChange: (value: string) => void;
}

const SortingSelector: React.FC<SortingSelectorProps> = ({ sortOrder, onSortOrderChange }) => (
  <IonList>
    <IonSelect
      label='Order By: '
      value={sortOrder}
      onIonChange={(e: CustomEvent) => onSortOrderChange(e.detail.value)}
    >
      <IonSelectOption value='name'>Name</IonSelectOption>
      <IonSelectOption value='price'>Price</IonSelectOption>
      <IonSelectOption value='creationAt'>Date</IonSelectOption>
    </IonSelect>
  </IonList>
);

export default SortingSelector;
