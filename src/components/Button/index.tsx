import React from "react"; 

import { 
	Text, 
	View, 
} from "react-native";

import PressableOpacity from "../PressableOpacity";

import { 
	ButtonType, 
	OutlineButtonType, 
	PrimaryButtonType, 
	TextButtonType 
} from "./types";

const BASE_BUTTON_CLASS_NAME = 'w-full p-4 items-center justify-center rounded-md '

const Button: React.FC<ButtonType> & { 
	Primary: React.FC<PrimaryButtonType>;
	Outline: React.FC<OutlineButtonType>; 
	Text: React.FC<TextButtonType>;
} = ({
	label, 
	onPress, 
	buttonClassName = "w-full p-4 items-center justify-center rounded-md bg-pink-500", 
	textClassName = "text-white",
}) => {
	return (
		<PressableOpacity onPress={onPress}>
			<View className={buttonClassName}>
				<Text className={textClassName}>{label}</Text>
			</View>
		</PressableOpacity>
	);
};

const Primary: React.FC<PrimaryButtonType> = ({backgroundColor, textColor, label, onPress}) => 
	<Button 
		label={label}
		onPress={onPress}
		buttonClassName={BASE_BUTTON_CLASS_NAME.concat(backgroundColor)} 
		textClassName={textColor}/>;

const Outline: React.FC<OutlineButtonType> = ({borderColor, textColor, label, onPress}) => 
	<Button 
		label={label}
		onPress={onPress}
		buttonClassName={BASE_BUTTON_CLASS_NAME.concat("bg-transparent border-2 ").concat(borderColor)} 
		textClassName={textColor}/>;

const TextButton: React.FC<TextButtonType> = ({label, textColor, onPress}) => 
	<Button
		label={label}
		onPress={onPress}
		buttonClassName={BASE_BUTTON_CLASS_NAME.concat("bg-transparent")} 
		textClassName={textColor}/>;

Button.Primary = Primary; 
Button.Outline = Outline;
Button.Text = TextButton; 

export default Button;