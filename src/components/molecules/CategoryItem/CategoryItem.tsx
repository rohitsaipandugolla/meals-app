import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

type CategoryItemProps = {
	title: string;
	onSelect: () => void;
	color: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
	title,
	color,
	onSelect,
}) => {
	return (
		<View style={styles.gridItem}>
			<TouchableNativeFeedback style={{ flex: 1 }} onPress={onSelect}>
				<View style={{ ...styles.container, ...{ backgroundColor: color } }}>
					<Text style={styles.title} numberOfLines={2}>
						{title}
					</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		overflow: "hidden",
		elevation: 5,
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		// elevation: 3,
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		textAlign: "right",
	},
});

export default CategoryItem;
