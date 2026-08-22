import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a GetResponse campaign for organizing contacts. */
    "getresponse.create_campaign": {
      input: {
        /**
         * A unique campaign name between 3 and 64 characters.
         * @minLength 3
         * @maxLength 64
         */
        name: string;
        /**
         * The campaign language code, such as EN.
         * @minLength 1
         */
        languageCode?: string;
        /** The opt-in mode for contacts added through the API. */
        apiOptIn?: "single" | "double";
      };
      output: {
        /** A normalized GetResponse campaign, also known as a contact list. */
        campaign: {
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          campaignId: string;
          /** The campaign name. */
          name: string;
          /** The campaign language code when returned by GetResponse. */
          languageCode: string | null;
          /** Whether this is the account's default campaign. */
          isDefault: boolean | null;
          /** The campaign creation timestamp when returned by GetResponse. */
          createdOn: string | null;
          /** The raw campaign object returned by GetResponse. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Queue a contact for creation in a GetResponse campaign. */
    "getresponse.create_contact": {
      input: {
        /**
         * The contact email address.
         * @format email
         */
        email: string;
        /**
         * The contact name.
         * @minLength 1
         * @maxLength 128
         * @pattern \S
         */
        name?: string;
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The autoresponder cycle day, or null to remove the contact from the cycle.
         * @minLength 1
         * @pattern \S
         */
        dayOfCycle?: string | null;
        /** The contact score, or null to remove the score. */
        scoring?: number | null;
        /** Tags that replace the contact's current tag assignments. */
        tags?: Array<{
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          tagId: string;
        }>;
        /** Custom fields that replace the contact's current custom field assignments. */
        customFields?: Array<{
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          customFieldId: string;
          /** The values to assign to the custom field. */
          values: Array<string>;
        }>;
        /** A valid IPv4 or IPv6 address. */
        ipAddress?: string;
      };
      output: {
        /** Whether GetResponse accepted the contact for asynchronous processing. */
        accepted: boolean;
      };
    };
    /** Permanently delete a GetResponse contact by ID. */
    "getresponse.delete_contact": {
      input: {
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** Whether the contact was deleted. */
        deleted: boolean;
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        contactId: string;
      };
    };
    /** Retrieve one GetResponse campaign by ID. */
    "getresponse.get_campaign": {
      input: {
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** A normalized GetResponse campaign, also known as a contact list. */
        campaign: {
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          campaignId: string;
          /** The campaign name. */
          name: string;
          /** The campaign language code when returned by GetResponse. */
          languageCode: string | null;
          /** Whether this is the account's default campaign. */
          isDefault: boolean | null;
          /** The campaign creation timestamp when returned by GetResponse. */
          createdOn: string | null;
          /** The raw campaign object returned by GetResponse. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one GetResponse contact by ID. */
    "getresponse.get_contact": {
      input: {
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A normalized GetResponse contact. */
        contact: {
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          contactId: string;
          /**
           * The contact email address.
           * @format email
           */
          email: string;
          /** The contact name when present. */
          name: string | null;
          /** A GetResponse campaign reference. */
          campaign: {
            /**
             * A GetResponse resource identifier.
             * @minLength 1
             */
            campaignId: string;
            /** The campaign name when returned by GetResponse. */
            name: string | null;
          } | null;
          /** How the contact was added to GetResponse. */
          origin: string | null;
          /** The contact creation timestamp when returned by GetResponse. */
          createdOn: string | null;
          /** The latest contact change timestamp when returned by GetResponse. */
          changedOn: string | null;
          /** The raw contact object returned by GetResponse. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one GetResponse newsletter by ID. */
    "getresponse.get_newsletter": {
      input: {
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        newsletterId: string;
      };
      output: {
        /** A normalized GetResponse newsletter. */
        newsletter: {
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          newsletterId: string;
          /** The internal newsletter name when returned by GetResponse. */
          name: string | null;
          /** The newsletter subject when returned by GetResponse. */
          subject: string | null;
          /** The GetResponse newsletter type. */
          type: string | null;
          /** The GetResponse newsletter status. */
          status: string | null;
          /** A GetResponse campaign reference. */
          campaign: {
            /**
             * A GetResponse resource identifier.
             * @minLength 1
             */
            campaignId: string;
            /** The campaign name when returned by GetResponse. */
            name: string | null;
          } | null;
          /** The scheduled or actual send timestamp when returned. */
          sendOn: string | null;
          /** The newsletter creation timestamp when returned. */
          createdOn: string | null;
          /** The raw newsletter object returned by GetResponse. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve delivery and engagement statistics for one GetResponse newsletter. */
    "getresponse.get_newsletter_statistics": {
      input: {
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        newsletterId: string;
        /** The time interval used to group statistics. */
        groupBy?: "total" | "hour" | "day" | "month";
        /** An ISO 8601 date or timestamp. */
        createdFrom?: string;
        /** An ISO 8601 date or timestamp. */
        createdTo?: string;
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** Statistics rows returned by GetResponse. */
        statistics: Array<{
          /** The ISO 8601 time interval represented by this statistics row. */
          timeInterval: string | null;
          /** The number of messages sent. */
          sent: number | null;
          /** The total number of message opens. */
          totalOpened: number | null;
          /** The total number of human message opens. */
          totalHumanOpened: number | null;
          /** The number of contacts who opened the message. */
          uniqueOpened: number | null;
          /** The number of contacts with a human message open. */
          uniqueHumanOpened: number | null;
          /** The total number of tracked-link clicks. */
          totalClicked: number | null;
          /** The total number of human tracked-link clicks. */
          totalHumanClicked: number | null;
          /** The number of contacts who clicked a tracked link. */
          uniqueClicked: number | null;
          /** The number of contacts with a human tracked-link click. */
          uniqueHumanClicked: number | null;
          /** The total number of completed goals. */
          goals: number | null;
          /** The number of contacts who completed a goal. */
          uniqueGoals: number | null;
          /** The number of message forwards. */
          forwarded: number | null;
          /** The number of unsubscribes. */
          unsubscribed: number | null;
          /** The number of bounced messages. */
          bounced: number | null;
          /** The number of spam complaints. */
          complaints: number | null;
          /** The raw newsletter statistics row returned by GetResponse. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by GetResponse. */
        pagination: {
          /** The current page reported by GetResponse. */
          currentPage: number | null;
          /** The total number of result pages reported by GetResponse. */
          totalPages: number | null;
          /** The total number of matching records reported by GetResponse. */
          totalCount: number | null;
        };
      };
    };
    /** List GetResponse campaigns, which represent contact lists. */
    "getresponse.list_campaigns": {
      input: {
        /**
         * Filter campaigns by name.
         * @minLength 1
         */
        name?: string;
        /** Filter campaigns by default-list status. */
        isDefault?: boolean;
        /** The campaign field to sort by. */
        sortBy?: "name" | "createdOn";
        /** The sort direction. */
        sortOrder?: "ASC" | "DESC";
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** Campaigns returned by GetResponse. */
        campaigns: Array<{
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          campaignId: string;
          /** The campaign name. */
          name: string;
          /** The campaign language code when returned by GetResponse. */
          languageCode: string | null;
          /** Whether this is the account's default campaign. */
          isDefault: boolean | null;
          /** The campaign creation timestamp when returned by GetResponse. */
          createdOn: string | null;
          /** The raw campaign object returned by GetResponse. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by GetResponse. */
        pagination: {
          /** The current page reported by GetResponse. */
          currentPage: number | null;
          /** The total number of result pages reported by GetResponse. */
          totalPages: number | null;
          /** The total number of matching records reported by GetResponse. */
          totalCount: number | null;
        };
      };
    };
    /** List and search GetResponse contacts with page-based pagination. */
    "getresponse.list_contacts": {
      input: {
        /**
         * Filter contacts by an exact address or partial email value.
         * @minLength 1
         */
        email?: string;
        /**
         * Filter contacts by name.
         * @minLength 1
         */
        name?: string;
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        campaignId?: string;
        /** Use exact matching for the email and name filters. */
        exactMatch?: boolean;
        /** An ISO 8601 date or timestamp. */
        createdFrom?: string;
        /** An ISO 8601 date or timestamp. */
        createdTo?: string;
        /** An ISO 8601 date or timestamp. */
        changedFrom?: string;
        /** An ISO 8601 date or timestamp. */
        changedTo?: string;
        /** The contact field to sort by. */
        sortBy?: "email" | "name" | "createdOn" | "changedOn" | "campaignId";
        /** The sort direction. */
        sortOrder?: "ASC" | "DESC";
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** Contacts returned by GetResponse. */
        contacts: Array<{
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          contactId: string;
          /**
           * The contact email address.
           * @format email
           */
          email: string;
          /** The contact name when present. */
          name: string | null;
          /** A GetResponse campaign reference. */
          campaign: {
            /**
             * A GetResponse resource identifier.
             * @minLength 1
             */
            campaignId: string;
            /** The campaign name when returned by GetResponse. */
            name: string | null;
          } | null;
          /** How the contact was added to GetResponse. */
          origin: string | null;
          /** The contact creation timestamp when returned by GetResponse. */
          createdOn: string | null;
          /** The latest contact change timestamp when returned by GetResponse. */
          changedOn: string | null;
          /** The raw contact object returned by GetResponse. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by GetResponse. */
        pagination: {
          /** The current page reported by GetResponse. */
          currentPage: number | null;
          /** The total number of result pages reported by GetResponse. */
          totalPages: number | null;
          /** The total number of matching records reported by GetResponse. */
          totalCount: number | null;
        };
      };
    };
    /** List GetResponse custom fields that can be assigned to contacts. */
    "getresponse.list_custom_fields": {
      input: {
        /**
         * Filter custom fields by name.
         * @minLength 1
         */
        name?: string;
        /** The sort direction applied to the custom field name. */
        sortOrder?: "ASC" | "DESC";
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** Custom fields returned by GetResponse. */
        customFields: Array<{
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          customFieldId: string;
          /** The custom field name. */
          name: string;
          /** The custom field value type when returned. */
          type: string | null;
          /** The custom field input format when returned. */
          format: string | null;
          /** The raw custom field object returned by GetResponse. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by GetResponse. */
        pagination: {
          /** The current page reported by GetResponse. */
          currentPage: number | null;
          /** The total number of result pages reported by GetResponse. */
          totalPages: number | null;
          /** The total number of matching records reported by GetResponse. */
          totalCount: number | null;
        };
      };
    };
    /** List GetResponse newsletters with filters and pagination. */
    "getresponse.list_newsletters": {
      input: {
        /**
         * Filter newsletters by internal name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter newsletters by subject.
         * @minLength 1
         */
        subject?: string;
        /** Filter newsletters by status. */
        status?: "enabled" | "disabled";
        /** Filter newsletters by type. */
        type?: "draft" | "broadcast" | "splittest" | "automation";
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        campaignId?: string;
        /** An ISO 8601 date or timestamp. */
        createdFrom?: string;
        /** An ISO 8601 date or timestamp. */
        createdTo?: string;
        /**
         * Return newsletters sent on or after this date.
         * @format date
         */
        sentFrom?: string;
        /**
         * Return newsletters sent on or before this date.
         * @format date
         */
        sentTo?: string;
        /** The newsletter field to sort by. */
        sortBy?: "createdOn" | "sendOn";
        /** The sort direction. */
        sortOrder?: "ASC" | "DESC";
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** Newsletters returned by GetResponse. */
        newsletters: Array<{
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          newsletterId: string;
          /** The internal newsletter name when returned by GetResponse. */
          name: string | null;
          /** The newsletter subject when returned by GetResponse. */
          subject: string | null;
          /** The GetResponse newsletter type. */
          type: string | null;
          /** The GetResponse newsletter status. */
          status: string | null;
          /** A GetResponse campaign reference. */
          campaign: {
            /**
             * A GetResponse resource identifier.
             * @minLength 1
             */
            campaignId: string;
            /** The campaign name when returned by GetResponse. */
            name: string | null;
          } | null;
          /** The scheduled or actual send timestamp when returned. */
          sendOn: string | null;
          /** The newsletter creation timestamp when returned. */
          createdOn: string | null;
          /** The raw newsletter object returned by GetResponse. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by GetResponse. */
        pagination: {
          /** The current page reported by GetResponse. */
          currentPage: number | null;
          /** The total number of result pages reported by GetResponse. */
          totalPages: number | null;
          /** The total number of matching records reported by GetResponse. */
          totalCount: number | null;
        };
      };
    };
    /** List GetResponse tags that can be assigned to contacts. */
    "getresponse.list_tags": {
      input: {
        /**
         * Filter tags by name.
         * @minLength 1
         */
        name?: string;
        /** An ISO 8601 date or timestamp. */
        createdFrom?: string;
        /** An ISO 8601 date or timestamp. */
        createdTo?: string;
        /** The tag field to sort by. */
        sortBy?: "createdAt" | "name";
        /** The sort direction. */
        sortOrder?: "ASC" | "DESC";
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** Tags returned by GetResponse. */
        tags: Array<{
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          tagId: string;
          /** The tag name. */
          name: string;
          /** The tag creation timestamp when returned. */
          createdAt: string | null;
          /** The raw tag object returned by GetResponse. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by GetResponse. */
        pagination: {
          /** The current page reported by GetResponse. */
          currentPage: number | null;
          /** The total number of result pages reported by GetResponse. */
          totalPages: number | null;
          /** The total number of matching records reported by GetResponse. */
          totalCount: number | null;
        };
      };
    };
    /** Update mutable fields on a GetResponse campaign. */
    "getresponse.update_campaign": {
      input: {
        /**
         * A GetResponse resource identifier.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The current or new unique campaign name between 3 and 64 characters.
         * @minLength 3
         * @maxLength 64
         */
        name: string;
        /**
         * The campaign language code, such as EN.
         * @minLength 1
         */
        languageCode?: string;
        /** The opt-in mode for contacts added through the API. */
        apiOptIn?: "single" | "double";
      };
      output: {
        /** A normalized GetResponse campaign, also known as a contact list. */
        campaign: {
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          campaignId: string;
          /** The campaign name. */
          name: string;
          /** The campaign language code when returned by GetResponse. */
          languageCode: string | null;
          /** Whether this is the account's default campaign. */
          isDefault: boolean | null;
          /** The campaign creation timestamp when returned by GetResponse. */
          createdOn: string | null;
          /** The raw campaign object returned by GetResponse. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a GetResponse contact, replacing tag and custom-field assignments when supplied. */
    "getresponse.update_contact": {
      input: Record<string, unknown>;
      output: {
        /** A normalized GetResponse contact. */
        contact: {
          /**
           * A GetResponse resource identifier.
           * @minLength 1
           */
          contactId: string;
          /**
           * The contact email address.
           * @format email
           */
          email: string;
          /** The contact name when present. */
          name: string | null;
          /** A GetResponse campaign reference. */
          campaign: {
            /**
             * A GetResponse resource identifier.
             * @minLength 1
             */
            campaignId: string;
            /** The campaign name when returned by GetResponse. */
            name: string | null;
          } | null;
          /** How the contact was added to GetResponse. */
          origin: string | null;
          /** The contact creation timestamp when returned by GetResponse. */
          createdOn: string | null;
          /** The latest contact change timestamp when returned by GetResponse. */
          changedOn: string | null;
          /** The raw contact object returned by GetResponse. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
