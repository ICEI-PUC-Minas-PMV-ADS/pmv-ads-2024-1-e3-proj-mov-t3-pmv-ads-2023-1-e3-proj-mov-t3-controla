import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewLightBg from '../components/ViewLightBg';

const Pagina1 = () => {
  return (
    <ViewLightBg>
    
      <View style={{ backgroundColor: '#fff', height: 180, width: '100%' }}>
        <Text> ESTA É A PAGINA 1 </Text>
      </View>

      <View>
        <Text>TEXTO QUALQUER</Text>
      </View>

    </ViewLightBg>
  );
};

export default Pagina1;
