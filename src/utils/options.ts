import type { ShardManagerOptions } from '../types';

const isPlainObject = (value: any) => {
    return (
      value !== null
      && typeof value === 'object'
      && typeof value.constructor === 'function'
		// eslint-disable-next-line
      && (value.constructor.prototype.hasOwnProperty('isPrototypeOf') || Object.getPrototypeOf(value.constructor.prototype) === null)
    )
      || (value && Object.getPrototypeOf(value) === null);
};

const isObject = (o: any) => {
    return !!o && typeof o === 'object' && !Array.isArray(o);
};

export const Options = (defaults: any, ...options: any[]): any => {
    if (!options.length) {
      return defaults;
    }

    const source = options.shift();

    if (isObject(defaults) && isPlainObject(source)) {
      Object.entries(source).forEach(([key, value]) => {
        if (typeof value === 'undefined') {
          return;
        }

        if (isPlainObject(value)) {
          if (!(key in defaults)) {
            Object.assign(defaults, { [key]: {} });
          }

          Options(defaults[key], value);
        } else {
          Object.assign(defaults, { [key]: value });
        }
      });
    }

    return Options(defaults, ...options);
};

export const DeafultGatewayOptions: ShardManagerOptions = {
  async handleDiscordPayload(_shard, _payload) {
    return;
  },
  gateway: {
    url: '',
    shards: 0,
    session_start_limit: {
      total: 1000,
      remaining: 1000,
      reset_after: 3600000,
      max_concurrency: 1
    }
  },
  config: {
    token:'',
    intents: 0,
  }
};
