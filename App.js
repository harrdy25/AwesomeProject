
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MedicineData from './src/screen/MedicineData'
import ComponentLifeCycle from './src/screen/ComponentLifeCycle'
import Counter from './src/screen/Counter'


export default function App() {
  return (
    <View>
      <ScrollView>
        <ComponentLifeCycle />
        <MedicineData />
        <Counter />
      </ScrollView>
    </View>
  )
}