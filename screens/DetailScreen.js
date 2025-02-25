import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { character } = route.params;

  return (
    // ! Mostrar datos de personaje
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Estatus: {character.status}</Text>
      <Text style={styles.info}>Especie: {character.species}</Text>
      <Text style={styles.info}>Sexo: {character.gender}</Text>
      <Text style={styles.info}>Dimensión de Marvel: {character.origin.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginVertical: 4,
  },
});
