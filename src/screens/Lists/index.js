import React from 'react';
import styles from './styles';
import { View, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListScreen = props => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> navigation.navigate('Add List')}>
                <Text style={styles.buttonText}>Add List</Text>    
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ListScreen