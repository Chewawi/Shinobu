import { GatewayDispatchEvents } from 'discord-api-types/v10';
import type { GatewayMessageCreateDispatch } from 'discord-api-types/v10';
import { DiscordEvent } from '../structures/Event';
import type { Client } from '../client/client';

export class MessageEvent extends DiscordEvent {
	constructor(client: Client) {
		super(client);
		this.name = GatewayDispatchEvents.MessageCreate;
	}

	async execute(_shardId: number, { d: message }: GatewayMessageCreateDispatch): Promise<void> {
		if (message.author?.bot) { return; }
		if (message.content.startsWith('ping')) {
			// Then I implement the ping on the gateway
			// This is the raw way of doing it, with your own functions you can make this more functional
			await this.client.rest.post(this.client.routes.channelMessages(message.channel_id), { body: { content: 'Hello' } });
		}
	}
}
