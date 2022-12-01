import React from "react";
import { ImageProps as RNImageProps } from "react-native";

export interface ImageProps extends RNImageProps {
	PlaceholderContent?: React.ReactElement;
	ImageComponent?: typeof React.Component;
	transition?: boolean;
	transitionDuration?: number;
}
