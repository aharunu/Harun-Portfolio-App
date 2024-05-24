import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.6}
        className={`bg-black rounded-xl min-h-[64px] justify-center items-center 
        ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading} >
        <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
            {title}
        </Text>
        
    </TouchableOpacity>
  )
}

export default CustomButton