import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity, Alert,} from 'react-native'
import { normalize } from '../utils'
import colors from '../theme/colors';
import { images } from '../assets/images';

const Data = [
    { id: 1, name: "Captopril", price: "365", expiry: "2029", quantity: '25', },
    { id: 2, name: "Dolo 650", price: "656", expiry: "2023", quantity: '33', },
    { id: 3, name: "Calpol", price: "560", expiry: "2019", quantity: '09', },
    { id: 4, name: "Dupixent", price: "520", expiry: "2024", quantity: '05', },
    { id: 5, name: "Humira", price: "550", expiry: "2022", quantity: '22', },
    { id: 6, name: "Advil", price: "290", expiry: "2018", quantity: '08', },
    { id: 7, name: "Genpril", price: "350", expiry: "2022", quantity: '20', },
    { id: 8, name: "Ecpirin", price: "250", expiry: "2018", quantity: '06', },
    { id: 9, name: "Halfprin", price: "580", expiry: "2025", quantity: '36', },
    { id: 10, name: "Nuprin", price: "450", expiry: "2017", quantity: '08', },
];

export default function MedicineData() {

    const [deleted, setDeleted] = useState('');

    const Price = Data.filter((item, index) => item.expiry >=2023);

    const Sum = Price.reduce((acc, item, index) => acc + parseInt(item.price), 0);

    const Qsum = Price.reduce((acc, item, index) => acc + parseInt(item.quantity), 0);

    const Expiry = Data.filter((item, index) => item.expiry < 2020);

    const getItem = (item) => {
        Alert.alert(
            "Are you sure you want to Delete this item",
            'Name : ' + item.name + '\n Price : ' + item.price + '\n Expiry: ' + item.expiry + '\n Quantity: ' + item.quantity,
            [{ text: 'No', },
            { text: 'Yes', onPress: () => DeleteData(deleted) }]
        );
    };
    const DeleteData = (index) => {
        Data.splice(index, 1);
        setDeleted(Data);
    };

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => getItem(item)}>
                    <Text style={styles.Index}>{index + 1})</Text>
                    <Text style={item.expiry < 2020 ? styles.MedicineExpire : styles.Medicine}>{item.name}</Text>
                    <Text style={[item.expiry < 2020 ? styles.MedicineExpire : styles.Medicine, { textAlign: 'center' }]}>{item.price}</Text>
                    <Text style={[item.expiry < 2020 ? styles.MedicineExpire : styles.Medicine, { textAlign: 'center' }]}>{item.expiry}</Text>
                    <Text style={[ item.quantity < 10 ? styles.MedicineExpire : styles.Medicine, { textAlign: 'center' }]}>{item.quantity}</Text>
                </TouchableOpacity>
                <View style={{ borderColor: '#515151', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: normalize(4) }} />
            </View>
        );
    };

    return (
        <SafeAreaView>
            <View>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_React_Png} />
                    <Text style={styles.TitleName}>Medicine Data</Text>
                </View>
                <View style={{ borderColor: '#515151', borderWidth: normalize(2), marginVertical: normalize(1) }} />
                <View style={{ flexDirection: 'row', marginVertical: normalize(8) }}>
                    <TouchableOpacity>
                        <Image style={styles.Icon} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>Medicine Data</Text>
                    <TouchableOpacity >
                        <Image style={styles.Icon} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderColor: '#515151', borderWidth: normalize(1), marginVertical: normalize(1) }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.IndexTitle}>No</Text>
                    <Text style={styles.MedicineTitle}>Name</Text>
                    <Text style={styles.MedicineTitle}>Price</Text>
                    <Text style={styles.MedicineTitle}>Expiry</Text>
                    <Text style={styles.MedicineTitle}>Quantity</Text>
                </View>
                <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(5) }} />
                <View>
                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View>
                    <Text style={styles.FilterData}> -: Filter Medicine :- </Text>
                    <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(5) }} />
                </View>
                <View>
                    <FlatList
                        data={Price}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginLeft: normalize(0) }}>
                    <Text style={[styles.Total, { flex: 1 }]}>Total</Text>
                    <Text style={[styles.Total, { flex: 3, }]}>{Sum}/-</Text>
                    <Text style={[styles.Total, { flex: 3, marginRight: normalize(30) }]}>{Qsum}</Text>
                </View>
                <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(5) }} />
                <View>
                    <FlatList
                    data={Expiry}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    Card: {
        margin: normalize(5),
        borderRadius: normalize(15),
        backgroundColor: colors.blackTransparent,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.0,
        elevation: 5,
        zIndex: 1,
        flexDirection: 'row',
    },
    TitleName: {
        fontSize: normalize(25),
        fontWeight: 'bold',
        color: colors.extraLight,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: normalize(45),
    },
    Logo: {
        height: normalize(50),
        width: normalize(50),
        alignSelf: 'center',
        borderRadius: normalize(50),
        margin: normalize(5),
    },
    Text: {
        fontSize: normalize(22),
        alignSelf: 'center',
        flex: 1,
        textAlign: 'center',
        fontWeight: '700',
        color: '#41A317'
    },
    Icon: {
        height: normalize(25),
        width: normalize(25),
        alignSelf: 'center',
    },
    TimeBox: {
        backgroundColor: 'green',
        alignSelf: 'center',
        borderRadius: normalize(80)
    },
    Time: {
        fontSize: normalize(20),
        fontWeight: '700',
        padding: normalize(10)
    },
    MedicineTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: normalize(18),
        fontWeight: '700',
        color: colors.appBlue,
    },
    IndexTitle: {
        flex: 0.5,
        textAlign: 'center',
        fontSize: normalize(18),
        fontWeight: '700',
        color: colors.appBlue,
    },
    Index: {
        flex: 0.5,
        textAlign: 'center',
        fontSize: normalize(16),
        fontWeight: '700',
        color: colors.black,
    },
    Medicine: {
        flex: 1,
        fontSize: normalize(16),
        fontWeight: '700',
        color: colors.black
    },
    MedicineExpire: {
        flex: 1,
        fontSize: normalize(16),
        fontWeight: '700',
        color: colors.red
    },
    FilterData: {
        fontSize: normalize(22),
        fontWeight: '800',
        alignSelf: 'center',
        color: colors.appBlue
    },
    Total: {
        fontSize: normalize(18),
        fontWeight: '700',
        color: colors.appBlue,
        textAlign:'right'
    },
});
