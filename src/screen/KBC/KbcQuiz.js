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
    const [select, setSelect] = useState(0);

    const [wrong, setWrong] = useState(0);
    const [time, setTime] = useState(10);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(false);
    const [wrongAns, setWrongAns] = useState(false);

    const [currentQus, setCurrentQus] = useState(0);
    const [disabled, setDisabled] = useState(false)
    const [screen, setScreen] = useState(0);

    useEffect(() => {
        let second = setInterval(() => {
            if (time > 0) {
                setTime((time - 1));
            }
            if (time < 1) {
                if (currentQus < QuestionList.length - 1) {
                    setCurrentQus(currentQus + 1);
                    setTime(10);
                    setDisabled(false);
                    setWrongAns(false)
                } else {
                    setCurrentQus(currentQus);
                }
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
            QuestionList[currentQus].option.map((o) => {
                return (
                    <TouchableOpacity style={[answer === o && answer === QuestionList[currentQus].current ? styles.AnsBoxGreen : answer === o
                        && answer !== QuestionList[currentQus].current ? styles.AnsBoxRed : wrongAns === true
                            && o === QuestionList[currentQus].current ? styles.AnsBoxGreen : styles.AnsBox, { flexDirection: 'row', }]}
                        disabled={disabled}
                        onPress={() => {
                            handleValidation(o);
                            setDisabled(true);
                            setTime(0);
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
            setTime(10);
            setWrongAns(false);
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
                    setTime(10);
                    setDisabled(false);
                    setWrongAns(false);
                    setAnswer(false);
                    if (currentQus === QuestionList.length - 1) {
                        setScreen(2)
                    }
                }}>
                    <Text style={styles.PlayAgain}>{currentQus === QuestionList.length - 1 ? 'Submit' : 'Next'}</Text>
                </TouchableOpacity>
            </>
        )
    }
    const handleValidation = (selectoption) => {
        setAnswer(selectoption);
        if (selectoption === QuestionList[currentQus].current) {
            setScore(score + 1);
            setWrongAns(false);

        } else if (selectoption !== QuestionList[currentQus].current) {
            setWrong(wrong + 1);
            setWrongAns(true);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                {screen === 0 &&
                    <>
                        <View style={styles.Card}>
                            <Text style={styles.TitleName}>Kaun Banega Crorepati</Text>
                        </View>
                        <View style={styles.Box}>
                            <Text style={styles.SelectLanguage}>Choose Language</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={select === 1 ? styles.LanguageBoxGreen : styles.LanguageBox} onPress={() => setSelect(1)}>
                                <Text style={styles.SelectLanguage}>English</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={select === 2 ? styles.LanguageBoxGreen : styles.LanguageBox} onPress={() => setSelect(2)}>
                                <Text style={styles.SelectLanguage}>Hindi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={select === 3 ? styles.LanguageBoxGreen : styles.LanguageBox} onPress={() => setSelect(3)}>
                                <Text style={styles.SelectLanguage}>Gujrati</Text>
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.KBCLogo} source={images.IMG_KBC_LOGO} />
                        <TouchableOpacity style={styles.Box} onPress={() => {
                            setScreen(1);
                            setTime(10)
                        }}>
                            <Text style={styles.StartQuiz}>Start Quiz</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: normalize(20) }}>
                            <TouchableOpacity>
                                <Image style={styles.ImageIcon} source={images.IMG_Sound_PNG} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.ImageIcon} source={images.IMG_Star_PNG} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.ImageIcon} source={images.IMG_Share_PNG} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.ImageIcon} source={images.IMG_Ellips_PNG} />
                            </TouchableOpacity>
                        </View>
                    </>
                }
                {screen === 1 &&
                    <>
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
                        </View>
                    </>}

                {screen === 2 &&
                    <>
                        <View style={styles.Card}>
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
                            <Text style={styles.ResultScore}>-:: {score} ::-</Text>
                        </View>
                        <View style={styles.CardResultBoX}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.Result}>Correct</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.Result}>InCorrect</Text>
                                </View>
                            </View>
                            <View style={styles.ScoreBox}>
                                <Text style={styles.ResultScore}>{score}</Text>
                                <Text style={styles.ResultScore}>{wrong}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.Box} onPress={() => {
                            setScreen(0);
                            setCurrentQus(currentQus.length = 0);
                            setAnswer(0);
                            setWrong(0);
                            setTime(0);
                        }}>
                            <Text style={styles.PlayAgain}>Play Again!!</Text>
                        </TouchableOpacity>
                    </>}
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({

    Card: {
        height: normalize(60),
        justifyContent: 'center',
        alignItems: 'center',
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
    TitleName: {
        fontSize: normalize(25),
        fontWeight: 'bold',
        color: colors.extraLight,
        alignSelf: 'center',
        textAlign: 'center',
    },
    KBCLogo: {
        borderRadius: normalize(200),
        alignSelf: 'center',
        marginVertical: '8%'
    },
    Box: {
        borderRadius: normalize(8),
        alignSelf: 'center',
        marginTop: normalize(10),
        backgroundColor: '#6a1b9a'
    },
    SelectLanguage: {
        fontSize: normalize(18),
        fontWeight: '700',
        color: colors.white,
        alignSelf: 'center',
        padding: normalize(6)
    },
    LanguageBox: {
        borderRadius: normalize(8),
        alignSelf: 'center',
        marginTop: normalize(10),
        backgroundColor: '#9c4dcc',
    },
    LanguageBoxGreen: {
        borderRadius: normalize(8),
        alignSelf: 'center',
        marginTop: normalize(10),
        backgroundColor: 'green',
        // borderTopEndRadius: normalize(20),
        // borderBottomLeftRadius: normalize(20)
    },
    StartQuiz: {
        fontSize: normalize(22),
        fontWeight: '700',
        color: colors.white,
        alignSelf: 'center',
        padding: normalize(8)
    },
    ImageIcon: {
        height: normalize(35),
        width: normalize(35),
        tintColor: '#9c4dcc'
    },

    // ____________   

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
    AnsBoxRed: {
        marginHorizontal: normalize(30),
        marginVertical: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: 'red',
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
    },
    // ====================

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

export default KbcQuiz;