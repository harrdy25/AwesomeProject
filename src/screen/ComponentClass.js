import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { normalize } from "../utils";
import { images } from "../assets/images";
import colors from '../theme/colors';

export default class ComponentClass extends Component {

    // give initial value to state
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

    //request to server
    componentDidMount = () => {
        // console.log("3 Component Did Mount");
        setInterval(() => this.tick(), 1000);
    }

    //call when update in state
    componentDidUpdate = () => {
        // console.log("4 component Did Update");
    }

    //call when leave screen/ component
    componentWillUnmount = () => {
        // console.log("5 Component Will Unmount");
    }

    // call each time when state change
    render() {
        // console.log("2 Render");
        return (
            <SafeAreaView>
                <View>
                    {/* <View style={styles.Card}>
                        <Image style={styles.Logo} source={images.IMG_React_Png} />
                        <Text style={styles.TitleName}>Component Life Cycle</Text>
                    </View> */}
                    {/* <View style={{ borderColor: '#515151', borderWidth: normalize(2), marginVertical: normalize(1) }} /> */}
                    <View style={styles.TimeBox}>
                        <Text style={styles.Time}>{this.state.time.toString()}</Text>
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
        backgroundColor: colors.black1,
        alignSelf: 'center',
        borderRadius: normalize(80)
    },
    Time: {
        fontSize: normalize(16),
        fontWeight: '800',
        padding: normalize(10),
        color: colors.extraLight
    },
});
