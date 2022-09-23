import React from "react"; 

import { 
	View, 
} from "react-native";
import PropTypes from "prop-types";

const ItemSeparator = ({borderStyle}) => {
	
	return (
		<View className={borderStyle ? borderStyle : "h-2"} />
	);
};

ItemSeparator.propTypes = {
	borderStyle: PropTypes.string,
};


export default ItemSeparator;