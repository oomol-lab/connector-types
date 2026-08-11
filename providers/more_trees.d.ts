import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get account identity, planting credit balance, and forest identifiers for the connected More Trees account. */
    "more_trees.get_account": {
      input: Record<string, never>;
      output: {
        /** The More Trees account name. */
        account_name: string;
        /** The current planting credit balance. */
        credit_balance: number;
        /** The account forest name. */
        forest_name: string;
        /** The account forest slug. */
        forest_slug: string;
        [key: string]: unknown;
      };
    };
    /** Get More Trees forest branding and cumulative planting and carbon statistics. */
    "more_trees.get_forest": {
      input: {
        /**
         * The forest slug or account code to inspect. Defaults to the connected account code.
         * @minLength 1
         */
        forestSlugOrAccountCode?: string;
      };
      output: {
        /** The forest display name. */
        forest_name: string;
        /** The forest logo URL when configured. */
        logo_url: string | null;
        /** The forest brand color when configured. */
        brand_color: string | null;
        /** The cumulative planting and carbon statistics for a More Trees forest. */
        totals: {
          /**
           * The number of trees planted by the forest.
           * @minimum 0
           */
          trees_planted: number;
          /**
           * The number of trees gifted by the forest.
           * @minimum 0
           */
          trees_gifted: number;
          /**
           * The number of trees received by the forest.
           * @minimum 0
           */
          trees_received: number;
          /** The amount of carbon dioxide captured for the forest. */
          co2_captured: number;
          /**
           * The number of planting projects supported by the forest.
           * @minimum 0
           */
          projects_supported: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List active More Trees planting projects and the tree species available within each project. */
    "more_trees.list_projects": {
      input: Record<string, never>;
      output: Array<{
        /**
         * The project identifier used by planting requests.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The project name. */
        name: string;
        /** The project description. */
        description?: string;
        /** The country where the project operates. */
        country: string;
        /** The project type. */
        project_type: string;
        /** The project supplier name. */
        supplier_name: string;
        /** Whether this is the default planting project. */
        default: boolean;
        /** The project image URL when available. */
        project_image?: string | null;
        /** The tree species available for this project. */
        trees: Array<{
          /**
           * The tree species identifier used by planting requests.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The tree species name. */
          name: string;
          /** The tree species description. */
          description?: string;
          /** The tonnes of carbon dioxide captured by one tree. */
          tonnes_c02: number;
          /** The number of credits required to plant one tree. */
          credits_required: number;
          /** Whether this is the default tree for the project. */
          default: boolean;
          /** The tree image URL when available. */
          tree_image?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      }>;
    };
    /** Plant trees for the connected More Trees account or gift trees to recipients, with optional non-persistent test mode. */
    "more_trees.plant_trees": {
      input: {
        /** Whether to gift trees to recipients instead of planting for the connected account. */
        plantForOthers: boolean;
        /** Whether to evaluate the request without persisting it or spending planting credits. More Trees defaults this to false. */
        test?: boolean;
        /**
         * The number of trees to plant for the connected account. Required when plantForOthers is false.
         * @exclusiveMinimum 0
         */
        quantity?: number;
        /**
         * The planting project identifier. More Trees selects the default project when omitted.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * The tree species identifier. More Trees selects the default tree when omitted.
         * @exclusiveMinimum 0
         */
        treeId?: number;
        /**
         * The recipients who should receive gifted trees. Required when plantForOthers is true.
         * @minItems 1
         */
        recipients?: Array<{
          /**
           * The recipient's More Trees account code. Provide exactly one of accountCode or email.
           * @minLength 1
           */
          accountCode?: string;
          /**
           * The recipient's email address. Provide exactly one of email or accountCode.
           * @format email
           */
          email?: string;
          /**
           * The recipient's name.
           * @minLength 1
           */
          name: string;
          /**
           * The number of trees to gift to this recipient.
           * @exclusiveMinimum 0
           */
          quantity: number;
        }>;
      };
      output: {
        /** Whether More Trees evaluated the request in non-persistent test mode. */
        test: boolean;
        /** Whether the request planted trees for recipients instead of the connected account. */
        plant_for_others?: boolean;
        /** The number of planting credits used or evaluated. */
        credits_used: number;
        /** The number of planting credits remaining. */
        credits_remaining: number;
        /**
         * The planting project selected by More Trees.
         * @exclusiveMinimum 0
         */
        project_id: number;
        /**
         * The tree species selected by More Trees.
         * @exclusiveMinimum 0
         */
        tree_id: number;
        /** The recipients confirmed for a gifted-tree request. */
        recipients?: Array<{
          /** The recipient's More Trees account code. */
          account_code: string;
          /** The recipient's More Trees account name. */
          account_name: string;
          /**
           * The number of trees planted for the recipient.
           * @exclusiveMinimum 0
           */
          quantity: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
