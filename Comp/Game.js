/*
 The objective of the game is to find all matching pairs of cards. To play, click on a card to flip it over and reveal its value. Then, click on another card to see if it matches the first one. If the two cards match, they will stay face up and you will earn a point. If they do not match, they will flip back over and you will have to try again.

*/


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import GameRules from './Rule';
export default function App() {
  const [cards, setCards] = useState([
    { id: 1, value: '🐶', matched: false, flipped: false },
    { id: 2, value: '🐱', matched: false, flipped: false },
    { id: 3, value: '🐻', matched: false, flipped: false },
    { id: 4, value: '🐭', matched: false, flipped: false },
    { id: 5, value: '🐰', matched: false, flipped: false },
    { id: 6, value: '🦊', matched: false, flipped: false },
    { id: 7, value: '🐼', matched: false, flipped: false },
    { id: 8, value: '🐯', matched: false, flipped: false },
    { id: 9, value: '🐶', matched: false, flipped: false },
    { id: 10, value: '🐱', matched: false, flipped: false },
    { id: 11, value: '🐻', matched: false, flipped: false },
    { id: 12, value: '🐭', matched: false, flipped: false },
    { id: 13, value: '🐰', matched: false, flipped: false },
    { id: 14, value: '🦊', matched: false, flipped: false },
    { id: 15, value: '🐼', matched: false, flipped: false },
    { id: 16, value: '🐯', matched: false, flipped: false }
  ]);
  

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matches, setMatches] = useState(0);
  const [totalMatches, setTotalMatches] = useState(2);

  useEffect(() => {
    if (secondCard) {
      checkForMatch();
    }
  }, [secondCard]);

  useEffect(() => {
    if (matches === totalMatches) {
      alert('You Win!');
    }
  }, [matches]);

  const checkForMatch = () => {
    if (firstCard.value === secondCard.value) {
      const newCards = [...cards];
      newCards[firstCard.index].matched = true;
      newCards[secondCard.index].matched = true;
      setCards(newCards);
      setMatches(matches + 1);
      setFirstCard(null);
      setSecondCard(null);
    } else {
      setTimeout(() => {
        const newCards = [...cards];
        newCards[firstCard.index].flipped = false;
        newCards[secondCard.index].flipped = false;
        setCards(newCards);
        setFirstCard(null);
        setSecondCard(null);
      }, 1000);
    }
  };

  const handleCardPress = (card, index) => {
    if (!card.flipped) {
      const newCards = [...cards];
      newCards[index].flipped = true;
      setCards(newCards);
      if (!firstCard) {
        setFirstCard({ value: card.value, index });
      } else {
        setSecondCard({ value: card.value, index });
      }
      if (newCards.filter((card) => card.matched === true).length === totalMatches) {
        alert('You Win!');
      }
    }
  };

  const renderCards = () => {
    return cards.map((card, index) => (
      <TouchableOpacity
        key={card.id}
        style={[
          styles.card,
          { backgroundColor: card.flipped ? 'white' : 'blue' }
        ]}
        onPress={() => handleCardPress(card, index)}
        disabled={card.matched}
      >
                {card.flipped && <Text style={styles.cardText}>{card.value}</Text>}
        </TouchableOpacity>
    ));
  };

  const resetGame = () => {
    const shuffledCards = shuffleArray(cards.map(card => ({ ...card, flipped: false, matched: false })));
    setCards(shuffledCards);
    setFirstCard(null);
    setSecondCard(null);
    setMatches(0);
  };

  const shuffleArray = array => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Memory Game</Text>
        <TouchableOpacity onPress={resetGame}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>{renderCards()}</View>
      <Text style={styles.matchesText}>Matches: {matches}</Text>
      <GameRules/>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#2196f3'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  resetText: {
    color: 'white',
    fontSize: 16
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20
  },
card: {
  width: 60,
  height: 60,
  margin: 10,
  borderRadius: 20,
  borderWidth: 5,
  borderColor: '#ccc',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

  cardText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black'
  },
  matchesText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
});



