import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Modal, FlatList } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView, } from "react-native-gesture-handler";

const DATA = [
    { id: '1', title: 'Post photos or videos to see new insights.', details: 'Create Post.', icon: images.IMG_RightArrow_Png, },
    { id: '2', title: 'Share reels to see new insights.', details: 'Create Reel.', icon: images.IMG_RightArrow_Png, },
    { id: '3', title: 'Add videos to see new insights.', details: 'Create Video', icon: images.IMG_RightArrow_Png, },
    { id: '4', title: 'Share a live video to see new insights.', details: 'Go Live', icon: images.IMG_RightArrow_Png, },
    { id: '5', title: 'Boost a post or story to see new insights.', details: 'Create Promotion', icon: images.IMG_RightArrow_Png, },

];


function Insights({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const renderList = ({ item }) => {
        return (
            <Info item={item} />
        );
    };
    const Info = ({ item, }) => (
        <View style={{ marginVertical: normalize(15) }}>
            <TouchableOpacity style={{ flexDirection: 'row', }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.Info}>{item.title}</Text>
                    <Text style={styles.Detail}>{item.details}</Text>
                </View>
                <Image style={styles.InfoPic} source={item.icon} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.SettingCard}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('InstagramProfile')}>
                        <Image style={styles.back} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <Text style={[styles.Insights]}>Insights</Text>
                    <TouchableOpacity>
                        <Image style={styles.About} source={images.IMG_About_Png} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: normalize(10) }}>
                    <TouchableOpacity style={styles.BorderDays}>
                        <Text style={styles.SevenDays}>Last 7 Days</Text>
                        <Image style={styles.DownArrow} source={images.IMG_Down_Arroww} />
                    </TouchableOpacity>
                    <View style={{ flex: 2, alignItems: 'flex-end' }}>
                        <Text style={styles.FebDate}>Feb 7 - Feb 13</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginVertical: normalize(10) }} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.InsightOver}>Insights Overview</Text>
                    <Text style={styles.ActivityText}>You reached <Text style={{ color: '#30CB49' }}>+41.6% </Text>more accounts compared to Jan 31 - Feb 6</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(30), }}>
                        <Text style={styles.AccountReach}>Accounts reached</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.Digit]}>353</Text>
                            <Text style={styles.Digitt}>+39.5%</Text>
                        </View>
                        <Image style={styles.RightArrow} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(30), }}>
                        <Text style={styles.AccountReach}>Accounts engaged</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.Digit]}>106</Text>
                            <Text style={styles.Digitt}>+2,020%</Text>
                        </View>
                        <Image style={styles.RightArrow} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: normalize(30), }}>
                        <Text style={styles.AccountReach}>Total followers</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.Digit]}>883</Text>
                            <Text style={styles.Digitt}>-0.3%</Text>
                        </View>
                        <Image style={styles.RightArrow} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity >

                    <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(5), marginVertical: normalize(15) }} />
                    <Text style={styles.Shared}>Content You Shared</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: normalize(15) }}>
                        <Text style={styles.AccountReach}>1 Post</Text>
                        <Image style={styles.RightArrow} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.PostPic} source={images.IMG_HARRDY} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: normalize(15) }}>
                        <Text style={styles.AccountReach}>1 Story</Text>
                        <Image style={styles.RightArrow} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.StoryPic} source={images.IMG_HARRDY} />
                    </TouchableOpacity>
                    <View style={{ marginTop: normalize(20) }}>
                        <FlatList
                            data={DATA}
                            renderItem={renderList}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ScrollView >
            </View >
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
        borderBottomColor: '#515151',
        borderBottomWidth: normalize(0.5)
    },
    back: {
        height: normalize(15),
        tintColor: colors.white,
        marginLeft: normalize(8),
        marginBottom: normalize(10)
    },
    About: {
        height: normalize(25),
        width: normalize(25),
        tintColor: colors.white,
        marginLeft: normalize(10),
        marginBottom: normalize(10),
        marginRight: normalize(10)
    },
    Insights: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        flex: 1.2,
        marginBottom: normalize(10),
        color: colors.white
    },
    InsightOver: {
        fontSize: normalize(25),
        fontWeight: 'bold',
        marginVertical: normalize(10),
        color: colors.white,
        textAlign: 'center'
    },
    BorderDays: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: normalize(1),
        borderColor: colors.gray,
        borderRadius: normalize(5),
        marginLeft: normalize(8)
    },
    SevenDays: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: 'bold',
        padding: normalize(5),
        alignSelf: 'center'
    },
    AccountReach: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: normalize(8),
    },
    Digit: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    Digitt: {
        fontSize: normalize(14),
        color: '#30CB49',
        fontWeight: 'bold',
    },
    FebDate: {
        fontSize: normalize(15),
        color: colors.white,
        fontWeight: 'bold',
        marginRight: normalize(5),
        padding: normalize(5)
    },
    InfoPic: {
        width: normalize(20),
        height: normalize(20),
        tintColor: colors.white,
        marginRight: normalize(8)
    },
    Info: {
        fontSize: normalize(15),
        color: colors.gray,
        fontWeight: 'bold',
        marginLeft: normalize(8),
        flex: 1
    },
    DownArrow: {
        width: normalize(20),
        height: normalize(20),
        tintColor: colors.white,
        alignSelf: 'center',
        // marginLeft: normalize(10),
        // marginRight: normalize(5)
    },
    RightArrow: {
        width: normalize(20),
        height: normalize(20),
        tintColor: colors.white,
        alignSelf: 'center',
        marginLeft: normalize(10),
        marginRight: normalize(5)
    },
    Detail: {
        fontSize: normalize(15),
        color: colors.appBlue,
        fontWeight: 'bold',
        marginLeft: normalize(8),
        marginTop: normalize(10)
    },
    ActivityText: {
        fontSize: normalize(14),
        color: '#999999',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: normalize(20)
    },
    Shared: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: colors.white,
        marginLeft: normalize(8),
    },
    PostPic: {
        height: normalize(75),
        width: normalize(75),
        marginLeft: normalize(10),
        borderRadius: normalize(5)
    },
    StoryPic: {
        width: normalize(75),
        marginLeft: normalize(10),
        borderRadius: normalize(5),
        borderWidth: normalize(1),
        borderColor: colors.gray,
    }
});

export default Insights;