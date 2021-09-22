import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import React from "react";

import MainNavigator from "./src/navigation/MainNavigator";
import mealsReducer from "./src/store/reducers/meals";
import { useState } from "react";

const rootReducer = combineReducers({
	meals: mealsReducer,
});
const store = createStore(rootReducer);
const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);
	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err: Error) => console.log(err)}
			/>
		);
	}
	return (
		<Provider store={store}>
			<MainNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
