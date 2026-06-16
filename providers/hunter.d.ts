import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve information about the authenticated Hunter account. */
    "hunter.account_information": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Retrieve combined person and company enrichment data from Hunter. */
    "hunter.combined_enrichment": {
      input: {
        /**
         * The email address used to enrich the person.
         * @format email
         */
        email?: string;
        /**
         * The LinkedIn handle used to enrich the person.
         * @minLength 1
         */
        linkedin_handle?: string;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve company enrichment data for a domain from Hunter. */
    "hunter.company_enrichment": {
      input: {
        /**
         * The bare company domain used to enrich the company.
         * @minLength 1
         */
        domain: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a new lead in Hunter. */
    "hunter.create_lead": {
      input: {
        /**
         * The lead email address.
         * @format email
         */
        email: string;
        /**
         * The lead first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The lead last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The lead job position.
         * @minLength 1
         */
        position?: string;
        /**
         * The lead company name.
         * @minLength 1
         */
        company?: string;
        /**
         * The lead company industry.
         * @minLength 1
         */
        company_industry?: string;
        /**
         * The lead company size.
         * @minLength 1
         */
        company_size?: string;
        /**
         * The confidence score associated with the lead email.
         * @minimum 0
         * @maximum 100
         */
        confidence_score?: number;
        /**
         * The lead company website.
         * @minLength 1
         */
        website?: string;
        /**
         * The ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country_code?: string;
        /**
         * The lead LinkedIn URL.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * The lead phone number.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * The lead Twitter handle.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Free-form notes for the lead.
         * @minLength 1
         */
        notes?: string;
        /**
         * The source associated with the lead.
         * @minLength 1
         */
        source?: string;
        /**
         * The lead list ID to attach the lead to.
         * @exclusiveMinimum 0
         */
        leads_list_id?: number;
        /**
         * Lead list IDs to attach the lead to.
         * @minItems 1
         */
        leads_list_ids?: Array<number>;
        /** Custom attribute values keyed by Hunter custom attribute slug. */
        custom_attributes?: Record<string, string>;
      };
      output: Record<string, unknown>;
    };
    /** Create a new Hunter leads list. */
    "hunter.create_leads_list": {
      input: {
        /**
         * The name of the Hunter leads list.
         * @minLength 1
         */
        name: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete an existing Hunter lead. */
    "hunter.delete_lead": {
      input: {
        /**
         * The Hunter resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** Discover companies in Hunter using a natural-language query or filters. */
    "hunter.discover_companies": {
      input: {
        /**
         * The natural-language query used to discover matching companies.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of companies to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of companies to skip for pagination.
         * @minimum 0
         */
        offset?: number;
        /** The structured filters object supported by Hunter Discover. */
        filters?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Search public email addresses for a company domain in Hunter. */
    "hunter.domain_search": {
      input: {
        /**
         * The domain name to search for. Required if company is not provided.
         * @minLength 1
         */
        domain?: string;
        /**
         * The company name to search for. Required if domain is not provided.
         * @minLength 1
         */
        company?: string;
        /**
         * The maximum number of email addresses to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of results to skip for pagination.
         * @minimum 0
         */
        offset?: number;
        /** The type of email addresses to return. */
        type?: "personal" | "generic";
        /**
         * The seniority filters to apply.
         * @minItems 1
         */
        seniority?: Array<string>;
        /**
         * The department filters to apply.
         * @minItems 1
         */
        department?: Array<string>;
        /**
         * The fields that must be present on each returned result.
         * @minItems 1
         */
        required_field?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Count email addresses available for a company domain in Hunter. */
    "hunter.email_count": {
      input: {
        /**
         * The domain name to count email addresses for.
         * @minLength 1
         */
        domain?: string;
        /**
         * The company name to count email addresses for when domain is not provided.
         * @minLength 1
         */
        company?: string;
        /** The type of email addresses to count. */
        type?: "personal" | "generic";
      };
      output: Record<string, unknown>;
    };
    /** Find the most likely professional email address for a person in Hunter. */
    "hunter.email_finder": {
      input: {
        /**
         * The company domain to search. Takes precedence over company when both are provided.
         * @minLength 1
         */
        domain?: string;
        /**
         * The company name to search when domain is not provided.
         * @minLength 1
         */
        company?: string;
        /**
         * The person's full name. Required if first_name and last_name are not both provided.
         * @minLength 1
         */
        full_name?: string;
        /**
         * The person's first name. Required with last_name when full_name is not provided.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The person's last name. Required with first_name when full_name is not provided.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The maximum duration in seconds for the finder request.
         * @minimum 3
         * @maximum 20
         */
        max_duration?: number;
        /**
         * The LinkedIn handle used to identify the target person.
         * @minLength 1
         */
        linkedin_handle?: string;
      };
      output: Record<string, unknown>;
    };
    /** Verify the deliverability of an email address in Hunter. */
    "hunter.email_verifier": {
      input: {
        /**
         * The email address to verify.
         * @format email
         */
        email: string;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve a single Hunter lead. */
    "hunter.get_lead": {
      input: {
        /**
         * The Hunter resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** List custom lead attributes configured in Hunter. */
    "hunter.list_custom_attributes": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List leads saved in the authenticated Hunter account. */
    "hunter.list_leads": {
      input: {
        /**
         * Only return leads belonging to this list.
         * @exclusiveMinimum 0
         */
        leads_list_id?: number;
        /**
         * Filter leads by email.
         * @minLength 1
         */
        email?: string;
        /**
         * Filter leads by first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * Filter leads by last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * Filter leads by position.
         * @minLength 1
         */
        position?: string;
        /**
         * Filter leads by company.
         * @minLength 1
         */
        company?: string;
        /**
         * Filter leads by industry.
         * @minLength 1
         */
        industry?: string;
        /**
         * Filter leads by website.
         * @minLength 1
         */
        website?: string;
        /**
         * Filter leads by country code.
         * @minLength 2
         * @maxLength 2
         */
        country_code?: string;
        /**
         * Filter leads by company size.
         * @minLength 1
         */
        company_size?: string;
        /**
         * Filter leads by source.
         * @minLength 1
         */
        source?: string;
        /**
         * Filter leads by Twitter handle.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Filter leads by LinkedIn URL.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * Filter leads by phone number.
         * @minLength 1
         */
        phone_number?: string;
        /** Filter leads by synchronization status. */
        sync_status?: "pending" | "error" | "success";
        /**
         * Filter leads by sending statuses.
         * @minItems 1
         */
        sending_status?: Array<"clicked" | "opened" | "sent" | "pending" | "error" | "bounced" | "unsubscribed" | "replied" | "~">;
        /**
         * Filter leads by verification statuses.
         * @minItems 1
         */
        verification_status?: Array<"accept_all" | "disposable" | "invalid" | "unknown" | "valid" | "webmail" | "pending">;
        /** Filter by last activity presence. */
        last_activity_at?: "*" | "~";
        /** Filter by last contact presence. */
        last_contacted_at?: "*" | "~";
        /** Custom attribute filters keyed by Hunter custom attribute slug. */
        custom_attributes?: Record<string, string>;
        /**
         * Search leads by first name, last name, or email.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of leads to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The number of leads to skip for pagination.
         * @minimum 0
         * @maximum 100000
         */
        offset?: number;
      };
      output: Record<string, unknown>;
    };
    /** List Hunter leads lists. */
    "hunter.list_leads_lists": {
      input: {
        /**
         * The maximum number of lead lists to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of lead lists to skip for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve person enrichment data from Hunter by email address or LinkedIn handle. */
    "hunter.people_enrichment": {
      input: {
        /**
         * The email address used to enrich the person.
         * @format email
         */
        email?: string;
        /**
         * The LinkedIn handle used to enrich the person.
         * @minLength 1
         */
        linkedin_handle?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update an existing Hunter lead. */
    "hunter.update_lead": {
      input: {
        /**
         * The Hunter resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The lead email address.
         * @format email
         */
        email?: string;
        /**
         * The lead first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The lead last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The lead job position.
         * @minLength 1
         */
        position?: string;
        /**
         * The lead company name.
         * @minLength 1
         */
        company?: string;
        /**
         * The lead company industry.
         * @minLength 1
         */
        company_industry?: string;
        /**
         * The lead company size.
         * @minLength 1
         */
        company_size?: string;
        /**
         * The confidence score associated with the lead email.
         * @minimum 0
         * @maximum 100
         */
        confidence_score?: number;
        /**
         * The lead company website.
         * @minLength 1
         */
        website?: string;
        /**
         * The ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country_code?: string;
        /**
         * The lead LinkedIn URL.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * The lead phone number.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * The lead Twitter handle.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Free-form notes for the lead.
         * @minLength 1
         */
        notes?: string;
        /**
         * The source associated with the lead.
         * @minLength 1
         */
        source?: string;
        /**
         * The lead list ID to attach the lead to.
         * @exclusiveMinimum 0
         */
        leads_list_id?: number;
        /**
         * Lead list IDs to attach the lead to.
         * @minItems 1
         */
        leads_list_ids?: Array<number>;
        /** Custom attribute values keyed by Hunter custom attribute slug. */
        custom_attributes?: Record<string, string>;
      };
      output: Record<string, unknown>;
    };
    /** Create or update a Hunter lead by email address. */
    "hunter.upsert_lead": {
      input: {
        /**
         * The lead email address.
         * @format email
         */
        email: string;
        /**
         * The lead first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The lead last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The lead job position.
         * @minLength 1
         */
        position?: string;
        /**
         * The lead company name.
         * @minLength 1
         */
        company?: string;
        /**
         * The lead company industry.
         * @minLength 1
         */
        company_industry?: string;
        /**
         * The lead company size.
         * @minLength 1
         */
        company_size?: string;
        /**
         * The confidence score associated with the lead email.
         * @minimum 0
         * @maximum 100
         */
        confidence_score?: number;
        /**
         * The lead company website.
         * @minLength 1
         */
        website?: string;
        /**
         * The ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country_code?: string;
        /**
         * The lead LinkedIn URL.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * The lead phone number.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * The lead Twitter handle.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Free-form notes for the lead.
         * @minLength 1
         */
        notes?: string;
        /**
         * The source associated with the lead.
         * @minLength 1
         */
        source?: string;
        /**
         * The lead list ID to attach the lead to.
         * @exclusiveMinimum 0
         */
        leads_list_id?: number;
        /**
         * Lead list IDs to attach the lead to.
         * @minItems 1
         */
        leads_list_ids?: Array<number>;
        /** Custom attribute values keyed by Hunter custom attribute slug. */
        custom_attributes?: Record<string, string>;
      };
      output: Record<string, unknown>;
    };
  }
}
