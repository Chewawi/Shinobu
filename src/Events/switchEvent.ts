import type { GatewayReceivePayload } from 'discord-api-types/v10';
import { GatewayDispatchEvents } from 'discord-api-types/v10';
import type { Client } from '../client/client';
import { MessageEvent } from './messageCreate';
import { ReadyEvent } from './ready';
import { Message } from '../structures/Message';

export const switcher = async (client: Client, payload: GatewayReceivePayload, shardId: number) => {
	switch (payload.t) {
		case GatewayDispatchEvents.MessageCreate:
			new MessageEvent(client).execute(shardId, new Message(client, payload.d));
			break;
		case GatewayDispatchEvents.Ready:
			new ReadyEvent(client).execute(shardId, payload);
			break;
		default:
			break;
	}
};
