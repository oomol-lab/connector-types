import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a Faraday account by ID. */
    "faraday.get_account": {
      input: {
        /**
         * The Faraday account ID to retrieve.
         * @minLength 1
         */
        account_id: string;
      };
      output: {
        /** A Faraday account resource. */
        account: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A Faraday account resource. */
        raw: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Faraday account identified by the API key. */
    "faraday.get_current_account": {
      input: Record<string, never>;
      output: {
        /** A Faraday account resource. */
        account: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A Faraday account resource. */
        raw: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Faraday dataset by ID. */
    "faraday.get_dataset": {
      input: {
        /**
         * The Faraday dataset ID to retrieve.
         * @minLength 1
         */
        dataset_id: string;
      };
      output: {
        /** A Faraday dataset resource. */
        dataset: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A Faraday dataset resource. */
        raw: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Faraday scope by ID. */
    "faraday.get_scope": {
      input: {
        /**
         * The Faraday scope ID to retrieve.
         * @minLength 1
         */
        scope_id: string;
      };
      output: {
        /** A Faraday scope resource. */
        scope: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A Faraday scope resource. */
        raw: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Faraday target by ID. */
    "faraday.get_target": {
      input: {
        /**
         * The Faraday target ID to retrieve.
         * @minLength 1
         */
        target_id: string;
      };
      output: {
        /** A Faraday target resource. */
        target: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A Faraday target resource. */
        raw: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Faraday trait by ID. */
    "faraday.get_trait": {
      input: {
        /**
         * The Faraday trait ID to retrieve.
         * @minLength 1
         */
        trait_id: string;
      };
      output: {
        /** A Faraday trait resource. */
        trait: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A Faraday trait resource. */
        raw: {
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Faraday accounts controlled by the API key. */
    "faraday.list_accounts": {
      input: Record<string, never>;
      output: {
        /** The Faraday account resources returned by the API. */
        accounts: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The raw Faraday account array returned by the API. */
        raw: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Faraday datasets available in the account. */
    "faraday.list_datasets": {
      input: Record<string, never>;
      output: {
        /** The Faraday dataset resources returned by the API. */
        datasets: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The raw Faraday dataset array returned by the API. */
        raw: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Faraday scopes defined on the account. */
    "faraday.list_scopes": {
      input: Record<string, never>;
      output: {
        /** The Faraday scope resources returned by the API. */
        scopes: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The raw Faraday scope array returned by the API. */
        raw: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Faraday targets defined on the account. */
    "faraday.list_targets": {
      input: Record<string, never>;
      output: {
        /** The Faraday target resources returned by the API. */
        targets: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The raw Faraday target array returned by the API. */
        raw: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List user-defined and Faraday-provided traits. */
    "faraday.list_traits": {
      input: Record<string, never>;
      output: {
        /** The Faraday trait resources returned by the API. */
        traits: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The raw Faraday trait array returned by the API. */
        raw: Array<{
          /** The Faraday resource ID when returned. */
          id?: string;
          /** The Faraday resource name when returned. */
          name?: string;
          /** The Faraday resource type when returned. */
          resource_type?: string;
          /** The Faraday resource status when returned. */
          status?: string;
          /** The timestamp when the Faraday resource was created. */
          created_at?: string;
          /** The timestamp when the Faraday resource was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Faraday usage statistics for the account. */
    "faraday.list_usages": {
      input: Record<string, never>;
      output: {
        /** The Faraday usage metrics returned by the API. */
        usages: Array<{
          /** The usage metric name. */
          name?: string;
          /** The usage metric description. */
          description?: string;
          /** The current usage value. */
          usage?: number;
          /** The usage limit value when Faraday returns one. */
          limit?: number;
          [key: string]: unknown;
        }>;
        /** The raw Faraday usage array returned by the API. */
        raw: Array<{
          /** The usage metric name. */
          name?: string;
          /** The usage metric description. */
          description?: string;
          /** The current usage value. */
          usage?: number;
          /** The usage limit value when Faraday returns one. */
          limit?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
