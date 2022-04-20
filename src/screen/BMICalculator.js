import { View, Text, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { images } from '../assets/images';
import { normalize } from '../utils';
import colors from '../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Other', value: '3' },
];
const Country = [
  { label: 'USA', value: '1' },
  { label: 'India', value: '2' },
  { label: 'Japan', value: '3' },
  { label: 'Canada', value: '4' },
  { label: 'India', value: '5' },
  { label: 'China', value: '6' },
  { label: 'Australia', value: '7' },
  { label: 'New Zealand', value: '8' },
  { label: 'UK', value: '9' },
  { label: 'Russia', value: '10' },

];

function BMICalculator() {

  const [select, setSelect] = useState(1);
  const [click, setClick] = useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={styles.Card}>
          <Image style={styles.Logo} source={images.IMG_React_Png} />
          <Text style={styles.TitleName}>BMI Calculator</Text>
        </View>
        <View style={styles.Header}>
          <TouchableOpacity style={click ? styles.BoxSelect : styles.Box} onPress={() => {
            setSelect(1);
          }}>
            <Text style={styles.Title}>Adult</Text>
          </TouchableOpacity>
          <TouchableOpacity style={click ? styles.BoxSelect : styles.Box} onPress={() => {
            setSelect(1);
          }}>
            <Text style={styles.Title}>Child</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />
        <Text style={styles.Height}>Height</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={styles.FeetInch}>Feet</Text>
          <Text style={styles.FeetInch}>Inches</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
          />
        </View>
        <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={styles.Weight}>Weight</Text>
          <Text style={styles.Weight}>Age</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={styles.Kilograms}>Kilograms</Text>
          <Text style={styles.Kilograms}>Years</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
          />
        </View>
        <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />
        <Text style={styles.Height}>Gender(Sex)</Text>
        <View style={{ marginBottom: normalize(10), marginHorizontal: normalize(10) }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={150}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Gender' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.label);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />
        <Text style={styles.Height}>Ethnic group (optional)</Text>
        <View style={{ marginBottom: normalize(10), marginHorizontal: normalize(10) }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={Country}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Country' : '...'}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.label);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />

        <Text>Result</Text>
        <Text>Your result suggests you are a healthy weight</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Card: {
    margin: normalize(5),
    borderRadius: normalize(15),
    backgroundColor: '#665655',
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
  Header: {
    marginTop: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Box: {
    padding: normalize(8),
    width: normalize(180),
    backgroundColor: '#005eb8',
    borderTopLeftRadius: normalize(15),
    borderTopRightRadius: normalize(15)
  },
  BoxSelect: {
    padding: normalize(8),
    width: normalize(180),
    backgroundColor: '#768692',
    borderTopLeftRadius: normalize(15),
    borderTopRightRadius: normalize(15)
  },
  Title: {
    fontSize: normalize(25),
    fontWeight: '700',
    color: colors.extraLight,
    textAlign: 'center'
  },
  Height: {
    fontSize: normalize(25),
    fontWeight: '700',
    margin: normalize(10),
  },
  Weight: {
    fontSize: normalize(25),
    fontWeight: '700',
    margin: normalize(10),
    flex: 1,
  },
  FeetInch: {
    fontSize: normalize(20),
    fontWeight: '500',
    color: '#506676',
  },
  Kilograms: {
    fontSize: normalize(20),
    fontWeight: '500',
    color: '#506676',
    flex: 1,
    textAlign: 'center'
  },
  Input: {
    width: normalize(150),
    margin: normalize(10),
    borderWidth: normalize(2),
    padding: normalize(8),
    fontSize: normalize(18),
    borderRadius: normalize(8),
    backgroundColor: colors.lineColor,
    textAlign: 'center'
  },
  // dropdown

  dropdown: {
    height: normalize(40),
    borderColor: 'black',
    borderWidth: normalize(2),
    borderRadius: normalize(8),
    backgroundColor: colors.lineColor,
    paddingHorizontal: normalize(8),
  },
  placeholderStyle: {
    color: '#808080',
    fontSize: normalize(16),
  },
  selectedTextStyle: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: colors.green
  },
  iconStyle: {
    width: normalize(25),
    height: normalize(25),
    tintColor: colors.black,
    margin: normalize(4),
  },
});

export default BMICalculator;