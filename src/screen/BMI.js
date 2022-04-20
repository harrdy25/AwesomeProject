import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, Image } from 'react-native'
import { images } from '../assets/images'
import colors from '../theme/colors'
import { normalize } from '../utils'

class BMI extends Component {
    state = {
        height: '',
        weight: '',
        bmi: '',
        BmiResult: '',
    }
    handleHeight = (text) => {
        this.setState({ height: text })
    }
    handleWeight = (text) => {
        this.setState({ weight: text })
    }
    calculate = (height, weight) => {
        //calculation
        var result = (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
        result = result.toFixed(2);
        //display result
        this.setState({ bmi: result })
        if (result < 18.5) {
            this.setState({ BmiResult: 'Underweight' })
        }
        else if (result >= 18.5 && result < 25) {
            this.setState({ BmiResult: 'Normal weight' })
        }
        else if (result >= 25 && result < 30) {
            this.setState({ BmiResult: 'Overweight' })
        }
        else if (result >= 30) {
            this.setState({ BmiResult: 'Obese' })
        }
        else {
            alert('Incorrect Input!');
            this.setState({ BmiResult: '' })
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <View style={styles.Card}>
                        <Image style={styles.Logo} source={images.IMG_React_Png} />
                        <Text style={styles.TitleName}>BMI Calculator</Text>
                    </View>
                    <View style={styles.Header}>
                        <TouchableOpacity style={styles.Box}>
                            <Text style={styles.Title}>Adult</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Box}>
                            <Text style={styles.Title}>Child</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderColor: '#004b93', borderWidth: normalize(2), marginHorizontal: normalize(5) }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.Weight}>Height</Text>
                        <Text style={styles.Weight}>Weight</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.Kilograms}>Height (Cm)</Text>
                        <Text style={styles.Kilograms}>Weight (Kg)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TextInput
                            style={styles.Input}
                            keyboardType="numeric"
                            onChangeText={this.handleHeight}
                        />
                        <TextInput
                            style={styles.Input}
                            keyboardType="numeric"
                            onChangeText={this.handleWeight}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.SubmitButton}
                        onPress={
                            () => this.calculate(this.state.height, this.state.weight)
                        }>
                        <Text style={styles.SubmitButtonText}> Calculate </Text>
                    </TouchableOpacity>
                    <View style={styles.OutputBox}>
                        <Text style={styles.Output}>{this.state.bmi}</Text>
                    </View>
                    <View style={ this.state.BmiResult === 'Normal weight' ?  styles.OutputBoxRed : styles.OutputBox}>
                        <Text style={styles.ResultText}>{this.state.BmiResult}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default BMI;
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
    Title: {
        fontSize: normalize(25),
        fontWeight: '700',
        color: colors.extraLight,
        textAlign: 'center'
    },
    Weight: {
        fontSize: normalize(25),
        fontWeight: '700',
        margin: normalize(10),
        flex: 1,
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
    SubmitButton: {
        backgroundColor: '#005eb8',
        padding: normalize(10),
        margin: normalize(15),
        borderRadius: normalize(8)
    },
    SubmitButtonText: {
        textAlign: "center",
        color: 'white',
        fontSize: normalize(25),
        alignSelf: 'center',
        fontWeight: '600'
    },
    Output: {
        textAlign: "center",
        fontSize: normalize(30),
        padding: normalize(10),
        fontWeight: '700',
        alignSelf: 'center'
    },
    ResultText: {
        textAlign: "center",
        fontSize: normalize(30),
        color: 'blue',
        fontWeight: '700',
        padding: normalize(10),
        alignSelf: 'center'
    },
    OutputBox: {
        height: 75,
        width: 250,
        borderRadius: normalize(100),
        borderWidth: normalize(10),
        alignSelf: 'center',
        margin: normalize(5),
        borderLeftColor: colors.appBlue,
        borderRightColor: colors.appBlue
    },
    OutputBoxRed: {
        height: 75,
        width: 250,
        borderRadius: normalize(100),
        borderWidth: normalize(10),
        alignSelf: 'center',
        margin: normalize(5),
        borderTopColor: colors.red,
        borderRightColor: colors.red
    }
})