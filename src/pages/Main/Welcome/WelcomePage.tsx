import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonRow, IonTitle, IonToast } from '@ionic/react';

import { colSizes, hbPage, toastPageInterface } from '../../../components/layouts/Page.template';

import '../../../components/layouts/css/layout.css';

const Welcome: React.FC = () => {

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
                  Welcome!
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
                        <p>Welcome to my React test!</p>
                        <p>
                           First of all, thanks to you for giving me the opportunity to demonstrate my capabilities, mainly to Susana Mejía who contacted me.
                        </p>
                        <p>
                           I really enjoy my job and I love what I do, therefore I hope my test has enough for you to enjoy too.
                        </p>
                        <p>
                           In the upper right you will find a play button with a relaxing song recommended for development, if you want you can listen it while you review the test :)
                        </p>
                        <p>
                           This test is also adapted for mobile devices. As it is a hybrid application of Ionic React, if you want, with a few lines in the terminal, you can deploy for Android and for iOs at once, and test this App as hybrid application on your phones.
                        </p>
                        
                     </IonCardContent>
                  </IonCard>
               </IonCol>
            </IonRow>
         </IonGrid>
      </IonContent>
      
       
   );
};

export default Welcome;