import {FAB} from 'react-native-paper';
import {globalStyles} from '../../theme/global.styles';
interface Props {
  onPress: () => void;
}

export const FloatingButton = ({onPress}: Props) => {
  return (
    <FAB
      style={globalStyles.fab}
      onPress={() => onPress()}
      icon="add-outline"
    />
  );
};
