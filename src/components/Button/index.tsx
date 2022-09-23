import React from "react"; 

import { 
	Text, 
	View, 
} from "react-native";

import PressableOpacity from "../PressableOpacity";

import { 
	ButtonType, 
	IconButtonType, 
	OutlineButtonType, 
	PrimaryButtonType, 
	TextButtonType 
} from "./types";

const BASE_BUTTON_CLASS_NAME = 'w-full p-4 items-center justify-center rounded-md '

const Button: React.FC<ButtonType> & { 
	Primary: React.FC<PrimaryButtonType>;
	Outline: React.FC<OutlineButtonType>; 
	Text: React.FC<TextButtonType>;
	Icon: React.FC<IconButtonType>;
} = ({
	label, 
	onPress, 
	buttonClassName = "w-full h-14 px-4 items-center justify-center rounded-md bg-pink-500 ", 
	textClassName = "text-white",
	disabled = false,
}) => {
	
	return (
		<PressableOpacity onPress={onPress} disabled={disabled}>
			<View className={buttonClassName.concat(disabled ? " opacity-50" : " opacity-100")}>
				<Text className={textClassName}>{label}</Text>
			</View>

		</PressableOpacity>
	);
};

const Primary: React.FC<PrimaryButtonType> = ({
	backgroundColor, 
	textColor, 
	label, 
	onPress, 
	disabled = false,
}) => 
	<Button 
		label={label}
		onPress={onPress}
		buttonClassName={BASE_BUTTON_CLASS_NAME.concat(backgroundColor)} 
		textClassName={textColor}
		disabled={disabled}/>;

const Outline: React.FC<OutlineButtonType> = ({
	borderColor, 
	textColor, 
	label, 
	onPress, 
	disabled = false,
}) => 
	<Button 
		label={label}
		onPress={onPress}
		buttonClassName={BASE_BUTTON_CLASS_NAME.concat("bg-transparent border-2 ").concat(borderColor)} 
		textClassName={textColor}
		disabled={disabled}/>;

const TextButton: React.FC<TextButtonType> = ({
	label, 
	textColor,
	onPress, 
	disabled = false,
	}) => 
	<Button
		label={label}
		onPress={onPress}
		buttonClassName={BASE_BUTTON_CLASS_NAME.concat("bg-transparent")} 
		textClassName={textColor}
		disabled={disabled}/>;

const IconButton: React.FC<IconButtonType> = ({
	backgroundColor = "bg-pink-500", 
	textColor, 
	onPress, 
	label, 
	leftIcon,
	rightIcon, 
	disabled = false,
}) => (
	<PressableOpacity onPress={onPress} disabled={disabled}>
		<View className={backgroundColor.concat(" flex-row justify-between w-full h-14 px-4 items-center rounded-md").concat(disabled ? " opacity-50" : " opacity-100")}>
			<View className="w-4">{leftIcon && leftIcon}</View>
			<View className="bg-black">
				<Text className={textColor}>{label}</Text>
			</View>
			<View className="w-4">{rightIcon && rightIcon}</View>
		</View>
	</PressableOpacity>
)

Button.Primary = Primary; 
Button.Outline = Outline;
Button.Text = TextButton; 
Button.Icon = IconButton;

export default Button;