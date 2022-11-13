import { Client } from './client/client';
import { REST } from '@discordjs/rest';
import type { ShardManagerOptions } from './types';
import type { APIGatewayBotInfo } from 'discord-api-types/v10';
import { GatewayIntentBits, Routes } from 'discord-api-types/v10';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);


const init = async () => {
	const shardManager: ShardManagerOptions = {
		gateway: await(rest.get(Routes.gatewayBot())) as APIGatewayBotInfo,
		config: {
			token: process.env.DISCORD_TOKEN,
			intents: GatewayIntentBits.Guilds | GatewayIntentBits.MessageContent,
		},

		async handleDiscordPayload(_shard, _payload) {
			// implements handler
			// maybe use biscuit actions, our actions or raw data
		}
	};

	const client = new Client({
		token: process.env.DISCORD_TOKEN,
		shardManager, rest
	});

	await client.ws.spawns();

	return client;
};

init();
