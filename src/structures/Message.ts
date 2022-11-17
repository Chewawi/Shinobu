import type { GatewayMessageCreateDispatchData } from 'discord-api-types/v10';
import type { Client } from '../client/client';

export class Message {
    readonly client: Client;
	channelId: any;
	content: string;
	author: any;
    constructor(client: Client, payload: GatewayMessageCreateDispatchData) {
        this.client = client;
        this.channelId = payload.channel_id;
        this.content = payload.content;
		this.author = payload.author;
    }

    async send(content: string) {
		await this.client.rest.post(this.client.routes.channelMessages(this.channelId), { body: { content } });
	}
}
