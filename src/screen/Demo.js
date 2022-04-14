import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { normalize } from '../utils';

function Demo() {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Text style={styles.Name}>Hardik Kukadiya</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white'
  },
  Name: {
  fontSize: normalize(20)
  }
});

export default Demo;