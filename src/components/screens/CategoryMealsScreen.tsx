import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../../data/category-data";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import MealList from "../organisms/MealList/MealList";

export type CategoriesScreenProps = {
	navigation: NavigationProp<any>;
	route: RouteProp<any>;
};
const CategoryMealsScreen: React.FC<CategoriesScreenProps> = ({
	route,
	navigation,
}) => {
	const { categoryId } = route.params!;

	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(categoryId) >= 0
	);
	return <MealList listData={displayedMeals} navigation={navigation} />;
};
export const CategoryMealsScreenOptions = (navigationData: any) => {
	const categoryId = navigationData.route.params.categoryId;
	const selectedCategory = CATEGORIES.find(cat => cat.id == categoryId);

	return {
		title: selectedCategory?.title,
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoryMealsScreen;
