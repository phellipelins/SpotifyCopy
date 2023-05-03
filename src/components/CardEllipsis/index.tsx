import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import './styles.scss';

export type CardEllipsisProps = {
  image: string,
  title: string,
};

const CardEllipsis: React.FC<CardEllipsisProps> = ({ image, title }) => {
  return (
    <IonCard className="card-ellipsis">
      <img src={image} />
      <IonCardHeader>
        <IonCardTitle color="light">{title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default CardEllipsis;