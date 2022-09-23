import { StyledComponent } from "nativewind";
import React from "react"; 

import { 
	Text, 
	View, 
} from "react-native";
import Loader from "../Loader";

import PressableOpacity from "../PressableOpacity";
import IconButton from "./IconButton";

import { 
	ButtonType, 
	IconButtonType, 
	OutlineButtonType, 
	TextButtonType 
} from "./types";

const BASE_BUTTON_CLASS_NAME = 'w-full px-4 items-center justify-center rounded-md h-14 '

const Button: React.FC<ButtonType> & { 
	Outline: React.FC<OutlineButtonType>; 
	Text: React.FC<TextButtonType>;
	Icon: React.FC<IconButtonType>;
} = ({
	label, 
	onPress, 
	buttonColor = "bg-gray-500", 
	textColor = "text-white",
	disabled,
	isLoading
}) => {
	return (
		<PressableOpacity onPress={onPress} disabled={disabled || isLoading}>
			<View className={BASE_BUTTON_CLASS_NAME.concat(disabled ? " opacity-50 " : " opacity-100 ").concat(buttonColor)}>
				{ isLoading ? 
					<StyledComponent 
						className={textColor}
				 		component={({style}: any) => <Loader color={style?.[0]?.color || "#fff"}/>}
						/>
					: <Text className={textColor}>{label}</Text> 
				}
			</View>
		</PressableOpacity>
	);
};

const Outline: React.FC<OutlineButtonType> = ({
	buttonColor, 
	textColor, 
	label, 
	onPress, 
	disabled = false,
	isLoading = false
}) => 
	<Button 
		label={label}
		onPress={onPress}
		buttonColor={" bg-transparent border-2 ".concat(buttonColor)} 
		textColor={textColor}
		disabled={disabled}
		isLoading={isLoading}/>;

const TextButton: React.FC<TextButtonType> = ({
	label, 
	textColor,
	onPress, 
	disabled = false,
	isLoading = false
	}) => 
	<Button
		label={label}
		onPress={onPress}
		buttonColor={"bg-transparent"} 
		textColor={textColor}
		disabled={disabled}
		isLoading={isLoading}/>;

Button.Outline = Outline;
Button.Text = TextButton; 
Button.Icon = IconButton;

export default Button;