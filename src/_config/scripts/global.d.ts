/* Type definitions */
type CardFormatted = CardUnformatted & {
	handle: string;
	image: string;
};

type CardUnformatted = {
	category: string;
	dropped: string[];
	found: string[];
	id: number;
	label: string;
	missable: boolean;
	repeatable: boolean;
	type: string;
	won: string[];
};

type CardsFormatted = CardFormatted[];

type CardsUnformatted = CardUnformatted[];

declare global {
	/* Declare global types */
	type CardsFormattedType = CardsFormatted;

	type CardsUnformattedType = CardsUnformatted;
}

/* Export global types */
export {};
