import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive a live property by ID. */
    "apaleo.archive_property": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Check whether a property exists by ID. */
    "apaleo.check_property_exists": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the requested resource currently exists. */
        exists: boolean;
      };
    };
    /** Check whether a unit attribute definition exists by ID. */
    "apaleo.check_unit_attribute_exists": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the requested resource currently exists. */
        exists: boolean;
      };
    };
    /** Check whether a unit exists by ID. */
    "apaleo.check_unit_exists": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the requested resource currently exists. */
        exists: boolean;
      };
    };
    /** Check whether a unit group exists by ID. */
    "apaleo.check_unit_group_exists": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the requested resource currently exists. */
        exists: boolean;
      };
    };
    /** Clone an existing property into a new property with inventory and rate plans. */
    "apaleo.clone_property": {
      input: {
        /**
         * Property code shown in reports and table views.
         * @minLength 3
         * @maxLength 10
         */
        code: string;
        /** Localized property name. */
        name: Record<string, string>;
        /**
         * Legal company name for the property.
         * @minLength 1
         */
        companyName: string;
        /** Managing directors shown on invoices. */
        managingDirectors?: string;
        /**
         * Commercial register entry shown on invoices.
         * @minLength 1
         */
        commercialRegisterEntry: string;
        /**
         * Tax identification number shown on invoices.
         * @minLength 1
         */
        taxId: string;
        /** Localized property description. */
        description?: Record<string, string>;
        /** Property address used during creation. */
        location: {
          /**
           * Primary address line.
           * @minLength 1
           */
          addressLine1: string;
          /** Secondary address line. */
          addressLine2?: string;
          /**
           * Postal or ZIP code.
           * @minLength 1
           */
          postalCode: string;
          /**
           * City name.
           * @minLength 1
           */
          city: string;
          /**
           * ISO 3166-2 region code.
           * @minLength 2
           * @maxLength 6
           */
          regionCode?: string;
          /**
           * ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          countryCode: string;
        };
        /** Property bank account details. */
        bankAccount?: {
          /** International Bank Account Number. */
          iban?: string;
          /** Bank Identifier Code. */
          bic?: string;
          /** Name of the bank. */
          bank?: string;
        };
        /** Localized payment terms used by the property. */
        paymentTerms: Record<string, string>;
        /**
         * IANA time zone name.
         * @minLength 1
         */
        timeZone: string;
        /** Default check-in time in ISO 8601 time format. */
        defaultCheckInTime: string;
        /** Default check-out time in ISO 8601 time format. */
        defaultCheckOutTime: string;
        /** ISO 4217 currency code. */
        currencyCode: string;
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * Optional idempotency key used to safely retry the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Identifier returned by the successful create request. */
        id: string;
      };
    };
    /** Return the total number of properties accessible to the connected apaleo account. */
    "apaleo.count_properties": {
      input: Record<string, never>;
      output: {
        /** Total count returned by apaleo. */
        count: number;
      };
    };
    /** Return the total number of unit groups matching the provided filters. */
    "apaleo.count_unit_groups": {
      input: {
        /** Return unit groups for the specified property ID. */
        propertyId?: string;
        /** Filter results by one or more unit group types. */
        unitGroupTypes?: Array<"BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot" | "Other">;
      };
      output: {
        /** Total count returned by apaleo. */
        count: number;
      };
    };
    /** Return the total number of units matching the provided filters. */
    "apaleo.count_units": {
      input: {
        /** Return units for the specified property ID. */
        propertyId?: string;
        /** Deprecated single unit group filter kept for compatibility. */
        unitGroupId?: string;
        /** Return units for the specified unit group IDs. */
        unitGroupIds?: Array<string>;
        /** Return units that have the specified unit attribute IDs. */
        unitAttributeIds?: Array<string>;
        /** Filter by occupied or vacant units. */
        isOccupied?: boolean;
        /** Type of scheduled maintenance. */
        maintenanceType?: "OutOfService" | "OutOfOrder" | "OutOfInventory";
        /** Current cleanliness state of the unit. */
        condition?: "Clean" | "CleanToBeInspected" | "Dirty";
        /** Case-insensitive search term matched against the unit name. */
        textSearch?: string;
        /** Whether to return active units, archived units, or both. */
        status?: "Active" | "Archived" | "All";
      };
      output: {
        /** Total count returned by apaleo. */
        count: number;
      };
    };
    /** Create multiple units in a single bulk request. */
    "apaleo.create_multiple_units": {
      input: {
        /**
         * Units to create in bulk.
         * @minItems 1
         */
        units: Array<{
          /** Property ID where the unit should be created. */
          propertyId: string;
          /**
           * Unit name.
           * @minLength 1
           */
          name: string;
          /** Localized unit description. */
          description: Record<string, string>;
          /** Unit group ID for the new unit. */
          unitGroupId?: string;
          /**
           * Maximum occupancy of the unit.
           * @minimum 1
           */
          maxPersons: number;
          /** Current cleanliness state of the unit. */
          condition?: "Clean" | "CleanToBeInspected" | "Dirty";
          /** Unit attributes assigned to the unit. */
          attributes?: Array<{
            /** Unit attribute definition ID. */
            id: string;
          }>;
          /** Units used to compose this combined unit. */
          connectedUnits?: Array<{
            /** ID of a unit used inside a combined unit. */
            unitId: string;
          }>;
        }>;
        /**
         * Optional idempotency key used to safely retry the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Identifiers returned by the bulk create request. */
        ids: Array<string>;
      };
    };
    /** Create a new property in apaleo. */
    "apaleo.create_property": {
      input: {
        /**
         * Property code shown in reports and table views.
         * @minLength 3
         * @maxLength 10
         */
        code: string;
        /** Localized property name. */
        name: Record<string, string>;
        /**
         * Legal company name for the property.
         * @minLength 1
         */
        companyName: string;
        /** Managing directors shown on invoices. */
        managingDirectors?: string;
        /**
         * Commercial register entry shown on invoices.
         * @minLength 1
         */
        commercialRegisterEntry: string;
        /**
         * Tax identification number shown on invoices.
         * @minLength 1
         */
        taxId: string;
        /** Localized property description. */
        description?: Record<string, string>;
        /** Property address used during creation. */
        location: {
          /**
           * Primary address line.
           * @minLength 1
           */
          addressLine1: string;
          /** Secondary address line. */
          addressLine2?: string;
          /**
           * Postal or ZIP code.
           * @minLength 1
           */
          postalCode: string;
          /**
           * City name.
           * @minLength 1
           */
          city: string;
          /**
           * ISO 3166-2 region code.
           * @minLength 2
           * @maxLength 6
           */
          regionCode?: string;
          /**
           * ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          countryCode: string;
        };
        /** Property bank account details. */
        bankAccount?: {
          /** International Bank Account Number. */
          iban?: string;
          /** Bank Identifier Code. */
          bic?: string;
          /** Name of the bank. */
          bank?: string;
        };
        /** Localized payment terms used by the property. */
        paymentTerms: Record<string, string>;
        /**
         * IANA time zone name.
         * @minLength 1
         */
        timeZone: string;
        /** Default check-in time in ISO 8601 time format. */
        defaultCheckInTime: string;
        /** Default check-out time in ISO 8601 time format. */
        defaultCheckOutTime: string;
        /** ISO 4217 currency code. */
        currencyCode: string;
        /**
         * Optional idempotency key used to safely retry the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Identifier returned by the successful create request. */
        id: string;
      };
    };
    /** Create a new unit. */
    "apaleo.create_unit": {
      input: {
        /** Property ID where the unit should be created. */
        propertyId: string;
        /**
         * Unit name.
         * @minLength 1
         */
        name: string;
        /** Localized unit description. */
        description: Record<string, string>;
        /** Unit group ID for the new unit. */
        unitGroupId?: string;
        /**
         * Maximum occupancy of the unit.
         * @minimum 1
         */
        maxPersons: number;
        /** Current cleanliness state of the unit. */
        condition?: "Clean" | "CleanToBeInspected" | "Dirty";
        /** Unit attributes assigned to the unit. */
        attributes?: Array<{
          /** Unit attribute definition ID. */
          id: string;
        }>;
        /** Units used to compose this combined unit. */
        connectedUnits?: Array<{
          /** ID of a unit used inside a combined unit. */
          unitId: string;
        }>;
        /**
         * Optional idempotency key used to safely retry the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Identifier returned by the successful create request. */
        id: string;
      };
    };
    /** Create a new unit attribute definition. */
    "apaleo.create_unit_attribute": {
      input: {
        /**
         * Name of the unit attribute definition.
         * @minLength 1
         * @maxLength 50
         */
        name: string;
        /** Description of the unit attribute definition. */
        description?: string;
        /**
         * Optional idempotency key used to safely retry the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Identifier returned by the successful create request. */
        id: string;
      };
    };
    /** Create a new unit group. */
    "apaleo.create_unit_group": {
      input: {
        /**
         * Unit group code shown in reports and table views.
         * @minLength 3
         * @maxLength 10
         */
        code: string;
        /** Property ID where the unit group should be created. */
        propertyId: string;
        /** Localized unit group name. */
        name: Record<string, string>;
        /** Localized unit group description. */
        description: Record<string, string>;
        /**
         * Maximum occupancy of the unit group.
         * @minimum 1
         */
        maxPersons: number;
        /**
         * Sort rank of the unit group.
         * @minimum 1
         */
        rank?: number;
        /** Type of the unit group to create. */
        type?: "BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot";
        /** Connected unit groups used by the new unit group. */
        connectedUnitGroups?: Array<{
          /** Connected unit group ID. */
          unitGroupId: string;
          /**
           * Number of units to take from that unit group.
           * @minimum 1
           */
          memberCount: number;
        }>;
        /**
         * Optional idempotency key used to safely retry the request.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Identifier returned by the successful create request. */
        id: string;
      };
    };
    /** Delete a unit by ID. */
    "apaleo.delete_unit": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Delete a unit attribute definition by ID. */
    "apaleo.delete_unit_attribute": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Delete a unit group by ID. */
    "apaleo.delete_unit_group": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Get one property by ID, including optional localized fields and expanded actions. */
    "apaleo.get_property": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
        /** Return all languages or the listed ISO Alpha-2 language codes. */
        languages?: Array<string>;
        /** Embedded resources to expand in the property response. */
        expand?: Array<"actions">;
      };
      output: {
        /** Property ID. */
        id: string;
        /** Short property code. */
        code: string;
        /** Template property ID used to create this property. */
        propertyTemplateId?: string;
        /** Whether this property can be used as a template. */
        isTemplate: boolean;
        /** Localized property name. */
        name: Record<string, string>;
        /** Localized property description. */
        description?: Record<string, string>;
        /** Legal company name for the property. */
        companyName: string;
        /** Managing directors shown on invoices. */
        managingDirectors?: string;
        /** Commercial register entry shown on invoices. */
        commercialRegisterEntry: string;
        /** Tax identification number shown on invoices. */
        taxId: string;
        /** Property address details. */
        location: {
          /** Primary address line. */
          addressLine1: string;
          /** Secondary address line. */
          addressLine2?: string;
          /** Postal or ZIP code. */
          postalCode: string;
          /** City name. */
          city: string;
          /** Region or state code. */
          regionCode?: string;
          /** ISO 3166-1 alpha-2 country code. */
          countryCode: string;
        };
        /** Property bank account details. */
        bankAccount?: {
          /** International Bank Account Number. */
          iban?: string;
          /** Bank Identifier Code. */
          bic?: string;
          /** Name of the bank. */
          bank?: string;
        };
        /** Localized payment terms used by the property. */
        paymentTerms: Record<string, string>;
        /** IANA time zone name. */
        timeZone: string;
        /** ISO 4217 currency code. */
        currencyCode: string;
        /** Property creation timestamp in ISO 8601 format. */
        created: string;
        /** Property status. */
        status: "Test" | "Live";
        /** Whether the property is archived. */
        isArchived: boolean;
        /** Available actions for the property. */
        actions?: Array<{
          /** Property action name. */
          action: "Delete" | "Archive" | "SetLive" | "Reset";
          /** Whether the property action is currently allowed. */
          isAllowed: boolean;
          /** Reasons returned when the property action is not allowed. */
          reasons?: Array<{
            /** Machine-readable reason code. */
            code: string;
            /** Human-readable reason message. */
            message: string;
          }>;
        }>;
      };
    };
    /** Get one unit by ID, including optional localized fields and expansions. */
    "apaleo.get_unit": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
        /** Return all languages or the listed ISO Alpha-2 language codes. */
        languages?: Array<string>;
        /** Embedded resources to expand in the unit response. */
        expand?: Array<"property" | "unitGroup" | "connectedUnits" | "actions">;
      };
      output: {
        /** Unit ID. */
        id: string;
        /** Unit name. */
        name: string;
        /** Localized unit description. */
        description: Record<string, string>;
        /** Embedded property summary. */
        property: {
          /** Property ID. */
          id: string;
          /** Short property code. */
          code?: string;
          /** Property name in the selected response language. */
          name?: string;
          /** Property description in the selected response language. */
          description?: string;
        };
        /** Embedded unit group summary. */
        unitGroup?: {
          /** Unit group ID. */
          id: string;
          /** Short unit group code. */
          code?: string;
          /** Unit group name in the selected response language. */
          name?: string;
          /** Unit group description in the selected response language. */
          description?: string;
          /** Type of the unit group. */
          type?: "BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot" | "Other";
        };
        /** Embedded connecting unit data. */
        connectingUnit?: {
          /** Unit ID. */
          id: string;
          /** Unit name. */
          name?: string;
          /** Unit description. */
          description?: string;
          /** Unit group ID. */
          unitGroupId?: string;
        };
        /** Current unit status returned by single-unit reads. */
        status: {
          /** Whether the unit is currently occupied. */
          isOccupied: boolean;
          /** Current cleanliness state of the unit. */
          condition: "Clean" | "CleanToBeInspected" | "Dirty";
          /** Scheduled maintenance details for the unit. */
          maintenance?: {
            /** Scheduled maintenance ID. */
            id: string;
            /** Maintenance start timestamp in ISO 8601 format. */
            from: string;
            /** Maintenance end timestamp in ISO 8601 format. */
            to: string;
            /** Type of scheduled maintenance. */
            type: "OutOfService" | "OutOfOrder" | "OutOfInventory";
            /** Maintenance description. */
            description?: string;
          };
        };
        /** Maximum occupancy of the unit. */
        maxPersons: number;
        /** Unit creation timestamp in ISO 8601 format. */
        created: string;
        /** Archive timestamp in ISO 8601 format. */
        archived?: string;
        /** Whether the unit is archived. */
        isArchived?: boolean;
        /** Unit attributes assigned to the unit. */
        attributes?: Array<{
          /** Unit attribute ID. */
          id: string;
          /** Unit attribute name. */
          name: string;
          /** Unit attribute description. */
          description?: string;
        }>;
        /** Units that compose this combined unit. */
        connectedUnits?: Array<{
          /** Connected unit ID. */
          id: string;
          /** Connected unit name. */
          name: string;
          /** Connected unit description. */
          description: string;
          /** Connected unit group ID. */
          unitGroupId: string;
          /** Current cleanliness state of the unit. */
          condition: "Clean" | "CleanToBeInspected" | "Dirty";
          /** Maximum occupancy of the connected unit. */
          maxPersons: number;
        }>;
        /** Available actions for the unit. */
        actions?: Array<{
          /** Unit action name. */
          action: "Delete" | "Archive";
          /** Whether the unit action is currently allowed. */
          isAllowed: boolean;
          /** Reasons returned when the unit action is not allowed. */
          reasons?: Array<{
            /** Machine-readable reason code. */
            code: string;
            /** Human-readable reason message. */
            message: string;
          }>;
        }>;
      };
    };
    /** Get one unit attribute definition by ID. */
    "apaleo.get_unit_attribute": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Unit attribute definition ID. */
        id: string;
        /** Unit attribute definition name. */
        name: string;
        /** Unit attribute definition description. */
        description?: string;
      };
    };
    /** Get one unit group by ID, including optional localized fields and expansions. */
    "apaleo.get_unit_group": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
        /** Return all languages or the listed ISO Alpha-2 language codes. */
        languages?: Array<string>;
        /** Embedded resources to expand in the unit group response. */
        expand?: Array<"property" | "connectedUnitGroups">;
      };
      output: {
        /** Unit group ID. */
        id: string;
        /** Short unit group code. */
        code: string;
        /** Embedded property summary. */
        property: {
          /** Property ID. */
          id: string;
          /** Short property code. */
          code?: string;
          /** Property name in the selected response language. */
          name?: string;
          /** Property description in the selected response language. */
          description?: string;
        };
        /** Localized unit group name. */
        name: Record<string, string>;
        /** Number of units in the unit group. */
        memberCount: number;
        /** Localized unit group description. */
        description: Record<string, string>;
        /** Maximum occupancy of the unit group. */
        maxPersons: number;
        /** Sort rank of the unit group. */
        rank?: number;
        /** Type of the unit group. */
        type: "BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot" | "Other";
        /** Connected unit groups used by this unit group. */
        connectedUnitGroups?: Array<{
          /** Connected unit group ID. */
          id: string;
          /** Connected unit group name. */
          name: string;
          /** Connected unit group description. */
          description: string;
          /** Number of units taken from the connected unit group. */
          memberCount: number;
          /** Maximum occupancy of the connected unit group. */
          maxPersons?: number;
        }>;
      };
    };
    /** List properties accessible to the connected apaleo account, with optional status, archive, country, and expansion filters. */
    "apaleo.list_properties": {
      input: {
        /** Filter results by one or more property statuses. */
        status?: Array<"Test" | "Live">;
        /** Whether archived properties should be included. */
        includeArchived?: boolean;
        /** Filter results by ISO country code. */
        countryCode?: Array<string>;
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /** Embedded resources to expand in the property response. */
        expand?: Array<"actions">;
      };
      output: {
        /** Total number of matching properties. */
        count: number;
        /** Properties returned for the current page. */
        properties: Array<{
          /** Property ID. */
          id: string;
          /** Short property code. */
          code: string;
          /** Template property ID used to create this property. */
          propertyTemplateId?: string;
          /** Whether this property can be used as a template. */
          isTemplate: boolean;
          /** Property name in the selected response language. */
          name: string;
          /** Property description in the selected response language. */
          description?: string;
          /** Legal company name for the property. */
          companyName: string;
          /** Managing directors shown on invoices. */
          managingDirectors?: string;
          /** Commercial register entry shown on invoices. */
          commercialRegisterEntry: string;
          /** Tax identification number shown on invoices. */
          taxId: string;
          /** Property address details. */
          location: {
            /** Primary address line. */
            addressLine1: string;
            /** Secondary address line. */
            addressLine2?: string;
            /** Postal or ZIP code. */
            postalCode: string;
            /** City name. */
            city: string;
            /** Region or state code. */
            regionCode?: string;
            /** ISO 3166-1 alpha-2 country code. */
            countryCode: string;
          };
          /** Property bank account details. */
          bankAccount?: {
            /** International Bank Account Number. */
            iban?: string;
            /** Bank Identifier Code. */
            bic?: string;
            /** Name of the bank. */
            bank?: string;
          };
          /** Localized payment terms used by the property. */
          paymentTerms: Record<string, string>;
          /** IANA time zone name. */
          timeZone: string;
          /** ISO 4217 currency code. */
          currencyCode: string;
          /** Property creation timestamp in ISO 8601 format. */
          created: string;
          /** Property status. */
          status: "Test" | "Live";
          /** Whether the property is archived. */
          isArchived: boolean;
          /** Available actions for the property. */
          actions?: Array<{
            /** Property action name. */
            action: "Delete" | "Archive" | "SetLive" | "Reset";
            /** Whether the property action is currently allowed. */
            isAllowed: boolean;
            /** Reasons returned when the property action is not allowed. */
            reasons?: Array<{
              /** Machine-readable reason code. */
              code: string;
              /** Human-readable reason message. */
              message: string;
            }>;
          }>;
        }>;
      };
    };
    /** List ISO country codes supported by apaleo property creation. */
    "apaleo.list_supported_countries": {
      input: Record<string, never>;
      output: {
        /** Supported ISO country codes. */
        countryCodes: Array<string>;
      };
    };
    /** List unit attribute definitions for the current account. */
    "apaleo.list_unit_attributes": {
      input: {
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching unit attributes. */
        count: number;
        /** Unit attributes returned for the current page. */
        unitAttributes: Array<{
          /** Unit attribute definition ID. */
          id: string;
          /** Unit attribute definition name. */
          name: string;
          /** Unit attribute definition description. */
          description?: string;
        }>;
      };
    };
    /** List unit groups with filters for property, unit group type, pagination, and embedded resources. */
    "apaleo.list_unit_groups": {
      input: {
        /** Return unit groups for the specified property ID. */
        propertyId?: string;
        /** Filter results by one or more unit group types. */
        unitGroupTypes?: Array<"BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot" | "Other">;
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /** Embedded resources to expand in the unit group response. */
        expand?: Array<"property" | "connectedUnitGroups">;
      };
      output: {
        /** Total number of matching unit groups. */
        count: number;
        /** Unit groups returned for the current page. */
        unitGroups: Array<{
          /** Unit group ID. */
          id: string;
          /** Short unit group code. */
          code: string;
          /** Unit group name in the selected response language. */
          name: string;
          /** Unit group description in the selected response language. */
          description: string;
          /** Number of units in the unit group. */
          memberCount: number;
          /** Maximum occupancy of the unit group. */
          maxPersons?: number;
          /** Sort rank of the unit group. */
          rank?: number;
          /** Type of the unit group. */
          type: "BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot" | "Other";
          /** Embedded property summary. */
          property: {
            /** Property ID. */
            id: string;
            /** Short property code. */
            code?: string;
            /** Property name in the selected response language. */
            name?: string;
            /** Property description in the selected response language. */
            description?: string;
          };
          /** Connected unit groups used by this unit group. */
          connectedUnitGroups?: Array<{
            /** Connected unit group ID. */
            id: string;
            /** Connected unit group name. */
            name: string;
            /** Connected unit group description. */
            description: string;
            /** Number of units taken from the connected unit group. */
            memberCount: number;
            /** Maximum occupancy of the connected unit group. */
            maxPersons?: number;
          }>;
        }>;
      };
    };
    /** List units with filters for property, unit group, attributes, occupancy, maintenance state, archive state, and expansions. */
    "apaleo.list_units": {
      input: {
        /** Return units for the specified property ID. */
        propertyId?: string;
        /** Deprecated single unit group filter kept for compatibility. */
        unitGroupId?: string;
        /** Return units for the specified unit group IDs. */
        unitGroupIds?: Array<string>;
        /** Return units that have the specified unit attribute IDs. */
        unitAttributeIds?: Array<string>;
        /** Filter by occupied or vacant units. */
        isOccupied?: boolean;
        /** Type of scheduled maintenance. */
        maintenanceType?: "OutOfService" | "OutOfOrder" | "OutOfInventory";
        /** Current cleanliness state of the unit. */
        condition?: "Clean" | "CleanToBeInspected" | "Dirty";
        /** Case-insensitive search term matched against the unit name. */
        textSearch?: string;
        /** Whether to return active units, archived units, or both. */
        status?: "Active" | "Archived" | "All";
        /**
         * 1-based page number to retrieve.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /** Embedded resources to expand in the unit response. */
        expand?: Array<"property" | "unitGroup" | "connectedUnits" | "actions">;
      };
      output: {
        /** Total number of matching units. */
        count: number;
        /** Units returned for the current page. */
        units: Array<{
          /** Unit ID. */
          id: string;
          /** Unit name. */
          name: string;
          /** Unit description in the selected response language. */
          description: string;
          /** Embedded property summary. */
          property: {
            /** Property ID. */
            id: string;
            /** Short property code. */
            code?: string;
            /** Property name in the selected response language. */
            name?: string;
            /** Property description in the selected response language. */
            description?: string;
          };
          /** Embedded unit group summary. */
          unitGroup?: {
            /** Unit group ID. */
            id: string;
            /** Short unit group code. */
            code?: string;
            /** Unit group name in the selected response language. */
            name?: string;
            /** Unit group description in the selected response language. */
            description?: string;
            /** Type of the unit group. */
            type?: "BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot" | "Other";
          };
          /** Embedded connecting unit data. */
          connectingUnit?: {
            /** Unit ID. */
            id: string;
            /** Unit name. */
            name?: string;
            /** Unit description. */
            description?: string;
            /** Unit group ID. */
            unitGroupId?: string;
          };
          /** Current unit status returned by unit list endpoints. */
          status: {
            /** Whether the unit is currently occupied. */
            isOccupied: boolean;
            /** Current cleanliness state of the unit. */
            condition: "Clean" | "CleanToBeInspected" | "Dirty";
            /** Scheduled maintenance summary for the unit. */
            maintenance?: {
              /** Scheduled maintenance ID. */
              id: string;
              /** Type of scheduled maintenance. */
              type: "OutOfService" | "OutOfOrder" | "OutOfInventory";
            };
          };
          /** Maximum occupancy of the unit. */
          maxPersons: number;
          /** Unit creation timestamp in ISO 8601 format. */
          created: string;
          /** Archive timestamp in ISO 8601 format. */
          archived?: string;
          /** Whether the unit is archived. */
          isArchived?: boolean;
          /** Unit attributes assigned to the unit. */
          attributes?: Array<{
            /** Unit attribute ID. */
            id: string;
            /** Unit attribute name. */
            name: string;
            /** Unit attribute description. */
            description?: string;
          }>;
          /** Units that compose this combined unit. */
          connectedUnits?: Array<{
            /** Connected unit ID. */
            id: string;
            /** Connected unit name. */
            name: string;
            /** Connected unit description. */
            description: string;
            /** Connected unit group ID. */
            unitGroupId: string;
            /** Current cleanliness state of the unit. */
            condition: "Clean" | "CleanToBeInspected" | "Dirty";
            /** Maximum occupancy of the connected unit. */
            maxPersons: number;
          }>;
          /** Available actions for the unit. */
          actions?: Array<{
            /** Unit action name. */
            action: "Delete" | "Archive";
            /** Whether the unit action is currently allowed. */
            isAllowed: boolean;
            /** Reasons returned when the unit action is not allowed. */
            reasons?: Array<{
              /** Machine-readable reason code. */
              code: string;
              /** Human-readable reason message. */
              message: string;
            }>;
          }>;
        }>;
      };
    };
    /** Move a test property to live status. */
    "apaleo.move_property_to_live": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Completely replace the mutable fields of an existing unit group. */
    "apaleo.replace_unit_group": {
      input: {
        /** Localized unit group name. */
        name: Record<string, string>;
        /** Localized unit group description. */
        description: Record<string, string>;
        /** Maximum occupancy of the unit group. */
        maxPersons?: number;
        /**
         * Sort rank of the unit group.
         * @minimum 1
         */
        rank?: number;
        /** Connected unit groups used by the replaced unit group. */
        connectedUnitGroups?: Array<{
          /** Connected unit group ID. */
          unitGroupId: string;
          /**
           * Number of units to take from that unit group.
           * @minimum 1
           */
          memberCount: number;
        }>;
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Delete all transactional data for a test property. */
    "apaleo.reset_property_data": {
      input: {
        /**
         * The apaleo resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
  }
}
