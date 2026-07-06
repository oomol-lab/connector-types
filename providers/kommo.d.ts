import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Kommo account information for the connected account. */
    "kommo.get_account": {
      input: {
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
      };
      output: {
        /** A Kommo account. */
        account: {
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo account identifier. */
          id?: number | null;
          /** The Kommo account name. */
          name?: string | null;
          /** The Kommo account subdomain. */
          subdomain?: string | null;
          /** The current Kommo user identifier. */
          current_user_id?: number | null;
          /** The account language. */
          language?: string | null;
          /** The account country. */
          country?: string | null;
          /** The account currency code. */
          currency?: string | null;
          /** The account currency symbol. */
          currency_symbol?: string | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Kommo company by ID. */
    "kommo.get_company": {
      input: {
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
      };
      output: {
        /** A Kommo company. */
        company: {
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo company identifier. */
          id?: number | null;
          /** The company name. */
          name?: string | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The responsible user group identifier. */
          group_id?: number | null;
          /** The user identifier that created the company. */
          created_by?: number | null;
          /** The user identifier that last updated the company. */
          updated_by?: number | null;
          /** The company creation Unix timestamp. */
          created_at?: number | null;
          /** The company update Unix timestamp. */
          updated_at?: number | null;
          /** The closest task Unix timestamp. */
          closest_task_at?: number | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Kommo contact by ID. */
    "kommo.get_contact": {
      input: {
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
      };
      output: {
        /** A Kommo contact. */
        contact: {
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo contact identifier. */
          id?: number | null;
          /** The contact display name. */
          name?: string | null;
          /** The contact first name. */
          first_name?: string | null;
          /** The contact last name. */
          last_name?: string | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The responsible user group identifier. */
          group_id?: number | null;
          /** The user identifier that created the contact. */
          created_by?: number | null;
          /** The user identifier that last updated the contact. */
          updated_by?: number | null;
          /** The contact creation Unix timestamp. */
          created_at?: number | null;
          /** The contact update Unix timestamp. */
          updated_at?: number | null;
          /** The closest task Unix timestamp. */
          closest_task_at?: number | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Kommo lead by ID. */
    "kommo.get_lead": {
      input: {
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
      };
      output: {
        /** A Kommo lead. */
        lead: {
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo lead identifier. */
          id?: number | null;
          /** The lead name. */
          name?: string | null;
          /** The lead sale value. */
          price?: number | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The responsible user group identifier. */
          group_id?: number | null;
          /** The lead stage identifier. */
          status_id?: number | null;
          /** The lead pipeline identifier. */
          pipeline_id?: number | null;
          /** The lead loss reason identifier. */
          loss_reason_id?: number | null;
          /** The user identifier that created the lead. */
          created_by?: number | null;
          /** The user identifier that last updated the lead. */
          updated_by?: number | null;
          /** The lead creation Unix timestamp. */
          created_at?: number | null;
          /** The lead update Unix timestamp. */
          updated_at?: number | null;
          /** The lead close Unix timestamp. */
          closed_at?: number | null;
          /** The closest task Unix timestamp. */
          closest_task_at?: number | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Kommo lead pipeline by ID. */
    "kommo.get_pipeline": {
      input: {
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Kommo leads pipeline. */
        pipeline: {
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo pipeline identifier. */
          id?: number | null;
          /** The pipeline name. */
          name?: string | null;
          /** The pipeline sort order. */
          sort?: number | null;
          /** Whether this is the main pipeline. */
          is_main?: boolean | null;
          /** Whether unsorted leads are enabled. */
          is_unsorted_on?: boolean | null;
          /** Whether the pipeline is archived. */
          is_archive?: boolean | null;
          /** Pipeline statuses returned by Kommo. */
          statuses?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Kommo task by ID. */
    "kommo.get_task": {
      input: {
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Kommo task. */
        task: {
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo task identifier. */
          id?: number | null;
          /** The task text. */
          text?: string | null;
          /** Whether the task is completed. */
          is_completed?: boolean | null;
          /** The Kommo task type identifier. */
          task_type_id?: number | null;
          /** The linked entity identifier. */
          entity_id?: number | null;
          /** The linked entity type. */
          entity_type?: string | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The user identifier that created the task. */
          created_by?: number | null;
          /** The user identifier that last updated the task. */
          updated_by?: number | null;
          /** The task creation Unix timestamp. */
          created_at?: number | null;
          /** The task update Unix timestamp. */
          updated_at?: number | null;
          /** The task due Unix timestamp. */
          complete_till?: number | null;
          /** The task result object. */
          result?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Kommo user by ID. */
    "kommo.get_user": {
      input: {
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
      };
      output: {
        /** A Kommo user. */
        user: {
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo user identifier. */
          id?: number | null;
          /** The user display name. */
          name?: string | null;
          /** The user email address. */
          email?: string | null;
          /** The user language. */
          lang?: string | null;
          /** Whether the user is active. */
          is_active?: boolean | null;
          /** Whether the user is an administrator. */
          is_admin?: boolean | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** List companies from the connected Kommo account. */
    "kommo.list_companies": {
      input: {
        /**
         * The 1-based Kommo result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Kommo records to fetch per request.
         * @maximum 250
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Search text forwarded to Kommo.
         * @minLength 1
         */
        query?: string;
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
        /** The Kommo sort direction. */
        orderUpdatedAt?: "asc" | "desc";
        /** The Kommo sort direction. */
        orderId?: "asc" | "desc";
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * One or more Kommo names to filter by.
         * @minItems 1
         */
        names?: Array<string>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        createdByIds?: Array<number>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        updatedByIds?: Array<number>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        responsibleUserIds?: Array<number>;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtTo?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closestTaskAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closestTaskAtTo?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        createdAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        createdAtTo?: number;
      };
      output: {
        /** Kommo companies returned by the request. */
        companies: Array<{
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo company identifier. */
          id?: number | null;
          /** The company name. */
          name?: string | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The responsible user group identifier. */
          group_id?: number | null;
          /** The user identifier that created the company. */
          created_by?: number | null;
          /** The user identifier that last updated the company. */
          updated_by?: number | null;
          /** The company creation Unix timestamp. */
          created_at?: number | null;
          /** The company update Unix timestamp. */
          updated_at?: number | null;
          /** The closest task Unix timestamp. */
          closest_task_at?: number | null;
          [key: string]: unknown;
        }>;
        /** The current Kommo response page. */
        page: number | null;
        /** The total number of Kommo response pages. */
        pageCount: number | null;
        /** The total number of Kommo items in the response. */
        totalItems: number | null;
        /** HAL links returned by Kommo. */
        links: Record<string, unknown> | null;
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** List contacts from the connected Kommo account. */
    "kommo.list_contacts": {
      input: {
        /**
         * The 1-based Kommo result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Kommo records to fetch per request.
         * @maximum 250
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Search text forwarded to Kommo.
         * @minLength 1
         */
        query?: string;
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
        /** The Kommo sort direction. */
        orderUpdatedAt?: "asc" | "desc";
        /** The Kommo sort direction. */
        orderId?: "asc" | "desc";
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * One or more Kommo names to filter by.
         * @minItems 1
         */
        names?: Array<string>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        createdByIds?: Array<number>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        updatedByIds?: Array<number>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        responsibleUserIds?: Array<number>;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtTo?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closestTaskAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closestTaskAtTo?: number;
      };
      output: {
        /** Kommo contacts returned by the request. */
        contacts: Array<{
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo contact identifier. */
          id?: number | null;
          /** The contact display name. */
          name?: string | null;
          /** The contact first name. */
          first_name?: string | null;
          /** The contact last name. */
          last_name?: string | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The responsible user group identifier. */
          group_id?: number | null;
          /** The user identifier that created the contact. */
          created_by?: number | null;
          /** The user identifier that last updated the contact. */
          updated_by?: number | null;
          /** The contact creation Unix timestamp. */
          created_at?: number | null;
          /** The contact update Unix timestamp. */
          updated_at?: number | null;
          /** The closest task Unix timestamp. */
          closest_task_at?: number | null;
          [key: string]: unknown;
        }>;
        /** The current Kommo response page. */
        page: number | null;
        /** The total number of Kommo response pages. */
        pageCount: number | null;
        /** The total number of Kommo items in the response. */
        totalItems: number | null;
        /** HAL links returned by Kommo. */
        links: Record<string, unknown> | null;
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** List leads from the connected Kommo account. */
    "kommo.list_leads": {
      input: {
        /**
         * The 1-based Kommo result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Kommo records to fetch per request.
         * @maximum 250
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Search text forwarded to Kommo.
         * @minLength 1
         */
        query?: string;
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
        /** The Kommo sort direction. */
        orderUpdatedAt?: "asc" | "desc";
        /** The Kommo sort direction. */
        orderId?: "asc" | "desc";
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * One or more Kommo names to filter by.
         * @minItems 1
         */
        names?: Array<string>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        createdByIds?: Array<number>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        updatedByIds?: Array<number>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        responsibleUserIds?: Array<number>;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtTo?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closestTaskAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closestTaskAtTo?: number;
        /** The Kommo sort direction. */
        orderCreatedAt?: "asc" | "desc";
        /** The exact lead sale value to filter by. */
        price?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        createdAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        createdAtTo?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closedAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        closedAtTo?: number;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        pipelineIds?: Array<number>;
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        statusPipelineId?: number;
        /**
         * The Kommo numeric identifier.
         * @exclusiveMinimum 0
         */
        statusId?: number;
      };
      output: {
        /** Kommo leads returned by the request. */
        leads: Array<{
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo lead identifier. */
          id?: number | null;
          /** The lead name. */
          name?: string | null;
          /** The lead sale value. */
          price?: number | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The responsible user group identifier. */
          group_id?: number | null;
          /** The lead stage identifier. */
          status_id?: number | null;
          /** The lead pipeline identifier. */
          pipeline_id?: number | null;
          /** The lead loss reason identifier. */
          loss_reason_id?: number | null;
          /** The user identifier that created the lead. */
          created_by?: number | null;
          /** The user identifier that last updated the lead. */
          updated_by?: number | null;
          /** The lead creation Unix timestamp. */
          created_at?: number | null;
          /** The lead update Unix timestamp. */
          updated_at?: number | null;
          /** The lead close Unix timestamp. */
          closed_at?: number | null;
          /** The closest task Unix timestamp. */
          closest_task_at?: number | null;
          [key: string]: unknown;
        }>;
        /** The current Kommo response page. */
        page: number | null;
        /** The total number of Kommo response pages. */
        pageCount: number | null;
        /** The total number of Kommo items in the response. */
        totalItems: number | null;
        /** HAL links returned by Kommo. */
        links: Record<string, unknown> | null;
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** List lead pipelines from the connected Kommo account. */
    "kommo.list_pipelines": {
      input: Record<string, never>;
      output: {
        /** Kommo pipelines returned by the request. */
        pipelines: Array<{
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo pipeline identifier. */
          id?: number | null;
          /** The pipeline name. */
          name?: string | null;
          /** The pipeline sort order. */
          sort?: number | null;
          /** Whether this is the main pipeline. */
          is_main?: boolean | null;
          /** Whether unsorted leads are enabled. */
          is_unsorted_on?: boolean | null;
          /** Whether the pipeline is archived. */
          is_archive?: boolean | null;
          /** Pipeline statuses returned by Kommo. */
          statuses?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
        /** The current Kommo response page. */
        page: number | null;
        /** The total number of Kommo response pages. */
        pageCount: number | null;
        /** The total number of Kommo items in the response. */
        totalItems: number | null;
        /** HAL links returned by Kommo. */
        links: Record<string, unknown> | null;
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** List tasks from the connected Kommo account. */
    "kommo.list_tasks": {
      input: {
        /**
         * The 1-based Kommo result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Kommo records to fetch per request.
         * @maximum 250
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        responsibleUserIds?: Array<number>;
        /** Whether to filter completed tasks. */
        isCompleted?: boolean;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        taskTypeIds?: Array<number>;
        /** The linked entity type to filter by. */
        entityType?: "leads" | "contacts" | "companies";
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        entityIds?: Array<number>;
        /**
         * One or more Kommo numeric identifiers.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAt?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtFrom?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAtTo?: number;
        /** The Kommo sort direction. */
        orderCompleteTill?: "asc" | "desc";
        /** The Kommo sort direction. */
        orderCreatedAt?: "asc" | "desc";
        /** The Kommo sort direction. */
        orderId?: "asc" | "desc";
      };
      output: {
        /** Kommo tasks returned by the request. */
        tasks: Array<{
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo task identifier. */
          id?: number | null;
          /** The task text. */
          text?: string | null;
          /** Whether the task is completed. */
          is_completed?: boolean | null;
          /** The Kommo task type identifier. */
          task_type_id?: number | null;
          /** The linked entity identifier. */
          entity_id?: number | null;
          /** The linked entity type. */
          entity_type?: string | null;
          /** The responsible Kommo user identifier. */
          responsible_user_id?: number | null;
          /** The user identifier that created the task. */
          created_by?: number | null;
          /** The user identifier that last updated the task. */
          updated_by?: number | null;
          /** The task creation Unix timestamp. */
          created_at?: number | null;
          /** The task update Unix timestamp. */
          updated_at?: number | null;
          /** The task due Unix timestamp. */
          complete_till?: number | null;
          /** The task result object. */
          result?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** The current Kommo response page. */
        page: number | null;
        /** The total number of Kommo response pages. */
        pageCount: number | null;
        /** The total number of Kommo items in the response. */
        totalItems: number | null;
        /** HAL links returned by Kommo. */
        links: Record<string, unknown> | null;
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
    /** List users from the connected Kommo account. */
    "kommo.list_users": {
      input: {
        /**
         * Comma-separated Kommo with parameters to include.
         * @minLength 1
         */
        with?: string;
        /**
         * The 1-based Kommo result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Kommo records to fetch per request.
         * @maximum 250
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Kommo users returned by the request. */
        users: Array<{
          /** The raw object returned by Kommo. */
          raw: Record<string, unknown>;
          /** The Kommo user identifier. */
          id?: number | null;
          /** The user display name. */
          name?: string | null;
          /** The user email address. */
          email?: string | null;
          /** The user language. */
          lang?: string | null;
          /** Whether the user is active. */
          is_active?: boolean | null;
          /** Whether the user is an administrator. */
          is_admin?: boolean | null;
          [key: string]: unknown;
        }>;
        /** The current Kommo response page. */
        page: number | null;
        /** The total number of Kommo response pages. */
        pageCount: number | null;
        /** The total number of Kommo items in the response. */
        totalItems: number | null;
        /** HAL links returned by Kommo. */
        links: Record<string, unknown> | null;
        /** The raw object returned by Kommo. */
        raw: Record<string, unknown>;
      };
    };
  }
}
