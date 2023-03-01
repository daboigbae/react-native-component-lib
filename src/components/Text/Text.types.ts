export interface TextType {
	textColor?: [{ color?: string | undefined }];
	type?: "title" | "subtitle";
	onPress?: () => void;
	children?: React.ReactNode | string;
}
