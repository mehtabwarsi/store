import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from '../compontes/cardItems'
import { getProduct } from '../api/axoisConfig'
import { useNavigation } from '@react-navigation/native'


const ListProductScreen = () => {
	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	// console.log(product);

	const navigation = useNavigation()


	useEffect(() => {
		const fetchUser = async () => {
			setLoading(true);
			try {
				const data = await getProduct();
				setProduct(data.products);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, [])
	if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
	if (error) return <Text>Error: {error}</Text>;
	return (
		<View style={styles.container}>
			<FlatList
				data={product}
				renderItem={({ item, index }) => {
					return (
						<View key={index}>
							<Card title={item.title}
								imageUri={item.thumbnail}
								price={item.price}
								onClick={() => {
									navigation.navigate("ProductScreen", { data: item })

								}}
							/>
						</View>
					);
				}}
			/>

		</View>
	)
}

export default ListProductScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	}
})