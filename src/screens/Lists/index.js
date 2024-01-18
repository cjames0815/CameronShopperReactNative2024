import React from 'react';
import styles from './styles';
import { View, TouchableOpacity,Text } from 'react-native';

const ListScreen = props => {

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> console.log('Add List!')}>
                <Text style={styles.buttonText}>Add</Text>    
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ListScreen