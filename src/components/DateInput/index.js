import React, { useState } from 'react';
import { View, TextInput, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = ({ date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <TextInput
          style={styles.input}
          value={date ? formatDate(date) : ''}
          editable={false}
          placeholder="Selecione a data"
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode={'date'}
          display="default"
          onChange={onChange}
          onTouchCancel={() => setShow(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    marginVertical: 5, // Espaço vertical entre os inputs
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
  },
});

export default DateInput;