import React from 'react'
import { RefreshControl } from 'react-native'
import { Icon, ScrollView, Text } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@/Theme'

type Props = {
  onRefresh?: () => void
  refreshing?: boolean
}

const NoResultsError = ({ onRefresh, refreshing = false }: Props) => {
  const { Colors, Layout, Gutters } = useTheme()

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ ...Layout.fullSize, ...Layout.center }}
    >
      <Icon
        size="3xl"
        as={<MaterialCommunityIcons name="alert" />}
        color={Colors.text}
      />
      <Text style={[Gutters.smallTMargin]}> No Images Found </Text>
    </ScrollView>
  )
}

NoResultsError.defaultProps = {
  onRefresh: () => {},
  refreshing: false,
}

export default NoResultsError
