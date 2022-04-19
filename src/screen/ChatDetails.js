import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Switch, RefreshControl, Modal, FlatList } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView, } from "react-native-gesture-handler";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const Photos = [
    { id: 1, image: images.IMG_HVK1, },
    { id: 2, image: images.IMG_HVK2, },
    { id: 3, image: images.IMG_HVK3, },
    { id: 4, image: images.IMG_HVK4, },
    { id: 5, image: images.IMG_HVK5, },
    { id: 6, image: images.IMG_HVK6, },
    { id: 7, image: images.IMG_HVK7, },
    { id: 8, image: images.IMG_HVK8, },
    { id: 9, image: images.IMG_HVK9, },
    { id: 10, image: images.IMG_HVK10, },
    { id: 11, image: images.IMG_HVK1, },
    { id: 12, image: images.IMG_HVK2, },
];
const ThemeList = [
    { id: 1, image: images.IMG_HARRDY, titile: 'Sky', icon: images.IMG_Round_Png },
    { id: 2, image: images.IMG_HARRDY, titile: 'Chill', icon: images.IMG_Round_Png },
    { id: 3, image: images.IMG_HARRDY, titile: 'Dune', icon: images.IMG_Round_Png },
    { id: 4, image: images.IMG_HARRDY, titile: 'Care', icon: images.IMG_Round_Png },
    { id: 5, image: images.IMG_HARRDY, titile: 'Birthday', icon: images.IMG_Round_Png },
];


function ChatDetails({ navigation }) {
    const [selectedId, setselectedId] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledM, setIsEnabledM] = useState(false);
    const [isEnabledN, setIsEnabledN] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [thememodalvisible, setThemeModalVisible] = useState(false);
    const [Restrictmodalvisible, setRestrictModalVisible] = useState(false);
    const [Reportmodalvisible, setReportModalVisible] = useState(false);
    const [Blockmodalvisible, setBlockModalVisible] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchM = () => setIsEnabledM(previousState => !previousState);
    const toggleSwitchN = () => setIsEnabledN(previousState => !previousState);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const renderPhotos = ({ item }) => (
        <View style={styles.PostImage}>
            <TouchableOpacity>
                <Image style={styles.Image} source={item.image} />
            </TouchableOpacity>
        </View>
    );

    const renderPic = ({ item }) => (
        <View style={styles.PostImage}>
            <TouchableOpacity>
                <Image style={styles.PostPic} source={item.image} />
            </TouchableOpacity>
        </View>
    );

    const renderTheme = ({ item }) => (
        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: normalize(10) }}>
            <Image style={styles.ThemeImage} source={item.image} />
            <Text style={styles.ThemeText}>{item.titile}</Text>
            <Image style={styles.ThemeIcon} source={item.icon} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.SettingCard}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('InstaChat')}>
                        <Image style={styles.back} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <Text style={[styles.Details]}>Details</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor={'white'}
                        />
                    }>
                    <View style={{ flexDirection: 'row', marginTop: normalize(10) }}>
                        <Text style={styles.ChatSetting}>Chat settings</Text>
                    </View>
                    <View style={{ marginHorizontal: normalize(8) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Theme}>Theme</Text>
                            <TouchableOpacity style={{
                                borderColor: colors.appBlue,
                                borderWidth: normalize(14),
                                borderRadius: normalize(60),
                                width: normalize(20),
                                alignSelf: 'center'
                            }} onPress={() => setThemeModalVisible(!thememodalvisible)} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.Vanish}>Vanish mode</Text>
                                <Text style={styles.VanishText}>Seen messages will disappear when you close the chat</Text>
                            </View>
                            <Switch
                                trackColor={{ false: "#FFFFFF", true: "#1FA1FF" }}
                                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                alignSelf='center'
                            />
                        </View>
                    </View>

                    <View style={{ marginHorizontal: normalize(8) }}>
                        <Text style={styles.MoreAction}>Notifications</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.MuteMessage}>Mute messages</Text>
                            <Switch
                                trackColor={{ false: "#FFFFFF", true: "#1FA1FF" }}
                                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchM}
                                value={isEnabledM}
                                alignSelf='center'
                            />
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.Vanish}>Mute call notifications</Text>
                            <Switch
                                trackColor={{ false: "#FFFFFF", true: "#1FA1FF" }}
                                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchN}
                                value={isEnabledN}
                                alignSelf='center'
                            />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: normalize(8) }}>
                        <Text style={styles.MoreAction}>More action</Text>
                        <Text style={styles.Restrict}>Search in conversation</Text>
                        <Text style={styles.Restrict}>Somthing isn't working</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: normalize(5), marginHorizontal: normalize(8) }}>
                        <Text style={styles.Move}>{expanded ? "Move to General" : "Move to Primary"}</Text>
                        <TouchableOpacity style={styles.MoveButton} onPress={() =>
                            setExpanded(!expanded)
                        }>
                            <Text style={styles.Moving}>Move</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.DetailsText}>dr.kinjal_rana won't know that they've been moved.You can move them back to {expanded ? "Primary" : "General"} at any time.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: normalize(8) }}>
                        <Text style={styles.Shared}>Shared</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.SeeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <FlatList
                            data={Photos}
                            renderItem={renderPic}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <Text style={styles.Members}>Members</Text>
                    <View style={{ flexDirection: 'row', marginVertical: normalize(5), marginHorizontal: normalize(8) }}>
                        <Image style={styles.ProfileImages} source={images.IMG_HVK2} />
                        <View style={{ flex: 1, alignSelf: 'center' }}>
                            <Text style={styles.ProfileName}>Dr Kinjal</Text>
                            <Text style={styles.UserName}>dr_keenjal</Text>
                        </View>

                        <TouchableOpacity style={!selectedId ? styles.FollowButton : styles.FollowingButton} onPress={() => setselectedId(!selectedId)}>
                            <Text style={styles.Follow}>{!selectedId ? "Follow" : "Following"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginVertical: normalize(8) }} />
                    <View style={{ marginHorizontal: normalize(8) }}>
                        <TouchableOpacity onPress={() => setRestrictModalVisible(!Restrictmodalvisible)}>
                            <Text style={styles.Restrict}>Restrict</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.Restrict}>Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.BLock}>Block</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView >
            </View >
            <Modal
                animationIn="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <SafeAreaView>
                    <View style={styles.ModalView}>
                        <View style={styles.ModalCard}>
                            <View style={{ flexDirection: 'row', marginVertical: normalize(5) }}>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => setModalVisible(!modalVisible)}>
                                    <Image style={styles.Back} source={images.IMG_LEFT_PNG} />
                                </TouchableOpacity>
                                <Text style={styles.AllMedia}>All Media</Text>
                            </View>
                            <View style={{ borderColor: '#515151', borderWidth: normalize(1) }} />
                            <FlatList
                                data={Photos}
                                renderItem={renderPhotos}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                numColumns={3}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={thememodalvisible}
                onRequestClose={() => {
                    setThemeModalVisible(!thememodalvisible)
                }}>
                <SafeAreaView>
                    <View style={styles.ModalView}>
                        <View style={styles.ModalCardTheme}>
                            <View style={{ flexDirection: 'row', marginVertical: normalize(5) }}>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => setThemeModalVisible(!thememodalvisible)}>
                                    <Image style={styles.Back} source={images.IMG_LEFT_PNG} />
                                </TouchableOpacity>
                                <Text style={styles.AllMedia}>Chat theme</Text>
                            </View>
                            <View style={{ borderColor: '#808080', borderWidth: normalize(1) }} />
                            <ScrollView>
                                <Text style={styles.ModalTheme}>Theme</Text>
                                <View>
                                    <FlatList
                                        data={ThemeList}
                                        renderItem={renderTheme}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                                <View style={{ borderColor: '#808080', borderWidth: normalize(1) }} />
                                <Text style={styles.ModalTheme}>Colors & gradients</Text>
                                <View>
                                    <FlatList
                                        data={ThemeList}
                                        renderItem={renderTheme}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>

            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={Restrictmodalvisible}
                onRequestClose={() => {
                    setRestrictModalVisible(!Restrictmodalvisible)
                }}>

                <View style={styles.ResModalView}>
                    <View style={styles.ResModalCardTheme}>
                        <TouchableOpacity style={styles.Border} onPress={() => setRestrictModalVisible(!Restrictmodalvisible)} />
                        <View style={{ alignSelf: 'center', marginTop: normalize(10) }}>
                            <Image style={styles.RestrictImages} source={images.IMG_HVK5} />
                            <Text style={styles.TextRuchi}>Are you having a problem with pro._ruchi?</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image style={styles.Icon} source={images.IMG_Saved_Png} />
                            <Text style={styles.Textdetails}>Limit unwanted interactions without having to block or unfollow someone you know.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image style={styles.Icon} source={images.IMG_Chat_Png} />
                            <Text style={styles.Textdetails}>You'll control if others can see thair new comments on your posts or thair replies to stickers in your stories.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
                            <Image style={styles.Icon} source={images.IMG_SEND_PNG} />
                            <Text style={styles.Textdetails}>Their chat will be moved to your message requests, so they won't see when you have read it.</Text>
                        </View>
                        <Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: colors.appBlue, textAlign: 'center', marginVertical: normalize(30) }}>Restrict Account</Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView >
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
        borderBottomWidth: normalize(0.5),
        marginLeft: normalize(8)
    },
    back: {
        height: normalize(15),
        tintColor: colors.white,
        marginBottom: normalize(10)
    },
    Details: {
        fontSize: normalize(20),
        fontWeight: '800',
        flex: 1.4,
        marginBottom: normalize(10),
        color: colors.white,
    },
    ChatSetting: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: colors.white,
        marginLeft: normalize(8)
    },
    Theme: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '400',
        marginVertical: normalize(14),
        flex: 1
    },
    Vanish: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '400',
        flex: 1
    },
    VanishText: {
        fontSize: normalize(12),
        fontWeight: '600',
        color: '#a8a8a8',

    },
    MuteMessage: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '400',
        marginVertical: normalize(14),
        flex: 1
    },
    MoreAction: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: 'bold',
        marginVertical: normalize(14),
    },
    Moving: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: colors.white,
        padding: normalize(4),
        width: normalize(100),
        textAlign: 'center'
    },
    Move: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: colors.white,
        flex: 1,
        alignSelf: 'center'
    },
    MoveButton: {
        borderColor: '#a8a8a8',
        borderRadius: normalize(5),
        borderWidth: normalize(1),
        alignSelf: 'center'
    },
    DetailsText: {
        fontSize: normalize(12),
        fontWeight: '600',
        marginVertical: normalize(15),
        color: '#a8a8a8',
        marginHorizontal: normalize(8)

    },
    Shared: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.white,
        flex: 1,
    },
    SeeAll: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: colors.appBlue
    },
    Members: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.white,
        marginVertical: normalize(12),
        marginLeft: normalize(8)
    },
    PostPic: {
        height: normalize(75),
        width: normalize(75),
        borderRadius: normalize(5),
        marginLeft: normalize(8)
    },
    ProfileImages: {
        height: normalize(50),
        width: normalize(50),
        borderRadius: normalize(60),
    },
    ProfileName: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        color: colors.white,
        marginLeft: normalize(10),
    },
    UserName: {
        fontSize: normalize(14),
        color: '#a8a8a8',
        fontWeight: '600',
        marginLeft: normalize(10),
    },
    Follow: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: colors.white,
        padding: normalize(4),
        alignSelf: 'center',
    },

    FollowingButton: {
        backgroundColor: colors.black,
        borderRadius: normalize(5),
        alignSelf: 'center',
        borderColor: colors.gray,
        borderWidth: normalize(1),
        width: normalize(100)
    },
    FollowButton: {
        backgroundColor: colors.appBlue,
        borderRadius: normalize(5),
        alignSelf: 'center',
        width: normalize(100)
    },
    Restrict: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '400',
        marginVertical: normalize(14),
    },
    BLock: {
        fontSize: normalize(18),
        color: colors.red,
        fontWeight: '500',
        marginVertical: normalize(14),
    },
    ModalView: {
        backgroundColor: colors.black,
        flex: 1,
        borderTopLeftRadius: normalize(20),
        borderTopRightRadius: normalize(20)
    },
    ModalCard: {
        backgroundColor: '#000000',
        height: normalize(1000),
    },
    Image: {
        width: normalize(125),
        height: normalize(125),
        margin: normalize(1)
    },
    PostImage: {
        justifyContent: 'space-between',
    },
    Back: {
        tintColor: colors.white,
        height: normalize(35),
        width: normalize(35),
    },
    AllMedia: {
        fontSize: normalize(20),
        fontWeight: '800',
        color: colors.white,
        alignSelf: 'center',
        flex: 1.6
    },
    ModalCardTheme: {
        backgroundColor: '#303030',
        height: normalize(1000),
        borderTopLeftRadius: normalize(20),
        borderTopRightRadius: normalize(20)
    },
    ModalTheme: {
        fontSize: normalize(18),
        color: colors.white,
        fontWeight: '800',
        marginVertical: normalize(15),
        marginLeft: normalize(10)
    },
    ThemeImage: {
        height: normalize(35),
        width: normalize(35),
        borderRadius: normalize(30),
        marginLeft: normalize(10),
        alignSelf: 'center'
    },
    ThemeText: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.white,
        marginLeft: normalize(15),
        alignSelf: 'center',
        flex: 1
    },
    ThemeIcon: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.gray,
        marginRight: normalize(10)
    },
    ResModalView: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        marginTop: normalize(20),
        justifyContent: 'flex-end'
    },
    ResModalCardTheme: {
        backgroundColor: '#303030',
        borderTopLeftRadius: normalize(20),
        borderTopRightRadius: normalize(20)
    },
    Border: {
        borderColor: '#555555',
        borderWidth: normalize(3),
        marginVertical: normalize(15),
        alignSelf: 'center',
        width: normalize(50),
        borderRadius: normalize(10)
    },
    RestrictImages: {
        height: normalize(80),
        width: normalize(80),
        borderRadius: normalize(60),
        alignSelf: 'center',
        marginBottom: normalize(20)
    },
    TextRuchi: {
        fontSize: normalize(20),
        color: colors.white,
        fontWeight: '800',
        textAlign: 'center',
        marginHorizontal: normalize(10),
        marginBottom: normalize(20)
    },
    Icon: {
        height: normalize(30),
        width: normalize(30),
        tintColor: colors.white,
        marginLeft: normalize(20),
        alignSelf: 'center'
    },
    Textdetails: {
        fontSize: normalize(14),
        color: '#a8a8a8',
        marginHorizontal: normalize(20),
        flex: 1
    },

});

export default ChatDetails;