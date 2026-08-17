import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a Parma relationship to a group. */
    "parma.add_relationship_to_group": {
      input: {
        /** The Parma relationship ID. */
        relationship_id: number;
        /** The Parma group ID to assign. */
        group_id: number;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Create a note linked to one or more Parma relationships. */
    "parma.create_note": {
      input: {
        /** The note date and time value accepted by Parma. */
        datetime?: string;
        /**
         * The Parma relationship IDs linked to the note.
         * @minItems 1
         */
        relationship_ids: Array<number>;
        /** The note body text. */
        body: string;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Create a person or company relationship in Parma. */
    "parma.create_relationship": {
      input: {
        /** The relationship name. */
        name: string;
        /** The relationship type. */
        type?: "person" | "company";
        /** The Parma company relationship ID linked to this person. */
        company_id?: number;
        /**
         * The Parma group IDs assigned to the relationship.
         * @minItems 1
         */
        group_ids: Array<number>;
        /** The relationship description or notes. */
        about?: string;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a Parma relationship by ID. */
    "parma.delete_relationship": {
      input: {
        /** The Parma resource ID. */
        id: number;
      };
      output: {
        /** Whether Parma accepted the deletion request. */
        deleted: boolean;
      };
    };
    /** Get the current Parma user and workspace account. */
    "parma.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Get a Parma deal by ID. */
    "parma.get_deal": {
      input: {
        /** The Parma resource ID. */
        id: number;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Get a Parma pipeline by ID. */
    "parma.get_pipeline": {
      input: {
        /** The Parma resource ID. */
        id: number;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Get a Parma relationship by ID. */
    "parma.get_relationship": {
      input: {
        /** The Parma resource ID. */
        id: number;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Get a Parma pipeline stage by ID. */
    "parma.get_stage": {
      input: {
        /** The Parma resource ID. */
        id: number;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Get a Parma user by ID. */
    "parma.get_user": {
      input: {
        /** The Parma resource ID. */
        id: number;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** List deals in the connected Parma workspace. */
    "parma.list_deals": {
      input: {
        /** The opaque Parma page value used to request another result page. */
        page?: string;
      };
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List Parma relationship groups, optionally filtered by name. */
    "parma.list_groups": {
      input: {
        /** The text used to filter Parma groups. */
        query?: string;
      };
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List notes in the connected Parma workspace. */
    "parma.list_notes": {
      input: {
        /** The opaque Parma page value used to request another result page. */
        page?: string;
      };
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List pipelines in the connected Parma workspace. */
    "parma.list_pipelines": {
      input: Record<string, never>;
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List groups assigned to a Parma relationship. */
    "parma.list_relationship_groups": {
      input: {
        /** The Parma relationship ID. */
        relationship_id: number;
      };
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List notes linked to a Parma relationship. */
    "parma.list_relationship_notes": {
      input: {
        /** The Parma relationship ID. */
        relationship_id: number;
        /** The opaque Parma page value used to request another result page. */
        page?: string;
      };
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List and filter relationships in the connected Parma workspace. */
    "parma.list_relationships": {
      input: {
        /** The relationship name filter. */
        name?: string;
        /** The relationship type filter. */
        type?: string;
        /** The opaque Parma page value used to request another result page. */
        page?: string;
        /** The scheduling-link contact detail filter. */
        schedulinglink?: string;
        /** The LinkedIn contact detail filter. */
        linkedin?: string;
        /** The Instagram contact detail filter. */
        instagram?: string;
        /** The Twitter contact detail filter. */
        twitter?: string;
        /** The Telegram contact detail filter. */
        telegram?: string;
        /** The SMS contact detail filter. */
        sms?: string;
        /** The phone contact detail filter. */
        phone?: string;
        /** The WhatsApp contact detail filter. */
        whatsapp?: string;
        /** The email contact detail filter. */
        email?: string;
      };
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List pipeline stages in the connected Parma workspace. */
    "parma.list_stages": {
      input: Record<string, never>;
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** List users in the connected Parma workspace. */
    "parma.list_users": {
      input: Record<string, never>;
      output: {
        /** The resource records returned by Parma. */
        data: Array<Record<string, unknown>>;
        /** The pagination metadata returned by Parma. */
        meta?: Record<string, unknown>;
      };
    };
    /** Remove a Parma relationship from one of its groups. */
    "parma.remove_relationship_from_group": {
      input: {
        /** The Parma relationship ID. */
        relationship_id: number;
        /** The Parma relationship-group membership ID. */
        relationship_group_id: number;
      };
      output: {
        /** Whether Parma accepted the deletion request. */
        deleted: boolean;
      };
    };
    /** Update a Parma note by ID. */
    "parma.update_note": {
      input: {
        /** The Parma note ID. */
        id: number;
        /** The note date and time value accepted by Parma. */
        datetime?: string;
        /**
         * The Parma relationship IDs linked to the note.
         * @minItems 1
         */
        relationship_ids?: Array<number>;
        /** The note body text. */
        body?: string;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
    /** Update a Parma relationship and its custom properties. */
    "parma.update_relationship": {
      input: {
        /** The Parma relationship ID. */
        id: number;
        /** The relationship name. */
        name?: string;
        /** The relationship type. */
        type?: "person" | "company";
        /** The Parma company relationship ID linked to this person. */
        company_id?: number;
        /**
         * The Parma group IDs assigned to the relationship.
         * @minItems 1
         */
        group_ids?: Array<number>;
        /** The relationship description or notes. */
        about?: string;
        /** The custom property values to update. */
        properties?: Array<{
          /** The Parma custom property ID. */
          id: number;
          /** The new custom property value. */
          value: string;
        }>;
      };
      output: {
        /** The resource object returned by Parma. */
        data: Record<string, unknown>;
      };
    };
  }
}
