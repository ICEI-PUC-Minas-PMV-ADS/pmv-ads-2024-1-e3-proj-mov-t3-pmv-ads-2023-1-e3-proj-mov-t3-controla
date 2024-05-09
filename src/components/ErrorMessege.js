import { Text } from 'react-native'

const ErrorMessage = ({ message }) => {
  return message ? (
    <Text style={{ color: 'red', marginTop: 10}}>{message}</Text>
  ) : null;
};

export default ErrorMessage;