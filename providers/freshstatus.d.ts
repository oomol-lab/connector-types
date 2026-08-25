import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a service group on a Freshstatus status page. */
    "freshstatus.create_group": {
      input: {
        /**
         * Service group name.
         * @minLength 1
         */
        name: string;
        /** Service group description. */
        description?: string;
        /** Display order of the service group. */
        order?: number;
        /**
         * Parent service group identifier.
         * @exclusiveMinimum 0
         */
        parentId?: number | null;
        /** Freshstatus service group display options. */
        displayOptions?: {
          /** Whether the group is expanded on page load, encoded as required by Freshstatus. */
          expandOnLoad?: "true" | "false";
          /** Whether uptime history is enabled, encoded as required by Freshstatus. */
          uptimeHistoryEnabled?: "true" | "false";
        };
      };
      output: {
        /** A service group object returned by Freshstatus. */
        group: Record<string, unknown>;
      };
    };
    /** Create a service on a Freshstatus status page. */
    "freshstatus.create_service": {
      input: {
        /**
         * Service name.
         * @minLength 1
         */
        name: string;
        /** Service description. */
        description?: string;
        /** Display order of the service. */
        order: number;
        /**
         * Parent service group identifier.
         * @exclusiveMinimum 0
         */
        groupId?: number;
        /** Freshstatus service display options. */
        displayOptions?: {
          /**
           * Service history start date in YYYY-MM-DD format.
           * @format date
           */
          serviceStartDate?: string;
          /** Whether uptime history is enabled, encoded as required by Freshstatus. */
          uptimeHistoryEnabled?: "true" | "false";
        };
      };
      output: {
        /** A service object returned by Freshstatus. */
        service: Record<string, unknown>;
      };
    };
    /** Delete a Freshstatus service group. */
    "freshstatus.delete_group": {
      input: {
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        groupId: number;
      };
      output: {
        /** Whether the service group was deleted. */
        deleted: boolean;
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        groupId: number;
      };
    };
    /** Delete a Freshstatus service. */
    "freshstatus.delete_service": {
      input: {
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        serviceId: number;
      };
      output: {
        /** Whether the service was deleted. */
        deleted: boolean;
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        serviceId: number;
      };
    };
    /** Get one Freshstatus service group by identifier. */
    "freshstatus.get_group": {
      input: {
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        groupId: number;
      };
      output: {
        /** A service group object returned by Freshstatus. */
        group: Record<string, unknown>;
      };
    };
    /** Get one Freshstatus service by identifier. */
    "freshstatus.get_service": {
      input: {
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        serviceId: number;
      };
      output: {
        /** A service object returned by Freshstatus. */
        service: Record<string, unknown>;
      };
    };
    /** List service groups configured on a Freshstatus status page. */
    "freshstatus.list_groups": {
      input: Record<string, never>;
      output: {
        /** Total number of matching Freshstatus objects. */
        count: number;
        /** URL of the next page when another page exists. */
        next: string | null;
        /** URL of the previous page when one exists. */
        previous: string | null;
        /** Service groups returned by Freshstatus. */
        groups: Array<Record<string, unknown>>;
      };
    };
    /** List the services configured on a Freshstatus status page. */
    "freshstatus.list_services": {
      input: Record<string, never>;
      output: {
        /** Total number of matching Freshstatus objects. */
        count: number;
        /** URL of the next page when another page exists. */
        next: string | null;
        /** URL of the previous page when one exists. */
        previous: string | null;
        /** Services returned by Freshstatus. */
        services: Array<Record<string, unknown>>;
      };
    };
    /** Update a Freshstatus service group. */
    "freshstatus.update_group": {
      input: {
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        groupId: number;
        /**
         * Replacement service group name.
         * @minLength 1
         */
        name?: string;
        /** Replacement service group description. */
        description?: string;
        /** Replacement display order. */
        order?: number;
        /**
         * Replacement parent group identifier.
         * @exclusiveMinimum 0
         */
        parentId?: number | null;
        /** Freshstatus service group display options. */
        displayOptions?: {
          /** Whether the group is expanded on page load, encoded as required by Freshstatus. */
          expandOnLoad?: "true" | "false";
          /** Whether uptime history is enabled, encoded as required by Freshstatus. */
          uptimeHistoryEnabled?: "true" | "false";
        };
      };
      output: {
        /** A service group object returned by Freshstatus. */
        group: Record<string, unknown>;
      };
    };
    /** Update a Freshstatus service. */
    "freshstatus.update_service": {
      input: {
        /**
         * Freshstatus object identifier.
         * @exclusiveMinimum 0
         */
        serviceId: number;
        /**
         * Replacement service name.
         * @minLength 1
         */
        name?: string;
        /** Replacement service description. */
        description?: string;
        /** Replacement display order. */
        order?: number;
        /**
         * Replacement parent group identifier.
         * @exclusiveMinimum 0
         */
        groupId?: number | null;
        /** Freshstatus service display options. */
        displayOptions?: {
          /**
           * Service history start date in YYYY-MM-DD format.
           * @format date
           */
          serviceStartDate?: string;
          /** Whether uptime history is enabled, encoded as required by Freshstatus. */
          uptimeHistoryEnabled?: "true" | "false";
        };
      };
      output: {
        /** A service object returned by Freshstatus. */
        service: Record<string, unknown>;
      };
    };
  }
}
