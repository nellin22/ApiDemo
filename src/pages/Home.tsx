//Home page
import { 
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect
} from '@ionic/react';
import useApi from '../hooks/useApi';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const { searchData } = useApi()

  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('SEARCH ', searchTerm);
  }, [searchTerm]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Movie App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar value={searchTerm}
        debounce={300} 
        onIonChange={(e) => setSearchTerm(e.detail.value!)} />
        
        <IonItem>
          <IonLabel>Select Searchtype</IonLabel>
          <IonSelect value={type}
          onIonChange={(e) => setType(e.detail.value!)}>
            <IonSelectOption value="">All</IonSelectOption>
            <IonSelectOption value="movie">Movie</IonSelectOption>
            <IonSelectOption value="series">Series</IonSelectOption>
            <IonSelectOption value="episode">Episode</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
