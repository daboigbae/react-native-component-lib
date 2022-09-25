export interface ButtonType {
	label: string, 
	buttonColor?: [{backgroundColor?: string | undefined}]; 
	textColor?: object;
	textStyle?: object,
	onPress: () => void;
	type?: 'text' | 'outlined' | 'primary'; 
}
