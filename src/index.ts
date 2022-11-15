import { Client } from './client/client';
import { REST } from '@discordjs/rest';
import 'dotenv/config';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);


const init = async () => {
	const client = new Client({
		token: '',
		rest
	});
	await client.setGateway();
	await client.ws.spawns();
};

init();