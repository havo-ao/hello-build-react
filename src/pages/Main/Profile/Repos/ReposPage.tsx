import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonRow, IonTitle, IonToast } from '@ionic/react';

import { colSizes, hbPage, toastPageInterface } from '../../../../components/layouts/Page.template';

import '../../../../components/layouts/css/layout.css';

const Repos: React.FC = () => {

   const [mounted, setMounted] = useState(false);
   const [profileToast, setProfileToast] = useState<toastPageInterface>(
      {
         show: false, 
         msg: undefined, 
         color: undefined
      }
   );

   return(
      
      <IonContent className="login-content-bg">
         {/* Top bar */}
         <IonGrid className="top-bar" >
            <IonRow>
               <IonTitle className="ion-text-start top-bar-title">
                  My repositories
               </IonTitle>
               <IonToast
                  isOpen={profileToast.show}
                  onDidDismiss={ () => {
                     if(mounted){setProfileToast(
                        {
                           show:false, 
                           msg: undefined, 
                           color: undefined
                        }
                     )
                  }
                  }}
                  message={profileToast.msg}
                  duration={3000}
                  color={profileToast.color}
                  buttons={[
                     {
                        text: 'Cerrar',
                        role: 'cancel',
                        handler: () => {
                           console.log('Cancel clicked');
                        }
                     }
                  ]}
               />
            </IonRow>
         </IonGrid>
         {/* Content Grid */}
         <IonGrid className="ion-no-padding">
            <IonRow className="ion-justify-content-around">
               {/* Card Content */}
               <IonCol 
                  sizeXs={colSizes.xs} 
                  sizeSm={colSizes.sm}  
                  sizeMd={colSizes.md}
                  sizeLg={colSizes.lg}
                  sizeXl={colSizes.xl} 
                  className={hbPage.col.classes}
               >
                  <IonCard className={hbPage.card.classes}>
                     <IonCardTitle className={hbPage.cardTitle.classes}>
                        Title
                     </IonCardTitle>
                     <IonCardContent className={hbPage.cardContent.classes}>
                        Content!!!
                     </IonCardContent>
                  </IonCard>
               </IonCol>
            </IonRow>
         </IonGrid>
      </IonContent>
      
       
   );
};

export default Repos;