import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../../data/category-data";
import HeaderButton from "../atoms/HeaderButton/HeaderButton";
import Text from "../atoms/Text/Text";

export type MealDetailScreenProps = {
	navigation: NavigationProp<any>;
	route: RouteProp<any>;
};
const ListItem = (props: any) => {
	return (
		<View style={styles.listItem}>
			<Text>{props.children}</Text>
		</View>
	);
};

const MealDetailScreen: React.FC<MealDetailScreenProps> = ({
	navigation,
	route,
}) => {
	const { mealId } = route.params!;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);
	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal!.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text>{selectedMeal!.duration}m</Text>
				<Text>{selectedMeal!.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal!.affordability.toUpperCase()}</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal!.ingredients.map(ingredient => (
				<ListItem key={ingredient}>{ingredient}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal!.steps.map(step => (
				<ListItem key={step}>{step}</ListItem>
			))}
		</ScrollView>
	);
};
export const MealDetailScreenOptions = (navigationData: any) => {
	const { mealId } = navigationData.route.params!;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);
	return {
		title: selectedMeal?.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => {
						console.log("Mark as favorite!");
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "center",
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 10,
	},
});

export default MealDetailScreen;
