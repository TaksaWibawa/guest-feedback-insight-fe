export const addDotsToNumber = (number) => {
	if (number >= 1000000) {
		return (number / 1000000).toFixed(1) + "M";
	} else {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
};
