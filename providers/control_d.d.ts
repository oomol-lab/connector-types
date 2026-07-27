import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one root-folder custom DNS rule from a Control D profile. */
    "control_d.delete_profile_rule": {
      input: {
        /**
         * The Control D profile primary key.
         * @minLength 1
         */
        profileId: string;
        /**
         * The Control D rule primary key, usually a hostname or wildcard pattern.
         * @minLength 1
         */
        ruleId: string;
        /**
         * Optional child organization ID forwarded as the X-Force-Org-Id header.
         * @minLength 1
         */
        forceOrgId?: string;
      };
      output: {
        /** Whether the Control D rule delete request succeeded. */
        deleted: true;
        /**
         * The profile primary key that owned the deleted rule.
         * @minLength 1
         */
        profileId: string;
        /**
         * The rule primary key that was deleted.
         * @minLength 1
         */
        ruleId: string;
        /** The optional confirmation message returned by Control D. */
        message?: string;
      };
    };
    /** Return the current IP address and datacenter seen by the Control D API for troubleshooting API token allowed-IP issues. */
    "control_d.get_current_ip": {
      input: Record<string, never>;
      output: {
        /** The current IP address seen by the Control D API. */
        ip: string;
        /** The IP version label returned by Control D. */
        type: string;
        /** The organization or ISP associated with the current IP address. */
        org: string;
        /** The country code associated with the current IP address. */
        country: string;
        /** The Control D datacenter that handled the request. */
        handler: string;
      };
    };
    /** Fetch one Control D profile by primary key. */
    "control_d.get_profile": {
      input: {
        /**
         * The Control D profile primary key.
         * @minLength 1
         */
        profileId: string;
        /**
         * Optional child organization ID forwarded as the X-Force-Org-Id header.
         * @minLength 1
         */
        forceOrgId?: string;
      };
      output: {
        /** The Control D profile returned by the request. */
        profile: {
          /** The Control D profile primary key. */
          PK: string;
          /** The profile display name returned by Control D. */
          name?: string;
          /** The analytics level configured for the profile. */
          stats?: number;
          /** The nested profile summary returned by Control D. */
          profile?: {
            /** The default action configuration returned by Control D. */
            da?: Array<string>;
            /** A count summary returned by Control D. */
            flt?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            grp?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** The profile option summary returned by Control D. */
            opt?: {
              /** The number of profile options configured on the profile. */
              count: number;
              /** The profile options returned by Control D. */
              data?: Array<{
                /** The profile option primary key returned by Control D. */
                PK: string;
                /** One profile option value returned by Control D. */
                value: number | string | Record<string, string> | Array<string>;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            svc?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            cflt?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            rule?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            ipflt?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The Unix timestamp of the last profile update. */
          updated?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List the root-folder custom DNS rules configured on a Control D profile. */
    "control_d.list_profile_rules": {
      input: {
        /**
         * The Control D profile primary key.
         * @minLength 1
         */
        profileId: string;
        /**
         * Optional child organization ID forwarded as the X-Force-Org-Id header.
         * @minLength 1
         */
        forceOrgId?: string;
      };
      output: {
        /** The custom DNS rules returned by Control D. */
        rules: Array<{
          /** The rule primary key, usually the hostname pattern. */
          PK: string;
          /** The numeric folder identifier that contains the rule. */
          group: number;
          /** The evaluation order of the rule within the folder. */
          order: number;
          /** The action payload of a Control D custom rule. */
          action: {
            /** The Control D rule action code: 0=BLOCK, 1=BYPASS, 2=SPOOF, 3=REDIRECT. */
            do: number;
            /** The Control D rule status code: 0=disabled, 1=enabled. */
            status: number;
            /** The spoof target or redirect location returned by Control D. */
            via?: string;
            /** The IPv6 spoof target returned by Control D. */
            via_v6?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Control D profiles available to the authenticated API token. */
    "control_d.list_profiles": {
      input: {
        /**
         * Optional child organization ID forwarded as the X-Force-Org-Id header.
         * @minLength 1
         */
        forceOrgId?: string;
      };
      output: {
        /** The profiles returned by Control D. */
        profiles: Array<{
          /** The Control D profile primary key. */
          PK: string;
          /** The profile display name returned by Control D. */
          name?: string;
          /** The analytics level configured for the profile. */
          stats?: number;
          /** The nested profile summary returned by Control D. */
          profile?: {
            /** The default action configuration returned by Control D. */
            da?: Array<string>;
            /** A count summary returned by Control D. */
            flt?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            grp?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** The profile option summary returned by Control D. */
            opt?: {
              /** The number of profile options configured on the profile. */
              count: number;
              /** The profile options returned by Control D. */
              data?: Array<{
                /** The profile option primary key returned by Control D. */
                PK: string;
                /** One profile option value returned by Control D. */
                value: number | string | Record<string, string> | Array<string>;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            svc?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            cflt?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            rule?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            /** A count summary returned by Control D. */
            ipflt?: {
              /** The number of items reported by Control D for this area. */
              count: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** The Unix timestamp of the last profile update. */
          updated?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Control D service categories that can be used for service discovery. */
    "control_d.list_service_categories": {
      input: Record<string, never>;
      output: {
        /** The service categories returned by Control D. */
        categories: Array<{
          /** The service category primary key returned by Control D. */
          PK: string;
          /** The display name of the service category. */
          name: string;
          /** The description of the service category. */
          description: string;
          /** The number of services in the category. */
          count: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Control D services available in one service category. */
    "control_d.list_services_by_category": {
      input: {
        /**
         * The Control D service category primary key.
         * @minLength 1
         */
        category: string;
      };
      output: {
        /** The services returned by Control D. */
        services: Array<{
          /** The service primary key returned by Control D. */
          PK: string;
          /** The display name of the service. */
          name: string;
          /** The category primary key that owns the service. */
          category: string;
          /** The default unlock or redirect location returned by Control D. */
          unlock_location: string;
          /** An optional warning attached to the service. */
          warning?: string;
          /** Alternative location codes supported by the service. */
          locations?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create or replace root-folder custom DNS rules on a Control D profile for one or more hostname patterns. */
    "control_d.upsert_profile_rule": {
      input: {
        /**
         * The Control D profile primary key.
         * @minLength 1
         */
        profileId: string;
        /**
         * Optional child organization ID forwarded as the X-Force-Org-Id header.
         * @minLength 1
         */
        forceOrgId?: string;
        /** The Control D rule action code: 0=BLOCK, 1=BYPASS, 2=SPOOF, 3=REDIRECT. */
        do: number;
        /**
         * The Control D rule status code: 0=disabled, 1=enabled.
         * @default 1
         */
        status?: number;
        /**
         * The hostname patterns to create or update in Control D.
         * @minItems 1
         */
        hostnames: Array<string>;
        /**
         * The spoof target or redirect location to send upstream.
         * @minLength 1
         */
        via?: string;
        /**
         * The IPv6 spoof target to send upstream when do=2.
         * @minLength 1
         */
        viaV6?: string;
      };
      output: {
        /** The root-folder rules that match the requested hostname patterns after the write. */
        rules: Array<{
          /** The rule primary key, usually the hostname pattern. */
          PK: string;
          /** The numeric folder identifier that contains the rule. */
          group: number;
          /** The evaluation order of the rule within the folder. */
          order: number;
          /** The action payload of a Control D custom rule. */
          action: {
            /** The Control D rule action code: 0=BLOCK, 1=BYPASS, 2=SPOOF, 3=REDIRECT. */
            do: number;
            /** The Control D rule status code: 0=disabled, 1=enabled. */
            status: number;
            /** The spoof target or redirect location returned by Control D. */
            via?: string;
            /** The IPv6 spoof target returned by Control D. */
            via_v6?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
  }
}
