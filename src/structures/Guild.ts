import type { GatewayGuildCreateDispatchData } from 'discord-api-types/v10';
import type { Client } from '../client/client';

export class Guild {
    readonly client: Client;
	id: string;
    constructor(client: Client, payload: GatewayGuildCreateDispatchData) {
        this.client = client;
        this.id = payload.id
    }

}