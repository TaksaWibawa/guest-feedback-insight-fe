import { capitalize } from 'lodash';

export const capitalizeSentence = (sentence) => {
	if (!sentence) return '';

	const sentences = sentence.split('. ');

	const capitalizedSentences = sentences.map((sentence) => capitalize(sentence));

	const capitalizedText = capitalizedSentences.join('. ');

	return capitalizedText;
};
