// Card.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Card = ({ title, price, imageUri  , onClick}) => {
	return (
		<TouchableOpacity onPress={onClick}>
			<View style={styles.card}>
				{imageUri && (
					<Image source={{ uri: imageUri }} style={styles.image} />
				)}
				<View style={styles.content}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.price}>${price.toFixed(2)}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: 'white',
		elevation: 5, // For shadow on Android
		shadowColor: '#000', // For shadow on iOS
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
		margin: 10,
	},
	image: {
		width: '100%',
		height: 150,
		resizeMode: 'contain',
	},
	content: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	price: {
		fontSize: 16,
		color: 'green',
	},
});

export default Card;
