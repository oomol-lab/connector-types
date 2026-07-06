import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List PRTG devices with host, status, and message fields from the classic table API. */
    "prtg_classic.list_devices": {
      input: {
        /**
         * Maximum number of items to return. PRTG allows values from 1 to 50000.
         * @minimum 1
         * @maximum 50000
         */
        count?: number;
        /**
         * Zero-based item offset for paginated table reads.
         * @minimum 0
         */
        start?: number;
        /**
         * PRTG object ID used to restrict the table to that object and its child objects.
         * @minimum 0
         */
        objectId?: number;
        /**
         * PRTG raw status codes to include. Multiple status filters are sent as repeated filter_status query parameters.
         * @minItems 1
         */
        filterStatus?: Array<number>;
        /** Reverse the selected sortBy column by sending a leading dash. */
        sortDescending?: boolean;
        /**
         * PRTG host column filter value or filter expression.
         * @minLength 1
         */
        filterHost?: string;
        /**
         * PRTG device column filter value or filter expression.
         * @minLength 1
         */
        filterDevice?: string;
        /** PRTG device table column used for sorting. */
        sortBy?: "objid" | "probe" | "group" | "device" | "host" | "status" | "message" | "priority" | "favorite";
      };
      output: {
        /**
         * Total number of matching PRTG table rows when provided by PRTG.
         * @minimum 0
         */
        treeSize?: number;
        /** PRTG server version string when included in the API response. */
        prtgVersion?: string;
        /** The raw PRTG table API response. */
        raw: Record<string, unknown>;
        /** Device rows returned by PRTG. */
        devices: Array<Record<string, unknown>>;
      };
    };
    /** List PRTG sensors with status, message, and last value fields from the classic table API. */
    "prtg_classic.list_sensors": {
      input: {
        /**
         * Maximum number of items to return. PRTG allows values from 1 to 50000.
         * @minimum 1
         * @maximum 50000
         */
        count?: number;
        /**
         * Zero-based item offset for paginated table reads.
         * @minimum 0
         */
        start?: number;
        /**
         * PRTG object ID used to restrict the table to that object and its child objects.
         * @minimum 0
         */
        objectId?: number;
        /**
         * PRTG raw status codes to include. Multiple status filters are sent as repeated filter_status query parameters.
         * @minItems 1
         */
        filterStatus?: Array<number>;
        /** Reverse the selected sortBy column by sending a leading dash. */
        sortDescending?: boolean;
        /**
         * Tag name or PRTG @tag(...) expression used to filter sensors by tag.
         * @minLength 1
         */
        filterTags?: string;
        /**
         * PRTG sensor type filter value or filter expression.
         * @minLength 1
         */
        filterType?: string;
        /**
         * PRTG device column filter value or filter expression.
         * @minLength 1
         */
        filterDevice?: string;
        /**
         * PRTG sensor column filter value or filter expression.
         * @minLength 1
         */
        filterSensor?: string;
        /** PRTG sensor table column used for sorting. */
        sortBy?: "objid" | "probe" | "group" | "device" | "sensor" | "status" | "message" | "lastvalue" | "priority" | "favorite";
      };
      output: {
        /**
         * Total number of matching PRTG table rows when provided by PRTG.
         * @minimum 0
         */
        treeSize?: number;
        /** PRTG server version string when included in the API response. */
        prtgVersion?: string;
        /** The raw PRTG table API response. */
        raw: Record<string, unknown>;
        /** Sensor rows returned by PRTG. */
        sensors: Array<Record<string, unknown>>;
      };
    };
  }
}
