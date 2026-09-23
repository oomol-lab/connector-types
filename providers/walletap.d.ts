import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Issue one to ten Walletap passes from existing templates. */
    "walletap.create_pass": {
      input: {
        /**
         * The passes to issue in this request.
         * @minItems 1
         * @maxItems 10
         */
        passes: Array<{
          /** The template used to issue the pass. */
          templateId: string;
          /** A custom pass ID; Walletap generates one when omitted. */
          id?: string;
          /** The caller-defined ID for this customer or pass. */
          externalId?: string;
          /** The pass holder email address. */
          email?: string;
          /** The pass holder phone number. */
          phone?: string;
          /** Pass field values keyed by the field IDs configured on the template. */
          templateFields?: Record<string, string | number>;
          /** Custom metadata keyed by caller-defined field names. */
          customFields?: Record<string, string | number>;
          /** The membership ID for a membership pass. */
          memberId?: string;
          /** The Walletap membership plan ID. */
          membershipPlanId?: string;
          /** The Walletap location ID associated with the pass. */
          locationId?: string;
          /** The NFC redemption value for the pass. */
          redemptionValue?: string;
          /** Whether an initial balance adds to an existing pass balance. */
          balanceIsAdditive?: boolean;
          /**
           * The initial stamp count.
           * @minimum 0
           */
          collectedStamps?: number;
        }>;
        /** Whether Walletap should email pass links to the holders. */
        sendToEmail?: boolean;
        /** Whether Walletap should text pass links to the holders. */
        sendToPhone?: boolean;
        /** The locale for pass text and delivery messages. */
        locale?: string;
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
    /** Get one Walletap pass by pass ID or by external ID and template ID. */
    "walletap.get_pass": {
      input: {
        /** The Walletap pass ID. Use this or externalId together with templateId. */
        id?: string;
        /** The caller-defined pass ID. This must be combined with templateId when id is omitted. */
        externalId?: string;
        /** The template ID. This is required when identifying a pass by externalId. */
        templateId?: string;
        /** Whether to include the full template in the response. */
        includeTemplate?: boolean;
        /** The locale used to render pass text, such as en or de. */
        locale?: string;
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
    /** Get one Walletap template and its configured pass fields. */
    "walletap.get_template": {
      input: {
        /** The Walletap template ID. */
        templateId: string;
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
    /** List issued Walletap passes for a template. */
    "walletap.list_passes": {
      input: {
        /** The template ID whose passes should be listed. */
        templateId: string;
        /**
         * The maximum number of passes to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The next-page cursor returned by an earlier request. */
        startAfter?: string;
        /** The previous-page cursor returned by an earlier request. */
        endBefore?: string;
        /** The installation status to include. */
        status?: "all" | "installed" | "not_installed";
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
    /** List wallet-pass templates owned by the connected Walletap account. */
    "walletap.list_templates": {
      input: {
        /**
         * The maximum number of templates to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The next-page cursor returned by an earlier request. */
        startingAfter?: string;
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
    /** Send a push notification to one Walletap pass holder. */
    "walletap.notify_pass": {
      input: {
        /** The Walletap pass ID. */
        passId: string;
        /** The notification title. */
        title: string;
        /** The notification body; URLs become clickable links. */
        content: string;
        /**
         * When the notification becomes visible.
         * @format date-time
         */
        validFrom?: string;
        /**
         * When the notification expires.
         * @format date-time
         */
        validUntil?: string;
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
    /** Search passes in one Walletap template by email address or phone number. */
    "walletap.search_passes": {
      input: {
        /** The template ID to search within. */
        templateId: string;
        /** The email address or phone number to search for. */
        searchQuery: string;
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
    /** Update a Walletap pass, including its displayed fields, stamps, balance, or validity. */
    "walletap.update_pass": {
      input: {
        /** The Walletap pass ID. Use this or externalId together with templateId. */
        id?: string;
        /** The caller-defined pass ID. This must be combined with templateId when id is omitted. */
        externalId?: string;
        /** The template ID. This is required when identifying a pass by externalId. */
        templateId?: string;
        /** Pass field values keyed by the field IDs configured on the template. */
        templateFields?: Record<string, string | number>;
        /** Custom metadata updates keyed by caller-defined field names. */
        customFields?: Record<string, string | number>;
        /** Whether the pass remains valid; false voids the pass. */
        isValid?: boolean;
        /** The updated NFC redemption value. */
        redemptionValue?: string;
        /** A stamp-count update. */
        stampOperation?: {
          /** The stamp operation. */
          operation: "add" | "set" | "remove" | "removeAll";
          /**
           * The number of stamps to add, set, or remove.
           * @minimum 0
           */
          count?: number;
          /** Whether count is the absolute total across all cards. */
          isTotal?: boolean;
        };
        /** A stored-balance update. */
        balanceOperation?: {
          /** The balance operation. */
          operation: "add" | "subtract" | "set";
          /** The amount to add, subtract, or set. */
          amount: number;
          /** Whether amount is the absolute total. */
          isTotal?: boolean;
        };
      };
      output: {
        /** The JSON payload returned by Walletap. */
        data: unknown;
      };
    };
  }
}
