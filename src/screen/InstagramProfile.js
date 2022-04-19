
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, SafeAreaView } from 'react-native';
import { normalize } from '../utils';
import { images } from '../assets/images/index';
import colors from '../theme/colors';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const Post = [
    { id: 1, image: images.IMG_HVK1 },
    { id: 2, image: images.IMG_HARRDY },
    { id: 3, image: images.IMG_HVK2 },
    { id: 4, image: images.IMG_HVK3 },
    { id: 5, image: images.IMG_HVK4 },
    { id: 6, image: images.IMG_HVK5 },
    { id: 7, image: images.IMG_HVK6 },
    { id: 8, image: images.IMG_HVK7 },
    { id: 9, image: images.IMG_HVK8 },
    { id: 10, image: images.IMG_HVK9 },
    { id: 11, image: images.IMG_HARRDY },
    { id: 12, image: images.IMG_HVK10 },
];

const StoryPost = [
    { id: 1, image: images.IMG_HARRDY, title: '❤️❤️' },
    { id: 2, image: images.IMG_HARRDY, title: '🌺 🖤' },
    { id: 3, image: images.IMG_HARRDY, title: '🙏🏻 👻' },
    { id: 4, image: images.IMG_HARRDY, title: '🖤 ' },
    { id: 5, image: images.IMG_HARRDY, title: '🥂' },
    { id: 6, image: images.IMG_HARRDY, title: '😍 🥰' },
    { id: 7, image: images.IMG_HARRDY, title: '👩‍💻 🧑‍💻' },
    { id: 8, image: images.IMG_HARRDY, title: '🖤🖤' },
];
const PostPlus = [
    { id: 1, image: images.IMG_Post_Png, title: 'Post' },
    { id: 2, image: images.IMG_Reels_Png, title: 'Reel' },
    { id: 3, image: images.IMG_StoryPlus_Png, title: 'Story' },
    { id: 4, image: images.IMG_Highlight_Png, title: 'Story Highlight' },
    { id: 5, image: images.IMG_Live_Png, title: 'Live' },
    { id: 6, image: images.IMG_Guide_Png, title: 'Guide' },
];
const MenuItem = [
    { id: 1, image: images.IMG_Setting_Png, title: 'Setting', },
    { id: 2, image: images.IMG_Activity_Png, title: 'Your activity' },
    { id: 3, image: images.IMG_Archive_Png, title: 'Archive' },
    { id: 4, image: images.IMG_Insights_Png, title: 'Insights' },
    { id: 5, image: images.IMG_QRCode_Png, title: 'QR Code' },
    { id: 6, image: images.IMG_Saved_Png, title: 'Saved' },
    { id: 7, image: images.IMG_CloseFriend_Png, title: 'Close Friends' },
    { id: 8, image: images.IMG_Discover_Png, title: 'Discover people' },
    { id: 9, image: images.IMG_Covide19_Png, title: 'COVID-19 Information Center' },
];
const EditProfile = [
    { id: 1, title: 'Name', info: '♛HAཞ ཞDIK KUKADIYA🦅', },
    { id: 2, title: 'username', info: 'harrdy25__', },
    { id: 3, title: 'Website', info: 'Website', },
    { id: 4, title: 'Bio', info: '🧑🏻‍💻Kuku \n मुसाफ़िर🕊 (Jan) = ➋➎ \n 𝙇𝙞𝙛𝙚 𝙞𝙨 𝙩𝙤𝙤 𝙨𝙝𝙤𝙧𝙩 , 𝙡𝙞𝙫𝙚 𝙞𝙩 𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡𝙮 ', },
];
const Information = [
    { id: 1, title: 'Page', info: 'Connect or Create', image: images.IMG_RightArrow_Png, },
    { id: 2, title: 'Category', info: 'Personal blog', image: images.IMG_RightArrow_Png, },
    { id: 3, title: 'Contact option', info: 'Email, Phone', image: images.IMG_RightArrow_Png, },
    { id: 4, title: 'Action button', info: 'None active', image: images.IMG_RightArrow_Png, },
    { id: 5, title: 'Profile display', info: 'None hidden', image: images.IMG_RightArrow_Png, },
];

function InstagramProfile({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [PlusmodalVisible, setModalVisiblePlus] = useState(false);
    const [MenumodalVisible, setModalVisibleMenu] = useState(false);
    const [EditmodalVisible, setModalVisibleEdit] = useState(false);


    const renderItem = ({ item, }) => (
        <View style={styles.PostImage}>
            <TouchableOpacity>
                <Image style={styles.Image} source={item.image} />
            </TouchableOpacity>
        </View>
    );

    const renderStory = ({ item, }) => (
        <View>
            <View style={styles.StoryImg}>
                <TouchableOpacity style={[styles.item]}>
                    <View style={{ borderColor: '#515151', borderWidth: normalize(1), borderRadius: normalize(60), }}>
                        <Image style={styles.StoryImage} source={item.image} />
                    </View>
                    <Text style={styles.StoryName}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        </View >
    );

    const MenuSetting = ({ item, }) => (
        <View style={styles.PostImg}>
            <TouchableOpacity style={[styles.item], { flexDirection: 'row' }}>
                <Image style={styles.MenuImage} source={item.image} />
                <Text style={styles.MenuName}>{item.title}</Text>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginLeft: normalize(50), marginVertical: normalize(10) }}></View>
        </View>
    );

    const renderPost = ({ item, }) => (
        <View style={styles.PostImg}>
            <TouchableOpacity style={[styles.item], { flexDirection: 'row' }}>
                <Image style={styles.PostImagePlus} source={item.image} />
                <Text style={styles.PostName}>{item.title}</Text>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginLeft: normalize(50), marginVertical: normalize(10) }}></View>
        </View>
    );

    const renderEditProfile = ({ item, }) => (
        <View style={styles.PostImg}>
            <TouchableOpacity style={[styles.item], { flexDirection: 'row' }}>
                <Text style={styles.EditBio}>{item.title}</Text>
                <Text style={styles.Edit}>{item.info}</Text>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginLeft: normalize(90), marginVertical: normalize(10) }}></View>

        </View>
    );

    const renderInfo = ({ item, }) => (
        <View style={styles.PostImg}>
            <TouchableOpacity style={[styles.item], { flexDirection: 'row' }}>
                <Text style={styles.Info}>{item.title}</Text>
                <Text style={styles.EditInfo}>{item.info}</Text>
                <Image style={styles.InfoPic} source={item.image} />
            </TouchableOpacity>
            <View style={{ marginVertical: normalize(10) }}></View>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.white }}>
            <View style={{ backgroundColor: colors.black }}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => setModalVisible(true)}>
                        <Text style={styles.ProfileName}>harrdy25__</Text>
                        <Image style={styles.Populer} source={images.IMG_InstaPop_Png} />
                        <Image style={styles.DownArrow} source={images.IMG_Down_Arroww} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setModalVisiblePlus(true)}>
                            <Image style={styles.Plus} source={images.IMG_Pulss_png} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisibleMenu(true)}>
                            <Image style={styles.Plus} source={images.IMG_MenuLine_Png} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image style={styles.avatar} source={images.IMG_HARRDY} />
                                    <Image style={styles.PlusAdd} source={images.IMG_Pulss_Add_png} />
                                </TouchableOpacity>
                                <View style={styles.profileDetail}>
                                    <TouchableOpacity style={styles.detailContent} onPress={() => navigation.navigate('InstaNotification')}>
                                        <Text style={styles.count}>12</Text>
                                        <Text style={styles.title}>Posts</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.detailContent} onPress={() => navigation.navigate('Followers')}>
                                        <Text style={styles.count}>525m</Text>
                                        <Text style={styles.title}>Followers</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.detailContent} onPress={() => navigation.navigate('Followers')}>
                                        <Text style={styles.count}>560</Text>
                                        <Text style={styles.title}>Following</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.name}> ♛HAཞ ཞDIK KUKADIYA🦅</Text>
                                <Text style={styles.Personal}>Personal blog</Text>
                                <Text style={styles.BioCaption}>🧑🏻‍💻Kuku</Text>
                                <Text style={styles.BioCaption}> मुसाफ़िर🕊 (Jan) = ➋➎</Text>
                                <Text style={styles.BioCaption}> 𝙇𝙞𝙛𝙚 𝙞𝙨 𝙩𝙤𝙤 𝙨𝙝𝙤𝙧𝙩 , 𝙡𝙞𝙫𝙚 𝙞𝙩 𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡𝙮 </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setModalVisibleEdit(true)}>
                        <Text style={styles.EditProfile}>Edit Profile</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: normalize(5), marginHorizontal: normalize(10) }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('InstaSetting')} >
                            <Text style={styles.Tools}>Ad Tools</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('CloseFriends')}>
                            <Text style={styles.Tools}>Insights</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Text style={styles.Tools}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <ScrollView horizontal={true}> */}
                    <View>
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: 'row', }}>
                                <FlatList
                                    data={StoryPost}
                                    renderItem={renderStory}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                />
                                <TouchableOpacity style={{ alignSelf: 'center', marginLeft: normalize(11), }}>
                                    <View style={{
                                        borderWidth: normalize(1),
                                        borderColor: '#515151',
                                        borderRadius: normalize(60),
                                        alignSelf: 'center'
                                    }}>
                                        <Image style={styles.PlusIcon} source={images.IMG_Plus_plus_png} />
                                    </View>
                                    <Text style={{
                                        fontSize: normalize(16),
                                        color: colors.white,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        marginTop: normalize(5)
                                    }}>New</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    {/* </ScrollView> */}
                    <View style={{ flexDirection: 'row', marginBottom: normalize(8) }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('YourActivity')}>
                            <Image style={styles.Post} source={images.IMG_Post_Png} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Insights')}>
                            <Image style={styles.Post} source={images.IMG_Reels_Png} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('DiscoverPeople')}>
                            <Image style={styles.Post} source={images.IMG_Tag_Png} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center', }}>
                        <FlatList
                            data={Post}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.container}>
                    <View style={styles.ModalView}>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
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
                                <Text style={styles.ModalEditProfile}>15 close friends</Text>
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
                visible={PlusmodalVisible}
                onRequestClose={() => {
                    setModalVisiblePlus(!PlusmodalVisible);
                }}>
                <View style={styles.container}>
                    <View style={styles.ModalPost}>
                        <TouchableOpacity style={styles.Border} onPress={() => setModalVisiblePlus(!PlusmodalVisible)} />
                        <Text style={styles.Create}>Createe</Text>
                        <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginBottom: normalize(20) }}></View>
                        <View>
                            <FlatList
                                data={PostPlus}
                                renderItem={renderPost}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </Modal >
            <Modal
                animationType="slide"
                transparent
                visible={MenumodalVisible}>
                <View style={styles.container}>
                    <View style={styles.ModalMenu}>
                        <TouchableOpacity style={styles.BorderMenu} onPress={() => setModalVisibleMenu(!MenumodalVisible)} />
                        <View>
                            <FlatList
                                data={MenuItem}
                                renderItem={MenuSetting}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={EditmodalVisible}
                onRequestClose={() => {
                    setModalVisibleEdit(!EditmodalVisible);
                }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.ContainerModal}>
                        <View style={styles.ModalInfo}>
                            <View style={{ flexDirection: 'row', marginHorizontal: normalize(10), marginTop: normalize(10) }}>
                                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setModalVisibleEdit(!EditmodalVisible)}>
                                    <Text style={styles.EditCancleModal}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={styles.EditNameModal}>Edit Profile </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setModalVisibleEdit(!EditmodalVisible)}>
                                    <Text style={styles.EditDoneModal}>Done</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10) }} />
                            <ScrollView>
                                <TouchableOpacity style={{ marginTop: normalize(15) }}>
                                    <Image style={styles.EditProfilePic} source={images.IMG_HARRDY} />
                                    <Text style={styles.EditphotoModal}>Change profile photo</Text>
                                </TouchableOpacity>
                                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginBottom: normalize(20) }} />
                                <View>
                                    <FlatList
                                        data={EditProfile}
                                        renderItem={renderEditProfile}
                                        keyExtractor={item => item.id}
                                        showsVerticalScrollIndicator={false}
                                    />
                                    <View>
                                        <Text style={styles.Information}>Profile information</Text>
                                    </View>
                                </View>
                                <View>
                                    <FlatList
                                        data={Information}
                                        renderItem={renderInfo}
                                        keyExtractor={item => item.id}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>

                                <TouchableOpacity>
                                    <Text style={styles.EditDoneModal}>Personal Information Settings</Text>
                                </TouchableOpacity>
                                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginBottom: normalize(20) }} />
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.black,
    },
    headerContent: {
        paddingVertical: normalize(5),

    },
    ProfileName: {
        fontSize: normalize(25),
        fontWeight: '800',
        marginLeft: normalize(10),
        color: colors.white,
        marginVertical: normalize(10)

    },
    DownArrow: {
        height: normalize(20),
        width: normalize(20),
        tintColor: colors.gray,
        marginLeft: normalize(5),
        marginTop: normalize(10)

    },
    Populer: {
        height: normalize(20),
        width: normalize(20),
        tintColor: colors.appBlue,
        marginLeft: normalize(5),
        alignSelf: 'center'
    },
    Plus: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.white,
        marginLeft: normalize(5),
        marginRight: normalize(5),
        marginTop: normalize(10)
    },

    avatar: {
        width: normalize(80),
        height: normalize(80),
        borderRadius: normalize(100),
        marginLeft: normalize(15)
        // marginBottom: normalize(10),
    },
    PlusAdd: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.blue,
        marginLeft: normalize(70),
        marginRight: normalize(5),
        position: 'absolute',
        bottom: normalize(0),
        borderWidth: normalize(2),
        borderRadius: normalize(30),
        borderColor: colors.black,
    },
    name: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: normalize(15),
        marginTop: normalize(5)

    },
    profileDetail: {
        alignSelf: 'center',
        // marginTop: normalize(210),
        flexDirection: 'row',
        marginLeft: normalize(30)
        // position: 'absolute',
        // backgroundColor: "#ffff",
        // borderRadius: normalize(10),
        // padding: normalize(10),
        // shadowOffset: {
        //     width: 0,
        //     height: 0.5,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: normalize(10),
        // elevation: 5,
    },
    detailContent: {
        marginHorizontal: normalize(10),
        margin: normalize(10),
        alignItems: 'center'
    },
    title: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: '600'
    },
    count: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: '700'
    },
    Image: {
        width: normalize(120),
        height: normalize(120),
        margin: normalize(2)
    },
    PostImage: {
        marginTop: normalize(1),
        justifyContent: 'space-between',
    },
    BioCaption: {
        fontSize: normalize(15),
        marginLeft: normalize(15),
        color: colors.white,
    },
    Personal: {
        fontSize: normalize(15),
        marginLeft: normalize(15),
        marginTop: normalize(5),
        color: '#808080'
    },
    EditProfile: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: normalize(15),
        borderColor: colors.gray,
        borderWidth: normalize(1),
        marginHorizontal: normalize(15),
        padding: normalize(5),
        textAlign: 'center',
        borderRadius: normalize(5)
    },
    Tools: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: normalize(15),
        borderColor: colors.gray,
        borderWidth: normalize(1),
        padding: normalize(5),
        textAlign: 'center',
        borderRadius: normalize(5),
        flex: 1,
        marginHorizontal: normalize(5)
    },

    StoryImage: {
        width: normalize(60),
        height: normalize(60),
        margin: normalize(2),
        borderRadius: normalize(65),
        // borderWidth: normalize(2),
        // borderColor: colors.white,
    },
    PostImg: {
        justifyContent: 'space-between',
        marginLeft: normalize(10),
    },
    StoryImg: {
        justifyContent: 'space-between',
        marginVertical: normalize(15),
        marginHorizontal: normalize(10),
    },

    StoryName: {
        fontSize: normalize(16),
        color: colors.white,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: normalize(5)
    },
    Post: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.white,
        marginTop: normalize(10),
        alignSelf: 'center'
    },
    ModalView: {
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
        elevation: normalize(2),
    },
    buttonClose: {
        alignSelf: 'center'
    },
    Cross: {
        tintColor: colors.gray1,
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
        borderWidth: normalize(0.4),
        marginHorizontal: normalize(5),
        padding: normalize(5),
        textAlign: 'center',
        borderRadius: normalize(5),
        flex: 1
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
    ModalPost: {
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
    PostImagePlus: {
        width: normalize(30),
        height: normalize(30),
        tintColor: colors.white,
    },
    PostName: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: normalize(20),
    },
    Border: {
        borderColor: '#555555',
        borderWidth: normalize(3),
        marginTop: normalize(10),
        alignSelf: 'center',
        width: normalize(50),
        borderRadius: normalize(10)
    },
    Create: {
        fontSize: normalize(20),
        color: colors.white,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: normalize(10)
    },
    ModalMenu: {
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
    MenuImage: {
        width: normalize(30),
        height: normalize(30),
        tintColor: colors.white,
    },
    MenuName: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: normalize(20),
    },
    BorderMenu: {
        borderColor: '#555555',
        borderWidth: normalize(3),
        marginVertical: normalize(20),
        alignSelf: 'center',
        width: normalize(50),
        borderRadius: normalize(10)
    },
    container: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        marginTop: normalize(20),
        justifyContent: 'flex-end'
    },
    ContainerModal: {
        flex: 1,
        backgroundColor: colors.modalBackground,
    },
    EditNameModal: {
        fontSize: normalize(20),
        color: colors.white,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    EditCancleModal: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: '600',
        alignSelf: 'center',
    },
    EditDoneModal: {
        fontSize: normalize(15),
        color: colors.appBlue,
        fontWeight: 'bold',
        marginBottom: normalize(5)
    },
    EditProfilePic: {
        width: normalize(80),
        height: normalize(80),
        borderRadius: normalize(100),
        marginLeft: normalize(15),
        alignSelf: 'center',
        marginTop: normalize(10)
    },
    EditphotoModal: {
        fontSize: normalize(15),
        color: colors.appBlue,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: normalize(10)
    },
    Edit: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: '600',
        alignSelf: 'center',

        flex: 3
    },
    EditBio: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: '600',
        flex: 1
    },
    Information: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: normalize(10),
        marginVertical: normalize(20)
    },
    Info: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: '600',
        alignSelf: 'center',
        flex: 3
    },
    EditInfo: {
        fontSize: normalize(15),
        color: colors.gray,
        fontWeight: '600',
        marginRight: normalize(20)
    },
    InfoPic: {
        width: normalize(20),
        height: normalize(20),
        tintColor: colors.gray,
        marginRight: normalize(10)
    },
    ModalInfo: {
        backgroundColor: '#000000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: normalize(4),
        elevation: normalize(5),
    },
    PlusIcon: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        margin: normalize(18),
        alignSelf: 'center'
    },

});

export default InstagramProfile;

