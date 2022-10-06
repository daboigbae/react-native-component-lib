import React from "react";

export interface CardType {
	type?: "elevated" | "outlined" | undefined;
	cardColor?: [{ backgroundColor?: string | undefined }];
	imageURL?: string;
	children?: React.ReactNode;
}
