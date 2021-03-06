import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonTitle, IonToast, ViewLifeCycleManager } from '@ionic/react';

import { colSizes, hbPage, toastPageInterface } from '../../../components/layouts/Page.template';

import '../../../components/layouts/css/layout.css';
import { ban, logoGithub, logoLinkedin } from 'ionicons/icons';

const Welcome: React.FC = () => {

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
                     Welcome to my React test!
                     </IonCardTitle>
                     <IonCardContent className={hbPage.cardContent.classes}>
                        <p>
                           First of all, thanks to you for giving me the opportunity to demonstrate my capabilities, mainly to Susana Mej??a who contacted me.
                        </p>
                        <p>
                           I really enjoy my job and I love what I do, therefore I hope my test has enough for you to enjoy too.
                        </p>
                        <p>
                           In the upper right you will find a play button with a relaxing song recommended for development, if you want you can listen it while you review the test :)
                           Don't worry! Volume is at 50%.
                        </p>
                        <p>
                           This test is also adapted for mobile devices. As it is a hybrid application of Ionic React, if you want, with a few lines in the terminal, you can deploy for Android and iOs at once, and test this App as hybrid application on your phones.
                        </p>
                        
                     </IonCardContent>
                     <IonCardTitle className={hbPage.cardTitle.classes}>
                        GitHub
                     </IonCardTitle>
                     <IonCardContent className={hbPage.cardContent.classes}>
                        <IonButton
                           color="dark"
                           className="ion-margin-bottom"
                           expand="full"
                           target="_blank"
                           href="https://github.com/havo-ao/hello-build-react"
                        >
                           <IonIcon slot="start" icon={logoGithub}></IonIcon>
                           This Proyect on GitHub
                        </IonButton>
                     </IonCardContent>
                     <IonCardTitle className={hbPage.cardTitle.classes}>
                        Social Networks
                     </IonCardTitle>
                     <IonCardContent className={hbPage.cardContent.classes}>
                        <IonButton
                           color="secondary"
                           className="ion-margin-bottom"
                           expand="full"
                           target="_blank"
                           href="https://www.linkedin.com/in/acorozco/"
                        >
                           <IonIcon slot="start" icon={logoLinkedin}></IonIcon>
                           My LinkedIn Profile
                        </IonButton>
                     </IonCardContent>
                     <IonCardTitle className={hbPage.cardTitle.classes}>
                        Features
                     </IonCardTitle>
                     <IonCardContent className={hbPage.cardContent.classes}>
                        <IonButton
                           color="primary"
                           className="ion-margin-bottom"
                           expand="full"
                           routerLink="/404"
                        >
                           <IonIcon slot="start" icon={ban}></IonIcon>
                           404 Page
                        </IonButton>
                     </IonCardContent>
                  </IonCard>
               </IonCol>
            </IonRow>
         </IonGrid>
      </IonContent>
      
       
   );
};

export default Welcome;