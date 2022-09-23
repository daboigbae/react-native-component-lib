import { StyledComponent } from 'nativewind';
import React from 'react'; 
import { View, Text } from 'react-native';
import Loader from '../Loader';

import PressableOpacity from '../PressableOpacity';

import { 
	IconButtonType, 
} from "./types";

const IconButton: React.FC<IconButtonType> = ({
	backgroundColor = "bg-pink-500", 
	textColor, 
	onPress, 
	label, 
	leftIcon,
	rightIcon, 
	disabled = false,
	isLoading= false
}) => {

	const renderButtonContent = () => (
		<>
			<View className="w-4">{leftIcon && leftIcon}</View>
			<View>
				<Text className={textColor}>{label}</Text>
			</View>
			<View className="w-4">{rightIcon && rightIcon}</View>
		</>
	)

	const renderLoader = () => (
		<StyledComponent 
			className={textColor}
			component={({style}: any) => <Loader color={style?.[0]?.color || "#fff"}/>}
			/>
	)
	
	return (
		<PressableOpacity onPress={onPress} disabled={disabled}>
			<View className={backgroundColor.concat(" flex-row justify-between w-full h-14 px-4 items-center rounded-md").concat(disabled ? " opacity-50" : " opacity-100")}>
				{ isLoading ? renderLoader(): renderButtonContent() }
			</View>
		</PressableOpacity>
	)
}

export default IconButton;