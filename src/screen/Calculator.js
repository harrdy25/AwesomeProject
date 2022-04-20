import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../theme/colors';
import { normalize } from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../assets/images';

const Data = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Calcu() {

    const [currentNumber, setCurrentNumber] = useState('');

    const handleOprator = (Oprator) => {
        setCurrentNumber(currentNumber + Oprator);
    };

    const handleDelete = () => {
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1))
    };

    const handleClear = () => {
        setCurrentNumber('');
    };

    const handleCalcutat = () => {
        if (currentNumber !== '') {
            let result = eval(currentNumber);
            setCurrentNumber(result)
        }
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Card}>
                <Image style={styles.Logo} source={images.IMG_React_Png} />
                <Text style={styles.TitleName}>Basic Calculator</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#524342'}}>               
                <Text style={styles.Result}>{currentNumber}</Text>
            </View>
            <View style={styles.ButtonBox}>
                {Data.map((item) => {
                    return (
                    item === '/' || item === '*' || item === '-' || item === '+' || item === '%' ?
                        <TouchableOpacity style={item === '/' || item === '*' || item === '-' || item === '+' || item === '=' ? styles.OpratorButton : styles.Button 
                        && item === 'AC' || item === 'DEL' || item === '%' ? styles.OpratorButtonAC : styles.Button && item === '0' ? styles.ButtonZero : styles.Button} onPress={() => handleOprator(item)}>
                            <Text style={styles.Text}>{item}</Text>
                        </TouchableOpacity>
                        : item === 'AC' ? 
                        <TouchableOpacity style={item === '/' || item === '*' || item === '-' || item === '+' || item === '=' ? styles.OpratorButton : styles.Button 
                        && item === 'AC' || item === 'DEL' || item === '%' ? styles.OpratorButtonAC : styles.Button && item === '0' ? styles.ButtonZero : styles.Button} onPress={() => handleClear()}>
                            <Text style={styles.Text}>{item}</Text>
                        </TouchableOpacity>
                        : item === 'DEL' ? 
                        <TouchableOpacity style={item === '/' || item === '*' || item === '-' || item === '+' || item === '=' ? styles.OpratorButton : styles.Button 
                        && item === 'AC' || item === 'DEL' || item === '%' ? styles.OpratorButtonAC : styles.Button && item === '0' ? styles.ButtonZero : styles.Button} onPress={() => handleDelete()}>
                            <Text style={styles.Text}>{item}</Text>
                        </TouchableOpacity>
                        : item === '=' ? 
                        <TouchableOpacity style={item === '/' || item === '*' || item === '-' || item === '+' || item === '=' ? styles.OpratorButton : styles.Button 
                        && item === 'AC' || item === 'DEL' || item === '%' ? styles.OpratorButtonAC : styles.Button && item === '0' ? styles.ButtonZero : styles.Button} onPress={() => handleCalcutat()}>
                            <Text style={styles.Text}>{item}</Text>
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity style={item === '/' || item === '*' || item === '-' || item === '+' || item === '=' ? styles.OpratorButton : styles.Button 
                        && item === 'AC' || item === 'DEL' || item === '%' ? styles.OpratorButtonAC : styles.Button && item === '0' ? styles.ButtonZero : styles.Button} onPress={() => handleOprator(item) }>
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
        backgroundColor: '#665655',
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
    themeButton: {
        alignSelf: 'flex-start',
        bottom: '5%',
        margin: 15,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 25,
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
        justifyContent: 'space-around',
        minWidth: '25%',
        minHeight: '18%',
        flex: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        backgroundColor: '#887d7c',
        // borderRadius: normalize(20)
    },
    OpratorButton: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '25%',
        minHeight: '18%',
        flex: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        backgroundColor: '#ff9f08',
        // borderRadius: normalize(20)
    },
    OpratorButtonAC: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '25%',
        minHeight: '18%',
        flex: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        backgroundColor: '#665655',
        // borderRadius: normalize(20)
    },
    ButtonZero: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '50%',
        minHeight: '18%',
        flex: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        backgroundColor: '#887d7c',
        // borderRadius: normalize(20)
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
export default Calcu;