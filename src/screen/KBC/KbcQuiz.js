import { View, Text, StyleSheet, Image, SafeAreaView, Alert, FlatList, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect, } from 'react'
import { images } from '../../assets/images';
import { normalize } from '../../utils';
import colors from '../../theme/colors';
import Question from './Question';

const LifLine = [
    { id: 1, icon: images.IMG_HALF_PNG, text: '50:50' },
    { id: 2, icon: images.IMG_GROUP_PNG, text: 'Audience Poll' },
    { id: 3, icon: images.IMG_REFRES_PNG, text: 'Switch The Question' },
    { id: 4, icon: images.IMG_CALLING_PNG, text: 'Phone A Friend' },
];

function KbcQuiz() {

    const QuestionList = Question;

    const [time, setTime] = useState(60);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(false);

    const [currentQus, setCurrentQus] = useState(0);
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        let second = setInterval(() => {
            if (time > 0) {
                setTime((time - 1));
            }
            if (time < 1) {
                setCurrentQus(currentQus + 1);
                setTime(60);
            }
        }, 1000)
        return () => {
            clearInterval(second);
        }
    });

    const lifelineRender = ({ item }) => (
        <TouchableOpacity style={styles.Box} onPress={() => getItem(item)}>
            <Image style={styles.LifeLineIcon} source={item.icon} />
        </TouchableOpacity>
    )

    const getItem = (item) => {
        Alert.alert(            
            item.text,
            "Are you sure you want to Use this Lifeline",
            [{ text: "Ok" },
            { text: "No" }]
        );
    };

    const renderQuestion = () => {
        return (
            <>
                <View style={styles.CountBox}>
                    <Text style={styles.Count}>{currentQus + 1} / {QuestionData.length}</Text>
                </View>
                <View style={styles.QusBox}>
                    <Text style={styles.Question}>{QuestionList[currentQus].question}</Text>
                </View>
                <View style={{ borderColor: '#38006b', borderWidth: normalize(2), margin: normalize(5) }} />
            </>
        )
    }

    const renderOption = () => {
        return (
            QuestionList[currentQus].option.map((o, index) => {
                return (
                    <TouchableOpacity style={[answer ? styles.AnsBoxGreen : styles.AnsBox, { flexDirection: 'row', }]}
                        disabled={disabled}
                        onPress={() => {
                            handleValidation(o);
                            if (o === QuestionList[currentQus].current) {
                                setAnswer(true)
                            }
                            setDisabled(true)
                        }}>
                        <Text style={[styles.Answer]}>{o}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    const handlerNext = () => {
        if (currentQus < QuestionData.length - 1) {
            setCurrentQus(currentQus + 1);
        } else {
            setCurrentQus(currentQus);
        }
    }

    const renderNext = () => {       
        return (
            <>
                <View style={{ borderColor: '#38006b', borderWidth: normalize(2), margin: normalize(5) }} />
                <TouchableOpacity style={styles.NextBox} onPress={() => {
                    handlerNext();
                    setTime(60);
                    setDisabled(false);
                    setAnswer(false)
                }}>
                    <Text style={styles.PlayAgain}>{currentQus === 15 ? 'Submit' : 'Next'}</Text>
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
                    <Text style={styles.TitleName}>KBC Quiz</Text>
                </View>
                <View style={{ alignSelf: 'center', }}>
                    <Text style={time <= 10 ? styles.TimeRed : styles.Time}>{time}</Text>
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
                    {/* <Text style={styles.Score}>{score}</Text> */}
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleName: {
        fontSize: normalize(25),
        fontWeight: 'bold',
        color: colors.extraLight,
        alignSelf: 'center',
        textAlign: 'center',
        padding: normalize(15)
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
    CountBox: {
        width: 100,
        backgroundColor: '#6a1b9a',
        marginTop: normalize(5),
        borderRadius: normalize(8),
        alignSelf: 'center'
    },
    Count: {
        fontSize: normalize(20),
        fontWeight: '800',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: normalize(5)
    },
    QusBox: {
        height: normalize(110),
        borderRadius: normalize(15),
        backgroundColor: '#350e55',
        marginHorizontal: normalize(10),
        marginVertical: normalize(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    Question: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
        margin: normalize(5)
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
    AnsBoxGray: {
        marginHorizontal: normalize(30),
        marginVertical: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: 'gray',
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
        marginTop: normalize(20),
    },
    PlayAgain: {
        fontSize: normalize(25),
        fontWeight: '600',
        alignSelf: 'center',
        color: '#FFFFFF',
        padding: normalize(8)
    },
    Score: {
        fontSize: normalize(20),
        fontWeight: '700',
        color: '#9b4dcb',
        alignSelf: 'center'
    }
});

export default KbcQuiz;