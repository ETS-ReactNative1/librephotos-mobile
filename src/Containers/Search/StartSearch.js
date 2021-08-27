import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'native-base'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Theme'

const StartSearch = ({ height, width, mode }) => {
  const { Common, Colors, Layout, Gutters } = useTheme()

  return (
    <View style={[Layout.fullSize, Layout.center, Common.backgroundDefault]}>
      <Icon
        size="3xl"
        as={<Ionicon name="flashlight-outline" />}
        color="black"
      />
      <Text textAlign={'center'} italic style={[Gutters.smallTMargin]}>
        Try searching for
        {'\n'}'Sunset in Mountains'
      </Text>
    </View>
  )
}

export default StartSearch