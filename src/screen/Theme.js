import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { images } from '../assets/images';
import { normalize } from '../utils';
import colors from '../theme/colors';
import { TextInput } from 'react-native-gesture-handler';

function Theme() {

  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [gstAmount, setGstAmount] = useState('');

  const handleAmount = (text) => {
    setAmount(text);
  }

  const handleRate = (text) => {
    setGstRate(text);
  }

  const Calculate = (amount, gst) => {
    let count = ((amount * gst) / 100);
    count = count.toFixed(2)
    setGstAmount(count)
  }
  const GrossAmount = (parseInt(amount) + parseFloat(gstAmount)).toFixed(2);

  console.log('Total', GrossAmount);

  const GST = (gstRate / 2).toFixed(2);

  const GSTAmount = (gstAmount / 2).toFixed(2);

  const Remove = () => {
    setAmount('');
    setGstAmount('');
    setGstRate('')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
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
          <Text style={styles.Amount}>Rate Of GST (%)</Text>
          <TextInput
            style={styles.Input}
            placeholder='enter gst rate...'
            onChangeText={(rate) => {
              handleRate(rate);
            }}
          />
        </View>
        <TouchableOpacity style={styles.CalculateBox} onPress={() => {
          Calculate(amount, gstRate);
        }}>
          <Text style={styles.CalculateText}>Calculate GST</Text>
        </TouchableOpacity>

        <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />

        <View style={{ flexDirection: 'row', margin: normalize(10) }}>
          <Text style={styles.Amount}>Net Amount(₹)</Text>
          <View style={styles.OutPutBox}>
            <Text style={styles.OutPut}>{amount}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', margin: normalize(10) }}>
          <Text style={styles.GSTRate}>GST Amount(₹)</Text>
          <View style={styles.OutPutBox}>
            <Text style={styles.OutPut}>{gstAmount}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', margin: normalize(10) }}>
          <Text style={styles.GSTRate}>Total Amount(₹)</Text>
          <View style={styles.OutPutBox}>
            <Text style={styles.OutPut}>{GrossAmount}</Text>
          </View>
        </View>

        <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />
        <View style={{ flexDirection: 'row', margin: normalize(10) }}>
          <Text style={styles.GSTRate}>CGST</Text>
          <Text style={styles.GSTRate}>{GST} %</Text>
          <View style={styles.OutPutBox}>
            <Text style={styles.OutPut}>{GSTAmount}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', margin: normalize(10) }}>
          <Text style={styles.GSTRate}>SGST</Text>
          <Text style={styles.GSTRate}>{GST} %</Text>
          <View style={styles.OutPutBox}>
            <Text style={styles.OutPut}>{GSTAmount}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.CalculateBox} onPress={() => Remove()}>
          <Text style={styles.CalculateText}>Remove GST</Text>
        </TouchableOpacity>

        <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />
        {/* <Text style={{ alignSelf: 'center', margin: normalize(20), fontWeight: '700', fontSize: normalize(20) }}>-::--::--::-</Text> */}
        <View>
          <Image />
        </View>
      </View>
    </SafeAreaView>
  );s
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
  Amount: {
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
    backgroundColor: colors.black,
    margin: normalize(10),
    borderRadius: normalize(8)
  },
  CalculateText: {
    fontSize: normalize(18),
    fontWeight: '600',
    color: colors.extraLight,
    alignSelf: 'center',
    padding: normalize(8)
  },
  OutPutBox: {
    borderRadius: normalize(8),
    borderColor: colors.black,
    borderWidth: normalize(2),
    width: '50%',
    height: 42,
  },
  GSTRate: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    flex: 1
  },
  OutPut: {
    fontSize: normalize(18),
    fontWeight: '600',
    padding: normalize(8)
  },

});

export default Theme;