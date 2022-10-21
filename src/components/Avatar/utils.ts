export const getAvatarColor = () => {
	return "hsla(" + ~~(360 * Math.random()) + "," + "70%," + "80%,1)";
};

export const getAvatarInitials = (name?: string) => {
	let parts = name?.split(" ");
	let initials = "";
	
	parts?.forEach((part) => (initials += part[0]));
	
	return initials;
};
