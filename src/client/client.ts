import type { REST } from '@discordjs/rest';
import { ShardManager } from '../gateway';
import type { ShardManagerOptions } from '../types';


export class Client {
	ws: ShardManager;
	rest: REST;

	constructor(options: ClientOptions) {
		this.ws = new ShardManager(options.shardManager);
		this.rest = options.rest;
	}
}


export interface ClientOptions {
	shardManager: ShardManagerOptions;
	rest: REST;
	token: string;
}
