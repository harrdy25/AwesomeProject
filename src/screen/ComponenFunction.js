import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { normalize } from '../utils';
import colors from '../theme/colors';

function ComponenFunction() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("hhh");
        setInterval(() => tick(), 1000)
    }, [])

    const tick = () => {
        setTime(new Date());
    };

    return (
        <SafeAreaView>
            <View>
                <Image style={styles.Image} source={{ uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80' }} />
                <View style={styles.Container}>
                    <Text style={styles.Time}>{time.toLocaleTimeString()}</Text>
                    <Text style={styles.Date}>{time.toDateString()}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Image: {
        width: '100%',
        height: 800
    },
    Container: {
        alignSelf: 'center',
        padding: normalize(10),
        borderRadius: normalize(20),
        position: 'absolute',
        top: normalize(400),
        backgroundColor: colors.extraLight,
        shadowColor: colors.black,
        shadowOffset: {
            width:0,
            height: 10
        },
        shadowOpacity: normalize(10),
        shadowRadius: normalize(10)
    },
    Time: {
        fontSize: normalize(20),
        fontWeight: '700',
        textAlign: 'center'
    },
    Date: {
        fontSize: normalize(20),
        fontWeight: '700',
        marginHorizontal: normalize(20)
    },
});
export default ComponenFunction;
