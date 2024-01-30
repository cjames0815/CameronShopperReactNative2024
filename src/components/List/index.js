import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';

const List = props => {

    const post = props.post;

   // console.log(post);

    const onPress = () => {
        console.log(post.name);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={{flex: 2}}>
            <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
            <Text style={styles.store} numberOfLines={1}>{post.name}</Text>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.date}>{post.date}</Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};

export default List;