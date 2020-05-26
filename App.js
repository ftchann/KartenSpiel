import React, { useState } from 'react';
import { Text, View, Button, ScrollView} from 'react-native';


export default function App() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View>
            <Button
                onPress={() => {
                    setIsVisible(true);
                }}
                title="Activate"
            />
            <Button
                onPress={() => {
                    setIsVisible(false);
                }}
                title="Deactivate"
            />
            {isVisible?<Text> get printed </Text>:null}
            <Text>{isVisible ? "hello": null}</Text>
        </View>
    );
}

