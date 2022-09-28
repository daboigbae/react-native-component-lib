import React, { useState } from "react"; 

import { 
	View,
	Text,
	TextInput,
	TextInputProps,
} from "react-native";
import Error from "../Error/Error";

import { FormInputType } from "./TextInput.types";
import { generateOptions } from "./TextInput.utils";

const FormInput: React.FC<FormInputType & TextInputProps> = ({
	type,
	label,
	onChangeText,
	placeholder, 
	autoCapitalize,
	onBlur, 
	editable, 
	error
}) => {
	const [value, setValue] = useState(""); 

	const [secureEntry, setSecureEntry] = useState(type==='password'); 
	const secureEntryLabel = secureEntry ? 'Show' : 'Hide'; 
	
	const textInputOptions = generateOptions({
		type, 
		label, 
		placeholder, 
		autoCapitalize
	}); 

	const handleTextChange = (text: string) => {
		setValue(text);
		onChangeText && onChangeText(text);
	};

	const renderLabel = () =>  
		<View className="h-4 w-full mb-2">
			<Text className="font-bold text-sm text-gray-700">{textInputOptions?.label}</Text>
		</View>

	const passwordOnPress = () => setSecureEntry(!secureEntry);
	
	return (
		<View className="w-full align-top">
			{renderLabel()}
			<View className="w-full h-12 items-center justify-center relative">
				<TextInput
					className="w-full  h-12 px-2 border border-gray-300 rounded-lg"
					onChangeText={handleTextChange}
					value={value}
					onBlur={onBlur}
					editable={editable}
					secureTextEntry={secureEntry}
					{...textInputOptions}
				/>
				{type === 'password' 
					&& <Text onPress={passwordOnPress} className="text-xs text-blue-500 font-bold absolute right-4">{secureEntryLabel}</Text>}
			</View>
			<Error error={error} />
		</View>
	);
};

export default FormInput;