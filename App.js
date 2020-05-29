// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Game"
            onPress={()=> {navigation.navigate('Game')}}
        />
    
    </View>
  );
}

function GameScreen( {navigation} ) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Game Screen</Text>
            <Button
                title="Go to Home"
                onPress={()=> {navigation.navigate('Home')}}
            />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;