import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Container from '../components/Container'; // Supondo que você tenha um componente Container
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const selectImage = async () => {
    // Pedir permissão para acessar a biblioteca de mídia
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permissão necessária", "Precisamos de permissão para acessar sua biblioteca de fotos!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Picker result:", pickerResult); // Verifique o que está sendo retornado pelo ImagePicker

    if (!pickerResult.cancelled) {
      if (pickerResult.uri) {
        setProfileImage(pickerResult.uri);
      } else if (pickerResult.assets && pickerResult.assets.length > 0) {
        setProfileImage(pickerResult.assets[0].uri);
      } else {
        Alert.alert("Erro ao selecionar imagem", "Não foi possível obter a URI da imagem selecionada.");
      }
    }
  };

  return (
    <Container>
      <TouchableOpacity onPress={selectImage} style={styles.container}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.profileImagePlaceholder}>
            <Text style={styles.profileImagePlaceholderText}>Add Photo</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={setBirthdate}
        />
      </View>

    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImagePlaceholderText: {
    color: '#fff',
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#ccc'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    color: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});

export default ProfilePage;
