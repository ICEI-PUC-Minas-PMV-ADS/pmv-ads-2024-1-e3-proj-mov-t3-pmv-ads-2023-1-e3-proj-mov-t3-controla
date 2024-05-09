import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Pagina1 from '../Pages/Pagina1'
import Pagina2 from '../Pages/Pagina2'
import Pagina3 from '../Pages/Pagina3'


const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'pagina1', title: '1', icon: 'dog' },
    { key: 'pagina2', title: '2', icon: 'duck' },
    { key: 'pagina3', title: '3', icon: 'cat' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pagina1: Pagina1,
    pagina2: Pagina2,
    pagina3: Pagina3,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;