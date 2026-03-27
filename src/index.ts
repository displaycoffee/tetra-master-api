/* Packages */
import express from 'express';
import type { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

/* Local scripts */
import { cards } from './scripts/cards';
import swaggerDocument from './scripts/swagger.json' with { type: 'json' };

/* Set Express app and port */
const app = express();
const PORT = 3000;

/* Serve the cards */
app.get('/cards', (req: Request, res: Response) => {
	res.send(cards);
});

/* Serve the documentation */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* HEY! LISTEN!! */
app.listen(PORT, () => {
	console.log(`⚡️ Server is running at http://localhost:${PORT}`);
	console.log(`📖 Docs available at http://localhost:${PORT}/api-docs`);
});
