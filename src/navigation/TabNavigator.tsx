import * as React from "react";
import Colors from "../constants/Color";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FavNavigator, MealsNavigator } from "./StackNavigator";

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
	return (
		<Tab.Navigator
			activeColor={Colors.whiteColor}
			screenOptions={{}}
			barStyle={{ backgroundColor: Colors.primaryColor }}
			shifting={true}
		>
			<Tab.Screen
				name="Meals"
				component={MealsNavigator}
				options={{
					tabBarIcon: tabInfo => {
						return (
							<Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
						);
					},
				}}
			/>
			<Tab.Screen
				name="Favourites"
				component={FavNavigator}
				options={{
					tabBarLabel: "Favorites!",
					tabBarColor: Colors.accentColor,
					tabBarIcon: tabInfo => {
						return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};
