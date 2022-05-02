import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../../assets/images';
import colors from '../../theme/colors';
import { normalize } from '../../utils';

function KbcResult() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_KBC_LOGO} />
                    <Text style={styles.TitleName}>KBC Result</Text>
                </View>
                <View style={{ margin: normalize(10) }}>                   
                    <Image style={styles.Trophy} source={images.IMG_TROPHY} />
                    <View style={styles.CardCongret}>
                        <Text style={styles.Result}>🎊 🎉 Congratulations 🎊 🎉</Text>
                    </View>
                </View>
                <View style={styles.CardResultBoX}>
                    <Text style={styles.Result}>-:: Your Score ::-</Text>
                    <Text style={styles.ResultScore}>-:: 12 ::-</Text>
                </View>
                <View style={styles.CardResultBoX}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: normalize(25) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Result}>Correct</Text>
                            <Image style={styles.TrueIcon} source={images.IMG_True_PNG} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Result}>InCorrect</Text>
                            <Image style={styles.WrongIcon} source={images.IMG_Wrong_PNG} />
                        </View>
                    </View>
                    <View style={styles.ScoreBox}>
                        <Text style={styles.ResultScore}>12</Text>
                        <Text style={styles.ResultScore}>04</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.Box}>
                    <Text style={styles.PlayAgain}>Play Again!!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Card: {
        margin: normalize(5),
        borderRadius: normalize(15),
        backgroundColor: '#38006b',
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
        borderRadius: normalize(30),
        margin: normalize(5)
    },
    Result: {
        fontSize: normalize(25),
        fontWeight: '600',
        alignSelf: 'center',
        color: '#FFFFFF',
        padding: normalize(5)
    },
    Trophy: {
        height: normalize(150),
        width: normalize(150),
        alignSelf: 'center',
        margin: normalize(10)
    },
    CardCongret: {
        margin: normalize(10),
        borderRadius: normalize(15),
        backgroundColor: '#38006b',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.0,
        elevation: 5,
        zIndex: 1,
    },
    ResultScore: {
        fontSize: normalize(50),
        fontWeight: '900',
        alignSelf: 'center',
        color: '#FFFFFF',
    },
    CardResultBoX: {
        margin: normalize(10),
        borderRadius: normalize(15),
        backgroundColor: '#9c4dcc',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.0,
        elevation: 5,
        zIndex: 1,
    },
    TrueIcon: {
        height: normalize(50),
        width: normalize(50),
        tintColor: 'green'
    },
    WrongIcon: {
        height: normalize(50),
        width: normalize(50),
        tintColor: 'red'
    },
    Box: {
        borderColor: colors.white,
        borderRadius: normalize(10),
        backgroundColor: '#38006b',
        margin: normalize(10),
        marginTop: normalize(50)
    },
    PlayAgain: {
        fontSize: normalize(25),
        fontWeight: '600',
        alignSelf: 'center',
        color: '#FFFFFF',
        padding: normalize(8)
    },
    ScoreBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: normalize(10),
        borderRadius: normalize(15),
        backgroundColor: '#6a1b9a',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.0,
        elevation: 5,
        zIndex: 1,
    }
});

export default KbcResult;

// #38006b
// #6a1b9a
// #9c4dcc