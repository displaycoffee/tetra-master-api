/* Check if environment variables are available */
const requiredEnvs = ['API_URL'] as const;

for (const env of requiredEnvs) {
	if (!process.env[env]) {
		console.error(`❌ Missing required environment variable: ${env}`);
		process.exit(1); // Stop the app immediately
	}
}

/* This config contains variables to use through application */
export const variables = {
	environment: process.env.NODE_ENV,
	port: process.env.PORT || 3000,
	url: process.env.API_URL!,
	images: {
		app: '/assets/images/app',
		cards: '/assets/images/cards',
	},
};
