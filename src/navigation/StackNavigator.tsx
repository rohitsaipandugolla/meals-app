import * as React from "react";
import CategoriesScreen, {
	CategoriesScreenOptions,
} from "../components/screens/CategoriesScreen";
import CategoryMealsScreen, {
	CategoryMealsScreenOptions,
} from "../components/screens/CategoryMealsScreen";
import MealDetailScreen, {
	MealDetailScreenOptions,
} from "../components/screens/MealDetailScreen";
import Colors from "../constants/Color";
import { createStackNavigator } from "@react-navigation/stack";
import FavouritesScreen, {
	FavouritesScreenOptions,
} from "../components/screens/FavoritesScreen";
import FilterScreen, {
	FilterScreenOptions,
} from "../components/screens/FiltersScreen";

const Stack = createStackNavigator();

export const MealsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.primaryColor,
				},
				headerTintColor: "white",
				headerTitleStyle: {
					fontFamily: "open-sans",
					fontWeight: "normal",
				},
			}}
		>
			<Stack.Screen
				name="Categories"
				component={CategoriesScreen}
				options={CategoriesScreenOptions}
			/>
			<Stack.Screen
				name="CategoryMeals"
				component={CategoryMealsScreen}
				options={CategoryMealsScreenOptions}
			/>
			<Stack.Screen
				name="MealDetail"
				component={MealDetailScreen}
				options={MealDetailScreenOptions}
			/>
		</Stack.Navigator>
	);
};
export const FavNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.primaryColor,
				},
				headerTintColor: "white",
				headerTitleStyle: {
					fontFamily: "open-sans",
					fontWeight: "normal",
				},
			}}
		>
			<Stack.Screen
				name="Favourites Screen"
				component={FavouritesScreen}
				options={FavouritesScreenOptions}
			/>
			<Stack.Screen
				name="MealDetail"
				component={MealDetailScreen}
				options={MealDetailScreenOptions}
			/>
		</Stack.Navigator>
	);
};

export const FilterNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.primaryColor,
				},
				headerTintColor: "white",
				headerTitleStyle: {
					fontFamily: "open-sans",
					fontWeight: "normal",
				},
			}}
		>
			<Stack.Screen
				name="Filters"
				component={FilterScreen}
				options={FilterScreenOptions}
			/>
		</Stack.Navigator>
	);
};
export const StackNavigators = {
	FilterNavigator,
	MealsNavigator,
	FavNavigator,
};
