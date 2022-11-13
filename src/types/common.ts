/** CUSTOM TYPES */
export type PickPartials<T, K extends keyof T> = {
	[P in keyof T]?: T[P] | undefined;
} & { [P in K]: T[P] };

export type ObjectIdentity<T> = T extends infer U
	? {
			[K in keyof U]: U[K];
	}
	: never;

export type PickPartial<T, Keys extends keyof T> = ObjectIdentity<
	{
		[K in Exclude<keyof T, Keys>]: T[K];
	} & {
		[K in Keys]?: T[K] | undefined;
	}
>;

export type MakeRequired<T, K extends keyof T> = ObjectIdentity<T & { [P in K]-?: T[P] }>;

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		interface ProcessEnv {
			DISCORD_TOKEN: string;
		}
	}
}
