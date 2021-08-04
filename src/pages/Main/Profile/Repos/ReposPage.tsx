import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonTitle, IonToast } from '@ionic/react';
import axios from 'axios';
import { colSizes, hbPage, toastPageInterface } from '../../../../components/layouts/Page.template';

// @ts-ignore

import '../../../../components/layouts/css/layout.css';
import { logoGithub } from 'ionicons/icons';
import { RouteComponentProps, useParams } from 'react-router-dom';


const Repos: React.FC= () => {

   const [mounted, setMounted] = useState(false);
   const [profileToast, setProfileToast] = useState<toastPageInterface>(
      {
         show: false, 
         msg: undefined, 
         color: undefined
      }
   );

   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const code = urlParams.get('code')

   console.log('githubcodeis: ',code)

   const clientID = '965ff11ff06aeab4dfa0'
   const clientSecret = 'a91d71b4564edcc4ed0681b78a20372dad6f8257'
   const redirectUri = 'http://localhost:3000/profile/repos/'

   let accessToken=''

   if (code) {
      // axios({
      //    method: 'post',
      //    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`,
      //    headers: {
      //          accept: 'application/json',
      //          "Access-Control-Allow-Origin": "http://localhost:3000",
      //          "Access-Control-Allow-Credentials": "true"
      //    }
      //  }).then((response) => {
      //    accessToken = response.data.access_token
      //    console.log('Token: ',accessToken)
      //  }).catch((err) => console.log({ message: err.message }));

   }


   const reposHandler = async () => {
     
   }


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
                        <IonButton
                           color="dark"
                           href={`https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo&redirect_uri=${redirectUri}`}
                           onClick={()=> {
                              reposHandler();
                           }}>
                              <IonIcon slot="start" icon={logoGithub}></IonIcon>
                           Get my Repositories
                        </IonButton>
                     </IonCardContent>
                  </IonCard>
               </IonCol>
            </IonRow>
         </IonGrid>
      </IonContent>
      
       
   );
};

export default Repos;