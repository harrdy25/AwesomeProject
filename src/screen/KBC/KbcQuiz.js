import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { images } from '../../assets/images';
import { normalize } from '../../utils';
import colors from '../../theme/colors';
import Question from './Question';

const LifLine = [
    { id: 1, icon: images.IMG_HALF_PNG },
    { id: 2, icon: images.IMG_GROUP_PNG },
    { id: 3, icon: images.IMG_REFRES_PNG },
    { id: 4, icon: images.IMG_CALLING_PNG },
];

function KbcQuiz() {

    const QuestionList = Question;

    const [time, setTime] = useState(new Date());
    const [select, setSelect] = useState(0);
    const [score, setScore] = useState(0);

    const [currentQus, setCurrentQus] = useState(0);

    useEffect(() => {
        setInterval(() => tick(), 1000);
    }, [])

    const tick = () => {
        setTime(new Date());
    };

    const lifelineRender = ({ item }) => (
        <TouchableOpacity style={styles.Box}>
            <Image style={styles.LifeLineIcon} source={item.icon} />
        </TouchableOpacity>
    )

    const renderQuestion = () => {
        return (
            <>
                <View style={styles.QusBox}>
                    <Text style={styles.Question}>{QuestionList[currentQus].question}</Text>
                </View>
                <View style={{ borderColor: '#38006b', borderWidth: normalize(2), margin: normalize(5) }} />
            </>
        )
    }

    const renderOption = () => {
        return (
            QuestionList[currentQus].option.map((o) => {
                return (
                    <TouchableOpacity style={[ styles.AnsBox, { flexDirection: 'row',}]} onPress={() => handleValidation(o)}>
                        <Text style={[styles.Answer,]}>{o}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    const handlerNext = () => {
        setCurrentQus(currentQus + 1);
    }

    const renderNext = () => {
        return (
            <>
                <View style={{ borderColor: '#38006b', borderWidth: normalize(2), margin: normalize(5) }} />
                <TouchableOpacity style={styles.NextBox} onPress={() => handlerNext()}>
                    <Text style={styles.PlayAgain}>Next</Text>
                </TouchableOpacity>
            </>
        )
    }

    const handleValidation = (selectoption) => {
        if (selectoption === QuestionList[currentQus].current) {
            setScore(score + 1);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_KBC_LOGO} />
                    <Text style={styles.TitleName}>Question Answer</Text>
                </View>
                <View style={{ alignSelf: 'center', }}>
                    <Text style={time.getSeconds(60) > 30 && time.getSeconds(60) < 50 ? styles.TimeOrange : styles.Time && time.getSeconds(60) > 50 ? styles.TimeRed : styles.Time}>{time.getSeconds(60)}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <FlatList
                        data={LifLine}
                        renderItem={lifelineRender}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                <View>
                    {renderQuestion()}
                    {renderOption()}
                    {renderNext()}
                    {/* <Text>{score}</Text> */}
                </View>
            </View>
        </SafeAreaView >
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
    Time: {
        fontSize: normalize(40),
        fontWeight: '700',
        textAlign: 'center',
        color: '#6a1b9a',
    },
    TimeOrange: {
        fontSize: normalize(40),
        fontWeight: '700',
        textAlign: 'center',
        color: 'orange',
    },
    TimeRed: {
        fontSize: normalize(40),
        fontWeight: '700',
        textAlign: 'center',
        color: 'red',
    },
    Box: {
        borderColor: colors.white,
        borderRadius: normalize(10),
        backgroundColor: '#6a1b9a',
        margin: normalize(8),
        marginTop: normalize(20)
    },
    LifeLineIcon: {
        width: normalize(40),
        height: normalize(40),
        tintColor: colors.white,
        alignSelf: 'center',
        margin: normalize(5),
    },
    QusBox: {
        height: normalize(100),
        borderRadius: normalize(15),
        backgroundColor: '#350e55',
        marginHorizontal: normalize(10),
        marginVertical: normalize(25)
    },
    Question: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: '#FFFFFF',
        margin: normalize(20),
        textAlign: 'center',
    },
    Answer: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: '#FFFFFF',
        margin: normalize(10),
        textAlign: 'center',
        flex: 1
    },
   
    AnsBox: {       
        marginHorizontal: normalize(30),
        marginVertical: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: '#9b4dcb',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 3,
        },
        shadowOpacity: 5,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 1,
    },   
    AnsBoxGreen: {
        marginHorizontal: normalize(30),
        marginVertical: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: 'green',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 3,
        },
        shadowOpacity: 5,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 1,
    },   
    NextBox: {
        borderColor: colors.white,
        borderRadius: normalize(10),
        backgroundColor: '#38006b',
        margin: normalize(10),
        marginTop: normalize(50),
    },
    PlayAgain: {
        fontSize: normalize(25),
        fontWeight: '600',
        alignSelf: 'center',
        color: '#FFFFFF',
        padding: normalize(8)
    },
});

export default KbcQuiz;