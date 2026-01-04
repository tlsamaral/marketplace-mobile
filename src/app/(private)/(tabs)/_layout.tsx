import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { colors } from '../../../styles/colors'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 110, paddingTop: 16 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'PRODUTOS',
          tabBarActiveTintColor: colors['purple-base'],
          tabBarIcon: ({ color }) => (
            <Ionicons name="storefront-outline" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: 'PEDIDOS',
          tabBarActiveTintColor: colors['purple-base'],
          tabBarIcon: ({ color }) => (
            <Ionicons name="clipboard-outline" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'CARRINHO',
          tabBarActiveTintColor: colors['purple-base'],
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
