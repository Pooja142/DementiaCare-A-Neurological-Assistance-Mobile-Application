import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameRules = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Play:</Text>
      <Text style={styles.text}>
        The objective of the game is to find all matching pairs of cards.
      </Text>
      <Text style={styles.text}>
        To play, click on a card to flip it over and reveal its value.
      </Text>
      <Text style={styles.text}>
        Then, click on another card to see if it matches the first one.
      </Text>
      <Text style={styles.text}>
        If the two cards match, they will stay face up and you will earn a point.
      </Text>
      <Text style={styles.text}>
        If they do not match, they will flip back over and you will have to try again.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#292929',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: '#4F4F4F',
  },
});

export default GameRules;
