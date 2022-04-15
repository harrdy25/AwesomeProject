import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images';

function Counter() {

    const [count, setCount] = useState(0);
    const onPressPlus = () => setCount(prevcount => prevcount + 1);
    const onPressMines = () => setCount(prevcount => prevcount - 1);
    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_React_Png} />
                    <Text style={styles.TitleName}>Counter Data</Text>
                </View>
                <View style={{ borderColor: '#515151', borderWidth: normalize(2), marginVertical: normalize(1) }} />
                <View style={{ flexDirection: 'row', marginVertical: normalize(8) }}>
                    <TouchableOpacity>
                        <Image style={styles.Icon} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>Counter Data</Text>
                    <TouchableOpacity >
                        <Image style={styles.Icon} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(1) }} />
                <View style={styles.CounterBox}>
                    <Text style={count >= 1 ? styles.CountePlus : styles.Counte && count < 0 ? styles.CounteMines : styles.Counte}>Counte = {count}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: normalize(10) }}>
                    <TouchableOpacity style={styles.PressButton} onPress={onPressPlus}>
                        <Text style={styles.ButtonText}>Plus ➕</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PressButton} onPress={onPressMines}>
                        <Text style={styles.ButtonText}>Mines ➖</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderColor: colors.appBlue, borderBottomWidth: normalize(5), marginVertical: normalize(5) }} />
            </View>
        </SafeAreaView >
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.white
    },
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
        marginHorizontal: normalize(50)
    },
    Logo: {
        height: normalize(50),
        width: normalize(50),
        alignSelf: 'center',
        borderRadius: normalize(50),
        margin: normalize(5)
    },
    Text: {
        fontSize: normalize(22),
        alignSelf: 'center',
        flex: 1,
        textAlign: 'center',
        fontWeight: '700',
        color: '#41A317'
    },
    Icon: {
        height: normalize(25),
        width: normalize(25),
        alignSelf: 'center',
    },
    CounterBox: {
        alignSelf: 'center',
        marginVertical: normalize(20),
        backgroundColor: colors.white,
        shadowColor: colors.black,
        padding: normalize(8),
        borderRadius: normalize(8),
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5.0,
        elevation: 5,
        zIndex: 1,
    },
    Counte: {
        fontSize: normalize(30),
        fontWeight: '600',
        color: colors.black
    },
    CountePlus: {
        fontSize: normalize(30),
        fontWeight: '700',
        color: colors.green
    },
    CounteMines: {
        fontSize: normalize(30),
        fontWeight: '700',
        color: colors.red
    },
    PressButton: {
        backgroundColor: colors.appBlue,
        padding: 10,
        marginHorizontal: normalize(5),
        width: normalize(150),
        borderRadius: normalize(8)
    },
    ButtonText: {
        fontSize: normalize(18),
        fontWeight: '600',
        alignSelf: 'center'
    },
    Data: {
        flex: 1,
        textAlign: 'center',
        fontSize: normalize(14),
        fontWeight: '600',
        alignSelf: 'center'
    },
});

export default Counter;
