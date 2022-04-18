
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import MedicineData from './src/screen/MedicineData'
import ComponentClass from './src/screen/ComponentClass'
import Counter from './src/screen/Counter'
import ComponenFunction from './src/screen/ComponenFunction'
import InstaHomePage from './src/screen/InstaHomePage'
import InstagramProfile from './src/screen/InstagramProfile'


export default function App() {
  return (
    <SafeAreaView>
      
      <ScrollView>
        {/* <ComponentClass /> */}
        <MedicineData />
        {/* <Counter /> */}
        {/* <ComponenFunction /> */}
        {/* <InstaHomePage /> */}
        <InstagramProfile />
      </ScrollView>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
 
})