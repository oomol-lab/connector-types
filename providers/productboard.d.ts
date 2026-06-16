import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Productboard product-management entity by ID. */
    "productboard.get_entity": {
      input: {
        /**
         * Productboard entity identifier.
         * @minLength 1
         */
        id: string;
        /**
         * Productboard fields to return. Use all or field IDs from the configuration endpoints.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Productboard JSON object payload. */
        entity: Record<string, unknown>;
      };
    };
    /** Get the Productboard configuration for one entity type. */
    "productboard.get_entity_configuration": {
      input: {
        /** Productboard entity type to include. */
        type: "product" | "component" | "feature" | "subfeature" | "initiative" | "objective" | "keyResult" | "release" | "releaseGroup" | "user" | "company";
      };
      output: {
        /** Productboard JSON object payload. */
        configuration: Record<string, unknown>;
      };
    };
    /** Get a Productboard workspace member by ID. */
    "productboard.get_member": {
      input: {
        /**
         * Productboard member identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Productboard JSON object payload. */
        member: Record<string, unknown>;
      };
    };
    /** Get a Productboard note by ID. */
    "productboard.get_note": {
      input: {
        /**
         * Productboard note identifier.
         * @minLength 1
         */
        id: string;
        /**
         * Productboard fields to return. Use all or field IDs from the configuration endpoints.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Productboard JSON object payload. */
        note: Record<string, unknown>;
      };
    };
    /** Get the Productboard configuration for one note type. */
    "productboard.get_note_configuration": {
      input: {
        /** Productboard note type to include. */
        type: "textNote" | "conversationNote" | "opportunityNote" | "simple" | "conversation" | "opportunity";
      };
      output: {
        /** Productboard JSON object payload. */
        configuration: Record<string, unknown>;
      };
    };
    /** Get a Productboard team by ID. */
    "productboard.get_team": {
      input: {
        /**
         * Productboard team identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Productboard JSON object payload. */
        team: Record<string, unknown>;
      };
    };
    /** List Productboard product-management entities with supported filters. */
    "productboard.list_entities": {
      input: {
        /**
         * Opaque cursor returned by a previous Productboard list response.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * Entity types to include.
         * @minItems 1
         */
        types?: Array<"product" | "component" | "feature" | "subfeature" | "initiative" | "objective" | "keyResult" | "release" | "releaseGroup" | "user" | "company">;
        /**
         * Productboard fields to return. Use all or field IDs from the configuration endpoints.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Filter entities by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter entities by Productboard owner ID.
         * @minLength 1
         */
        ownerId?: string;
        /**
         * Filter entities by Productboard owner email.
         * @format email
         */
        ownerEmail?: string;
        /**
         * Filter entities by Productboard status ID.
         * @minLength 1
         */
        statusId?: string;
        /**
         * Filter entities by Productboard status name.
         * @minLength 1
         */
        statusName?: string;
        /** Filter entities by archived status. */
        archived?: boolean;
        /**
         * Filter entities by parent entity ID.
         * @minLength 1
         */
        parentId?: string;
        /**
         * Filter entities by metadata source system name.
         * @minLength 1
         */
        metadataSourceSystem?: string;
        /**
         * Filter entities by metadata source record ID.
         * @minLength 1
         */
        metadataSourceRecordId?: string;
      };
      output: {
        /** Productboard entities returned by the API. */
        entities: Array<Record<string, unknown>>;
        /** Opaque Productboard cursor for requesting the next page. */
        nextPageCursor: string | null;
        /**
         * Productboard next page URL returned in links.next.
         * @format uri
         */
        nextPageUrl: string | null;
        /** Productboard links object returned with the response. */
        links: Record<string, unknown>;
      };
    };
    /** List Productboard entity configurations available in the workspace. */
    "productboard.list_entity_configurations": {
      input: {
        /**
         * Optional entity types to include.
         * @minItems 1
         */
        types?: Array<"product" | "component" | "feature" | "subfeature" | "initiative" | "objective" | "keyResult" | "release" | "releaseGroup" | "user" | "company">;
      };
      output: {
        /** Productboard entity configurations. */
        configurations: Array<Record<string, unknown>>;
        /** Opaque Productboard cursor for requesting the next page. */
        nextPageCursor: string | null;
        /**
         * Productboard next page URL returned in links.next.
         * @format uri
         */
        nextPageUrl: string | null;
        /** Productboard links object returned with the response. */
        links: Record<string, unknown>;
      };
    };
    /** List Productboard workspace members. */
    "productboard.list_members": {
      input: {
        /**
         * Opaque cursor returned by a previous Productboard list response.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * Case-insensitive partial match query for member name or email.
         * @minLength 1
         */
        query?: string;
        /**
         * Member roles to include.
         * @minItems 1
         */
        roles?: Array<"admin" | "maker" | "viewer" | "contributor">;
        /** Whether to include disabled members. */
        includeDisabled?: boolean;
        /** Whether to include members with pending invitations. */
        includeInvitationPending?: boolean;
      };
      output: {
        /** Productboard members returned by the API. */
        members: Array<Record<string, unknown>>;
        /** Opaque Productboard cursor for requesting the next page. */
        nextPageCursor: string | null;
        /**
         * Productboard next page URL returned in links.next.
         * @format uri
         */
        nextPageUrl: string | null;
        /** Productboard links object returned with the response. */
        links: Record<string, unknown>;
      };
    };
    /** List Productboard note configurations available in the workspace. */
    "productboard.list_note_configurations": {
      input: {
        /**
         * Optional note types to include.
         * @minItems 1
         */
        types?: Array<"textNote" | "conversationNote" | "opportunityNote" | "simple" | "conversation" | "opportunity">;
      };
      output: {
        /** Productboard note configurations. */
        configurations: Array<Record<string, unknown>>;
        /** Opaque Productboard cursor for requesting the next page. */
        nextPageCursor: string | null;
        /**
         * Productboard next page URL returned in links.next.
         * @format uri
         */
        nextPageUrl: string | null;
        /** Productboard links object returned with the response. */
        links: Record<string, unknown>;
      };
    };
    /** List Productboard notes with supported filters. */
    "productboard.list_notes": {
      input: {
        /**
         * Opaque cursor returned by a previous Productboard list response.
         * @minLength 1
         */
        pageCursor?: string;
        /** Filter notes by archived status. */
        archived?: boolean;
        /** Filter notes by processed status. */
        processed?: boolean;
        /**
         * Note types to include.
         * @minItems 1
         */
        types?: Array<"textNote" | "conversationNote" | "opportunityNote" | "simple" | "conversation" | "opportunity">;
        /**
         * Filter notes by Productboard owner ID.
         * @minLength 1
         */
        ownerId?: string;
        /**
         * Filter notes by Productboard owner email.
         * @format email
         */
        ownerEmail?: string;
        /**
         * Filter notes by Productboard creator ID.
         * @minLength 1
         */
        creatorId?: string;
        /**
         * Filter notes by Productboard creator email.
         * @format email
         */
        creatorEmail?: string;
        /**
         * Filter notes by metadata source system name.
         * @minLength 1
         */
        metadataSourceSystem?: string;
        /**
         * Filter notes by metadata source record ID.
         * @minLength 1
         */
        metadataSourceRecordId?: string;
        /**
         * Filter notes created on or after this ISO-8601 timestamp.
         * @format date-time
         */
        createdFrom?: string;
        /**
         * Filter notes created on or before this ISO-8601 timestamp.
         * @format date-time
         */
        createdTo?: string;
        /**
         * Filter notes updated on or after this ISO-8601 timestamp.
         * @format date-time
         */
        updatedFrom?: string;
        /**
         * Filter notes updated on or before this ISO-8601 timestamp.
         * @format date-time
         */
        updatedTo?: string;
        /**
         * Productboard fields to return. Use all or field IDs from the configuration endpoints.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Productboard notes returned by the API. */
        notes: Array<Record<string, unknown>>;
        /** Opaque Productboard cursor for requesting the next page. */
        nextPageCursor: string | null;
        /**
         * Productboard next page URL returned in links.next.
         * @format uri
         */
        nextPageUrl: string | null;
        /** Productboard links object returned with the response. */
        links: Record<string, unknown>;
      };
    };
    /** List members belonging to a Productboard team. */
    "productboard.list_team_members": {
      input: {
        /**
         * Productboard team identifier.
         * @minLength 1
         */
        teamId: string;
        /**
         * Opaque cursor returned by a previous Productboard list response.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** Productboard team members returned by the API. */
        members: Array<Record<string, unknown>>;
        /** Opaque Productboard cursor for requesting the next page. */
        nextPageCursor: string | null;
        /**
         * Productboard next page URL returned in links.next.
         * @format uri
         */
        nextPageUrl: string | null;
        /** Productboard links object returned with the response. */
        links: Record<string, unknown>;
      };
    };
    /** List Productboard teams. */
    "productboard.list_teams": {
      input: {
        /**
         * Opaque cursor returned by a previous Productboard list response.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * Filter teams by exact name, case-insensitive.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter teams by exact handle, case-insensitive.
         * @minLength 1
         */
        handle?: string;
        /**
         * Case-insensitive partial match query for team name or handle.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Productboard teams returned by the API. */
        teams: Array<Record<string, unknown>>;
        /** Opaque Productboard cursor for requesting the next page. */
        nextPageCursor: string | null;
        /**
         * Productboard next page URL returned in links.next.
         * @format uri
         */
        nextPageUrl: string | null;
        /** Productboard links object returned with the response. */
        links: Record<string, unknown>;
      };
    };
  }
}
