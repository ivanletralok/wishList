import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';
import Tabs from './pages/Tabs';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<ToastContainer />
		<Loading />
		<IonReactRouter>
			<Route path='/' component={Tabs} />
			<Route exact path='/' render={() => <Redirect to='/home' />} />
		</IonReactRouter>
	</IonApp>
);

export default App;
