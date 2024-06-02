import { View, Text, ScrollView, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { openURL } from 'expo-linking'
import { useLocalSearchParams } from 'expo-router'

const detail = () => {
  const params = useLocalSearchParams();

  // get blog details from firebase firestore by params id
  console.log(params.id);
  return (
    <SafeAreaView className="bg-lightblue h-full">
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
          <View className="items-center justify-center pt-10 flex-col text-justify pb-10">
            <ScrollView className="w-full h-full">
                <Text className="text-3xl font-bold ">Next.js ile Portföy Oluşturma</Text>
                <Text className="text-lg font-semibold">Neden Portfolyo Oluşturmalıyım</Text>
                <Text className=" ">Portfolyolar kendi yeteneklerimizi insanlara göstermek için en güzel yollardan biridir.
                    İşverenler ve müşterilerin sizi tanımasında önemli rol oynarlar. Kendimiz hakkındaki önemli bilgileri,
                    geçmiş projeleri, tecrübelerimizi göstermemize yardımcı olur. Bu nedenlerden dolayı, herhangi bir alanda çalışan biri için portföy oluşturmak oldukça önemlidir.</Text>
                    <Text className="text-white text-2xl pt-3">Neden Nextjs</Text>
                <Text className="font-light">Next.js, geliştiricilere hızlı ve verimli bir şekilde çalışma imkanı sağlar.
                    Hızlı başlangıç için hazır bir yapı sunar ve kodunuzu kolayca düzenlemenize olanak tanır.
                    Bu, portföyünüzü hızlı bir şekilde oluşturmanıza ve güncellemenize olanak sağlar.</Text>
                <Text className="text-white text-2xl pt-3">Başlangıç</Text>
                <Text className="font-light">İlk önce nodejs yüklemeliyiz şu siteden:</Text>
                <Button onPress={() => openURL("https://nodejs.org/en")} className="flex-1" title="node.js"/> 
                <Text className="font-light"> Daha Sonra terminale &apos;npm create-next-app&apos; yazıp projeyi oluşturabiliriz.
                    Bunları yaptıktan sonra gerekli kütüphaneleri &apos;npm i&apos; ile indirmemiz gerekiyor.
                    Bu işlem biraz sürebilir. İndirmeler tamamlandıktan sonra terminale &apos;npm run dev &apos; yazarak development serverımızı kurabiliriz.
                </Text>
                <Text className="text-white text-2xl pt-3">Components</Text>
                <Text className="font-light">Componentlarda bir tane Navbar componentı var.
                    Navbar sayfalar arası navigasyonu sağlıyor. Navbarda her sayfanın linkleri,
                    ana sayfa logosu, benim Github ve Linkedin hesaplarımın logoları ve linkleri var</Text>
                <Text className="text-white text-2xl pt-3">Sayfalar</Text>
                <Text>Ana Sayfa</Text>
                <Text className="font-light">Ana sayfa her sitenin başlangıç sayfasıdır. Genel bilgileri göstermek için kullanabilirsiniz.
                    Ana sayfada portföyüme erişebileceğiniz &apos;View My Work&apos; butonu ve iletişime geçebileceğiniz &apos;Contact&apos; butonu var.</Text>
                <Text>Blog Sayfası</Text>
                <Text className="font-light">Blog sayfası bilgilerimizi paylaşabileceğimiz, düşüncelerimizi aktarabileceğimiz blog sayfası. Yazdığım bloglara erişebileceğiniz linkler bu sayfada. </Text>
                <Text>Portfolio Sayfası</Text>
                <Text className="font-light">Portfolio sayfası yaptığımız projeleri göstermek için kullabileceğimiz bir sayfa.
                    Ben önceden yaptığım projeyi tanıtan Youtube videosu koydum. </Text>
                <Text>Hakkında Sayfası</Text>
                <Text className="font-light">Hakkında sayfası sitenizin en önemli sayfalardan biri.
                    Kendinizi diğer insanlara tanıtabileceğiniz, bilgilerinizi gösterebileceğiniz, geçmiş tecrübelerinizi aktarabileceğiniz sayfa.
                    Ben bu sayfaya özgeçmişimi ve kendimi anlatan bir yazı yazdım.</Text>
                <Text>İletişim Sayfası</Text>
                <Text className="font-light">İletişim sayfası sitenize giren kişilerin sizinle iletişime geçmesi için gereken araçları verebileceğiniz bir sayfa.
                    Ben bu sayfaya bir email gönderen bir araç geliştirmeyi planlıyorum.</Text>
                <Text className="text-white text-xl pt-3">Yayınlama</Text>
                <Text className="font-light">Kodu Github&apos;a attıktan sonra Vercel platformuyla sitemizi yayınlayabiliriz.
                    İlk olarak Vercel hesabımızı github hesabımızla birleştirmemiz gerekiyor.
                    Daha sonra Github repositorymizi içe aktardıktan sonra kolay bir şekilde Vercel&apos;de yayınlayabiliriz.</Text>
                <Button onPress={() => openURL("https://harun-portfolio.vercel.app/")} className="flex-1" title="Buradan Websitesine"/>   
                <Button onPress={() => openURL("https://github.com/aharunu/Harun-Portfolio")} className="flex-1" title="Buradan Github Repositorysine"/>   
                <Text className="font-light">ulaşabilirsiniz.</Text>
            </ScrollView>
          </View>
    </SafeAreaView>
  )
}

export default detail