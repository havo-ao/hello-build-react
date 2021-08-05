import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonLoading, IonRow, IonTitle, IonToast, useIonViewWillEnter } from '@ionic/react';
import axios from 'axios';
import { colSizes, hbPage, toastPageInterface } from '../../../../components/layouts/Page.template';

// @ts-ignore

import '../../../../components/layouts/css/layout.css';
import { callOutline, fileTrayStackedOutline, logoGithub, star, starOutline, trashOutline } from 'ionicons/icons';
import { RouteComponentProps, useParams } from 'react-router-dom';

import { contentRepositories } from '../../../../utils/content/repos.content'

interface Status {id: null | number, favorite: boolean}

const Repos: React.FC= () => {

   const [mounted, setMounted] = useState(false);
   const [repoToast, setRepoToast] = useState<toastPageInterface>(
      {
         show: false, 
         msg: undefined, 
         color: undefined
      }
   );
   const [showLoading, setShowLoading] = useState(false);
   const [content, setContent] = useState(false);
   const [repos, SetRepos] = useState<
      {
         name: string;
         description: string;
         langs: string;
         favorite: boolean;
      }[]
   >(contentRepositories)
   const [favorite, setFavorite] = useState(false);

   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const code = urlParams.get('code')

   const clientID = ''
   const clientSecret = ''
   const redirectUri = 'http://localhost:3000/profile/repos/'

   // let accessToken=''

   // if (code) {
   //    // axios({
   //    //    method: 'post',
   //    //    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`,
   //    //    headers: {
   //    //          accept: 'application/json',
   //    //          "Access-Control-Allow-Origin": "http://localhost:3000",
   //    //          "Access-Control-Allow-Credentials": "true"
   //    //    }
   //    //  }).then((response) => {
   //    //    accessToken = response.data.access_token
   //    //    console.log('Token: ',accessToken)
   //    //  }).catch((err) => console.log({ message: err.message }));

   // }

   const reposHandler = async () => {
      setShowLoading(true);
      setTimeout(
         () => {
            console.log('Im ready!!!!!')
            setContent(true);
         }, 
         1500
       );
   }

   const favoriteHandler = (index: number) => {
      Object(repos)[index].favorite ? 
         Object(repos)[index].favorite = false : 
         Object(repos)[index].favorite = true;
      let name = Object(repos)[index].name
      let complement = Object(repos)[index].favorite ?
         ' has been successfully selected as a favorite.' : 
         ' has been successfully removed from favorites.';
 
      setRepoToast(
         {
            show:true, 
            msg: 'Repository '+ name + complement, 
            color: 'success'
         }
      )
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
                  isOpen={repoToast.show}
                  cssClass="toast-text"
                  onDidDismiss={ () => {
                     setRepoToast(
                        {
                           show:false, 
                           msg: undefined, 
                           color: undefined
                        }
                     )
                  }
                  }
                  message={repoToast.msg}
                  duration={3000}
                  color={repoToast.color}
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
                        GitHub Library
                     </IonCardTitle>
                     <IonCardContent className={hbPage.cardContent.classes}>
                        <div className="ion-text-center">
                           <IonButton
                              color="dark"
                              onClick={()=> {
                                 setContent(false);
                                 reposHandler();
                              }}
                           >
                              <IonIcon slot="start" icon={logoGithub}></IonIcon>
                              {!content ? 'Get my Repositories' : 'Refresh list'}
                           </IonButton>
                        </div>
                        <IonList>
                           <IonItemDivider>Repository list</IonItemDivider>
                           <IonGrid>
                              <IonRow className="ion-padding-start">
                              { !content 
                                    ?  <IonLabel className="ion-padding">Repositories have not been loaded.</IonLabel>
                                    :  repos.map( (repo: any, index: any) =>
                                    
                                    <IonCol id={'repo-'+index} key={index} sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12"  sizeXl="6" className="ion-padding-end">
                                       <IonItem className="ion-item-repo" lines="none" button>
                                          <IonLabel>    
                                             <h2>
                                                <IonIcon className="ion-margin-end" size="small" slot="start" icon={fileTrayStackedOutline}></IonIcon>
                                                {Object(repo)['name']}
                                             </h2>
                                             <h3>
                                                {Object(repo)['description']}
                                             </h3>
                                             <p>{Object(repo)['langs']}</p>
                                          </IonLabel>
                                          <IonButton 
                                             onClick={() => { 
                                                favoriteHandler(index);
                                             }}
                                             fill="clear"
                                             size="default"
                                             color="warning"
                                          >
                                             <IonIcon slot="icon-only" icon={Object(repos)[index].favorite ? star : starOutline} />
                                          </IonButton>
                                       </IonItem>
                                    </IonCol>
                                 )}
                              </IonRow>
                           </IonGrid>
                        </IonList>
                     </IonCardContent>
                  </IonCard>
               </IonCol>
            </IonRow>
         </IonGrid>
         <IonLoading
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Loading...'}
            duration={2500}
         />
      </IonContent>
      
       
   );
};

export default Repos;