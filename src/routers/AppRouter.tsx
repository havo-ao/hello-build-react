import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

/* Pages */
import MainPage from '../pages/Main/MainPage';
import LoginPage from '../pages/Login/LoginPage';
import SingUpPage from '../pages/SignUp/SignUpPage';

/* Helpers */
import { routerLinks } from '../utils/helpers/router.helper'
import useAuth from '../auth/useAuth';

const AppRouter = () => {

   const { user, isLogged } = useAuth();

   return (
      <IonReactRouter>
         { !isLogged() ?
            <IonRouterOutlet>
               <Switch>
                  <Route exact path={routerLinks.login}>
                     <LoginPage />
                  </Route>
                  <Route exact path={routerLinks.signup} >
                     <SingUpPage />
                  </Route>
                  <Redirect from="*" to={routerLinks.login} />
               </Switch>
            </IonRouterOutlet>
            :
            <IonRouterOutlet>
               <Switch>
                  <Route path={routerLinks.homepage}>
                     <MainPage />
                  </Route>
               </Switch>
            </IonRouterOutlet>
         }
      </IonReactRouter>
   );
}

export default AppRouter;