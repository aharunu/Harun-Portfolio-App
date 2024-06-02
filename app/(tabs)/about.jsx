import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <SafeAreaView className="bg-lightblue h-full">
      <View className="w-full items-center px-4">
        <Text className="text-3xl font-bold">Biography</Text>
        <Text className="text-lg text-justify mt-4 w-full">
          I&apos;am Harun. I&apos;am studying at Yildiz Technical University.
        </Text>
        <Text className="text-lg text-justify mt-4 w-full">
          During my university years I&apos;am trying to learn concepts of computer science and software development.
        </Text>
        <Text className="text-lg text-justify mt-4 w-full">
          Exploring various programming languages, algorithms, and technologies Through challenging lectures, online courses, and extracurricular activities,
          I sharpened my skills in coding, problem-solving, and critical thinking.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default About