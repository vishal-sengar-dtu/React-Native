import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Vishal');
  const [friend, setFriend] = useState({ name: 'Siddhant', age: 24 });

  const clickHandler = () => {
    setName('Yogesh');
    setFriend({ name: 'Utkarsh', age: 22 });
  }

  return (
    <View style={styles.container}> 
      <Text>My name is {name}</Text>
      <Text>My firends name is {friend.name} and his age is {friend.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  }
});
