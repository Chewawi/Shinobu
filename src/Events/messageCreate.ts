import { GatewayDispatchEvents } from 'discord-api-types/v10';
import { DiscordEvent } from '../structures/Event';
import type { Message } from '../structures/Message';
import type { Client } from '../client/client';

export class MessageEvent extends DiscordEvent {
	constructor(client: Client) {
		super(client);
		this.name = GatewayDispatchEvents.MessageCreate;
	}

	async execute(_shardId: number, message: Message): Promise<void> {
		if (message.author?.bot) { return; }
		if (message.content.startsWith('ping')) {
			await message.send(`Hola ${message.author.username}, mi pinga es de \`${message.client.ws}\``);
		}
	}
}
