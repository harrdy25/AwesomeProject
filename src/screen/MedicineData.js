import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native'
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { images } from "../assets/images";
import colors from "../theme/colors";
import { normalize } from "../utils";

const Data = [
    { id: 1, name: "Paracetamol", price: "365", expiry: "2029", quantity: '25', },
    { id: 2, name: "Dolo 650", price: "656", expiry: "2023", quantity: '33', },
    { id: 3, name: "Calpol", price: "560", expiry: "2025", quantity: '20', },
    { id: 4, name: "Dupixent", price: "520", expiry: "2024", quantity: '05', },
    { id: 5, name: "Humira", price: "550", expiry: "2022", quantity: '22', },
    { id: 6, name: "Advil", price: "280", expiry: "2027", quantity: '36', },
    { id: 7, name: "Genpril", price: "350", expiry: "2022", quantity: '09', },
    { id: 8, name: "Ecpirin", price: "250", expiry: "2025", quantity: '20', },
    { id: 9, name: "Halfprin", price: "580", expiry: "2024", quantity: '36', },
    { id: 10, name: "Nuprin", price: "450", expiry: "2026", quantity: '08', },
];

function MedicineData({ navigation }) {

    const [click, setClick] = useState(0);
    const [deleted, setDeleted] = useState('')

    const Price = Data.filter((item, index) => item.expiry >= 2023 && item.price > 500);

    const Sum = Price.reduce((acc, item, index) => acc + parseInt(item.price), 0);

    const Qsum = Price.reduce((acc, item, index) => acc + parseInt(item.quantity), 0);

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
                    <Text style={[styles.Medicine]}>{item.name}</Text>
                    <Text style={[styles.Medicine, { textAlign: 'center' }]}>{item.price}</Text>
                    <Text style={[styles.Medicine, { textAlign: 'center' }]}>{item.expiry}</Text>
                    <Text style={[styles.Medicine, { textAlign: 'center' }]}>{item.quantity}</Text>
                </TouchableOpacity>
                <View style={{ borderColor: '#515151', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: normalize(4) }} />
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Cointainer}>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_Medical} />
                    <Text style={styles.TitleName}>Brahmani Medical Store - Surat</Text>
                </View>
                <View style={{ borderColor: '#515151', borderWidth: normalize(2), marginVertical: normalize(1) }} />
                <View style={{ flexDirection: 'row', marginVertical: normalize(8) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.Icon} source={images.IMG_LEFT_PNG} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>Medicine Data</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
                        <Image style={styles.Icon} source={images.IMG_RightArrow_Png} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(1) }} />

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.IndexTitle}>No</Text>
                    <Text style={styles.MedicineTitle}>Name</Text>
                    <Text style={styles.MedicineTitle}>Price</Text>
                    <Text style={styles.MedicineTitle}>Expiry</Text>
                    <Text style={styles.MedicineTitle}>Quantity</Text>
                </View>
                <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(5) }} />
                <ScrollView>

                    <View>
                        <Text style={styles.FilterData}> -: All Medicine Data :- </Text>
                        <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(5) }} />
                    </View>
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
                    <TouchableOpacity onPress={() => {
                        setClick(1);
                    }}>
                        <Text style={styles.FilterData}>-: Medicine :-</Text>
                    </TouchableOpacity>
                    <View style={{ borderColor: '#515151', borderBottomWidth: normalize(2), marginVertical: normalize(5) }} />
                    {click == 1 &&
                        <View>
                            {Data.map((item, index) => {
                                let { id, name, price, quantity, expiry } = item;
                                return (
                                    <View style={{ flexDirection: 'row', marginLeft: normalize(10) }}>
                                        <Text style={{ fontSize: normalize(14), flex: 0.4 }}>{index})</Text>
                                        <Text style={{ flex: 1.5, fontSize: normalize(14), fontWeight: '600', color: 'green' }}>{name}</Text>
                                        <Text style={styles.Data}>{price}</Text>
                                        <Text style={styles.Data}>{expiry}</Text>
                                        <Text style={styles.Data}>{quantity}</Text>
                                    </View>
                                )
                            })}
                            <View style={{ borderColor: colors.appBlue, borderBottomWidth: normalize(2), marginVertical: normalize(5) }} />
                        </View>
                    }
                </ScrollView>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    Cointainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    Card: {
        margin: normalize(5),
        borderRadius: normalize(15),
        backgroundColor: colors.extraLight,
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
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.appBlue,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: normalize(5)
    },
    Logo: {
        height: normalize(50),
        width: normalize(50),
        alignSelf: 'center',
        borderRadius: normalize(50),
        margin: normalize(5)
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
    SearchBox: {
        alignSelf: 'center',
        color: colors.black,
        margin: normalize(10),
        fontWeight: '600',
        fontSize: normalize(15)
    },
    CardSearch: {
        margin: normalize(5),
        borderRadius: normalize(50),
        backgroundColor: colors.lineColor,
        flexDirection: 'row',
    },
    SearchIcon: {
        height: normalize(20),
        width: normalize(20),
        tintColor: colors.black,
        alignSelf: 'center',
        marginLeft: normalize(10)
    },
    Medicine: {
        flex: 1,
        // textAlign: 'center',
        fontSize: normalize(14),
        fontWeight: '600',
    },
    MedicineTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: normalize(18),
        fontWeight: '600',
        color: 'green'
    },
    IndexTitle: {
        flex: 0.5,
        textAlign: 'center',
        fontSize: normalize(18),
        fontWeight: '600',
        color: 'green'
    },
    Index: {
        flex: 0.5,
        textAlign: 'center',
        fontSize: normalize(14),
        fontWeight: '600',
    },
    FilterData: {
        fontSize: normalize(22),
        fontWeight: '600',
        alignSelf: 'center',
        color: colors.appBlue
    },
    Total: {
        fontSize: normalize(18),
        fontWeight: '700',
        color: colors.appBlue,
        textAlign: 'right'
    },
    Data: {
        flex: 1,
        textAlign: 'center',
        fontSize: normalize(14),
        fontWeight: '600'
    },    
});
export default MedicineData;
