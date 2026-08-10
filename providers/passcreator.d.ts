import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Passcreator wallet pass synchronously from template-specific JSON data. */
    "passcreator.create_pass": {
      input: {
        /** The pass data to submit. Fields other than templateId depend on the selected template. */
        data: {
          /**
           * The identifier of the pass template to use.
           * @minLength 1
           */
          templateId: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Passcreator completed the request successfully. */
        success: boolean;
        /** The status code reported by Passcreator. */
        statusCode: number;
        /**
         * The number of returned result objects.
         * @minimum 0
         */
        count?: number;
        /** The created pass metadata returned by Passcreator. */
        data: {
          /** The unique identifier of the created pass. */
          identifier: string;
          /**
           * The device-aware download page for the created pass.
           * @format uri
           */
          downloadPage: string;
          /**
           * The pkpass download URL used by Apple Wallet.
           * @format uri
           */
          iPhoneUri: string;
          [key: string]: unknown;
        };
        /** The response description returned by Passcreator. */
        description?: string | null;
        /** Errors returned by Passcreator. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Inspect the dynamic fields configured on a Passcreator pass template. */
    "passcreator.get_pass_template_fields": {
      input: {
        /**
         * The identifier of the pass template to inspect.
         * @minLength 1
         */
        templateId: string;
      };
      output: Array<{
        /** The field key used when creating a pass. */
        key: string;
        /** The human-readable field label. */
        label: string;
        /** The Passcreator field type. */
        type: string;
        /** Whether the template requires this field. */
        required: boolean;
        [key: string]: unknown;
      }>;
    };
    /** List all pass templates available to the connected Passcreator account. */
    "passcreator.list_pass_templates": {
      input: Record<string, never>;
      output: Array<{
        /**
         * The unique identifier of the pass template.
         * @minLength 1
         */
        identifier: string;
        /**
         * The name of the pass template.
         * @minLength 1
         */
        name: string;
        [key: string]: unknown;
      }>;
    };
    /** List or search Passcreator wallet passes and continue through documented next-page links. */
    "passcreator.list_passes": {
      input: {
        /**
         * The number of passes to request for one page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Choose whether additional pass properties use their field identifiers or field names as keys. */
        formatKeyAdditionalProperties?: "id" | "name";
        /**
         * The segment identifier used to filter passes.
         * @minLength 1
         */
        segmentId?: string;
        /** A Passcreator Query Language object. The provider encodes this object as base64url. */
        query?: {
          /** An optional title stored with the query. */
          title?: string | null;
          /**
           * Return passes created from this template.
           * @minLength 1
           */
          templateId?: string;
          /**
           * Return passes that belong to this project.
           * @minLength 1
           */
          projectId?: string;
          /**
           * Search for this phrase across the pass data fields.
           * @minLength 1
           */
          searchPhrase?: string;
          /**
           * Condition groups combined with OR.
           * @minItems 1
           */
          groups?: Array<Array<{
            /**
             * The pass field to compare.
             * @minLength 1
             */
            field: string;
            /**
             * The Passcreator Query Language comparison operator.
             * @minLength 1
             */
            operator: string;
            /** The string, number, or array value to compare against. */
            value: string | number | Array<unknown>;
            [key: string]: unknown;
          }>>;
          [key: string]: unknown;
        };
        /**
         * The pass fields to include in each result.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * The next-page URL returned by a previous list_passes response.
         * @format uri
         */
        nextPage?: string;
      };
      output: {
        /** Whether Passcreator completed the request successfully. */
        success: boolean;
        /** The status code reported by Passcreator. */
        statusCode: number;
        /**
         * The number of passes returned on this page.
         * @minimum 0
         */
        count?: number;
        /** The passes returned by Passcreator. */
        data: Array<Record<string, unknown>>;
        /** The response description returned by Passcreator. */
        description?: string | null;
        /** Errors returned by Passcreator. */
        errors?: Array<unknown>;
        /** Pagination links returned by Passcreator. */
        page?: {
          /**
           * The URL for the next result page.
           * @format uri
           */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination result counts returned by Passcreator. */
        responseMetaData?: {
          /**
           * The total number of matching passes.
           * @minimum 0
           */
          resultsTotal: number;
          /**
           * The number of passes returned on this page.
           * @minimum 0
           */
          resultsThisPage: number;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
  }
}
