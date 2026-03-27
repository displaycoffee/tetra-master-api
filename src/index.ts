/* Packages */
import path from 'path';
import express from 'express';
import type { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

/* Local scripts */
import { variables } from './_config/scripts/variables';
import { cards } from './data/cards';
import swaggerDocument from './docs/swagger.json' with { type: 'json' };

/* Set Express app */
const app = express();

/* Use folders from public */
app.use('/', express.static('public'));

/* Catch-all for missing images */
app.get(`${variables.images.cards}/:filename`, (req, res) => {
	const placeholderPath = path.join(process.cwd(), `public${variables.images.app}/placeholder.jpg`);

	// If the code gets here, it means express.static failed to find the specific card
	res.sendFile(placeholderPath);
});

/* Serve the cards */
app.get('/cards', (req: Request, res: Response) => {
	res.send(cards);
});

/* Serve the documentation */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* HEY! LISTEN!! */
app.listen(variables.port, () => {
	console.log(`🏃 Running in ${variables.environment} mode`);
	console.log(`⚡️ Server is running at ${variables.url}`);
	console.log(`📖 Docs available at ${variables.url}/api-docs`);
});
