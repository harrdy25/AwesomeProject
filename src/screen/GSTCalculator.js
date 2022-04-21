import { View, Text, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { images } from '../assets/images';
import { normalize } from '../utils';
import colors from '../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function GSTCalculator() {

    const [amount, setAmount] = useState('');
    const [gst, setGst] = useState('');
    const [gstAmount, setGstAmount] = useState('');

    const handleAmount = (text) => {
        setAmount(text)
    }
    const handleGst = (text) => {
        setGst(text)
    }

    const calculate = (amount, gst) => {
        let count = ((amount * gst) / 100)
        count = count.toFixed(2);
        setGstAmount(count);
    }
    const GrossAmount = (parseInt(amount) + parseFloat(gstAmount)).toFixed(2);

    const GST = (gst / 2).toFixed(2)

    const GSTAmount = (gstAmount / 2).toFixed(2);

    const RemoveGST = () => {
        setGst('')
        setGstAmount('');
        setAmount('')
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
            <View>
                <View style={styles.Card}>
                    <Image style={styles.Logo} source={images.IMG_React_Png} />
                    <Text style={styles.TitleName}>GST Calculator</Text>
                </View>
                <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />
                <View style={{ flexDirection: 'row', margin: normalize(10) }}>
                    <Text style={styles.Amount}>Initial Amount(₹)</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder='Enter your amount...'
                        onChangeText={(rupees) => {
                            handleAmount(rupees);
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', margin: normalize(10) }}>
                    <Text style={styles.GSTRate}>Rate of GST(%)</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder='Enter gst rate...'
                        onChangeText={(rate) => {
                            handleGst(rate)
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.CalculateBox} onPress={() => calculate(amount, gst)}>
                    <Text style={styles.CalculateGst}>Calculate GST</Text>
                </TouchableOpacity>

                <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />

                <View style={{ flexDirection: 'row', margin: normalize(10), }}>
                    <Text style={styles.Amount}>Net Amount(₹)</Text>
                    <View style={styles.OutputBox}>
                        <Text style={styles.Output}>{amount}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: normalize(10), }}>
                    <Text style={styles.GSTRate}>GST Amount(₹)</Text>
                    <View style={styles.OutputBox}>
                        <Text style={styles.Output}>{gstAmount}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: normalize(10) }}>
                    <Text style={styles.GSTRate}>Total Amount(₹)</Text>
                    <View style={styles.OutputBox}>
                        <Text style={styles.Output}>{GrossAmount}</Text>
                    </View>
                </View>
                <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />
                <View style={{ flexDirection: 'row', margin: normalize(10), }}>
                    <Text style={styles.Amount}>CGST</Text>
                    <Text style={styles.Amount}>{GST}%</Text>
                    <View style={styles.OutputBox}>
                        <Text style={styles.Output}>{GSTAmount}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: normalize(10), }}>
                    <Text style={styles.GSTRate}>SGST</Text>
                    <Text style={styles.Amount}>{GST}%</Text>
                    <View style={styles.OutputBox}>
                        <Text style={styles.Output}>{GSTAmount}</Text>
                    </View>
                </View>
                <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />
                <Text style={styles.ThankYou}>-: Thank You :-</Text>
                <TouchableOpacity style={styles.CalculateBox} onPress={() => RemoveGST()}>
                    <Text style={styles.CalculateGst}>Remove GST</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

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
    Amount: {
        fontSize: normalize(20),
        fontWeight: '600',
        alignSelf: 'center',
        flex: 1
    },
    GSTRate: {
        fontSize: normalize(20),
        fontWeight: '600',
        alignSelf: 'center',
        flex: 1
    },
    Input: {
        borderColor: colors.black,
        borderWidth: normalize(2),
        padding: normalize(8),
        width: '50%',
        fontSize: normalize(18),
        fontWeight: '600',
        borderRadius: normalize(8),
    },
    CalculateBox: {
        backgroundColor: '#000000',
        margin: normalize(10),
        borderRadius: normalize(8)
    },
    CalculateGst: {
        fontSize: normalize(20),
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
        padding: normalize(8),
        color: colors.extraLight
    },
    Output: {
        fontSize: normalize(18),
        fontWeight: '600',
        padding: normalize(8)
    },
    OutputBox: {
        borderColor: colors.black,
        borderWidth: normalize(2),
        width: '50%',
        height: 42,
        borderRadius: normalize(8),
    },
    ThankYou: {
        fontWeight: '700',
        fontSize: normalize(30),
        alignSelf: 'center',
        marginVertical: normalize(10)
    }
});

export default GSTCalculator;