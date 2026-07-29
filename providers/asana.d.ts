import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a custom field setting to an Asana project. */
    "asana.add_project_custom_field": {
      input: (unknown);
      output: {
        /** An Asana custom field setting. */
        customFieldSetting: {
          /** The custom field setting gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** An Asana custom field. */
          custom_field?: {
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            /** The custom field description. */
            description?: string;
            /** The number field precision. */
            precision?: number;
            /** The custom field display format. */
            format?: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none";
            /** The ISO currency code for currency fields. */
            currency_code?: string | null;
            /** The label displayed beside the custom field value. */
            custom_label?: string | null;
            /** Where the custom label is displayed. */
            custom_label_position?: "prefix" | "suffix" | null;
            /** Whether the custom field is available to every workspace container. */
            is_global_to_workspace?: boolean;
            /** Whether changes to the field notify task followers. */
            has_notifications_enabled?: boolean;
            /** The Asana template source identifier for this field. */
            asana_created_field?: string | null;
            /** Whether the custom field value is read-only. */
            is_value_read_only?: boolean;
            /** A compact Asana user. */
            created_by?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            } | null;
            /** Selected people values. */
            people_value?: Array<{
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** Selected resource values. */
            reference_value?: Array<{
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** The HTML custom field text value. */
            html_text_value?: string | null;
            /** The custom field privacy setting. */
            privacy_setting?: "public_with_guests" | "public" | "private";
            /** The default access level for new custom field members. */
            default_access_level?: "admin" | "editor" | "user";
            /** The custom field subtype. */
            resource_subtype?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            [key: string]: unknown;
          };
          /** Whether the custom field is marked important. */
          is_important?: boolean;
          /** A compact Asana resource reference. */
          parent?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana project. */
          project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Add users as followers of an Asana project. */
    "asana.add_project_followers": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * The users to add or remove as followers.
         * @minItems 1
         */
        followers: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Add users as members of an Asana project. */
    "asana.add_project_members": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * The users to add or remove as members.
         * @minItems 1
         */
        members: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Move a task into a section, optionally at a specific position. */
    "asana.add_section_task": {
      input: (unknown);
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Add dependencies to an Asana task. */
    "asana.add_task_dependencies": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Task gids to add as dependencies.
         * @minItems 1
         */
        dependencyIds: Array<string>;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Add dependent tasks to an Asana task. */
    "asana.add_task_dependents": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Task gids to add as dependents.
         * @minItems 1
         */
        dependentIds: Array<string>;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Add followers to an Asana task. */
    "asana.add_task_followers": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Users to add or remove as followers.
         * @minItems 1
         */
        followerIds: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Add an Asana task to a project with optional section placement. */
    "asana.add_task_project": {
      input: (unknown);
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Add a tag to an Asana task. */
    "asana.add_task_tag": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * The tag gid.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Add an existing organization user to an Asana team. */
    "asana.add_team_user": {
      input: {
        /**
         * The Asana team gid.
         * @minLength 1
         */
        teamId: string;
        /**
         * The user gid or email address to add.
         * @minLength 1
         */
        user: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana team membership. */
        team_membership: {
          /** The team membership gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana user. */
          user?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Whether the user is a team administrator. */
          is_admin?: boolean;
          /** Whether the user is an organization guest. */
          is_guest?: boolean;
          /** Whether the user has limited access. */
          is_limited_access?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Add or invite a user to an Asana workspace or organization. */
    "asana.add_workspace_user": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The user gid or email address to add.
         * @minLength 1
         */
        user: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana user. */
        user: {
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Attach a downloaded public file or external resource URL to an Asana object. */
    "asana.create_attachment": {
      input: Record<string, unknown>;
      output: {
        /** An Asana attachment. */
        attachment: {
          /** The attachment gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The attachment subtype. */
          resource_subtype?: string;
          /** The attachment name. */
          name?: string;
          /** The attachment creation timestamp. */
          created_at?: string;
          /** A temporary attachment download URL. */
          download_url?: string | null;
          /** The permanent Asana attachment URL. */
          permanent_url?: string | null;
          /** A URL for viewing the attachment. */
          view_url?: string | null;
          /** The service hosting the attachment. */
          host?: string;
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** The attachment size in bytes. */
          size?: number;
          /** Whether the attachment is connected to an external app. */
          connected_to_app?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create an Asana custom field in a workspace. */
    "asana.create_custom_field": {
      input: (unknown) | {
        /** The enum custom field subtype. */
        resourceSubtype?: "enum";
        [key: string]: unknown;
      } | {
        /** The multi-enum custom field subtype. */
        resourceSubtype?: "multi_enum";
        [key: string]: unknown;
      } | (unknown) & (unknown) | {
        /** The reference custom field subtype. */
        resourceSubtype?: "reference";
        [key: string]: unknown;
      };
      output: {
        /** An Asana custom field. */
        customField: {
          /** The custom field gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The custom field name. */
          name?: string;
          /** The legacy custom field type. */
          type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          /** The custom field enum options. */
          enum_options?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** Whether this custom field value is enabled. */
          enabled?: boolean;
          /** The custom field representation type. */
          representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
          /** The prefix used by custom ID fields. */
          id_prefix?: string | null;
          /** The resource types accepted by a reference custom field. */
          input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
          /** Whether this is a formula custom field. */
          is_formula_field?: boolean;
          /** The selected date value. */
          date_value?: {
            /** The selected date. */
            date?: string;
            /** The selected date-time. */
            date_time?: string;
            [key: string]: unknown;
          } | null;
          /** An Asana custom field enum option. */
          enum_value?: {
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          } | null;
          /** Selected multi-enum values. */
          multi_enum_values?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** The number custom field value. */
          number_value?: number | null;
          /** The text custom field value. */
          text_value?: string | null;
          /** The rendered custom field value. */
          display_value?: string | null;
          /** The custom field description. */
          description?: string;
          /** The number field precision. */
          precision?: number;
          /** The custom field display format. */
          format?: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none";
          /** The ISO currency code for currency fields. */
          currency_code?: string | null;
          /** The label displayed beside the custom field value. */
          custom_label?: string | null;
          /** Where the custom label is displayed. */
          custom_label_position?: "prefix" | "suffix" | null;
          /** Whether the custom field is available to every workspace container. */
          is_global_to_workspace?: boolean;
          /** Whether changes to the field notify task followers. */
          has_notifications_enabled?: boolean;
          /** The Asana template source identifier for this field. */
          asana_created_field?: string | null;
          /** Whether the custom field value is read-only. */
          is_value_read_only?: boolean;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Selected people values. */
          people_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Selected resource values. */
          reference_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The HTML custom field text value. */
          html_text_value?: string | null;
          /** The custom field privacy setting. */
          privacy_setting?: "public_with_guests" | "public" | "private";
          /** The default access level for new custom field members. */
          default_access_level?: "admin" | "editor" | "user";
          /** The custom field subtype. */
          resource_subtype?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          [key: string]: unknown;
        };
      };
    };
    /** Create an option for an Asana enum or multi-enum custom field. */
    "asana.create_custom_field_enum_option": {
      input: (unknown);
      output: {
        /** An Asana custom field enum option. */
        enumOption: {
          /** The enum option gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The enum option name. */
          name?: string;
          /** Whether the enum option is enabled. */
          enabled?: boolean;
          /** The enum option color. */
          color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
          [key: string]: unknown;
        };
      };
    };
    /** Create a project at exactly one workspace or team location. */
    "asana.create_project": {
      input: Record<string, unknown>;
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a section in an Asana project, optionally at a specific position. */
    "asana.create_project_section": {
      input: (unknown);
      output: {
        /** An Asana project section. */
        section: {
          /** The section gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The section name. */
          name?: string;
          /** The section creation timestamp. */
          created_at?: string;
          /** A compact Asana project. */
          project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a direct subtask under an Asana task. */
    "asana.create_subtask": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a tag in an Asana workspace through the generic tag endpoint. */
    "asana.create_tag": {
      input: {
        /**
         * The workspace or organization that will own the tag.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
        /** An official Asana tag color, or null to clear the color. */
        color?: "dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray" | null;
        /** Free-form notes describing the tag. */
        notes?: string;
        /**
         * Users who should follow the tag.
         * @minItems 1
         */
        followerIds?: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana tag. */
        tag: {
          /** The tag gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The tag name. */
          name?: string;
          /** The tag color. */
          color?: string | null;
          /** The tag notes. */
          notes?: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The Asana permalink for the tag. */
          permalink_url?: string;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users following the tag. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create an Asana task in a project, workspace, or parent task. */
    "asana.create_task": {
      input: Record<string, unknown>;
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a comment story on an Asana task. */
    "asana.create_task_story": {
      input: Record<string, unknown>;
      output: {
        /** An Asana story or task comment. */
        story: {
          /** The story gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The story subtype. */
          resource_subtype?: string;
          /** The legacy story type. */
          type?: string;
          /** The plain-text story content. */
          text?: string;
          /** The HTML story content. */
          html_text?: string;
          /** The story creation timestamp. */
          created_at?: string;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Whether the story has been edited. */
          is_edited?: boolean;
          /** Whether the story is pinned. */
          is_pinned?: boolean;
          /** The story sticker name. */
          sticker_name?: "green_checkmark" | "people_dancing" | "dancing_unicorn" | "heart" | "party_popper" | "people_waving_flags" | "splashing_narwhal" | "trophy" | "yeti_riding_unicorn" | "celebrating_people" | "determined_climbers" | "phoenix_spreading_love" | null;
          /** A compact Asana task. */
          target?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create an Asana team within an organization. */
    "asana.create_team": {
      input: {
        /**
         * The organization workspace gid that will own the team.
         * @minLength 1
         */
        organizationId: string;
        /**
         * The team name.
         * @minLength 1
         */
        name: string;
        /** The plain-text team description. */
        description?: string;
        /** The HTML team description. */
        htmlDescription?: string;
        /** The team's visibility within its organization. */
        visibility?: "public" | "request_to_join" | "secret";
        /** Who can edit the team name or description. */
        editTeamNameOrDescriptionAccessLevel?: "all_team_members" | "only_team_admins";
        /** Who can edit team visibility or trash the team. */
        editTeamVisibilityOrTrashTeamAccessLevel?: "all_team_members" | "only_team_admins";
        /** Who can manage team membership invitations. */
        memberInviteManagementAccessLevel?: "all_team_members" | "only_team_admins";
        /** Who can invite guests to the team. */
        guestInviteManagementAccessLevel?: "all_team_members" | "only_team_admins";
        /** Who can manage requests to join the team. */
        joinRequestManagementAccessLevel?: "all_team_members" | "only_team_admins";
        /** Who can remove team members. */
        teamMemberRemovalAccessLevel?: "all_team_members" | "only_team_admins";
        /** Who can create and share content with the team. */
        teamContentManagementAccessLevel?: "no_restriction" | "only_team_admins";
        /** Whether the team is endorsed by the organization. */
        endorsed?: boolean;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana team. */
        team: {
          /** The team gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The team name. */
          name?: string;
          /** The plain-text team description. */
          description?: string;
          /** The HTML team description. */
          html_description?: string;
          /** A compact Asana workspace. */
          organization?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The Asana permalink for the team. */
          permalink_url?: string;
          /** The team's visibility within its organization. */
          visibility?: "public" | "request_to_join" | "secret";
          /** The team administration access level. */
          edit_team_name_or_description_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          edit_team_visibility_or_trash_team_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          member_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          guest_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          join_request_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          team_member_removal_access_level?: "all_team_members" | "only_team_admins";
          /** Who can create and share content with the team. */
          team_content_management_access_level?: "no_restriction" | "only_team_admins";
          /** Whether the team is endorsed by the organization. */
          endorsed?: boolean;
          /** Custom field settings applied to the team. */
          custom_field_settings?: Array<{
            /** The custom field setting gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** Whether the custom field is marked important. */
            is_important?: boolean;
            /** A compact Asana project. */
            parent?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana custom field. */
            custom_field?: {
              /** The custom field gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The custom field name. */
              name?: string;
              /** The legacy custom field type. */
              type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
              /** The custom field enum options. */
              enum_options?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** Whether this custom field value is enabled. */
              enabled?: boolean;
              /** The custom field representation type. */
              representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
              /** The prefix used by custom ID fields. */
              id_prefix?: string | null;
              /** The resource types accepted by a reference custom field. */
              input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
              /** Whether this is a formula custom field. */
              is_formula_field?: boolean;
              /** The selected date value. */
              date_value?: {
                /** The selected date. */
                date?: string;
                /** The selected date-time. */
                date_time?: string;
                [key: string]: unknown;
              } | null;
              /** An Asana custom field enum option. */
              enum_value?: {
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              } | null;
              /** Selected multi-enum values. */
              multi_enum_values?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** The number custom field value. */
              number_value?: number | null;
              /** The text custom field value. */
              text_value?: string | null;
              /** The rendered custom field value. */
              display_value?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a project in an Asana team. */
    "asana.create_team_project": {
      input: (unknown);
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a project in an Asana workspace or organization. */
    "asana.create_workspace_project": {
      input: (unknown);
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a tag in an Asana workspace or organization. */
    "asana.create_workspace_tag": {
      input: {
        /**
         * The workspace or organization that will own the tag.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
        /** An official Asana tag color, or null to clear the color. */
        color?: "dark-pink" | "dark-green" | "dark-blue" | "dark-red" | "dark-teal" | "dark-brown" | "dark-orange" | "dark-purple" | "dark-warm-gray" | "light-pink" | "light-green" | "light-blue" | "light-red" | "light-teal" | "light-brown" | "light-orange" | "light-purple" | "light-warm-gray" | null;
        /** Free-form notes describing the tag. */
        notes?: string;
        /**
         * Users who should follow the tag.
         * @minItems 1
         */
        followerIds?: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana tag. */
        tag: {
          /** The tag gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The tag name. */
          name?: string;
          /** The tag color. */
          color?: string | null;
          /** The tag notes. */
          notes?: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The Asana permalink for the tag. */
          permalink_url?: string;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users following the tag. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete an Asana attachment. */
    "asana.delete_attachment": {
      input: {
        /**
         * The attachment gid.
         * @minLength 1
         */
        attachmentId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Delete an Asana custom field. */
    "asana.delete_custom_field": {
      input: {
        /**
         * The custom field gid.
         * @minLength 1
         */
        customFieldId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Delete an Asana project. */
    "asana.delete_project": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Delete an empty Asana project section. */
    "asana.delete_section": {
      input: {
        /**
         * The Asana section gid.
         * @minLength 1
         */
        sectionId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Delete an Asana story or task comment created by the authenticated user. */
    "asana.delete_story": {
      input: {
        /**
         * The Asana story gid.
         * @minLength 1
         */
        storyId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Delete an Asana tag. */
    "asana.delete_tag": {
      input: {
        /**
         * The Asana tag gid.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Delete an Asana task. */
    "asana.delete_task": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Start an asynchronous job to duplicate an Asana project. */
    "asana.duplicate_project": {
      input: {
        /**
         * The source project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * The name of the duplicated project.
         * @minLength 1
         */
        name: string;
        /**
         * Optional project elements to copy.
         * @minItems 1
         */
        include?: Array<"allocations" | "forms" | "members" | "notes" | "permissions" | "task_assignee" | "task_attachments" | "task_dates" | "task_dependencies" | "task_followers" | "task_notes" | "task_projects" | "task_subtasks" | "task_tags" | "task_templates" | "task_type_default">;
        /** Options for shifting copied task dates. */
        scheduleDates?: Record<string, unknown>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An asynchronous Asana job. */
        job: {
          /** The job gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The job subtype. */
          resource_subtype?: string;
          /** The current job status. */
          status?: "not_started" | "in_progress" | "succeeded" | "failed";
          /** A compact Asana project. */
          new_project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana task. */
          new_task?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Duplicate an Asana task and selected associations. */
    "asana.duplicate_task": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /** The name of the duplicated task. */
        name?: string;
        /**
         * Fields and associations to duplicate.
         * @minItems 1
         */
        include?: Array<"assignee" | "attachments" | "dates" | "dependencies" | "followers" | "notes" | "parent" | "projects" | "subtasks" | "tags">;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An asynchronous Asana job. */
        job: {
          /** The job gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The job subtype. */
          resource_subtype?: string;
          /** The current job status. */
          status?: "not_started" | "in_progress" | "succeeded" | "failed";
          /** A compact Asana project. */
          new_project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana task. */
          new_task?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana attachment by gid. */
    "asana.get_attachment": {
      input: {
        /**
         * The attachment gid.
         * @minLength 1
         */
        attachmentId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana attachment. */
        attachment: {
          /** The attachment gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The attachment subtype. */
          resource_subtype?: string;
          /** The attachment name. */
          name?: string;
          /** The attachment creation timestamp. */
          created_at?: string;
          /** A temporary attachment download URL. */
          download_url?: string | null;
          /** The permanent Asana attachment URL. */
          permanent_url?: string | null;
          /** A URL for viewing the attachment. */
          view_url?: string | null;
          /** The service hosting the attachment. */
          host?: string;
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** The attachment size in bytes. */
          size?: number;
          /** Whether the attachment is connected to an external app. */
          connected_to_app?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana custom field by gid. */
    "asana.get_custom_field": {
      input: {
        /**
         * The custom field gid.
         * @minLength 1
         */
        customFieldId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana custom field. */
        customField: {
          /** The custom field gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The custom field name. */
          name?: string;
          /** The legacy custom field type. */
          type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          /** The custom field enum options. */
          enum_options?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** Whether this custom field value is enabled. */
          enabled?: boolean;
          /** The custom field representation type. */
          representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
          /** The prefix used by custom ID fields. */
          id_prefix?: string | null;
          /** The resource types accepted by a reference custom field. */
          input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
          /** Whether this is a formula custom field. */
          is_formula_field?: boolean;
          /** The selected date value. */
          date_value?: {
            /** The selected date. */
            date?: string;
            /** The selected date-time. */
            date_time?: string;
            [key: string]: unknown;
          } | null;
          /** An Asana custom field enum option. */
          enum_value?: {
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          } | null;
          /** Selected multi-enum values. */
          multi_enum_values?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** The number custom field value. */
          number_value?: number | null;
          /** The text custom field value. */
          text_value?: string | null;
          /** The rendered custom field value. */
          display_value?: string | null;
          /** The custom field description. */
          description?: string;
          /** The number field precision. */
          precision?: number;
          /** The custom field display format. */
          format?: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none";
          /** The ISO currency code for currency fields. */
          currency_code?: string | null;
          /** The label displayed beside the custom field value. */
          custom_label?: string | null;
          /** Where the custom label is displayed. */
          custom_label_position?: "prefix" | "suffix" | null;
          /** Whether the custom field is available to every workspace container. */
          is_global_to_workspace?: boolean;
          /** Whether changes to the field notify task followers. */
          has_notifications_enabled?: boolean;
          /** The Asana template source identifier for this field. */
          asana_created_field?: string | null;
          /** Whether the custom field value is read-only. */
          is_value_read_only?: boolean;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Selected people values. */
          people_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Selected resource values. */
          reference_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The HTML custom field text value. */
          html_text_value?: string | null;
          /** The custom field privacy setting. */
          privacy_setting?: "public_with_guests" | "public" | "private";
          /** The default access level for new custom field members. */
          default_access_level?: "admin" | "editor" | "user";
          /** The custom field subtype. */
          resource_subtype?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana project by gid. */
    "asana.get_project": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get all documented task and milestone counts for an Asana project. */
    "asana.get_project_task_counts": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** Documented task and milestone counts for a project. */
        taskCounts: {
          /**
           * The number of tasks in the project.
           * @minimum 0
           */
          num_tasks: number;
          /**
           * The number of incomplete tasks in the project.
           * @minimum 0
           */
          num_incomplete_tasks: number;
          /**
           * The number of completed tasks in the project.
           * @minimum 0
           */
          num_completed_tasks: number;
          /**
           * The number of milestones in the project.
           * @minimum 0
           */
          num_milestones: number;
          /**
           * The number of incomplete milestones in the project.
           * @minimum 0
           */
          num_incomplete_milestones: number;
          /**
           * The number of completed milestones in the project.
           * @minimum 0
           */
          num_completed_milestones: number;
        };
      };
    };
    /** Get an Asana project section by gid. */
    "asana.get_section": {
      input: {
        /**
         * The Asana section gid.
         * @minLength 1
         */
        sectionId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana project section. */
        section: {
          /** The section gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The section name. */
          name?: string;
          /** The section creation timestamp. */
          created_at?: string;
          /** A compact Asana project. */
          project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana story, including a task comment story, by gid. */
    "asana.get_story": {
      input: {
        /**
         * The Asana story gid.
         * @minLength 1
         */
        storyId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana story or task comment. */
        story: {
          /** The story gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The story subtype. */
          resource_subtype?: string;
          /** The legacy story type. */
          type?: string;
          /** The plain-text story content. */
          text?: string;
          /** The HTML story content. */
          html_text?: string;
          /** The story creation timestamp. */
          created_at?: string;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Whether the story has been edited. */
          is_edited?: boolean;
          /** Whether the story is pinned. */
          is_pinned?: boolean;
          /** The story sticker name. */
          sticker_name?: "green_checkmark" | "people_dancing" | "dancing_unicorn" | "heart" | "party_popper" | "people_waving_flags" | "splashing_narwhal" | "trophy" | "yeti_riding_unicorn" | "celebrating_people" | "determined_climbers" | "phoenix_spreading_love" | null;
          /** A compact Asana task. */
          target?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana tag by gid. */
    "asana.get_tag": {
      input: {
        /**
         * The Asana tag gid.
         * @minLength 1
         */
        tagId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana tag. */
        tag: {
          /** The tag gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The tag name. */
          name?: string;
          /** The tag color. */
          color?: string | null;
          /** The tag notes. */
          notes?: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The Asana permalink for the tag. */
          permalink_url?: string;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users following the tag. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Asana task by gid. */
    "asana.get_task": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana task by workspace and custom ID. */
    "asana.get_task_by_custom_id": {
      input: {
        /**
         * The workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The task custom ID.
         * @minLength 1
         */
        customId: string;
      };
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana team by gid. */
    "asana.get_team": {
      input: {
        /**
         * The Asana team gid.
         * @minLength 1
         */
        teamId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana team. */
        team: {
          /** The team gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The team name. */
          name?: string;
          /** The plain-text team description. */
          description?: string;
          /** The HTML team description. */
          html_description?: string;
          /** A compact Asana workspace. */
          organization?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The Asana permalink for the team. */
          permalink_url?: string;
          /** The team's visibility within its organization. */
          visibility?: "public" | "request_to_join" | "secret";
          /** The team administration access level. */
          edit_team_name_or_description_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          edit_team_visibility_or_trash_team_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          member_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          guest_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          join_request_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          team_member_removal_access_level?: "all_team_members" | "only_team_admins";
          /** Who can create and share content with the team. */
          team_content_management_access_level?: "no_restriction" | "only_team_admins";
          /** Whether the team is endorsed by the organization. */
          endorsed?: boolean;
          /** Custom field settings applied to the team. */
          custom_field_settings?: Array<{
            /** The custom field setting gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** Whether the custom field is marked important. */
            is_important?: boolean;
            /** A compact Asana project. */
            parent?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana custom field. */
            custom_field?: {
              /** The custom field gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The custom field name. */
              name?: string;
              /** The legacy custom field type. */
              type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
              /** The custom field enum options. */
              enum_options?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** Whether this custom field value is enabled. */
              enabled?: boolean;
              /** The custom field representation type. */
              representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
              /** The prefix used by custom ID fields. */
              id_prefix?: string | null;
              /** The resource types accepted by a reference custom field. */
              input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
              /** Whether this is a formula custom field. */
              is_formula_field?: boolean;
              /** The selected date value. */
              date_value?: {
                /** The selected date. */
                date?: string;
                /** The selected date-time. */
                date_time?: string;
                [key: string]: unknown;
              } | null;
              /** An Asana custom field enum option. */
              enum_value?: {
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              } | null;
              /** Selected multi-enum values. */
              multi_enum_values?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** The number custom field value. */
              number_value?: number | null;
              /** The text custom field value. */
              text_value?: string | null;
              /** The rendered custom field value. */
              display_value?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana user by gid, email, or the special identifier "me". */
    "asana.get_user": {
      input: {
        /**
         * The user gid, email address, or special identifier "me".
         * @minLength 1
         */
        userId: string;
        /**
         * The workspace or organization gid used to contextualize the user.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana user. */
        user: {
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Asana workspace or organization by gid. */
    "asana.get_workspace": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana workspace. */
        workspace: {
          /** The workspace gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The workspace name. */
          name?: string;
          /** The workspace email domains. */
          email_domains?: Array<string>;
          /** Whether the workspace is an organization. */
          is_organization?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Read the Enterprise workspace event stream from an optional sync token and return Asana's next sync state. */
    "asana.get_workspace_events": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The sync token returned by the previous workspace events response.
         * @minLength 1
         */
        sync?: string;
      };
      output: {
        /** Workspace events since the supplied sync token. */
        events: Array<{
          /** A compact Asana user. */
          user?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana resource reference. */
          resource?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The legacy event type. */
          type?: string;
          /** The action that produced the event. */
          action?: string;
          /** A compact Asana resource reference. */
          parent?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The event creation timestamp. */
          created_at?: string;
          /** Details about the changed field. */
          change?: {
            /** The change action. */
            action?: string;
            /** The changed field. */
            field?: string;
            /** The new field value. */
            new_value?: unknown;
            /** The value added to the field. */
            added_value?: unknown;
            /** The value removed from the field. */
            removed_value?: unknown;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /**
         * The sync token to use for the next event request.
         * @minLength 1
         */
        sync: string;
        /** Whether more events are available for this sync position. */
        has_more: boolean;
      };
    };
    /** Get a user record in the context of an Asana workspace or organization. */
    "asana.get_workspace_user": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The user gid, email address, or special identifier "me".
         * @minLength 1
         */
        userId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana user. */
        user: {
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Reorder an option in an Asana enum or multi-enum custom field. */
    "asana.insert_custom_field_enum_option": {
      input: Record<string, unknown>;
      output: {
        /** An Asana custom field enum option. */
        enumOption: {
          /** The enum option gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The enum option name. */
          name?: string;
          /** Whether the enum option is enabled. */
          enabled?: boolean;
          /** The enum option color. */
          color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
          [key: string]: unknown;
        };
      };
    };
    /** Move a section before or after another section in the same project. */
    "asana.insert_project_section": {
      input: Record<string, unknown>;
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** List attachments on an Asana task, project, or project brief. */
    "asana.list_attachments": {
      input: {
        /**
         * The parent task, project, or project brief gid.
         * @minLength 1
         */
        parentId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana attachments. */
        attachments: Array<{
          /** The attachment gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The attachment subtype. */
          resource_subtype?: string;
          /** The attachment name. */
          name?: string;
          /** The attachment creation timestamp. */
          created_at?: string;
          /** A temporary attachment download URL. */
          download_url?: string | null;
          /** The permanent Asana attachment URL. */
          permanent_url?: string | null;
          /** A URL for viewing the attachment. */
          view_url?: string | null;
          /** The service hosting the attachment. */
          host?: string;
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** The attachment size in bytes. */
          size?: number;
          /** Whether the attachment is connected to an external app. */
          connected_to_app?: boolean;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List the custom field settings on an Asana project. */
    "asana.list_project_custom_field_settings": {
      input: {
        /**
         * The project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana custom field settings. */
        customFieldSettings: Array<{
          /** The custom field setting gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** An Asana custom field. */
          custom_field?: {
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            /** The custom field description. */
            description?: string;
            /** The number field precision. */
            precision?: number;
            /** The custom field display format. */
            format?: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none";
            /** The ISO currency code for currency fields. */
            currency_code?: string | null;
            /** The label displayed beside the custom field value. */
            custom_label?: string | null;
            /** Where the custom label is displayed. */
            custom_label_position?: "prefix" | "suffix" | null;
            /** Whether the custom field is available to every workspace container. */
            is_global_to_workspace?: boolean;
            /** Whether changes to the field notify task followers. */
            has_notifications_enabled?: boolean;
            /** The Asana template source identifier for this field. */
            asana_created_field?: string | null;
            /** Whether the custom field value is read-only. */
            is_value_read_only?: boolean;
            /** A compact Asana user. */
            created_by?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            } | null;
            /** Selected people values. */
            people_value?: Array<{
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** Selected resource values. */
            reference_value?: Array<{
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** The HTML custom field text value. */
            html_text_value?: string | null;
            /** The custom field privacy setting. */
            privacy_setting?: "public_with_guests" | "public" | "private";
            /** The default access level for new custom field members. */
            default_access_level?: "admin" | "editor" | "user";
            /** The custom field subtype. */
            resource_subtype?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            [key: string]: unknown;
          };
          /** Whether the custom field is marked important. */
          is_important?: boolean;
          /** A compact Asana resource reference. */
          parent?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana project. */
          project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List sections in an Asana project. */
    "asana.list_project_sections": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The project sections. */
        sections: Array<{
          /** The section gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The section name. */
          name?: string;
          /** The section creation timestamp. */
          created_at?: string;
          /** A compact Asana project. */
          project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tasks within an Asana project. */
    "asana.list_project_tasks": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /** Only include tasks incomplete or completed since this timestamp, or use the literal "now". */
        completedSince?: "now" | string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List projects filtered by exactly one workspace or team. */
    "asana.list_projects": {
      input: Record<string, unknown>;
      output: {
        /** The Asana projects. */
        projects: Array<{
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tasks in an Asana section. */
    "asana.list_section_tasks": {
      input: {
        /**
         * The Asana section gid.
         * @minLength 1
         */
        sectionId: string;
        /** Only include tasks incomplete or completed since this timestamp, or use the literal "now". */
        completedSince?: "now" | string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List direct subtasks of an Asana task. */
    "asana.list_subtasks": {
      input: {
        /**
         * The parent task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tasks carrying an Asana tag. */
    "asana.list_tag_tasks": {
      input: {
        /**
         * The Asana tag gid.
         * @minLength 1
         */
        tagId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tags in an Asana workspace through the generic tag endpoint. */
    "asana.list_tags": {
      input: {
        /**
         * The workspace or organization gid used to filter tags.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tags. */
        tags: Array<{
          /** The tag gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The tag name. */
          name?: string;
          /** The tag color. */
          color?: string | null;
          /** The tag notes. */
          notes?: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The Asana permalink for the tag. */
          permalink_url?: string;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users following the tag. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tasks that an Asana task depends on. */
    "asana.list_task_dependencies": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tasks that depend on an Asana task. */
    "asana.list_task_dependents": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List projects associated with a task. */
    "asana.list_task_projects": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana projects. */
        projects: Array<{
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List each story and comment recorded on an Asana task. */
    "asana.list_task_stories": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana stories and task comments. */
        stories: Array<{
          /** The story gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The story subtype. */
          resource_subtype?: string;
          /** The legacy story type. */
          type?: string;
          /** The plain-text story content. */
          text?: string;
          /** The HTML story content. */
          html_text?: string;
          /** The story creation timestamp. */
          created_at?: string;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Whether the story has been edited. */
          is_edited?: boolean;
          /** Whether the story is pinned. */
          is_pinned?: boolean;
          /** The story sticker name. */
          sticker_name?: "green_checkmark" | "people_dancing" | "dancing_unicorn" | "heart" | "party_popper" | "people_waving_flags" | "splashing_narwhal" | "trophy" | "yeti_riding_unicorn" | "celebrating_people" | "determined_climbers" | "phoenix_spreading_love" | null;
          /** A compact Asana task. */
          target?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List the Asana tags attached to a task. */
    "asana.list_task_tags": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tags. */
        tags: Array<{
          /** The tag gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The tag name. */
          name?: string;
          /** The tag color. */
          color?: string | null;
          /** The tag notes. */
          notes?: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The Asana permalink for the tag. */
          permalink_url?: string;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users following the tag. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tasks matching Asana's general task filters. */
    "asana.list_tasks": {
      input: Record<string, unknown>;
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List the custom field settings on an Asana team. Asana returns this collection without pagination. */
    "asana.list_team_custom_field_settings": {
      input: {
        /**
         * The team gid.
         * @minLength 1
         */
        teamId: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana custom field settings. */
        customFieldSettings: Array<{
          /** The custom field setting gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** An Asana custom field. */
          custom_field?: {
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            /** The custom field description. */
            description?: string;
            /** The number field precision. */
            precision?: number;
            /** The custom field display format. */
            format?: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none";
            /** The ISO currency code for currency fields. */
            currency_code?: string | null;
            /** The label displayed beside the custom field value. */
            custom_label?: string | null;
            /** Where the custom label is displayed. */
            custom_label_position?: "prefix" | "suffix" | null;
            /** Whether the custom field is available to every workspace container. */
            is_global_to_workspace?: boolean;
            /** Whether changes to the field notify task followers. */
            has_notifications_enabled?: boolean;
            /** The Asana template source identifier for this field. */
            asana_created_field?: string | null;
            /** Whether the custom field value is read-only. */
            is_value_read_only?: boolean;
            /** A compact Asana user. */
            created_by?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            } | null;
            /** Selected people values. */
            people_value?: Array<{
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** Selected resource values. */
            reference_value?: Array<{
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** The HTML custom field text value. */
            html_text_value?: string | null;
            /** The custom field privacy setting. */
            privacy_setting?: "public_with_guests" | "public" | "private";
            /** The default access level for new custom field members. */
            default_access_level?: "admin" | "editor" | "user";
            /** The custom field subtype. */
            resource_subtype?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            [key: string]: unknown;
          };
          /** Whether the custom field is marked important. */
          is_important?: boolean;
          /** A compact Asana resource reference. */
          parent?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana project. */
          project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List projects shared with a team. */
    "asana.list_team_projects": {
      input: {
        /**
         * The Asana team gid.
         * @minLength 1
         */
        teamId: string;
        /** Only return projects with this archived state. */
        archived?: boolean;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana projects. */
        projects: Array<{
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List users who belong to an Asana team. */
    "asana.list_team_users": {
      input: {
        /**
         * The Asana team gid.
         * @minLength 1
         */
        teamId: string;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana users. */
        users: Array<{
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List a user's favorite Asana resources within a workspace. */
    "asana.list_user_favorites": {
      input: {
        /**
         * The user gid or special identifier "me"; Asana currently supports only "me".
         * @minLength 1
         */
        userId: string;
        /**
         * The workspace containing the favorite resources.
         * @minLength 1
         */
        workspaceId: string;
        /** The favorite resource type to return. */
        resourceType: "portfolio" | "project" | "project_template" | "tag" | "task" | "user";
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The user's favorite Asana resources. */
        favorites: Array<{
          /** The resource gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tasks in an Asana user task list. */
    "asana.list_user_task_list_tasks": {
      input: {
        /**
         * The Asana user task list gid.
         * @minLength 1
         */
        userTaskListId: string;
        /** Only include tasks incomplete or completed since this timestamp, or use the literal "now". */
        completedSince?: "now" | string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List the teams to which an Asana user belongs in an organization. */
    "asana.list_user_teams": {
      input: {
        /**
         * The user gid, email address, or special identifier "me".
         * @minLength 1
         */
        userId: string;
        /**
         * The organization workspace gid used to filter memberships.
         * @minLength 1
         */
        organizationId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana teams. */
        teams: Array<{
          /** The team gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The team name. */
          name?: string;
          /** The plain-text team description. */
          description?: string;
          /** The HTML team description. */
          html_description?: string;
          /** A compact Asana workspace. */
          organization?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The Asana permalink for the team. */
          permalink_url?: string;
          /** The team's visibility within its organization. */
          visibility?: "public" | "request_to_join" | "secret";
          /** The team administration access level. */
          edit_team_name_or_description_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          edit_team_visibility_or_trash_team_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          member_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          guest_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          join_request_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          team_member_removal_access_level?: "all_team_members" | "only_team_admins";
          /** Who can create and share content with the team. */
          team_content_management_access_level?: "no_restriction" | "only_team_admins";
          /** Whether the team is endorsed by the organization. */
          endorsed?: boolean;
          /** Custom field settings applied to the team. */
          custom_field_settings?: Array<{
            /** The custom field setting gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** Whether the custom field is marked important. */
            is_important?: boolean;
            /** A compact Asana project. */
            parent?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana custom field. */
            custom_field?: {
              /** The custom field gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The custom field name. */
              name?: string;
              /** The legacy custom field type. */
              type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
              /** The custom field enum options. */
              enum_options?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** Whether this custom field value is enabled. */
              enabled?: boolean;
              /** The custom field representation type. */
              representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
              /** The prefix used by custom ID fields. */
              id_prefix?: string | null;
              /** The resource types accepted by a reference custom field. */
              input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
              /** Whether this is a formula custom field. */
              is_formula_field?: boolean;
              /** The selected date value. */
              date_value?: {
                /** The selected date. */
                date?: string;
                /** The selected date-time. */
                date_time?: string;
                [key: string]: unknown;
              } | null;
              /** An Asana custom field enum option. */
              enum_value?: {
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              } | null;
              /** Selected multi-enum values. */
              multi_enum_values?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** The number custom field value. */
              number_value?: number | null;
              /** The text custom field value. */
              text_value?: string | null;
              /** The rendered custom field value. */
              display_value?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List users visible to the connected account, optionally filtered by workspace or team. */
    "asana.list_users": {
      input: {
        /**
         * The workspace or organization gid to filter users on.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * The team gid to filter users on.
         * @minLength 1
         */
        teamId?: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana users. */
        users: Array<{
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List the custom fields in an Asana workspace. */
    "asana.list_workspace_custom_fields": {
      input: {
        /**
         * The workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana custom fields. */
        customFields: Array<{
          /** The custom field gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The custom field name. */
          name?: string;
          /** The legacy custom field type. */
          type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          /** The custom field enum options. */
          enum_options?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** Whether this custom field value is enabled. */
          enabled?: boolean;
          /** The custom field representation type. */
          representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
          /** The prefix used by custom ID fields. */
          id_prefix?: string | null;
          /** The resource types accepted by a reference custom field. */
          input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
          /** Whether this is a formula custom field. */
          is_formula_field?: boolean;
          /** The selected date value. */
          date_value?: {
            /** The selected date. */
            date?: string;
            /** The selected date-time. */
            date_time?: string;
            [key: string]: unknown;
          } | null;
          /** An Asana custom field enum option. */
          enum_value?: {
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          } | null;
          /** Selected multi-enum values. */
          multi_enum_values?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** The number custom field value. */
          number_value?: number | null;
          /** The text custom field value. */
          text_value?: string | null;
          /** The rendered custom field value. */
          display_value?: string | null;
          /** The custom field description. */
          description?: string;
          /** The number field precision. */
          precision?: number;
          /** The custom field display format. */
          format?: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none";
          /** The ISO currency code for currency fields. */
          currency_code?: string | null;
          /** The label displayed beside the custom field value. */
          custom_label?: string | null;
          /** Where the custom label is displayed. */
          custom_label_position?: "prefix" | "suffix" | null;
          /** Whether the custom field is available to every workspace container. */
          is_global_to_workspace?: boolean;
          /** Whether changes to the field notify task followers. */
          has_notifications_enabled?: boolean;
          /** The Asana template source identifier for this field. */
          asana_created_field?: string | null;
          /** Whether the custom field value is read-only. */
          is_value_read_only?: boolean;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Selected people values. */
          people_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Selected resource values. */
          reference_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The HTML custom field text value. */
          html_text_value?: string | null;
          /** The custom field privacy setting. */
          privacy_setting?: "public_with_guests" | "public" | "private";
          /** The default access level for new custom field members. */
          default_access_level?: "admin" | "editor" | "user";
          /** The custom field subtype. */
          resource_subtype?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List projects in an Asana workspace or organization. */
    "asana.list_workspace_projects": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /** Only return projects with this archived state. */
        archived?: boolean;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana projects. */
        projects: Array<{
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List tags in an Asana workspace or organization. */
    "asana.list_workspace_tags": {
      input: {
        /**
         * The Asana workspace or organization gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana tags. */
        tags: Array<{
          /** The tag gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The tag name. */
          name?: string;
          /** The tag color. */
          color?: string | null;
          /** The tag notes. */
          notes?: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The Asana permalink for the tag. */
          permalink_url?: string;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users following the tag. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List teams in an Asana organization workspace. */
    "asana.list_workspace_teams": {
      input: {
        /**
         * The Asana organization workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana teams. */
        teams: Array<{
          /** The team gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The team name. */
          name?: string;
          /** The plain-text team description. */
          description?: string;
          /** The HTML team description. */
          html_description?: string;
          /** A compact Asana workspace. */
          organization?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The Asana permalink for the team. */
          permalink_url?: string;
          /** The team's visibility within its organization. */
          visibility?: "public" | "request_to_join" | "secret";
          /** The team administration access level. */
          edit_team_name_or_description_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          edit_team_visibility_or_trash_team_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          member_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          guest_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          join_request_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          team_member_removal_access_level?: "all_team_members" | "only_team_admins";
          /** Who can create and share content with the team. */
          team_content_management_access_level?: "no_restriction" | "only_team_admins";
          /** Whether the team is endorsed by the organization. */
          endorsed?: boolean;
          /** Custom field settings applied to the team. */
          custom_field_settings?: Array<{
            /** The custom field setting gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** Whether the custom field is marked important. */
            is_important?: boolean;
            /** A compact Asana project. */
            parent?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana custom field. */
            custom_field?: {
              /** The custom field gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The custom field name. */
              name?: string;
              /** The legacy custom field type. */
              type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
              /** The custom field enum options. */
              enum_options?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** Whether this custom field value is enabled. */
              enabled?: boolean;
              /** The custom field representation type. */
              representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
              /** The prefix used by custom ID fields. */
              id_prefix?: string | null;
              /** The resource types accepted by a reference custom field. */
              input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
              /** Whether this is a formula custom field. */
              is_formula_field?: boolean;
              /** The selected date value. */
              date_value?: {
                /** The selected date. */
                date?: string;
                /** The selected date-time. */
                date_time?: string;
                [key: string]: unknown;
              } | null;
              /** An Asana custom field enum option. */
              enum_value?: {
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              } | null;
              /** Selected multi-enum values. */
              multi_enum_values?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** The number custom field value. */
              number_value?: number | null;
              /** The text custom field value. */
              text_value?: string | null;
              /** The rendered custom field value. */
              display_value?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List users in an Asana workspace or organization. */
    "asana.list_workspace_users": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Asana users. */
        users: Array<{
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** List the Asana workspaces and organizations visible to the connected account. */
    "asana.list_workspaces": {
      input: {
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by a previous Asana response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The visible Asana workspaces. */
        workspaces: Array<{
          /** The workspace gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The workspace name. */
          name?: string;
          /** The workspace email domains. */
          email_domains?: Array<string>;
          /** Whether the workspace is an organization. */
          is_organization?: boolean;
          [key: string]: unknown;
        }>;
        /** Opaque pagination cursor for the next Asana page, or null when there is no next page. */
        nextCursor: string | null;
      };
    };
    /** Remove a custom field setting from an Asana project. */
    "asana.remove_project_custom_field": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * The custom field gid to remove.
         * @minLength 1
         */
        customFieldId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Remove users from an Asana project's followers. */
    "asana.remove_project_followers": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * The users to add or remove as followers.
         * @minItems 1
         */
        followers: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Remove users from an Asana project. */
    "asana.remove_project_members": {
      input: {
        /**
         * The Asana project gid.
         * @minLength 1
         */
        projectId: string;
        /**
         * The users to add or remove as members.
         * @minItems 1
         */
        members: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Remove dependencies from an Asana task. */
    "asana.remove_task_dependencies": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Task gids to remove as dependencies.
         * @minItems 1
         */
        dependencyIds: Array<string>;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Remove dependent tasks from an Asana task. */
    "asana.remove_task_dependents": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Task gids to remove as dependents.
         * @minItems 1
         */
        dependentIds: Array<string>;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Remove followers from an Asana task. */
    "asana.remove_task_followers": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * Users to add or remove as followers.
         * @minItems 1
         */
        followerIds: Array<string>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Remove an Asana task from a project. */
    "asana.remove_task_project": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * The project gid.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Remove a tag from an Asana task. */
    "asana.remove_task_tag": {
      input: {
        /**
         * The Asana task gid.
         * @minLength 1
         */
        taskId: string;
        /**
         * The tag gid.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Remove a user from an Asana team. */
    "asana.remove_team_user": {
      input: {
        /**
         * The Asana team gid.
         * @minLength 1
         */
        teamId: string;
        /**
         * The user gid or email address to remove.
         * @minLength 1
         */
        user: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Remove a user from an Asana workspace or organization. */
    "asana.remove_workspace_user": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The user gid or email address to remove.
         * @minLength 1
         */
        user: string;
      };
      output: {
        /** Whether the Asana operation completed successfully. */
        success: true;
      };
    };
    /** Search projects in a workspace using Asana's documented project filters. Asana does not paginate search results; use limit to cap the page size. */
    "asana.search_workspace_projects": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /** Full-text search over project names. */
        text?: string;
        /** The field used to sort matching projects. */
        sortBy?: "due_date" | "created_at" | "completed_at" | "modified_at" | "relevance";
        /** Whether to sort results in ascending order. */
        sortAscending?: boolean;
        /** Filter on project completion status. */
        completed?: boolean;
        /**
         * Maximum number of items to return in one Asana page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Team gids to match.
         * @minItems 1
         */
        teamIds?: Array<string>;
        /**
         * Owner gids to match.
         * @minItems 1
         */
        ownerIds?: Array<string>;
        /**
         * Member gids to match.
         * @minItems 1
         */
        memberIds?: Array<string>;
        /**
         * Member gids to exclude.
         * @minItems 1
         */
        excludedMemberIds?: Array<string>;
        /**
         * Portfolio gids to match.
         * @minItems 1
         */
        portfolioIds?: Array<string>;
        /**
         * Match projects completed on this date, or null for no date.
         * @format date
         */
        completedOn?: string | null;
        /**
         * Match projects completed before this date.
         * @format date
         */
        completedOnBefore?: string;
        /**
         * Match projects completed after this date.
         * @format date
         */
        completedOnAfter?: string;
        /**
         * Match projects completed before this timestamp.
         * @format date-time
         */
        completedAtBefore?: string;
        /**
         * Match projects completed after this timestamp.
         * @format date-time
         */
        completedAtAfter?: string;
        /**
         * Match projects created on this date, or null for no date.
         * @format date
         */
        createdOn?: string | null;
        /**
         * Match projects created before this date.
         * @format date
         */
        createdOnBefore?: string;
        /**
         * Match projects created after this date.
         * @format date
         */
        createdOnAfter?: string;
        /**
         * Match projects created before this timestamp.
         * @format date-time
         */
        createdAtBefore?: string;
        /**
         * Match projects created after this timestamp.
         * @format date-time
         */
        createdAtAfter?: string;
        /**
         * Match projects due on this date, or null for no date.
         * @format date
         */
        dueOn?: string | null;
        /**
         * Match projects due before this date.
         * @format date
         */
        dueOnBefore?: string;
        /**
         * Match projects due after this date.
         * @format date
         */
        dueOnAfter?: string;
        /**
         * Match projects due before this timestamp.
         * @format date-time
         */
        dueAtBefore?: string;
        /**
         * Match projects due after this timestamp.
         * @format date-time
         */
        dueAtAfter?: string;
        /**
         * Match projects starting on this date, or null for no date.
         * @format date
         */
        startOn?: string | null;
        /**
         * Match projects starting before this date.
         * @format date
         */
        startOnBefore?: string;
        /**
         * Match projects starting after this date.
         * @format date
         */
        startOnAfter?: string;
        /**
         * Project custom field filters.
         * @minItems 1
         */
        customFieldFilters?: Array<Record<string, unknown>>;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The matching Asana projects. */
        projects: Array<{
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search tasks in an Asana workspace using advanced filters. */
    "asana.search_workspace_tasks": {
      input: {
        /**
         * The workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Maximum number of unstable search results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Text contained in the task name or description. */
        text?: string;
        /** The task subtype. */
        resourceSubtype?: "default_task" | "milestone" | "approval" | "custom";
        /**
         * Assignees to include.
         * @minItems 1
         */
        assigneeIds?: Array<string>;
        /**
         * Assignees to exclude.
         * @minItems 1
         */
        excludedAssigneeIds?: Array<string>;
        /**
         * Portfolios whose projects contain the task.
         * @minItems 1
         */
        portfolioIds?: Array<string>;
        /**
         * Projects to include with OR semantics.
         * @minItems 1
         */
        projectIds?: Array<string>;
        /**
         * Projects to exclude.
         * @minItems 1
         */
        excludedProjectIds?: Array<string>;
        /**
         * Projects all of which must contain the task.
         * @minItems 1
         */
        allProjectIds?: Array<string>;
        /**
         * Sections to include with OR semantics.
         * @minItems 1
         */
        sectionIds?: Array<string>;
        /**
         * Sections to exclude.
         * @minItems 1
         */
        excludedSectionIds?: Array<string>;
        /**
         * Sections all of which must contain the task.
         * @minItems 1
         */
        allSectionIds?: Array<string>;
        /**
         * Tags to include with OR semantics.
         * @minItems 1
         */
        tagIds?: Array<string>;
        /**
         * Tags to exclude.
         * @minItems 1
         */
        excludedTagIds?: Array<string>;
        /**
         * Tags all of which must be on the task.
         * @minItems 1
         */
        allTagIds?: Array<string>;
        /**
         * Teams whose projects contain the task.
         * @minItems 1
         */
        teamIds?: Array<string>;
        /**
         * Followers to include.
         * @minItems 1
         */
        followerIds?: Array<string>;
        /**
         * Followers to exclude.
         * @minItems 1
         */
        excludedFollowerIds?: Array<string>;
        /**
         * Task creators to include.
         * @minItems 1
         */
        creatorIds?: Array<string>;
        /**
         * Task creators to exclude.
         * @minItems 1
         */
        excludedCreatorIds?: Array<string>;
        /**
         * Assigners to include.
         * @minItems 1
         */
        assignedByIds?: Array<string>;
        /**
         * Assigners to exclude.
         * @minItems 1
         */
        excludedAssignedByIds?: Array<string>;
        /**
         * Users whose likes exclude a task.
         * @minItems 1
         */
        excludedLikerIds?: Array<string>;
        /**
         * Users whose comments exclude a task.
         * @minItems 1
         */
        excludedCommenterIds?: Array<string>;
        /**
         * An exact due date, or null for tasks without one.
         * @format date
         */
        dueOn?: string | null;
        /**
         * Return tasks due before this date.
         * @format date
         */
        dueOnBefore?: string;
        /**
         * Return tasks due after this date.
         * @format date
         */
        dueOnAfter?: string;
        /**
         * Return tasks due before this timestamp.
         * @format date-time
         */
        dueAtBefore?: string;
        /**
         * Return tasks due after this timestamp.
         * @format date-time
         */
        dueAtAfter?: string;
        /**
         * An exact start date, or null for tasks without one.
         * @format date
         */
        startOn?: string | null;
        /**
         * Return tasks starting before this date.
         * @format date
         */
        startOnBefore?: string;
        /**
         * Return tasks starting after this date.
         * @format date
         */
        startOnAfter?: string;
        /**
         * An exact creation date, or null when unset.
         * @format date
         */
        createdOn?: string | null;
        /**
         * Return tasks created before this date.
         * @format date
         */
        createdOnBefore?: string;
        /**
         * Return tasks created after this date.
         * @format date
         */
        createdOnAfter?: string;
        /**
         * Return tasks created before this timestamp.
         * @format date-time
         */
        createdAtBefore?: string;
        /**
         * Return tasks created after this timestamp.
         * @format date-time
         */
        createdAtAfter?: string;
        /**
         * An exact completion date, or null for incomplete tasks.
         * @format date
         */
        completedOn?: string | null;
        /**
         * Return tasks completed before this date.
         * @format date
         */
        completedOnBefore?: string;
        /**
         * Return tasks completed after this date.
         * @format date
         */
        completedOnAfter?: string;
        /**
         * Return tasks completed before this timestamp.
         * @format date-time
         */
        completedAtBefore?: string;
        /**
         * Return tasks completed after this timestamp.
         * @format date-time
         */
        completedAtAfter?: string;
        /**
         * An exact modification date, or null when unset.
         * @format date
         */
        modifiedOn?: string | null;
        /**
         * Return tasks modified before this date.
         * @format date
         */
        modifiedOnBefore?: string;
        /**
         * Return tasks modified after this date.
         * @format date
         */
        modifiedOnAfter?: string;
        /**
         * Return tasks modified before this timestamp.
         * @format date-time
         */
        modifiedAtBefore?: string;
        /**
         * Return tasks modified after this timestamp.
         * @format date-time
         */
        modifiedAtAfter?: string;
        /** Filter to incomplete tasks with dependents. */
        isBlocking?: boolean;
        /** Filter to tasks with incomplete dependencies. */
        isBlocked?: boolean;
        /** Filter by whether tasks have attachments. */
        hasAttachment?: boolean;
        /** Filter by completion state. */
        completed?: boolean;
        /** Filter by whether tasks are subtasks. */
        isSubtask?: boolean;
        /** The result sort field. */
        sortBy?: "due_date" | "created_at" | "completed_at" | "likes" | "modified_at" | "relevance";
        /** Whether results are sorted ascending. */
        sortAscending?: boolean;
        /**
         * Custom field filters.
         * @minItems 1
         */
        customFieldFilters?: Array<Record<string, unknown>>;
        /** Filter custom tasks by one custom task type status option. */
        customTypeFilter?: {
          /**
           * The custom task type gid.
           * @minLength 1
           */
          customTypeId: string;
          /**
           * The custom task type status option gid.
           * @minLength 1
           */
          statusOptionId: string;
        };
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The matching Asana tasks. */
        tasks: Array<{
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Set, change, or remove an Asana task's parent. */
    "asana.set_task_parent": {
      input: (unknown) & (unknown);
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update an Asana custom field. */
    "asana.update_custom_field": {
      input: Record<string, unknown>;
      output: {
        /** An Asana custom field. */
        customField: {
          /** The custom field gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The custom field name. */
          name?: string;
          /** The legacy custom field type. */
          type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          /** The custom field enum options. */
          enum_options?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** Whether this custom field value is enabled. */
          enabled?: boolean;
          /** The custom field representation type. */
          representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
          /** The prefix used by custom ID fields. */
          id_prefix?: string | null;
          /** The resource types accepted by a reference custom field. */
          input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
          /** Whether this is a formula custom field. */
          is_formula_field?: boolean;
          /** The selected date value. */
          date_value?: {
            /** The selected date. */
            date?: string;
            /** The selected date-time. */
            date_time?: string;
            [key: string]: unknown;
          } | null;
          /** An Asana custom field enum option. */
          enum_value?: {
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          } | null;
          /** Selected multi-enum values. */
          multi_enum_values?: Array<{
            /** The enum option gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The enum option name. */
            name?: string;
            /** Whether the enum option is enabled. */
            enabled?: boolean;
            /** The enum option color. */
            color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
            [key: string]: unknown;
          }>;
          /** The number custom field value. */
          number_value?: number | null;
          /** The text custom field value. */
          text_value?: string | null;
          /** The rendered custom field value. */
          display_value?: string | null;
          /** The custom field description. */
          description?: string;
          /** The number field precision. */
          precision?: number;
          /** The custom field display format. */
          format?: "currency" | "identifier" | "percentage" | "custom" | "duration" | "none";
          /** The ISO currency code for currency fields. */
          currency_code?: string | null;
          /** The label displayed beside the custom field value. */
          custom_label?: string | null;
          /** Where the custom label is displayed. */
          custom_label_position?: "prefix" | "suffix" | null;
          /** Whether the custom field is available to every workspace container. */
          is_global_to_workspace?: boolean;
          /** Whether changes to the field notify task followers. */
          has_notifications_enabled?: boolean;
          /** The Asana template source identifier for this field. */
          asana_created_field?: string | null;
          /** Whether the custom field value is read-only. */
          is_value_read_only?: boolean;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Selected people values. */
          people_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Selected resource values. */
          reference_value?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The HTML custom field text value. */
          html_text_value?: string | null;
          /** The custom field privacy setting. */
          privacy_setting?: "public_with_guests" | "public" | "private";
          /** The default access level for new custom field members. */
          default_access_level?: "admin" | "editor" | "user";
          /** The custom field subtype. */
          resource_subtype?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
          [key: string]: unknown;
        };
      };
    };
    /** Update an Asana enum option. */
    "asana.update_custom_field_enum_option": {
      input: Record<string, unknown>;
      output: {
        /** An Asana custom field enum option. */
        enumOption: {
          /** The enum option gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The enum option name. */
          name?: string;
          /** Whether the enum option is enabled. */
          enabled?: boolean;
          /** The enum option color. */
          color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
          [key: string]: unknown;
        };
      };
    };
    /** Update one or more writable fields on an Asana project. */
    "asana.update_project": {
      input: Record<string, unknown>;
      output: {
        /** An Asana project. */
        project: {
          /** The project gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The project name. */
          name?: string;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is completed. */
          completed?: boolean;
          /** The project completion timestamp. */
          completed_at?: string | null;
          /** A compact Asana user. */
          completed_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The project color. */
          color?: string | null;
          /** The project icon. */
          icon?: string | null;
          /** The project notes. */
          notes?: string;
          /** The project notes formatted as HTML. */
          html_notes?: string;
          /** The project due date. */
          due_on?: string | null;
          /** The project start date. */
          start_on?: string | null;
          /** The project default view. */
          default_view?: string;
          /** The project privacy setting. */
          privacy_setting?: string;
          /** The project default access level. */
          default_access_level?: string;
          /** The minimum project access level required to customize the project. */
          minimum_access_level_for_customization?: string;
          /** The minimum project access level required to share the project. */
          minimum_access_level_for_sharing?: string;
          /** The project creation timestamp. */
          created_at?: string;
          /** The project update timestamp. */
          modified_at?: string;
          /** The project permalink URL. */
          permalink_url?: string;
          /** A compact Asana user. */
          owner?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana team. */
          team?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users who are members of the project. */
          members?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Users following the project. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Rename an Asana project section. */
    "asana.update_section": {
      input: {
        /**
         * The Asana section gid.
         * @minLength 1
         */
        sectionId: string;
        /**
         * The new section name.
         * @minLength 1
         */
        name: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana project section. */
        section: {
          /** The section gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The section name. */
          name?: string;
          /** The section creation timestamp. */
          created_at?: string;
          /** A compact Asana project. */
          project?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update the text, HTML, or pinned state of an Asana comment story. */
    "asana.update_story": {
      input: Record<string, unknown>;
      output: {
        /** An Asana story or task comment. */
        story: {
          /** The story gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The story subtype. */
          resource_subtype?: string;
          /** The legacy story type. */
          type?: string;
          /** The plain-text story content. */
          text?: string;
          /** The HTML story content. */
          html_text?: string;
          /** The story creation timestamp. */
          created_at?: string;
          /** A compact Asana user. */
          created_by?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Whether the story has been edited. */
          is_edited?: boolean;
          /** Whether the story is pinned. */
          is_pinned?: boolean;
          /** The story sticker name. */
          sticker_name?: "green_checkmark" | "people_dancing" | "dancing_unicorn" | "heart" | "party_popper" | "people_waving_flags" | "splashing_narwhal" | "trophy" | "yeti_riding_unicorn" | "celebrating_people" | "determined_climbers" | "phoenix_spreading_love" | null;
          /** A compact Asana task. */
          target?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update one or more mutable fields on an Asana tag. */
    "asana.update_tag": {
      input: Record<string, unknown>;
      output: {
        /** An Asana tag. */
        tag: {
          /** The tag gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The tag name. */
          name?: string;
          /** The tag color. */
          color?: string | null;
          /** The tag notes. */
          notes?: string;
          /** The tag creation timestamp. */
          created_at?: string;
          /** The Asana permalink for the tag. */
          permalink_url?: string;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Users following the tag. */
          followers?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Asana task. */
    "asana.update_task": {
      input: Record<string, unknown>;
      output: {
        /** An Asana task. */
        task: {
          /** The task gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The task name. */
          name?: string;
          /** The task subtype. */
          resource_subtype?: string;
          /** Whether the task is completed. */
          completed?: boolean;
          /** The task notes. */
          notes?: string;
          /** The task due date. */
          due_on?: string | null;
          /** The task due date-time. */
          due_at?: string | null;
          /** The task start date. */
          start_on?: string | null;
          /** The task start date-time. */
          start_at?: string | null;
          /** The task creation timestamp. */
          created_at?: string;
          /** The task update timestamp. */
          modified_at?: string;
          /** The task completion timestamp. */
          completed_at?: string | null;
          /** The task permalink URL. */
          permalink_url?: string;
          /** The task approval status. */
          approval_status?: string;
          /** A compact Asana user. */
          assignee?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** A compact Asana workspace. */
          workspace?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** A compact Asana task. */
          parent?: {
            /** The task gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The task name. */
            name?: string;
            /** The task subtype. */
            resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
            [key: string]: unknown;
          } | null;
          /** Projects linked to the task. */
          projects?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Memberships returned by Asana. */
          memberships?: Array<{
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana project section. */
            section?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Custom fields returned by Asana. */
          custom_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Asana team. */
    "asana.update_team": {
      input: Record<string, unknown>;
      output: {
        /** An Asana team. */
        team: {
          /** The team gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The team name. */
          name?: string;
          /** The plain-text team description. */
          description?: string;
          /** The HTML team description. */
          html_description?: string;
          /** A compact Asana workspace. */
          organization?: {
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The Asana permalink for the team. */
          permalink_url?: string;
          /** The team's visibility within its organization. */
          visibility?: "public" | "request_to_join" | "secret";
          /** The team administration access level. */
          edit_team_name_or_description_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          edit_team_visibility_or_trash_team_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          member_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          guest_invite_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          join_request_management_access_level?: "all_team_members" | "only_team_admins";
          /** The team administration access level. */
          team_member_removal_access_level?: "all_team_members" | "only_team_admins";
          /** Who can create and share content with the team. */
          team_content_management_access_level?: "no_restriction" | "only_team_admins";
          /** Whether the team is endorsed by the organization. */
          endorsed?: boolean;
          /** Custom field settings applied to the team. */
          custom_field_settings?: Array<{
            /** The custom field setting gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** A compact Asana project. */
            project?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** Whether the custom field is marked important. */
            is_important?: boolean;
            /** A compact Asana project. */
            parent?: {
              /** The resource gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The resource name. */
              name?: string;
              [key: string]: unknown;
            };
            /** A compact Asana custom field. */
            custom_field?: {
              /** The custom field gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The custom field name. */
              name?: string;
              /** The legacy custom field type. */
              type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
              /** The custom field enum options. */
              enum_options?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** Whether this custom field value is enabled. */
              enabled?: boolean;
              /** The custom field representation type. */
              representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
              /** The prefix used by custom ID fields. */
              id_prefix?: string | null;
              /** The resource types accepted by a reference custom field. */
              input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
              /** Whether this is a formula custom field. */
              is_formula_field?: boolean;
              /** The selected date value. */
              date_value?: {
                /** The selected date. */
                date?: string;
                /** The selected date-time. */
                date_time?: string;
                [key: string]: unknown;
              } | null;
              /** An Asana custom field enum option. */
              enum_value?: {
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              } | null;
              /** Selected multi-enum values. */
              multi_enum_values?: Array<{
                /** The enum option gid. */
                gid?: string;
                /** The resource type. */
                resource_type?: string;
                /** The enum option name. */
                name?: string;
                /** Whether the enum option is enabled. */
                enabled?: boolean;
                /** The enum option color. */
                color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
                [key: string]: unknown;
              }>;
              /** The number custom field value. */
              number_value?: number | null;
              /** The text custom field value. */
              text_value?: string | null;
              /** The rendered custom field value. */
              display_value?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update an Asana user's display name or custom field values. */
    "asana.update_user": {
      input: Record<string, unknown>;
      output: {
        /** An Asana user. */
        user: {
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Rename an existing Asana workspace or organization. */
    "asana.update_workspace": {
      input: {
        /**
         * The Asana workspace gid.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The new workspace name.
         * @minLength 1
         */
        name: string;
        /**
         * Additional Asana fields to request via opt_fields.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** An Asana workspace. */
        workspace: {
          /** The workspace gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The workspace name. */
          name?: string;
          /** The workspace email domains. */
          email_domains?: Array<string>;
          /** Whether the workspace is an organization. */
          is_organization?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Update an Asana user in the context of a workspace or organization. */
    "asana.update_workspace_user": {
      input: Record<string, unknown>;
      output: {
        /** An Asana user. */
        user: {
          /** The user gid. */
          gid?: string;
          /** The resource type. */
          resource_type?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          /** The user's profile photo URLs. */
          photo?: {
            /** URL for the 21-pixel profile photo. */
            image_21x21?: string;
            /** URL for the 27-pixel profile photo. */
            image_27x27?: string;
            /** URL for the 36-pixel profile photo. */
            image_36x36?: string;
            /** URL for the 60-pixel profile photo. */
            image_60x60?: string;
            /** URL for the 128-pixel profile photo. */
            image_128x128?: string;
            /** URL for the 1024-pixel profile photo. */
            image_1024x1024?: string;
            [key: string]: unknown;
          } | null;
          /** Workspaces available to the user. */
          workspaces?: Array<{
            /** The resource gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The resource name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Custom fields returned for the user. */
          custom_fields?: Array<{
            /** The custom field gid. */
            gid?: string;
            /** The resource type. */
            resource_type?: string;
            /** The custom field name. */
            name?: string;
            /** The legacy custom field type. */
            type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "reference";
            /** The custom field enum options. */
            enum_options?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** Whether this custom field value is enabled. */
            enabled?: boolean;
            /** The custom field representation type. */
            representation_type?: "text" | "enum" | "multi_enum" | "number" | "date" | "people" | "formula" | "custom_id" | "reference";
            /** The prefix used by custom ID fields. */
            id_prefix?: string | null;
            /** The resource types accepted by a reference custom field. */
            input_restrictions?: Array<"task" | "project" | "portfolio" | "goal">;
            /** Whether this is a formula custom field. */
            is_formula_field?: boolean;
            /** The selected date value. */
            date_value?: {
              /** The selected date. */
              date?: string;
              /** The selected date-time. */
              date_time?: string;
              [key: string]: unknown;
            } | null;
            /** An Asana custom field enum option. */
            enum_value?: {
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            } | null;
            /** Selected multi-enum values. */
            multi_enum_values?: Array<{
              /** The enum option gid. */
              gid?: string;
              /** The resource type. */
              resource_type?: string;
              /** The enum option name. */
              name?: string;
              /** Whether the enum option is enabled. */
              enabled?: boolean;
              /** The enum option color. */
              color?: "none" | "red" | "orange" | "yellow-orange" | "yellow" | "yellow-green" | "green" | "blue-green" | "aqua" | "blue" | "indigo" | "purple" | "magenta" | "hot-pink" | "pink" | "cool-gray";
              [key: string]: unknown;
            }>;
            /** The number custom field value. */
            number_value?: number | null;
            /** The text custom field value. */
            text_value?: string | null;
            /** The rendered custom field value. */
            display_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
  }
}
