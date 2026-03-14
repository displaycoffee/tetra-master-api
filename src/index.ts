import express from 'express';
import type { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };

const app = express();
const PORT = 3000;

// Serve the interactive documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/cards', (req: Request, res: Response) => {
	res.send([
		{
			id: 1,
			handle: 'goblin-1',
			field: 'card',
			label: 'Goblin',
			stats: '0P00',
			dropped: ['enemy 01', 'Enemy 02', 'enemy 03'],
			found: 'location 01',
			won: 'person 01',
			missable: false,
			image: '/assets/dist/images/cactaur.png',
		},
		{
			id: 2,
			handle: 'fang-2',
			field: 'card',
			label: 'Fang',
			stats: '0P00',
			dropped: ['Enemy 02'],
			found: 'location 02',
			won: 'person 02',
			missable: false,
			image: '/assets/dist/images/cactaur.png',
		},
	]);
});

app.listen(PORT, () => {
	console.log(`⚡️ Server is running at http://localhost:${PORT}`);
	console.log(`📖 Docs available at http://localhost:${PORT}/api-docs`);
});
