import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Callingly call from lead details and routing information. */
    "callingly.create_call": {
      input: {
        /**
         * Agency account identifier used when acting on behalf of a client account.
         * @exclusiveMinimum 0
         */
        account_id?: number;
        /**
         * Callingly team identifier.
         * @exclusiveMinimum 0
         */
        team_id: number;
        /**
         * Lead first name to use for the call.
         * @minLength 1
         */
        first_name: string;
        /**
         * Lead last name to use for the call.
         * @minLength 1
         */
        last_name: string;
        /**
         * Lead phone number for the call.
         * @minLength 1
         */
        phone_number: string;
        /**
         * Lead email address for the call.
         * @format email
         */
        email?: string;
        /**
         * Lead company name.
         * @minLength 1
         */
        company?: string;
        /**
         * Lead category name.
         * @minLength 1
         */
        category?: string;
        /**
         * Lead source label.
         * @minLength 1
         */
        source?: string;
        /** CRM identifier passed through to Callingly. */
        crm_id?: number;
        /**
         * Optional scheduled timestamp for the call.
         * @minLength 1
         */
        scheduled_at?: string;
      };
      output: {
        /** Call record returned by Callingly. */
        call: {
          /**
           * Callingly call identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable text field returned by Callingly. */
          started_at: string | null;
          /** Nullable text field returned by Callingly. */
          direction: string | null;
          /** Nullable text field returned by Callingly. */
          status: string | null;
          /** Nullable text field returned by Callingly. */
          status_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          lead_status: string | null;
          /** Nullable text field returned by Callingly. */
          lead_status_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          ring_status: string | null;
          /** Nullable integer field returned by Callingly. */
          seconds: number | null;
          /** Nullable text field returned by Callingly. */
          duration: string | null;
          /** Nullable integer field returned by Callingly. */
          retry: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_retry: number | null;
          /** Nullable text field returned by Callingly. */
          time_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          from_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          source: string | null;
          /** Nullable text field returned by Callingly. */
          recording_url: string | null;
          /** Nullable text field returned by Callingly. */
          waveform_url: string | null;
          /** Nullable text field returned by Callingly. */
          error_message: string | null;
          /** Nullable text field returned by Callingly. */
          phone_number_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          human_result: string | null;
          /** Agent summary returned in Callingly call payloads. */
          user: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            fname: string | null;
            /** Nullable text field returned by Callingly. */
            lname: string | null;
            /** Nullable text field returned by Callingly. */
            email: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
          } | null;
          /** Lead summary returned in Callingly call payloads. */
          lead: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            label: string | null;
            /** Nullable text field returned by Callingly. */
            fname: string | null;
            /** Nullable text field returned by Callingly. */
            lname: string | null;
            /** Nullable text field returned by Callingly. */
            email: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number_formatted: string | null;
            /** Nullable text field returned by Callingly. */
            source: string | null;
            /** Nullable text field returned by Callingly. */
            crm: string | null;
            /** Nullable text field returned by Callingly. */
            source_id: string | null;
            /** Nullable text field returned by Callingly. */
            deleted_at: string | null;
          } | null;
          /** Nullable text field returned by Callingly. */
          number: string | null;
          /** Nullable text field returned by Callingly. */
          tag: string | null;
          /** Notes returned with the call. */
          notes: Array<unknown>;
          /** Team summary returned by Callingly. */
          profile: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
          } | null;
          /** Nullable integer field returned by Callingly. */
          is_voicemail: number | null;
          /** Nullable integer field returned by Callingly. */
          is_queue: number | null;
          /** Nullable integer field returned by Callingly. */
          is_team_offline: number | null;
          /** Nullable text field returned by Callingly. */
          scheduled_call_type: string | null;
          /** Nullable integer field returned by Callingly. */
          old_lead_owner_id: number | null;
          /** Nullable text field returned by Callingly. */
          transcript: string | null;
          /** Nullable text field returned by Callingly. */
          sales_advice: string | null;
          /** Nullable integer field returned by Callingly. */
          is_error: number | null;
          /** Nullable text field returned by Callingly. */
          error_code: string | null;
        };
      };
    };
    /** Delete a Callingly lead by ID. */
    "callingly.delete_lead": {
      input: {
        /**
         * Callingly lead identifier.
         * @exclusiveMinimum 0
         */
        leadId: number;
      };
      output: {
        /** Whether the operation succeeded. */
        success: boolean;
      };
    };
    /** Retrieve the weekly schedule for one Callingly agent. */
    "callingly.get_agent_schedule": {
      input: {
        /**
         * Callingly agent identifier.
         * @exclusiveMinimum 0
         */
        agentId: number;
      };
      output: {
        /** Schedule day entries returned by Callingly. */
        schedule: Array<{
          /** Nullable text field returned by Callingly. */
          label: string | null;
          /** Zero-based day index where Sunday is 0. */
          day: number;
          /** Whether the agent is available on this day. */
          is_available: boolean;
          /** Time ranges for the day. */
          times: Array<{
            /** Nullable text field returned by Callingly. */
            start: string | null;
            /** Nullable text field returned by Callingly. */
            end: string | null;
          }>;
        }>;
      };
    };
    /** Retrieve one Callingly call by ID. */
    "callingly.get_call": {
      input: {
        /**
         * Callingly call identifier.
         * @exclusiveMinimum 0
         */
        callId: number;
      };
      output: {
        /** Call record returned by Callingly. */
        call: {
          /**
           * Callingly call identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable text field returned by Callingly. */
          started_at: string | null;
          /** Nullable text field returned by Callingly. */
          direction: string | null;
          /** Nullable text field returned by Callingly. */
          status: string | null;
          /** Nullable text field returned by Callingly. */
          status_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          lead_status: string | null;
          /** Nullable text field returned by Callingly. */
          lead_status_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          ring_status: string | null;
          /** Nullable integer field returned by Callingly. */
          seconds: number | null;
          /** Nullable text field returned by Callingly. */
          duration: string | null;
          /** Nullable integer field returned by Callingly. */
          retry: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_retry: number | null;
          /** Nullable text field returned by Callingly. */
          time_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          from_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          source: string | null;
          /** Nullable text field returned by Callingly. */
          recording_url: string | null;
          /** Nullable text field returned by Callingly. */
          waveform_url: string | null;
          /** Nullable text field returned by Callingly. */
          error_message: string | null;
          /** Nullable text field returned by Callingly. */
          phone_number_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          human_result: string | null;
          /** Agent summary returned in Callingly call payloads. */
          user: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            fname: string | null;
            /** Nullable text field returned by Callingly. */
            lname: string | null;
            /** Nullable text field returned by Callingly. */
            email: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
          } | null;
          /** Lead summary returned in Callingly call payloads. */
          lead: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            label: string | null;
            /** Nullable text field returned by Callingly. */
            fname: string | null;
            /** Nullable text field returned by Callingly. */
            lname: string | null;
            /** Nullable text field returned by Callingly. */
            email: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number_formatted: string | null;
            /** Nullable text field returned by Callingly. */
            source: string | null;
            /** Nullable text field returned by Callingly. */
            crm: string | null;
            /** Nullable text field returned by Callingly. */
            source_id: string | null;
            /** Nullable text field returned by Callingly. */
            deleted_at: string | null;
          } | null;
          /** Nullable text field returned by Callingly. */
          number: string | null;
          /** Nullable text field returned by Callingly. */
          tag: string | null;
          /** Notes returned with the call. */
          notes: Array<unknown>;
          /** Team summary returned by Callingly. */
          profile: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
          } | null;
          /** Nullable integer field returned by Callingly. */
          is_voicemail: number | null;
          /** Nullable integer field returned by Callingly. */
          is_queue: number | null;
          /** Nullable integer field returned by Callingly. */
          is_team_offline: number | null;
          /** Nullable text field returned by Callingly. */
          scheduled_call_type: string | null;
          /** Nullable integer field returned by Callingly. */
          old_lead_owner_id: number | null;
          /** Nullable text field returned by Callingly. */
          transcript: string | null;
          /** Nullable text field returned by Callingly. */
          sales_advice: string | null;
          /** Nullable integer field returned by Callingly. */
          is_error: number | null;
          /** Nullable text field returned by Callingly. */
          error_code: string | null;
        };
      };
    };
    /** Retrieve one Callingly lead by ID. */
    "callingly.get_lead": {
      input: {
        /**
         * Callingly lead identifier.
         * @exclusiveMinimum 0
         */
        leadId: number;
      };
      output: {
        /** Lead record returned by Callingly. */
        lead: {
          /**
           * Callingly lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable integer field returned by Callingly. */
          account_id: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_owner_id: number | null;
          /** Nullable text field returned by Callingly. */
          fname: string | null;
          /** Nullable text field returned by Callingly. */
          lname: string | null;
          /** Nullable text field returned by Callingly. */
          email: string | null;
          /** Nullable text field returned by Callingly. */
          phone_number: string | null;
          /** Nullable text field returned by Callingly. */
          source: string | null;
          /** Nullable text field returned by Callingly. */
          source_id: string | null;
          /** Nullable text field returned by Callingly. */
          created_at: string | null;
          /** Nullable text field returned by Callingly. */
          company: string | null;
          /** Nullable text field returned by Callingly. */
          category: string | null;
          /** Nullable text field returned by Callingly. */
          status: string | null;
          /** Nullable text field returned by Callingly. */
          result: string | null;
          /** Team summary returned by Callingly. */
          team: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
          } | null;
          /** Lead tags returned by Callingly. */
          tags: Array<unknown>;
          /** Nullable text field returned by Callingly. */
          stage: string | null;
          /** Call summaries attached to the lead. */
          calls: Array<{
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            source: string | null;
            /** Nullable integer field returned by Callingly. */
            seconds: number | null;
            /** Nullable text field returned by Callingly. */
            direction: string | null;
            /** Nullable text field returned by Callingly. */
            status: string | null;
            /** Nullable text field returned by Callingly. */
            result: string | null;
            /** Nullable integer field returned by Callingly. */
            agent_retry: number | null;
            /** Nullable integer field returned by Callingly. */
            lead_retry: number | null;
            /** Nullable text field returned by Callingly. */
            started_at: string | null;
            /** Nullable text field returned by Callingly. */
            recording_url: string | null;
          }>;
          /** Nullable text field returned by Callingly. */
          scheduled_call_at: string | null;
          /** Lead owner returned by Callingly. */
          lead_owner: {
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
            /** Nullable text field returned by Callingly. */
            custom_id: string | null;
          } | null;
          /** Nullable integer field returned by Callingly. */
          is_stopped: number | null;
          /** Nullable integer field returned by Callingly. */
          is_blocked: number | null;
        };
      };
    };
    /** Retrieve one Callingly team by ID. */
    "callingly.get_team": {
      input: {
        /**
         * Callingly team identifier.
         * @exclusiveMinimum 0
         */
        teamId: number;
      };
      output: {
        /** Team record returned by Callingly. */
        team: {
          /**
           * Callingly team identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable integer field returned by Callingly. */
          account_id: number | null;
          /** Nullable text field returned by Callingly. */
          name: string | null;
          /** Nullable integer field returned by Callingly. */
          is_record: number | null;
          /** Nullable text field returned by Callingly. */
          call_mode: string | null;
          /** Nullable text field returned by Callingly. */
          whispertext: string | null;
          /** Nullable text field returned by Callingly. */
          post_whispertext: string | null;
          /** Nullable text field returned by Callingly. */
          language: string | null;
          /** Nullable integer field returned by Callingly. */
          delay: number | null;
          /** Nullable integer field returned by Callingly. */
          is_retry: number | null;
          /** Nullable integer field returned by Callingly. */
          retries: number | null;
          /** Retry delays for the team in minutes. */
          retry_schedule: Array<number>;
          /** Nullable integer field returned by Callingly. */
          is_reschedule: number | null;
          /** Nullable integer field returned by Callingly. */
          is_retry_lead: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_retries: number | null;
          /** Lead retry delays for the team in minutes. */
          lead_retry_schedule: Array<number>;
          /** Nullable integer field returned by Callingly. */
          is_sms: number | null;
          /** Nullable text field returned by Callingly. */
          sms_body: string | null;
          /** Nullable text field returned by Callingly. */
          whispertext_voice: string | null;
          /** Nullable boolean field returned by Callingly. */
          is_users_available_for_call: boolean | null;
        };
      };
    };
    /** List Callingly agents for the current account or a specified client account. */
    "callingly.list_agents": {
      input: {
        /**
         * Agency account identifier used when acting on behalf of a client account.
         * @exclusiveMinimum 0
         */
        account_id?: number;
      };
      output: {
        /** Agents returned by Callingly. */
        data: Array<{
          /**
           * Callingly agent identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable integer field returned by Callingly. */
          account_id: number | null;
          /** Nullable text field returned by Callingly. */
          fname: string | null;
          /** Nullable text field returned by Callingly. */
          lname: string | null;
          /** Nullable text field returned by Callingly. */
          phone_number: string | null;
          /** Nullable text field returned by Callingly. */
          ext: string | null;
          /** Nullable integer field returned by Callingly. */
          donotdisturb: number | null;
          /** Nullable integer field returned by Callingly. */
          priority: number | null;
          /** Nullable text field returned by Callingly. */
          timezone: string | null;
          /** Nullable boolean field returned by Callingly. */
          is_available: boolean | null;
        }>;
      };
    };
    /** List Callingly calls with optional date, team, and pagination filters. */
    "callingly.list_calls": {
      input: {
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        start?: string;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        end?: string;
        /**
         * Callingly team identifier.
         * @exclusiveMinimum 0
         */
        teamId?: number;
        /**
         * Agency account identifier used when acting on behalf of a client account.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * One-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Calls returned by Callingly. */
        data: Array<{
          /**
           * Callingly call identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable text field returned by Callingly. */
          started_at: string | null;
          /** Nullable text field returned by Callingly. */
          direction: string | null;
          /** Nullable text field returned by Callingly. */
          status: string | null;
          /** Nullable text field returned by Callingly. */
          status_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          lead_status: string | null;
          /** Nullable text field returned by Callingly. */
          lead_status_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          ring_status: string | null;
          /** Nullable integer field returned by Callingly. */
          seconds: number | null;
          /** Nullable text field returned by Callingly. */
          duration: string | null;
          /** Nullable integer field returned by Callingly. */
          retry: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_retry: number | null;
          /** Nullable text field returned by Callingly. */
          time_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          from_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          source: string | null;
          /** Nullable text field returned by Callingly. */
          recording_url: string | null;
          /** Nullable text field returned by Callingly. */
          waveform_url: string | null;
          /** Nullable text field returned by Callingly. */
          error_message: string | null;
          /** Nullable text field returned by Callingly. */
          phone_number_formatted: string | null;
          /** Nullable text field returned by Callingly. */
          human_result: string | null;
          /** Agent summary returned in Callingly call payloads. */
          user: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            fname: string | null;
            /** Nullable text field returned by Callingly. */
            lname: string | null;
            /** Nullable text field returned by Callingly. */
            email: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
          } | null;
          /** Lead summary returned in Callingly call payloads. */
          lead: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            label: string | null;
            /** Nullable text field returned by Callingly. */
            fname: string | null;
            /** Nullable text field returned by Callingly. */
            lname: string | null;
            /** Nullable text field returned by Callingly. */
            email: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number_formatted: string | null;
            /** Nullable text field returned by Callingly. */
            source: string | null;
            /** Nullable text field returned by Callingly. */
            crm: string | null;
            /** Nullable text field returned by Callingly. */
            source_id: string | null;
            /** Nullable text field returned by Callingly. */
            deleted_at: string | null;
          } | null;
          /** Nullable text field returned by Callingly. */
          number: string | null;
          /** Nullable text field returned by Callingly. */
          tag: string | null;
          /** Notes returned with the call. */
          notes: Array<unknown>;
          /** Team summary returned by Callingly. */
          profile: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
          } | null;
          /** Nullable integer field returned by Callingly. */
          is_voicemail: number | null;
          /** Nullable integer field returned by Callingly. */
          is_queue: number | null;
          /** Nullable integer field returned by Callingly. */
          is_team_offline: number | null;
          /** Nullable text field returned by Callingly. */
          scheduled_call_type: string | null;
          /** Nullable integer field returned by Callingly. */
          old_lead_owner_id: number | null;
          /** Nullable text field returned by Callingly. */
          transcript: string | null;
          /** Nullable text field returned by Callingly. */
          sales_advice: string | null;
          /** Nullable integer field returned by Callingly. */
          is_error: number | null;
          /** Nullable text field returned by Callingly. */
          error_code: string | null;
        }>;
      };
    };
    /** List Callingly leads with optional date or phone number filters. */
    "callingly.list_leads": {
      input: {
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        start?: string;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        end?: string;
        /**
         * Lead phone number to filter by.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * Agency account identifier used when acting on behalf of a client account.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /** Leads returned by Callingly. */
        data: Array<{
          /**
           * Callingly lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable integer field returned by Callingly. */
          account_id: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_owner_id: number | null;
          /** Nullable text field returned by Callingly. */
          fname: string | null;
          /** Nullable text field returned by Callingly. */
          lname: string | null;
          /** Nullable text field returned by Callingly. */
          email: string | null;
          /** Nullable text field returned by Callingly. */
          phone_number: string | null;
          /** Nullable text field returned by Callingly. */
          source: string | null;
          /** Nullable text field returned by Callingly. */
          source_id: string | null;
          /** Nullable text field returned by Callingly. */
          created_at: string | null;
          /** Nullable text field returned by Callingly. */
          company: string | null;
          /** Nullable text field returned by Callingly. */
          category: string | null;
          /** Nullable text field returned by Callingly. */
          status: string | null;
          /** Nullable text field returned by Callingly. */
          result: string | null;
          /** Team summary returned by Callingly. */
          team: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
          } | null;
          /** Lead tags returned by Callingly. */
          tags: Array<unknown>;
          /** Nullable text field returned by Callingly. */
          stage: string | null;
          /** Call summaries attached to the lead. */
          calls: Array<{
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            source: string | null;
            /** Nullable integer field returned by Callingly. */
            seconds: number | null;
            /** Nullable text field returned by Callingly. */
            direction: string | null;
            /** Nullable text field returned by Callingly. */
            status: string | null;
            /** Nullable text field returned by Callingly. */
            result: string | null;
            /** Nullable integer field returned by Callingly. */
            agent_retry: number | null;
            /** Nullable integer field returned by Callingly. */
            lead_retry: number | null;
            /** Nullable text field returned by Callingly. */
            started_at: string | null;
            /** Nullable text field returned by Callingly. */
            recording_url: string | null;
          }>;
          /** Nullable text field returned by Callingly. */
          scheduled_call_at: string | null;
          /** Lead owner returned by Callingly. */
          lead_owner: {
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
            /** Nullable text field returned by Callingly. */
            custom_id: string | null;
          } | null;
          /** Nullable integer field returned by Callingly. */
          is_stopped: number | null;
          /** Nullable integer field returned by Callingly. */
          is_blocked: number | null;
        }>;
      };
    };
    /** List agents assigned to one Callingly team. */
    "callingly.list_team_agents": {
      input: {
        /**
         * Callingly team identifier.
         * @exclusiveMinimum 0
         */
        teamId: number;
      };
      output: {
        /** Agents assigned to the team. */
        agents: Array<{
          /**
           * Callingly agent identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable text field returned by Callingly. */
          name: string | null;
          /** Nullable integer field returned by Callingly. */
          priority: number | null;
          /** Nullable integer field returned by Callingly. */
          cap: number | null;
        }>;
      };
    };
    /** List Callingly teams for the current account or a specified client account. */
    "callingly.list_teams": {
      input: {
        /**
         * Agency account identifier used when acting on behalf of a client account.
         * @exclusiveMinimum 0
         */
        accountId?: number;
      };
      output: {
        /** Teams returned by Callingly. */
        data: Array<{
          /**
           * Callingly team identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable integer field returned by Callingly. */
          account_id: number | null;
          /** Nullable text field returned by Callingly. */
          name: string | null;
          /** Nullable integer field returned by Callingly. */
          is_record: number | null;
          /** Nullable text field returned by Callingly. */
          call_mode: string | null;
          /** Nullable text field returned by Callingly. */
          whispertext: string | null;
          /** Nullable text field returned by Callingly. */
          post_whispertext: string | null;
          /** Nullable text field returned by Callingly. */
          language: string | null;
          /** Nullable integer field returned by Callingly. */
          delay: number | null;
          /** Nullable integer field returned by Callingly. */
          is_retry: number | null;
          /** Nullable integer field returned by Callingly. */
          retries: number | null;
          /** Retry delays for the team in minutes. */
          retry_schedule: Array<number>;
          /** Nullable integer field returned by Callingly. */
          is_reschedule: number | null;
          /** Nullable integer field returned by Callingly. */
          is_retry_lead: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_retries: number | null;
          /** Lead retry delays for the team in minutes. */
          lead_retry_schedule: Array<number>;
          /** Nullable integer field returned by Callingly. */
          is_sms: number | null;
          /** Nullable text field returned by Callingly. */
          sms_body: string | null;
          /** Nullable text field returned by Callingly. */
          whispertext_voice: string | null;
          /** Nullable boolean field returned by Callingly. */
          is_users_available_for_call: boolean | null;
        }>;
      };
    };
    /** Update a Callingly lead by ID. */
    "callingly.update_lead": {
      input: {
        /**
         * Callingly lead identifier.
         * @exclusiveMinimum 0
         */
        leadId: number;
        /**
         * Callingly lead identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Lead first name.
         * @minLength 1
         */
        fname?: string;
        /**
         * Lead last name.
         * @minLength 1
         */
        lname?: string;
        /**
         * Lead email address.
         * @format email
         */
        email?: string;
        /**
         * Lead phone number.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * Lead source label.
         * @minLength 1
         */
        source?: string;
        /**
         * Lead company name.
         * @minLength 1
         */
        company?: string;
        /**
         * Lead status value.
         * @minLength 1
         */
        status?: string;
        /** Lead result value. */
        result?: string | null;
        /** Lead stage value. */
        stage?: string | null;
        /**
         * Whether the lead is stopped: 1 for yes, 0 for no.
         * @minimum 0
         * @maximum 1
         */
        is_stopped?: number;
        /**
         * Whether the lead is blocked: 1 for yes, 0 for no.
         * @minimum 0
         * @maximum 1
         */
        is_blocked?: number;
      };
      output: {
        /** Lead record returned by Callingly. */
        lead: {
          /**
           * Callingly lead identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Nullable integer field returned by Callingly. */
          account_id: number | null;
          /** Nullable integer field returned by Callingly. */
          lead_owner_id: number | null;
          /** Nullable text field returned by Callingly. */
          fname: string | null;
          /** Nullable text field returned by Callingly. */
          lname: string | null;
          /** Nullable text field returned by Callingly. */
          email: string | null;
          /** Nullable text field returned by Callingly. */
          phone_number: string | null;
          /** Nullable text field returned by Callingly. */
          source: string | null;
          /** Nullable text field returned by Callingly. */
          source_id: string | null;
          /** Nullable text field returned by Callingly. */
          created_at: string | null;
          /** Nullable text field returned by Callingly. */
          company: string | null;
          /** Nullable text field returned by Callingly. */
          category: string | null;
          /** Nullable text field returned by Callingly. */
          status: string | null;
          /** Nullable text field returned by Callingly. */
          result: string | null;
          /** Team summary returned by Callingly. */
          team: {
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            name: string | null;
          } | null;
          /** Lead tags returned by Callingly. */
          tags: Array<unknown>;
          /** Nullable text field returned by Callingly. */
          stage: string | null;
          /** Call summaries attached to the lead. */
          calls: Array<{
            /**
             * Numeric identifier returned by Callingly.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Nullable text field returned by Callingly. */
            source: string | null;
            /** Nullable integer field returned by Callingly. */
            seconds: number | null;
            /** Nullable text field returned by Callingly. */
            direction: string | null;
            /** Nullable text field returned by Callingly. */
            status: string | null;
            /** Nullable text field returned by Callingly. */
            result: string | null;
            /** Nullable integer field returned by Callingly. */
            agent_retry: number | null;
            /** Nullable integer field returned by Callingly. */
            lead_retry: number | null;
            /** Nullable text field returned by Callingly. */
            started_at: string | null;
            /** Nullable text field returned by Callingly. */
            recording_url: string | null;
          }>;
          /** Nullable text field returned by Callingly. */
          scheduled_call_at: string | null;
          /** Lead owner returned by Callingly. */
          lead_owner: {
            /** Nullable text field returned by Callingly. */
            name: string | null;
            /** Nullable text field returned by Callingly. */
            phone_number: string | null;
            /** Nullable text field returned by Callingly. */
            custom_id: string | null;
          } | null;
          /** Nullable integer field returned by Callingly. */
          is_stopped: number | null;
          /** Nullable integer field returned by Callingly. */
          is_blocked: number | null;
        };
      };
    };
  }
}
