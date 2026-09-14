import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Download a public file URL and attach the file to one HomeBox entity. */
    "homebox.add_entity_attachment": {
      input: {
        /**
         * The entity UUID.
         * @minLength 1
         */
        entityId: string;
        /**
         * A public HTTP or HTTPS URL for the file to attach.
         * @format uri
         */
        fileUrl: string;
        /** The attachment type. */
        type?: "photo" | "manual" | "warranty" | "attachment" | "receipt" | "thumbnail";
        /** The stored file name, including the extension. */
        name?: string;
        /** Whether this is the primary image. */
        primary?: boolean;
      };
      output: {
        /** The entity as returned by HomeBox. */
        entity: Record<string, unknown>;
      };
    };
    /** Add a maintenance entry to one HomeBox entity. */
    "homebox.add_maintenance_entry": {
      input: {
        /**
         * The entity UUID returned by HomeBox.
         * @minLength 1
         */
        entityId: string;
        /**
         * The maintenance entry name.
         * @minLength 1
         */
        name: string;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        completedDate?: string;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        scheduledDate?: string;
        /** The maintenance work description. */
        description?: string;
        /** The maintenance cost as a number string. */
        cost?: string;
      };
      output: {
        /** The created maintenance entry. */
        entry: Record<string, unknown>;
      };
    };
    /** Create a new HomeBox entity with a name and optional type, parent, description, quantity, and tags. */
    "homebox.create_entity": {
      input: {
        /**
         * The entity name.
         * @minLength 1
         */
        name: string;
        /** The entity type UUID. */
        entityTypeId?: string;
        /** The parent entity UUID. */
        parentId?: string;
        /** The entity description. */
        description?: string;
        /** The quantity. */
        quantity?: number;
        /** The tag UUIDs to attach. */
        tagIds?: Array<string>;
      };
      output: {
        /** The entity as returned by HomeBox. */
        entity: Record<string, unknown>;
      };
    };
    /** Create a new HomeBox entity type, optionally flagged as a location. */
    "homebox.create_entity_type": {
      input: {
        /**
         * The entity type name.
         * @minLength 1
         */
        name: string;
        /** The description. */
        description?: string;
        /** The icon identifier. */
        icon?: string;
        /** Whether this type represents a location. */
        isLocation?: boolean;
      };
      output: {
        /** The created entity type. */
        entityType: Record<string, unknown>;
      };
    };
    /** Create a new HomeBox tag. */
    "homebox.create_tag": {
      input: {
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
        /** The description. */
        description?: string;
        /** The tag color, for example #ff0000. */
        color?: string;
        /** The icon identifier. */
        icon?: string;
        /** The parent tag UUID. */
        parentId?: string;
      };
      output: {
        /** The created tag. */
        tag: Record<string, unknown>;
      };
    };
    /** Delete one HomeBox entity. */
    "homebox.delete_entity": {
      input: {
        /**
         * The entity UUID returned by HomeBox.
         * @minLength 1
         */
        entityId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one HomeBox entity type. */
    "homebox.delete_entity_type": {
      input: {
        /**
         * The entity type UUID.
         * @minLength 1
         */
        entityTypeId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one HomeBox tag. */
    "homebox.delete_tag": {
      input: {
        /**
         * The tag UUID.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
      };
    };
    /** Fetch one HomeBox entity with its full details, including attachments and custom fields. */
    "homebox.get_entity": {
      input: {
        /**
         * The entity UUID returned by HomeBox.
         * @minLength 1
         */
        entityId: string;
      };
      output: {
        /** The entity as returned by HomeBox. */
        entity: Record<string, unknown>;
      };
    };
    /** Fetch HomeBox group dashboard statistics. */
    "homebox.get_group_statistics": {
      input: Record<string, never>;
      output: {
        /** The group statistics payload. */
        statistics: Record<string, unknown>;
      };
    };
    /** Fetch the maintenance log of one HomeBox entity. */
    "homebox.get_maintenance_log": {
      input: {
        /**
         * The entity UUID returned by HomeBox.
         * @minLength 1
         */
        entityId: string;
        /** Which maintenance entries to include. */
        status?: "scheduled" | "completed" | "both";
      };
      output: {
        /** The maintenance entries. */
        entries: Array<Record<string, unknown>>;
      };
    };
    /** Fetch the HomeBox instance status: health, version, and whether registration is open. */
    "homebox.get_status": {
      input: Record<string, never>;
      output: {
        /** The HomeBox status payload returned by the instance. */
        summary: Record<string, unknown>;
      };
    };
    /** List custom field names in use across the HomeBox group. */
    "homebox.list_custom_field_names": {
      input: Record<string, never>;
      output: {
        /** The names. */
        names: Array<string>;
      };
    };
    /** List values in use for one custom field name. */
    "homebox.list_custom_field_values": {
      input: {
        /**
         * The custom field name.
         * @minLength 1
         */
        field: string;
      };
      output: {
        /** The values. */
        values: Array<string>;
      };
    };
    /** Search HomeBox entities with optional text search, pagination, and tag or parent filters. */
    "homebox.list_entities": {
      input: {
        /** Free-text search string. */
        q?: string;
        /** Page number, starting at 1. */
        page?: number;
        /** Maximum number of entities per page. */
        pageSize?: number;
        /** Tag UUIDs to filter by. */
        tagIds?: Array<string>;
        /** Parent entity UUIDs to filter by. */
        parentIds?: Array<string>;
      };
      output: {
        /** The matching entities. */
        items: Array<Record<string, unknown>>;
        /** The current page number. */
        page: number;
        /** The page size used by the instance. */
        pageSize: number;
        /** The total number of matching entities. */
        total: number;
      };
    };
    /** List all HomeBox entity types, including location-flagged types. */
    "homebox.list_entity_types": {
      input: Record<string, never>;
      output: {
        /** The entity types. */
        entityTypes: Array<Record<string, unknown>>;
      };
    };
    /** List all HomeBox tags. */
    "homebox.list_tags": {
      input: Record<string, never>;
      output: {
        /** The tags. */
        tags: Array<Record<string, unknown>>;
      };
    };
    /** Update one HomeBox entity while preserving fields that are not provided. */
    "homebox.update_entity": {
      input: {
        /**
         * The entity UUID returned by HomeBox.
         * @minLength 1
         */
        entityId: string;
        /**
         * The entity name.
         * @minLength 1
         */
        name?: string;
        /** The description; pass null to clear it. */
        description?: string | null;
        /** The quantity. */
        quantity?: number;
        /** Whether the entity is insured. */
        insured?: boolean;
        /** Whether the entity is archived. */
        archived?: boolean;
        /** The entity type UUID. */
        entityTypeId?: string;
        /** The tag UUIDs. */
        tagIds?: Array<string>;
        /** The parent UUID, or null to unset it. */
        parentId?: string | null;
        /** The serial number. */
        serialNumber?: string;
        /** The model number. */
        modelNumber?: string;
        /** The manufacturer. */
        manufacturer?: string;
        /** Whether the entity has a lifetime warranty. */
        lifetimeWarranty?: boolean;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        warrantyExpires?: string;
        /** Warranty details. */
        warrantyDetails?: string;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        purchaseDate?: string;
        /** Where the entity was purchased. */
        purchaseFrom?: string;
        /** The purchase price. */
        purchasePrice?: number;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        soldDate?: string;
        /** Who the entity was sold to. */
        soldTo?: string;
        /** The sale price. */
        soldPrice?: number;
        /** Notes about the sale. */
        soldNotes?: string;
        /** Free-form entity notes. */
        notes?: string;
        /** Whether to apply location changes to children. */
        syncChildEntityLocations?: boolean;
        /** The replacement custom fields. */
        fields?: Array<{
          /**
           * The field name.
           * @minLength 1
           */
          name: string;
          /** The field type. */
          type: "text";
          /** The text value. */
          textValue: string;
        } | {
          /**
           * The field name.
           * @minLength 1
           */
          name: string;
          /** The field type. */
          type: "number";
          /** The numeric value. */
          numberValue: number;
        } | {
          /**
           * The field name.
           * @minLength 1
           */
          name: string;
          /** The field type. */
          type: "boolean";
          /** The boolean value. */
          booleanValue: boolean;
        }>;
      };
      output: {
        /** The entity as returned by HomeBox. */
        entity: Record<string, unknown>;
      };
    };
  }
}
