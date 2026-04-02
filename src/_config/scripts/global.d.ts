/* Type definitions */
type CardFormatted = CardUnformatted & {
	handle: string;
	image: string;
};

type CardUnformatted = {
	id: number;
	category: string;
	dropped: string[];
	found: string[];
	name: string;
	missable: boolean;
	repeatable: boolean;
	type: string;
	won: string[];
};

type CardsFormatted = CardFormatted[];

type CardsUnformatted = CardUnformatted[];

type CardTest = {
	id: number;
	//category: Category;
	dropped: Enemy[];
	found: Location[];
	name: string;
	missable: boolean;
	repeatable: boolean;
	type: string;
	won: NPC[];
};

type Enemy = {
	name: string;
};

type Location = {
	name: string;
	description?: string;
};

type NPC = {
	name: string;
	location: Location;
};

declare global {
	/* Declare global types */
	type CardsFormattedType = CardsFormatted;

	type CardsUnformattedType = CardsUnformatted;

	type CardTestType = CardTest;

	type NPCType = {
		[key: string]: NPC;
	};

	enum Category {
		Monster,
		Weapon,
	}
}

/* Export global types */
export {};
