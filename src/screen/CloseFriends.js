import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Modal, FlatList } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView, TextInput, } from "react-native-gesture-handler";

const Follower = [
    { id: '1', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', icon: images.IMG_Click_Png, },
    { id: '2', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', icon: images.IMG_Click_Png, },
    { id: '3', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', icon: images.IMG_Click_Png, },
    { id: '4', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', icon: images.IMG_Click_Png, },
    { id: '5', image: images.IMG_HARRDY, title: 'dhruvati_joshi', name: 'Dharuvati Joshi🌟 ', icon: images.IMG_Click_Png, },
    { id: '6', image: images.IMG_HARRDY, title: 'krunal_3173', name: 'K_K_TRIVEDI 🕉️📿', icon: images.IMG_Click_Png, },
    { id: '7', image: images.IMG_HARRDY, title: 'ajay_kukadiya', name: 'Ajay Kukadiya', icon: images.IMG_Click_Png, },
    { id: '8', image: images.IMG_HARRDY, title: 'arvind_kukadiya', name: 'Arvind Kukadiya', icon: images.IMG_Click_Png, },
    { id: '9', image: images.IMG_HARRDY, title: 'sneha_._jsani', name: 'sneha', icon: images.IMG_Click_Png, },
    { id: '10', image: images.IMG_HARRDY, title: 'doc_sanjay_cardio', name: '', icon: images.IMG_Click_Png, },
    { id: '11', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', icon: images.IMG_Click_Png, },
    { id: '12', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', icon: images.IMG_Click_Png, },
    { id: '13', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', icon: images.IMG_Click_Png, },
    { id: '14', image: images.IMG_HARRDY, title: 'the_vasani_2405', name: 'V. B. J.🌟 790', icon: images.IMG_Click_Png, },
    { id: '15', image: images.IMG_HARRDY, title: 'krunal_3173', name: 'K_K_TRIVEDI 🕉️📿', icon: images.IMG_Click_Png, },
];
const Following = [
    { id: '1', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', },
    { id: '2', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', },
    { id: '3', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', },
    { id: '4', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', },
    { id: '5', image: images.IMG_HARRDY, title: 'dhruvati_joshi', name: 'Dharuvati Joshi🌟 ', },
    { id: '6', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', },
    { id: '7', image: images.IMG_HARRDY, title: 'ajay_kukdiya', name: 'Ajay Kukadiya', },
    { id: '8', image: images.IMG_HARRDY, title: 'arvind_kukadiya', name: 'Arvind Kukadiya', },
    { id: '9', image: images.IMG_HARRDY, title: 'sneha_._jsani', name: 'sneha', },
    { id: '10', image: images.IMG_HARRDY, title: 'doc_sanjay_cardio', name: '', },
    { id: '11', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', },
    { id: '12', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', },
    { id: '13', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', },
    { id: '14', image: images.IMG_HARRDY, title: 'the_vasani_2405', name: 'V. B. J.🌟 790', },
    { id: '15', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', },
];
function CloseFriends({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    // const color = item.id === selectedId ? '#1e90ff' : 'black';

    
    const renderList = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: normalize(4), marginLeft: normalize(8) }}>
            <TouchableOpacity style={[styles.item], { flexDirection: 'row', flex: 1 }}>
                <Image style={styles.ProfileImage} source={item.image} />
                <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
                    <Text style={styles.UserName}>{item.title}</Text>
                    <Text style={styles.Name}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.ClickDone} source={images.IMG_Click_Png} />
            </TouchableOpacity>
        </View >
    );
    
    const renderFollowing = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: normalize(4), marginLeft: normalize(8) }}>
            <View style={[styles.item], { flexDirection: 'row', flex: 1 }}>
                <TouchableOpacity>
                    <Image style={styles.ProfileImage} source={item.image} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                        <TouchableOpacity>
                            <Text style={styles.UserName}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Name}>{item.name}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Image style={styles.Click} source={images.IMG_Round_Png} />
            </TouchableOpacity>
        </View >
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.SettingCard}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('InstagramProfile')}>
                        <Image style={styles.back} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <Text style={styles.ProfileName}>Close Friends</Text>
                </View>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10), }} />
                <Text style={styles.Details} > We don't send notificastions when you edit your close friends list.
                    <TouchableOpacity><Text style={{ color: colors.appBlue, marginLeft: normalize(5), }}>How it works.</Text></TouchableOpacity></Text>

                <TouchableOpacity style={styles.Card}>
                    <Image style={styles.Search} source={images.IMG_BOTTOM_SEARCH} />
                    <TextInput style={{ alignSelf: 'center', color: '#000000', marginLeft: normalize(10) }} placeholder="Search" />
                </TouchableOpacity>
                <ScrollView>
                    <View style={{ flexDirection: 'row', marginTop: normalize(15) }}>
                        <Text style={styles.People}>15 perople</Text>
                        <TouchableOpacity>
                            <Text style={styles.ClearAll}>Clear all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <FlatList
                            data={Follower}
                            renderItem={renderList}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: normalize(15) }}>
                        <Text style={styles.People}>Suggested</Text>
                        <TouchableOpacity>
                            <Text style={styles.ClearAll}>Select all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <FlatList
                            data={Following}
                            renderItem={renderFollowing}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ScrollView>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginBottom: normalize(5), }} />
                <TouchableOpacity style={styles.DoneButton}>
                    <Text style={styles.Done}>Done</Text>
                </TouchableOpacity>

                {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.containermodal}>
                    <View style={styles.ModalView}>
                        <TouchableOpacity style={{ marginVertical: normalize(10) }}>
                            <Image style={styles.FollowingImg} source={images.IMG_ADULT7} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignSelf: 'center', padding: normalize(5) }}>
                            <Text style={styles.UserName}>dr.nik_lakhani</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginVertical: normalize(12) }}></View>
                        <TouchableOpacity style={{ alignSelf: 'center', padding: normalize(5) }}>
                            <Text style={styles.UserName}>Manage Notifications</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginVertical: normalize(12) }}></View>
                        <TouchableOpacity style={{ alignSelf: 'center', padding: normalize(5), marginVertical: normalize(5) }}>
                            <Text style={styles.UserName}>Mute</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ModalView}>
                    <TouchableOpacity style={{ marginTop: normalize(10) }}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.Cancle}> Cancle </Text>
                    </TouchableOpacity>
                </View>
            </Modal> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.black,
    },

    SettingCard: {
        alignItems: 'center',
        marginTop: normalize(15),
        flexDirection: 'row',
    },
    Card: {
        marginHorizontal: normalize(8),
        borderRadius: normalize(10),
        backgroundColor: '#989898',
        shadowColor: colors.black,
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: normalize(10),
        elevation: 5,
        marginVertical: normalize(10)
    },
    back: {
        height: normalize(15),
        tintColor: colors.white,
        marginLeft: normalize(5),
        marginBottom: normalize(10),
    },
    ProfileName: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: colors.white,
        flex: 2,
    },
    Search: {
        height: normalize(25),
        width: normalize(25),
        tintColor: '#000000',
        margin: normalize(4),
        alignSelf: 'center'
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
    ProfileImage: {
        width: normalize(55),
        height: normalize(55),
        margin: normalize(2),
        borderRadius: normalize(65),
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
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.appBlue,
        marginRight: normalize(5),
        alignSelf: 'center'
    },
    Click: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.gray,
        marginRight: normalize(5),
        alignSelf: 'center'
    },
    Details: {
        fontSize: normalize(14),
        color: colors.gray,
        fontWeight: '600',
        marginLeft: normalize(15),
        marginVertical: normalize(10),
        textAlign: 'center'
    },
    People: {
        fontSize: normalize(14),
        color: colors.white,
        marginLeft: normalize(15),
        flex: 1,
        fontWeight: 'bold',
    },
    ClearAll: {
        fontSize: normalize(14),
        color: colors.appBlue,
        marginRight: normalize(15),
        fontWeight: 'bold',
    },
    Done: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: normalize(10),

    },
    DoneButton: {
        borderRadius: normalize(5),
        backgroundColor: colors.appBlue,
        marginHorizontal: normalize(2),
        marginVertical: normalize(5)
    }
});

export default CloseFriends;