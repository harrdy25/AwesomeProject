
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
import BMICalculatorFunction from './src/screen/BMICalculatorFunction'
import BMIClassBased from './src/screen/BMIClassBased'
import GSTCalculator from './src/screen/GSTCalculator'
import Theme from './src/screen/Theme'
import AgeCalculator from './src/screen/AgeCalculator'
import KbcHomePage from './src/screen/KBC/KbcHomePage'
import KbcQuestionAnswer from './src/screen/KBC/KbcQuestionAnswer'
import KbcResult from './src/screen/KBC/KbcResult'
import KbcQuiz from './src/screen/KBC/KbcQuiz'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
   
      {/* <KbcHomePage /> */}
      {/* <KbcQuestionAnswer /> */}
      {/* <KbcResult /> */}
      <KbcQuiz />
      {/* <Calculator /> */}
    </View>
  )
};
const styles = StyleSheet.create({

});