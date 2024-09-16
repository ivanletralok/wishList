import React, { lazy, Suspense } from 'react';
import {
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonIcon,
	IonRouterOutlet,
	IonSpinner,
} from '@ionic/react';
import { homeOutline, heartOutline, cartOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

const Product = lazy(() => import('./Products'));
const Wishlist = lazy(() => import('./Wishlist'));
const Home = lazy(() => import('../components/Home'));

const Tabs: React.FC = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Suspense
					fallback={<IonSpinner className='text-center w-full mt-20'></IonSpinner>}>
					<Route exact path='/home' component={Home} />
					<Route exact path='/wishlist' component={Wishlist} />
					<Route exact path='/product' component={Product} />
					<Route exact path='/'>
						<Redirect to='/home' />
					</Route>
				</Suspense>
			</IonRouterOutlet>
			<IonTabBar slot='bottom'>
				<IonTabButton tab='home' href='/home'>
					<IonIcon icon={homeOutline} />
					<IonLabel>Home</IonLabel>
				</IonTabButton>
				<IonTabButton tab='product' href='/product'>
					<IonIcon icon={cartOutline} />
					<IonLabel>Product</IonLabel>
				</IonTabButton>
				<IonTabButton tab='wishlist' href='/wishlist'>
					<IonIcon icon={heartOutline} />
					<IonLabel>Wishlist</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default Tabs;
