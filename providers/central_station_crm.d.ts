import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a company in CentralStationCRM. */
    "central_station_crm.create_company": {
      input: {
        /** The CentralStationCRM company payload. */
        company: {
          /**
           * The company name.
           * @minLength 1
           */
          name: string;
          /**
           * Background notes about the company.
           * @minLength 1
           */
          background?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          group_id?: number;
          [key: string]: unknown;
        };
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** A CentralStationCRM company. */
        company: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The company name. */
          name?: string | null;
          /** Background notes about the company. */
          background?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a deal in CentralStationCRM. */
    "central_station_crm.create_deal": {
      input: {
        /** The CentralStationCRM deal payload. */
        deal: {
          /**
           * The deal name.
           * @minLength 1
           */
          name: string;
          /** The monetary value of the deal. */
          value?: string | null;
          /** The billing type of the deal value. */
          value_type?: string | null;
          /**
           * The target date for the deal.
           * @format date
           */
          target_date?: string | null;
          /**
           * The current deal state.
           * @minLength 1
           */
          current_state?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          company_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          group_id?: number;
          /**
           * Background notes about the deal.
           * @minLength 1
           */
          background?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          deal_type_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          deal_type_stage_id?: number;
          /**
           * The probability of winning the deal in percent.
           * @minimum 0
           * @maximum 100
           */
          probability?: number;
          /**
           * The deal currency code.
           * @minLength 1
           */
          currency?: string;
          /**
           * Comma-separated person identifiers to assign to the deal.
           * @minLength 1
           */
          person_ids_set?: string;
          [key: string]: unknown;
        };
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** A CentralStationCRM deal. */
        deal: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The linked company identifier. */
          company_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The deal name. */
          name?: string | null;
          /** The monetary value of the deal. */
          value?: string | null;
          /** The billing type of the deal value. */
          value_type?: string | null;
          /** The total value sum returned by CentralStationCRM. */
          value_sum?: string | null;
          /** The value count returned by CentralStationCRM. */
          value_count?: string | null;
          /** The current deal state. */
          current_state?: string | null;
          /**
           * The target date for the deal.
           * @format date
           */
          target_date?: string | null;
          /**
           * The timestamp when the deal was finished.
           * @format date-time
           */
          finished_at?: string | null;
          /** The deal currency code. */
          currency?: string | null;
          /** Background notes about the deal. */
          background?: string | null;
          /** The pipeline identifier. */
          deal_type_id?: number | null;
          /** The pipeline stage identifier. */
          deal_type_stage_id?: number | null;
          /** The probability of winning the deal in percent. */
          probability?: number | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a person in CentralStationCRM. */
    "central_station_crm.create_person": {
      input: {
        /** The CentralStationCRM person payload. */
        person: {
          /**
           * The person's last name or display name.
           * @minLength 1
           */
          name: string;
          /**
           * The person's first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * Background notes about the person.
           * @minLength 1
           */
          background?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          group_id?: number;
          /**
           * The person's language or country code.
           * @minLength 1
           */
          country_code?: string;
          /**
           * The stored salutation.
           * @minLength 1
           */
          salutation?: string;
          /**
           * The person's title.
           * @minLength 1
           */
          title?: string;
          [key: string]: unknown;
        };
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** A CentralStationCRM person. */
        person: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The person's first name. */
          first_name?: string | null;
          /** The person's last name or display name. */
          name?: string | null;
          /** Background notes about the person. */
          background?: string | null;
          /** The stored salutation. */
          salutation?: string | null;
          /** The person's title. */
          title?: string | null;
          /** The person's language or country code. */
          country_code?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a company from CentralStationCRM. */
    "central_station_crm.delete_company": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** Whether the record was deleted. */
        deleted: boolean;
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a deal from CentralStationCRM. */
    "central_station_crm.delete_deal": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** Whether the record was deleted. */
        deleted: boolean;
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a person from CentralStationCRM. */
    "central_station_crm.delete_person": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** Whether the record was deleted. */
        deleted: boolean;
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one CentralStationCRM company by identifier. */
    "central_station_crm.get_company": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
      };
      output: {
        /** A CentralStationCRM company. */
        company: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The company name. */
          name?: string | null;
          /** Background notes about the company. */
          background?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one CentralStationCRM deal by identifier. */
    "central_station_crm.get_deal": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
      };
      output: {
        /** A CentralStationCRM deal. */
        deal: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The linked company identifier. */
          company_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The deal name. */
          name?: string | null;
          /** The monetary value of the deal. */
          value?: string | null;
          /** The billing type of the deal value. */
          value_type?: string | null;
          /** The total value sum returned by CentralStationCRM. */
          value_sum?: string | null;
          /** The value count returned by CentralStationCRM. */
          value_count?: string | null;
          /** The current deal state. */
          current_state?: string | null;
          /**
           * The target date for the deal.
           * @format date
           */
          target_date?: string | null;
          /**
           * The timestamp when the deal was finished.
           * @format date-time
           */
          finished_at?: string | null;
          /** The deal currency code. */
          currency?: string | null;
          /** Background notes about the deal. */
          background?: string | null;
          /** The pipeline identifier. */
          deal_type_id?: number | null;
          /** The pipeline stage identifier. */
          deal_type_stage_id?: number | null;
          /** The probability of winning the deal in percent. */
          probability?: number | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one CentralStationCRM person by identifier. */
    "central_station_crm.get_person": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
      };
      output: {
        /** A CentralStationCRM person. */
        person: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The person's first name. */
          first_name?: string | null;
          /** The person's last name or display name. */
          name?: string | null;
          /** Background notes about the person. */
          background?: string | null;
          /** The stored salutation. */
          salutation?: string | null;
          /** The person's title. */
          title?: string | null;
          /** The person's language or country code. */
          country_code?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current CentralStationCRM API user. */
    "central_station_crm.get_user": {
      input: Record<string, never>;
      output: {
        /** A CentralStationCRM user. */
        user: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The user's first name. */
          first?: string | null;
          /** The user's last name. */
          last?: string | null;
          /** The user's last name as returned by CentralStationCRM. */
          name?: string | null;
          /** The user's login email address. */
          login?: string | null;
          /** The current account subdomain or account name. */
          current_account?: string | null;
          /** The user's selected timezone. */
          timezone?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** List companies in CentralStationCRM with optional paging and tag filters. */
    "central_station_crm.list_companies": {
      input: {
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage?: number;
        /**
         * The CentralStationCRM order expression to apply.
         * @minLength 1
         */
        order?: string;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        tag_id?: number;
        /**
         * The CentralStationCRM tag name to filter by.
         * @minLength 1
         */
        tag_name?: string;
      };
      output: {
        /** The companies returned by CentralStationCRM. */
        companies: Array<{
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The company name. */
          name?: string | null;
          /** Background notes about the company. */
          background?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page: number | null;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage: number | null;
        /** The raw array returned by CentralStationCRM. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List deals in CentralStationCRM with optional paging and tag filters. */
    "central_station_crm.list_deals": {
      input: {
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage?: number;
        /**
         * The CentralStationCRM order expression to apply.
         * @minLength 1
         */
        order?: string;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        tag_id?: number;
        /**
         * The CentralStationCRM tag name to filter by.
         * @minLength 1
         */
        tag_name?: string;
      };
      output: {
        /** The deals returned by CentralStationCRM. */
        deals: Array<{
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The linked company identifier. */
          company_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The deal name. */
          name?: string | null;
          /** The monetary value of the deal. */
          value?: string | null;
          /** The billing type of the deal value. */
          value_type?: string | null;
          /** The total value sum returned by CentralStationCRM. */
          value_sum?: string | null;
          /** The value count returned by CentralStationCRM. */
          value_count?: string | null;
          /** The current deal state. */
          current_state?: string | null;
          /**
           * The target date for the deal.
           * @format date
           */
          target_date?: string | null;
          /**
           * The timestamp when the deal was finished.
           * @format date-time
           */
          finished_at?: string | null;
          /** The deal currency code. */
          currency?: string | null;
          /** Background notes about the deal. */
          background?: string | null;
          /** The pipeline identifier. */
          deal_type_id?: number | null;
          /** The pipeline stage identifier. */
          deal_type_stage_id?: number | null;
          /** The probability of winning the deal in percent. */
          probability?: number | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page: number | null;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage: number | null;
        /** The raw array returned by CentralStationCRM. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List people in CentralStationCRM with optional paging and tag filters. */
    "central_station_crm.list_people": {
      input: {
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage?: number;
        /**
         * The CentralStationCRM order expression to apply.
         * @minLength 1
         */
        order?: string;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        tag_id?: number;
        /**
         * The CentralStationCRM tag name to filter by.
         * @minLength 1
         */
        tag_name?: string;
      };
      output: {
        /** The people returned by CentralStationCRM. */
        people: Array<{
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The person's first name. */
          first_name?: string | null;
          /** The person's last name or display name. */
          name?: string | null;
          /** Background notes about the person. */
          background?: string | null;
          /** The stored salutation. */
          salutation?: string | null;
          /** The person's title. */
          title?: string | null;
          /** The person's language or country code. */
          country_code?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page: number | null;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage: number | null;
        /** The raw array returned by CentralStationCRM. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Search CentralStationCRM companies by documented search fields. */
    "central_station_crm.search_companies": {
      input: {
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage?: number;
        /**
         * The company name search term.
         * @minLength 1
         */
        name?: string;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
      };
      output: {
        /** The matching companies returned by CentralStationCRM. */
        companies: Array<{
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The company name. */
          name?: string | null;
          /** Background notes about the company. */
          background?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page: number | null;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage: number | null;
        /** The raw array returned by CentralStationCRM. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Search CentralStationCRM deals by documented search fields. */
    "central_station_crm.search_deals": {
      input: {
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage?: number;
        /**
         * The deal name search term.
         * @minLength 1
         */
        name?: string;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
      };
      output: {
        /** The matching deals returned by CentralStationCRM. */
        deals: Array<{
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The linked company identifier. */
          company_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The deal name. */
          name?: string | null;
          /** The monetary value of the deal. */
          value?: string | null;
          /** The billing type of the deal value. */
          value_type?: string | null;
          /** The total value sum returned by CentralStationCRM. */
          value_sum?: string | null;
          /** The value count returned by CentralStationCRM. */
          value_count?: string | null;
          /** The current deal state. */
          current_state?: string | null;
          /**
           * The target date for the deal.
           * @format date
           */
          target_date?: string | null;
          /**
           * The timestamp when the deal was finished.
           * @format date-time
           */
          finished_at?: string | null;
          /** The deal currency code. */
          currency?: string | null;
          /** Background notes about the deal. */
          background?: string | null;
          /** The pipeline identifier. */
          deal_type_id?: number | null;
          /** The pipeline stage identifier. */
          deal_type_stage_id?: number | null;
          /** The probability of winning the deal in percent. */
          probability?: number | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page: number | null;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage: number | null;
        /** The raw array returned by CentralStationCRM. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Search CentralStationCRM people by documented search fields. */
    "central_station_crm.search_people": {
      input: {
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage?: number;
        /**
         * The person name search term.
         * @minLength 1
         */
        name?: string;
        /**
         * The first name search term.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The email search term.
         * @minLength 1
         */
        email?: string;
        /**
         * The phone search term.
         * @minLength 1
         */
        phone?: string;
        /**
         * Comma-separated CentralStationCRM includes parameter.
         * @minLength 1
         */
        includes?: string;
        /**
         * Comma-separated CentralStationCRM methods parameter.
         * @minLength 1
         */
        methods?: string;
      };
      output: {
        /** The matching people returned by CentralStationCRM. */
        people: Array<{
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The person's first name. */
          first_name?: string | null;
          /** The person's last name or display name. */
          name?: string | null;
          /** Background notes about the person. */
          background?: string | null;
          /** The stored salutation. */
          salutation?: string | null;
          /** The person's title. */
          title?: string | null;
          /** The person's language or country code. */
          country_code?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The 1-based CentralStationCRM result page to fetch.
         * @exclusiveMinimum 0
         */
        page: number | null;
        /**
         * The maximum number of CentralStationCRM records to fetch.
         * @exclusiveMinimum 0
         */
        perpage: number | null;
        /** The raw array returned by CentralStationCRM. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Update a company in CentralStationCRM. */
    "central_station_crm.update_company": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The CentralStationCRM company payload. */
        company: {
          /**
           * The company name.
           * @minLength 1
           */
          name: string;
          /**
           * Background notes about the company.
           * @minLength 1
           */
          background?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          group_id?: number;
          [key: string]: unknown;
        };
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** A CentralStationCRM company. */
        company: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The company name. */
          name?: string | null;
          /** Background notes about the company. */
          background?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a deal in CentralStationCRM. */
    "central_station_crm.update_deal": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The CentralStationCRM deal payload. */
        deal: {
          /**
           * The deal name.
           * @minLength 1
           */
          name: string;
          /** The monetary value of the deal. */
          value?: string | null;
          /** The billing type of the deal value. */
          value_type?: string | null;
          /**
           * The target date for the deal.
           * @format date
           */
          target_date?: string | null;
          /**
           * The current deal state.
           * @minLength 1
           */
          current_state?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          company_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          group_id?: number;
          /**
           * Background notes about the deal.
           * @minLength 1
           */
          background?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          deal_type_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          deal_type_stage_id?: number;
          /**
           * The probability of winning the deal in percent.
           * @minimum 0
           * @maximum 100
           */
          probability?: number;
          /**
           * The deal currency code.
           * @minLength 1
           */
          currency?: string;
          /**
           * Comma-separated person identifiers to assign to the deal.
           * @minLength 1
           */
          person_ids_set?: string;
          [key: string]: unknown;
        };
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** A CentralStationCRM deal. */
        deal: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The linked company identifier. */
          company_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The deal name. */
          name?: string | null;
          /** The monetary value of the deal. */
          value?: string | null;
          /** The billing type of the deal value. */
          value_type?: string | null;
          /** The total value sum returned by CentralStationCRM. */
          value_sum?: string | null;
          /** The value count returned by CentralStationCRM. */
          value_count?: string | null;
          /** The current deal state. */
          current_state?: string | null;
          /**
           * The target date for the deal.
           * @format date
           */
          target_date?: string | null;
          /**
           * The timestamp when the deal was finished.
           * @format date-time
           */
          finished_at?: string | null;
          /** The deal currency code. */
          currency?: string | null;
          /** Background notes about the deal. */
          background?: string | null;
          /** The pipeline identifier. */
          deal_type_id?: number | null;
          /** The pipeline stage identifier. */
          deal_type_stage_id?: number | null;
          /** The probability of winning the deal in percent. */
          probability?: number | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a person in CentralStationCRM. */
    "central_station_crm.update_person": {
      input: {
        /**
         * The CentralStationCRM numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The CentralStationCRM person payload. */
        person: {
          /**
           * The person's last name or display name.
           * @minLength 1
           */
          name: string;
          /**
           * The person's first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * Background notes about the person.
           * @minLength 1
           */
          background?: string;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          user_id?: number;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          group_id?: number;
          /**
           * The person's language or country code.
           * @minLength 1
           */
          country_code?: string;
          /**
           * The stored salutation.
           * @minLength 1
           */
          salutation?: string;
          /**
           * The person's title.
           * @minLength 1
           */
          title?: string;
          [key: string]: unknown;
        };
        /** Whether CentralStationCRM should skip creating a protocol log. */
        no_log?: boolean;
      };
      output: {
        /** A CentralStationCRM person. */
        person: {
          /** The raw object returned by CentralStationCRM. */
          raw: Record<string, unknown>;
          /**
           * The CentralStationCRM numeric record identifier.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The CentralStationCRM account identifier. */
          account_id?: number | null;
          /** The assigned CentralStationCRM user identifier. */
          user_id?: number | null;
          /** The assigned CentralStationCRM group identifier. */
          group_id?: number | null;
          /** The person's first name. */
          first_name?: string | null;
          /** The person's last name or display name. */
          name?: string | null;
          /** Background notes about the person. */
          background?: string | null;
          /** The stored salutation. */
          salutation?: string | null;
          /** The person's title. */
          title?: string | null;
          /** The person's language or country code. */
          country_code?: string | null;
          /**
           * The record creation timestamp.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The record update timestamp.
           * @format date-time
           */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by CentralStationCRM. */
        raw: Record<string, unknown>;
      };
    };
  }
}
