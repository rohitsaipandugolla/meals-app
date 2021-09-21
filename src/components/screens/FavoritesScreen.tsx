import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../../data/category-data";
import HeaderButton from "../atoms/HeaderButton/HeaderButton";
import MealList from "../organisms/MealList/MealList";

export type FavouritesScreenProps = {
	navigation: NavigationProp<any>;
	route?: RouteProp<any>;
};

const FavouritesScreen: React.FC<FavouritesScreenProps> = ({
	navigation,
	route,
}) => {
	const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
	return <MealList listData={favMeals} navigation={navigation} />;
};

export const FavouritesScreenOptions = (navigationData: any) => {
	return {
		headerTitle: "Your Favorites",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navigationData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default FavouritesScreen;
