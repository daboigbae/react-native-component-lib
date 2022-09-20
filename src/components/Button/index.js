import React from "react"; 

import { 
	Text, 
	View, 
} from "react-native";
import PropTypes from "prop-types";
import PressableOpacity from "../PressableOpacity";

const Button = ({
	label, 
	onPress, 
	buttonClassName = "bg-slate-500", 
	textClassName = "text-white",
}) => {
	return (
		<PressableOpacity onPress={onPress}>
			<View className={"w-full p-4 items-center justify-center rounded-md ".concat(buttonClassName)}>
				<Text className={textClassName}>{label}</Text>
			</View>
		</PressableOpacity>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	buttonClassName: PropTypes.string,
	textClassName: PropTypes.string,
};

Button.Outline = ({borderColor, textColor, label, onPress}) => 
	<Button 
		label={label}
		onPress={onPress}
		buttonClassName={"bg-transparent border-2 ".concat(borderColor)} 
		textClassName={textColor}/>;

Button.Text = ({textColor, label, onPress}) => 
	<Button
		label={label}
		onPress={onPress}
		buttonClassName={"bg-transparent"} 
		textClassName={textColor}/>;

export default Button;