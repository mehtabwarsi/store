
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// screens
import ListProductScreen from '../screens/ListProductScreen';
import ProductScreen from '../screens/ProductScreen';


const StackNavigation = () => {
	const navigation = useNavigation();
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name='ListScreen' component={ListProductScreen} />
			<Stack.Screen name='ProductScreen' component={ProductScreen} />
		</Stack.Navigator>
	)
}

export default StackNavigation
