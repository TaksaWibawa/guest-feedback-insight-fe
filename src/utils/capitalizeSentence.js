export const capitalizeSentence = (sentence) => {
	if (sentence === 0) return "";

	sentence = sentence.replace(/-/g, " ");

	const words = sentence.split(" ");

	const capitalizedWords = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	return capitalizedWords.join(" ");
};
