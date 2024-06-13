import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { useRouter } from 'expo-router';

const Blog = () => {
  const router = useRouter();
  // get blogs from firebase firestore
  const blogs = [
    {
      id: "blog",
      title: "Next.js ile Portfolio Oluşturma",
      content: "Next.js ile portfolio oluşturmak için gerekli adımları bu blog yazımızda bulabilirsiniz.",
      date: "12.05.2021",
      link: "blogpage/detail",
      image: images.blog
    },
    {
      id: "blog2",
      title: "Next.js ile Portfolio Oluşturma",
      content: "Next.js ile portfolio oluşturmak için gerekli adımları bu blog yazımızda bulabilirsiniz.",
      date: "12.05.2021",
      link: "blogpage/detail",
      image: images.blog
    }
  ];
  return (
    <SafeAreaView className="bg-lightblue h-full">
      <Text className="text-3xl font-bold text-center mt-5">Blog</Text>
      <ScrollView>
        {blogs.map((blog) => (
          <View className="bg-white p-5 m-5 rounded-lg shadow-md" key={blog.id}>
            <Text className="text-2xl font-bold">{blog.title}</Text>
            <View className="mt-5">
              <Image
                source={blog.image}
                className="w-full h-64 rounded-lg"
                resizeMode="contain"
              />
            </View>
            <Text className="text-gray-500">{blog.date}</Text>
            <Text className="text-lg">{blog.content}</Text>
            <View className="mt-5">
              <Pressable
                className="bg-black rounded-xl min-h-[64px] justify-center items-center w-full"
                onPress={() => router.push( 
                  {
                    pathname: 'blogpage/detail',
                    params: {
                      id: blog.id,
                      title: blog.title,
                      content: blog.content,
                      date: blog.date,
                      image: blog.image
                    }
                  })}
              >
                <Text className="text-white font-psemibold text-lg">
                  Read More
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Blog