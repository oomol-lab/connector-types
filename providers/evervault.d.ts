import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Decrypt an Evervault-encrypted JSON-compatible value. */
    "evervault.decrypt_json": {
      input: {
        /** A JSON-compatible value, including objects, arrays, scalars, or null. */
        value: unknown;
      };
      output: {
        /** A JSON-compatible value, including objects, arrays, scalars, or null. */
        value: unknown;
      };
    };
    /** Encrypt a JSON-compatible value with the configured Evervault app. */
    "evervault.encrypt_json": {
      input: {
        /** A JSON-compatible value, including objects, arrays, scalars, or null. */
        value: unknown;
      };
      output: {
        /** A JSON-compatible value, including objects, arrays, scalars, or null. */
        value: unknown;
      };
    };
    /** Inspect metadata for an Evervault-encrypted token without decrypting it. */
    "evervault.inspect_token": {
      input: {
        /**
         * The Evervault-encrypted token to inspect.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** The JSON data type stored in the encrypted token. */
        type: "integer" | "float" | "boolean" | "string";
        /** The category assigned to the encrypted value. */
        category?: string;
        /** The encryption time as a Unix timestamp in milliseconds. */
        encryptedAt?: number;
        /** The data role assigned to the encrypted value. */
        role?: string;
        /** The stable fingerprint of the encrypted value. */
        fingerprint?: string;
        /** Additional category-specific encrypted-value metadata. */
        metadata?: Record<string, unknown>;
      };
    };
  }
}
