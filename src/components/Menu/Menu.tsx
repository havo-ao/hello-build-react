import React from 'react';
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

// helpers
import { routerLinks } from '../../utils/helpers/router.helper'

import './Menu.css'

// Template options
import { menuTemplate } from './Menu.template'

export const Menu: React.FC = () => (
<>
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
            lines='none'
            routerLink={routerLinks.homepage} 
            color={menuTemplate.item.color}
         >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={happyOutline}
               />
               <IonLabel>Welcome</IonLabel>
            </IonItem >
            <IonItem 
               lines='none'  
               routerLink={routerLinks.profile} 
               color={menuTemplate.item.color}
            >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={personOutline}
               />
               <IonLabel>Profile</IonLabel>
            </IonItem >
            <IonItem 
               lines='none'  
               routerLink={routerLinks.profileRepos} 
               color={menuTemplate.item.color}
            >
               <IonIcon
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={fileTrayStackedOutline}
               />
               <IonLabel>Repositories</IonLabel>
            </IonItem >
            <IonItem 
               lines='none'  
               routerLink={routerLinks.profileReposFav} 
               color={menuTemplate.item.color}
            >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={starOutline}
               />
               <IonLabel>Favorite repositories</IonLabel>
            </IonItem >
            <IonItem 
               lines='none'  
               routerLink={routerLinks.logout} 
               color={menuTemplate.item.color}
            >
               <IonIcon 
                  color={menuTemplate.icon.color} 
                  slot="start" 
                  icon={closeCircleOutline}
               />
                  <IonLabel>Log out</IonLabel>
            </IonItem >
          </IonList>
        </IonContent>
      </IonMenu>
  </>
);

export default Menu;