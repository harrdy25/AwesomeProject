import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { images } from '../assets/images';
import { normalize } from '../utils';
import colors from '../theme/colors';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  const [BmiResult, setBmiResult] = useState('');

  const handleHeight = (text) => {
    setHeight(text)
  }

  const handleWeight = (text) => {
    setWeight(text)
  }

  const calculate = (height, weight) => {
    let count = (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    count = count.toFixed(2);
    setResult(count);

    if (count < 18.5) {
      setBmiResult('Underweight')  // 180 * 50
    }
    else if (count >= 18.5 && count < 25) {
      setBmiResult('Normal Weight') // 180 * 80
    }
    else if (count >= 25 && count < 30) {
      setBmiResult('Overweight') // 180 * 90
    }
    else if (count >= 30) {
      setBmiResult('Obesity') // 180 * 99
    }
    else {
      alert('Incorrect Input!');
      setBmiResult('')
    }
  };

  const ClearAll = () => {
    setBmiResult('');
    setResult('');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View style={styles.Card}>
            <Image style={styles.Logo} source={images.IMG_React_Png} />
            <Text style={styles.TitleName}>BMI Calculator</Text>
          </View>
          <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={styles.Weight}>Height</Text>
            <Text style={styles.Weight}>Weight</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.Kilograms}>Height (cm)</Text>
            <Text style={styles.Kilograms}>Weight(kg)</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={styles.Input}
              fontWeight={'600'}
              onChangeText={(cm) => {
                handleHeight(cm)
              }}
            />
            <TextInput
              style={styles.Input}
              fontWeight={'600'}
              onChangeText={(kg) => {
                handleWeight(kg)
              }}
            />
          </View>
          <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.Height, { flex: 1 }]}>Age</Text>
            <Text style={[styles.Kilograms, { alignSelf: 'center' }]}>ages: 2 - 120</Text>
          </View>
          <TextInput
            style={styles.InputAge}
            keyboardType="numeric"
            fontWeight={'600'}
          />

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

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={styles.SubmitButton}>
              <Button
                title='Calculate'
                color={'#FFFFFF'}
                onPress={() => calculate(height, weight)}
              />
            </View>
            <View style={styles.SubmitButton}>
              <Button
                title='Clear All'
                color={'#FFFFFF'}
                onPress={() => ClearAll()}
              />
            </View>

          </View>

          <View style={{ borderColor: '#004b93', borderWidth: normalize(1), marginHorizontal: normalize(5) }} />
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: normalize(10) }}>
            <Text style={styles.BMI}>BMI</Text>
            <View style={styles.OutputBox}>
              <Text style={styles.ResultText}>{result}</Text>
            </View>

            <View style={BmiResult === 'Underweight' ? styles.OutputBoxRed : styles.OutputBox
              && BmiResult === 'Normal Weight' ? styles.OutputBoxGreen : styles.OutputBox
                && BmiResult === 'Overweight' ? styles.OutputBoxYellow : styles.OutputBox
                  && BmiResult === 'Obesity' ? styles.OutputBoxOrange : styles.OutputBox}>
              <Text style={styles.ResultText}>{BmiResult}</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', marginTop: normalize(10) }}>
            <View style={{ borderColor: 'red', borderWidth: normalize(10), width: '25%' }} />
            <View style={{ borderColor: 'green', borderWidth: normalize(10), width: '25%' }} />
            <View style={{ borderColor: colors.appBlue, borderWidth: normalize(10), width: '25%' }} />
            <View style={{ borderColor: 'orange', borderWidth: normalize(10), width: '25%' }} />
          </View>

          {BmiResult === 'Underweight' &&
            <View>
              <Image style={styles.IconRed} source={images.IMG_UpArrow_PNG} />
            </View>
          }
          {BmiResult === 'Normal Weight' &&
            <View>
              <Image style={styles.IconGreen} source={images.IMG_UpArrow_PNG} />
            </View>
          }
          {BmiResult === 'Overweight' &&
            <View>
              <Image style={styles.IconSky} source={images.IMG_UpArrow_PNG} />
            </View>
          }
          {BmiResult === 'Obesity' &&
            <View>
              <Image style={styles.IconOrange} source={images.IMG_UpArrow_PNG} />
            </View>
          }
        </View>
      </ScrollView>
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
    margin: normalize(10),

  },
  Input: {
    width: normalize(150),
    margin: normalize(10),
    borderWidth: normalize(2),
    padding: normalize(8),
    fontSize: normalize(18),
    borderRadius: normalize(8),
    backgroundColor: colors.lineColor,
    textAlign: 'center',
    flex: 1
  },
  InputAge: {
    width: normalize(150),
    margin: normalize(10),
    borderWidth: normalize(2),
    padding: normalize(8),
    fontSize: normalize(18),
    borderRadius: normalize(8),
    backgroundColor: colors.lineColor,
    textAlign: 'center',
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
  SubmitButton: {
    flexDirection: 'row',
    backgroundColor: '#005eb8',
    padding: normalize(3),
    margin: normalize(10),
    borderRadius: normalize(8),
    justifyContent: 'space-evenly'
  },
  SubmitButtonText: {
    textAlign: "center",
    color: 'white',
    fontSize: normalize(20),
    alignSelf: 'center',
    fontWeight: '600'
  },
  // result

  ResultText: {
    textAlign: "center",
    fontSize: normalize(20),
    color: 'black',
    fontWeight: '700',
    padding: normalize(5),
  },
  OutputBox: {
    height: 50,
    width: 100,
    borderRadius: normalize(100),
    borderWidth: normalize(8),
    alignSelf: 'center',
    margin: normalize(5),
  },
  OutputBoxRed: {
    height: 50,
    width: 200,
    borderRadius: normalize(100),
    borderWidth: normalize(8),
    alignSelf: 'center',
    margin: normalize(5),
    borderColor: 'red'
  },
  OutputBoxGreen: {
    height: 50,
    width: 200,
    borderRadius: normalize(100),
    borderWidth: normalize(8),
    alignSelf: 'center',
    margin: normalize(5),
    borderColor: 'green'
  },
  OutputBoxYellow: {
    height: 50,
    width: 200,
    borderRadius: normalize(100),
    borderWidth: normalize(8),
    alignSelf: 'center',
    margin: normalize(5),
    borderColor: colors.appBlue
  },
  OutputBoxOrange: {
    height: 50,
    width: 200,
    borderRadius: normalize(100),
    borderWidth: normalize(8),
    alignSelf: 'center',
    margin: normalize(5),
    borderColor: 'orange'
  },
  IconRed: {
    height: 50,
    width: 50,
    tintColor: 'red',
    marginLeft: '5%'
  },
  IconGreen: {
    height: 50,
    width: 50,
    tintColor: 'green',
    marginLeft: '31%'
  },
  IconSky: {
    height: 50,
    width: 50,
    tintColor: colors.appBlue,
    marginLeft: '56%'

  },
  IconOrange: {
    height: 50,
    width: 50,
    tintColor: 'orange',
    marginLeft: '82%'

  },
  BMI: {
    fontSize: normalize(25),
    fontWeight: '700',
    alignSelf: 'center'
  }
});

export default BMICalculator;