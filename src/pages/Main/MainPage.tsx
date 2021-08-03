import React from 'react';
import { Redirect, Route, RouteComponentProps, useParams } from 'react-router';
import { IonContent, IonSplitPane, IonRouterOutlet, IonButtons, IonHeader, IonImg, IonMenuButton, IonMenuToggle, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';

import { routerLinks } from '../../utils/helpers/router.helper'
import Menu from '../../components/Menu/Menu';

/* Pages */
import ProfilePage from './Profile/ProfilePage';
import ReposPage from './Profile/Repos/ReposPage';
import ReposFavPage from './Profile/Repos/Favorites/FavoritesPage';

import './MainPage.css'

const Main: React.FC = () => {

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
                  </IonToolbar>
               </IonHeader>
               <IonRouterOutlet id="hellobuildMenu" className="main-page">
                  <Route exact path={routerLinks.profile}>
                     <ProfilePage/>
                  </Route>
                  <Route exact path={routerLinks.profileRepos}> 
                     <ReposPage />
                  </Route>
                  <Route exact path={routerLinks.profileReposFav}>
                     <ReposFavPage /> 
                  </Route>
               </IonRouterOutlet>
            </IonPage>
         </IonSplitPane>
      </IonContent>
      
       
   );
};

export default Main;