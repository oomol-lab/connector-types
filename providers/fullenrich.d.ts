import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current FullEnrich credit balance for the workspace. */
    "fullenrich.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** The number of credits available in the workspace. */
        balance: number;
      };
    };
    /** Look up one FullEnrich company by domain or professional-network identifier. */
    "fullenrich.lookup_company": {
      input: {
        /**
         * The company domain to look up.
         * @minLength 1
         * @pattern \S
         */
        domain?: string;
        /**
         * The professional network URL of the company.
         * @format uri
         */
        professional_network_url?: string;
        /** The professional network ID of the company. */
        professional_network_id?: number;
      };
      output: {
        /** The matching companies returned by FullEnrich. */
        companies: Array<Record<string, unknown>>;
        /** The lookup metadata returned by FullEnrich. */
        metadata: {
          /** The number of credits consumed by the lookup. */
          credits?: number;
        } | null;
        /** A JSON object returned by FullEnrich. */
        raw: Record<string, unknown>;
      };
    };
    /** Look up one FullEnrich person by professional-network identifier or name. */
    "fullenrich.lookup_person": {
      input: {
        /**
         * The full name of the person to look up.
         * @minLength 1
         * @pattern \S
         */
        person_name?: string;
        /**
         * The professional network profile URL of the person.
         * @format uri
         */
        person_professional_network_url?: string;
        /** The professional network profile ID of the person. */
        person_professional_network_id?: number;
        /**
         * The professional network URL of the company used to disambiguate a person-name lookup.
         * @format uri
         */
        company_professional_network_url?: string;
        /** The professional network ID of the company used to disambiguate a person-name lookup. */
        company_professional_network_id?: number;
        /**
         * The domain of the company used to disambiguate a person-name lookup.
         * @minLength 1
         * @pattern \S
         */
        company_domain?: string;
      };
      output: {
        /** The matching people returned by FullEnrich. */
        people: Array<Record<string, unknown>>;
        /** The lookup metadata returned by FullEnrich. */
        metadata: {
          /** The number of credits consumed by the lookup. */
          credits?: number;
        } | null;
        /** A JSON object returned by FullEnrich. */
        raw: Record<string, unknown>;
      };
    };
  }
}
