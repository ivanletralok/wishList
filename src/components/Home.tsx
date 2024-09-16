import { IonText, IonImg } from '@ionic/react';
import img from '../assets/img/shop.svg';

const Home = () => {
	return (
		<div className='relative flex flex-col items-center justify-between h-screen px-4 py-6'>
			<div className='relative z-10 text-center'>
				<IonText color='primary'>
					<h1 className='text-2xl font-bold mb-2'>Welcome to Your Online Store</h1>
				</IonText>

				<IonText color='medium'>
					<p className='text-lg'>
						Discover the best products at incredible prices!{' '}
					</p>
				</IonText>
			</div>

			<IonImg src={img} className='w-3/4 max-w-md  mb-52 md:mb-10 lg:mb-10' />
		</div>
	);
};

export default Home;
