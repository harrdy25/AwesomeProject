import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../theme/colors';
import { normalize } from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../assets/images';

const Data = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', 'C', '0', '.', '='];

function Calculator() {

    const [currentNumber, setCurrentNumber] = useState('');
    const [lastNumber, setLastNumber] = useState('');

    function calculator() {

        let lastArr = currentNumber[currentNumber.length - 1];

        if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
            setCurrentNumber(currentNumber)
            return
        }
        else {
            let result = eval(currentNumber).toString();
            setCurrentNumber(result)
            return
        }
    }

    function handleInput(buttonPressed) {
        if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
            setCurrentNumber(currentNumber + buttonPressed)
            return
        }
        else if (buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 ||
            buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === 0 || buttonPressed === '.') {

        }
        switch (buttonPressed) {
            case 'AC':
                setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
                return
            case 'C':
                setLastNumber('')
                setCurrentNumber('')
                return
            case '=':
                setLastNumber(currentNumber + '=')
                calculator()
                return
        }
        setCurrentNumber(currentNumber + buttonPressed)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Card}>
                <Image style={styles.Logo} source={images.IMG_React_Png} />
                <Text style={styles.TitleName}>Basic Calculator</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: colors.black1 }}>
                <Text style={styles.Result}>{currentNumber}</Text>
            </View>
            <View style={styles.ButtonBox}>
                {Data.map((item) => {
                    return (
                        <TouchableOpacity style={item === '/' || item === '*' || item === '-' || item === '+' || item === '=' ? styles.OpratorButton : styles.Button} onPress={() => handleInput(item)}>
                            <Text style={styles.Text}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Card: {
        margin: normalize(5),
        borderRadius: normalize(15),
        backgroundColor: colors.blackTransparent,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.0,
        elevation: 5,
        zIndex: 1,
        flexDirection: 'row',
    },
    TitleName: {
        fontSize: normalize(25),
        fontWeight: 'bold',
        color: colors.extraLight,
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        marginRight: normalize(25)
    },
    Logo: {
        height: normalize(50),
        width: normalize(50),
    },
    Result: {
        fontSize: normalize(50),
        fontWeight: '700',
        position: 'absolute',
        bottom: normalize(0),
        right: normalize(0),
        color: colors.extraLight
    },

    ButtonBox: {
        backgroundColor: colors.black,
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '25%',
        minHeight: '18%',
        flex: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        backgroundColor: colors.gray,
        borderRadius: normalize(20)
    },
    OpratorButton: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '25%',
        minHeight: '18%',
        flex: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        backgroundColor: colors.gold1,
        borderRadius: normalize(20)

    },
    Text: {
        fontSize: normalize(30),
        color: colors.white,
        fontWeight: '700'
    },
    // Oprator: {
    //     fontSize: normalize(30),
    //     color: colors.appBlue,
    //     fontWeight: '700'
    // },
});
export default Calculator;