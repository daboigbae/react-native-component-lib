import { styled } from "nativewind";
import React from "react";
import {Text, View, StyleSheet} from "react-native";

interface PillType {
	value: string;
	color?: [{backgroundColor?: string | undefined}];
	Icon?: React.FC;
}

const Pill: React.FC<PillType> = ({value, color, Icon}) => {
    return (
        <View
			style={[styles.container, color && {backgroundColor: color?.[0]?.backgroundColor}]}>
           {Icon && (
                <Icon/>
            )}
            <Text style={styles.text}>
					{value}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'gray', 
		alignSelf: "flex-start",
		borderRadius: 12, 
		paddingHorizontal: 8,
		paddingVertical: 4,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 8, 
		flexDirection: "row",
		marginBottom: 8,
	}, 
	text: {
		fontWeight: '500', 
		color: 'white',
	}
})
export default styled(Pill, {
	props: {
		color: true, 
	}
});
