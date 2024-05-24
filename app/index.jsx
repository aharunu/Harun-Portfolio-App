import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-lightblue h-full">
      <ScrollView
          contentContainerStyle={{
            height: "100%"
          }}
        >
          <View className="w-full flex items-center min-h-[85vh] px-4">
            <Image
              source={images.herooo}
              className="w-full h-64"
              resizeMode="contain"
            />
            <View className="w-full flex flex-col items-center h-1/2 px-4">
            <Text className="text-4xl font-bold">Harun&apos;s Portfolio</Text>
            <Text className="text-xl font-semibold">  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum quisquam saepe, officia adipisci consequatur expedita, 
            tempore et, quidem sunt iusto aliquid eaque. 
            Dolore error repellendus dicta excepturi labore libero ipsa!</Text>
            </View>

            <CustomButton 
              title="View My Work" 
              handlePress={() => router.push('/portfolio')}
              containerStyles="w-full mt-4"
            />
          </View>
        </ScrollView>

      <StatusBar backgroundColor='lightblue' stlye='light' />
      </SafeAreaView>
  );
}
