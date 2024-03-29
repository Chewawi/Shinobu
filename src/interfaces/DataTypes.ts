import type { Message } from '../structures/Message';
import type { Client } from '../client/client';

export interface DataTypes {
    PrefixType: {
        message: Message;
        client: Client;
        args: string[];
        prefix: string;
	};
}

export type Data<K extends keyof DataTypes> = DataTypes[K];
