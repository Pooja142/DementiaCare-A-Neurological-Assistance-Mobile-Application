import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Map from "./Map";

const EmergencyCallButton = () => {
  const ambulanceNumber = '7498002419'; // Replace with the actual ambulance number

  const handlePress = () => {
    Linking.openURL(`tel:${ambulanceNumber}`);
  };

  return (
 <>
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>EmergencyCall </Text>
      </View>
    
    </TouchableOpacity>
     <Map/>
 </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"flex-start",
    backgroundColor: '#fff',
    
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    marginTop:40
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmergencyCallButton;
