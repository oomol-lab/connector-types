import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Activate a machine in the connected Keygen account. */
    "keygen.activate_machine": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Attach entitlements to a Keygen license. */
    "keygen.attach_license_entitlements": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen entitlement IDs to attach to the license.
         * @minItems 1
         */
        entitlementIds: Array<string>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Attach users to a Keygen license. */
    "keygen.attach_license_users": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen user IDs to attach to the license.
         * @minItems 1
         */
        userIds: Array<string>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Attach entitlements to a Keygen policy. */
    "keygen.attach_policy_entitlements": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen entitlement IDs to attach to the policy.
         * @minItems 1
         */
        entitlementIds: Array<string>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Ban a Keygen user from authenticating. */
    "keygen.ban_user": {
      input: {
        /**
         * The Keygen user resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Change the group assigned to a Keygen license. */
    "keygen.change_license_group": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen group ID to assign to the license.
         * @minLength 1
         */
        groupId: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Change the owner user for a Keygen license. */
    "keygen.change_license_owner": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen user ID to assign as the license owner.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Move a Keygen license to another policy. */
    "keygen.change_license_policy": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen policy ID to assign to the license.
         * @minLength 1
         */
        policyId: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Change the group assigned to a Keygen machine. */
    "keygen.change_machine_group": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen group ID to assign to the machine.
         * @minLength 1
         */
        groupId: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Change the owner user for a Keygen machine. */
    "keygen.change_machine_owner": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen user ID to assign as the machine owner.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Move a Keygen user to another group. */
    "keygen.change_user_group": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen group ID to assign to the user.
         * @minLength 1
         */
        groupId: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Check in a Keygen license for policies that require periodic license check-ins. */
    "keygen.check_in_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a machine component in the connected Keygen account. */
    "keygen.create_component": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create an entitlement in the connected Keygen account. */
    "keygen.create_entitlement": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a group in the connected Keygen account. */
    "keygen.create_group": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a license in the connected Keygen account. */
    "keygen.create_license": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a license policy in the connected Keygen account. */
    "keygen.create_policy": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a tracked process in the connected Keygen account. */
    "keygen.create_process": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a product in the connected Keygen account. */
    "keygen.create_product": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a user in the connected Keygen account. */
    "keygen.create_user": {
      input: {
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Deactivate a machine from the connected Keygen account. */
    "keygen.deactivate_machine": {
      input: {
        /**
         * The Keygen machine resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Decrement metered usage for a Keygen license. */
    "keygen.decrement_license_usage": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The usage amount to decrement. Keygen defaults to 1 when omitted.
         * @exclusiveMinimum 0
         */
        decrement?: number;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a machine component from the connected Keygen account. */
    "keygen.delete_component": {
      input: {
        /**
         * The Keygen component resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Delete an entitlement from the connected Keygen account. */
    "keygen.delete_entitlement": {
      input: {
        /**
         * The Keygen entitlement resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Delete a group from the connected Keygen account. */
    "keygen.delete_group": {
      input: {
        /**
         * The Keygen group resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Delete a license from the connected Keygen account. */
    "keygen.delete_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Delete a license policy from the connected Keygen account. */
    "keygen.delete_policy": {
      input: {
        /**
         * The Keygen policy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Delete a tracked process from the connected Keygen account. */
    "keygen.delete_process": {
      input: {
        /**
         * The Keygen process resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Delete a product from the connected Keygen account. */
    "keygen.delete_product": {
      input: {
        /**
         * The Keygen product resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Delete a user from the connected Keygen account. */
    "keygen.delete_user": {
      input: {
        /**
         * The Keygen user resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Detach entitlements from a Keygen license. */
    "keygen.detach_license_entitlements": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen entitlement IDs to detach from the license.
         * @minItems 1
         */
        entitlementIds: Array<string>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Detach users from a Keygen license. */
    "keygen.detach_license_users": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen user IDs to detach from the license.
         * @minItems 1
         */
        userIds: Array<string>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Detach entitlements from a Keygen policy. */
    "keygen.detach_policy_entitlements": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Keygen entitlement IDs to detach from the policy.
         * @minItems 1
         */
        entitlementIds: Array<string>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Increment metered usage for a Keygen license. */
    "keygen.increment_license_usage": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The usage amount to increment. Keygen defaults to 1 when omitted.
         * @exclusiveMinimum 0
         */
        increment?: number;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List machine components in the connected Keygen account. */
    "keygen.list_components": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List entitlements in the connected Keygen account. */
    "keygen.list_entitlements": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List groups in the connected Keygen account. */
    "keygen.list_groups": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List entitlements attached to a Keygen license. */
    "keygen.list_license_entitlements": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The maximum number of related resources to return from Keygen.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Keygen cursor page size to request.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The Keygen cursor value for the page to return.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List users attached to a Keygen license. */
    "keygen.list_license_users": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The maximum number of related resources to return from Keygen.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Keygen cursor page size to request.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The Keygen cursor value for the page to return.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List licenses in the connected Keygen account. */
    "keygen.list_licenses": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List activated machines in the connected Keygen account. */
    "keygen.list_machines": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List license policies in the connected Keygen account. */
    "keygen.list_policies": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List entitlements attached to a Keygen policy. */
    "keygen.list_policy_entitlements": {
      input: {
        /**
         * The parent Keygen resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * The maximum number of related resources to return from Keygen.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Keygen cursor page size to request.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The Keygen cursor value for the page to return.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List tracked processes in the connected Keygen account. */
    "keygen.list_processes": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List products in the connected Keygen account. */
    "keygen.list_products": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List users in the connected Keygen account. */
    "keygen.list_users": {
      input: {
        /**
         * The page number to return from Keygen.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of resources to request from Keygen.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Comma-separated Keygen relationship names to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Keygen JSON:API filters keyed by filter name. Values are serialized as filter[key] query parameters. */
        filter?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Ping a Keygen machine heartbeat. */
    "keygen.ping_machine": {
      input: {
        /**
         * The Keygen machine resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Ping a Keygen process heartbeat. */
    "keygen.ping_process": {
      input: {
        /**
         * The Keygen process resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Reinstate a suspended Keygen license. */
    "keygen.reinstate_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Renew a Keygen license according to its policy. */
    "keygen.renew_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Reset metered usage for a Keygen license. */
    "keygen.reset_license_usage": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Reset a Keygen machine heartbeat. */
    "keygen.reset_machine_heartbeat": {
      input: {
        /**
         * The Keygen machine resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one machine component from the connected Keygen account. */
    "keygen.retrieve_component": {
      input: {
        /**
         * The Keygen component resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one entitlement from the connected Keygen account. */
    "keygen.retrieve_entitlement": {
      input: {
        /**
         * The Keygen entitlement resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one group from the connected Keygen account. */
    "keygen.retrieve_group": {
      input: {
        /**
         * The Keygen group resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one license from the connected Keygen account. */
    "keygen.retrieve_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one activated machine from the connected Keygen account. */
    "keygen.retrieve_machine": {
      input: {
        /**
         * The Keygen machine resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one license policy from the connected Keygen account. */
    "keygen.retrieve_policy": {
      input: {
        /**
         * The Keygen policy resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one tracked process from the connected Keygen account. */
    "keygen.retrieve_process": {
      input: {
        /**
         * The Keygen process resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one product from the connected Keygen account. */
    "keygen.retrieve_product": {
      input: {
        /**
         * The Keygen product resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one user from the connected Keygen account. */
    "keygen.retrieve_user": {
      input: {
        /**
         * The Keygen user resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Revoke a Keygen license through the official revoke action. */
    "keygen.revoke_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Keygen accepted the delete request. */
        deleted: boolean;
        /** The raw Keygen response body, or null when Keygen returned no body. */
        data?: unknown;
      };
    };
    /** Suspend a Keygen license so it can no longer authenticate with the API. */
    "keygen.suspend_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Unban a Keygen user so they can authenticate again. */
    "keygen.unban_user": {
      input: {
        /**
         * The Keygen user resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a machine component in the connected Keygen account. */
    "keygen.update_component": {
      input: {
        /**
         * The Keygen component resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update an entitlement in the connected Keygen account. */
    "keygen.update_entitlement": {
      input: {
        /**
         * The Keygen entitlement resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a group in the connected Keygen account. */
    "keygen.update_group": {
      input: {
        /**
         * The Keygen group resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a license in the connected Keygen account. */
    "keygen.update_license": {
      input: {
        /**
         * The Keygen license resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update an activated machine in the connected Keygen account. */
    "keygen.update_machine": {
      input: {
        /**
         * The Keygen machine resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a license policy in the connected Keygen account. */
    "keygen.update_policy": {
      input: {
        /**
         * The Keygen policy resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a tracked process in the connected Keygen account. */
    "keygen.update_process": {
      input: {
        /**
         * The Keygen process resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a product in the connected Keygen account. */
    "keygen.update_product": {
      input: {
        /**
         * The Keygen product resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a user in the connected Keygen account. */
    "keygen.update_user": {
      input: {
        /**
         * The Keygen user resource ID.
         * @minLength 1
         */
        id: string;
        /** JSON:API resource attributes to send to Keygen. Use the official attribute names for the target resource. */
        attributes?: Record<string, unknown>;
        /** JSON:API relationships to send to Keygen. Use standard relationship linkage objects from the Keygen API docs. */
        relationships?: Record<string, unknown>;
        /** JSON:API meta fields to send to Keygen for this resource or action. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Validate a Keygen license by its resource ID and optional validation scope. */
    "keygen.validate_license_by_id": {
      input: {
        /**
         * The Keygen license resource ID to validate.
         * @minLength 1
         */
        id: string;
        /** An optional numerical nonce echoed by Keygen in signed responses. */
        nonce?: number;
        /** Optional Keygen validation scope, such as fingerprint, product, policy, machine, or user scope. */
        scope?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Validate a Keygen license key and optional validation scope. */
    "keygen.validate_license_key": {
      input: {
        /**
         * The Keygen license key to validate.
         * @minLength 1
         */
        key: string;
        /** An optional numerical nonce echoed by Keygen in signed responses. */
        nonce?: number;
        /** Optional Keygen validation scope, such as fingerprint, product, policy, machine, or user scope. */
        scope?: Record<string, unknown>;
      };
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Fetch the Keygen profile associated with the connected API token. */
    "keygen.whoami": {
      input: Record<string, never>;
      output: {
        /** The JSON:API data member returned by Keygen. */
        data?: unknown;
        /** The JSON:API meta member returned by Keygen. */
        meta?: Record<string, unknown>;
        /** The JSON:API links member returned by Keygen. */
        links?: Record<string, unknown>;
        /** Included JSON:API resources returned by Keygen. */
        included?: Array<unknown>;
        /** JSON:API errors returned by Keygen. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
  }
}
