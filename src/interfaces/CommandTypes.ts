import type { Data } from './DataTypes';
import type { PrefixBuilder } from '../utils/builders';

export interface CommandTypes {
    PrefixType: {
        data: PrefixBuilder;
        code: (d: Data<Types.Prefix>) => Promise<void>;
    };
}

export enum Types {
    Prefix = 'PrefixType'
}

export type Command<K extends keyof CommandTypes> = CommandTypes[K];

declare global {
    interface Number {
        toReadable(): string;
    }
    interface String {
        toFormalCase(): string;
    }
}
