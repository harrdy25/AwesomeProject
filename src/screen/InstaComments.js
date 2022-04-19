import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Dimensions, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView, TextInput,  } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function InstaComments({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [liked, setLiked] = useState(false)

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const [Comment, setcomment] = useState(
        [
            { id: '1', image: images.IMG_HVK5, title: 'dr.nik_lakhani', cmnt: 'Beautiful 😍 🥰 😘', name: '2h  1 likes  Reply', },
            { id: '2', image: images.IMG_HVK2, title: 'amibalar_11', cmnt: '❣️❣️❣️❣️❣️❣️', name: '3h   Reply', },
            { id: '3', image: images.IMG_HVK10, title: 'Womans_ability_25', cmnt: '🔥💫 ✨ ⚡️', name: '2h   Reply', },
            { id: '4', image: images.IMG_HVK7, title: 'preksha_1428', cmnt: '👍👍👍👍👍 ', name: '8h   Reply', },
            { id: '5', image: images.IMG_HVK5, title: 'dhruvati_joshi', cmnt: '🔥 🔥 🔥', name: '9h   Reply', },
            { id: '6', image: images.IMG_HVK3, title: 'krunal_3173', cmnt: '🌹 🥀🌹 🥀', name: '12h   Reply', },
            { id: '7', image: images.IMG_HVK2, title: 'ajay_kukadiya', cmnt: 'Beautiful', name: '1d   Reply', },
            { id: '8', image: images.IMG_HVK4, title: 'arvind_kukadiya', cmnt: '❤️❤️❤️❤️❤️', name: '1d   Reply', },
            { id: '9', image: images.IMG_HVK3, title: 'sneha_._jsani', cmnt: '♨️♨️♨️♨️', name: '2d   Reply', },
            { id: '10', image: images.IMG_HVK1, title: 'doc_sanjay_cardio', cmnt: '😍😍😍😍🥰', name: '2d   Reply', },
            { id: '11', image: images.IMG_HVK3, title: 'amibalar_11', cmnt: 'Beautiful', name: '2d   Reply', },
            { id: '12', image: images.IMG_HVK4, title: 'Womans_ability_25', cmnt: '👌👌👌', name: '3d   Reply', },
            { id: '13', image: images.IMG_HVK7, title: 'preksha_1428', cmnt: 'Beautiful', name: '3d   Reply', },
            { id: '14', image: images.IMG_HVK7, title: 'the_vasani_2405', cmnt: 'Beautiful', name: '3d   Reply', },
            { id: '15', image: images.IMG_HVK6, title: 'krunal_3173', cmnt: '👍👍👍👍👍', name: '3d   Reply', },
        ]);

    const renderList = ({ item, index }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: normalize(10), marginRight: normalize(8) }}>
            <TouchableOpacity style={[styles.item], { flexDirection: 'row', flex: 1 }}>
                <Image style={styles.ProfileImage} source={item.image} />
                <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.UserName}>{item.title}</Text>
                        <Text style={styles.Comments}>{item.cmnt}</Text>
                    </View>
                    <Text style={styles.Name}>{item.name} </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // setLiked(!liked) 
                const postList = [...Comment];
                if (postList[index].isLike) {
                    postList[index].isLike = false
                } else {
                    postList[index].isLike = true;
                }
                setcomment(postList);
            }}>
                <AntDesign name={item.isLike ? 'heart' : 'hearto'} color={item.isLike ? colors.red : colors.white} size={15} />
            </TouchableOpacity>
        </View >
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.SettingCard}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('InstagramHomePage')}>
                        <Image style={styles.back} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <Text style={styles.ProfileName}>Comments</Text>
                    <TouchableOpacity>
                        <Image style={styles.Share} source={images.IMG_SEND_PNG} />
                    </TouchableOpacity>
                </View>
                {/* <ActivityIndicator size="small" color="#0000ff" /> */}
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10), }} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor={'white'}
                        />
                    }>
                    <View style={{ marginTop: normalize(1) }}>
                        <FlatList
                            data={Comment}
                            renderItem={renderList}
                            keyExtractor={item => item.id}
                            inverted
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.CommentBox}>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), }} />
                <Text style={{
                    fontSize: normalize(25),
                    textAlign: 'center',
                    marginVertical: normalize(10)
                }}> ❤️  🙌  🔥  👏  😥  😍  😂  ❤️  🔥 </Text>
                <View style={{ flexDirection: 'row', marginBottom: normalize(10) }}>
                    <TouchableOpacity >
                        <Image style={styles.CommentImage} source={images.IMG_HARRDY} />
                    </TouchableOpacity>
                    <View style={{
                        borderColor: '#FFFFFF',
                        borderWidth: normalize(1),
                        borderRadius: normalize(30),
                        width: width - 60,
                        marginHorizontal: normalize(8),
                        alignSelf: 'center'
                    }}>
                        <TextInput style={{ fontSize: normalize(15), padding: 10, color: colors.white }}
                            placeholder="Add a comments as harrdy25__..."
                            placeholderTextColor={'#909090'} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.black,
        flex: 1
    },
    SettingCard: {
        alignItems: 'center',
        marginTop: normalize(15),
        flexDirection: 'row',
    },
    back: {
        height: normalize(15),
        tintColor: colors.white,
        marginLeft: normalize(5),
    },
    ProfileName: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.white,
        flex: 1.5,
    },
    Share: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        marginRight: normalize(5),
    },
    Name: {
        fontSize: normalize(14),
        color: colors.white,
        marginLeft: normalize(15),
    },
    UserName: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: normalize(15),
    },
    Comments: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: '500',
        marginLeft: normalize(5),
    },
    ProfileImage: {
        width: normalize(35),
        height: normalize(35),
        marginLeft: normalize(10),
        borderRadius: normalize(65),
        alignSelf: 'center'
    },
    containermodal: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        marginTop: normalize(25),
        justifyContent: 'flex-end',
        marginBottom: normalize(10)
    },
    ModalView: {
        backgroundColor: '#333333',
        borderRadius: normalize(15),
    },
    FollowingImg: {
        width: normalize(50),
        height: normalize(50),
        margin: normalize(2),
        borderRadius: normalize(65),
        alignSelf: 'center'
    },
    Cancle: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: normalize(15),
        alignSelf: 'center',
        padding: normalize(10)
    },
    ModalPlus: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.appBlue,
        marginLeft: normalize(5),
        marginRight: normalize(5),
        marginTop: normalize(10),
        alignSelf: 'center'
    },
    ClickDone: {
        height: normalize(20),
        width: normalize(20),
        tintColor: colors.gray,
        marginRight: normalize(5),
        alignSelf: 'center'
    },
    Click: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.gray,
        marginRight: normalize(5),
        marginTop: normalize(10),
        alignSelf: 'center'
    },
    Done: {
        fontSize: normalize(14),
        color: colors.white,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: normalize(5)
    },
    DoneButton: {
        borderRadius: normalize(5),
        backgroundColor: colors.appBlue,
        marginRight: normalize(10),
        alignSelf: 'center'
    },
    CommentBox: {
        backgroundColor: colors.black,
        alignSelf: 'center',
    },
    CommentImage: {
        width: normalize(40),
        height: normalize(40),
        marginLeft: normalize(10),
        borderRadius: normalize(70),
        alignSelf: 'center'
    },

});

export default InstaComments;
