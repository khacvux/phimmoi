import { View, Text, SafeAreaView } from '../components/Themed'
import tw from 'twrnc'
import FeaturedMovies from '../components/FeaturedMovies'
import FeaturedList from '../components/FeaturedList'
import { ScrollView } from 'react-native'
import NormalList from '../components/NormalList'


const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView 
      style={tw`w-full h-full`}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-10`}
      >
        <FeaturedMovies navigation={navigation} />
        <FeaturedList navigation={navigation} />
        <NormalList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen