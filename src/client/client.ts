import type { REST } from '@discordjs/rest';
import type { Shard } from '../gateway';
import { ShardManager } from '../gateway';
import type { ShardManagerOptions } from '../types';
import type { APIGatewayBotInfo, GatewayReceivePayload } from 'discord-api-types/v10';
import { Routes } from 'discord-api-types/v10';
import { DeafultGatewayOptions, Options } from '../utils/options';
import { switcher } from '../Events/switchEvent';

export class Client {
	ws: ShardManager;
	rest: REST;
	options: ClientOptions;
	routes: typeof Routes;
	handlerPayload: (shard: Shard, payload: GatewayReceivePayload) => Promise<void>;

	constructor(options: ClientOptions) {
		this.options = options;
		this.routes = Routes;
		this.rest = options.rest;
		this.ws = new ShardManager(Options(DeafultGatewayOptions, this.options.shardManagerOptions));
		this.handlerPayload = async (shard, payload) => {
			await switcher(this, payload, shard.options.id);
		};
	}

	async setGateway() {
		const options: ShardManagerOptions = {
			gateway: await this.rest.get(this.routes.gatewayBot()) as APIGatewayBotInfo,
			config: {
				token: process.env.DISCORD_TOKEN,
				intents: 33281,
			},
			handleDiscordPayload: this.handlerPayload,
		};
		this.ws = new ShardManager(Options(this.options.shardManagerOptions ?? {}, DeafultGatewayOptions, options) as ShardManagerOptions);
	}
}


export interface ClientOptions {
	shardManagerOptions?: Partial<ShardManagerOptions>;
	rest: REST;
	token: string;
}
