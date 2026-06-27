import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Front company contact with JSON fields and one or more reachable handles. */
    "front.create_contact": {
      input: {
        /**
         * Handles with which the contact is reachable.
         * @minItems 1
         */
        handles: Array<{
          /**
           * The handle value, such as an email address or phone number.
           * @minLength 1
           */
          handle: string;
          /** The Front contact handle source. */
          source: "twitter" | "email" | "phone" | "facebook" | "intercom" | "front_chat" | "custom";
        }>;
        /** JSON fields accepted by Front for contact create and update requests. */
        contact: {
          /**
           * Contact name.
           * @minLength 1
           */
          name?: string;
          /**
           * Contact description.
           * @minLength 1
           */
          description?: string;
          /** Links associated with the contact. */
          links?: Array<string>;
          /** Contact list names the contact belongs to. Front creates missing lists automatically. */
          listNames?: Array<string>;
          /** Custom fields keyed by the custom field name configured in Front. */
          customFields?: Record<string, unknown>;
        };
      };
      output: {
        /** A normalized Front contact. */
        contact: {
          /** Unique identifier of the contact. */
          id: string;
          /** Contact name. */
          name: string | null;
          /** Contact description. */
          description: string | null;
          /** URL of the contact avatar when Front returns one. */
          avatarUrl: string | null;
          /** Links associated with the contact. */
          links: Array<string>;
          /** Contact lists that contain the contact. */
          lists: Array<{
            /** Unique identifier of the contact list. */
            id: string;
            /** Name of the contact list. */
            name: string;
            /** Whether the contact list is private. */
            isPrivate: boolean;
          }>;
          /** Handles with which the contact is reachable. */
          handles: Array<{
            /**
             * The handle value, such as an email address or phone number.
             * @minLength 1
             */
            handle: string;
            /** The Front contact handle source. */
            source: "twitter" | "email" | "phone" | "facebook" | "intercom" | "front_chat" | "custom";
          }>;
          /** Custom fields keyed by the custom field name configured in Front. */
          customFields?: Record<string, unknown>;
          /** Whether the contact is private. */
          isPrivate: boolean;
        };
      };
    };
    /** Fetch one Front contact by contact ID or documented resource alias. */
    "front.get_contact": {
      input: {
        /**
         * The Front contact ID, or a documented resource alias such as source:handle.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A normalized Front contact. */
        contact: {
          /** Unique identifier of the contact. */
          id: string;
          /** Contact name. */
          name: string | null;
          /** Contact description. */
          description: string | null;
          /** URL of the contact avatar when Front returns one. */
          avatarUrl: string | null;
          /** Links associated with the contact. */
          links: Array<string>;
          /** Contact lists that contain the contact. */
          lists: Array<{
            /** Unique identifier of the contact list. */
            id: string;
            /** Name of the contact list. */
            name: string;
            /** Whether the contact list is private. */
            isPrivate: boolean;
          }>;
          /** Handles with which the contact is reachable. */
          handles: Array<{
            /**
             * The handle value, such as an email address or phone number.
             * @minLength 1
             */
            handle: string;
            /** The Front contact handle source. */
            source: "twitter" | "email" | "phone" | "facebook" | "intercom" | "front_chat" | "custom";
          }>;
          /** Custom fields keyed by the custom field name configured in Front. */
          customFields?: Record<string, unknown>;
          /** Whether the contact is private. */
          isPrivate: boolean;
        };
      };
    };
    /** List Front company contacts with optional cursor pagination and sorting. */
    "front.list_contacts": {
      input: {
        /**
         * Optional Front contact query object string for updated_after and updated_before filters.
         * @minLength 1
         */
        query?: string;
        /**
         * Maximum number of contacts per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Front page token returned by a previous list_contacts call.
         * @minLength 1
         */
        pageToken?: string;
        /** Field used to sort contacts. */
        sortBy?: "created_at" | "updated_at";
        /** Order by which contacts should be sorted. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Contacts returned by Front. */
        contacts: Array<{
          /** Unique identifier of the contact. */
          id: string;
          /** Contact name. */
          name: string | null;
          /** Contact description. */
          description: string | null;
          /** URL of the contact avatar when Front returns one. */
          avatarUrl: string | null;
          /** Links associated with the contact. */
          links: Array<string>;
          /** Contact lists that contain the contact. */
          lists: Array<{
            /** Unique identifier of the contact list. */
            id: string;
            /** Name of the contact list. */
            name: string;
            /** Whether the contact list is private. */
            isPrivate: boolean;
          }>;
          /** Handles with which the contact is reachable. */
          handles: Array<{
            /**
             * The handle value, such as an email address or phone number.
             * @minLength 1
             */
            handle: string;
            /** The Front contact handle source. */
            source: "twitter" | "email" | "phone" | "facebook" | "intercom" | "front_chat" | "custom";
          }>;
          /** Custom fields keyed by the custom field name configured in Front. */
          customFields?: Record<string, unknown>;
          /** Whether the contact is private. */
          isPrivate: boolean;
        }>;
        /** Front cursor pagination metadata. */
        pagination: {
          /** Link to the next page of results when Front returns one. */
          next: string | null;
          /** Token extracted from the next page link for the next connector call. */
          nextPageToken: string | null;
        };
      };
    };
    /** List Front teammates in the company. */
    "front.list_teammates": {
      input: Record<string, never>;
      output: {
        /** Teammates returned by Front. */
        teammates: Array<{
          /** Unique identifier of the teammate. */
          id: string;
          /** Email address of the teammate. */
          email: string;
          /** Username of the teammate. */
          username: string;
          /** First name of the teammate. */
          firstName: string;
          /** Last name of the teammate. */
          lastName: string;
          /** Whether the teammate is a company admin. */
          isAdmin: boolean;
          /** Whether the teammate is available. */
          isAvailable: boolean;
          /** Whether the teammate account has been blocked. */
          isBlocked: boolean;
          /** Type of teammate returned by Front. */
          type: string;
          /** Custom fields keyed by the custom field name configured in Front. */
          customFields?: Record<string, unknown>;
        }>;
      };
    };
    /** Update JSON fields on a Front contact. Avatar uploads are intentionally not exposed. */
    "front.update_contact": {
      input: {
        /**
         * The Front contact ID, or a documented resource alias such as source:handle.
         * @minLength 1
         */
        contactId: string;
        /** JSON fields accepted by Front for contact create and update requests. */
        contact: {
          /**
           * Contact name.
           * @minLength 1
           */
          name?: string;
          /**
           * Contact description.
           * @minLength 1
           */
          description?: string;
          /** Links associated with the contact. */
          links?: Array<string>;
          /** Contact list names the contact belongs to. Front creates missing lists automatically. */
          listNames?: Array<string>;
          /** Custom fields keyed by the custom field name configured in Front. */
          customFields?: Record<string, unknown>;
        };
      };
      output: {
        /** Whether Front accepted the update request. */
        success: boolean;
      };
    };
  }
}
