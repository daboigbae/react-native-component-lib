export interface FormInputType {
	type?: "email" | "password" | "text";
	label?: string;
	error?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	placeholderTextColor?: string;
	editable?: boolean;
}

export interface optionType {
	label?: string;
	placeholder?: string;
	autoCapitalize?: "none" | "sentences" | "words" | "characters";
	keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
	secureTextEntry?: boolean;
}
