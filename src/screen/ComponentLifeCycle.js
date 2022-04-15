import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { normalize } from "../utils";
import { images } from "../assets/images";
import colors from '../theme/colors';

export default class ComponentLifeCycle extends Component {
    constructor(props) {
        // console.log("1 constructor");
        super(props);
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        // console.log("3 Component Did Mount");
        setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate = () => {
        // console.log("4 component Did Update");
    }

    componentWillUnmount = () => {
        // console.log("5 Component Will Unmount");
    }

    render() {
        // console.log("2 Render");
        return (
            <SafeAreaView>
                <View>
                    <View style={styles.Card}>
                        <Image style={styles.Logo} source={images.IMG_React_Png} />
                        <Text style={styles.TitleName}>Component Life Cycle</Text>
                    </View>
                    <View style={{ borderColor: '#515151', borderWidth: normalize(2), marginVertical: normalize(1) }} />
                    <View style={styles.TimeBox}>
                        <Text style={styles.Time}>{this.state.time.toLocaleTimeString()}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    
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
        fontSize: normalize(25),
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: normalize(5)
    },
    Logo: {
        height: normalize(60),
        width: normalize(60),
        alignSelf: 'center',
        borderRadius: normalize(50),
        margin: normalize(5)
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
});
