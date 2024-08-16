import { StyleSheet, Text, View, SafeAreaView ,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItems from '../compontes/productItems'
import { useRoute } from '@react-navigation/native'

const ProductScreen = () => {
	const [data, setData] = useState(null)
	const route = useRoute()

	useEffect(() => {
		if (route.params?.data) {
			setData(route.params.data);
		}
	}, [route.params]);

	if (!data) {
		return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
	}
	return (
		<SafeAreaView style={styles.container}>
			<ProductItems
				title={data.title}
				price={data.price}
				description={data.description}
				imageUri={data.thumbnail}
			/>
		</SafeAreaView>
	)
}

export default ProductScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
})