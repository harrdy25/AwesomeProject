import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Modal, FlatList } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView, TextInput } from "react-native-gesture-handler";

const Follower = [
    { id: '1', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', tag: 'Remove' },
    { id: '2', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', tag: 'Remove' },
    { id: '3', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', tag: 'Remove' },
    { id: '4', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', tag: 'Remove' },
    { id: '5', image: images.IMG_HARRDY, title: 'dhruvati_joshi', name: 'Dharuvati Joshi🌟 ', tag: 'Remove' },
    { id: '6', image: images.IMG_HARRDY, title: 'krunal_3173', name: 'K_K_TRIVEDI 🕉️📿', tag: 'Remove' },
    { id: '7', image: images.IMG_HARRDY, title: 'ajay_kukdiya', name: 'Ajay Kukadiya', tag: 'Remove' },
    { id: '8', image: images.IMG_HARRDY, title: 'arvind_kukadiya', name: 'Arvind Kukadiya', tag: 'Remove' },
    { id: '9', image: images.IMG_HARRDY, title: 'sneha_._jsani', name: 'sneha', tag: 'Remove' },
    { id: '10', image: images.IMG_HARRDY, title: 'doc_sanjay_cardio', name: '', tag: 'Remove' },
    { id: '11', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', tag: 'Remove' },
    { id: '12', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', tag: 'Remove' },
    { id: '13', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', tag: 'Remove' },
    { id: '14', image: images.IMG_HARRDY, title: 'the_vasani_2405', name: 'V. B. J.🌟 790', tag: 'Remove' },
    { id: '15', image: images.IMG_HARRDY, title: 'krunal_3173', name: 'K_K_TRIVEDI 🕉️📿', tag: 'Remove' },
];

const Following = [
    { id: '1', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', tag: 'Following' },
    { id: '2', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', tag: 'Following' },
    { id: '3', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', tag: 'Following' },
    { id: '4', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', tag: 'Following' },
    { id: '5', image: images.IMG_HARRDY, title: 'dhruvati_joshi', name: 'Dharuvati Joshi🌟 ', tag: 'Following' },
    { id: '6', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', tag: 'Following' },
    { id: '7', image: images.IMG_HARRDY, title: 'ajay_kukdiya', name: 'Ajay Kukadiya', tag: 'Following' },
    { id: '8', image: images.IMG_HARRDY, title: 'arvind_kukadiya', name: 'Arvind Kukadiya', tag: 'Following' },
    { id: '9', image: images.IMG_HARRDY, title: 'sneha_._jsani', name: 'sneha', tag: 'Following' },
    { id: '10', image: images.IMG_HARRDY, title: 'doc_sanjay_cardio', name: '', tag: 'Following' },
    { id: '11', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', tag: 'Following' },
    { id: '12', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', tag: 'Following' },
    { id: '13', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', tag: 'Following' },
    { id: '14', image: images.IMG_HARRDY, title: 'the_vasani_2405', name: 'V. B. J.🌟 790', tag: 'Following' },
    { id: '15', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', tag: 'Following' },
];


function Followers({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    // const color = item.id === selectedId ? '#1e90ff' : 'black';


    const renderList = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: normalize(4) }}>
            <View style={[styles.item], { flexDirection: 'row', flex: 1, marginLeft: normalize(8) }}>
                <TouchableOpacity>
                    <Image style={styles.ProfileImage} source={item.image} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                        <TouchableOpacity>
                            <Text style={styles.UserName}>{item.title}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.FollowButton}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Name}>{item.name}</Text>
                </View>
            </View>
            <TouchableOpacity >
                <Text style={styles.Remove}>{item.tag}</Text>
            </TouchableOpacity>
        </View >
    );

    const renderFollowing = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: normalize(4), marginHorizontal: normalize(8) }}>
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
                <Text style={styles.Followingg}>{item.tag}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.Icon} source={images.IMG_Menu_Elips} />
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
                    <Text style={styles.ProfileName}>harrdy25__</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                        setSelectedId(0);
                    }}>
                        <Text style={styles.Following}>525m Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                        setSelectedId(1);
                        // this.setState({selectedId:1})
                    }}>
                        <Text style={styles.Following}> 564 Following</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10), }} />

                {selectedId == 0 &&
                    <ScrollView>
                        <TouchableOpacity style={styles.Card}>
                            <Image style={styles.Search} source={images.IMG_BOTTOM_SEARCH} />
                            <TextInput style={{ alignSelf: 'center', color: '#000000', marginLeft: normalize(10) }} placeholder="Search" />
                        </TouchableOpacity>
                        <View style={{ marginTop: normalize(15) }}>
                            <FlatList
                                data={Follower}
                                renderItem={renderList}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </ScrollView>
                }
                {selectedId == 1 &&
                    <ScrollView>
                        <View>
                            <TouchableOpacity style={styles.Card}>
                                <Image style={styles.Search} source={images.IMG_BOTTOM_SEARCH} />
                                <TextInput style={{ alignSelf: 'center', color: '#000000', marginLeft: normalize(10) }} placeholder="Search" />
                            </TouchableOpacity>
                            <View style={{ marginLeft: normalize(8) }}>
                                <Text style={styles.Category}>Categories</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(20), }}>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Image style={styles.ProfileImgg} source={images.IMG_HVK4} />
                                        <Image style={styles.ProfileImg} source={images.IMG_HVK3} />
                                    </View>
                                    <View style={{ alignSelf: 'center', marginLeft: normalize(10) }}>
                                        <Text style={styles.UserName}>Least Interacted With</Text>
                                        <Text style={styles.Name}>exteedesign and 49 others</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Image style={styles.ProfileImgg} source={images.IMG_HVK2} />
                                        <Image style={styles.ProfileImg} source={images.IMG_HVK1} />
                                    </View>
                                    <View style={{ alignSelf: 'center', marginLeft: normalize(10) }}>
                                        <Text style={styles.UserName}>Most Shown in Feed</Text>
                                        <Text style={styles.Name}>poemsporn_ and 49 others</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(20), }} />
                            <View style={{ flexDirection: 'row', marginTop: normalize(25) }}>
                                <Text style={{ color: colors.white, fontSize: normalize(20), flex: 1 }}>Short by <Text style={styles.Category}>Default</Text></Text>
                                <TouchableOpacity style={styles.UpDownArrowBorder}>
                                    <Image style={styles.UpDownArrow} source={images.IMG_UpDownArrow_Png} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(20), }}>
                                <View style={styles.HastagBorder}>
                                    <Image style={styles.Hastag} source={images.IMG_Hastag_Png} />
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={styles.UserName}>Hashtags</Text>
                                    <Text style={styles.Name}>#harrdy25, #harrdykuks, #kukudiya, #kuku25,#kuku</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginTop: normalize(15) }}>
                                <FlatList
                                    data={Following}
                                    renderItem={renderFollowing}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </View>
                    </ScrollView>
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.containermodal}>
                        <View style={styles.ModalView}>
                            <TouchableOpacity style={{ marginVertical: normalize(10) }}>
                                <Image style={styles.FollowingImg} source={images.IMG_HVK7} />
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
                </Modal>
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
        // borderBottomColor: '#515151',
        // borderBottomWidth: normalize(0.5)
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
        marginTop: normalize(10)
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
        // textAlign: 'center',
        flex: 1.6,
        // backgroundColor: colors.white,
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
    Following: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: normalize(15),
        marginTop: normalize(10),
        textAlign: 'center',
    },
    Following1: {
        fontSize: normalize(16),
        color: colors.red,
        fontWeight: 'bold',
        marginLeft: normalize(15),
        marginTop: normalize(10),
        textAlign: 'center',
    },
    ProfileImage: {
        width: normalize(55),
        height: normalize(55),
        margin: normalize(2),
        borderRadius: normalize(65),
        // borderWidth: normalize(2),
        // borderColor: colors.white,
    },
    Remove: {
        fontSize: normalize(16),
        color: colors.white,
        borderColor: colors.white,
        borderWidth: normalize(1),
        borderRadius: normalize(5),
        padding: normalize(3),
        fontWeight: 'bold',
        marginRight: normalize(10)
    },
    FollowButton: {
        color: colors.appBlue,
        fontSize: normalize(18),
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: normalize(15)
    },
    Category: {
        marginTop: normalize(15),
        fontSize: normalize(20),
        color: colors.white,
        fontWeight: 'bold',
        // flex: 1
    },
    ProfileImgg: {
        width: normalize(45),
        height: normalize(45),
        margin: normalize(2),
        borderRadius: normalize(65),
        // borderWidth: normalize(2),
        // borderColor: colors.white,
    },
    ProfileImg: {
        width: normalize(50),
        height: normalize(50),
        margin: normalize(2),
        borderRadius: normalize(65),
        // borderWidth: normalize(2),
        // borderColor: colors.white,
        position: 'absolute',
        top: normalize(8),
        left: normalize(10),
        borderWidth: normalize(3)
    },
    UpDownArrow: {
        height: normalize(15),
        width: normalize(15),
        tintColor: colors.white,
        alignSelf: 'center',
    },
    UpDownArrowBorder: {
        borderWidth: normalize(2),
        borderColor: colors.white,
        borderRadius: normalize(30),
        padding: normalize(2),
        marginRight: normalize(10),
    },
    HastagBorder: {
        borderWidth: normalize(2),
        borderColor: '#FD1D1D',
        borderRadius: normalize(30),
        padding: normalize(2),
        alignSelf: 'center',
    },
    Hastag: {
        width: normalize(40),
        height: normalize(40),
        margin: normalize(2),
        borderRadius: normalize(65),
        tintColor: colors.Insta,
    },
    Icon: {
        height: normalize(18),
        width: normalize(18),
        tintColor: colors.white,
        marginHorizontal: normalize(5)
    },
    Followingg: {
        fontSize: normalize(14),
        color: colors.white,
        borderColor: colors.white,
        borderWidth: normalize(1),
        borderRadius: normalize(5),
        padding: normalize(5),
        fontWeight: 'bold',
        marginRight: normalize(10)
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
        // borderWidth: normalize(2),
        // borderColor: colors.white,
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
});

export default Followers;