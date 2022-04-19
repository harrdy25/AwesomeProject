import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Modal, FlatList } from "react-native";
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images/index';
import { ScrollView,} from "react-native-gesture-handler";

const Follower = [
    { id: '1', image: images.IMG_HARRDY, title: 'dr.nik_lakhani', name: 'Dr.Nikita Lakhani', icon: images.IMG_CROSSMARK, },
    { id: '2', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', icon: images.IMG_CROSSMARK, },
    { id: '3', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', icon: images.IMG_CROSSMARK, },
    { id: '4', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', icon: images.IMG_CROSSMARK, },
    { id: '5', image: images.IMG_HARRDY, title: 'dhruvati_joshi', name: 'Dharuvati Joshi🌟 ', icon: images.IMG_CROSSMARK, },
    { id: '6', image: images.IMG_HARRDY, title: 'krunal_3173', name: 'K_K_TRIVEDI 🕉️📿', icon: images.IMG_CROSSMARK, },
    { id: '7', image: images.IMG_HARRDY, title: 'ajay_kukdiya', name: 'Ajay Kukadiya', icon: images.IMG_CROSSMARK, },
    { id: '8', image: images.IMG_HARRDY, title: 'arvind_kukadiya', name: 'Arvind Kukadiya', icon: images.IMG_CROSSMARK, },
    { id: '9', image: images.IMG_HARRDY, title: 'sneha_._jsani', name: 'sneha', icon: images.IMG_CROSSMARK, },
    { id: '10', image: images.IMG_HARRDY, title: 'doc_sanjay_cardio', name: '', icon: images.IMG_CROSSMARK, },
    { id: '11', image: images.IMG_HARRDY, title: 'amibalar_11', name: 'Ami balar_11', icon: images.IMG_CROSSMARK, },
    { id: '12', image: images.IMG_HARRDY, title: 'Womans_ability_25', name: 'मासूमियत 🕊', icon: images.IMG_CROSSMARK, },
    { id: '13', image: images.IMG_HARRDY, title: 'preksha_1428', name: 'preksha_patel🎀', icon: images.IMG_CROSSMARK, },
    { id: '14', image: images.IMG_HARRDY, title: 'the_vasani_2405', name: 'V. B. J.🌟 790', icon: images.IMG_CROSSMARK, },
    { id: '15', image: images.IMG_HARRDY, title: 'krunal_3173', name: 'K_K_TRIVEDI 🕉️📿', icon: images.IMG_CROSSMARK, },
];

function DiscoverPeople({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    // const color = item.id === selectedId ? '#1e90ff' : 'black';

    
    const renderList = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: normalize(10) }}>
            <TouchableOpacity style={[styles.item], { flexDirection: 'row', flex: 1 }}>
                <Image style={styles.ProfileImage} source={item.image} />
                <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
                    <Text style={styles.UserName}>{item.title}</Text>
                    <Text style={styles.Name}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DoneButton}>
                <Text style={styles.Done}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.ClickDone} source={item.icon} />
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
                    <Text style={styles.ProfileName}>Discover People</Text>
                </View>
                <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), marginTop: normalize(10), }} />

                <ScrollView>
                    <View style={{ flexDirection: 'row', marginVertical: normalize(5) }}>
                        <View style={{ borderWidth: normalize(2), borderColor: colors.appBlue, borderRadius: normalize(60), marginLeft: normalize(10), }}>
                            <Image style={styles.Facebook} source={images.IMG_FACEBOOK} />
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center' }}>
                            <Text style={styles.UserName}>Connect to facebook</Text>
                            <Text style={styles.Name}>Follow your friends</Text>
                        </View>
                        <TouchableOpacity style={styles.DoneButton}>
                            <Text style={styles.Done}>Connect</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomColor: '#515151', borderBottomWidth: normalize(1), }} />

                    <View style={{ marginTop: normalize(15) }}>
                        <FlatList
                            data={Follower}
                            renderItem={renderList}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    {/* <View style={{ flexDirection: 'row', marginTop: normalize(15) }}>
                    <Text style={styles.People}>Suggested</Text>
                    <TouchableOpacity>
                        <Text style={styles.ClearAll}>Select all</Text>
                    </TouchableOpacity>
                </View> */}
                </ScrollView>
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
        flex: 2.2,
    },
    Facebook: {
        width: normalize(30),
        height: normalize(30),
        borderRadius: normalize(65),
        alignSelf: 'center',
        margin: normalize(10),
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
        marginLeft: normalize(10),
        borderRadius: normalize(65),
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
});

export default DiscoverPeople;