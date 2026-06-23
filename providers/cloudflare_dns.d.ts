import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a DNS record inside a Cloudflare zone. */
    "cloudflare_dns.create_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /** The DNS record type. */
        type: "A" | "AAAA" | "CAA" | "CERT" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "LOC" | "MX" | "NAPTR" | "NS" | "OPENPGPKEY" | "PTR" | "SMIMEA" | "SRV" | "SSHFP" | "SVCB" | "TLSA" | "TXT" | "URI";
        /**
         * The DNS record name.
         * @minLength 1
         */
        name: string;
        /** The DNS record content. */
        content?: string;
        /** Structured record data for advanced record types. */
        data?: Record<string, unknown>;
        /**
         * The DNS TTL in seconds. Use 1 for automatic TTL.
         * @minimum 1
         */
        ttl?: number;
        /** Whether Cloudflare proxying should be enabled. */
        proxied?: boolean;
        /** The DNS record priority. */
        priority?: number;
        /** The DNS record comment. */
        comment?: string;
        /** The DNS record tags. */
        tags?: Array<string>;
        /** Cloudflare DNS record settings. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** A Cloudflare DNS record. */
        record: {
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
        };
      };
    };
    /** Delete one DNS record from a Cloudflare zone. */
    "cloudflare_dns.delete_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare DNS record ID.
         * @minLength 1
         */
        dnsRecordId: string;
      };
      output: {
        /** The deleted DNS record ID. */
        id: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Get one DNS record from a Cloudflare zone. */
    "cloudflare_dns.get_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare DNS record ID.
         * @minLength 1
         */
        dnsRecordId: string;
      };
      output: {
        /** A Cloudflare DNS record. */
        record: {
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
        };
      };
    };
    /** Get one Cloudflare zone by zone ID. */
    "cloudflare_dns.get_zone": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
      };
      output: {
        /** A Cloudflare zone summary. */
        zone: {
          /** The zone ID. */
          id: string;
          /** The zone name. */
          name: string;
          /** The zone status. */
          status?: string;
          /** The zone type. */
          type?: string;
          /** Whether the zone is paused. */
          paused?: boolean;
          /** The zone creation timestamp. */
          createdOn?: string;
          /** The last zone update timestamp. */
          modifiedOn?: string;
          /** The assigned name servers. */
          nameServers?: Array<string>;
          /** The original name servers reported by Cloudflare. */
          originalNameServers?: Array<string>;
          account?: {
            /** The Cloudflare account ID. */
            id?: string;
            /** The Cloudflare account name. */
            name?: string;
            /** The Cloudflare account type. */
            type?: string;
          };
          /** Additional Cloudflare zone metadata. */
          meta?: Record<string, unknown>;
        };
      };
    };
    /** List Cloudflare accounts visible to the current credential. */
    "cloudflare_dns.list_accounts": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The visible Cloudflare accounts. */
        accounts: Array<{
          /** The Cloudflare account ID. */
          id: string;
          /** The Cloudflare account name. */
          name?: string;
          /** The Cloudflare account type. */
          type?: string;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** List DNS records inside one Cloudflare zone. */
    "cloudflare_dns.list_dns_records": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The DNS record type. */
        type?: "A" | "AAAA" | "CAA" | "CERT" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "LOC" | "MX" | "NAPTR" | "NS" | "OPENPGPKEY" | "PTR" | "SMIMEA" | "SRV" | "SSHFP" | "SVCB" | "TLSA" | "TXT" | "URI";
        /** Filter by record name. */
        name?: string;
        /** Filter by record content. */
        content?: string;
        /** Filter by proxy status. */
        proxied?: boolean;
        /** Whether all or any query filters must match. */
        match?: "all" | "any";
        /** The field to order by. */
        order?: string;
        /** The sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The list of DNS records. */
        records: Array<{
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** List the Cloudflare zones visible to the current API token. */
    "cloudflare_dns.list_zones": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Filter zones by exact zone name. */
        name?: string;
        /** Filter zones by zone status. */
        status?: string;
        /** Filter zones by Cloudflare account ID. */
        accountId?: string;
        /** Whether all or any query filters must match. */
        match?: "all" | "any";
        /** The field to order by. */
        order?: string;
        /** The sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The list of matching zones. */
        zones: Array<{
          /** The zone ID. */
          id: string;
          /** The zone name. */
          name: string;
          /** The zone status. */
          status?: string;
          /** The zone type. */
          type?: string;
          /** Whether the zone is paused. */
          paused?: boolean;
          /** The zone creation timestamp. */
          createdOn?: string;
          /** The last zone update timestamp. */
          modifiedOn?: string;
          /** The assigned name servers. */
          nameServers?: Array<string>;
          /** The original name servers reported by Cloudflare. */
          originalNameServers?: Array<string>;
          account?: {
            /** The Cloudflare account ID. */
            id?: string;
            /** The Cloudflare account name. */
            name?: string;
            /** The Cloudflare account type. */
            type?: string;
          };
          /** Additional Cloudflare zone metadata. */
          meta?: Record<string, unknown>;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** Patch one DNS record inside a Cloudflare zone. */
    "cloudflare_dns.update_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare DNS record ID.
         * @minLength 1
         */
        dnsRecordId: string;
        /** The DNS record type. */
        type?: "A" | "AAAA" | "CAA" | "CERT" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "LOC" | "MX" | "NAPTR" | "NS" | "OPENPGPKEY" | "PTR" | "SMIMEA" | "SRV" | "SSHFP" | "SVCB" | "TLSA" | "TXT" | "URI";
        /**
         * The DNS record name.
         * @minLength 1
         */
        name?: string;
        /** The DNS record content. */
        content?: string;
        /** Structured record data for advanced record types. */
        data?: Record<string, unknown>;
        /**
         * The DNS TTL in seconds. Use 1 for automatic TTL.
         * @minimum 1
         */
        ttl?: number;
        /** Whether Cloudflare proxying should be enabled. */
        proxied?: boolean;
        /** The DNS record priority. */
        priority?: number;
        /** The DNS record comment. */
        comment?: string;
        /** The DNS record tags. */
        tags?: Array<string>;
        /** Cloudflare DNS record settings. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** A Cloudflare DNS record. */
        record: {
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
        };
      };
    };
  }
}
