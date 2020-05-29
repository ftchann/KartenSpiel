import {Button, Text, View} from "react-native";
import * as React from "react";

export function GameScreen( {navigation} ) {
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
