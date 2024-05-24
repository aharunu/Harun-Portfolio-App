import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import YoutubePlayer from 'react-native-youtube-iframe'

const Portfolio = () => {
  return (
    <SafeAreaView className="bg-lightblue h-full">
      <View className="w-full px-4">
        <Text className="text-3xl font-bold">Readability Assessment Tool</Text>
        <Text className="text-lg font-semibold">  A Python tool for analyzing text extracted from PDF file. I created this project for CS50's final assignment.</Text>
        <YoutubePlayer
        height={300}
        play={false}
        videoId={"WSmdCzWLnOc"}
      />     
    </View>
    </SafeAreaView>
  )
}

export default Portfolio