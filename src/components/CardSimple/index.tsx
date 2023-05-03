import { IonCard, IonCardHeader, IonText, IonCardTitle, IonCardSubtitle } from "@ionic/react";
import './styles.scss';

export type CardProps = any & {
  image: string,
  category?: string,
  title?: string,
  text?: string,
  rounded?: boolean,
};

const CardSimple: React.FC<CardProps> = ({ image, category, title, text, rounded, onClick }) => {
  return (
    <IonCard className={rounded ? 'rounded' : ''} onClick={onClick}>
      <img src={image} />
      <IonCardHeader>
        {category && <IonText color="primary">{category}</IonText>}
        {title && <IonCardTitle color="light">{title}</IonCardTitle>}
        {text && <IonCardSubtitle color="medium">{text}</IonCardSubtitle>}
      </IonCardHeader>
    </IonCard>
  );
};

export default CardSimple;