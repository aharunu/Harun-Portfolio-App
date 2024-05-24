import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Contact = () => {
  return (
    <SafeAreaView className="bg-lightblue h-full">
      <View className="w-full items-center px-4">
        <Text className="text-3xl font-bold">Contact</Text>
    </View>
    </SafeAreaView>
  )
}

export default Contact