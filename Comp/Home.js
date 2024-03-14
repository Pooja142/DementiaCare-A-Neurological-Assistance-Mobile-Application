import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleLearnMorePress = () => {
        Linking.openURL('https://www.nia.nih.gov/health/what-is-dementia');
      };
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1521099101895-5a810fda9665' }}
      style={styles.background}
    >
      <View style={styles.container}>
       
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>What is Dementia?</Text>
          <Text style={styles.infoText}>
            Dementia is a general term for a decline in mental ability severe enough to interfere with daily life.
          </Text>
          <Text style={styles.infoText}>
            Alzheimer's disease is the most common type of dementia, but there are other types as well.
          </Text>
          <TouchableOpacity style={styles.infoButton} onPress={handleLearnMorePress}>
            <Text style={styles.infoButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  infoButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
