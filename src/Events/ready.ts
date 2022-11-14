import { GatewayDispatchEvents } from 'discord-api-types/v10';
import type { GatewayReadyDispatch } from 'discord-api-types/v10';
import { DiscordEvent } from '../structures/Event';
import type { Client } from '../client/client';

export class ReadyEvent extends DiscordEvent {
	constructor(client: Client) {
		super(client);
		this.name = GatewayDispatchEvents.Ready;
	}

	async execute(_shardId: number, { d: ready }: GatewayReadyDispatch): Promise<void> {
		console.log(`Ready on ${ready.user.username}`);
	}
}
