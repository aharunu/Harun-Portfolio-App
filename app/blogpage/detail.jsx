import { View, Text, ScrollView, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { openURL } from 'expo-linking'
import { useLocalSearchParams } from 'expo-router'
import { db } from '../firebaseConfig'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useState, useEffect } from 'react'


const detail = () => {
  const params = useLocalSearchParams();
  parameters = params.id;
  console.log(params.id);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const q = query(collection(db, parameters), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(user => user.title || user.text || user.link !== null);
        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
    fetchUsers();
  }, []);


  return (
    <SafeAreaView className="bg-lightblue h-full">
      <View className="py-5 pd-4 justify-center items-center">
        <Text className="text-4xl">Next.js ile Portföy Oluşturma</Text>
        <ScrollView>
          {users.map(user => (
            <View key={user.id} className="bg-white p-5 m-5 rounded-lg shadow-md">
              <Text className="text-2xl font-bold">{user.title}</Text>
              {user.text !== undefined && (
                <Text className="text-lg">{user.text}</Text>
              )}
              {user.link !== undefined && (
              <Text className="text-blue-500 underline" onPress={() => openURL(user.link)}>Link</Text>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
        <Pressable
          onPress={() => router.pop()}
          className="absolute top-5 left-5 z-10"
        >
          {/* Back Button Font Awesome Icon && Expo Vector Icon */}
          <Text className="text-white text-2xl">Back</Text>
        </Pressable>
        <ScrollView
          contentContainerStyle={{
            height: "100%"
          }}
        />
    </SafeAreaView>
  )
}

export default detail