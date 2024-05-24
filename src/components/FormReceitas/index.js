import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe os ícones que deseja utilizar

export default function Form() {
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [date, setDate] = useState('');
  const [messageReceita, setMessageReceita] = useState('');
  const [receitas, setReceitas] = useState([]);
  const [textButton, setTextButton] = useState('Cadastrar');
  const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadReceitas() {
      try {
        const receitasData = await AsyncStorage.getItem('@receitas');
        if (receitasData) {
          setReceitas(JSON.parse(receitasData));
        }
      } catch (error) {
        console.error('Erro ao carregar as receitas do AsyncStorage', error);
      }
    }

    loadReceitas();
  }, []);

  const handleChangeDate = (input) => {
    const cleaned = input.replace(/\D/g, '');
    const truncated = cleaned.slice(0, 8);
    const formattedDate = truncated.replace(
      /(\d{2})(\d{2})(\d{4})/,
      '$1/$2/$3'
    );
    setDate(formattedDate);
  };

  const formatCurrency = (input) => {
    const value = input.replace(/\D/g, '');
    if (value === '') return '';
    const floatValue = parseFloat(value) / 100;
    return floatValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  };

  const validationReceita = async () => {
    if (valor.trim() !== '' && tipo.trim() !== '' && date.length === 10) {
      const newReceita = {
        tipo,
        valor,
        date,
      };

      if (editIndex !== null) {
        const updatedReceitas = [...receitas];
        updatedReceitas[editIndex] = newReceita;
        setReceitas(updatedReceitas);
        setEditIndex(null);
        setMessageReceita('Receita editada com sucesso!');
      } else {
        setReceitas([...receitas, newReceita]);
        setMessageReceita('Receita cadastrada com sucesso!');
      }

      try {
        await AsyncStorage.setItem('@receitas', JSON.stringify(receitas));
      } catch (error) {
        console.error('Erro ao salvar a receita no AsyncStorage', error);
      }

      setTipo('');
      setValor('');
      setDate('');
      setTextButton('Cadastrar outro');

      return;
    }
    setMessageReceita('Preencha o tipo de receita, o valor e uma data válida!');
  };

  const editReceita = (index) => {
    const receita = receitas[index];
    setTipo(receita.tipo);
    setValor(receita.valor);
    setDate(receita.date);
    setEditIndex(index);
    setModalVisible(true);
  };

  const deleteReceita = async (index) => {
    const updatedReceitas = [...receitas];
    updatedReceitas.splice(index, 1);
    setReceitas(updatedReceitas);

    try {
      await AsyncStorage.setItem('@receitas', JSON.stringify(updatedReceitas));
      setMessageReceita('Receita excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir a receita do AsyncStorage', error);
    }
  };

  const closeEditModal = () => {
    setTipo('');
    setValor('');
    setDate('');
    setEditIndex(null);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.receitasSection}>
        <View style={styles.form}>
          <Text style={styles.title}>Receitas</Text>
          <Text style={styles.formLabel}>Tipo de Receita</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTipo}
            value={tipo}
            placeholder="Ex.: Salário"
            keyboardType="default"
          />

          <Text style={styles.formLabel}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={(input) => setValor(formatCurrency(input))}
            value={valor}
            placeholder="Ex.: R$ 5480,90"
            keyboardType="numeric"
          />

          <Text style={styles.formLabel}>Data</Text>
          <TextInputMask
            style={styles.input}
            onChangeText={(formattedDate, extracted) => setDate(formattedDate)}
            value={date}
            placeholder="DD/MM/YYYY"
            keyboardType="numeric"
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
          />

          <TouchableOpacity
            style={styles.buttonCadastrar}
            onPress={validationReceita}>
            <Text style={[styles.textButtonCadastrar, { color: '#fff' }]}>
              {textButton}
            </Text>
          </TouchableOpacity>

          <Text style={styles.message}>{messageReceita}</Text>

          {receitas.length > 0 && (
            <View style={styles.receitasContainer}>
              <Text style={styles.receitasTitle}>Receitas Cadastradas:</Text>
              <FlatList
                data={receitas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.receitaItem}>
                    <Text style={styles.receitaText}>Tipo: {item.tipo}</Text>
                    <Text style={styles.receitaText}>Valor: {item.valor}</Text>
                    <Text style={styles.receitaText}>Data: {item.date}</Text>
                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity
                        onPress={() => editReceita(index)}
                        style={[
                          styles.buttonEditarExcluir,
                          { backgroundColor: '#4CAF50' },
                        ]}>
                        <Icon
                          name="pencil"
                          size={15}
                          color="#000"
                          style={styles.buttonIcon}
                        />
                        <Text style={styles.buttonText}>Editar</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => deleteReceita(index)}
                        style={[
                          styles.buttonEditarExcluir,
                          { backgroundColor: '#f44336' },
                        ]}>
                        <Icon
                          name="trash"
                          size={15}
                          color="#000"
                          style={styles.buttonIcon}
                        />
                        <Text style={styles.buttonText}>Excluir</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeEditModal}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Editar Receita</Text>
            <Text style={styles.formLabel}>Tipo de Receita</Text>
            <TextInput
              style={styles.input}
              onChangeText={setTipo}
              value={tipo}
              placeholder="Ex.: Salário"
              keyboardType="default"
            />

            <Text style={styles.formLabel}>Valor</Text>
            <TextInput
              style={styles.input}
              onChangeText={(input) => setValor(formatCurrency(input))}
              value={valor}
              placeholder="Ex.: R$ 5480,90"
              keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Data</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChangeDate}
              value={date}
              placeholder="DD/MM/YYYY"
              keyboardType="numeric"
              maxLength={10}
            />

            <TouchableOpacity
              style={[
                styles.buttonCadastrar,
                { backgroundColor: '#4CAF50', marginTop: 20 },
              ]}
              onPress={validationReceita}>
              <Text style={styles.buttonText}>Salvar Edição</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.buttonCadastrar,
                { backgroundColor: '#f44336', marginTop: 10 },
              ]}
              onPress={closeEditModal}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
