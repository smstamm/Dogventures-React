const palette = {
	primary1Color: "#FF9900",
	textColor: "#FFF"
}

const typography = {
	fontWeightMedium: "400",
	fontWeightLight: "300"
}

export default {
	palette: {
		primary1Color: "#FF9900",
		primary1: palette.primary1Color,
		textColor: palette.textColor
	},
	typography: {
		fontWeightMedium: typography.fontWeightMedium,
		fontWeightLight: typography.fontWeightLight
	},
	appBar: {
		color: palette.primary1Color
	},
	flatButton: {
		textColor: palette.textColor,
		fontWeight: typography.fontWeightLight
	}
};