import { ChartWordCloud } from '../../chart';
import { CardBase } from '../card-base';

const OPTIONS = [
	{
		value: 'amenities',
		label: 'Amenities',
	},
	{
		value: 'atmosphere',
		label: 'Atmosphere',
	},
	{
		value: 'pricing',
		label: 'Pricing',
	},
	{
		value: 'location',
		label: 'Location',
	},
	{
		value: 'fnb',
		label: 'FnB',
	},
	{
		value: 'general',
		label: 'General',
	},
	{
		value: 'service',
		label: 'Service',
	},
	{
		value: 'room',
		label: 'Room',
	},
];

const words = [
	{
		text: 'Service is Outstanding',
		value: 57,
	},
	{
		text: 'Atmosphere is Top-notch',
		value: 59,
	},
	{
		text: 'The Outstanding FnB',
		value: 34,
	},
	{
		text: 'Such a Outstanding FnB',
		value: 82,
	},
	{
		text: 'What a Good Atmosphere',
		value: 23,
	},
	{
		text: 'Such a Fantastic Amenities',
		value: 83,
	},
	{
		text: 'What a Amazing FnB',
		value: 47,
	},
	{
		text: 'What a Outstanding FnB',
		value: 26,
	},
	{
		text: 'The Fantastic General',
		value: 28,
	},
	{
		text: 'General is Great',
		value: 70,
	},
	{
		text: 'The Amazing General',
		value: 31,
	},
	{
		text: 'Such a Good Room',
		value: 14,
	},
	{
		text: 'The Wonderful FnB',
		value: 26,
	},
	{
		text: 'What a Excellent Location',
		value: 22,
	},
	{
		text: 'Room is Good',
		value: 72,
	},
	{
		text: 'Room is Great',
		value: 40,
	},
	{
		text: 'Such a Good General',
		value: 93,
	},
	{
		text: 'What a Amazing Service',
		value: 18,
	},
	{
		text: 'What a Excellent General',
		value: 26,
	},
	{
		text: 'Atmosphere is Great',
		value: 86,
	},
	{
		text: 'Amenities is Great',
		value: 75,
	},
	{
		text: 'What a Top-notch Amenities',
		value: 27,
	},
	{
		text: 'The Good Room',
		value: 60,
	},
	{
		text: 'General is Fantastic',
		value: 13,
	},
	{
		text: 'What a Superb Atmosphere',
		value: 84,
	},
	{
		text: 'Such a Outstanding FnB',
		value: 52,
	},
	{
		text: 'What a Good General',
		value: 48,
	},
	{
		text: 'Such a Good FnB',
		value: 16,
	},
	{
		text: 'The First-rate Service',
		value: 90,
	},
	{
		text: 'FnB is Superb',
		value: 45,
	},
	{
		text: 'Such a Excellent Location',
		value: 88,
	},
	{
		text: 'Such a Wonderful Room',
		value: 63,
	},
	{
		text: 'Such a First-rate Room',
		value: 85,
	},
	{
		text: 'The Superb FnB',
		value: 93,
	},
	{
		text: 'Service is Superb',
		value: 90,
	},
	{
		text: 'Such a Great Pricing',
		value: 48,
	},
	{
		text: 'Service is Good',
		value: 42,
	},
	{
		text: 'What a Good Amenities',
		value: 58,
	},
	{
		text: 'The Outstanding Pricing',
		value: 63,
	},
	{
		text: 'The Top-notch Atmosphere',
		value: 48,
	},
	{
		text: 'The Great General',
		value: 13,
	},
	{
		text: 'The Outstanding Atmosphere',
		value: 43,
	},
	{
		text: 'The Excellent Location',
		value: 4,
	},
	{
		text: 'Amenities is Top-notch',
		value: 24,
	},
	{
		text: 'FnB is Top-notch',
		value: 13,
	},
	{
		text: 'FnB is Superb',
		value: 13,
	},
	{
		text: 'Location is Wonderful',
		value: 11,
	},
	{
		text: 'What a Fantastic FnB',
		value: 39,
	},
	{
		text: 'Such a Great Location',
		value: 52,
	},
	{
		text: 'The Fantastic Service',
		value: 92,
	},
	{
		text: 'The First-rate Atmosphere',
		value: 63,
	},
	{
		text: 'Such a Top-notch Room',
		value: 14,
	},
	{
		text: 'The Fantastic Service',
		value: 6,
	},
	{
		text: 'Such a Wonderful Room',
		value: 89,
	},
	{
		text: 'The Wonderful Amenities',
		value: 22,
	},
	{
		text: 'Atmosphere is Excellent',
		value: 82,
	},
	{
		text: 'The Superb FnB',
		value: 71,
	},
	{
		text: 'The Excellent Room',
		value: 50,
	},
	{
		text: 'What a Superb Amenities',
		value: 46,
	},
	{
		text: 'Such a Fantastic Pricing',
		value: 50,
	},
	{
		text: 'Such a Wonderful Room',
		value: 92,
	},
	{
		text: 'Amenities is Excellent',
		value: 52,
	},
	{
		text: 'Such a Top-notch FnB',
		value: 44,
	},
	{
		text: 'The Amazing Location',
		value: 59,
	},
	{
		text: 'General is Great',
		value: 64,
	},
	{
		text: 'Such a Top-notch Pricing',
		value: 41,
	},
	{
		text: 'Such a Wonderful Room',
		value: 85,
	},
	{
		text: 'Amenities is Outstanding',
		value: 62,
	},
	{
		text: 'Such a First-rate Atmosphere',
		value: 83,
	},
	{
		text: 'Such a First-rate Atmosphere',
		value: 54,
	},
	{
		text: 'Such a Excellent Atmosphere',
		value: 26,
	},
	{
		text: 'What a Good Amenities',
		value: 84,
	},
	{
		text: 'What a Amazing Pricing',
		value: 49,
	},
	{
		text: 'Such a Amazing Amenities',
		value: 35,
	},
	{
		text: 'The Superb Service',
		value: 22,
	},
	{
		text: 'Such a Superb FnB',
		value: 36,
	},
	{
		text: 'Such a Top-notch Amenities',
		value: 81,
	},
	{
		text: 'The First-rate Room',
		value: 77,
	},
	{
		text: 'The Top-notch Pricing',
		value: 63,
	},
	{
		text: 'The Wonderful Room',
		value: 94,
	},
	{
		text: 'Such a Superb Room',
		value: 33,
	},
	{
		text: 'Such a Excellent General',
		value: 69,
	},
	{
		text: 'The First-rate FnB',
		value: 15,
	},
	{
		text: 'What a Wonderful Atmosphere',
		value: 38,
	},
	{
		text: 'The Outstanding General',
		value: 87,
	},
	{
		text: 'The Superb Amenities',
		value: 81,
	},
	{
		text: 'The Fantastic Location',
		value: 42,
	},
	{
		text: 'The Superb Service',
		value: 9,
	},
	{
		text: 'The Excellent Service',
		value: 33,
	},
	{
		text: 'The Top-notch FnB',
		value: 50,
	},
	{
		text: 'Such a First-rate Room',
		value: 84,
	},
	{
		text: 'Such a Excellent FnB',
		value: 19,
	},
	{
		text: 'Such a Outstanding General',
		value: 7,
	},
	{
		text: 'The Great Location',
		value: 27,
	},
	{
		text: 'Such a Fantastic Pricing',
		value: 49,
	},
	{
		text: 'General is Superb',
		value: 52,
	},
	{
		text: 'What a Wonderful Service',
		value: 71,
	},
	{
		text: 'The Excellent FnB',
		value: 58,
	},
	{
		text: 'The Wonderful Atmosphere',
		value: 25,
	},
	{
		text: 'General is Amazing',
		value: 33,
	},
	{
		text: 'What a Good Room',
		value: 100,
	},
	{
		text: 'Atmosphere is Superb',
		value: 39,
	},
	{
		text: 'What a Amazing Room',
		value: 45,
	},
	{
		text: 'What a Outstanding Service',
		value: 35,
	},
	{
		text: 'The First-rate FnB',
		value: 18,
	},
	{
		text: 'Such a Superb General',
		value: 64,
	},
	{
		text: 'What a Top-notch Atmosphere',
		value: 91,
	},
	{
		text: 'The Excellent General',
		value: 21,
	},
	{
		text: 'What a Superb Location',
		value: 29,
	},
	{
		text: 'Amenities is First-rate',
		value: 77,
	},
	{
		text: 'Such a Amazing Location',
		value: 55,
	},
	{
		text: 'The First-rate FnB',
		value: 40,
	},
	{
		text: 'Such a Good Pricing',
		value: 9,
	},
	{
		text: 'The Wonderful Amenities',
		value: 24,
	},
	{
		text: 'FnB is Amazing',
		value: 56,
	},
	{
		text: 'Such a Excellent Room',
		value: 12,
	},
	{
		text: 'The Excellent Service',
		value: 8,
	},
	{
		text: 'The Fantastic Atmosphere',
		value: 68,
	},
	{
		text: 'Such a Amazing Location',
		value: 57,
	},
	{
		text: 'Such a Amazing Service',
		value: 21,
	},
	{
		text: 'What a Great FnB',
		value: 76,
	},
	{
		text: 'Such a Amazing General',
		value: 87,
	},
	{
		text: 'Such a First-rate FnB',
		value: 37,
	},
	{
		text: 'The Wonderful Amenities',
		value: 62,
	},
	{
		text: 'Such a Good Room',
		value: 93,
	},
	{
		text: 'Such a Great Pricing',
		value: 60,
	},
	{
		text: 'Such a First-rate FnB',
		value: 79,
	},
	{
		text: 'The Superb FnB',
		value: 27,
	},
	{
		text: 'Such a Fantastic General',
		value: 5,
	},
	{
		text: 'What a Wonderful Amenities',
		value: 83,
	},
	{
		text: 'The Amazing Room',
		value: 46,
	},
	{
		text: 'What a Superb Service',
		value: 13,
	},
	{
		text: 'What a Amazing General',
		value: 8,
	},
	{
		text: 'Service is Excellent',
		value: 53,
	},
	{
		text: 'FnB is Great',
		value: 74,
	},
	{
		text: 'What a Amazing FnB',
		value: 29,
	},
	{
		text: 'What a First-rate Room',
		value: 90,
	},
	{
		text: 'Amenities is Good',
		value: 24,
	},
	{
		text: 'Such a Amazing Pricing',
		value: 72,
	},
	{
		text: 'What a First-rate Amenities',
		value: 84,
	},
	{
		text: 'What a Good Amenities',
		value: 30,
	},
	{
		text: 'The Wonderful Location',
		value: 20,
	},
	{
		text: 'Such a Wonderful Room',
		value: 30,
	},
	{
		text: 'General is Excellent',
		value: 29,
	},
	{
		text: 'Such a First-rate General',
		value: 6,
	},
	{
		text: 'Room is Fantastic',
		value: 83,
	},
	{
		text: 'Such a Top-notch Atmosphere',
		value: 44,
	},
	{
		text: 'Such a Wonderful Service',
		value: 55,
	},
	{
		text: 'The Fantastic General',
		value: 45,
	},
	{
		text: 'Atmosphere is First-rate',
		value: 8,
	},
	{
		text: 'The Good Atmosphere',
		value: 19,
	},
	{
		text: 'Service is Wonderful',
		value: 50,
	},
	{
		text: 'Atmosphere is Amazing',
		value: 32,
	},
	{
		text: 'The Superb Location',
		value: 52,
	},
	{
		text: 'General is Amazing',
		value: 17,
	},
	{
		text: 'The Superb Pricing',
		value: 52,
	},
	{
		text: 'What a Amazing FnB',
		value: 82,
	},
	{
		text: 'The First-rate Amenities',
		value: 10,
	},
	{
		text: 'What a Great Amenities',
		value: 57,
	},
	{
		text: 'The First-rate General',
		value: 71,
	},
	{
		text: 'Such a Superb Amenities',
		value: 50,
	},
	{
		text: 'Such a First-rate Location',
		value: 4,
	},
	{
		text: 'What a Wonderful Room',
		value: 32,
	},
	{
		text: 'The Fantastic General',
		value: 10,
	},
	{
		text: 'Such a Good Atmosphere',
		value: 16,
	},
	{
		text: 'What a Wonderful FnB',
		value: 2,
	},
	{
		text: 'Such a Great Atmosphere',
		value: 57,
	},
	{
		text: 'What a Top-notch FnB',
		value: 52,
	},
	{
		text: 'The Amazing Pricing',
		value: 64,
	},
	{
		text: 'What a First-rate FnB',
		value: 57,
	},
	{
		text: 'Pricing is Fantastic',
		value: 9,
	},
	{
		text: 'What a Top-notch Amenities',
		value: 36,
	},
	{
		text: 'Such a Good Atmosphere',
		value: 12,
	},
	{
		text: 'What a Good Atmosphere',
		value: 28,
	},
	{
		text: 'Atmosphere is Wonderful',
		value: 53,
	},
	{
		text: 'Atmosphere is First-rate',
		value: 17,
	},
	{
		text: 'What a Outstanding FnB',
		value: 6,
	},
	{
		text: 'What a First-rate Atmosphere',
		value: 52,
	},
	{
		text: 'Room is First-rate',
		value: 46,
	},
	{
		text: 'The Amazing General',
		value: 32,
	},
	{
		text: 'What a Wonderful Service',
		value: 11,
	},
	{
		text: 'What a First-rate Amenities',
		value: 22,
	},
	{
		text: 'What a Amazing Amenities',
		value: 56,
	},
	{
		text: 'Room is Excellent',
		value: 7,
	},
	{
		text: 'What a Fantastic Location',
		value: 16,
	},
	{
		text: 'FnB is Wonderful',
		value: 33,
	},
	{
		text: 'The Amazing General',
		value: 79,
	},
	{
		text: 'Pricing is First-rate',
		value: 55,
	},
	{
		text: 'Such a Fantastic General',
		value: 61,
	},
	{
		text: 'The Fantastic Atmosphere',
		value: 93,
	},
	{
		text: 'Such a Outstanding General',
		value: 36,
	},
	{
		text: 'Such a Wonderful FnB',
		value: 14,
	},
	{
		text: 'Pricing is Outstanding',
		value: 10,
	},
	{
		text: 'Such a Good Pricing',
		value: 41,
	},
	{
		text: 'What a Excellent Atmosphere',
		value: 31,
	},
	{
		text: 'Such a Wonderful Location',
		value: 61,
	},
	{
		text: 'Amenities is Amazing',
		value: 57,
	},
	{
		text: 'Such a Good Room',
		value: 47,
	},
	{
		text: 'What a Good Service',
		value: 27,
	},
	{
		text: 'The Fantastic General',
		value: 39,
	},
];

const COLORS = ['#1E90FF', '#00BFFF', '#87CEFA', '#4682B4', '#5F9EA0'];

export function CardTopPhrases() {
	return (
		<CardBase
			title={'Most Frequent Phrases'}
			subTitle={`Showing most frequent phrases for ${OPTIONS[0].label}`} // will be changed based on dropdown selection
			filterOptions={OPTIONS}
			propsTitle={{
				textAlign: 'left',
			}}
			propsDropdown={{
				defaultValue: OPTIONS[0],
				onChange: (value) => console.log(value),
				isLoading: false,
			}}
		>
			<ChartWordCloud
				colors={COLORS}
				words={words}
				parentHeight={'15rem'}
			/>
		</CardBase>
	);
}
