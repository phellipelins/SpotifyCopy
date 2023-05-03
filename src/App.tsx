import { useCallback, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, libraryOutline, searchOutline } from 'ionicons/icons';
import HomeTab from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.scss';

import Player from './components/Player';

setupIonicReact();

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/homeTab">
              <HomeTab onPlay={onPlay} />
            </Route>
            <Route exact path="/">
              <Redirect to="/homeTab" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="homeTab" href="/homeTab">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Início</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/">
              <IonIcon aria-hidden="true" icon={searchOutline} />
              <IonLabel>Buscar</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/">
              <IonIcon aria-hidden="true" icon={libraryOutline} />
              <IonLabel>Sua Biblioteca</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      <Player playing={isPlaying}></Player>
    </IonApp>
  );
};

export default App;
