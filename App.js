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
            <Text>{isVisible ? "hello": null}</Text>
        </View>
    );
}

