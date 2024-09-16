import { IonToast } from '@ionic/react';

interface CustomToastProps {
	isOpen: boolean;
	message: string;
	color?: string;
	onDidDismiss: () => void;
}
export default function CustomToast({
	isOpen,
	message,
	color = 'primary',
	onDidDismiss,
}: CustomToastProps) {
	return (
		<IonToast
			isOpen={isOpen}
			message={message}
			duration={2000}
			onDidDismiss={onDidDismiss}
			cssClass={`custom-toast-${color}`}
		/>
	);
}
