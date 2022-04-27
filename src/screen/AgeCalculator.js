import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { normalize } from '../utils';
import colors from '../theme/colors';
import { images } from '../assets/images';
import { Dropdown } from 'react-native-element-dropdown';


const Day = [
    { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' },
    { label: '6', value: '6' }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '10', value: '10' },
    { label: '11', value: '11' }, { label: '12', value: '12' }, { label: '13', value: '13' }, { label: '14', value: '14' }, { label: '15', value: '15' },
    { label: '16', value: '16' }, { label: '17', value: '17' }, { label: '18', value: '18' }, { label: '19', value: '19' }, { label: '20', value: '20' },
    { label: '21', value: '21' }, { label: '22', value: '22' }, { label: '23', value: '23' }, { label: '24', value: '24' }, { label: '25', value: '25' },
    { label: '26', value: '26' }, { label: '27', value: '27' }, { label: '28', value: '28' }, { label: '29', value: '29' }, { label: '30', value: '30' },
    { label: '31', value: '31' },
];

const Month = [
    { label: 'Jan', value: '1' }, { label: 'Feb', value: '2' }, { label: 'Mar', value: '3' }, { label: 'Apr', value: '4' }, { label: 'May', value: '5' },
    { label: 'Jun', value: '6' }, { label: 'Jul', value: '7' }, { label: 'Aug', value: '8' }, { label: 'Sep', value: '9' }, { label: 'Oct', value: '10' },
    { label: 'Nav', value: '11' }, { label: 'Dec', value: '12' },
];

function AgeCalculator() {

    // const [time, setTime] = useState(new Date());

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    const DateOfBirth = (day + month + year);
    let mdate = DateOfBirth.toString();
    let dobYear = parseInt(mdate.substring(0, 4), 10);
    let dobMonth = parseInt(mdate.substring(5, 7), 10);
    let dobDate = parseInt(mdate.substring(8, 10), 10);

    var today = new Date();

    var birthday = new Date(dobYear, dobMonth - 1, dobDate);

    var diffInMillisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(diffInMillisecond / 31536000000);
    var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
        alert("Happy Birthday!");
    }
    var month_age = Math.floor(day_age / 30);
    day_ageday_age = day_age % 30;

    var tMnt = (month_age + (year_age * 12));
    var tDays = (tMnt * 30) + day_age;
    console.log("aaa", tDays);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_React_Png} />
                    <Text style={styles.TitleName}>Age Calculator</Text>
                </View>
                <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />
                <View style={styles.BdayBox}>
                    <Text style={styles.BirthDate}>Date of Birth</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={styles.Date}>Date</Text>
                    <Text style={styles.Date}>Month</Text>
                    <Text style={styles.Date}>Year</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: normalize(10), justifyContent: 'space-between' }}>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={Day}
                        maxHeight={150}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Date' : '...'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setDay(item.label);
                            setIsFocus(false);
                        }}
                    />
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={Month}
                        maxHeight={150}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Month' : '...'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setMonth(item.label);
                            setIsFocus(false);
                        }}
                    />
                    <TextInput
                        style={styles.Input}
                        fontWeight={'600'}
                        onChangeText={(yy) => setYear(yy)}
                    />
                </View>
                <View style={{ borderColor: '#004b93', borderWidth: normalize(2), margin: normalize(5) }} />
                <View style={styles.BdayBox}>
                    <Text style={styles.BirthDate}>Age at the Date of</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={styles.Date}>Date</Text>
                    <Text style={styles.Date}>Month</Text>
                    <Text style={styles.Date}>Year</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: normalize(10), justifyContent: 'space-between' }}>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={Day}
                        maxHeight={150}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Date' : '...'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.label);
                            setIsFocus(false);
                        }}
                    />
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={Month}
                        maxHeight={150}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Month' : '...'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.label);
                            setIsFocus(false);
                        }}
                    />
                    <TextInput
                        style={styles.Input}
                        fontWeight={'600'}

                    />
                </View>
                <View style={{ borderColor: '#004b93', borderWidth: normalize(2), margin: normalize(5) }} />

                <TouchableOpacity style={styles.BdayBox} onPress={() => calculate_age()}>
                    <Text style={styles.BirthDate}>Calculate Age</Text>
                </TouchableOpacity>
                <Text>{ }</Text>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Card: {
        margin: normalize(5),
        borderRadius: normalize(15),
        backgroundColor: '#000000',
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
        flex: 1,
        marginRight: normalize(25)
    },
    Logo: {
        height: normalize(50),
        width: normalize(50),
    },
    BirthDate: {
        fontSize: normalize(20),
        fontWeight: '600',
        color: colors.extraLight,
        padding: normalize(8)
    },
    BdayBox: {
        margin: normalize(10),
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: colors.black,
        borderRadius: normalize(8)
    },
    Date: {
        fontSize: normalize(25),
        fontWeight: '600',
    },
    //dropdown

    dropdown: {
        width: normalize(110),
        height: normalize(40),
        borderColor: 'black',
        borderWidth: normalize(2),
        borderRadius: normalize(8),
        backgroundColor: colors.lineColor,
        paddingHorizontal: normalize(8),
        // flex: 1
    },
    placeholderStyle: {
        color: '#808080',
        fontSize: normalize(16),
    },
    selectedTextStyle: {
        fontSize: normalize(16),
        fontWeight: '600',
        color: colors.black,
        alignSelf: 'center',
        textAlign: 'center'
    },
    iconStyle: {
        width: normalize(25),
        height: normalize(25),
        tintColor: colors.black,
        margin: normalize(4),
    },

    Input: {
        width: normalize(110),
        borderWidth: normalize(2),
        // padding: normalize(8),
        height: normalize(40),
        fontSize: normalize(18),
        borderRadius: normalize(8),
        backgroundColor: colors.lineColor,
        textAlign: 'center',
        // flex: 1
    },
});

export default AgeCalculator;