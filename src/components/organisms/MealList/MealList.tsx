import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Meal from "../../../models/meal";
import { appState } from "../../../store/reducers/meals";
import MealItem from "../../molecules/MealItem/MealItem";

export type MealListProps = {
	navigation: NavigationProp<any>;
	route?: RouteProp<any>;
	listData: any;
};
const MealList: React.FC<MealListProps> = ({ navigation, route, listData }) => {
	const favMeals = useSelector<appState, appState["favouriteMeals"]>(
		state => state.meals.favouriteMeals
	);

	const renderMealItem = (itemData: any) => {
		const isFavorite = favMeals.some(
			(meal: Meal) => meal.id === itemData.item.id
		);
		console.log("MealList-Fav", isFavorite);

		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					navigation.navigate("MealDetail", {
						mealId: itemData.item.id,
						mealTitle: itemData.item.title,
						isFav: isFavorite,
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList
				data={listData}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: "100%" }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
});

export default MealList;
