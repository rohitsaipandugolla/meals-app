import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import Meal from "../../models/meal";
import { toggleFavorite } from "../../store/actions/MealActions";
import { appState } from "../../store/reducers/meals";
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
	const { mealId, isFav } = route.params!;

	const availableMeals = useSelector<appState, appState["meals"]>(
		state => state.meals.meals
	);
	const currentMealIsFavorite = useSelector<appState, appState["meals"]>(
		state => state.meals.favouriteMeals.some((meal: Meal) => meal.id === mealId)
	);

	const selectedMeal = availableMeals.find((meal: Meal) => meal.id === mealId);

	const dispatch = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(mealId));
	}, [dispatch, mealId]);
	useEffect(() => {
		navigation.setParams({ toggleFav: toggleFavoriteHandler });
	}, [toggleFavoriteHandler, isFav]);

	useEffect(() => {
		const { isFav } = route.params!;
	}, [currentMealIsFavorite]);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal!.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text>{selectedMeal!.duration}m</Text>
				<Text>{selectedMeal!.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal!.affordability.toUpperCase()}</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal!.ingredients.map((ingredient: any) => (
				<ListItem key={ingredient}>{ingredient}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal!.steps.map((step: any) => (
				<ListItem key={step}>{step}</ListItem>
			))}
		</ScrollView>
	);
};
export const MealDetailScreenOptions = (navigationData: any) => {
	const { mealTitle, isFav } = navigationData.route.params!;
	console.log("Favorite", isFav);
	return {
		title: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName={isFav ? "ios-star" : "ios-star-outline"}
					onPress={() => {
						navigationData.route.params.toggleFav();
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
