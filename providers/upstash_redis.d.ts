import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one Redis key. */
    "upstash_redis.delete": {
      input: {
        /**
         * The Redis key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** Whether Redis deleted an existing key. */
        deleted: boolean;
      };
    };
    /** Check whether one Redis key exists. */
    "upstash_redis.exists": {
      input: {
        /**
         * The Redis key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** Whether the Redis key exists. */
        exists: boolean;
      };
    };
    /** Set or replace the expiration time for one Redis key. */
    "upstash_redis.expire": {
      input: {
        /**
         * The Redis key.
         * @minLength 1
         */
        key: string;
        /**
         * Expiration time in seconds.
         * @exclusiveMinimum 0
         */
        expirationSeconds: number;
      };
      output: {
        /** Whether Redis updated the expiration for an existing key. */
        updated: boolean;
      };
    };
    /** Get the string value stored for one Redis key. */
    "upstash_redis.get": {
      input: {
        /**
         * The Redis key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The stored string value, or null when the key does not exist. Upstash replaces invalid UTF-8 bytes with U+FFFD. */
        value: string | null;
      };
    };
    /** Scan one page of Redis keys without reading the full keyspace. */
    "upstash_redis.scan": {
      input: {
        /**
         * The cursor returned by a previous scan. Omit it to start at cursor 0.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Optional Redis glob pattern used to filter keys.
         * @minLength 1
         */
        match?: string;
        /**
         * Optional scan work hint from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        count?: number;
      };
      output: {
        /**
         * Cursor to pass to the next scan request. A value of 0 means scanning is complete.
         * @minLength 1
         */
        nextCursor: string;
        /** Keys returned in this scan page. */
        keys: Array<string>;
        /** Whether this scan reached cursor 0. */
        complete: boolean;
      };
    };
    /** Store a string value for one Redis key, optionally with an expiration or conditional write. */
    "upstash_redis.set": {
      input: {
        /**
         * The Redis key.
         * @minLength 1
         */
        key: string;
        /**
         * The string value stored for the Redis key.
         * @minLength 1
         */
        value: string;
        /**
         * Expiration time in seconds.
         * @exclusiveMinimum 0
         */
        expirationSeconds?: number;
        /** Optional Redis write condition: NX stores only a new key; XX stores only an existing key. */
        condition?: "NX" | "XX";
      };
      output: {
        /** Whether Redis stored the value. False means the requested condition was not met. */
        stored: boolean;
      };
    };
    /** Get the remaining expiration time for one Redis key. */
    "upstash_redis.ttl": {
      input: {
        /**
         * The Redis key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** Remaining expiration in seconds. -2 means the key does not exist; -1 means the key has no expiration. */
        ttlSeconds: number;
      };
    };
  }
}
