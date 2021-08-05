import React, { useEffect, useState } from 'react';
import { 
   IonMenu, 
   IonHeader, 
   IonToolbar, 
   IonTitle, 
   IonContent, 
   IonList, 
   IonItem , 
   IonIcon, 
   IonLabel, 
   IonImg, 
   IonThumbnail 
} from '@ionic/react';
import { 
   closeCircle, 
   closeCircleOutline, 
   fileTrayStacked, 
   fileTrayStackedOutline, 
   happy, 
   happyOutline, 
   person, 
   personOutline, 
   star,
   starOutline
} from 'ionicons/icons';

/* Context */
import useAuth from '../../auth/useAuth';

// helpers
import { routerLinks } from '../../utils/helpers/router.helper'

import './Menu.css'

// Template options
import { menuTemplate } from './Menu.template'
import { useHistory } from 'react-router';

export const Menu: React.FC = () => {

   const [selected, setSelected] = useState(window.location.pathname);
   const [navigate, setNavigate] = useState(false)
   const history = useHistory()

   useEffect(() => {
      setSelected(window.location.pathname)
   },[navigate]);

   const { logout } = useAuth();

   return (
   <IonMenu 
      side='start'
      contentId='hellobuildMenu'
   >
      <IonHeader>
         <IonToolbar color='primary'>
            <IonThumbnail slot="start">
               <IonImg src={'/assets/img/build-logo.png'} />
            </IonThumbnail>
            <IonTitle color="">Menu</IonTitle>
         </IonToolbar>
      </IonHeader>
      <IonContent color="secondary">
         <IonList className={menuTemplate.list.classes}>
         <IonItem
            onClick={()=> {
               setNavigate(navigate? false : true)
            }}
            className={selected == routerLinks.welcome ? 'selected' : 'repose'} 
            lines='none'
            routerLink={routerLinks.welcome} 

         >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={happyOutline}
               />
               <IonLabel color="light">Welcome</IonLabel>
            </IonItem >
            <IonItem
               onClick={()=> {
                  setNavigate(navigate? false : true)
               }}
               className={selected == routerLinks.profile ? 'selected' : 'repose'} 
               lines='none'  
               routerLink={routerLinks.profile} 
   
            >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={personOutline}
               />
               <IonLabel color="light">Profile</IonLabel>
            </IonItem >
            <IonItem
               onClick={()=> {
                  setNavigate(navigate? false : true)
               }}
               className={selected == routerLinks.profileRepos ? 'selected' : 'repose'} 
               lines='none'  
               routerLink={routerLinks.profileRepos} 
   
            >
               <IonIcon
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={fileTrayStackedOutline}
               />
               <IonLabel color="light">Repositories</IonLabel>
            </IonItem >
            <IonItem
               onClick={()=> {
                  setNavigate(navigate? false : true)
               }}
               className={selected == routerLinks.profileReposFav ? 'selected' : 'repose'} 
               lines='none'  
               routerLink={routerLinks.profileReposFav} 
   
            >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={starOutline}
               />
               <IonLabel color="light">Favorite repositories</IonLabel>
            </IonItem >
            <IonItem
               onClick={()=> {
                  logout();
                  history.push(routerLinks.login);
               }}
               lines='none'
               className="repose"
            >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={closeCircleOutline}
               />
                  <IonLabel color="light">Log out</IonLabel>
            </IonItem >
          </IonList>
        </IonContent>
      </IonMenu>
  );
};

export default Menu;