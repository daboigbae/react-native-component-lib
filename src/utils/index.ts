export const getAvatarColor = () => {
	return "hsla(" + ~~(360 * Math.random()) + "," + "70%," + "80%,1)";
};

export const getAvatarInitials = (name?: string) => {
	let parts = name?.split(" ");
	let initials = "";

	if (parts) {
		for (var i = 0; i < parts?.length; i++) {
			if (parts?.[i].length > 0 && parts?.[i] !== "") {
				initials += parts?.[i][0];
			}
		}
	}
	return initials;
};