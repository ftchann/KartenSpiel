import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Button} from 'react-native';
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function GameScreen() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [numberRerolls, setnumberRerolls] = useState(0);
    const [visible, setVisible] = useState(false);
    function giveStyle(number) {
        switch (number) {
            case 1:
                return {
                    marginLeft: 0,
                    marginTop: 0
                }
            case 2:
                return {
                    marginLeft: -185,
                    marginTop: 0
                }
            case 3:
                return {
                    marginLeft: -370,
                    marginTop: 0
                }
            case 4:
                return {
                    marginLeft: -0,
                    marginTop: -220,
                }
            case 5:
                return {
                    marginLeft: -185,
                    marginTop: -220,
                }
            case 6:
                return {
                    marginLeft: -370,
                    marginTop: -220,
                }
        }
    }
    function onPress(){
        setVisible(false);
        setNumber1(getRandomInt(6 ) + 1);
        setNumber2(getRandomInt(6) + 1);
        setnumberRerolls(numberRerolls + 1);
    }
    function pass() {
        setVisible(false);
        setnumberRerolls(0);
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.text}>Meier</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <View style={[styles.cropped]}>
                        {visible && <Image source = {require('../data/img/dice.png')} style={[styles.number, giveStyle(number1)]}/>}
                    </View>
                    <View style={[styles.cropped2]}>
                        {visible && <Image source = {require('../data/img/dice.png')} style={[styles.number, giveStyle(number2)]}/>}
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                {(numberRerolls < 2) &&
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>Reroll</Text>
                </TouchableOpacity>}
                {(numberRerolls < 2) &&
                <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
                    <Text style={styles.text}>Show</Text>
                </TouchableOpacity>}
                <TouchableOpacity style={styles.button2} onPress={pass}>
                    <Text style={styles.text} >Pass / Restart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const SIZERATIO = 0.4;
const ImageWidth = 1441;
const ImageHeight = 1031;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleWrapper: {
        paddingTop: 30,
        alignItems: 'center',
        flex:1
    },
    inputWrapper: {
        flex:6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#EEEEEE",
    },
    content: {
        flex: 1,
    },
    footer: {
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,
        marginBottom: 30
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,
    },
    text: {
        color: 'steelblue',
        fontSize: 30
    },
    cropped: {
        height: 200,
        width: 200,
        overflow: 'hidden',
    },
    cropped2: {
        width: 200,
        height: 200,
        overflow: 'hidden',
    },
    number: {
        width: ImageWidth*SIZERATIO,
        height: ImageHeight*SIZERATIO,
    },
    number_2: {
        width: ImageWidth*SIZERATIO,
        height: ImageHeight*SIZERATIO,
    },
});

