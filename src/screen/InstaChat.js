import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, FlatList, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView, TextInput, TouchableWithoutFeedback, } from "react-native-gesture-handler";

const Messages = [
    { id: 1, sent: true, msg: 'Hellow', },
    { id: 2, sent: false, msg: 'Good morning....', },
    { id: 3, sent: true, msg: 'hey ... Good Morning ', },
    { id: 4, sent: false, msg: 'how Are You.......', },
    { id: 5, sent: true, msg: "i'm good What about you.... ", },
    { id: 6, sent: false, msg: 'When you reach the end of your rope, tie a knot in it and hang on.', },
    { id: 7, sent: true, msg: 'Always remember that you are absolutely unique. ', },
    { id: 8, sent: false, msg: 'The future belongs to those who believe in the..', },
    { id: 9, sent: true, msg: 'When you reach the end of your rope, tie a knot..', },
    { id: 10, sent: false, msg: 'Always remember that you are absolutely unique...', },

]
const { width, height } = Dimensions.get('window');
function InstaChat({ navigation }) {

    const renderItem = ({ item }) => {
        if (item.sent === false) {
            return (
                <View style={styles.LeftMsg}>
                    <Image style={styles.ChatImg} source={images.IMG_HARRDY} />
                    <View style={styles.LeftBlock}>
                        <Text style={styles.LeftTxt}>{item.msg}</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.rightMsg} >
                    <View style={styles.rightBlock} >
                        <Text style={styles.rightTxt}>{item.msg}</Text>
                    </View>
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.HeaderCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('InstaMessage')}>
                        <Image style={styles.back} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Border}>
                        <Image style={styles.ProfileImage} source={images.IMG_HARRDY} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', flex: 1, marginLeft: normalize(10) }}>
                        <Text style={styles.ProfileName}>Harrdy25__</Text>
                        <Text style={styles.Time}>Active 1h ago</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginRight: normalize(10) }}>
                        <TouchableOpacity>
                            <Image style={styles.Video} source={images.IMG_VideoCamera_PNG} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.Flag} source={images.IMG_FlagIcon_PNG} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ChatDetails')}>
                            <Image style={styles.About} source={images.IMG_About_Png} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10), }} />

                <View style={{ flex: 1, }}>
                    <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
                        <FlatList
                            data={Messages}
                            inverted
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                        <View style={styles.Card}>
                            <TouchableOpacity style={{ backgroundColor: colors.appBlue, borderRadius: normalize(60), margin: normalize(5), }}>
                                <Image style={styles.Camera} source={images.IMG_CAMERAA_PNG} />
                            </TouchableOpacity>
                            <TextInput style={{ alignSelf: 'center', color: colors.white, flex: 1 }}
                                placeholder="Message..."
                                placeholderTextColor="#808080"
                            />
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Image style={styles.Camera} source={images.IMG_About_Png} />
                                <Image style={styles.Camera} source={images.IMG_About_Png} />
                                <Image style={styles.Plus} source={images.IMG_Pulss_Add_png} />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.black,
        flex: 1
    },
    HeaderCard: {
        flexDirection: 'row',
        // backgroundColor: colors.appBlue,
        alignItems: 'center',
        marginTop: normalize(10)
    },
    back: {
        height: normalize(35),
        width: normalize(35),
        tintColor: colors.white,
    },
    ProfileImage: {
        width: normalize(35),
        height: normalize(35),
        borderRadius: normalize(65),
        alignSelf: 'center',
        margin: normalize(2)
    },
    Border: {
        borderWidth: normalize(1),
        borderColor: colors.gray,
        borderRadius: normalize(65),
    },
    ProfileName: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        color: colors.white,
    },
    Time: {
        fontSize: normalize(14),
        color: colors.gray,
        fontWeight: '500'
    },
    Video: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        alignSelf: 'center',

    },
    Flag: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        alignSelf: 'center',
        marginHorizontal: normalize(15)
    },
    About: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        alignSelf: 'center',
    },
    ChatImg: {
        width: normalize(30),
        height: normalize(30),
        borderRadius: normalize(65),
        marginRight: normalize(8)
    },
    LeftMsg: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: normalize(5),
        width: width - 50,
    },
    rightMsg: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: normalize(5),
        alignSelf: 'flex-end',
    },
    LeftBlock: {
        borderRadius: normalize(30),
        backgroundColor: '#454545',
        padding: normalize(10),
    },
    rightBlock: {
        borderRadius: normalize(30),
        backgroundColor: '#B24BF3',
        padding: normalize(10),
    },
    LeftTxt: {
        fontSize: normalize(15),
        color: '#FFFFFF',
        fontWeight: '500',
        marginHorizontal: normalize(8)
    },
    rightTxt: {
        fontSize: normalize(15),
        color: '#FFFFFF',
        fontWeight: '500',
        marginHorizontal: normalize(8)
    },
    keyboard: {
        flex: 1,
        justifyContent: 'center',
    },
    Card: {
        borderRadius: normalize(30),
        backgroundColor: '#515151',
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    Camera: {
        height: normalize(20),
        width: normalize(20),
        tintColor: colors.white,
        margin: normalize(8),
        alignSelf: 'center',
    },
    Plus: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        margin: normalize(8),
        alignSelf: 'center',
        marginHorizontal: normalize(10)
    },
});
export default InstaChat;

