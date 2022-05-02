import { View, Text, SafeAreaView, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../assets/images'
import { normalize } from '../../utils'
import colors from '../../theme/colors'

function KbcHomePage() {

    const [select, setSelect] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_KBC_LOGO} />
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
                <TouchableOpacity style={styles.Box}>
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
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    BGImage: {
        flex: 1
    },
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
    }
});

export default KbcHomePage;