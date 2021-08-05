import React, { useState } from 'react';
import { IonAlert, IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonList, IonRow, IonText, IonTitle, IonToast } from '@ionic/react';
import { routerLinks } from '../../utils/helpers/router.helper'
import { toastPageInterface } from '../../components/layouts/Page.template';

import './SignUpPage.css'
import { Redirect, useHistory } from 'react-router';

/* Auth Context */
import useAuth from '../../auth/useAuth';

const SignUp: React.FC = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [errors, setErrors] = useState([]);
   const [showAlertSignUp, setShowAlertSignUp] = useState(false);
   const [signUpToast, setSignUpToast] = useState<toastPageInterface>(
      {
         show: false, 
         msg: undefined, 
         color: undefined
      }
   );
   const history = useHistory();

   const { login } = useAuth();

   const signUpHandler = () => {

      if(!email){
         setEmailError(true);
      }

      if(!password){
         setPasswordError(true);
      }

      if(password && email){
         setSignUpToast(
            {
               show:true, 
               msg: 'User has successfully registered ', 
               color: 'success'
            }
         )
         setTimeout(
            () => {
               login()
               history.push(routerLinks.welcome);
            }, 
            3000
         );
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
               isOpen={showAlertSignUp}
               onDidDismiss={() => setShowAlertSignUp(false)}
               header={'Auth Error'}
               message={errorMessages()}
               buttons={['Try again']}
            />
            <IonToast
                  isOpen={signUpToast.show}
                  cssClass="toast-text"
                  onDidDismiss={ () => {
                     setSignUpToast(
                        {
                           show:false, 
                           msg: undefined, 
                           color: undefined
                        }
                     )
                  
                  }}
                  message={signUpToast.msg}
                  duration={3000}
                  color={signUpToast.color}
                  buttons={[
                     {
                        text: 'Close',
                        role: 'cancel',
                        handler: () => {
                        }
                     }
                  ]}
               />
            <IonTitle 
               color="primary" 
               className="ion-text-center title-sign-up"
            >
               {signUpToast.show ? "Welcome!!! Logging in" : "Sign Un Now! It's free :)"}
            </IonTitle>
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
                                 signUpHandler();
                              }}
                        >
                              Sign Up
                        </IonButton>
                        <IonButton 
                              fill="clear" 
                              routerLink={routerLinks.login}
                              color="secondary"
                              className="ion-margin-top"
                              expand="block"
                        >
                              Already have an account? Login now!
                        </IonButton>
                     </IonCol>
                  </IonRow>
            </form>
         </div>
      </IonContent>
      
       
   );
};

export default SignUp;