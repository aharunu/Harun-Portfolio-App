import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Image } from 'react-native'
import { images } from '../../constants'
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

const Blog = () => {
  return (
    <SafeAreaView className="bg-lightblue h-full">
          <View className="items-center justify-center pt-10">
            <Text className="text-3xl font-bold ">Blog</Text>
            <Image
              source={images.blog}
              className="w-full h-64"
              resizeMode="contain"
            />
            <CustomButton 
              title="Next.js ile Portfolio Oluşturma" 
              handlePress={() => router.push('blogpage/blog1')}
              containerStyles="w-full"
            />
          </View>
      </SafeAreaView>
  )
}

export default Blog