
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import MedicineData from './src/screen/MedicineData'
import ComponentClass from './src/screen/ComponentClass'
import Counter from './src/screen/Counter'
import ComponenFunction from './src/screen/ComponenFunction'
import InstaHomePage from './src/screen/InstaHomePage'
import InstagramProfile from './src/screen/InstagramProfile'
import Calculator from './src/screen/Calculator'
import InstaChat from './src/screen/InstaChat'
import ChatDetails from './src/screen/ChatDetails'
import Insights from './src/screen/Insights'
import DiscoverPeople from './src/screen/DiscoverPeople'
import CloseFriends from './src/screen/CloseFriends'
import Followers from './src/screen/Followers'
import InstaComments from './src/screen/InstaComments'
import InstaMessage from './src/screen/InstaMessage'


export default function App() {
  return (
    <View style={{ flex: 1 }}>
        {/* <ComponentClass /> */}
        {/* <MedicineData /> */}
        {/* <Counter /> */}
        {/* <ComponenFunction /> */}
        {/* <InstaHomePage /> */}
        {/* <InstagramProfile /> */}
        <Calculator />
        {/* <InstaChat /> */}
        {/* <ChatDetails /> */}
        {/* <Insights /> */}
        {/* <DiscoverPeople /> */}
        {/* <CloseFriends /> */}
        {/* <Followers /> */}
        {/* <InstaComments /> */}
        {/* <InstaMessage /> */}
    </View>
  )
};
const styles = StyleSheet.create({

})