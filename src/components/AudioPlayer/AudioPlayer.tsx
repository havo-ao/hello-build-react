import React, { useState, useEffect } from "react";
import { IonButton, IonButtons, IonIcon } from '@ionic/react';
import { pause, play, toggleOutline } from 'ionicons/icons';
import { Interface } from "readline";

import './AudioPlayer.css'

/**
 * Havo-ao custom mini audio player
 * Song: Polygram -  
 */

interface urlProp {
   url: string,
   slot?: 'start' | 'end'
}

const AudioPlayer = ( audioFile: urlProp ) => {
   const [toggle, setToggle] = useState(false);
   const [audio, setAudio] = useState(new Audio(''));

   useEffect(() => {
      setAudio(new Audio (audioFile.url));
   },[]);

   if (audio){
      if (toggle) {
         audio.play();
         audio.volume=0.5;
      }else {
         audio.pause();
      }
   }

   audio.onended=()=>{
      setToggle(false);
   }

   const handlePlayer = () => {
      toggle ? setToggle(false) : setToggle(true);
   }
   
   return (
      <IonButton className="havo-audio-button" onClick={()=> handlePlayer()}>
         <IonIcon icon={toggle ? pause : play}></IonIcon>
      </IonButton>
   );
};

export default AudioPlayer;