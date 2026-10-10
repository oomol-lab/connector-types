import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a player to a Pointagram team using a player ID, email address or external ID. */
    "pointagram.add_team_player": {
      input: Record<string, unknown>;
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Operation details, including any created resource ID. */
        data?: {
          /** The created or updated player ID, when returned. */
          profile_id?: string;
          /** The created or updated team ID, when returned. */
          team_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a Pointagram player. Online players receive an invitation; an existing player produces a conflict. */
    "pointagram.create_player": {
      input: {
        /**
         * The player's name in Pointagram.
         * @minLength 1
         * @pattern \S
         */
        player_name: string;
        /** The player's email address, used for invitations. */
        player_email?: string;
        /** Your external identifier for the player. */
        player_external_id?: string;
        /** Use 1 for offline or 0 for online; online players receive an invitation. */
        offline?: "0" | "1";
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Operation details, including any created resource ID. */
        data?: {
          /** The created or updated player ID, when returned. */
          profile_id?: string;
          /** The created or updated team ID, when returned. */
          team_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a Pointagram team with an existing icon filename. */
    "pointagram.create_team": {
      input: {
        /**
         * The team's name in Pointagram.
         * @minLength 1
         * @pattern \S
         */
        team_name: string;
        /**
         * An existing Pointagram icon filename, such as Bulls.png, or a previously uploaded custom icon.
         * @minLength 1
         * @pattern \S
         */
        icon: string;
        /** Use 1 to exempt this team from filter settings, or 0 otherwise. */
        filter_ignore?: "0" | "1";
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Operation details, including any created resource ID. */
        data?: {
          /** The created or updated player ID, when returned. */
          profile_id?: string;
          /** The created or updated team ID, when returned. */
          team_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Soft-delete a Pointagram player. Administrators cannot be removed. Complete anonymization requires the Pointagram UI; inspect the upstream status and message. */
    "pointagram.delete_player": {
      input: {
        /** The Pointagram player ID. */
        player_id: number;
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Operation details, including any created resource ID. */
        data?: {
          /** The created or updated player ID, when returned. */
          profile_id?: string;
          /** The created or updated team ID, when returned. */
          team_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a Pointagram player by ID. */
    "pointagram.get_player": {
      input: {
        /** The Pointagram player ID. */
        player_id: number;
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** The player details returned by Pointagram. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a Pointagram team by ID. */
    "pointagram.get_team": {
      input: {
        /** The Pointagram team ID. */
        team_id: number;
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** A Pointagram team; additional upstream fields are preserved. */
        data?: {
          /** The team ID returned by Pointagram. */
          id?: string;
          /** The team's name. */
          name?: string;
          /** The team's icon filename. */
          icon?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List or search Pointagram players. Continue with data.pagination.next_offset; offset is a player ID, not a row count. */
    "pointagram.list_players": {
      input: {
        /** Search by Email, Name or External Id. */
        search_by?: string;
        /** The value to search for. */
        filter?: string;
        /**
         * Maximum players per page; default 50, maximum 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The last player ID from the previous page. */
        offset?: string;
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Players and pagination information. */
        data?: {
          /** The matching players. */
          players?: Array<{
            /** The player ID returned by Pointagram. */
            id?: string;
            /** The player's name. */
            name?: string;
            /** The player's email address. */
            emailaddress?: string;
            /** The player's external identifier. */
            external_id?: string;
            [key: string]: unknown;
          }>;
          /** Pagination cursors returned by Pointagram. */
          pagination?: {
            /** The page size returned by Pointagram. */
            limit?: string;
            /** The current cursor. */
            offset?: string;
            /** The player ID to use as the next offset. */
            next_offset?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the players belonging to a Pointagram team. */
    "pointagram.list_team_players": {
      input: {
        /** The Pointagram team ID. */
        team_id: number;
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Team membership details. */
        data?: {
          /** Players belonging to the team. */
          players?: Array<{
            /** The player's profile ID. */
            profile_id?: string;
            /** The player's name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Pointagram teams. */
    "pointagram.list_teams": {
      input: Record<string, never>;
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Team listing. */
        data?: {
          /** The teams. */
          teams?: Array<{
            /** The team ID returned by Pointagram. */
            id?: string;
            /** The team's name. */
            name?: string;
            /** The team's icon filename. */
            icon?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Remove a player from a Pointagram team's membership without deleting the player. */
    "pointagram.remove_team_player": {
      input: {
        /** The Pointagram team ID. */
        team_id: number;
        /** The Pointagram player ID. */
        player_id: number;
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Operation details, including any created resource ID. */
        data?: {
          /** The created or updated player ID, when returned. */
          profile_id?: string;
          /** The created or updated team ID, when returned. */
          team_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Pointagram player using the provided fields. */
    "pointagram.update_player": {
      input: {
        /** The Pointagram player ID. */
        player_id: number;
        /**
         * The player's name in Pointagram.
         * @minLength 1
         * @pattern \S
         */
        player_name?: string;
        /** The player's email address, used for invitations. */
        player_email?: string;
        /** Your external identifier for the player. */
        player_external_id?: string;
        /** Use 1 for offline or 0 for online; online players receive an invitation. */
        offline?: "0" | "1";
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Operation details, including any created resource ID. */
        data?: {
          /** The created or updated player ID, when returned. */
          profile_id?: string;
          /** The created or updated team ID, when returned. */
          team_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Pointagram team's name, icon and filter settings. */
    "pointagram.update_team": {
      input: {
        /** The Pointagram team ID. */
        team_id: number;
        /**
         * The team's name in Pointagram.
         * @minLength 1
         * @pattern \S
         */
        team_name: string;
        /**
         * An existing Pointagram icon filename, such as Bulls.png, or a previously uploaded custom icon.
         * @minLength 1
         * @pattern \S
         */
        icon: string;
        /** Use 1 to exempt this team from filter settings, or 0 otherwise. */
        filter_ignore?: "0" | "1";
      };
      output: {
        /** The upstream operation status. */
        status?: string;
        /** The upstream operation message. */
        message?: string;
        /** Operation details, including any created resource ID. */
        data?: {
          /** The created or updated player ID, when returned. */
          profile_id?: string;
          /** The created or updated team ID, when returned. */
          team_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
