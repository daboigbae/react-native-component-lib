import React, { useCallback } from "react";
import {
	Animated,
	Image as RNImage,
	ImageLoadEventData,
	StyleSheet,
	View,
	Text,
	NativeSyntheticEvent
} from "react-native";

import { ImageProps } from "./Image.types";

const Image: React.FC<ImageProps> = ({
	PlaceholderContent,
	ImageComponent = RNImage,
	transition,
	transitionDuration,
	onLoad,
	...props
}) => {
	const placeholderOpacity = React.useRef(new Animated.Value(1));

	const onLoadHandler = useCallback(
		(event: NativeSyntheticEvent<ImageLoadEventData>) => {
			if (transition) {
				Animated.timing(placeholderOpacity.current, {
					toValue: 0,
					duration: transitionDuration,
					useNativeDriver: true
				}).start();
			} else {
				placeholderOpacity.current.setValue(0);
			}
			onLoad?.(event);
		},
		[transition, transitionDuration, onLoad]
	);

	const hasImage = Boolean(props.source);

	return (
		<View accessibilityIgnoresInvertColors={true} style={styles.container}>
			<ImageComponent
				{...props}
				{...{ transition, transitionDuration }}
				onLoad={onLoadHandler}
				style={StyleSheet.absoluteFill}
			/>
			<Animated.View
				pointerEvents={hasImage ? "none" : "auto"}
				accessibilityElementsHidden={hasImage}
				importantForAccessibility={hasImage ? "no-hide-descendants" : "yes"}
				style={[
					StyleSheet.absoluteFillObject,
					{
						opacity: hasImage ? placeholderOpacity.current : 1
					}
				]}
			>
				<View style={styles.placeholder}>
					{React.isValidElement(PlaceholderContent)
						? PlaceholderContent
						: PlaceholderContent && <Text>{PlaceholderContent}</Text>}
				</View>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		height: "100%",
		width: "100%",
		position: "relative",
		overflow: "hidden"
	},
	placeholder: {
		backgroundColor: "white",
		alignItems: "center",
		width: "100%",
		height: "100%",
		justifyContent: "center"
	}
});

export default Image;
