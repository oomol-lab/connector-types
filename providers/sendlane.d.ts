import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Sendlane custom field. */
    "sendlane.create_custom_field": {
      input: {
        /**
         * The custom field name.
         * @minLength 1
         */
        name: string;
        /**
         * The custom field type.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** Custom fields returned by Sendlane. */
        data: Array<{
          /** The custom field ID. */
          id?: string;
          /** The custom field name. */
          name?: string;
          /** The custom field type. */
          type?: string;
          /** When the custom field was created. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sendlane. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by Sendlane. */
        meta?: Record<string, unknown>;
      };
    };
    /** Create a Sendlane contact list. */
    "sendlane.create_list": {
      input: {
        /**
         * The list name.
         * @minLength 1
         */
        name: string;
        /** The list description. */
        description?: string;
      };
      output: {
        /** A Sendlane list. */
        data: {
          /** The list ID. */
          id?: number;
          /** The list name. */
          name?: string;
          /** The list description. */
          description?: string;
          /** The list status. */
          status?: string;
          /** When the list was created. */
          created?: string;
          /** The list flagged state. */
          flagged?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Sendlane contact tag. */
    "sendlane.create_tag": {
      input: {
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Sendlane tag. */
        data: {
          /** The tag ID. */
          id?: number;
          /** The tag name. */
          name?: string;
          /** The number of contacts assigned to the tag. */
          audience_count?: number;
          /** When the tag was created. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Sendlane contact list by ID. */
    "sendlane.delete_list": {
      input: {
        /**
         * The Sendlane list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /** The deletion result returned by Sendlane. */
        data: {
          /** The deletion status message. */
          message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Sendlane contact tag by ID. */
    "sendlane.delete_tag": {
      input: {
        /**
         * The Sendlane tag ID.
         * @exclusiveMinimum 0
         */
        tagId: number;
      };
      output: {
        /** The deletion result returned by Sendlane. */
        data: {
          /** The deletion status message. */
          message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Sendlane email campaign by ID. */
    "sendlane.get_campaign": {
      input: {
        /**
         * The Sendlane campaign ID.
         * @exclusiveMinimum 0
         */
        campaignId: number;
      };
      output: {
        /** A Sendlane campaign. */
        data: {
          /** The campaign ID. */
          id?: number;
          /** The campaign name. */
          name?: string;
          /** The campaign status. */
          status?: string;
          /** When the campaign is scheduled. */
          scheduled_at?: string;
          /** When the campaign was sent. */
          sent_at?: string;
          /** When the campaign was created. */
          created_at?: string;
          /** When the campaign was last updated. */
          updated_at?: string;
          /** The automation associated with the campaign. */
          automation?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Sendlane custom field by ID. */
    "sendlane.get_custom_field": {
      input: {
        /**
         * The Sendlane custom field ID.
         * @exclusiveMinimum 0
         */
        customFieldId: number;
      };
      output: {
        /** A Sendlane custom field. */
        data: {
          /** The custom field ID. */
          id?: string;
          /** The custom field name. */
          name?: string;
          /** The custom field type. */
          type?: string;
          /** When the custom field was created. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Sendlane contact list by ID. */
    "sendlane.get_list": {
      input: {
        /**
         * The Sendlane list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /** A Sendlane list. */
        data: {
          /** The list ID. */
          id?: number;
          /** The list name. */
          name?: string;
          /** The list description. */
          description?: string;
          /** The list status. */
          status?: string;
          /** When the list was created. */
          created?: string;
          /** The list flagged state. */
          flagged?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Sendlane contact tag by ID. */
    "sendlane.get_tag": {
      input: {
        /**
         * The Sendlane tag ID.
         * @exclusiveMinimum 0
         */
        tagId: number;
      };
      output: {
        /** A Sendlane tag. */
        data: {
          /** The tag ID. */
          id?: number;
          /** The tag name. */
          name?: string;
          /** The number of contacts assigned to the tag. */
          audience_count?: number;
          /** When the tag was created. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Sendlane email campaigns. */
    "sendlane.list_campaigns": {
      input: Record<string, never>;
      output: {
        /** Campaigns returned by Sendlane. */
        data: Array<{
          /** The campaign ID. */
          id?: number;
          /** The campaign name. */
          name?: string;
          /** The campaign status. */
          status?: string;
          /** When the campaign is scheduled. */
          scheduled_at?: string;
          /** When the campaign was sent. */
          sent_at?: string;
          /** When the campaign was created. */
          created_at?: string;
          /** When the campaign was last updated. */
          updated_at?: string;
          /** The automation associated with the campaign. */
          automation?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sendlane. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by Sendlane. */
        meta?: Record<string, unknown>;
      };
    };
    /** List Sendlane custom fields. */
    "sendlane.list_custom_fields": {
      input: {
        /**
         * The maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Custom fields returned by Sendlane. */
        data: Array<{
          /** The custom field ID. */
          id?: string;
          /** The custom field name. */
          name?: string;
          /** The custom field type. */
          type?: string;
          /** When the custom field was created. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sendlane. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by Sendlane. */
        meta?: Record<string, unknown>;
      };
    };
    /** List Sendlane contact lists. */
    "sendlane.list_lists": {
      input: {
        /**
         * The maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Lists returned by Sendlane. */
        data: Array<{
          /** The list ID. */
          id?: number;
          /** The list name. */
          name?: string;
          /** The list description. */
          description?: string;
          /** The list status. */
          status?: string;
          /** When the list was created. */
          created?: string;
          /** The list flagged state. */
          flagged?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sendlane. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by Sendlane. */
        meta?: Record<string, unknown>;
      };
    };
    /** List Sendlane contact tags. */
    "sendlane.list_tags": {
      input: Record<string, never>;
      output: {
        /** Tags returned by Sendlane. */
        data: Array<{
          /** The tag ID. */
          id?: number;
          /** The tag name. */
          name?: string;
          /** The number of contacts assigned to the tag. */
          audience_count?: number;
          /** When the tag was created. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sendlane. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by Sendlane. */
        meta?: Record<string, unknown>;
      };
    };
    /** Update a Sendlane custom field. */
    "sendlane.update_custom_field": {
      input: {
        /**
         * The Sendlane custom field ID.
         * @exclusiveMinimum 0
         */
        customFieldId: number;
        /**
         * The custom field name.
         * @minLength 1
         */
        name: string;
        /**
         * The custom field type.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** A Sendlane custom field. */
        data: {
          /** The custom field ID. */
          id?: string;
          /** The custom field name. */
          name?: string;
          /** The custom field type. */
          type?: string;
          /** When the custom field was created. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Sendlane contact list. */
    "sendlane.update_list": {
      input: {
        /**
         * The Sendlane list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The list name.
         * @minLength 1
         */
        name: string;
        /** The list description. */
        description?: string;
      };
      output: {
        /** A Sendlane list. */
        data: {
          /** The list ID. */
          id?: number;
          /** The list name. */
          name?: string;
          /** The list description. */
          description?: string;
          /** The list status. */
          status?: string;
          /** When the list was created. */
          created?: string;
          /** The list flagged state. */
          flagged?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Sendlane contact tag. */
    "sendlane.update_tag": {
      input: {
        /**
         * The Sendlane tag ID.
         * @exclusiveMinimum 0
         */
        tagId: number;
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Sendlane tag. */
        data: {
          /** The tag ID. */
          id?: number;
          /** The tag name. */
          name?: string;
          /** The number of contacts assigned to the tag. */
          audience_count?: number;
          /** When the tag was created. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
