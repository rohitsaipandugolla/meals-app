import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

type TextProps = {
	children: string | number | any;
	style?: object;
	numberOfLines?: number;
};

const Text: React.FC<TextProps> = props => {
	return (
		<RNText
			style={{ ...props.style, ...styles.text }}
			numberOfLines={props.numberOfLines}
		>
			{props.children}
		</RNText>
	);
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans",
	},
});

export default Text;
