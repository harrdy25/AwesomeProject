
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert, Modal, SafeAreaView } from 'react-native';
import { normalize } from '../utils';
import { images } from '../assets/images/index';
import colors from '../theme/colors';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StoryPost = [
    { id: 1, image: images.IMG_HARRDY, title: 'harrdy' },
    { id: 2, image: images.IMG_HARRDY, title: 'harrdy' },
    { id: 3, image: images.IMG_HARRDY, title: 'harrdy' },
    { id: 4, image: images.IMG_HARRDY, title: 'harrdy' },
    { id: 5, image: images.IMG_HARRDY, title: 'harrdy' },
    { id: 6, image: images.IMG_HARRDY, title: 'harrdy' },
    { id: 7, image: images.IMG_HARRDY, title: 'harrdy' },
    { id: 8, image: images.IMG_HARRDY, title: 'harrdy' },

];
const PostPlus = [
    { id: 1, image: images.IMG_Post_Png, title: 'Post' },
    { id: 2, image: images.IMG_StoryPlus_Png, title: 'Story' },
    { id: 3, image: images.IMG_Reels_Png, title: 'Reel' },
    { id: 4, image: images.IMG_Live_Png, title: 'Live' },
];

function InstaHomePage({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [PlusmodalVisible, setModalVisiblePlus] = useState(false);

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                { text: "Cancel", },
                { text: "OK", }
            ]
        );

    const [Post, setPost] = useState(
        [
            { id: 1, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 2, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 3, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 4, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 5, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 6, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 7, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 8, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 9, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 10, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 11, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
            { id: 12, image: images.IMG_HARRDY, cmnt: images.IMG_COMMENT, share: images.IMG_SEND_PNG, save: images.IMG_Saved_Png, },
        ]);

    const [liked, setLiked] = useState(false)

    const renderItem = ({ item, index }) => (
        <View style={styles.PostImage}>
            <View style={{ flexDirection: 'row', marginVertical: normalize(15), marginHorizontal: normalize(8) }}>
                <TouchableOpacity style={{ borderColor: 'orange', borderWidth: normalize(3), borderRadius: normalize(60), }}>
                    <Image style={styles.ProfileImage} source={images.IMG_HARRDY} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignSelf: 'center' }}>
                    <TouchableOpacity>
                    {/* onPress={() => navigation.navigate('InstagramProfile')} */}
                        <Text style={styles.ProfileTitle}>Harrdy25__</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.Location}>Surat, Gujarat</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={createTwoButtonAlert}>
                    <Image style={styles.Elips} source={images.IMG_Menu_Elips} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.item]}>
                <Image style={styles.Image} source={item.image} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: normalize(10), marginHorizontal: normalize(5) }}>
                <TouchableWithoutFeedback onPress={() => {
                    // setLiked(!liked)
                    const postList = [...Post];
                    if (postList[index].isLike) {
                        postList[index].isLike = false
                    } else {
                        postList[index].isLike = true;
                    }
                    setPost(postList);
                }}>
                    <AntDesign name={item.isLike ? 'heart' : 'hearto'} color={item.isLike ? colors.red : colors.white} size={25} />
                </TouchableWithoutFeedback>
                <TouchableOpacity style={{ marginHorizontal: normalize(8) }}>
                    <Image style={styles.HeartLike} source={item.cmnt} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Image style={styles.HeartLike} source={item.share} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setLiked(!liked);
                }}>
                    <Image source={item.save} style={!liked ? styles.HeartLike : styles.HeartLikered} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ flexDirection: 'row', marginTop: normalize(10), marginLeft: normalize(5) }}>
                    <View style={{}}>
                        <Image style={styles.ProfileImggg} source={images.IMG_HARRDY} />
                        <Image style={styles.ProfileImgg} source={images.IMG_HARRDY} />
                        <Image style={styles.ProfileImg} source={images.IMG_HARRDY} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Likes}>Liked by <Text style={{ fontWeight: '800' }}>dr.nik_lakhani_ </Text> and </Text>
                        <TouchableOpacity >
                        {/* onPress={() => navigation.navigate('LikeList')} */}
                            <Text style={styles.LikesCount}> {item.isLike ? '2,511' : '2,510'} others </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity> 
                        {/* onPress={() => navigation.navigate('InstaComments')} */}
                        <Text style={styles.CommentName}>Harrdy25__
                            <Text style={styles.CommentsMsg}>A million likes will never be enough if you  don't like yourself.</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.Comments}>view all 18 comments</Text>
                </TouchableOpacity>
                <Text style={styles.Comments}>1 day ago</Text>
            </View>
        </View>
    );

    const renderStory = ({ item, onPress, }) => (
        <View>
            <View style={styles.StoryImg}>
                <TouchableOpacity onPress={onPress} style={[styles.item]}>
                    <View style={{ borderColor: 'orange', borderWidth: normalize(3), borderRadius: normalize(60), }}>
                        <Image style={styles.StoryImage} source={item.image} />
                    </View>
                    <Text style={styles.StoryName}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderPost = ({ item }) => (
        <View style={styles.PostImg}>
            <TouchableOpacity onPress={() => setModalVisiblePlus(!PlusmodalVisible)} style={[styles.item], { flexDirection: 'row', marginTop: normalize(3) }}>
                <Text style={styles.PostName}>{item.title}</Text>
                <Image style={styles.PostImagePlus} source={item.image} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.white }}>
            <View style={{ backgroundColor: colors.black }}>

                <View style={{ flexDirection: 'row', marginBottom: normalize(10) }}>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} >
                    {/* onPress={() => navigation.navigate('InstagramProfile')} */}
                        <Image style={styles.InstaPNG} source={images.IMG_InstaText_Png} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => setModalVisiblePlus(true)}>
                            <Image style={styles.Plus} source={images.IMG_Pulss_png} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                        {/* onPress={() => navigation.navigate('InstaMessage')} */}
                            <Image style={styles.Plus} source={images.IMG_Chat_Png} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.headerContent}>
                                    <TouchableOpacity style={{ marginTop: normalize(5) }}>
                                        <Image style={styles.avatar} source={images.IMG_HARRDY} />
                                        <Image style={styles.PlusAdd} source={images.IMG_Pulss_Add_png} />
                                        <Text style={styles.YourStory}>Your story</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <FlatList
                                        data={StoryPost}
                                        renderItem={renderStory}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        horizontal={true}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10) }} />

                    <View style={{ alignSelf: 'center', }}>
                        <FlatList
                            data={Post}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>
            </View >

            <Modal
                animationIn="slideInLeft"
                transparent={true}
                visible={PlusmodalVisible}
                onRequestClose={() => {
                    setModalVisiblePlus(!PlusmodalVisible);
                }}>
                <View style={styles.container}>                  
                    <View>
                        <FlatList
                            data={PostPlus}
                            renderItem={renderPost}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    headerContent: {
        alignSelf: 'center',
        marginTop: normalize(5)

    },
    ProfileName: {
        fontSize: normalize(25),
        fontWeight: '800',
        marginLeft: normalize(10),
        color: colors.white,
        marginVertical: normalize(10)

    },
    ProfileImage: {
        width: normalize(40),
        height: normalize(40),
        margin: normalize(2),
        borderRadius: normalize(65),

    },
    ProfileTitle: {
        fontSize: normalize(16),
        fontWeight: '800',
        marginLeft: normalize(10),
        color: colors.white,
    },
    Location: {
        fontSize: normalize(14),
        fontWeight: '500',
        marginLeft: normalize(10),
        color: colors.white,
    },
    Elips: {
        height: normalize(20),
        width: normalize(20),
        tintColor: colors.white,
        marginRight: normalize(5),
    },
    HeartLike: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
    },
    HeartLikered: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.red,
    },
    Likes: {
        fontSize: normalize(14),
        fontWeight: '600',
        marginLeft: normalize(35),
        color: colors.white,
        marginTop: normalize(8),
    },
    LikesCount: {
        fontSize: normalize(14),
        fontWeight: '800',
        color: colors.white,
        marginTop: normalize(8),
    },
    CommentName: {
        fontSize: normalize(14),
        fontWeight: '800',
        marginLeft: normalize(8),
        color: colors.white,
        marginTop: normalize(8),
    },
    Comments: {
        fontSize: normalize(14),
        fontWeight: '600',
        marginLeft: normalize(10),
        color: colors.gray,
        marginTop: normalize(8)
    },
    CommentsMsg: {
        fontSize: normalize(14),
        fontWeight: '600',
        color: colors.white,
        marginTop: normalize(8),
    },
    InstaPNG: {
        height: normalize(40),
        width: normalize(40),
        tintColor: colors.white,
        marginLeft: normalize(20),
        flex: 0.5,
        alignSelf: 'center',
        marginTop: normalize(5)

    },
    Plus: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        marginLeft: normalize(5),
        marginRight: normalize(5),
        marginTop: normalize(10)
    },
    avatar: {
        width: normalize(60),
        height: normalize(60),
        borderRadius: normalize(100),
        alignSelf: 'center'
    },
    PlusAdd: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.blue,
        marginLeft: normalize(50),
        position: 'absolute',
        bottom: normalize(20),
        borderWidth: normalize(3),
        borderRadius: normalize(20),
        borderColor: colors.black,
    },
    Image: {
        width: normalize(400),
        height: normalize(300),
    },
    PostImage: {
        marginTop: normalize(1),
        justifyContent: 'space-between',
    },
    StoryImage: {
        width: normalize(60),
        height: normalize(60),
        margin: normalize(2),
        borderRadius: normalize(65),
        alignSelf: 'center'
        // borderWidth: normalize(2),
        // borderColor: colors.white,
    },
    PostImg: {
        justifyContent: 'space-between',
        padding: normalize(7)
    },
    StoryImg: {
        marginHorizontal: normalize(5),
        alignSelf: 'center',
        // backgroundColor: colors.appBlue,
        marginTop: normalize(5)
    },

    StoryName: {
        fontSize: normalize(16),
        color: colors.white,
        alignSelf: 'center',
        fontWeight: '600',
    },
    YourStory: {
        fontSize: normalize(16),
        color: colors.gray,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: normalize(5),
        marginLeft: normalize(5)
    },
    container: {
        height: normalize(170),
        width: normalize(120),
        marginTop: normalize(65),
        marginLeft: normalize(240),
        alignSelf: 'center',
        backgroundColor: '#333333',
        borderRadius: normalize(15),
    },
    PostImagePlus: {
        width: normalize(25),
        height: normalize(25),
        tintColor: colors.white,
    },
    PostName: {
        fontSize: normalize(16),
        color: colors.white,
        fontWeight: '700',
        flex: 1,

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

    ProfileImg: {
        width: normalize(30),
        height: normalize(30),
        borderRadius: normalize(65),
        borderWidth: normalize(3),
        position: 'absolute',
    },
    ProfileImgg: {
        width: normalize(30),
        height: normalize(30),
        borderRadius: normalize(65),
        left: normalize(15),
        borderWidth: normalize(3),
        position: 'absolute',

    },
    ProfileImggg: {
        width: normalize(30),
        height: normalize(30),
        borderRadius: normalize(65),
        left: normalize(30),
        borderWidth: normalize(3),
    },
    DoneButton: {
        borderRadius: normalize(5),
        backgroundColor: colors.appBlue,
        position: 'absolute',
        // bottom: normalize(120)
    },
    Done: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: 'bold',
        padding: normalize(10)
    },

});

export default InstaHomePage;
