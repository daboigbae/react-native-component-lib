import React, { useState } from "react";

import {
	View,
	Text,
	TextInput as FormInput,
	TextInputProps,
	StyleSheet
} from "react-native";
import Error from "../Error/Error";

import { FormInputType } from "./TextInput.types";
import { generateOptions } from "./TextInput.utils";

const TextInput: React.FC<FormInputType & TextInputProps> = ({
	type,
	label,
	value,
	onChangeText,
	placeholder,
	placeholderTextColor,
	autoCapitalize,
	onBlur,
	editable,
	error
}) => {
	const [input, setInput] = useState(value);

	const [secureEntry, setSecureEntry] = useState(type === "password");
	const secureEntryLabel = secureEntry ? "Show" : "Hide";

	const textInputOptions = generateOptions({
		type,
		label,
		placeholder,
		autoCapitalize
	});

	const handleTextChange = (text: string) => {
		setInput(text);
		onChangeText && onChangeText(text);
	};

	const passwordOnPress = () => setSecureEntry(!secureEntry);

	return (
		<View style={style.container}>
			<Text style={style.label}>{textInputOptions?.label}</Text>
			<View style={style.inputContainer}>
				<FormInput
					placeholderTextColor={placeholderTextColor}
					style={style.input}
					onChangeText={handleTextChange}
					value={input}
					onBlur={onBlur}
					editable={editable}
					secureTextEntry={secureEntry}
					{...textInputOptions}
				/>
				{type === "password" && (
					<Text onPress={passwordOnPress} style={style.secureEntryButtonLabel}>
						{secureEntryLabel}
					</Text>
				)}
			</View>
			<Error error={error} />
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		paddingVertical: 8,
		alignItems: "flex-start",
	},
	label: {
		fontWeight: "700",
		fontSize: 12,
		color: "#4A5568",
		height: 14,
		marginLeft: 4,
		marginBottom: 4
	},
	inputContainer: {
		height: 52,
		width: "100%",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 8,
		borderColor: "#E2E8F0",
		borderWidth: 2
	},
	input: {
		height: 52,
		flex: 1,
		paddingHorizontal: 16
	},
	secureEntryButtonLabel: {
		position: "absolute",
		right: 16,
		color: "#3182CE",
		fontSize: 14,
		fontWeight: "500"
	}
});
export default TextInput;
