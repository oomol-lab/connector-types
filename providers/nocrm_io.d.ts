import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more tags to a noCRM.io lead. */
    "nocrm_io.add_tag_to_lead": {
      input: {
        /** The identifier of the lead that should receive the tag. */
        leadId: number | string;
        /**
         * One tag or a comma-separated tag list accepted by noCRM.io.
         * @minLength 1
         */
        tag: string;
      };
      output: {
        /** The noCRM.io lead returned by this action. */
        lead: {
          /**
           * The noCRM.io lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The lead title.
           * @minLength 1
           */
          title: string;
          /** The pipeline name returned by noCRM.io. */
          pipeline?: string | null;
          /**
           * The lead step name.
           * @minLength 1
           */
          step: string;
          /**
           * The lead step identifier.
           * @exclusiveMinimum 0
           */
          step_id: number;
          /**
           * The lead status returned by noCRM.io.
           * @minLength 1
           */
          status: string;
          /** The lead amount returned by noCRM.io. */
          amount?: number | null;
          /** The lead probability percentage. */
          probability?: number | null;
          /** The secondary phone number returned by noCRM.io. */
          second_number?: string | null;
          /** The amount percentage returned by noCRM.io. */
          amount_percentage?: number | null;
          /** The lead currency code. */
          currency?: string | null;
          /** Whether the lead is starred. */
          starred?: boolean;
          /** The reminder date returned by noCRM.io. */
          remind_date?: string | null;
          /** The reminder time returned by noCRM.io. */
          remind_time?: string | null;
          /** The reminder timestamp returned by noCRM.io. */
          reminder_at?: string | null;
          /** The reminder duration in minutes. */
          reminder_duration?: number | null;
          /** The reminder activity identifier. */
          reminder_activity_id?: number | null;
          /** The reminder activity log identifier returned by noCRM.io. */
          reminder_activity_log_id?: number | null;
          /** The reminder note returned by noCRM.io. */
          reminder_note?: string | null;
          /** The estimated closing date. */
          estimated_closing_date?: string | null;
          /**
           * The lead creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The lead update timestamp.
           * @minLength 1
           */
          updated_at: string;
          /** The lead close timestamp. */
          closed_at?: string | null;
          /**
           * The plain-text lead description.
           * @minLength 1
           */
          description: string;
          /**
           * The HTML lead description.
           * @minLength 1
           */
          html_description: string;
          /** The lead tags returned by noCRM.io. */
          tags: Array<string>;
          /**
           * The lead creation source.
           * @minLength 1
           */
          created_from?: string;
          /** The creator user identifier. */
          created_by_id?: number | null;
          /** The assigned user identifier. */
          user_id?: number | null;
          /** The assigned team identifier. */
          team_id?: number | null;
          /** The linked client folder identifier. */
          client_folder_id?: number | null;
          /** The linked client folder name. */
          client_folder_name?: string | null;
          /**
           * The number of comments attached to the lead.
           * @minimum 0
           */
          comment_count?: number;
          /**
           * The number of attachments attached to the lead.
           * @minimum 0
           */
          attachment_count?: number;
          /** The extended lead metadata payload. */
          extended_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Append text to the description of a noCRM.io lead. */
    "nocrm_io.append_to_lead_description": {
      input: {
        /** The identifier of the lead whose description should be updated. */
        leadId: number | string;
        /**
         * The text that should be appended to the lead description.
         * @minLength 1
         */
        toAppend: string;
      };
      output: {
        /** The noCRM.io lead returned by this action. */
        lead: {
          /**
           * The noCRM.io lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The lead title.
           * @minLength 1
           */
          title: string;
          /** The pipeline name returned by noCRM.io. */
          pipeline?: string | null;
          /**
           * The lead step name.
           * @minLength 1
           */
          step: string;
          /**
           * The lead step identifier.
           * @exclusiveMinimum 0
           */
          step_id: number;
          /**
           * The lead status returned by noCRM.io.
           * @minLength 1
           */
          status: string;
          /** The lead amount returned by noCRM.io. */
          amount?: number | null;
          /** The lead probability percentage. */
          probability?: number | null;
          /** The secondary phone number returned by noCRM.io. */
          second_number?: string | null;
          /** The amount percentage returned by noCRM.io. */
          amount_percentage?: number | null;
          /** The lead currency code. */
          currency?: string | null;
          /** Whether the lead is starred. */
          starred?: boolean;
          /** The reminder date returned by noCRM.io. */
          remind_date?: string | null;
          /** The reminder time returned by noCRM.io. */
          remind_time?: string | null;
          /** The reminder timestamp returned by noCRM.io. */
          reminder_at?: string | null;
          /** The reminder duration in minutes. */
          reminder_duration?: number | null;
          /** The reminder activity identifier. */
          reminder_activity_id?: number | null;
          /** The reminder activity log identifier returned by noCRM.io. */
          reminder_activity_log_id?: number | null;
          /** The reminder note returned by noCRM.io. */
          reminder_note?: string | null;
          /** The estimated closing date. */
          estimated_closing_date?: string | null;
          /**
           * The lead creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The lead update timestamp.
           * @minLength 1
           */
          updated_at: string;
          /** The lead close timestamp. */
          closed_at?: string | null;
          /**
           * The plain-text lead description.
           * @minLength 1
           */
          description: string;
          /**
           * The HTML lead description.
           * @minLength 1
           */
          html_description: string;
          /** The lead tags returned by noCRM.io. */
          tags: Array<string>;
          /**
           * The lead creation source.
           * @minLength 1
           */
          created_from?: string;
          /** The creator user identifier. */
          created_by_id?: number | null;
          /** The assigned user identifier. */
          user_id?: number | null;
          /** The assigned team identifier. */
          team_id?: number | null;
          /** The linked client folder identifier. */
          client_folder_id?: number | null;
          /** The linked client folder name. */
          client_folder_name?: string | null;
          /**
           * The number of comments attached to the lead.
           * @minimum 0
           */
          comment_count?: number;
          /**
           * The number of attachments attached to the lead.
           * @minimum 0
           */
          attachment_count?: number;
          /** The extended lead metadata payload. */
          extended_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Assign a noCRM.io lead to a specific user. */
    "nocrm_io.assign_lead_to_user": {
      input: {
        /** The identifier of the lead to assign. */
        leadId: number | string;
        /** The user email address or identifier that should receive the lead. */
        userId: number | string;
      };
      output: {
        /** The noCRM.io lead returned by this action. */
        lead: {
          /**
           * The noCRM.io lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The lead title.
           * @minLength 1
           */
          title: string;
          /** The pipeline name returned by noCRM.io. */
          pipeline?: string | null;
          /**
           * The lead step name.
           * @minLength 1
           */
          step: string;
          /**
           * The lead step identifier.
           * @exclusiveMinimum 0
           */
          step_id: number;
          /**
           * The lead status returned by noCRM.io.
           * @minLength 1
           */
          status: string;
          /** The lead amount returned by noCRM.io. */
          amount?: number | null;
          /** The lead probability percentage. */
          probability?: number | null;
          /** The secondary phone number returned by noCRM.io. */
          second_number?: string | null;
          /** The amount percentage returned by noCRM.io. */
          amount_percentage?: number | null;
          /** The lead currency code. */
          currency?: string | null;
          /** Whether the lead is starred. */
          starred?: boolean;
          /** The reminder date returned by noCRM.io. */
          remind_date?: string | null;
          /** The reminder time returned by noCRM.io. */
          remind_time?: string | null;
          /** The reminder timestamp returned by noCRM.io. */
          reminder_at?: string | null;
          /** The reminder duration in minutes. */
          reminder_duration?: number | null;
          /** The reminder activity identifier. */
          reminder_activity_id?: number | null;
          /** The reminder activity log identifier returned by noCRM.io. */
          reminder_activity_log_id?: number | null;
          /** The reminder note returned by noCRM.io. */
          reminder_note?: string | null;
          /** The estimated closing date. */
          estimated_closing_date?: string | null;
          /**
           * The lead creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The lead update timestamp.
           * @minLength 1
           */
          updated_at: string;
          /** The lead close timestamp. */
          closed_at?: string | null;
          /**
           * The plain-text lead description.
           * @minLength 1
           */
          description: string;
          /**
           * The HTML lead description.
           * @minLength 1
           */
          html_description: string;
          /** The lead tags returned by noCRM.io. */
          tags: Array<string>;
          /**
           * The lead creation source.
           * @minLength 1
           */
          created_from?: string;
          /** The creator user identifier. */
          created_by_id?: number | null;
          /** The assigned user identifier. */
          user_id?: number | null;
          /** The assigned team identifier. */
          team_id?: number | null;
          /** The linked client folder identifier. */
          client_folder_id?: number | null;
          /** The linked client folder name. */
          client_folder_name?: string | null;
          /**
           * The number of comments attached to the lead.
           * @minimum 0
           */
          comment_count?: number;
          /**
           * The number of attachments attached to the lead.
           * @minimum 0
           */
          attachment_count?: number;
          /** The extended lead metadata payload. */
          extended_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Change a noCRM.io lead status to cancelled. */
    "nocrm_io.change_lead_status_to_cancelled": {
      input: {
        /** The identifier of the target noCRM.io lead. */
        leadId: number | string;
      };
      output: {
        /** The noCRM.io lead returned by this action. */
        lead: {
          /**
           * The noCRM.io lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The lead title.
           * @minLength 1
           */
          title: string;
          /** The pipeline name returned by noCRM.io. */
          pipeline?: string | null;
          /**
           * The lead step name.
           * @minLength 1
           */
          step: string;
          /**
           * The lead step identifier.
           * @exclusiveMinimum 0
           */
          step_id: number;
          /**
           * The lead status returned by noCRM.io.
           * @minLength 1
           */
          status: string;
          /** The lead amount returned by noCRM.io. */
          amount?: number | null;
          /** The lead probability percentage. */
          probability?: number | null;
          /** The secondary phone number returned by noCRM.io. */
          second_number?: string | null;
          /** The amount percentage returned by noCRM.io. */
          amount_percentage?: number | null;
          /** The lead currency code. */
          currency?: string | null;
          /** Whether the lead is starred. */
          starred?: boolean;
          /** The reminder date returned by noCRM.io. */
          remind_date?: string | null;
          /** The reminder time returned by noCRM.io. */
          remind_time?: string | null;
          /** The reminder timestamp returned by noCRM.io. */
          reminder_at?: string | null;
          /** The reminder duration in minutes. */
          reminder_duration?: number | null;
          /** The reminder activity identifier. */
          reminder_activity_id?: number | null;
          /** The reminder activity log identifier returned by noCRM.io. */
          reminder_activity_log_id?: number | null;
          /** The reminder note returned by noCRM.io. */
          reminder_note?: string | null;
          /** The estimated closing date. */
          estimated_closing_date?: string | null;
          /**
           * The lead creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The lead update timestamp.
           * @minLength 1
           */
          updated_at: string;
          /** The lead close timestamp. */
          closed_at?: string | null;
          /**
           * The plain-text lead description.
           * @minLength 1
           */
          description: string;
          /**
           * The HTML lead description.
           * @minLength 1
           */
          html_description: string;
          /** The lead tags returned by noCRM.io. */
          tags: Array<string>;
          /**
           * The lead creation source.
           * @minLength 1
           */
          created_from?: string;
          /** The creator user identifier. */
          created_by_id?: number | null;
          /** The assigned user identifier. */
          user_id?: number | null;
          /** The assigned team identifier. */
          team_id?: number | null;
          /** The linked client folder identifier. */
          client_folder_id?: number | null;
          /** The linked client folder name. */
          client_folder_name?: string | null;
          /**
           * The number of comments attached to the lead.
           * @minimum 0
           */
          comment_count?: number;
          /**
           * The number of attachments attached to the lead.
           * @minimum 0
           */
          attachment_count?: number;
          /** The extended lead metadata payload. */
          extended_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Change a noCRM.io lead to standby and schedule its next reminder. */
    "nocrm_io.change_lead_status_to_standby": {
      input: {
        /** The identifier of the lead to mark as standby. */
        leadId: number | string;
        /**
         * The number of days before the reminder becomes due.
         * @exclusiveMinimum 0
         */
        days: number;
        /**
         * The activity identifier to attach to the reminder.
         * @exclusiveMinimum 0
         */
        activityId?: number;
      };
      output: {
        /** The noCRM.io lead returned by this action. */
        lead: {
          /**
           * The noCRM.io lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The lead title.
           * @minLength 1
           */
          title: string;
          /** The pipeline name returned by noCRM.io. */
          pipeline?: string | null;
          /**
           * The lead step name.
           * @minLength 1
           */
          step: string;
          /**
           * The lead step identifier.
           * @exclusiveMinimum 0
           */
          step_id: number;
          /**
           * The lead status returned by noCRM.io.
           * @minLength 1
           */
          status: string;
          /** The lead amount returned by noCRM.io. */
          amount?: number | null;
          /** The lead probability percentage. */
          probability?: number | null;
          /** The secondary phone number returned by noCRM.io. */
          second_number?: string | null;
          /** The amount percentage returned by noCRM.io. */
          amount_percentage?: number | null;
          /** The lead currency code. */
          currency?: string | null;
          /** Whether the lead is starred. */
          starred?: boolean;
          /** The reminder date returned by noCRM.io. */
          remind_date?: string | null;
          /** The reminder time returned by noCRM.io. */
          remind_time?: string | null;
          /** The reminder timestamp returned by noCRM.io. */
          reminder_at?: string | null;
          /** The reminder duration in minutes. */
          reminder_duration?: number | null;
          /** The reminder activity identifier. */
          reminder_activity_id?: number | null;
          /** The reminder activity log identifier returned by noCRM.io. */
          reminder_activity_log_id?: number | null;
          /** The reminder note returned by noCRM.io. */
          reminder_note?: string | null;
          /** The estimated closing date. */
          estimated_closing_date?: string | null;
          /**
           * The lead creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The lead update timestamp.
           * @minLength 1
           */
          updated_at: string;
          /** The lead close timestamp. */
          closed_at?: string | null;
          /**
           * The plain-text lead description.
           * @minLength 1
           */
          description: string;
          /**
           * The HTML lead description.
           * @minLength 1
           */
          html_description: string;
          /** The lead tags returned by noCRM.io. */
          tags: Array<string>;
          /**
           * The lead creation source.
           * @minLength 1
           */
          created_from?: string;
          /** The creator user identifier. */
          created_by_id?: number | null;
          /** The assigned user identifier. */
          user_id?: number | null;
          /** The assigned team identifier. */
          team_id?: number | null;
          /** The linked client folder identifier. */
          client_folder_id?: number | null;
          /** The linked client folder name. */
          client_folder_name?: string | null;
          /**
           * The number of comments attached to the lead.
           * @minimum 0
           */
          comment_count?: number;
          /**
           * The number of attachments attached to the lead.
           * @minimum 0
           */
          attachment_count?: number;
          /** The extended lead metadata payload. */
          extended_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a lead in noCRM.io with the provided title and description. */
    "nocrm_io.create_lead": {
      input: {
        /**
         * The lead title, usually the company name.
         * @minLength 1
         */
        title: string;
        /**
         * The lead description, usually containing the prospect details.
         * @minLength 1
         */
        description: string;
        /** The user email address or identifier used for direct assignment. */
        userId?: number | string;
        /** The lead tags to send to noCRM.io. */
        tags?: Array<string>;
        /** The step name or identifier for the new lead. */
        step?: number | string;
        /**
         * The lead creation timestamp to backfill into noCRM.io.
         * @minLength 1
         */
        createdAt?: string;
      };
      output: {
        /** The noCRM.io lead returned by this action. */
        lead: {
          /**
           * The noCRM.io lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The lead title.
           * @minLength 1
           */
          title: string;
          /** The pipeline name returned by noCRM.io. */
          pipeline?: string | null;
          /**
           * The lead step name.
           * @minLength 1
           */
          step: string;
          /**
           * The lead step identifier.
           * @exclusiveMinimum 0
           */
          step_id: number;
          /**
           * The lead status returned by noCRM.io.
           * @minLength 1
           */
          status: string;
          /** The lead amount returned by noCRM.io. */
          amount?: number | null;
          /** The lead probability percentage. */
          probability?: number | null;
          /** The secondary phone number returned by noCRM.io. */
          second_number?: string | null;
          /** The amount percentage returned by noCRM.io. */
          amount_percentage?: number | null;
          /** The lead currency code. */
          currency?: string | null;
          /** Whether the lead is starred. */
          starred?: boolean;
          /** The reminder date returned by noCRM.io. */
          remind_date?: string | null;
          /** The reminder time returned by noCRM.io. */
          remind_time?: string | null;
          /** The reminder timestamp returned by noCRM.io. */
          reminder_at?: string | null;
          /** The reminder duration in minutes. */
          reminder_duration?: number | null;
          /** The reminder activity identifier. */
          reminder_activity_id?: number | null;
          /** The reminder activity log identifier returned by noCRM.io. */
          reminder_activity_log_id?: number | null;
          /** The reminder note returned by noCRM.io. */
          reminder_note?: string | null;
          /** The estimated closing date. */
          estimated_closing_date?: string | null;
          /**
           * The lead creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The lead update timestamp.
           * @minLength 1
           */
          updated_at: string;
          /** The lead close timestamp. */
          closed_at?: string | null;
          /**
           * The plain-text lead description.
           * @minLength 1
           */
          description: string;
          /**
           * The HTML lead description.
           * @minLength 1
           */
          html_description: string;
          /** The lead tags returned by noCRM.io. */
          tags: Array<string>;
          /**
           * The lead creation source.
           * @minLength 1
           */
          created_from?: string;
          /** The creator user identifier. */
          created_by_id?: number | null;
          /** The assigned user identifier. */
          user_id?: number | null;
          /** The assigned team identifier. */
          team_id?: number | null;
          /** The linked client folder identifier. */
          client_folder_id?: number | null;
          /** The linked client folder name. */
          client_folder_name?: string | null;
          /**
           * The number of comments attached to the lead.
           * @minimum 0
           */
          comment_count?: number;
          /**
           * The number of attachments attached to the lead.
           * @minimum 0
           */
          attachment_count?: number;
          /** The extended lead metadata payload. */
          extended_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a noCRM.io lead. */
    "nocrm_io.delete_lead": {
      input: {
        /** The identifier of the target noCRM.io lead. */
        leadId: number | string;
      };
      output: {
        /**
         * The deleted noCRM.io lead identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Duplicate an existing noCRM.io lead into another step. */
    "nocrm_io.duplicate_lead": {
      input: {
        /** The identifier of the lead to duplicate. */
        leadId: number | string;
        /** The step name or identifier for the duplicated lead. */
        step: number | string;
      };
      output: {
        /** The noCRM.io lead returned by this action. */
        lead: {
          /**
           * The noCRM.io lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The lead title.
           * @minLength 1
           */
          title: string;
          /** The pipeline name returned by noCRM.io. */
          pipeline?: string | null;
          /**
           * The lead step name.
           * @minLength 1
           */
          step: string;
          /**
           * The lead step identifier.
           * @exclusiveMinimum 0
           */
          step_id: number;
          /**
           * The lead status returned by noCRM.io.
           * @minLength 1
           */
          status: string;
          /** The lead amount returned by noCRM.io. */
          amount?: number | null;
          /** The lead probability percentage. */
          probability?: number | null;
          /** The secondary phone number returned by noCRM.io. */
          second_number?: string | null;
          /** The amount percentage returned by noCRM.io. */
          amount_percentage?: number | null;
          /** The lead currency code. */
          currency?: string | null;
          /** Whether the lead is starred. */
          starred?: boolean;
          /** The reminder date returned by noCRM.io. */
          remind_date?: string | null;
          /** The reminder time returned by noCRM.io. */
          remind_time?: string | null;
          /** The reminder timestamp returned by noCRM.io. */
          reminder_at?: string | null;
          /** The reminder duration in minutes. */
          reminder_duration?: number | null;
          /** The reminder activity identifier. */
          reminder_activity_id?: number | null;
          /** The reminder activity log identifier returned by noCRM.io. */
          reminder_activity_log_id?: number | null;
          /** The reminder note returned by noCRM.io. */
          reminder_note?: string | null;
          /** The estimated closing date. */
          estimated_closing_date?: string | null;
          /**
           * The lead creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The lead update timestamp.
           * @minLength 1
           */
          updated_at: string;
          /** The lead close timestamp. */
          closed_at?: string | null;
          /**
           * The plain-text lead description.
           * @minLength 1
           */
          description: string;
          /**
           * The HTML lead description.
           * @minLength 1
           */
          html_description: string;
          /** The lead tags returned by noCRM.io. */
          tags: Array<string>;
          /**
           * The lead creation source.
           * @minLength 1
           */
          created_from?: string;
          /** The creator user identifier. */
          created_by_id?: number | null;
          /** The assigned user identifier. */
          user_id?: number | null;
          /** The assigned team identifier. */
          team_id?: number | null;
          /** The linked client folder identifier. */
          client_folder_id?: number | null;
          /** The linked client folder name. */
          client_folder_name?: string | null;
          /**
           * The number of comments attached to the lead.
           * @minimum 0
           */
          comment_count?: number;
          /**
           * The number of attachments attached to the lead.
           * @minimum 0
           */
          attachment_count?: number;
          /** The extended lead metadata payload. */
          extended_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List the teams available in the connected noCRM.io account. */
    "nocrm_io.list_teams": {
      input: Record<string, never>;
      output: {
        /** The noCRM.io teams returned by the request. */
        teams: Array<{
          /**
           * The noCRM.io team identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The noCRM.io team name.
           * @minLength 1
           */
          name: string;
          /** The users assigned to the team. */
          users: Array<{
            /**
             * The noCRM.io user identifier.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The user's last name.
             * @minLength 1
             */
            lastname: string;
            /**
             * The user's first name.
             * @minLength 1
             */
            firstname: string;
            /**
             * The user's email address.
             * @minLength 1
             */
            email: string;
            /** Whether the user is a team manager. */
            is_manager?: boolean;
            /**
             * The user's phone number when returned.
             * @minLength 1
             */
            phone?: string;
            /**
             * The user's mobile phone number when returned.
             * @minLength 1
             */
            mobile_phone?: string;
            [key: string]: unknown;
          }>;
          /**
           * The team creation timestamp.
           * @minLength 1
           */
          created_at: string;
          /**
           * The team update timestamp.
           * @minLength 1
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
