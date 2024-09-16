import { IonAlert } from '@ionic/react';
import { useAlertStore } from '../store/useAlertStore';

interface CustomAlertProps {
	header: string;
	message: string;
	confirmeRemove?: () => void;
}

export default function CustomAlert({
	header,
	message,
	confirmeRemove,
}: CustomAlertProps) {
	const { showAlert, setShowAlert } = useAlertStore();

	return (
		<IonAlert
			isOpen={showAlert}
			header={header}
			message={message}
			buttons={[
				{
					text: 'No',
					role: 'cancel',
					cssClass: 'alert-button-cancel',
					handler: () => {
						setShowAlert(false);
					},
				},
				{
					text: 'Yes',
					cssClass: 'alert-button-confirm',
					handler: confirmeRemove,
				},
			]}
		/>
	);
}
