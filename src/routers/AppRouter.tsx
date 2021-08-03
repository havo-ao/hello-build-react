import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Pages */
import MainPage from '../pages/Main/MainPage';
import LoginPage from '../pages/Login/LoginPage';
import SingUpPage from '../pages/SignUp/SignUpPage';
import ProfilePage from '../pages/Main/Profile/ProfilePage';

/* Helpers */
import { routerLinks } from '../utils/helpers/router.helper'

const AppRouter = () => {
   return (
      <IonReactRouter>
         <IonRouterOutlet>
            <Route path={routerLinks.homepage}><MainPage /></Route>
            <Route exact path={routerLinks.login}>
               <LoginPage />
            </Route>
            <Route exact path={routerLinks.signup} >
               <SingUpPage />
            </Route>
         </IonRouterOutlet>
      </IonReactRouter>
   );
}

export default AppRouter;