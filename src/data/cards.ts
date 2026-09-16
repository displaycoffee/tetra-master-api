/* Local scripts */
import { utils } from '../_core/scripts/utils';
import { variables } from '../_core/scripts/variables';
import { cardsUnformatted } from './cards-unformatted';

/* Export and create formatted card list */
export const cards: CardsFormattedType = cardsUnformatted.map((card) => {
	// Card variables
	const handle = utils.handleize(card.name);

	// Return formatted card
	return {
		...card,
		handle: `${handle}-${card.id}`,
		image: `${variables.url}${variables.images.cards}/${handle}.png`,
	};
});
