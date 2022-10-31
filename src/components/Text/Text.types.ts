export interface TextType {
	text: string;
	textColor?: [{ color?: string | undefined }];
	textAlign: "left" | "center" | "right";
	type?: "title" | "subtitle";
	onPress?: () => void;
	children?: React.ReactNode;
}
