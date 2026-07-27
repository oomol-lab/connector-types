import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Subscribe a Flexmail contact to an interest. */
    "flexmail.add_contact_interest_subscription": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /**
         * The Flexmail interest UUID.
         * @format uuid
         */
        interestId: string;
      };
      output: {
        /** The created resource identifier returned by Flexmail. */
        id?: number | string;
        /** The Location response header returned by Flexmail. */
        location?: string;
      };
    };
    /** Subscribe a Flexmail contact to a preference. */
    "flexmail.add_contact_preference_subscription": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /**
         * The Flexmail preference id.
         * @exclusiveMinimum 0
         */
        preferenceId: number;
      };
      output: {
        /** The created resource identifier returned by Flexmail. */
        id?: number | string;
        /** The Location response header returned by Flexmail. */
        location?: string;
      };
    };
    /** Create a Flexmail contact in a specific source. */
    "flexmail.create_contact": {
      input: {
        /**
         * The contact email address.
         * @maxLength 200
         * @format email
         */
        email: string;
        /**
         * The contact first name.
         * @maxLength 50
         */
        first_name?: string;
        /**
         * The contact last name.
         * @maxLength 50
         */
        name?: string;
        /**
         * The language the contact wants to receive emails in.
         * @minLength 2
         * @maxLength 2
         */
        language?: "nl" | "fr" | "de" | "it" | "es" | "ru" | "da" | "se" | "zh" | "pt" | "pl" | "en" | "hu" | "bg" | "hr" | "cs" | "et" | "fi" | "el" | "ga" | "lv" | "lt" | "mt" | "ro" | "sk" | "sl" | "uk" | "ca";
        /** Custom field values keyed by Flexmail custom field placeholder. */
        custom_fields?: Record<string, unknown>;
        /**
         * The Flexmail source id.
         * @exclusiveMinimum 0
         */
        source: number;
      };
      output: {
        /** The created resource identifier returned by Flexmail. */
        id?: number | string;
        /** The Location response header returned by Flexmail. */
        location?: string;
      };
    };
    /** Create a Flexmail interest. */
    "flexmail.create_interest": {
      input: {
        /**
         * The internal Flexmail interest name.
         * @minLength 1
         * @maxLength 50
         */
        name: string;
        /** The Flexmail interest visibility. */
        visibility: "public" | "private";
        /**
         * The label shown to contacts for this interest.
         * @maxLength 50
         */
        label?: string;
        /**
         * A short description shown to contacts for this interest.
         * @maxLength 100
         */
        description?: string;
      };
      output: {
        /** The created resource identifier returned by Flexmail. */
        id?: number | string;
        /** The Location response header returned by Flexmail. */
        location?: string;
      };
    };
    /** Delete a Flexmail interest by UUID. */
    "flexmail.delete_interest": {
      input: {
        /**
         * The Flexmail interest UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Whether Flexmail accepted the request. */
        ok: boolean;
      };
    };
    /** Fetch a Flexmail contact by id. */
    "flexmail.get_contact": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        resource: Record<string, unknown>;
      };
    };
    /** Fetch a Flexmail interest by UUID. */
    "flexmail.get_interest": {
      input: {
        /**
         * The Flexmail interest UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        resource: Record<string, unknown>;
      };
    };
    /** Fetch a Flexmail source by id. */
    "flexmail.get_source": {
      input: {
        /**
         * The Flexmail source id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        resource: Record<string, unknown>;
      };
    };
    /** Fetch the contact languages configured for the Flexmail account. */
    "flexmail.list_account_contact_languages": {
      input: Record<string, never>;
      output: {
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        resource: Record<string, unknown>;
      };
    };
    /** List the interests to which a Flexmail contact is subscribed. */
    "flexmail.list_contact_interest_subscriptions": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List preferences selected by a Flexmail contact. */
    "flexmail.list_contact_preferences": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List sources through which a Flexmail contact was added. */
    "flexmail.list_contact_sources": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List Flexmail contacts, optionally filtering by email address and paging through the collection. */
    "flexmail.list_contacts": {
      input: {
        /**
         * An email address to filter contacts by.
         * @format email
         */
        email?: string;
        /**
         * The maximum number of items to return. Flexmail accepts values from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The zero-based item offset for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List custom fields configured in the Flexmail account. */
    "flexmail.list_custom_fields": {
      input: {
        /** Limits custom fields to the selected Flexmail type. */
        type?: "free_text" | "multiple_choice" | "numeric" | "date";
        /**
         * The account contact language used for custom field labels.
         * @minLength 2
         */
        language?: string;
      };
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List Flexmail interest labels. */
    "flexmail.list_interest_labels": {
      input: Record<string, never>;
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List Flexmail interests with optional name and visibility filters. */
    "flexmail.list_interests": {
      input: {
        /** Limits interests to ones whose name contains this value. */
        name?: string;
        /** The Flexmail interest visibility. */
        visibility?: "public" | "private";
        /** The Flexmail interest property used for ordering. */
        order_by?: "name";
        /** The ordering direction. */
        order_direction?: "asc" | "desc";
        /**
         * The maximum number of items to return. Flexmail accepts values from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The zero-based item offset for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List preferences configured in the Flexmail account. */
    "flexmail.list_preferences": {
      input: Record<string, never>;
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List active segments in the Flexmail account. */
    "flexmail.list_segments": {
      input: Record<string, never>;
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** List sources configured in the Flexmail account. */
    "flexmail.list_sources": {
      input: Record<string, never>;
      output: {
        /** The embedded Flexmail resources extracted from the HAL payload. */
        items: Array<Record<string, unknown>>;
        /** The total number of resources reported by Flexmail. */
        total?: number;
        /** The requested page size returned by Flexmail. */
        limit?: number;
        /** The requested page offset returned by Flexmail. */
        offset?: number;
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        payload: Record<string, unknown>;
      };
    };
    /** Remove a Flexmail contact from an interest. */
    "flexmail.remove_contact_interest_subscription": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /**
         * The Flexmail interest UUID.
         * @format uuid
         */
        interestId: string;
      };
      output: {
        /** Whether Flexmail accepted the request. */
        ok: boolean;
      };
    };
    /** Remove a Flexmail contact preference subscription by compound id. */
    "flexmail.remove_contact_preference_subscription": {
      input: {
        /**
         * The Flexmail compound id for a relation.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Flexmail accepted the request. */
        ok: boolean;
      };
    };
    /** Unsubscribe a Flexmail contact from all future communication. */
    "flexmail.unsubscribe_contact": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Flexmail accepted the request. */
        ok: boolean;
      };
    };
    /** Partially update a Flexmail contact. */
    "flexmail.update_contact": {
      input: {
        /**
         * The Flexmail contact id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The contact first name.
         * @maxLength 50
         */
        first_name?: string;
        /**
         * The contact last name.
         * @maxLength 50
         */
        name?: string;
        /**
         * The language the contact wants to receive emails in.
         * @minLength 2
         * @maxLength 2
         */
        language?: "nl" | "fr" | "de" | "it" | "es" | "ru" | "da" | "se" | "zh" | "pt" | "pl" | "en" | "hu" | "bg" | "hr" | "cs" | "et" | "fi" | "el" | "ga" | "lv" | "lt" | "mt" | "ro" | "sk" | "sl" | "uk" | "ca";
        /** Custom field values keyed by Flexmail custom field placeholder. */
        custom_fields?: Record<string, unknown>;
      };
      output: {
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        resource: Record<string, unknown>;
      };
    };
    /** Partially update a Flexmail interest. */
    "flexmail.update_interest": {
      input: {
        /**
         * The Flexmail interest UUID.
         * @format uuid
         */
        id: string;
        /**
         * The internal Flexmail interest name.
         * @minLength 1
         * @maxLength 50
         */
        name?: string;
        /** The Flexmail interest visibility. */
        visibility?: "public" | "private";
        /**
         * The label shown to contacts for this interest.
         * @maxLength 50
         */
        label?: string;
        /**
         * A short description shown to contacts for this interest.
         * @maxLength 100
         */
        description?: string;
      };
      output: {
        /** The raw Flexmail HAL payload returned by the API, including links and embedded resources. */
        resource: Record<string, unknown>;
      };
    };
  }
}
