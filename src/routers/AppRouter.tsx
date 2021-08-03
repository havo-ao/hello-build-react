import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Pages */
import MainPage from '../pages/Main/MainPage';
import LoginPage from '../pages/Login/LoginPage';
import SingUpPage from '../pages/SingUp/SingUpPage';

/* Helpers */
import { routerLinks } from '../utils/helpers/router.helper'

const AppRouter = () => {
   return (
      <IonReactRouter>
         <Route exact path={routerLinks.homepage} 
            render={() => <MainPage />} 
         />   
         <Route exact path={routerLinks.login}>
            <LoginPage />
         </Route>
         <Route exact path={routerLinks.singup} >
            <SingUpPage />
         </Route>
      </IonReactRouter>
   );
}

export default AppRouter;