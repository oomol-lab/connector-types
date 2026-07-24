import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Envoy employee by ID. */
    "envoy.get_employee": {
      input: {
        /**
         * The Envoy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Envoy employee. */
        employee: {
          /**
           * The Envoy employee ID.
           * @minLength 1
           */
          id: string;
          /**
           * The employee full name.
           * @minLength 1
           */
          name: string;
          /**
           * The employee email address.
           * @format email
           */
          email: string;
          /** The employee creation timestamp. */
          createdAt?: string;
          /** The employee update timestamp. */
          updatedAt?: string;
          /** The raw employee object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
    /** Fetch one Envoy sign-in flow by ID. */
    "envoy.get_flow": {
      input: {
        /**
         * The Envoy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Envoy sign-in flow. */
        flow: {
          /**
           * The Envoy flow ID.
           * @minLength 1
           */
          id: string;
          /**
           * The flow name.
           * @minLength 1
           */
          name: string;
          /** The flow type, such as VISITOR or EMPLOYEE. */
          type?: string;
          /** Whether the flow is enabled for visitor registration. */
          enabled?: boolean;
          /** The location ID linked to the flow. */
          locationId?: string | null;
          /** The flow creation timestamp. */
          createdAt?: string;
          /** The flow update timestamp. */
          updatedAt?: string;
          /** The raw flow object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
    /** Fetch one Envoy invite by ID. */
    "envoy.get_invite": {
      input: {
        /**
         * The Envoy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Envoy invite. */
        invite: {
          /**
           * The Envoy invite ID.
           * @minLength 1
           */
          id: string;
          /** The invite expected arrival timestamp. */
          expectedArrivalAt?: string;
          /** The invite expected departure timestamp. */
          expectedDepartureAt?: string | null;
          /** The invite type, such as VISITOR or EMPLOYEE. */
          type?: string;
          /** The current invite approval status. */
          approvalStatus?: string | null;
          /** The flow ID linked to the invite. */
          flowId?: string | null;
          /** The location ID linked to the invite. */
          locationId?: string | null;
          /** Internal notes attached to the invite. */
          notes?: string | null;
          /** A nested Envoy user view object. */
          invitee?: Record<string, unknown>;
          /** A nested Envoy user view object. */
          host?: Record<string, unknown>;
          /** The invitee photo URL when present. */
          photoUrl?: string | null;
          /** The invite creation timestamp. */
          createdAt?: string;
          /** The invite update timestamp. */
          updatedAt?: string;
          /** The raw invite object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
    /** Fetch one Envoy location by ID. */
    "envoy.get_location": {
      input: {
        /**
         * The Envoy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Envoy location. */
        location: {
          /**
           * The Envoy location ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Envoy location name.
           * @minLength 1
           */
          name: string;
          /** Whether the location is active. */
          enabled?: boolean;
          /** The Envoy company ID that owns this location. */
          companyId?: string;
          /** The location locale. */
          locale?: string;
          /** The location time zone. */
          timezone?: string | null;
          /** The location logo URL. */
          logoUrl?: string | null;
          /** The maximum location capacity when present. */
          capacityLimit?: number | null;
          /** A physical address returned by Envoy. */
          address?: {
            /** The first address line. */
            line1?: string;
            /** The second address line. */
            line2?: string | null;
            /** The address city. */
            city?: string;
            /** The address state or region. */
            state?: string;
            /** The postal code. */
            postalCode?: string;
            /** The country. */
            country?: string;
            /** The latitude coordinate. */
            latitude?: number;
            /** The longitude coordinate. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The location creation timestamp. */
          createdAt?: string;
          /** The location update timestamp. */
          updatedAt?: string;
          /** The raw location object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
    /** List Envoy employees with optional search filters and pagination. */
    "envoy.list_employees": {
      input: {
        /**
         * Envoy IDs to fetch in one list request.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The sort direction. */
        order?: "ASC" | "DESC";
        /** The employee full name search string. Envoy supports partial matches. */
        name?: string;
        /** The employee email search string. Envoy supports partial matches. */
        email?: string;
        /** The employee field to sort by. */
        sort?: "NAME" | "EMAIL";
      };
      output: {
        /** Employees returned by Envoy. */
        employees: Array<{
          /**
           * The Envoy employee ID.
           * @minLength 1
           */
          id: string;
          /**
           * The employee full name.
           * @minLength 1
           */
          name: string;
          /**
           * The employee email address.
           * @format email
           */
          email: string;
          /** The employee creation timestamp. */
          createdAt?: string;
          /** The employee update timestamp. */
          updatedAt?: string;
          /** The raw employee object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
    /** List Envoy sign-in flows with optional filters and pagination. */
    "envoy.list_flows": {
      input: {
        /**
         * Envoy IDs to fetch in one list request.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The sort direction. */
        order?: "ASC" | "DESC";
        /**
         * Location IDs used to filter flows.
         * @minItems 1
         */
        locationIds?: Array<string>;
        /** Whether to return only enabled or disabled flows. */
        enabled?: boolean;
        /** The flow name search string. */
        name?: string;
        /** The flow type. */
        type?: "VISITOR" | "EMPLOYEE";
        /** The flow field to sort by. */
        sort?: "NAME" | "CREATED_AT";
      };
      output: {
        /** Flows returned by Envoy. */
        flows: Array<{
          /**
           * The Envoy flow ID.
           * @minLength 1
           */
          id: string;
          /**
           * The flow name.
           * @minLength 1
           */
          name: string;
          /** The flow type, such as VISITOR or EMPLOYEE. */
          type?: string;
          /** Whether the flow is enabled for visitor registration. */
          enabled?: boolean;
          /** The location ID linked to the flow. */
          locationId?: string | null;
          /** The flow creation timestamp. */
          createdAt?: string;
          /** The flow update timestamp. */
          updatedAt?: string;
          /** The raw flow object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
    /** List Envoy invites with optional filters and pagination. */
    "envoy.list_invites": {
      input: {
        /**
         * Envoy IDs to fetch in one list request.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The sort direction. */
        order?: "ASC" | "DESC";
        /**
         * Location IDs used to filter invites.
         * @minItems 1
         */
        locationIds?: Array<string>;
        /**
         * Return invites expected before this UTC timestamp.
         * @format date-time
         */
        expectedArrivalAtBefore?: string;
        /**
         * Return invites expected after this UTC timestamp.
         * @format date-time
         */
        expectedArrivalAtAfter?: string;
        /** The host email address used to filter invites. */
        hostEmail?: string;
        /** The invitee email address used to filter invites. */
        inviteeEmail?: string;
        /** The invite type. */
        type?: "VISITOR" | "EMPLOYEE";
        /** The invite approval status. */
        approvalStatus?: "PENDING" | "APPROVED" | "DENIED" | "AWAITING_REVIEW";
        /** The invite field to sort by. */
        sort?: "EXPECTED_ARRIVAL_AT" | "CREATED_AT";
      };
      output: {
        /** Invites returned by Envoy. */
        invites: Array<{
          /**
           * The Envoy invite ID.
           * @minLength 1
           */
          id: string;
          /** The invite expected arrival timestamp. */
          expectedArrivalAt?: string;
          /** The invite expected departure timestamp. */
          expectedDepartureAt?: string | null;
          /** The invite type, such as VISITOR or EMPLOYEE. */
          type?: string;
          /** The current invite approval status. */
          approvalStatus?: string | null;
          /** The flow ID linked to the invite. */
          flowId?: string | null;
          /** The location ID linked to the invite. */
          locationId?: string | null;
          /** Internal notes attached to the invite. */
          notes?: string | null;
          /** A nested Envoy user view object. */
          invitee?: Record<string, unknown>;
          /** A nested Envoy user view object. */
          host?: Record<string, unknown>;
          /** The invitee photo URL when present. */
          photoUrl?: string | null;
          /** The invite creation timestamp. */
          createdAt?: string;
          /** The invite update timestamp. */
          updatedAt?: string;
          /** The raw invite object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
    /** List Envoy locations with optional filters and pagination. */
    "envoy.list_locations": {
      input: {
        /**
         * Envoy IDs to fetch in one list request.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The sort direction. */
        order?: "ASC" | "DESC";
        /**
         * Return locations created at or after this UTC timestamp.
         * @format date-time
         */
        createdAtAfter?: string;
        /**
         * Return locations created at or before this UTC timestamp.
         * @format date-time
         */
        createdAtBefore?: string;
        /** Whether to return active or inactive locations. */
        enabled?: boolean;
        /** The location field to sort by. */
        sort?: "createdAt" | "updatedAt";
      };
      output: {
        /** Locations returned by Envoy. */
        locations: Array<{
          /**
           * The Envoy location ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Envoy location name.
           * @minLength 1
           */
          name: string;
          /** Whether the location is active. */
          enabled?: boolean;
          /** The Envoy company ID that owns this location. */
          companyId?: string;
          /** The location locale. */
          locale?: string;
          /** The location time zone. */
          timezone?: string | null;
          /** The location logo URL. */
          logoUrl?: string | null;
          /** The maximum location capacity when present. */
          capacityLimit?: number | null;
          /** A physical address returned by Envoy. */
          address?: {
            /** The first address line. */
            line1?: string;
            /** The second address line. */
            line2?: string | null;
            /** The address city. */
            city?: string;
            /** The address state or region. */
            state?: string;
            /** The postal code. */
            postalCode?: string;
            /** The country. */
            country?: string;
            /** The latitude coordinate. */
            latitude?: number;
            /** The longitude coordinate. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The location creation timestamp. */
          createdAt?: string;
          /** The location update timestamp. */
          updatedAt?: string;
          /** The raw location object returned by Envoy. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Metadata returned by Envoy for this API response. */
        meta: Record<string, unknown>;
      };
    };
  }
}
