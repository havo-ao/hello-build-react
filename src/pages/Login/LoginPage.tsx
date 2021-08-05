import React, { useState } from 'react';
import { IonAlert, IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonList, IonRow, IonText } from '@ionic/react';

import { routerLinks } from '../../utils/helpers/router.helper'

import './LoginPage.css'
import { Redirect, useHistory } from 'react-router';
import useAuth from '../../auth/useAuth';


const Login: React.FC = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [errors, setErrors] = useState([]);
   const [showAlertLogin, setShowAlertLogin] = useState(false);
   const history = useHistory();

   const { user } = useAuth();

   if (user.id) return <Redirect to={routerLinks.welcome} />

   const loginHandler = () => {
      console.log('email:', email, ' password: ', password);
      //setShowAlertLogin(true)

      if(!email){
         setEmailError(true);
      }

      if(!password){
         setPasswordError(true);
      }

      if(password && email){
         console.log('login actions')
         history.push(routerLinks.welcome);
      }
   }

   function errorMessages() {
      const errorMessages = errors.map((err: { message: any; }) => '* ' + err.message)
      const stringErrorMessages = errorMessages.join('<Br>');
      return stringErrorMessages;
   };

   return(
      
      <IonContent className="login-content-bg">
         <div className="login-bg">
            <div className="logo">
               <img src="./assets/img/hellobuild-logo.png" />
               <p>React exercise by Andrés Cañón</p>
            </div>
            <IonAlert
               isOpen={showAlertLogin}
               onDidDismiss={() => setShowAlertLogin(false)}
               header={'Auth Error'}
               message={errorMessages()}
               buttons={['Try again']}
            />
            <form>
                  <IonList>
                     <IonItem lines="none">
                        <IonLabel 
                           className="ion-label-users"
                           position="floating" color="secondary"
                        >
                           Email
                        </IonLabel>
                        <IonInput 
                           name="email" 
                           type="text" 
                           value={email} 
                           spellCheck={false} 
                           autocapitalize="off" 
                           onIonChange={
                              (e) => {
                                 setEmail((e.target as HTMLInputElement).value)
                                 setEmailError(false);
                              }
                           }
                           required
                        >
                        </IonInput>
                     </IonItem>
                     {emailError && <IonText color="danger">
                        <p className="ion-padding-start ion-no-margin">
                        Please enter a valid email 
                        </p>
                     </IonText>}

                     <IonItem lines="none">
                        <IonLabel 
                           className="ion-label-users" 
                           position="floating" 
                           color="secondary"
                        >
                           Password
                        </IonLabel>
                        <IonInput 
                           name="password"
                           type="password" 
                           value={password} 
                           onIonChange={e => {
                              setPassword((e.target as HTMLInputElement).value);
                              setPasswordError(false);
                           }}
                        >
                        </IonInput>
                     </IonItem>

                     {passwordError && <IonText color="danger">
                        <p className="ion-padding-start ion-no-margin">
                        Please enter a valid password 
                        </p>
                     </IonText>}
                  </IonList>
                  <IonRow>
                     <IonCol>
                        <IonButton 
                              color="secondary" 
                              className="ion-margin-top btn-weight"
                              expand="block"
                              onClick={()=> {
                                 loginHandler();
                              }}
                        >
                              Login
                        </IonButton>
                        <IonButton 
                              fill="clear" 
                              routerLink={routerLinks.signup}
                              color="secondary"
                              className="ion-margin-top"
                              expand="block"
                        >
                              Don't have an account? Sing Up now!
                        </IonButton>
                     </IonCol>
                  </IonRow>
            </form>
         </div>
      </IonContent>
      
       
   );
};

export default Login;