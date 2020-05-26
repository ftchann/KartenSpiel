import React from 'react';
import { Text, View, ScrollView, Image, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={{
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center"
      }}>
      <Text>
        Try editing me! 🎉
      </Text>
      <Button onPress={() => {
        alert('You tapped the buttonè!');
        }}
        title="Play"
      />
    </View>
    </ScrollView>
  );
}
