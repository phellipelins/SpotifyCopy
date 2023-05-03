import { IonAvatar, IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/react";
import { heart, pause, play } from "ionicons/icons";

import './styles.scss';

import devices from '../../assets/icons/devices.svg';
import image from '../../assets/images/liked-songs.png'

type Player = {
  playing: boolean,
};

const Player: React.FC<Player> = ({ playing = true }) => {
  return (
    <IonItem className={`player ${playing ? 'playing' : ''}`}>
      <IonAvatar slot="start">
        <img src={image} />
      </IonAvatar>
      <IonLabel>
        <IonText color="light"><h3>Remember the Time</h3></IonText>
        <IonText color="medium"><p>Michael Jackson</p></IonText>
      </IonLabel>
      <IonButton slot="end">
        <IonIcon slot="icon-only" icon={devices} color="light"></IonIcon>
      </IonButton>
      <IonButton slot="end">
        <IonIcon slot="icon-only" icon={heart} color="primary"></IonIcon>
      </IonButton>
      <IonButton slot="end">
        <IonIcon slot="icon-only" icon={pause} color="light"></IonIcon>
      </IonButton>
    </IonItem>
  );
};

export default Player;