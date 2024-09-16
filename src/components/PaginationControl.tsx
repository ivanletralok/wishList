import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className='flex items-center justify-between mx-4 '>
    <IonIcon
      icon={chevronBackOutline}
      className='cursor-pointer'
      onClick={() => onPageChange(currentPage - 1)}
      aria-disabled={currentPage === 1}
    />
    <span className='text-sm text-blue-500'>
      Page {currentPage} of {totalPages}
    </span>
    <IonIcon
      icon={chevronForwardOutline}
      className='cursor-pointer'
      onClick={() => onPageChange(currentPage + 1)}
      aria-disabled={currentPage === totalPages}
    />
  </div>
);

export default PaginationControls;
