import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for the Snipe-IT user associated with the API key. */
    "snipe_it.get_current_user": {
      input: Record<string, never>;
      output: {
        /** One object returned by the Snipe-IT API. */
        user: Record<string, unknown>;
      };
    };
    /** List Snipe-IT categories with optional search and filters. */
    "snipe_it.list_categories": {
      input: {
        /**
         * Number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Offset to use when retrieving results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search string.
         * @minLength 1
         */
        search?: string;
        /**
         * Field to order by.
         * @minLength 1
         */
        sort?: string;
        /** Sort order. */
        order?: "asc" | "desc";
        /**
         * Category name to filter by.
         * @minLength 1
         */
        name?: string;
        /** ID number of the category to filter by. */
        categoryId?: number;
        /** Type of category to filter by. */
        categoryType?: "asset" | "accessory" | "consumable" | "component" | "license";
        /** Filter by whether the category uses the default EULA. */
        useDefaultEula?: boolean;
        /** Filter by whether the category requires acceptance. */
        requireAcceptance?: boolean;
        /** Filter by whether the category sends check-in email. */
        checkinEmail?: boolean;
      };
      output: {
        /** Total number of matching records returned by Snipe-IT. */
        total: number;
        /** Rows returned by Snipe-IT. */
        categories: Array<Record<string, unknown>>;
      };
    };
    /** List Snipe-IT companies. */
    "snipe_it.list_companies": {
      input: {
        /**
         * Company name to filter by.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Total number of matching records returned by Snipe-IT. */
        total: number;
        /** Rows returned by Snipe-IT. */
        companies: Array<Record<string, unknown>>;
      };
    };
    /** List Snipe-IT hardware assets with optional search and filters. */
    "snipe_it.list_hardware": {
      input: {
        /**
         * Number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Offset to use when retrieving results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search string.
         * @minLength 1
         */
        search?: string;
        /**
         * Field to order by.
         * @minLength 1
         */
        sort?: string;
        /** Sort order. */
        order?: "asc" | "desc";
        /**
         * Return only assets associated with a specific order number.
         * @minLength 1
         */
        orderNumber?: string;
        /** Restrict asset results to this asset model ID. */
        modelId?: number;
        /** Restrict asset results to this category ID. */
        categoryId?: number;
        /** Restrict asset results to this manufacturer ID. */
        manufacturerId?: number;
        /** Restrict asset results to this company ID. */
        companyId?: number;
        /** Restrict asset results to this location ID. */
        locationId?: number;
        /**
         * Restrict asset results to a documented Snipe-IT status value.
         * @minLength 1
         */
        status?: string;
        /** Restrict asset results to this status label ID. */
        statusId?: number;
        /** Restrict asset results to this assigned user or item ID. */
        assignedTo?: number;
        /** Restrict asset results by assigned item type. */
        assignedType?: "App\\Models\\Asset" | "App\\Models\\Accessory" | "App\\Models\\User";
        /** Key-value filters to send as Snipe-IT's JSON filter query parameter. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** Total number of matching records returned by Snipe-IT. */
        total: number;
        /** Rows returned by Snipe-IT. */
        hardware: Array<Record<string, unknown>>;
      };
    };
    /** List Snipe-IT status labels with optional search and filters. */
    "snipe_it.list_status_labels": {
      input: {
        /**
         * Number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Offset to use when retrieving results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search string.
         * @minLength 1
         */
        search?: string;
        /**
         * Field to order by.
         * @minLength 1
         */
        sort?: string;
        /** Sort order. */
        order?: "asc" | "desc";
        /**
         * Status label name to filter by.
         * @minLength 1
         */
        name?: string;
        /** Status label type to filter by. */
        statusType?: "deployable" | "undeployable" | "pending" | "archived";
      };
      output: {
        /** Total number of matching records returned by Snipe-IT. */
        total: number;
        /** Rows returned by Snipe-IT. */
        statusLabels: Array<Record<string, unknown>>;
      };
    };
    /** List Snipe-IT users with optional search and filters. */
    "snipe_it.list_users": {
      input: {
        /**
         * Number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Offset to use when retrieving results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search string.
         * @minLength 1
         */
        search?: string;
        /**
         * Field to order by.
         * @minLength 1
         */
        sort?: string;
        /** Sort order. */
        order?: "asc" | "desc";
        /**
         * Filter by first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Filter by last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Filter by username.
         * @minLength 1
         */
        username?: string;
        /**
         * Filter by email address or email search text.
         * @minLength 1
         */
        email?: string;
        /**
         * Filter by employee number.
         * @minLength 1
         */
        employeeNum?: string;
        /**
         * Filter by state.
         * @minLength 1
         */
        state?: string;
        /**
         * Filter by zip or postal code.
         * @minLength 1
         */
        zip?: string;
        /**
         * Filter by country.
         * @minLength 1
         */
        country?: string;
        /** Filter by group ID. */
        groupId?: number;
        /** Filter by department ID. */
        departmentId?: number;
        /** Filter by company ID. */
        companyId?: number;
        /** Filter by location ID. */
        locationId?: number;
        /** Return only deleted users. */
        deleted?: boolean;
        /** Return both deleted and active users. */
        all?: boolean;
        /** Filter by whether the user was imported or synced with LDAP. */
        ldapImport?: boolean;
        /** Filter by number of checked out assets. */
        assetsCount?: number;
        /** Filter by number of checked out licenses. */
        licensesCount?: number;
        /** Filter by number of checked out accessories. */
        accessoriesCount?: number;
        /** Filter by number of checked out consumables. */
        consumablesCount?: number;
        /** Filter by whether the user is marked as remote. */
        remote?: boolean;
        /** Filter by whether the user is marked as VIP. */
        vip?: boolean;
        /**
         * Filter by start date.
         * @format date
         */
        startDate?: string;
        /**
         * Filter by end date.
         * @format date
         */
        endDate?: string;
        /** Key-value filters to send as Snipe-IT's JSON filter query parameter. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** Total number of matching records returned by Snipe-IT. */
        total: number;
        /** Rows returned by Snipe-IT. */
        users: Array<Record<string, unknown>>;
      };
    };
  }
}
