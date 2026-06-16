import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a MaintainX location. */
    "maintainx.create_location": {
      input: {
        /**
         * The MaintainX location name.
         * @minLength 1
         */
        name: string;
        /** The MaintainX location description. */
        description?: string | null;
        /** The postal address of the MaintainX location. */
        address?: string | null;
        /** The encoded MaintainX location barcode. */
        barcode?: string | null;
        /**
         * The parent MaintainX location id.
         * @exclusiveMinimum 0
         */
        parentId?: number | null;
        /** MaintainX custom fields. Keys are exact custom field labels. */
        extraFields?: Record<string, unknown>;
        /**
         * Vendor ids assigned to the location.
         * @minItems 1
         */
        vendorIds?: Array<number>;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** The global MaintainX identifier of the created resource. */
        id: number;
      };
    };
    /** Create a MaintainX user. */
    "maintainx.create_user": {
      input: {
        /**
         * The MaintainX user's first name.
         * @minLength 1
         */
        firstName: string;
        /**
         * The MaintainX user's last name.
         * @minLength 1
         */
        lastName: string;
        /**
         * The MaintainX user's email address.
         * @format email
         */
        email?: string | null;
        /** The MaintainX user's phone number. */
        phoneNumber?: string | null;
        /** The MaintainX user role. */
        role?: "ADMIN" | "MEMBER" | "OPERATOR" | "REQUESTER" | "SERVICE_ACCOUNT" | null;
        /** The MaintainX custom role name assigned to the user. */
        customRole?: string | null;
        /** The MaintainX user authentication type. */
        authType?: "NORMAL" | "SAML" | "OIDC" | null;
        /** How MaintainX should invite the user. */
        inviteType?: "ALL" | "EMAIL" | "SMS" | "NONE" | null;
        /** The user's hourly rate in cents. */
        hourlyRate?: number | null;
        /** Extra data attached to the MaintainX record. */
        externalData?: Record<string, unknown> | number | string | null;
        /** MaintainX custom fields. Keys are exact custom field labels. */
        extraFields?: Record<string, unknown>;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** The global MaintainX identifier of the created resource. */
        id: number;
      };
    };
    /** Create a MaintainX work order. */
    "maintainx.create_work_order": {
      input: {
        /**
         * The MaintainX work order title.
         * @minLength 1
         */
        title: string;
        /** The MaintainX work order description. */
        description?: string | null;
        /**
         * The MaintainX asset id assigned to the work order.
         * @exclusiveMinimum 0
         */
        assetId?: number | null;
        /**
         * The MaintainX location id assigned to the work order.
         * @exclusiveMinimum 0
         */
        locationId?: number | null;
        /** The MaintainX work order priority. */
        priority?: "NONE" | "LOW" | "MEDIUM" | "HIGH";
        /** The MaintainX work order type. */
        type?: "OTHER" | "REACTIVE" | "PREVENTIVE";
        /**
         * The due date and time for the work order.
         * @format date-time
         */
        dueDate?: string | null;
        /**
         * The date and time when the work order should appear.
         * @format date-time
         */
        startDate?: string | null;
        /** The estimated time in seconds required to complete the work order. */
        estimatedTime?: number | null;
        /** The MaintainX requester id or requester email address. */
        requesterId?: number | null | string;
        /**
         * Categories assigned to the work order.
         * @minItems 1
         */
        categories?: Array<string>;
        /** MaintainX users or teams assigned to the work order. */
        assignees?: Array<{
          /** Whether the assignee id refers to a user or a team. */
          type: "USER" | "TEAM";
          /** The MaintainX user or team id, or a user email address. */
          id: number | string;
        }>;
        /** Extra data attached to the MaintainX record. */
        externalData?: Record<string, unknown> | number | string | null;
        /** MaintainX custom fields. Keys are exact custom field labels. */
        extraFields?: Record<string, unknown>;
        /**
         * Vendor ids assigned to the work order.
         * @minItems 1
         */
        vendorIds?: Array<number>;
        /** Parts used in this MaintainX work order. */
        partsUsed?: Array<Record<string, unknown>>;
        /**
         * The work request id approved by this work order.
         * @exclusiveMinimum 0
         */
        workRequestId?: number | null;
        /**
         * The work order template id used to create this work order.
         * @exclusiveMinimum 0
         */
        workOrderTemplateId?: number | null;
        /** The procedure template id to attach to the work order. */
        procedureTemplateId?: number | null;
        /** The parent work order id for sub-work orders. */
        parentId?: number | null;
        /** Whether the work order is a parent work order. */
        isParent?: boolean | null;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** The global MaintainX identifier of the created resource. */
        id: number;
      };
    };
    /** Create a comment on a MaintainX work order. */
    "maintainx.create_work_order_comment": {
      input: {
        /**
         * The MaintainX work order id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The comment content to post.
         * @minLength 1
         */
        content: string;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** The global MaintainX identifier of the created resource. */
        id: number;
      };
    };
    /** Delete a MaintainX location by id. */
    "maintainx.delete_location": {
      input: {
        /**
         * The MaintainX location id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** Whether MaintainX accepted the request. */
        ok: boolean;
      };
    };
    /** Retrieve one MaintainX location by id. */
    "maintainx.get_location": {
      input: {
        /**
         * The MaintainX location id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The MaintainX location returned by the API. */
        location: Record<string, unknown>;
      };
    };
    /** Retrieve one MaintainX user by id. */
    "maintainx.get_user": {
      input: {
        /**
         * The MaintainX user id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
      };
      output: {
        /** The MaintainX user returned by the API. */
        user: Record<string, unknown>;
      };
    };
    /** Retrieve one MaintainX work order by global id. */
    "maintainx.get_work_order": {
      input: {
        /**
         * The MaintainX work order id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * MaintainX work order fields to expand.
         * @minItems 1
         */
        expand?: Array<string>;
        /** Whether the id is the organization-specific sequential id. */
        useSequentialId?: boolean;
      };
      output: {
        /** The MaintainX work order returned by the API. */
        workOrder: Record<string, unknown>;
      };
    };
    /** List MaintainX locations with official filters and cursor pagination. */
    "maintainx.list_locations": {
      input: {
        /**
         * The MaintainX pagination cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of MaintainX records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * MaintainX organization ids for endpoints that can query multiple organizations.
         * @minItems 1
         */
        organizationIds?: Array<number>;
        /** Filter MaintainX locations by name. */
        name?: string;
        /**
         * Custom field names to include.
         * @minItems 1
         */
        customFieldName?: Array<string>;
        /**
         * MaintainX location fields to expand.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** Locations returned by MaintainX. */
        locations: Array<Record<string, unknown>>;
        /** The cursor to retrieve the next page when MaintainX returned one. */
        nextCursor?: string | null;
        /** The MaintainX relative URL for the next page when MaintainX returned one. */
        nextPageUrl?: string | null;
      };
    };
    /** List MaintainX users with official filters and cursor pagination. */
    "maintainx.list_users": {
      input: {
        /**
         * The MaintainX pagination cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of MaintainX records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Whether to only return assignable users. */
        onlyAssignable?: boolean;
        /**
         * Email addresses to filter users by.
         * @minItems 1
         */
        email?: Array<string>;
        /**
         * MaintainX user fields to expand.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** Users returned by MaintainX. */
        users: Array<Record<string, unknown>>;
        /** The cursor to retrieve the next page when MaintainX returned one. */
        nextCursor?: string | null;
        /** The MaintainX relative URL for the next page when MaintainX returned one. */
        nextPageUrl?: string | null;
      };
    };
    /** List comments on a MaintainX work order. */
    "maintainx.list_work_order_comments": {
      input: {
        /**
         * The MaintainX work order id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The MaintainX pagination cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of MaintainX records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
      };
      output: {
        /** Comments returned by MaintainX. */
        comments: Array<Record<string, unknown>>;
        /** The cursor to retrieve the next page when MaintainX returned one. */
        nextCursor?: string | null;
        /** The MaintainX relative URL for the next page when MaintainX returned one. */
        nextPageUrl?: string | null;
      };
    };
    /** List MaintainX work orders with official filters and cursor pagination. */
    "maintainx.list_work_orders": {
      input: {
        /**
         * The MaintainX pagination cursor from a previous response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of MaintainX records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Filter MaintainX work orders by title. */
        title?: string;
        /**
         * Asset ids to include.
         * @minItems 1
         */
        assets?: Array<number>;
        /**
         * Asset ids to exclude.
         * @minItems 1
         */
        notAssets?: Array<number>;
        /**
         * Location ids to include.
         * @minItems 1
         */
        locations?: Array<number>;
        /**
         * Location ids to exclude.
         * @minItems 1
         */
        notLocations?: Array<number>;
        /**
         * Part ids to include.
         * @minItems 1
         */
        parts?: Array<number>;
        /**
         * Part ids to exclude.
         * @minItems 1
         */
        notParts?: Array<number>;
        /**
         * Vendor ids to include.
         * @minItems 1
         */
        vendors?: Array<number>;
        /**
         * Vendor ids to exclude.
         * @minItems 1
         */
        notVendors?: Array<number>;
        /**
         * Assignee user ids to include.
         * @minItems 1
         */
        assignees?: Array<number>;
        /**
         * Team ids to include.
         * @minItems 1
         */
        teams?: Array<number>;
        /**
         * Categories to include.
         * @minItems 1
         */
        categories?: Array<string>;
        /**
         * Categories to exclude.
         * @minItems 1
         */
        notCategories?: Array<string>;
        /**
         * Work order priorities to include.
         * @minItems 1
         */
        priorities?: Array<"NONE" | "LOW" | "MEDIUM" | "HIGH">;
        /**
         * Work order statuses to include.
         * @minItems 1
         */
        statuses?: Array<"OPEN" | "IN_PROGRESS" | "ON_HOLD" | "DONE" | "CANCELED" | "SKIPPED">;
        /**
         * Part statuses to include.
         * @minItems 1
         */
        partStatuses?: Array<string>;
        /** Whether to include work orders with future start dates. */
        showUpcoming?: boolean;
        /** The MaintainX work order sort attribute. */
        sort?: "-completedAt" | "-createdAt" | "-dueDate" | "-startedAt" | "-updatedAt" | "completedAt" | "createdAt" | "dueDate" | "startedAt" | "updatedAt";
        /**
         * MaintainX work order fields to expand.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** MaintainX work orders returned by the API. */
        workOrders: Array<Record<string, unknown>>;
        /** The cursor to retrieve the next page when MaintainX returned one. */
        nextCursor?: string | null;
        /** The MaintainX relative URL for the next page when MaintainX returned one. */
        nextPageUrl?: string | null;
      };
    };
    /** Update a MaintainX location. */
    "maintainx.update_location": {
      input: {
        /**
         * The MaintainX location id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The MaintainX location name.
         * @minLength 1
         */
        name?: string;
        /** The MaintainX location description. */
        description?: string | null;
        /** The postal address of the MaintainX location. */
        address?: string | null;
        /** The encoded MaintainX location barcode. */
        barcode?: string | null;
        /**
         * The parent MaintainX location id.
         * @exclusiveMinimum 0
         */
        parentId?: number | null;
        /** MaintainX custom fields. Keys are exact custom field labels. */
        extraFields?: Record<string, unknown>;
        /**
         * Vendor ids assigned to the location.
         * @minItems 1
         */
        vendorIds?: Array<number>;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** The MaintainX location returned by the API. */
        location: Record<string, unknown>;
      };
    };
    /** Update a MaintainX user. */
    "maintainx.update_user": {
      input: {
        /**
         * The MaintainX user id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The MaintainX user's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The MaintainX user's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The MaintainX user's email address.
         * @format email
         */
        email?: string | null;
        /** The MaintainX user's phone number. */
        phoneNumber?: string | null;
        /** The MaintainX user role. */
        role?: "ADMIN" | "MEMBER" | "OPERATOR" | "REQUESTER" | "SERVICE_ACCOUNT" | null;
        /** The MaintainX custom role name assigned to the user. */
        customRole?: string | null;
        /** The MaintainX user authentication type. */
        authType?: "NORMAL" | "SAML" | "OIDC" | null;
        /** How MaintainX should invite the user. */
        inviteType?: "ALL" | "EMAIL" | "SMS" | "NONE" | null;
        /** The user's hourly rate in cents. */
        hourlyRate?: number | null;
        /** Extra data attached to the MaintainX record. */
        externalData?: Record<string, unknown> | number | string | null;
        /** MaintainX custom fields. Keys are exact custom field labels. */
        extraFields?: Record<string, unknown>;
        /**
         * The MaintainX organization id for multi-organization tokens.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** The MaintainX user returned by the API. */
        user: Record<string, unknown>;
      };
    };
    /** Update a MaintainX work order. */
    "maintainx.update_work_order": {
      input: {
        /**
         * The MaintainX work order id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The MaintainX work order title.
         * @minLength 1
         */
        title?: string;
        /** The MaintainX work order description. */
        description?: string | null;
        /**
         * The MaintainX asset id assigned to the work order.
         * @exclusiveMinimum 0
         */
        assetId?: number | null;
        /**
         * The MaintainX location id assigned to the work order.
         * @exclusiveMinimum 0
         */
        locationId?: number | null;
        /** The MaintainX work order priority. */
        priority?: "NONE" | "LOW" | "MEDIUM" | "HIGH";
        /** The MaintainX work order type. */
        type?: "OTHER" | "REACTIVE" | "PREVENTIVE";
        /**
         * The due date and time for the work order.
         * @format date-time
         */
        dueDate?: string | null;
        /**
         * The date and time when the work order should appear.
         * @format date-time
         */
        startDate?: string | null;
        /** The estimated time in seconds required to complete the work order. */
        estimatedTime?: number | null;
        /** The MaintainX requester id or requester email address. */
        requesterId?: number | null | string;
        /**
         * Categories assigned to the work order.
         * @minItems 1
         */
        categories?: Array<string>;
        /** MaintainX users or teams assigned to the work order. */
        assignees?: Array<{
          /** Whether the assignee id refers to a user or a team. */
          type: "USER" | "TEAM";
          /** The MaintainX user or team id, or a user email address. */
          id: number | string;
        }>;
        /** Extra data attached to the MaintainX record. */
        externalData?: Record<string, unknown> | number | string | null;
        /** MaintainX custom fields. Keys are exact custom field labels. */
        extraFields?: Record<string, unknown>;
        /**
         * Vendor ids assigned to the work order.
         * @minItems 1
         */
        vendorIds?: Array<number>;
        /** Parts used in this MaintainX work order. */
        partsUsed?: Array<Record<string, unknown>>;
        /**
         * The work request id approved by this work order.
         * @exclusiveMinimum 0
         */
        workRequestId?: number | null;
        /**
         * The work order template id used to create this work order.
         * @exclusiveMinimum 0
         */
        workOrderTemplateId?: number | null;
        /** The procedure template id to attach to the work order. */
        procedureTemplateId?: number | null;
        /** The parent work order id for sub-work orders. */
        parentId?: number | null;
        /** Whether the work order is a parent work order. */
        isParent?: boolean | null;
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
        /**
         * MaintainX work order fields to expand in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** The MaintainX work order returned by the API. */
        workOrder: Record<string, unknown>;
      };
    };
    /** Update the status of a MaintainX work order. */
    "maintainx.update_work_order_status": {
      input: {
        /**
         * The MaintainX work order id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The MaintainX status to set on the work order. */
        status: "OPEN" | "IN_PROGRESS" | "ON_HOLD" | "DONE" | "CANCELED";
        /** Whether MaintainX should skip triggering subscribed webhooks. */
        skipWebhook?: boolean;
      };
      output: {
        /** The MaintainX work order returned by the API. */
        workOrder: Record<string, unknown>;
      };
    };
  }
}
