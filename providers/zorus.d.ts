import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search active Zorus unblock requests with documented filtering, pagination, and sorting. */
    "zorus.search_active_unblock_requests": {
      input: {
        /** The page of data to return. */
        page?: number;
        /** The number of items per page. */
        pageSize?: number;
        /** Whether Zorus should sort the result set in ascending order. */
        sortAscending?: boolean;
        /** Active unblock-request field to sort by. */
        sortProperty?: "CustomerName" | "LoggedOnUser" | "EndpointName" | "Website";
        /** Only include unblock requests whose customer UUID is in this list. */
        customerUuidIn?: Array<string>;
        /** Only include unblock requests whose policy UUID is in this list. */
        policyUuidIn?: Array<string>;
        /**
         * Only include unblock requests whose logged-on user contains this value.
         * @minLength 1
         */
        loggedOnUserContains?: string;
        /**
         * Only include unblock requests submitted before this UTC timestamp.
         * @format date-time
         */
        requestedBefore?: string;
        /**
         * Only include unblock requests submitted after this UTC timestamp.
         * @format date-time
         */
        requestedAfter?: string;
      };
      output: {
        /** Items returned by the Zorus search endpoint. */
        items: Array<{
          /**
           * The unblock request UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * The unblock request customer UUID.
           * @format uuid
           */
          customerUuid?: string;
          /** The unblock request customer name. */
          customerName?: string | null;
          /**
           * The policy UUID responsible for the block.
           * @format uuid
           */
          policyUuid?: string;
          /** The remote username of the submitter. */
          loggedOnUser?: string | null;
          /** The endpoint hostname that submitted the request. */
          endpointName?: string | null;
          /** The blocked URL. */
          website?: string | null;
          /** The Zorus-provided block reason. */
          blockReason?: string | null;
          /** Categories assigned to the blocked website or URL. */
          categoryNames?: Array<string> | null;
          /** The user-supplied reason for the unblock request. */
          requestReason?: string | null;
          /**
           * Timestamp when the unblock request was submitted.
           * @format date-time
           */
          requestDateUtc?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Zorus customers with documented filtering, pagination, and sorting. */
    "zorus.search_customers": {
      input: {
        /** The page of data to return. */
        page?: number;
        /** The number of items per page. */
        pageSize?: number;
        /** Whether Zorus should sort the result set in ascending order. */
        sortAscending?: boolean;
        /** Customer field to sort by. */
        sortProperty?: "Name";
        /**
         * Only include customers whose name contains this value.
         * @minLength 1
         */
        nameContains?: string;
        /** Only include customers whose enabled state matches this value. */
        isEnabled?: boolean;
        /**
         * Only include the customer with this UUID.
         * @format uuid
         */
        uuidEquals?: string;
        /**
         * Only include customers created after this UTC timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Only include customers created before this UTC timestamp.
         * @format date-time
         */
        createdBefore?: string;
      };
      output: {
        /** Items returned by the Zorus search endpoint. */
        items: Array<{
          /**
           * The customer UUID.
           * @format uuid
           */
          uuid?: string;
          /** The customer name. */
          name?: string | null;
          /**
           * Timestamp when the customer was created.
           * @format date-time
           */
          createdDateUtc?: string;
          /** Whether the customer is enabled. */
          isEnabled?: boolean;
          /** Deployment summary for a Zorus customer. */
          deploymentInfo?: {
            /** Number of endpoints associated with the customer. */
            deployedEndpointCount?: number;
            /** Number of customer endpoints with filtering enabled. */
            filteringEnabledCount?: number;
            /** Number of customer endpoints with CyberSight enabled. */
            cyberSightEnabledCount?: number;
            /** Number of enabled WANs associated with the customer. */
            enabledNetworkCount?: number;
            /** Number of seats in WANs associated with the customer. */
            networkSeatCount?: number;
            [key: string]: unknown;
          };
          /** Integrations used by the customer. */
          integrations?: Array<{
            /** The integration vendor name. */
            vendorName?: string | null;
            /** The integration name. */
            name?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Zorus endpoints with documented filtering, pagination, and sorting. */
    "zorus.search_endpoints": {
      input: {
        /** The page of data to return. */
        page?: number;
        /** The number of items per page. */
        pageSize?: number;
        /** Whether Zorus should sort the result set in ascending order. */
        sortAscending?: boolean;
        /** Endpoint field to sort by. */
        sortProperty?: "Name";
        /**
         * Only include endpoints whose name contains this value.
         * @minLength 1
         */
        nameContains?: string;
        /** Only include endpoints whose enabled state matches this value. */
        isEnabled?: boolean;
        /**
         * Only include the endpoint with this UUID.
         * @format uuid
         */
        uuidEquals?: string;
        /** Only include endpoints whose UUID is in this list. */
        uuidIn?: Array<string>;
        /**
         * Only include the endpoint with this license ID.
         * @minLength 1
         */
        licenseIdEquals?: string;
        /** Only include endpoints whose license ID is in this list. */
        licenseIdIn?: Array<string>;
        /**
         * Only include endpoints whose customer has this UUID.
         * @format uuid
         */
        customerUuidEquals?: string;
        /** Only include endpoints whose customer UUID is in this list. */
        customerUuidIn?: Array<string>;
        /**
         * Only include endpoints whose group has this UUID.
         * @format uuid
         */
        groupUuidEquals?: string;
        /** Only include endpoints whose group UUID is in this list. */
        groupUuidIn?: Array<string>;
        /** Only include endpoints whose error state matches this value. */
        isInErrorState?: boolean;
        /**
         * Only include endpoints whose agent state matches this value.
         * @minLength 1
         */
        agentStateEquals?: string;
        /**
         * Only include endpoints last seen before this UTC timestamp.
         * @format date-time
         */
        lastSeenBefore?: string;
        /**
         * Only include endpoints last seen after this UTC timestamp.
         * @format date-time
         */
        lastSeenAfter?: string;
        /** Only include endpoints whose group-setting inheritance matches this value. */
        isInheritingGroupSettings?: boolean;
        /** Only include endpoints whose filtering state matches this value. */
        isFilteringEnabled?: boolean;
        /** Only include endpoints whose CyberSight state matches this value. */
        isCyberSightEnabled?: boolean;
      };
      output: {
        /** Items returned by the Zorus search endpoint. */
        items: Array<{
          /** The endpoint customer name. */
          customerName?: string | null;
          /**
           * The endpoint customer UUID.
           * @format uuid
           */
          customerUuid?: string;
          /** The endpoint group name. */
          groupName?: string | null;
          /**
           * The endpoint group UUID.
           * @format uuid
           */
          groupUuid?: string;
          /**
           * The endpoint policy UUID.
           * @format uuid
           */
          policyUuid?: string;
          /** The endpoint name. */
          name?: string | null;
          /**
           * The endpoint UUID.
           * @format uuid
           */
          uuid?: string;
          /** The endpoint license ID. */
          licenseId?: string | null;
          /**
           * Timestamp when the endpoint was created.
           * @format date-time
           */
          createdDateUtc?: string;
          /** Whether the endpoint is enabled. */
          isEnabled?: boolean;
          /** The endpoint operating system type. */
          operatingSystemType?: string | null;
          /** The endpoint operating system. */
          operatingSystem?: string | null;
          /** The endpoint local IP address. */
          localIp?: string | null;
          /** The endpoint agent version. */
          version?: string | null;
          /** Whether the endpoint is in an error state. */
          isInErrorState?: boolean;
          /** Whether the endpoint inherits group settings. */
          isInheritingGroupSettings?: boolean;
          /** Whether filtering is enabled on the endpoint. */
          isFilteringEnabled?: boolean;
          /** Whether CyberSight is enabled on the endpoint. */
          isCyberSightEnabled?: boolean;
          /** Whether the CyberSight browser extension is enabled on the endpoint. */
          isCyberSightBrowserExtensionEnabled?: boolean;
          /** The endpoint browser extension state. */
          browserExtensionState?: string | null;
          /** The endpoint agent state. */
          agentState?: string | null;
          /**
           * Timestamp when the endpoint was last seen.
           * @format date-time
           */
          lastSeenDateUtc?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Zorus groups with documented filtering, pagination, and sorting. */
    "zorus.search_groups": {
      input: {
        /** The page of data to return. */
        page?: number;
        /** The number of items per page. */
        pageSize?: number;
        /** Whether Zorus should sort the result set in ascending order. */
        sortAscending?: boolean;
        /** Group field to sort by. */
        sortProperty?: "Name" | "CustomerName" | "SyncOptionsToMembers" | "SyncAddonsToMembers";
        /**
         * Only include groups whose name contains this value.
         * @minLength 1
         */
        nameContains?: string;
        /**
         * Only include the group with this UUID.
         * @format uuid
         */
        uuidEquals?: string;
        /**
         * Only include groups assigned to this policy UUID.
         * @format uuid
         */
        policyUuidEquals?: string;
        /**
         * Only include groups whose customer has this UUID.
         * @format uuid
         */
        customerUuidEquals?: string;
        /**
         * Only include groups whose customer name contains this value.
         * @minLength 1
         */
        customerNameContains?: string;
        /** Only include groups whose sync-options-to-members setting matches this value. */
        syncOptionsToMembers?: boolean;
        /** Only include groups whose sync-addons-to-members setting matches this value. */
        syncAddonsToMembers?: boolean;
      };
      output: {
        /** Items returned by the Zorus search endpoint. */
        items: Array<{
          /** The group name. */
          name?: string | null;
          /**
           * The group UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * The policy UUID used by the group.
           * @format uuid
           */
          policyUuid?: string;
          /** The group customer name. */
          customerName?: string | null;
          /**
           * The group customer UUID.
           * @format uuid
           */
          customerUuid?: string;
          /** Whether options are synchronized to group members. */
          syncOptionsToMembers?: boolean;
          /** Whether addons are synchronized to group members. */
          syncAddonsToMembers?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Zorus policies with documented filtering, pagination, and sorting. */
    "zorus.search_policies": {
      input: {
        /** The page of data to return. */
        page?: number;
        /** The number of items per page. */
        pageSize?: number;
        /** Whether Zorus should sort the result set in ascending order. */
        sortAscending?: boolean;
        /** Policy field to sort by. */
        sortProperty?: "CustomerName" | "GroupName" | "CreatedDateUtc";
        /**
         * Only include the policy with this UUID.
         * @format uuid
         */
        uuidEquals?: string;
        /**
         * Only include policies whose group has this UUID.
         * @format uuid
         */
        groupUuidEquals?: string;
        /**
         * Only include policies whose group name contains this value.
         * @minLength 1
         */
        groupNameContains?: string;
        /**
         * Only include policies whose customer name contains this value.
         * @minLength 1
         */
        customerNameContains?: string;
        /**
         * Only include policies whose customer has this UUID.
         * @format uuid
         */
        customerUuidEquals?: string;
        /**
         * Only include policies created before this UTC timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Only include policies created after this UTC timestamp.
         * @format date-time
         */
        createdAfter?: string;
      };
      output: {
        /** Items returned by the Zorus search endpoint. */
        items: Array<{
          /**
           * The policy UUID.
           * @format uuid
           */
          uuid?: string;
          /** The policy group name. */
          groupName?: string | null;
          /**
           * The policy group UUID.
           * @format uuid
           */
          groupUuid?: string;
          /** The policy customer name. */
          customerName?: string | null;
          /**
           * The policy customer UUID.
           * @format uuid
           */
          customerUuid?: string;
          /**
           * Timestamp when the policy was created.
           * @format date-time
           */
          createdDateUtc?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
