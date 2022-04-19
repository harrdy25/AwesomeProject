import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Modal, FlatList, SafeAreaView } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView, TextInput,  } from "react-native-gesture-handler";

const Follower = [
    { id: '1', image: images.IMG_HARRDY, title: 'Dr Nikita Lakhani', name: 'Sent 1h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '2', image: images.IMG_HARRDY, title: 'Ami Balar', name: 'Sent 15h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '3', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '4', image: images.IMG_HARRDY, title: 'Preksha_1428', name: 'Active yesterday', icon: images.IMG_CAMERAA_PNG },
    { id: '5', image: images.IMG_HARRDY, title: 'Dhruvati_joshi', name: 'Sent 1h ago ', icon: images.IMG_CAMERAA_PNG },
    { id: '6', image: images.IMG_HARRDY, title: 'Krunal_3173', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '7', image: images.IMG_HARRDY, title: 'Ajay_kukdiya', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '8', image: images.IMG_HARRDY, title: 'Arvind_kukadiya', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '9', image: images.IMG_HARRDY, title: 'Sneha_._jsani', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '10', image: images.IMG_HARRDY, title: 'Doc_sanjay_cardio', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '11', image: images.IMG_HARRDY, title: 'Amibalar_11', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '12', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '13', image: images.IMG_HARRDY, title: 'Preksha_1428', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '14', image: images.IMG_HARRDY, title: 'The_vasani_2405', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '15', image: images.IMG_HARRDY, title: 'Krunal_3173', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
];

const Following = [
    { id: '1', image: images.IMG_HVK1, title: 'Dr Kinjal Rana', name: 'Sent 5m ago', icon: images.IMG_CAMERAA_PNG },
    { id: '2', image: images.IMG_HVK2, title: 'Queen Janvi', name: 'Sent 1h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '3', image: images.IMG_HVK3, title: 'Womans_ability_25', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },
    { id: '4', image: images.IMG_HVK4, title: 'Preksha_1428', name: 'Active yesterday', icon: images.IMG_CAMERAA_PNG },
    { id: '5', image: images.IMG_HVK5, title: 'Dhruvati_joshi', name: 'Sent 1h ago ', icon: images.IMG_CAMERAA_PNG },
    { id: '6', image: images.IMG_HVK6, title: 'Janvi Patel', name: 'Sent 20h ago', icon: images.IMG_CAMERAA_PNG },

];


function InstaMessage({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [newmodalVisible, setModalVisibleNew] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [requstmodal, setrequstModal] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [topmodalVisible, setTopModalVisible] = useState(false);

    
    const renderList = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: normalize(4), marginLeft: normalize(8) }}>
            <View style={[styles.item], { flexDirection: 'row', flex: 1 }}>
                <TouchableOpacity>
                    <Image style={styles.ProfileImage} source={item.image} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
                    <TouchableOpacity style={{ alignSelf: 'center', }}>
                        <Text style={styles.UserName}>{item.title}</Text>
                        <Text style={styles.Name}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity >
                <Image style={styles.Camera} source={item.icon} />
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
                <Image style={styles.Camera} source={item.icon} />
            </TouchableOpacity>
        </View >
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.HeaderCard}>
                    <TouchableOpacity style={{}} onPress={() => navigation.navigate('InstagramHomePage')}>
                        <Image style={styles.back} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => setModalVisibleNew(!newmodalVisible)}>
                        <Text style={styles.ProfileName}>harrdy25__</Text>
                        <Image style={styles.Down} source={images.IMG_Down_Arroww} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginRight: normalize(10) }}>
                        <TouchableOpacity onPress={() => navigation.navigate('InstaChat')}>
                            <Image style={styles.Menu} source={images.IMG_FILTER} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.Edit} source={images.IMG_MenuLine_Png} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.Card}>
                    <Image style={styles.Search} source={images.IMG_BOTTOM_SEARCH} />
                    <TextInput style={{ alignSelf: 'center', color: colors.white, flex: 1 }} placeholder="Search" />
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image style={styles.Search} source={images.IMG_FILTER} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                        setSelectedId(0);
                    }}>
                        <Text style={styles.Following}>Primary </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}
                        onPress={() => {
                            setSelectedId(1);
                            // this.setState({selectedId:1})
                            // {selectedId ? styles.FollowingGray : styles.Following}
                        }}>
                        <Text style={styles.Following}>General </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                        // setSelectedId(2);
                        setrequstModal(!requstmodal);
                        // this.setState({selectedId:1})
                    }}>
                        <Text style={styles.Following}>Requests </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10), }} />

                {selectedId == 0 &&
                    <ScrollView>
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
                    <View style={{ marginTop: normalize(15), flex: 1 }}>
                        <FlatList
                            data={Following}
                            renderItem={renderFollowing}
                            keyExtractor={item => item.id}
                        />
                    </View>
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={newmodalVisible}
                    onRequestClose={() => {
                        setModalVisibleNew(!newmodalVisible);
                    }}>
                    <View style={styles.TitleModalCard}>
                        <View style={styles.TitleModal}>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisibleNew(!newmodalVisible)}>
                                    <Image style={styles.Cross} source={images.IMG_CLOSE_GRAY} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Image style={styles.ModalProfile} source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLS82ZgrTZDJjwqK4nioQF-0_D8IcpGp3SuQXQhxGAc=s900-c-k-c0x00ffffff-no-rj' }} />
                                <Text style={styles.ModalProfileName}>harrdy25__</Text>
                                <Image style={styles.ModalPlus} source={images.IMG_Click_Png} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', }}>
                                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: normalize(10) }}>
                                    <Text style={styles.ModalEditProfile}>885 followers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: normalize(10) }}>
                                    <Text style={styles.ModalEditProfile}>4 close friends</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(12) }}></View>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(10) }}>
                                <Image style={styles.ModalProfile} source={{ uri: 'https://pbs.twimg.com/profile_images/1127893765291569152/op7hNlCK_400x400.jpg' }} />
                                <Text style={styles.ModalProfileNew}>womans_ability_25</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(12) }}></View>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(10), marginBottom: normalize(10) }}>
                                <View style={{ borderWidth: normalize(0.5), borderColor: '#515151', borderRadius: normalize(50), marginLeft: normalize(5) }}>
                                    <Image style={styles.ModalProfileAdd} source={images.IMG_Puls_White_png} />
                                </View>
                                <Text style={styles.ModalProfileNew}>Add account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.containermodal}>
                        <View style={styles.ModalView}>
                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Text style={styles.ModalTitle}>Inbox</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), }}></View>
                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Text style={styles.ModalTitle}> Unread</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), }}></View>
                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Text style={styles.ModalTitle}>Flagged</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ModalView}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.Cancle}> Cancle </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal
                    animationIn="slideInLeft"
                    transparent={true}
                    visible={requstmodal}
                    onRequestClose={() => {
                        setrequstModal(!requstmodal);
                    }}>
                    <View style={styles.RequstModalCard}>
                        <View style={styles.RequstModal}>
                            <View style={{ flexDirection: 'row', padding: normalize(5) }}>
                                <TouchableOpacity style={{ flex: 1 }}
                                    onPress={() => setrequstModal(!requstmodal)}>
                                    <Image style={styles.RequstBack} source={images.IMG_BACK_ARROW} />
                                </TouchableOpacity>
                                <Text style={styles.RModalTitle}>Message Requests</Text>
                                <Text style={styles.Editt}>Edit</Text>
                            </View>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginVertical: normalize(5) }} />
                            <ScrollView>
                                <TouchableOpacity style={{
                                    borderWidth: normalize(1),
                                    borderColor: colors.gray,
                                    borderRadius: normalize(5),
                                    margin: normalize(4),
                                    flexDirection: 'row'
                                }} >
                                    <Text style={styles.TopRequest}>{expanded ? "Top requests" : "All requests"}</Text>
                                    <Image style={styles.RequstMenu} source={images.IMG_FILTER} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(15) }} >
                                    <View style={{
                                        borderWidth: normalize(1),
                                        borderColor: colors.gray,
                                        borderRadius: normalize(30),
                                        marginLeft: normalize(10)
                                    }}>
                                        <Image style={styles.HideIcon} source={images.IMG_HIDE_PNG} />
                                    </View>
                                    <Text style={styles.HiddenRequest}>Hidden Requests</Text>
                                    <Text style={styles.CountMsg}>0</Text>
                                    <Image style={styles.RequstRight} source={images.IMG_RightArrow_Png} />
                                </TouchableOpacity>
                                <View style={{ marginTop: normalize(100) }}>
                                    <View style={{
                                        borderWidth: normalize(2),
                                        borderColor: colors.white,
                                        borderRadius: normalize(60),
                                        alignSelf: 'center'
                                    }}>
                                        <Image style={styles.ChatIcon} source={images.IMG_Chat_Png} />
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.NoRequest}>No top requests</Text>
                                    <Text style={{
                                        fontSize: normalize(15),
                                        color: colors.gray,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginHorizontal: normalize(50),
                                        marginVertical: normalize(20)

                                    }}>{expanded ? "You don't have any requst that we've identified as top priority." : "You don't have any message requests."}</Text>
                                    <TouchableOpacity onPress={() =>
                                        setExpanded(!expanded)
                                    }>
                                        <Text style={{
                                            fontSize: normalize(15),
                                            color: colors.appBlue,
                                            fontWeight: 'bold',
                                            alignSelf: 'center'
                                        }}>{expanded ? "See all request" : "See to request"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={topmodalVisible}
                    onRequestClose={() => {
                        setTopModalVisible(!topmodalVisible);
                    }}>
                    <View style={styles.containermodal}>
                        <View style={styles.ModalView}>
                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Text style={styles.ModalTitle}>Top requests</Text>
                            </TouchableOpacity>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), }}></View>
                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Text style={styles.ModalTitle}> All requests</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ModalView}>
                        <TouchableOpacity
                            onPress={() => setTopModalVisible(!topmodalVisible)}>
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
        backgroundColor: colors.black,
        flex: 1
    },

    HeaderCard: {
        alignItems: 'center',
        marginTop: normalize(10),
        flexDirection: 'row',
    },

    Card: {
        marginHorizontal: normalize(8),
        borderRadius: normalize(10),
        backgroundColor: '#555555',
        shadowColor: colors.black,
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: normalize(10),
        elevation: 5,
    },
    back: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.white,
        marginLeft: normalize(5),
        marginBottom: normalize(10),
        alignSelf: 'center',
    },
    Down: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        marginBottom: normalize(10),
        alignSelf: 'center',

    },
    Menu: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        marginBottom: normalize(10),
        alignSelf: 'center',
        marginRight: normalize(8)
    },
    Edit: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        marginBottom: normalize(10),
        alignSelf: 'center',
    },
    ProfileName: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: colors.white,
        alignSelf: 'center',
    },
    Search: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.gray,
        margin: normalize(4),
        alignSelf: 'center',
        marginHorizontal: normalize(10)
    },
    Name: {
        fontSize: normalize(13),
        color: colors.gray,
        marginLeft: normalize(15),
        fontWeight: '500'
    },
    Camera: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.gray,
        alignSelf: 'center',
        marginRight: normalize(10)
    },
    UserName: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: '500',
        marginLeft: normalize(15),
    },
    FollowingGray: {
        fontSize: normalize(16),
        color: colors.gray,
        fontWeight: 'bold',
        marginTop: normalize(10),
        textAlign: 'center',
        // borderBottomColor: colors.white,
        // borderBottomWidth: normalize(5),
    },
    Following: {
        fontSize: normalize(16),
        color: colors.gray,
        fontWeight: 'bold',
        marginTop: normalize(10),
        textAlign: 'center',
        // borderBottomColor: colors.white,
        // borderBottomWidth: normalize(5),
    },
    ProfileImage: {
        width: normalize(55),
        height: normalize(55),
        margin: normalize(2),
        borderRadius: normalize(65),
        // borderWidth: normalize(2),
        // borderColor: colors.white,
    },
    Icon: {
        height: normalize(18),
        width: normalize(18),
        tintColor: colors.white,
        marginHorizontal: normalize(5)
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
    Cancle: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: normalize(15)
    },
    ModalTitle: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '600',
        padding: normalize(15)
    },
    TitleModalCard: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        marginTop: normalize(20),
        justifyContent: 'flex-end'
    },
    TitleModal: {
        backgroundColor: '#333333',
        borderTopLeftRadius: normalize(15),
        borderTopRightRadius: normalize(15),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: normalize(4),
        elevation: normalize(5),
    },
    button: {
        borderRadius: normalize(50),
        padding: normalize(8),
    },
    Cross: {
        tintColor: colors.white,
        height: normalize(25),
        width: normalize(25)
    },
    ModalProfile: {
        width: normalize(60),
        height: normalize(60),
        borderRadius: normalize(100),
        marginLeft: normalize(5)
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
    ModalProfileName: {
        fontSize: normalize(18),
        fontWeight: '800',
        marginLeft: normalize(10),
        color: colors.appBlue,
        marginVertical: normalize(10),
        flex: 1,
        alignSelf: 'center'
    },
    ModalEditProfile: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: normalize(16),
        borderColor: '#515151',
        marginHorizontal: normalize(5),
        padding: normalize(5),
        textAlign: 'center',
        borderRadius: normalize(5),
        flex: 1,
        borderWidth: normalize(2),

    },
    ModalProfileNew: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        marginLeft: normalize(10),
        color: colors.white,
        marginVertical: normalize(10),
        flex: 1,
        alignSelf: 'center',
    },
    ModalProfileAdd: {
        width: normalize(30),
        height: normalize(30),
        margin: normalize(14),
    },
    Border: {
        borderColor: colors.white,
        borderWidth: normalize(2),
        marginTop: normalize(10),
    },
    RequstModalCard: {
        backgroundColor: colors.black,
        marginTop: normalize(25),
    },
    RequstModal: {
        backgroundColor: '#000000',
        height: normalize(1000)
    },
    RequstBack: {
        tintColor: colors.white,
        height: normalize(25),
        width: normalize(25),
    },
    RModalTitle: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.white,
        flex: 3,
        alignSelf: 'center'
    },
    Editt: {
        fontSize: normalize(16),
        fontWeight: '500',
        color: colors.gray,
        alignSelf: 'center'
    },
    TopRequest: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.white,
        padding: normalize(5),
        flex: 1,
        textAlign: 'center',
        marginLeft: normalize(18)
    },
    RequstMenu: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        alignSelf: 'center',
        marginRight: normalize(8),
    },
    HiddenRequest: {
        fontSize: normalize(15),
        fontWeight: 'bold',
        color: '#d0d0d0',
        flex: 1,
        alignSelf: 'center',
        marginLeft: normalize(10)

    },
    CountMsg: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.gray,
        alignSelf: 'center',
    },
    HideIcon: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        margin: normalize(12)
    },
    RequstRight: {
        height: normalize(20),
        width: normalize(20),
        tintColor: '#d0d0d0',
        alignSelf: 'center',
        marginRight: normalize(8),
    },
    ChatIcon: {
        height: normalize(40),
        width: normalize(40),
        tintColor: colors.white,
        margin: normalize(15),
    },
    NoRequest: {
        fontSize: normalize(20),
        fontWeight: '800',
        color: colors.white,
        textAlign: 'center',
        marginTop: normalize(15)
    },
});

export default InstaMessage;

