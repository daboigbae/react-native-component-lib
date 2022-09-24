import React, { useState } from "react"; 

import { 
	View,
	Text,
	TextInput,
	TextInputProps,
} from "react-native";

interface FormInputType {
	label?: string;
	error?: string;
	onChangeText?: (text: string) => void;
	editable?: boolean;
}
const FormInput: React.FC<FormInputType & TextInputProps> & {
	Email: React.FC<FormInputType>;
	Password: React.FC<FormInputType>;
} = ({
	label,
	onChangeText,
	placeholder, 
	autoCapitalize,
	secureTextEntry,
	keyboardType,
	onBlur, 
	editable, 
	error
}) => {

	const [value, setValue] = useState(""); 

	const handleChange = (text: string) => {
		setValue(text);
		onChangeText && onChangeText(text);
	};

	const renderLabel = () =>  (
		<View className="h-4 w-full mb-2">
			<Text className="font-bold text-sm text-gray-700">{label}</Text>
		</View>
	);

	const renderErrorMessage = () => (
		<View className="w-full mb-2">
			{error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
		</View>
	)

	return (
		<View className="w-full align-top">
			{renderLabel()}
			<TextInput
				className="w-full h-12 px-2 border border-gray-300 rounded-lg"
				secureTextEntry={secureTextEntry}
				autoCapitalize={autoCapitalize}
				keyboardType={keyboardType}
				onChangeText={handleChange}
				value={value}
				placeholder={placeholder}
				onBlur={onBlur}
				editable={editable}
			/>
			{renderErrorMessage()}
		</View>
	);
};

const Email: React.FC<FormInputType> = ({
	onChangeText, 
	editable, 
	error
}) => 
	<FormInput
		label="Email"
		onChangeText={onChangeText}
		placeholder="Email i.e. welcome@hello.com"
		keyboardType={"email-address"}
		editable={editable}
		error={error}/>;

const Password: React.FC<FormInputType> = ({
	onChangeText, 
	editable, 
	error
}) => 
	<FormInput
		label="Password"
		onChangeText={onChangeText}
		placeholder="Password"
		keyboardType="default"
		autoCapitalize="none"
		secureTextEntry={true}
		editable={editable}
		error={error}/>;

FormInput.Email = Email; 
FormInput.Password = Password;

export default FormInput;