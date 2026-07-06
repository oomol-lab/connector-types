import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the authenticated Juniper Mist administrator profile and accessible organizations or sites. */
    "juniper_mist.get_self": {
      input: Record<string, never>;
      output: {
        /** Juniper Mist authenticated administrator profile. */
        self: {
          /** Juniper Mist administrator ID. */
          id: string | null;
          /** Administrator email address. */
          email: string | null;
          /** Administrator first name. */
          firstName: string | null;
          /** Administrator last name. */
          lastName: string | null;
          /** Administrator display name. */
          name: string | null;
          /** Organization and site privileges for the administrator. */
          privileges: Array<Record<string, unknown>>;
          /** Organizations available to the administrator. */
          organizations: Array<{
            /** Juniper Mist organization ID. */
            id: string;
            /** Juniper Mist organization name, when available. */
            name: string | null;
            /** Privilege granted to the authenticated administrator. */
            privilege: string | null;
            /** Role granted to the authenticated administrator. */
            role: string | null;
            /** Raw organization privilege object returned by Juniper Mist. */
            raw: Record<string, unknown>;
          }>;
          /** Sites available to the administrator. */
          sites: Array<{
            /** Juniper Mist site ID. */
            id: string;
            /** Juniper Mist site name, when available. */
            name: string | null;
            /** Juniper Mist organization ID that owns the site, when available. */
            orgId: string | null;
            /** Privilege granted to the authenticated administrator. */
            privilege: string | null;
            /** Role granted to the authenticated administrator. */
            role: string | null;
            /** Raw site privilege object returned by Juniper Mist. */
            raw: Record<string, unknown>;
          }>;
          /** Raw self profile returned by Juniper Mist. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List sites in a Juniper Mist organization with optional pagination. */
    "juniper_mist.list_org_sites": {
      input: {
        /**
         * Juniper Mist organization ID.
         * @minLength 1
         */
        orgId: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * One-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Sites returned by Juniper Mist. */
        sites: Array<{
          /** Juniper Mist site ID. */
          id: string;
          /** Site name. */
          name: string | null;
          /** Juniper Mist organization ID that owns the site, when available. */
          orgId: string | null;
          /** Site timezone. */
          timezone: string | null;
          /** Site country code. */
          countryCode: string | null;
          /** Site street address. */
          address: string | null;
          /** Site latitude and longitude object returned by Juniper Mist. */
          latlng: Record<string, unknown> | null;
          /** Raw site object returned by Juniper Mist. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List devices in a Juniper Mist site with optional type, name, and pagination filters. */
    "juniper_mist.list_site_devices": {
      input: {
        /**
         * Juniper Mist site ID.
         * @minLength 1
         */
        siteId: string;
        /** Juniper Mist device type filter. */
        type?: "all" | "ap" | "switch" | "gateway";
        /**
         * Device name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * One-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Devices returned by Juniper Mist. */
        devices: Array<{
          /** Juniper Mist device ID. */
          id: string | null;
          /** Device name. */
          name: string | null;
          /** Device MAC address. */
          mac: string | null;
          /** Device serial number. */
          serial: string | null;
          /** Device model. */
          model: string | null;
          /** Device type. */
          type: string | null;
          /** Juniper Mist site ID for the device. */
          siteId: string | null;
          /** Juniper Mist organization ID for the device. */
          orgId: string | null;
          /** Device status, when returned by Juniper Mist. */
          status: string | null;
          /** Raw device object returned by Juniper Mist. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
