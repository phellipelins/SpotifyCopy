import { IonButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonItemDivider, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { settingsOutline, notificationsOutline, timerOutline } from 'ionicons/icons';

import CardSimple from '../../components/CardSimple';
import CardEllipsis from '../../components/CardEllipsis';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import '@ionic/react/css/ionic-swiper.css';
import './styles.scss';

import likedsongs from '../../assets/images/liked-songs.png';
import localfiles from '../../assets/images/local-files.png';
import tagedsongs from '../../assets/images/taged-songs.png';
import newsongs from '../../assets/images/new-songs.png';
import artirts from '../../assets/images/artist.png';

type HomeProps = {
  onPlay: () => void;
};

const Home: React.FC<HomeProps> = ({ onPlay }) => {
  const playSongHandler = () => {
    onPlay();
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle className="ion-text-start ion-padding-horizontal">Bom dia</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={notificationsOutline}></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={timerOutline}></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={settingsOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonItemDivider sticky color="secondary" className="ion-padding">
          <IonChip onClick={() => {}}>
            <IonText color="light">Músicas</IonText>
          </IonChip>
          <IonChip onClick={() => {}}>
            <IonText color="light">Podcasts e Programas</IonText>
          </IonChip>
        </IonItemDivider>

        <IonText color="light" className="swiper-title ion-padding-horizontal">
          <h2>Tocadas Recentemente</h2>
        </IonText>
        <Swiper
          freeMode
          slidesPerView={'auto'}
          spaceBetween={16}
          modules={[FreeMode]}
        >
          <SwiperSlide className="small">
            <CardSimple
              image={likedsongs}
              title={'Study Lofi'}
              onClick={playSongHandler}
            />
          </SwiperSlide>
          <SwiperSlide className="small">
            <CardSimple
              image={tagedsongs}
              title={'Study Lofi'}
              onClick={playSongHandler}
            />
          </SwiperSlide>
          <SwiperSlide className="small">
            <CardSimple
              image={newsongs}
              title={'Study Lofi'}
              onClick={playSongHandler}
            />
          </SwiperSlide>
          <SwiperSlide className="small">
            <CardSimple
              image={localfiles}
              title={'Study Lofi'}
              onClick={playSongHandler}
            />
          </SwiperSlide>
        </Swiper>

        <IonText color="light" className="swiper-title ion-padding-horizontal">
          <h2>Seus Programas</h2>
        </IonText>
        <Swiper
          freeMode
          slidesPerView={'auto'}
          spaceBetween={16}
          modules={[FreeMode]}
        >
          <SwiperSlide className="medium">
            <CardSimple
              image={localfiles}
              category={'Arte e Entretenimento'}
              title={'Papo de Segunda'}
              text={'Show - GNT'}
              rounded
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardSimple
              image={tagedsongs}
              category={'Arte e Entretenimento'}
              title={'Papo de Segunda'}
              text={'Show - GNT'}
              rounded
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardSimple
              image={newsongs}
              category={'Arte e Entretenimento'}
              title={'Papo de Segunda'}
              text={'Show - GNT'}
              rounded
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardSimple
              image={likedsongs}
              category={'Arte e Entretenimento'}
              title={'Papo de Segunda'}
              text={'Show - GNT'}
              rounded
            />
          </SwiperSlide>
        </Swiper>

        <IonText color="light" className="swiper-title ion-padding-horizontal">
          <h2>Feito para você</h2>
        </IonText>
        <Swiper
          freeMode
          slidesPerView={'auto'}
          spaceBetween={16}
          modules={[FreeMode]}
        >
          <SwiperSlide className="medium">
            <CardSimple
              image={newsongs}
              text={'Gorillaz, Agnes Obel, Perfect Confusion e mais'}
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardSimple
              image={tagedsongs}
              text={'Slipknot, Linkin Park, Drowning Pool e mais'}
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardSimple
              image={likedsongs}
              text={'Emicida, Xamã, Sabotage e mais'}
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardSimple
              image={localfiles}
              text={'$uicideboy$, Xavier Wulf, BONES e mais'}
            />
          </SwiperSlide>
        </Swiper>

        <IonText color="light" className="swiper-title ion-padding-horizontal">
          <h2>Seus artistas favoritos</h2>
        </IonText>
        <Swiper
          freeMode
          slidesPerView={'auto'}
          spaceBetween={16}
          modules={[FreeMode]}
        >
          <SwiperSlide className="medium">
            <CardEllipsis
              image={artirts}
              title={'Yung Buda'}
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardEllipsis
              image={artirts}
              title={'ZHU'}
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardEllipsis
              image={artirts}
              title={'CHVRN'}
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardEllipsis
              image={artirts}
              title={'Glue Trip'}
            />
          </SwiperSlide>
          <SwiperSlide className="medium">
            <CardEllipsis
              image={artirts}
              title={'Pendulum'}
            />
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
