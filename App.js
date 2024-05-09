import { NavigationContainer } from '@react-navigation/native';
import Inicio from './src/Navigations/Inicio';

export default function App() {

  // Pagina1, 2 e 3 foram criadas para serem as paginas do app

  return (
    <NavigationContainer>
      <Inicio />
    </NavigationContainer>
  );
}
