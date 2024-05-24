import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
    marginTop: 20,
  },
  formLabel: {
    color: '#000',
    fontSize: 16,
    marginBottom: 2,
  },
  input: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonCadastrar: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#5B3CD7',
    paddingVertical: 14,
    marginTop: 20,
  },
  textButtonCadastrar: {
    fontSize: 18,
    color: '#fff',
  },
  receitaContainer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  receitasTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'left',
  },
  receitaItem: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  receitaText: {
    fontSize: 12,
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  title: {
    color: '#000',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  // Dentro do objeto StyleSheet.create
  buttonText: {
    fontSize: 13,
    marginLeft: 5, // Espaçamento entre o ícone e o texto
  },
  buttonIcon: {
    marginRight: 5, // Espaçamento entre o ícone e o texto
  },
  buttonEditarExcluir: {
    paddingHorizontal: 12, // Aumento de 10% na largura
    paddingVertical: 6, // Aumento de 10% na altura
    borderRadius: 10,
    marginLeft: 5,
    flexDirection: 'row', // Para alinhar o ícone e o texto horizontalmente
    alignItems: 'center', // Para alinhar o ícone e o texto verticalmente
    justifyContent: 'center', // Para centralizar o conteúdo do botão horizontalmente
  },
  receitasSection: {
  backgroundColor: '#fff',
  borderRadius: 20,
  paddingHorizontal: 20,
  paddingTop: 20,
  marginTop: 20,
  width: '100%', // Definindo a largura para ocupar a tela inteira horizontalmente
},
});

export default styles;
