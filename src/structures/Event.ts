import type { GatewayDispatchEvents, GatewayDispatchPayload } from 'discord-api-types/v10';
import type { Client } from '../client/client';

export abstract class DiscordEvent {
	client: Client;
	name: GatewayDispatchEvents | null;
	constructor(client: Client) {
		this.client = client;
		this.name = null;
	}

	async execute(_shardId: number, _payload: GatewayDispatchPayload) { return; }
}

