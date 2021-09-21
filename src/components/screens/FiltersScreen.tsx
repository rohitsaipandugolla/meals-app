import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, Platform, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../../constants/Color";
import HeaderButton from "../atoms/HeaderButton/HeaderButton";
export type FilterScreenProps = {
	navigation: NavigationProp<any>;
	route: RouteProp<any>;
};
const FilterSwitch = (props: any) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				// trackColor={{ true: Colors.primaryColor }}
				thumbColor={Colors.primaryColor}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation, route }) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			isVegetarian: isVegetarian,
		};

		console.log(appliedFilters);
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				label="Gluten-free"
				state={isGlutenFree}
				onChange={(newValue: boolean) => setIsGlutenFree(newValue)}
			/>
			<FilterSwitch
				label="Lactose-free"
				state={isLactoseFree}
				onChange={(newValue: boolean) => setIsLactoseFree(newValue)}
			/>
			<FilterSwitch
				label="Vegan"
				state={isVegan}
				onChange={(newValue: boolean) => setIsVegan(newValue)}
			/>
			<FilterSwitch
				label="Vegetarian"
				state={isVegetarian}
				onChange={(newValue: boolean) => setIsVegetarian(newValue)}
			/>
		</View>
	);
};
export const FilterScreenOptions = (navigationData: any) => {
	return {
		headerTitle: "Filtered",
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
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Save"
					iconName="ios-save"
					onPress={
						navigationData.route.params && navigationData.route.params.save
					}
				/>
			</HeaderButtons>
		),
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		margin: 20,
		textAlign: "center",
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 15,
	},
});

export default FilterScreen;
