export interface ButtonType {
	label: string;
	onPress: () => void;
	buttonClassName?: string;
	textClassName?: string;
}

export interface PrimaryButtonType { 
	backgroundColor?: string;
	textColor?: string;
	label: string;
	onPress: () => void;
}

export interface OutlineButtonType {
	borderColor: string;
	textColor: string;
	label: string;
	onPress: () => void;
}

export interface TextButtonType {
	textColor?: string;
	label: string;
	onPress: () => void;
}