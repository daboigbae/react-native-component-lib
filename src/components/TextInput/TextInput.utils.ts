import { optionType } from "./TextInput.types"

export const generateOptions = ({
	type, 
	label, 
	placeholder, 
	autoCapitalize
}): optionType => {
	let textInputOptions: optionType = {}

	if(type === 'email'){
		textInputOptions = {
			label: 'Email', 
			placeholder:"Email i.e. welcome@hello.com", 
			autoCapitalize: 'none',
			keyboardType:"email-address",
		}
	} else if (type === 'password'){
		textInputOptions = { 
			label: 'Password', 
			placeholder:"Password", 
			keyboardType:"default", 
			autoCapitalize: 'none',
		}
	} else {
		textInputOptions = {
			label, 
			placeholder,
			autoCapitalize
		}
	}	

	return textInputOptions;
}