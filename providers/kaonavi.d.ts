import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Append records to a multiple-record personnel sheet. Single-record sheets are not supported. */
    "kaonavi.append_sheet_records": {
      input: {
        /** Sheet identifier. */
        sheetId: number;
        /**
         * Employee sheet records.
         * @minItems 1
         */
        members: Array<{
          /**
           * Employee code.
           * @minLength 1
           */
          code: string;
          /** Ordered records. For a multiple-record sheet update, provide the complete replacement set for this employee; append uses only the new records. */
          records: Array<{
            /** Custom field values; consult the field layout for types and allowed values. */
            custom_fields?: Array<{
              /** Custom field identifier. */
              id: number;
              /** Field values; multiple values are supported only for checkboxes. Use an empty string to clear a value. */
              values: Array<string>;
            }>;
          }>;
        }>;
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** Submitted task identifier. */
        task_id?: number;
        [key: string]: unknown;
      };
    };
    /** Create employees with their basic fields and department assignments. Consult get_member_layout for required fields. */
    "kaonavi.create_members": {
      input: {
        /**
         * Employees to create or update.
         * @minItems 1
         */
        members: Array<{
          /**
           * Employee code.
           * @minLength 1
           */
          code: string;
          /** Employee name. */
          name?: string;
          /** Phonetic employee name. */
          name_kana?: string;
          /** Employee email address. */
          mail?: string;
          /** Employment start date, or an empty string to clear it. */
          entered_date?: string;
          /** Employment end date, or an empty string to clear it. */
          retired_date?: string;
          /** Gender value from the employee layout. */
          gender?: string;
          /** Birth date, or an empty string to clear it. */
          birthday?: string;
          /** Department assignment; use a code from list_departments. */
          department?: {
            /** Department code; an empty string clears the assignment. */
            code: string;
          };
          /** Secondary department assignments. */
          sub_departments?: Array<{
            /** Department code; an empty string clears the assignment. */
            code: string;
          }>;
          /** Custom field values; consult the field layout for types and allowed values. */
          custom_fields?: Array<{
            /** Custom field identifier. */
            id: number;
            /** Field values; multiple values are supported only for checkboxes. Use an empty string to clear a value. */
            values: Array<string>;
          }>;
        }>;
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** Submitted task identifier. */
        task_id?: number;
        [key: string]: unknown;
      };
    };
    /** Create a Kaonavi login user linked to an employee. */
    "kaonavi.create_user": {
      input: {
        /** New login user. Unspecified account settings use Kaonavi defaults; secure access cannot be configured through this API. */
        user: {
          /** Login email address. */
          email: string;
          /** Linked employee code. */
          member_code: string;
          /** Login password. */
          password: string;
          /** User role. */
          role: {
            /** Role identifier from list_roles. */
            id: number;
          };
          /** Whether the account is enabled; false disables login. */
          is_active?: boolean;
          /** Whether password login is locked. */
          password_locked?: boolean;
          /** Whether smartphone browser access is enabled. */
          use_smartphone?: boolean;
          /** Whether native mobile app access is enabled. */
          use_native_app?: boolean;
        };
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** User identifier. */
        id?: number;
        /** Login email address. */
        email?: string;
        /** Linked employee code, or null. */
        member_code?: string | null;
        /** Assigned role. */
        role?: {
          /** Role identifier. */
          id?: number;
          /** Role name. */
          name?: string;
          /** Role type. */
          type?: string;
          [key: string]: unknown;
        };
        /** Whether the account is enabled. */
        is_active?: boolean;
        /** Whether password login is locked. */
        password_locked?: boolean;
        /** Whether smartphone browser access is enabled. */
        use_smartphone?: boolean;
        /** Whether native mobile app access is enabled. */
        use_native_app?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create multiple Kaonavi login users asynchronously. */
    "kaonavi.create_users": {
      input: {
        /**
         * Users to create.
         * @minItems 1
         */
        users: Array<{
          /** Login email address. */
          email: string;
          /** Linked employee code. */
          member_code: string;
          /** Login password. */
          password: string;
          /** User role. */
          role: {
            /** Role identifier from list_roles. */
            id: number;
          };
          /** Whether the account is enabled; false disables login. */
          is_active?: boolean;
          /** Whether password login is locked. */
          password_locked?: boolean;
          /** Whether smartphone browser access is enabled. */
          use_smartphone?: boolean;
          /** Whether native mobile app access is enabled. */
          use_native_app?: boolean;
        }>;
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** Submitted task identifier. */
        task_id?: number;
        [key: string]: unknown;
      };
    };
    /** Delete a Kaonavi login user. */
    "kaonavi.delete_user": {
      input: {
        /** User identifier. */
        userId: number;
      };
      output: {
        /** Whether the user was deleted. */
        success: boolean;
      };
    };
    /** Get master options for one custom field. */
    "kaonavi.get_enum_options": {
      input: {
        /** Custom field identifier. */
        customFieldId: number;
      };
      output: {
        /** Custom field identifier. */
        id?: number;
        /** Custom field name. */
        name?: string;
        /** Sheet name. */
        sheet_name?: string;
        /** Master options. */
        enum_option_data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get employee field definitions and required-field settings. */
    "kaonavi.get_member_layout": {
      input: {
        /** Include calculation field types. Defaults to false. */
        getCalcType?: boolean;
      };
      output: {
        /** Custom employee field definitions. */
        custom_fields?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get personnel sheet records, optionally filtered by member update date. */
    "kaonavi.get_sheet": {
      input: {
        /** Sheet identifier. */
        sheetId: number;
        /**
         * Only records updated on or after this date (YYYY-MM-DD).
         * @format date
         */
        updatedSince?: string;
      };
      output: {
        /** Sheet identifier. */
        id?: number;
        /** Sheet name. */
        name?: string;
        /** Zero for single-record sheets; one for multiple-record sheets. */
        record_type?: number;
        /** Last update timestamp. */
        updated_at?: string;
        /** Employee sheet records and custom field values. */
        member_data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the field layout of a personnel sheet. */
    "kaonavi.get_sheet_layout": {
      input: {
        /** Sheet identifier. */
        sheetId: number;
        /** Include calculation field types. Defaults to false. */
        getCalcType?: boolean;
      };
      output: {
        /** Sheet identifier. */
        id?: number;
        /** Sheet name. */
        name?: string;
        /** Zero for single-record sheets; one for multiple-record sheets. */
        record_type?: number;
        /** Custom field definitions. */
        custom_fields?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the status and messages of an asynchronous Kaonavi task. */
    "kaonavi.get_task": {
      input: {
        /** Task identifier. */
        taskId: number;
      };
      output: {
        /** Task identifier. */
        id?: number;
        /** Task status: OK, NG, ERROR, WAITING, or RUNNING. */
        status?: string;
        /** Task validation or execution messages. */
        messages?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get a Kaonavi login user by ID. */
    "kaonavi.get_user": {
      input: {
        /** User identifier. */
        userId: number;
      };
      output: {
        /** User identifier. */
        id?: number;
        /** Login email address. */
        email?: string;
        /** Linked employee code, or null. */
        member_code?: string | null;
        /** Last login timestamp, or null. */
        last_login_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** List organizational departments and their parent relationships. */
    "kaonavi.list_departments": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        department_data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List master options for custom fields. */
    "kaonavi.list_enum_options": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        custom_field_data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get employee photo download URLs. Links expire after 15 minutes; request new URLs when needed. */
    "kaonavi.list_member_photo_urls": {
      input: {
        /**
         * Only files updated on or after this date (YYYY-MM-DD).
         * @format date
         */
        updatedSince?: string;
      };
      output: {
        /** Employee photos. */
        member_data?: Array<{
          /**
           * Employee code.
           * @minLength 1
           */
          code?: string;
          /** File name. */
          file_name?: string;
          /** Signed download URL, valid for 15 minutes after issuance. */
          download_url?: string;
          /** Last file update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List employee records, optionally filtered by update date. */
    "kaonavi.list_members": {
      input: {
        /**
         * Only records updated on or after this date (YYYY-MM-DD).
         * @format date
         */
        updatedSince?: string;
      };
      output: {
        /** Last update timestamp. */
        updated_at?: string;
        /** Employee records, including custom fields. */
        member_data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List available Kaonavi user roles. */
    "kaonavi.list_roles": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        role_data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get download URLs for files in a sheet attachment field. Only records containing files are returned. Links expire after 15 minutes. */
    "kaonavi.list_sheet_file_urls": {
      input: {
        /** Sheet identifier. */
        sheetId: number;
        /** Custom field identifier. */
        customFieldId: number;
        /**
         * Only files updated on or after this date (YYYY-MM-DD).
         * @format date
         */
        updatedSince?: string;
      };
      output: {
        /** Employee attachments. */
        member_data?: Array<{
          /**
           * Employee code.
           * @minLength 1
           */
          code?: string;
          /** Attached files. */
          records?: Array<{
            /** File name. */
            file_name?: string;
            /** Signed download URL, valid for 15 minutes after issuance. */
            download_url?: string;
            /** Last file update timestamp. */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List accessible personnel sheet layouts and custom field definitions. */
    "kaonavi.list_sheet_layouts": {
      input: {
        /** Include calculation field types. Defaults to false. */
        getCalcType?: boolean;
      };
      output: {
        /** Sheet layouts. */
        sheets?: Array<{
          /** Sheet identifier. */
          id?: number;
          /** Sheet name. */
          name?: string;
          /** Zero for single-record sheets; one for multiple-record sheets. */
          record_type?: number;
          /** Custom field definitions. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Kaonavi login users and account settings. */
    "kaonavi.list_users": {
      input: Record<string, never>;
      output: {
        /** Returned records. */
        user_data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Update only the supplied employee fields. Omitted fields remain unchanged; use an empty string to clear a value. */
    "kaonavi.update_members": {
      input: {
        /**
         * Employees to create or update.
         * @minItems 1
         */
        members: Array<{
          /**
           * Employee code.
           * @minLength 1
           */
          code: string;
          /** Employee name. */
          name?: string;
          /** Phonetic employee name. */
          name_kana?: string;
          /** Employee email address. */
          mail?: string;
          /** Employment start date, or an empty string to clear it. */
          entered_date?: string;
          /** Employment end date, or an empty string to clear it. */
          retired_date?: string;
          /** Gender value from the employee layout. */
          gender?: string;
          /** Birth date, or an empty string to clear it. */
          birthday?: string;
          /** Department assignment; use a code from list_departments. */
          department?: {
            /** Department code; an empty string clears the assignment. */
            code: string;
          };
          /** Secondary department assignments. */
          sub_departments?: Array<{
            /** Department code; an empty string clears the assignment. */
            code: string;
          }>;
          /** Custom field values; consult the field layout for types and allowed values. */
          custom_fields?: Array<{
            /** Custom field identifier. */
            id: number;
            /** Field values; multiple values are supported only for checkboxes. Use an empty string to clear a value. */
            values: Array<string>;
          }>;
        }>;
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** Submitted task identifier. */
        task_id?: number;
        [key: string]: unknown;
      };
    };
    /** Update a personnel sheet. Single-record sheets preserve omitted fields; multiple-record sheets replace the entire record set for each supplied employee. Other employees remain unchanged. */
    "kaonavi.update_sheet": {
      input: {
        /** Sheet identifier. */
        sheetId: number;
        /**
         * Employee sheet records.
         * @minItems 1
         */
        members: Array<{
          /**
           * Employee code.
           * @minLength 1
           */
          code: string;
          /** Ordered records. For a multiple-record sheet update, provide the complete replacement set for this employee; append uses only the new records. */
          records: Array<{
            /** Custom field values; consult the field layout for types and allowed values. */
            custom_fields?: Array<{
              /** Custom field identifier. */
              id: number;
              /** Field values; multiple values are supported only for checkboxes. Use an empty string to clear a value. */
              values: Array<string>;
            }>;
          }>;
        }>;
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** Submitted task identifier. */
        task_id?: number;
        [key: string]: unknown;
      };
    };
    /** Update a login user, including role, password, access settings, or disabling the account. Omitted fields remain unchanged. */
    "kaonavi.update_user": {
      input: {
        /** User identifier. */
        userId: number;
        /** User fields to update; omitted fields remain unchanged. Secure access cannot be changed through this API. */
        user: {
          /** Login email address. */
          email?: string;
          /** Linked employee code. */
          member_code?: string;
          /** Login password. */
          password?: string;
          /** User role. */
          role?: {
            /** Role identifier from list_roles. */
            id: number;
          };
          /** Whether the account is enabled; false disables login. */
          is_active?: boolean;
          /** Whether password login is locked. */
          password_locked?: boolean;
          /** Whether smartphone browser access is enabled. */
          use_smartphone?: boolean;
          /** Whether native mobile app access is enabled. */
          use_native_app?: boolean;
        };
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** User identifier. */
        id?: number;
        /** Login email address. */
        email?: string;
        /** Linked employee code, or null. */
        member_code?: string | null;
        /** Assigned role. */
        role?: {
          /** Role identifier. */
          id?: number;
          /** Role name. */
          name?: string;
          /** Role type. */
          type?: string;
          [key: string]: unknown;
        };
        /** Whether the account is enabled. */
        is_active?: boolean;
        /** Whether password login is locked. */
        password_locked?: boolean;
        /** Whether smartphone browser access is enabled. */
        use_smartphone?: boolean;
        /** Whether native mobile app access is enabled. */
        use_native_app?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update multiple login users asynchronously, including disabling accounts. Omitted fields remain unchanged. */
    "kaonavi.update_users": {
      input: {
        /**
         * Users to update, identified by user ID.
         * @minItems 1
         */
        users: Array<{
          /** User identifier. */
          id: number;
          /** Login email address. */
          email?: string;
          /** Linked employee code. */
          member_code?: string;
          /** Login password. */
          password?: string;
          /** User role. */
          role?: {
            /** Role identifier from list_roles. */
            id: number;
          };
          /** Whether the account is enabled; false disables login. */
          is_active?: boolean;
          /** Whether password login is locked. */
          password_locked?: boolean;
          /** Whether smartphone browser access is enabled. */
          use_smartphone?: boolean;
          /** Whether native mobile app access is enabled. */
          use_native_app?: boolean;
        }>;
        /** Validate without changing data. Defaults to false. */
        dryRun?: boolean;
      };
      output: {
        /** Submitted task identifier. */
        task_id?: number;
        [key: string]: unknown;
      };
    };
  }
}
