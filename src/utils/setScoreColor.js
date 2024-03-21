export const setScoreColor = (score, startColor = '#c14444', targetColor = '#64bb3e') => {
	const startColorHSL = hexToHSL(startColor);
	const targetColorHSL = hexToHSL(targetColor);

	const interpolatedHSL = {
		h: (1 - score) * startColorHSL.h + score * targetColorHSL.h,
		s: (1 - score) * startColorHSL.s + score * targetColorHSL.s,
		l: (1 - score) * startColorHSL.l + score * targetColorHSL.l,
	};

	return `hsl(${interpolatedHSL.h}, ${interpolatedHSL.s}%, ${interpolatedHSL.l}%)`;
};

function hexToHSL(hex) {
	hex = hex.substring(1);

	const r = parseInt(hex.substring(0, 2), 16) / 255;
	const g = parseInt(hex.substring(2, 4), 16) / 255;
	const b = parseInt(hex.substring(4, 6), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	let hue;
	if (max === min) {
		hue = 0;
	} else if (max === r) {
		hue = (60 * ((g - b) / (max - min))) % 360;
	} else if (max === g) {
		hue = 60 * ((b - r) / (max - min)) + 120;
	} else {
		hue = 60 * ((r - g) / (max - min)) + 240;
	}

	if (hue < 0) {
		hue += 360;
	}

	const lightness = (max + min) / 2;

	let saturation;
	if (max === min) {
		saturation = 0;
	} else if (lightness <= 0.5) {
		saturation = (max - min) / (2 * lightness);
	} else {
		saturation = (max - min) / (2 - 2 * lightness);
	}

	return { h: hue, s: saturation * 100, l: lightness * 100 };
}
