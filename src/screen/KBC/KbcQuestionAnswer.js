import { View, Text, SafeAreaView, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../assets/images'
import { normalize } from '../../utils'
import colors from '../../theme/colors'

const LifLine = [
    { id: 1, icon: images.IMG_HALF_PNG },
    { id: 2, icon: images.IMG_GROUP_PNG },
    { id: 3, icon: images.IMG_REFRES_PNG },
    { id: 4, icon: images.IMG_CALLING_PNG },
];
const QusAns = [
    { id: 1, text: 'The Battle of Plassey was fought in', a: '1757', b: '1782', c: '1748', d: '1764' }, //A
    { id: 2, text: 'Under Akbar, the Mir Bakshi was required to look after', a: 'military affairs', b: 'the state treasury', c: 'the royal household', d: 'the land revenue system' }, //A
    { id: 3, text: 'Tripitakas are sacred books of', a: 'Buddhists', b: 'Hindus', c: 'Jains', d: 'None of the above' }, //A
    { id: 4, text: 'The trident-shaped symbol of Buddhism does not represent', a: 'Nirvana', b: 'Sangha', c: 'Buddha', d: 'Dhamma' }, // A
    { id: 5, text: 'The victories of Karikala are well portrayed in', a: 'Palamoli', b: 'Aruvanad', c: 'Pattinappalai', d: 'Padirrupattu' }, //c
    { id: 6, text: 'Todar Mal was associated with', a: 'music', b: 'literature', c: 'finance', d: 'law' }, // c
    { id: 7, text: 'Two of the great Mughals wrote their own memories. There were', a: 'Babar and Humayun', b: 'Humayun and Jahangir', c: 'Babar and Jahangir', d: 'Jahangir and Shahjahan' }, //c
    { id: 8, text: 'To which king belongs the Lion capital at Sarnath?', a: 'Chandragupta', b: 'Ashoka', c: 'Kanishka', d: 'Harsha' }, // B
    { id: 9, text: 'The use of spinning wheel (Charkha) became common during the', a: '9th Century AD', b: '10th Century AD', c: '12th Century AD', d: '14th Century AD' }, // D
    { id: 10, text: 'The language of discourses of Gautama Buddha was', a: 'Bhojpuri', b: 'Magadhi', c: 'Pali', d: 'Sanskrit' }, //C
    { id: 11, text: 'Velu Thampi led a revolt against the British in state of', a: 'Travancore', b: 'Baroda', c: 'Hyderabad', d: 'Mysore' }, //A
    { id: 12, text: 'The ultimate ownership of land during the post-Gupta period lay with', a: 'the cultivator', b: 'the village community', c: 'the king', d: 'the joint family' }, // C
    { id: 13, text: 'To which of the republic of Buddha belong?', a: 'Licchavis', b: 'Sakyas', c: 'Mallas', d: 'None of the above' }, //B
    { id: 14, text: 'Tipu sultan was the ruler of', a: 'Hyderabad', b: 'Madurai', c: 'Mysore', d: 'Vijayanagar' }, //C
    { id: 15, text: 'The term yavanika meant', a: 'foreign goods', b: 'dancer', c: 'curtain', d: 'theatre' }, // C

]

function KbcQuestionAnswer() {

    const [select, setSelect] = useState(0);

    const lifelineRender = ({ item }) => (
        <TouchableOpacity style={styles.Box}>
            <Image style={styles.LifeLineIcon} source={item.icon} />
        </TouchableOpacity>
    )

    const QuestionRender = ({ item, index }) => (
        <View>
            <View style={styles.QusBox}>
                <Text style={styles.Question}>{item.text}</Text>
            </View>
            <View style={{ borderColor: '#38006b', borderWidth: normalize(2), margin: normalize(5) }} />
            <TouchableOpacity style={[select === 1 ? styles.AnsBoxGreen : styles.AnsBox, { flexDirection: 'row' }]} onPress={() => setSelect(1)}>
                <Text style={styles.ABCD}>A :</Text>
                <Text style={styles.Answer}>{item.a}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[select === 2 ? styles.AnsBoxGreen : styles.AnsBox, { flexDirection: 'row' }]} onPress={() => setSelect(2)}>
                <Text style={styles.ABCD}>B :</Text>
                <Text style={styles.Answer}>{item.b}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[select === 3 ? styles.AnsBoxGreen : styles.AnsBox, { flexDirection: 'row' }]} onPress={() => setSelect(3)}>
                <Text style={styles.ABCD}>C :</Text>
                <Text style={styles.Answer}>{item.c}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[select === 4 ? styles.AnsBoxGreen : styles.AnsBox, { flexDirection: 'row' }]} onPress={() => setSelect(4)}>
                <Text style={styles.ABCD}>D :</Text>
                <Text style={styles.Answer}>{item.d}</Text>
            </TouchableOpacity>
            <View style={{ borderColor: '#38006b', borderWidth: normalize(2), margin: normalize(5) }} />
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex: 1,}}>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_KBC_LOGO} />
                    <Text style={styles.TitleName}>Question Answer</Text>
                </View>

                <View style={{ marginVertical: normalize(30) }}>
                    <Image style={styles.WatchIcon} source={images.IMG_Watch_PNG} />
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
                    <FlatList
                        data={QusAns}
                        renderItem={QuestionRender}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

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
    },
    WatchIcon: {
        width: normalize(60),
        height: normalize(60),
        tintColor: '#9b4dcb',
        alignSelf: 'center'
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
        borderRadius: normalize(15),
        backgroundColor: '#350e55',
        marginHorizontal: normalize(10),
        marginVertical: normalize(50)
    },
    Question: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: '#FFFFFF',
        margin: normalize(20),
        textAlign: 'center'
    },
    Answer: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: '#FFFFFF',
        padding: normalize(8),
        flex: 2,
    },
    ABCD: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: '#FFFFFF',
        padding: normalize(8),
    },
    AnsBox: {
        marginHorizontal: normalize(30),
        marginVertical: normalize(10),
        borderRadius: normalize(15),
        backgroundColor: '#9b4dcb',
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
    AnsBoxGreen: {
        marginHorizontal: normalize(30),
        marginVertical: normalize(10),
        borderRadius: normalize(15),
        backgroundColor: '#0BAC1F',
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

});

export default KbcQuestionAnswer;