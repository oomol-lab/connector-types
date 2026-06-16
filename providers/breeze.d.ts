import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Breeze person by Breeze person ID. */
    "breeze.get_person": {
      input: {
        /**
         * Breeze church subdomain without the .breezechms.com suffix.
         * @minLength 1
         */
        subdomain?: string;
        /**
         * Breeze person identifier to read.
         * @minimum 1
         */
        person_id: number;
        /** Whether to request the full Breeze person details payload. */
        details?: boolean;
      };
      output: {
        /** The Breeze person record. */
        person: {
          /**
           * Breeze person identifier.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        };
      };
    };
    /** List people from Breeze with optional details, pagination, and filter_json criteria. */
    "breeze.list_people": {
      input: {
        /**
         * Breeze church subdomain without the .breezechms.com suffix.
         * @minLength 1
         */
        subdomain?: string;
        /** Whether to request the full Breeze person details payload. */
        details?: boolean;
        /**
         * Maximum number of Breeze people to return. Use 0 to request all records.
         * @minimum 0
         */
        limit?: number;
        /**
         * Number of Breeze people to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Breeze filter_json object keyed by official Breeze profile field or filter names. */
        filter_json?: Record<string, string | Array<string>>;
      };
      output: {
        /** Breeze people returned by the request. */
        people: Array<{
          /**
           * Breeze person identifier.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Breeze profile sections and fields used to construct Breeze people filters. */
    "breeze.list_profile_fields": {
      input: {
        /**
         * Breeze church subdomain without the .breezechms.com suffix.
         * @minLength 1
         */
        subdomain?: string;
      };
      output: {
        /** Breeze profile sections. */
        sections: Array<{
          /**
           * Breeze profile section identifier.
           * @minLength 1
           */
          id: string;
          /** Profile fields within the section. */
          fields: Array<{
            /**
             * Breeze profile field identifier.
             * @minLength 1
             */
            field_id: string;
            /**
             * Breeze profile field display name.
             * @minLength 1
             */
            name: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Breeze tag folders. */
    "breeze.list_tag_folders": {
      input: {
        /**
         * Breeze church subdomain without the .breezechms.com suffix.
         * @minLength 1
         */
        subdomain?: string;
      };
      output: {
        /** Breeze tag folders. */
        folders: Array<{
          /**
           * Breeze tag folder identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Breeze tag folder name.
           * @minLength 1
           */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Breeze tags, optionally narrowed to one Breeze tag folder. */
    "breeze.list_tags": {
      input: {
        /**
         * Breeze church subdomain without the .breezechms.com suffix.
         * @minLength 1
         */
        subdomain?: string;
        /**
         * Breeze tag folder identifier used to filter tags.
         * @minimum 1
         */
        folder_id?: number;
      };
      output: {
        /** Breeze tags. */
        tags: Array<{
          /**
           * Breeze tag identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Breeze tag name.
           * @minLength 1
           */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
