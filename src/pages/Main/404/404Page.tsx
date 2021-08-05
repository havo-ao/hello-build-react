import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonRow, IonText, IonTitle, IonToast, ViewLifeCycleManager } from '@ionic/react';

import { colSizes, hbPage, toastPageInterface } from '../../../components/layouts/Page.template';

import './style404.css';

const NotFoundPage: React.FC = () => {

   const [mounted, setMounted] = useState(false);
   const [profileToast, setProfileToast] = useState<toastPageInterface>(
      {
         show: false, 
         msg: undefined, 
         color: undefined
      }
   );
   console.log('Pathname: ', window.location.pathname)

   return(
      
      <IonContent className="login-content-bg">
         {/* Content Grid */}
         <IonGrid className="ion-no-padding">
            <IonRow className="ion-justify-content-around">
               {/* Card Content */}
               <IonCol 
                  sizeXs="12" 
                  sizeSm="12"  
                  sizeMd="12"
                  sizeLg="12"
                  sizeXl="10" 
                  className={hbPage.col.classes}
               >
                  <IonCard className={hbPage.card.classes}>
                     <IonCardTitle className={hbPage.cardTitle.classes}>
                        
                     </IonCardTitle>
                     <IonCardContent className={hbPage.cardContent.classes}>
                        <IonText className="ion-text-center text-lost">
                           Ups! you're lost...
                        </IonText>
                        <IonText className="ion-text-center text-404">
                           404
                        </IonText>
                        <div className="four_zero_four_bg">
                        </div>
                     </IonCardContent>
                  </IonCard>
               </IonCol>
            </IonRow>
         </IonGrid>
      </IonContent>
      
       
   );
};

export default NotFoundPage;