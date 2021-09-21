import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterNavigator } from "./StackNavigator";
import { TabNavigator } from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
					drawerLabelStyle: { fontFamily: "open-sans" },
				}}
			>
				<Drawer.Screen
					name="MealsDrawer"
					component={TabNavigator}
					options={{ drawerLabel: "Meals" }}
				/>
				<Drawer.Screen
					name="FiltersDrawer"
					component={FilterNavigator}
					options={{ drawerLabel: "Filters" }}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
