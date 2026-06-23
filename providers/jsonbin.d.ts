import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a JSONBin bin from a JSON object and return the stored record plus bin metadata. */
    "jsonbin.create_bin": {
      input: {
        /** The JSON object stored in the bin. JSONBin bins store object records. */
        record: Record<string, unknown>;
        /**
         * Optional bin name sent with the X-Bin-Name header.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional collection id sent with the X-Collection-Id header.
         * @minLength 1
         */
        collectionId?: string;
        /** Whether the bin should be private. */
        private?: boolean;
      };
      output: {
        /** The JSON object stored in the bin. JSONBin bins store object records. */
        record: Record<string, unknown>;
        /** Metadata returned by JSONBin for the bin, such as id, name, private flag, timestamps, version, or collection id. */
        metadata: Record<string, unknown>;
        /** The raw JSONBin API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a JSONBin bin and return the deletion metadata returned by JSONBin. */
    "jsonbin.delete_bin": {
      input: {
        /**
         * The JSONBin bin identifier.
         * @minLength 1
         */
        binId: string;
      };
      output: {
        /** Metadata returned by JSONBin for the bin, such as id, name, private flag, timestamps, version, or collection id. */
        metadata: Record<string, unknown>;
        /** The raw JSONBin API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Read the latest or a specific version of a JSONBin bin. */
    "jsonbin.read_bin": {
      input: {
        /**
         * The JSONBin bin identifier.
         * @minLength 1
         */
        binId: string;
        /**
         * Optional JSONBin version identifier to read.
         * @minLength 1
         */
        version?: string;
      };
      output: {
        /** The JSON object stored in the bin. JSONBin bins store object records. */
        record: Record<string, unknown>;
        /** Metadata returned by JSONBin for the bin, such as id, name, private flag, timestamps, version, or collection id. */
        metadata: Record<string, unknown>;
        /** The raw JSONBin API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Replace the JSON object stored in a JSONBin bin and return the updated record plus metadata. */
    "jsonbin.update_bin": {
      input: {
        /**
         * The JSONBin bin identifier.
         * @minLength 1
         */
        binId: string;
        /** The JSON object stored in the bin. JSONBin bins store object records. */
        record: Record<string, unknown>;
        /** Whether JSONBin should create a new version for this update. */
        versioning?: boolean;
      };
      output: {
        /** The JSON object stored in the bin. JSONBin bins store object records. */
        record: Record<string, unknown>;
        /** Metadata returned by JSONBin for the bin, such as id, name, private flag, timestamps, version, or collection id. */
        metadata: Record<string, unknown>;
        /** The raw JSONBin API response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
