import React from 'react';
import { Redirect, Route, useParams } from 'react-router';
import { IonContent, IonSplitPane, IonRouterOutlet } from '@ionic/react';

import { routerLinks } from '../../utils/helpers/router.helper'
import Menu from '../../components/Menu/Menu';

/* Pages */
import ProfilePage from './Profile/ProfilePage';
import ReposPage from './Profile/Repos/ReposPage';
import ReposFavPage from './Profile/Repos/Favorites/FavoritesPage'

interface AdminProps {}

const Main: React.FC<AdminProps> = () => {

   return(
      
      <IonContent>
         <IonSplitPane contentId="hellobuild-menu">
            <Menu />
            <IonRouterOutlet id="hellobuild-menu">
               <Route path="/" exact={true}>
                  <Redirect to={routerLinks.login} />
               </Route>
               <Route exact path={routerLinks.profile} 
                  render={() => <ProfilePage />} 
               />
               <Route exact path={routerLinks.profileRepos} 
                  render={() => <ReposPage />} 
               />
               <Route exact path={routerLinks.profileReposFav} 
                  render={() => <ReposFavPage />} 
               />
            </IonRouterOutlet>
         </IonSplitPane>
      </IonContent>
      
       
   );
};

export default Main;