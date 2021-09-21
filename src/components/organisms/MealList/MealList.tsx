import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../../molecules/MealItem/MealItem";

export type MealListProps = {
	navigation: NavigationProp<any>;
	route?: RouteProp<any>;
	listData: any;
};
const MealList: React.FC<MealListProps> = ({ navigation, route, listData }) => {
	const renderMealItem = (itemData: any) => {
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
