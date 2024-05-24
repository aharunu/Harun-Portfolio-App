import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect  } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
    
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'lightblue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 1,
          borderTopColor: "black",
          height: 76,
        },
      }}
    >
      <Tabs.Screen 
        name="portfolio"
        options={{
          title: "Portfolio",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Portfolio"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="blog"
        options={{
          title: "Blog",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Blog"
              focused={focused}
            />
          ),
        }}
      />
      
      <Tabs.Screen 
        name="about"
        options={{
          title: "About",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="About"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="contact"
        options={{
          title: "Contact",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Contact"
              focused={focused}
            />
          ),
        }}
      />
    </ Tabs>
  )
}

export default TabsLayout