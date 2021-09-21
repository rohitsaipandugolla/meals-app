import React from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	TouchableNativeFeedback,
} from "react-native";
import Text from "../../atoms/Text/Text";

type MealItemProps = {
	onSelectMeal: () => void;
	image: string;
	title: string;
	duration: number;
	affordability: string;
	complexity: string;
};
const MealItem: React.FC<MealItemProps> = ({
	onSelectMeal,
	image,
	title,
	affordability,
	complexity,
	duration,
}) => {
	return (
		<View style={styles.mealItem}>
			<TouchableNativeFeedback onPress={onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground source={{ uri: image }} style={styles.bgImage}>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{duration}m</Text>
						<Text>{complexity.toUpperCase()}</Text>
						<Text>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		overflow: "hidden",
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	mealRow: {
		flexDirection: "row",
	},
	mealHeader: {
		height: "85%",
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		height: "15%",
	},
	titleContainer: {
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
});

export default MealItem;
