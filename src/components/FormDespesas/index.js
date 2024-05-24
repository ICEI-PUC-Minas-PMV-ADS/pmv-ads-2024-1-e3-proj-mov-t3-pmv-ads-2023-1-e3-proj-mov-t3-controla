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
  const [messageDespesa, setMessageDespesa] = useState('');
  const [despesas, setDespesas] = useState([]);
  const [textButton, setTextButton] = useState('Cadastrar');
  const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadDespesas() {
      try {
        const despesasData = await AsyncStorage.getItem('@despesas');
        if (despesasData) {
          setDespesas(JSON.parse(despesasData));
        }
      } catch (error) {
        console.error('Erro ao carregar as despesas do AsyncStorage', error);
      }
    }

    loadDespesas();
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

  const validationDespesa = async () => {
    if (valor.trim() !== '' && tipo.trim() !== '' && date.length === 10) {
      const newDespesa = {
        tipo,
        valor,
        date,
      };

      if (editIndex !== null) {
        const updatedDespesas = [...despesas];
        updatedDespesas[editIndex] = newDespesa;
        setDespesas(updatedDespesas);
        setEditIndex(null);
        setMessageDespesa('Despesa editada com sucesso!');
      } else {
        setDespesas([...despesas, newDespesa]);
        setMessageDespesa('Despesa cadastrada com sucesso!');
      }

      try {
        await AsyncStorage.setItem('@despesas', JSON.stringify(despesas));
      } catch (error) {
        console.error('Erro ao salvar a despesa no AsyncStorage', error);
      }

      setTipo('');
      setValor('');
      setDate('');
      setTextButton('Cadastrar outro');

      return;
    }
    setMessageDespesa('Preencha o tipo de despesa, o valor e uma data válida!');
  };

  const editDespesa = (index) => {
    const despesa = despesas[index];
    setTipo(despesa.tipo);
    setValor(despesa.valor);
    setDate(despesa.date);
    setEditIndex(index);
    setModalVisible(true);
  };

  const deleteDespesa = async (index) => {
    const updatedDespesas = [...despesas];
    updatedDespesas.splice(index, 1);
    setDespesas(updatedDespesas);

    try {
      await AsyncStorage.setItem('@despesas', JSON.stringify(updatedDespesas));
      setMessageDespesa('Despesa excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir a despesa do AsyncStorage', error);
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
      <View style={styles.despesasSection}>
        <View style={styles.form}>
          <Text style={styles.title}>Despesas</Text>
          <Text style={styles.formLabel}>Tipo de Despesa</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTipo}
            value={tipo}
            placeholder="Ex.: Aluguel"
            keyboardType="default"
          />

          <Text style={styles.formLabel}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={(input) => setValor(formatCurrency(input))}
            value={valor}
            placeholder="Ex.: R$ 800,00"
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
            onPress={validationDespesa}>
            <Text style={[styles.textButtonCadastrar, { color: '#fff' }]}>
              {textButton}
            </Text>
          </TouchableOpacity>

          <Text style={styles.message}>{messageDespesa}</Text>

          {despesas.length > 0 && (
            <View style={styles.despesasContainer}>
              <Text style={styles.despesasTitle}>Despesas Cadastradas:</Text>
              <FlatList
                data={despesas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.despesaItem}>
                    <Text style={styles.despesaText}>Tipo: {item.tipo}</Text>
                    <Text style={styles.despesaText}>Valor: {item.valor}</Text>
                    <Text style={styles.despesaText}>Data: {item.date}</Text>
                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity
                        onPress={() => editDespesa(index)}
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
                        onPress={() => deleteDespesa(index)}
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
            <Text style={styles.title}>Editar Despesa</Text>
            <Text style={styles.formLabel}>Tipo de Despesa</Text>
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
              onPress={validationDespesa}>
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
