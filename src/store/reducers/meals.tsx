import { MEALS } from "../../data/category-data";
import Meal from "../../models/meal";
import { TOGGLE_FAVORITE } from "../actions/MealActions";

export type appState = {
	meals: any;
	filteredMeals: any;
	favouriteMeals: any;
};

export const initialAppState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favouriteMeals: [],
};

type Action = { type: string; payload: string };
const mealsReducer = (state: appState = initialAppState, action: Action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favouriteMeals.findIndex(
				(meal: Meal) => meal.id === action.payload
			);

			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favouriteMeals];
				updatedFavMeals.splice(existingIndex, 1);
				return { ...state, favouriteMeals: updatedFavMeals };
			} else {
				const meal = state.meals.find(
					(meal: Meal) => meal.id === action.payload
				);

				return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
			}
		default:
			return state;
	}
};

export default mealsReducer;
