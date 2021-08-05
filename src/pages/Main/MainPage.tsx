import React from 'react';
import { Redirect, RouteComponentProps, Switch, useHistory } from 'react-router';
import { Route, useParams } from "react-router-dom";
import { IonContent, IonSplitPane, IonRouterOutlet, IonButtons, IonHeader, IonImg, IonMenuButton, IonMenuToggle, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';

import { routerLinks } from '../../utils/helpers/router.helper'
import Menu from '../../components/Menu/Menu';

/* Pages */
import WelcomePage from './Welcome/WelcomePage';
import ProfilePage from './Profile/ProfilePage';
import ReposPage from './Profile/Repos/ReposPage';
import ReposFavPage from './Profile/Repos/Favorites/FavoritesPage';
import NotFoundPage from './404/404Page';

import './MainPage.css'
import HavoAudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import useAuth from '../../auth/useAuth';

const Main: React.FC = () => {

   const history = useHistory();

   const { user, isLogged } = useAuth();

   //if (!user.id) return <Redirect to={routerLinks.login} />

   return( 
      <IonContent>
         <IonSplitPane contentId="hellobuildMenu">
            <Menu />
            <IonPage id="hellobuildMenu">
               <IonHeader>
                  <IonToolbar color="primary" text-center>
                        <IonButtons slot='start'>
                           <IonMenuButton />
                        </IonButtons>
                        <IonMenuToggle>
                        </IonMenuToggle>
                        <IonTitle>Hello Build Main</IonTitle>
                        <HavoAudioPlayer url="assets/mp3/Polygram.mp3"/>
                  </IonToolbar>
               </IonHeader>
               
                  { isLogged() ?
                     <IonRouterOutlet id="hellobuildMenu" className="main-page">
                        <Switch>
                           <Route exact path={routerLinks.homepage}>
                              <Redirect to={routerLinks.welcome} />
                           </Route>
                           <Route exact path={routerLinks.welcome}>
                              <WelcomePage/>
                           </Route>
                           <Route exact path={routerLinks.profile}>
                              <ProfilePage/>
                           </Route>
                           <Route 
                              exact 
                              path={routerLinks.profileRepos} 
                              component={ReposPage} 
                           />
                           <Route exact path={routerLinks.profileReposFav}>
                              <ReposFavPage />
                           </Route>
                           <Route 
                              exact 
                              path={routerLinks.profileRepos+'/:code'} 
                              component={ReposPage} 
                           />
                           <Redirect 
                              from={routerLinks.login}
                              to={routerLinks.welcome} />
                           <Redirect 
                              from={routerLinks.signup} 
                              to={routerLinks.welcome} />
                           <Route 
                              path="*" 
                              component={NotFoundPage} 
                           />
                        </Switch>
                     </IonRouterOutlet>
                     :
                     <Route path={routerLinks.homepage}>
                        <Redirect to={routerLinks.login} />
                     </Route>
                  }                 
               
            </IonPage>
         </IonSplitPane>
      </IonContent>
      
      
       
   );
};

export default Main;