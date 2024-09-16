import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AlertState {
	showAlert: boolean;
	selectedProductId: number | null;
	setShowAlert: (showAlert: boolean) => void;
	setSelectedProductId: (selectedProductId: number | null) => void;
}

export const useAlertStore = create<AlertState>()(

	devtools((set) => ({
		showAlert: false,
		selectedProductId: null,
		setShowAlert: (showAlert) => set({ showAlert }),
		setSelectedProductId: (selectedProductId) => set({ selectedProductId })
	}))
);
