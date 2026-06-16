import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Folk company using the official companies payload fields. */
    "folk.create_company": {
      input: {
        /**
         * The company name.
         * @minLength 1
         * @maxLength 1000
         */
        name?: string;
        /**
         * The company description.
         * @maxLength 5000
         */
        description?: string;
        /** The amount of funding raised by the company in USD. */
        fundingRaised?: number | string | null;
        /**
         * The ISO 8601 calendar date in YYYY-MM-DD format.
         * @minLength 10
         * @maxLength 10
         * @format date
         */
        lastFundingDate?: string | null;
        /**
         * The company industry.
         * @maxLength 1000
         */
        industry?: string | null;
        /** The company foundation year in YYYY format. */
        foundationYear?: string | number | null;
        /** The company employee range. */
        employeeRange?: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1001-5000" | "5001-10000" | "10000+" | null;
        /**
         * The groups to associate with the company.
         * @maxItems 100
         */
        groups?: Array<{
          /**
           * The Folk group ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
        }>;
        /**
         * The addresses associated with the company.
         * @maxItems 20
         */
        addresses?: Array<string>;
        /**
         * The email addresses associated with the company.
         * @maxItems 20
         */
        emails?: Array<string>;
        /**
         * The phone numbers associated with the company.
         * @maxItems 20
         */
        phones?: Array<string>;
        /**
         * The URLs associated with the company.
         * @maxItems 20
         */
        urls?: Array<string>;
        /** Custom field values grouped by Folk group ID and custom field name. */
        customFieldValues?: Record<string, unknown>;
      };
      output: {
        /** A normalized Folk company record. */
        company: {
          /**
           * The Folk company ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company description. */
          description: string;
          /** The amount of funding raised by the company in USD as a string. */
          fundingRaised: string | null;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          lastFundingDate: string | null;
          /** The industry returned by Folk when available. */
          industry: string | null;
          /** The company foundation year returned by Folk. */
          foundationYear: string | null;
          /** The employee range returned by Folk. */
          employeeRange: string | null;
          /** The groups associated with the company. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The addresses associated with the company. */
          addresses: Array<string>;
          /** The email addresses associated with the company. */
          emails: Array<string>;
          /** The phone numbers associated with the company. */
          phones: Array<string>;
          /** The URLs associated with the company. */
          urls: Array<string>;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
        };
      };
    };
    /** Create one Folk person using the official people payload fields. */
    "folk.create_person": {
      input: {
        /**
         * The person's first name.
         * @minLength 1
         * @maxLength 500
         */
        firstName?: string;
        /**
         * The person's last name.
         * @minLength 1
         * @maxLength 500
         */
        lastName?: string;
        /**
         * The person's full name.
         * @minLength 1
         * @maxLength 1000
         */
        fullName?: string;
        /**
         * The person's description.
         * @maxLength 5000
         */
        description?: string;
        /**
         * The ISO 8601 calendar date in YYYY-MM-DD format.
         * @minLength 10
         * @maxLength 10
         * @format date
         */
        birthday?: string | null;
        /**
         * The person's job title.
         * @maxLength 500
         */
        jobTitle?: string;
        /**
         * The groups to associate with the person.
         * @maxItems 100
         */
        groups?: Array<{
          /**
           * The Folk group ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
        }>;
        /**
         * The companies to associate with the person.
         * @maxItems 20
         */
        companies?: Array<{
          /**
           * The company name.
           * @minLength 1
           * @maxLength 500
           */
          name: string;
        } | {
          /**
           * The Folk company ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
        }>;
        /**
         * The addresses associated with the person.
         * @maxItems 20
         */
        addresses?: Array<string>;
        /**
         * The email addresses associated with the person.
         * @maxItems 20
         */
        emails?: Array<string>;
        /**
         * The phone numbers associated with the person.
         * @maxItems 20
         */
        phones?: Array<string>;
        /**
         * The URLs associated with the person.
         * @maxItems 20
         */
        urls?: Array<string>;
        /** Custom field values grouped by Folk group ID and custom field name. */
        customFieldValues?: Record<string, unknown>;
      };
      output: {
        /** A normalized Folk person record. */
        person: {
          /**
           * The Folk person ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The person's first name. */
          firstName: string;
          /** The person's last name. */
          lastName: string;
          /** The person's full name. */
          fullName: string;
          /** The person's description. */
          description: string;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          birthday: string | null;
          /** The person's job title. */
          jobTitle: string;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** The groups associated with the person. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The companies associated with the person. */
          companies: Array<{
            /**
             * The Folk company ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The company name. */
            name: string;
          }>;
          /** The addresses associated with the person. */
          addresses: Array<string>;
          /** The email addresses associated with the person. */
          emails: Array<string>;
          /** The phone numbers associated with the person. */
          phones: Array<string>;
          /** The URLs associated with the person. */
          urls: Array<string>;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
          /** Interaction metadata returned by Folk for a contact. */
          interactionMetadata: {
            /** Interaction counters returned by Folk. */
            user: {
              /**
               * The approximate number of matching interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
            };
            /** Workspace-level interaction metadata returned by Folk. */
            workspace: {
              /**
               * The approximate number of workspace interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
              /** The workspace users who last interacted with the contact. */
              lastInteractedBy: Array<{
                /**
                 * The Folk user ID.
                 * @minLength 40
                 * @maxLength 40
                 */
                id: string;
                /** The full name of the workspace user. */
                fullName: string;
                /** The email address of the workspace user. */
                email: string;
              }>;
            };
          } | null;
          /** The strongest-connection map keyed by Folk group ID. */
          strongestConnection: Record<string, {
              /**
               * The Folk user ID.
               * @minLength 40
               * @maxLength 40
               */
              id: string;
              /** The full name of the workspace user. */
              fullName: string;
              /** The email address of the workspace user. */
              email: string;
            }>;
        };
      };
    };
    /** Delete one Folk company by company ID. */
    "folk.delete_company": {
      input: {
        /**
         * The Folk company ID.
         * @minLength 40
         * @maxLength 40
         */
        companyId: string;
      };
      output: {
        /**
         * The deleted Folk company ID.
         * @minLength 40
         * @maxLength 40
         */
        id: string;
      };
    };
    /** Delete one Folk person by person ID. */
    "folk.delete_person": {
      input: {
        /**
         * The Folk person ID.
         * @minLength 40
         * @maxLength 40
         */
        personId: string;
      };
      output: {
        /**
         * The deleted Folk person ID.
         * @minLength 40
         * @maxLength 40
         */
        id: string;
      };
    };
    /** Get one Folk company by company ID. */
    "folk.get_company": {
      input: {
        /**
         * The Folk company ID.
         * @minLength 40
         * @maxLength 40
         */
        companyId: string;
      };
      output: {
        /** A normalized Folk company record. */
        company: {
          /**
           * The Folk company ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company description. */
          description: string;
          /** The amount of funding raised by the company in USD as a string. */
          fundingRaised: string | null;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          lastFundingDate: string | null;
          /** The industry returned by Folk when available. */
          industry: string | null;
          /** The company foundation year returned by Folk. */
          foundationYear: string | null;
          /** The employee range returned by Folk. */
          employeeRange: string | null;
          /** The groups associated with the company. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The addresses associated with the company. */
          addresses: Array<string>;
          /** The email addresses associated with the company. */
          emails: Array<string>;
          /** The phone numbers associated with the company. */
          phones: Array<string>;
          /** The URLs associated with the company. */
          urls: Array<string>;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
        };
      };
    };
    /** Get the current Folk workspace user associated with the API key. */
    "folk.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Folk workspace user. */
        user: {
          /**
           * The Folk user ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The full name of the workspace user. */
          fullName: string;
          /** The email address of the workspace user. */
          email: string;
        };
      };
    };
    /** Get one Folk person by person ID. */
    "folk.get_person": {
      input: {
        /**
         * The Folk person ID.
         * @minLength 40
         * @maxLength 40
         */
        personId: string;
      };
      output: {
        /** A normalized Folk person record. */
        person: {
          /**
           * The Folk person ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The person's first name. */
          firstName: string;
          /** The person's last name. */
          lastName: string;
          /** The person's full name. */
          fullName: string;
          /** The person's description. */
          description: string;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          birthday: string | null;
          /** The person's job title. */
          jobTitle: string;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** The groups associated with the person. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The companies associated with the person. */
          companies: Array<{
            /**
             * The Folk company ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The company name. */
            name: string;
          }>;
          /** The addresses associated with the person. */
          addresses: Array<string>;
          /** The email addresses associated with the person. */
          emails: Array<string>;
          /** The phone numbers associated with the person. */
          phones: Array<string>;
          /** The URLs associated with the person. */
          urls: Array<string>;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
          /** Interaction metadata returned by Folk for a contact. */
          interactionMetadata: {
            /** Interaction counters returned by Folk. */
            user: {
              /**
               * The approximate number of matching interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
            };
            /** Workspace-level interaction metadata returned by Folk. */
            workspace: {
              /**
               * The approximate number of workspace interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
              /** The workspace users who last interacted with the contact. */
              lastInteractedBy: Array<{
                /**
                 * The Folk user ID.
                 * @minLength 40
                 * @maxLength 40
                 */
                id: string;
                /** The full name of the workspace user. */
                fullName: string;
                /** The email address of the workspace user. */
                email: string;
              }>;
            };
          } | null;
          /** The strongest-connection map keyed by Folk group ID. */
          strongestConnection: Record<string, {
              /**
               * The Folk user ID.
               * @minLength 40
               * @maxLength 40
               */
              id: string;
              /** The full name of the workspace user. */
              fullName: string;
              /** The email address of the workspace user. */
              email: string;
            }>;
        };
      };
    };
    /** Get one Folk workspace user by user ID. */
    "folk.get_user": {
      input: {
        /**
         * The Folk user ID.
         * @minLength 40
         * @maxLength 40
         */
        userId: string;
      };
      output: {
        /** A Folk workspace user. */
        user: {
          /**
           * The Folk user ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The full name of the workspace user. */
          fullName: string;
          /** The email address of the workspace user. */
          email: string;
        };
      };
    };
    /** List Folk companies with official cursor pagination and the documented nested filter syntax. */
    "folk.list_companies": {
      input: {
        /**
         * The number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by a previous Folk response.
         * @minLength 1
         * @maxLength 128
         */
        cursor?: string;
        /** The logical operator used to combine multiple Folk filters. */
        combinator?: "and" | "or";
        /** The official Folk filter object. Use nested properties such as {"fullName":{"like":"John"}} or {"groups":{"all":{"id":["grp_1","grp_2"]}}}. For empty and not_empty filters, pass true. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** The companies returned by Folk. */
        companies: Array<{
          /**
           * The Folk company ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company description. */
          description: string;
          /** The amount of funding raised by the company in USD as a string. */
          fundingRaised: string | null;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          lastFundingDate: string | null;
          /** The industry returned by Folk when available. */
          industry: string | null;
          /** The company foundation year returned by Folk. */
          foundationYear: string | null;
          /** The employee range returned by Folk. */
          employeeRange: string | null;
          /** The groups associated with the company. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The addresses associated with the company. */
          addresses: Array<string>;
          /** The email addresses associated with the company. */
          emails: Array<string>;
          /** The phone numbers associated with the company. */
          phones: Array<string>;
          /** The URLs associated with the company. */
          urls: Array<string>;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Folk list endpoints. */
        pagination: {
          /**
           * The full URL of the next page when Folk returned one.
           * @format uri
           */
          nextLink: string | null;
          /** The cursor extracted from pagination.nextLink for the next list request. */
          nextCursor: string | null;
        };
      };
    };
    /** List Folk custom fields for one group and entity type. */
    "folk.list_group_custom_fields": {
      input: {
        /**
         * The Folk group ID.
         * @minLength 40
         * @maxLength 40
         */
        groupId: string;
        /**
         * The entity type such as person, company, or a custom object name.
         * @minLength 1
         * @maxLength 500
         */
        entityType: string;
        /**
         * The number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by a previous Folk response.
         * @minLength 1
         * @maxLength 128
         */
        cursor?: string;
      };
      output: {
        /** The custom fields returned by Folk. */
        customFields: Array<{
          /** The custom field name. */
          name: string;
          /** The custom field type returned by Folk. */
          type: string;
          /** The selectable options returned for select-type custom fields. */
          options: Array<{
            /** The option label. */
            label: string;
            /** The color string returned by Folk for the option. */
            color: string;
          }> | null;
          /** The configuration block returned for some Folk custom fields. */
          config: {
            /** The display format returned by Folk when available. */
            format: string;
            /** The currency code returned by Folk when available. */
            currency: string;
          } | null;
        }>;
        /** Pagination metadata returned by Folk list endpoints. */
        pagination: {
          /**
           * The full URL of the next page when Folk returned one.
           * @format uri
           */
          nextLink: string | null;
          /** The cursor extracted from pagination.nextLink for the next list request. */
          nextCursor: string | null;
        };
      };
    };
    /** List Folk workspace groups with cursor pagination. */
    "folk.list_groups": {
      input: {
        /**
         * The number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by a previous Folk response.
         * @minLength 1
         * @maxLength 128
         */
        cursor?: string;
      };
      output: {
        /** The groups returned by Folk. */
        groups: Array<{
          /**
           * The Folk group ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The group name. */
          name: string;
        }>;
        /** Pagination metadata returned by Folk list endpoints. */
        pagination: {
          /**
           * The full URL of the next page when Folk returned one.
           * @format uri
           */
          nextLink: string | null;
          /** The cursor extracted from pagination.nextLink for the next list request. */
          nextCursor: string | null;
        };
      };
    };
    /** List Folk people with official cursor pagination and the documented nested filter syntax. */
    "folk.list_people": {
      input: {
        /**
         * The number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by a previous Folk response.
         * @minLength 1
         * @maxLength 128
         */
        cursor?: string;
        /** The logical operator used to combine multiple Folk filters. */
        combinator?: "and" | "or";
        /** The official Folk filter object. Use nested properties such as {"fullName":{"like":"John"}} or {"groups":{"all":{"id":["grp_1","grp_2"]}}}. For empty and not_empty filters, pass true. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** The people returned by Folk. */
        people: Array<{
          /**
           * The Folk person ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The person's first name. */
          firstName: string;
          /** The person's last name. */
          lastName: string;
          /** The person's full name. */
          fullName: string;
          /** The person's description. */
          description: string;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          birthday: string | null;
          /** The person's job title. */
          jobTitle: string;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** The groups associated with the person. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The companies associated with the person. */
          companies: Array<{
            /**
             * The Folk company ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The company name. */
            name: string;
          }>;
          /** The addresses associated with the person. */
          addresses: Array<string>;
          /** The email addresses associated with the person. */
          emails: Array<string>;
          /** The phone numbers associated with the person. */
          phones: Array<string>;
          /** The URLs associated with the person. */
          urls: Array<string>;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
          /** Interaction metadata returned by Folk for a contact. */
          interactionMetadata: {
            /** Interaction counters returned by Folk. */
            user: {
              /**
               * The approximate number of matching interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
            };
            /** Workspace-level interaction metadata returned by Folk. */
            workspace: {
              /**
               * The approximate number of workspace interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
              /** The workspace users who last interacted with the contact. */
              lastInteractedBy: Array<{
                /**
                 * The Folk user ID.
                 * @minLength 40
                 * @maxLength 40
                 */
                id: string;
                /** The full name of the workspace user. */
                fullName: string;
                /** The email address of the workspace user. */
                email: string;
              }>;
            };
          } | null;
          /** The strongest-connection map keyed by Folk group ID. */
          strongestConnection: Record<string, {
              /**
               * The Folk user ID.
               * @minLength 40
               * @maxLength 40
               */
              id: string;
              /** The full name of the workspace user. */
              fullName: string;
              /** The email address of the workspace user. */
              email: string;
            }>;
        }>;
        /** Pagination metadata returned by Folk list endpoints. */
        pagination: {
          /**
           * The full URL of the next page when Folk returned one.
           * @format uri
           */
          nextLink: string | null;
          /** The cursor extracted from pagination.nextLink for the next list request. */
          nextCursor: string | null;
        };
      };
    };
    /** List workspace users from Folk with cursor pagination. */
    "folk.list_users": {
      input: {
        /**
         * The number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by a previous Folk response.
         * @minLength 1
         * @maxLength 128
         */
        cursor?: string;
      };
      output: {
        /** The users returned by Folk. */
        users: Array<{
          /**
           * The Folk user ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The full name of the workspace user. */
          fullName: string;
          /** The email address of the workspace user. */
          email: string;
        }>;
        /** Pagination metadata returned by Folk list endpoints. */
        pagination: {
          /**
           * The full URL of the next page when Folk returned one.
           * @format uri
           */
          nextLink: string | null;
          /** The cursor extracted from pagination.nextLink for the next list request. */
          nextCursor: string | null;
        };
      };
    };
    /** Update one Folk company by company ID using the official companies payload fields. */
    "folk.update_company": {
      input: {
        /**
         * The Folk company ID.
         * @minLength 40
         * @maxLength 40
         */
        companyId: string;
        /**
         * The company name.
         * @minLength 1
         * @maxLength 1000
         */
        name?: string;
        /**
         * The company description.
         * @maxLength 5000
         */
        description?: string;
        /** The amount of funding raised by the company in USD. */
        fundingRaised?: number | string | null;
        /**
         * The ISO 8601 calendar date in YYYY-MM-DD format.
         * @minLength 10
         * @maxLength 10
         * @format date
         */
        lastFundingDate?: string | null;
        /**
         * The company industry.
         * @maxLength 1000
         */
        industry?: string | null;
        /** The company foundation year in YYYY format. */
        foundationYear?: string | number | null;
        /** The company employee range. */
        employeeRange?: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1001-5000" | "5001-10000" | "10000+" | null;
        /**
         * The groups to associate with the company.
         * @maxItems 100
         */
        groups?: Array<{
          /**
           * The Folk group ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
        }>;
        /**
         * The addresses associated with the company.
         * @maxItems 20
         */
        addresses?: Array<string>;
        /**
         * The email addresses associated with the company.
         * @maxItems 20
         */
        emails?: Array<string>;
        /**
         * The phone numbers associated with the company.
         * @maxItems 20
         */
        phones?: Array<string>;
        /**
         * The URLs associated with the company.
         * @maxItems 20
         */
        urls?: Array<string>;
        /** Custom field values grouped by Folk group ID and custom field name. */
        customFieldValues?: Record<string, unknown>;
      };
      output: {
        /** A normalized Folk company record. */
        company: {
          /**
           * The Folk company ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company description. */
          description: string;
          /** The amount of funding raised by the company in USD as a string. */
          fundingRaised: string | null;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          lastFundingDate: string | null;
          /** The industry returned by Folk when available. */
          industry: string | null;
          /** The company foundation year returned by Folk. */
          foundationYear: string | null;
          /** The employee range returned by Folk. */
          employeeRange: string | null;
          /** The groups associated with the company. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The addresses associated with the company. */
          addresses: Array<string>;
          /** The email addresses associated with the company. */
          emails: Array<string>;
          /** The phone numbers associated with the company. */
          phones: Array<string>;
          /** The URLs associated with the company. */
          urls: Array<string>;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
        };
      };
    };
    /** Update one Folk person by person ID using the official people payload fields. */
    "folk.update_person": {
      input: {
        /**
         * The Folk person ID.
         * @minLength 40
         * @maxLength 40
         */
        personId: string;
        /**
         * The person's first name.
         * @minLength 1
         * @maxLength 500
         */
        firstName?: string;
        /**
         * The person's last name.
         * @minLength 1
         * @maxLength 500
         */
        lastName?: string;
        /**
         * The person's full name.
         * @minLength 1
         * @maxLength 1000
         */
        fullName?: string;
        /**
         * The person's description.
         * @maxLength 5000
         */
        description?: string;
        /**
         * The ISO 8601 calendar date in YYYY-MM-DD format.
         * @minLength 10
         * @maxLength 10
         * @format date
         */
        birthday?: string | null;
        /**
         * The person's job title.
         * @maxLength 500
         */
        jobTitle?: string;
        /**
         * The groups to associate with the person.
         * @maxItems 100
         */
        groups?: Array<{
          /**
           * The Folk group ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
        }>;
        /**
         * The companies to associate with the person.
         * @maxItems 20
         */
        companies?: Array<{
          /**
           * The company name.
           * @minLength 1
           * @maxLength 500
           */
          name: string;
        } | {
          /**
           * The Folk company ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
        }>;
        /**
         * The addresses associated with the person.
         * @maxItems 20
         */
        addresses?: Array<string>;
        /**
         * The email addresses associated with the person.
         * @maxItems 20
         */
        emails?: Array<string>;
        /**
         * The phone numbers associated with the person.
         * @maxItems 20
         */
        phones?: Array<string>;
        /**
         * The URLs associated with the person.
         * @maxItems 20
         */
        urls?: Array<string>;
        /** Custom field values grouped by Folk group ID and custom field name. */
        customFieldValues?: Record<string, unknown>;
      };
      output: {
        /** A normalized Folk person record. */
        person: {
          /**
           * The Folk person ID.
           * @minLength 40
           * @maxLength 40
           */
          id: string;
          /** The person's first name. */
          firstName: string;
          /** The person's last name. */
          lastName: string;
          /** The person's full name. */
          fullName: string;
          /** The person's description. */
          description: string;
          /**
           * The ISO 8601 calendar date in YYYY-MM-DD format.
           * @minLength 10
           * @maxLength 10
           * @format date
           */
          birthday: string | null;
          /** The person's job title. */
          jobTitle: string;
          /**
           * The ISO 8601 date-time returned by Folk when available.
           * @format date-time
           */
          createdAt: string | null;
          /** A Folk workspace user. */
          createdBy: {
            /**
             * The Folk user ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The full name of the workspace user. */
            fullName: string;
            /** The email address of the workspace user. */
            email: string;
          } | null;
          /** The groups associated with the person. */
          groups: Array<{
            /**
             * The Folk group ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The group name. */
            name: string;
          }>;
          /** The companies associated with the person. */
          companies: Array<{
            /**
             * The Folk company ID.
             * @minLength 40
             * @maxLength 40
             */
            id: string;
            /** The company name. */
            name: string;
          }>;
          /** The addresses associated with the person. */
          addresses: Array<string>;
          /** The email addresses associated with the person. */
          emails: Array<string>;
          /** The phone numbers associated with the person. */
          phones: Array<string>;
          /** The URLs associated with the person. */
          urls: Array<string>;
          /** Custom field values grouped by Folk group ID and custom field name. */
          customFieldValues: Record<string, unknown>;
          /** Interaction metadata returned by Folk for a contact. */
          interactionMetadata: {
            /** Interaction counters returned by Folk. */
            user: {
              /**
               * The approximate number of matching interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
            };
            /** Workspace-level interaction metadata returned by Folk. */
            workspace: {
              /**
               * The approximate number of workspace interactions.
               * @minimum 0
               */
              approximateCount: number;
              /**
               * The ISO 8601 date-time returned by Folk when available.
               * @format date-time
               */
              lastInteractedAt: string | null;
              /** The workspace users who last interacted with the contact. */
              lastInteractedBy: Array<{
                /**
                 * The Folk user ID.
                 * @minLength 40
                 * @maxLength 40
                 */
                id: string;
                /** The full name of the workspace user. */
                fullName: string;
                /** The email address of the workspace user. */
                email: string;
              }>;
            };
          } | null;
          /** The strongest-connection map keyed by Folk group ID. */
          strongestConnection: Record<string, {
              /**
               * The Folk user ID.
               * @minLength 40
               * @maxLength 40
               */
              id: string;
              /** The full name of the workspace user. */
              fullName: string;
              /** The email address of the workspace user. */
              email: string;
            }>;
        };
      };
    };
  }
}
