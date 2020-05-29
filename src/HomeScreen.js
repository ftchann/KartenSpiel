import {Button, Text, View} from "react-native";
import * as React from "react";

export function HomeScreen( {navigation} ) {
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
