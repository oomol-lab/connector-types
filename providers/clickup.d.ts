import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a ClickUp dependency relationship to a task. */
    "clickup.add_dependency": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /** The ClickUp task ID that the task depends on. */
        dependsOnTaskId?: string;
        /** The ClickUp task ID that depends on the task. */
        dependencyOfTaskId?: string;
      };
      output: {
        /** Whether the ClickUp dependency was added. */
        added: boolean;
      };
    };
    /** Add a ClickUp tag to a task. */
    "clickup.add_tag_to_task": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp tag name.
         * @minLength 1
         */
        tagName: string;
      };
      output: {
        /** Whether the ClickUp tag was added to the task. */
        added: boolean;
      };
    };
    /** Add a ClickUp task link to a task. */
    "clickup.add_task_link": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp task ID to link to.
         * @minLength 1
         */
        linksToTaskId: string;
      };
      output: {
        /** The ClickUp task after the link was added. */
        task: {
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Add a ClickUp task to an additional list. */
    "clickup.add_task_to_list": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the ClickUp task was added to the list. */
        added: boolean;
      };
    };
    /** Create a checklist on a ClickUp task. */
    "clickup.create_checklist": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp checklist name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The created ClickUp checklist. */
        checklist: {
          /** The ClickUp checklist ID. */
          id: string;
          /** The ClickUp parent task ID. */
          task_id: string;
          /** The ClickUp checklist name. */
          name: string;
          /** The ClickUp checklist creation timestamp. */
          date_created?: string;
          /** The ClickUp checklist order index. */
          orderindex: string | number;
          /** The number of resolved ClickUp checklist items. */
          resolved: string | number;
          /** The number of unresolved ClickUp checklist items. */
          unresolved: string | number;
          /** The ClickUp checklist items. */
          items: Array<{
            /** The ClickUp checklist item ID. */
            id: string;
            /** The ClickUp checklist item name. */
            name: string;
            /** The ClickUp checklist item order index. */
            orderindex: string | number;
            /** The ClickUp checklist item assignee. */
            assignee?: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            } | string | number | null;
            /** Whether the ClickUp checklist item is resolved. */
            resolved: boolean;
            /** The parent ClickUp checklist item ID. */
            parent?: string | null;
            /** The ClickUp checklist item creation timestamp. */
            date_created: string;
            /** The child ClickUp checklist item IDs. */
            children: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a checklist item on a ClickUp checklist. */
    "clickup.create_checklist_item": {
      input: {
        /**
         * The ClickUp checklist ID.
         * @minLength 1
         */
        checklistId: string;
        /**
         * The ClickUp checklist item name.
         * @minLength 1
         */
        name: string;
        /** The ClickUp checklist item assignee user ID. */
        assignee?: number;
      };
      output: {
        /** The ClickUp checklist after item creation. */
        checklist: {
          /** The ClickUp checklist ID. */
          id: string;
          /** The ClickUp parent task ID. */
          task_id: string;
          /** The ClickUp checklist name. */
          name: string;
          /** The ClickUp checklist creation timestamp. */
          date_created?: string;
          /** The ClickUp checklist order index. */
          orderindex: string | number;
          /** The number of resolved ClickUp checklist items. */
          resolved: string | number;
          /** The number of unresolved ClickUp checklist items. */
          unresolved: string | number;
          /** The ClickUp checklist items. */
          items: Array<{
            /** The ClickUp checklist item ID. */
            id: string;
            /** The ClickUp checklist item name. */
            name: string;
            /** The ClickUp checklist item order index. */
            orderindex: string | number;
            /** The ClickUp checklist item assignee. */
            assignee?: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            } | string | number | null;
            /** Whether the ClickUp checklist item is resolved. */
            resolved: boolean;
            /** The parent ClickUp checklist item ID. */
            parent?: string | null;
            /** The ClickUp checklist item creation timestamp. */
            date_created: string;
            /** The child ClickUp checklist item IDs. */
            children: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a ClickUp folder in a space. */
    "clickup.create_folder": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The ClickUp folder name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The created ClickUp folder. */
        folder: {
          /** The ClickUp folder ID. */
          id: string;
          /** The ClickUp folder name. */
          name: string;
          /** The ClickUp folder order index. */
          orderindex?: string | number;
          /** Whether the ClickUp folder overrides statuses. */
          override_statuses?: boolean;
          /** Whether the ClickUp folder is hidden. */
          hidden?: boolean;
          /** The ClickUp folder task count. */
          task_count?: string;
          /** The ClickUp lists under the folder. */
          lists?: Array<string | Record<string, unknown>>;
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a ClickUp folderless list in a space. */
    "clickup.create_folderless_list": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The ClickUp list name.
         * @minLength 1
         */
        name: string;
        /** The ClickUp list content. */
        content?: string;
        /** The ClickUp Markdown list content. */
        markdownContent?: string;
        /** The ClickUp due date timestamp in milliseconds. */
        dueDate?: number;
        /** Whether the ClickUp due date includes time. */
        dueDateTime?: boolean;
        /** The ClickUp list priority. Use 1 for urgent, 2 for high, 3 for normal, and 4 for low. */
        priority?: 1 | 2 | 3 | 4;
        /** The ClickUp assignee user ID. */
        assignee?: number;
        /** The ClickUp list status name. */
        status?: string;
      };
      output: {
        /** The created ClickUp folderless list. */
        list: {
          /** The ClickUp list ID. */
          id: string;
          /** The ClickUp list name. */
          name: string;
          /** The ClickUp list order index. */
          orderindex?: string | number;
          /** The ClickUp list content. */
          content?: string;
          /** The ClickUp list status descriptor. */
          status?: Record<string, unknown>;
          /** The ClickUp list priority descriptor. */
          priority?: Record<string, unknown> | null;
          /** The ClickUp list assignee. */
          assignee?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          } | null;
          /** The ClickUp list task count. */
          task_count?: string | null;
          /** The ClickUp list due date timestamp. */
          due_date?: string | null;
          /** The ClickUp list start date timestamp. */
          start_date?: string | null;
          /** The ClickUp parent folder. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** Whether the ClickUp list is archived. */
          archived?: boolean;
          /** Whether the ClickUp list overrides statuses. */
          override_statuses?: boolean;
          /** The ClickUp list permission level. */
          permission_level?: string;
          /** The ClickUp list statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp inbound email address. */
          inbound_address?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a ClickUp list in a folder. */
    "clickup.create_list": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * The ClickUp list name.
         * @minLength 1
         */
        name: string;
        /** The ClickUp list content. */
        content?: string;
        /** The ClickUp Markdown list content. */
        markdownContent?: string;
        /** The ClickUp due date timestamp in milliseconds. */
        dueDate?: number;
        /** Whether the ClickUp due date includes time. */
        dueDateTime?: boolean;
        /** The ClickUp list priority. Use 1 for urgent, 2 for high, 3 for normal, and 4 for low. */
        priority?: 1 | 2 | 3 | 4;
        /** The ClickUp assignee user ID. */
        assignee?: number;
        /** The ClickUp list status name. */
        status?: string;
      };
      output: {
        /** The created ClickUp list. */
        list: {
          /** The ClickUp list ID. */
          id: string;
          /** The ClickUp list name. */
          name: string;
          /** The ClickUp list order index. */
          orderindex?: string | number;
          /** The ClickUp list content. */
          content?: string;
          /** The ClickUp list status descriptor. */
          status?: Record<string, unknown>;
          /** The ClickUp list priority descriptor. */
          priority?: Record<string, unknown> | null;
          /** The ClickUp list assignee. */
          assignee?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          } | null;
          /** The ClickUp list task count. */
          task_count?: string | null;
          /** The ClickUp list due date timestamp. */
          due_date?: string | null;
          /** The ClickUp list start date timestamp. */
          start_date?: string | null;
          /** The ClickUp parent folder. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** Whether the ClickUp list is archived. */
          archived?: boolean;
          /** Whether the ClickUp list overrides statuses. */
          override_statuses?: boolean;
          /** The ClickUp list permission level. */
          permission_level?: string;
          /** The ClickUp list statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp inbound email address. */
          inbound_address?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a ClickUp list from a folder list template. */
    "clickup.create_list_from_template": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * The ClickUp template ID.
         * @minLength 1
         */
        templateId: string;
        /**
         * The ClickUp list name.
         * @minLength 1
         */
        name: string;
        /** The ClickUp list template instantiation options. */
        options?: {
          /** Whether to return the ClickUp list ID before the template finishes applying. */
          returnImmediately?: boolean;
        };
      };
      output: {
        /** The created ClickUp list. */
        list: {
          /** The ClickUp list ID. */
          id: string;
          /** The ClickUp list name. */
          name: string;
          /** The ClickUp list order index. */
          orderindex?: string | number;
          /** The ClickUp list content. */
          content?: string;
          /** The ClickUp list status descriptor. */
          status?: Record<string, unknown>;
          /** The ClickUp list priority descriptor. */
          priority?: Record<string, unknown> | null;
          /** The ClickUp list assignee. */
          assignee?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          } | null;
          /** The ClickUp list task count. */
          task_count?: string | null;
          /** The ClickUp list due date timestamp. */
          due_date?: string | null;
          /** The ClickUp list start date timestamp. */
          start_date?: string | null;
          /** The ClickUp parent folder. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** Whether the ClickUp list is archived. */
          archived?: boolean;
          /** Whether the ClickUp list overrides statuses. */
          override_statuses?: boolean;
          /** The ClickUp list permission level. */
          permission_level?: string;
          /** The ClickUp list statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp inbound email address. */
          inbound_address?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a ClickUp space in a workspace. */
    "clickup.create_space": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The ClickUp space name.
         * @minLength 1
         */
        name: string;
        /** Whether the ClickUp space allows multiple assignees. */
        multipleAssignees: boolean;
        /** The ClickUp space feature configuration. */
        features: Record<string, unknown>;
      };
      output: {
        /** The created ClickUp space. */
        space: {
          /** The ClickUp space ID. */
          id: string;
          /** The ClickUp space name. */
          name: string;
          /** Whether the ClickUp space is private. */
          private: boolean;
          /** The ClickUp space color. */
          color?: string | null;
          /** The ClickUp space avatar URL. */
          avatar?: string | null;
          /** Whether the ClickUp space is archived. */
          archived?: boolean;
          /** The ClickUp space statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The members visible on the ClickUp space. */
          members?: Array<{
            /** The ClickUp user in the workspace member entry. */
            user: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Whether the ClickUp space allows multiple assignees. */
          multiple_assignees?: boolean;
          /** The ClickUp space features. */
          features?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a ClickUp task in a list with optional scheduling and assignee fields. */
    "clickup.create_task": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * The ClickUp task name.
         * @minLength 1
         */
        name: string;
        /** The ClickUp task description. */
        description?: string;
        /** The ClickUp task Markdown description. */
        markdownContent?: string;
        /**
         * The ClickUp assignee user IDs.
         * @minItems 1
         */
        assigneeIds?: Array<number>;
        /**
         * The ClickUp group assignee IDs.
         * @minItems 1
         */
        groupAssigneeIds?: Array<number>;
        /**
         * The ClickUp tag names.
         * @minItems 1
         */
        tags?: Array<string>;
        /** The ClickUp task status name. */
        status?: string;
        /** The ClickUp task priority. Use 1 for urgent, 2 for high, 3 for normal, 4 for low, or null to clear it. */
        priority?: 1 | 2 | 3 | 4 | null;
        /** The ClickUp due date timestamp in milliseconds. */
        dueDate?: number;
        /** Whether the ClickUp due date includes time. */
        dueDateTime?: boolean;
        /** The ClickUp start date timestamp in milliseconds. */
        startDate?: number;
        /** Whether the ClickUp start date includes time. */
        startDateTime?: boolean;
        /** Whether to notify all ClickUp watchers. */
        notifyAll?: boolean;
        /** The ClickUp parent task ID. */
        parentTaskId?: string | null;
        /** The ClickUp dependency target task ID. */
        linksToTaskId?: string | null;
        /** The ClickUp time estimate in milliseconds. */
        timeEstimate?: number;
        /** The ClickUp points value. */
        points?: number;
        /** The ClickUp custom field values. */
        customFields?: Array<Record<string, unknown>>;
        /** The ClickUp custom item type ID. */
        customItemId?: number;
        /** Whether to enforce required ClickUp custom fields. */
        checkRequiredCustomFields?: boolean;
      };
      output: {
        /** The created ClickUp task. */
        task: {
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Upload an attachment file to a ClickUp task. */
    "clickup.create_task_attachment": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The file name to use for the ClickUp attachment.
         * @minLength 1
         */
        fileName: string;
        /** The MIME type to use for the ClickUp attachment. */
        mimeType?: string;
        /** The public URL of the file to fetch before uploading. */
        url?: string;
        /** The plain text content to upload as a file. */
        contentText?: string;
        /** The Base64-encoded file content to upload. */
        contentBase64?: string;
      };
      output: {
        /** The uploaded ClickUp attachment. */
        attachment: {
          /** The ClickUp attachment ID. */
          id: string;
          /** The ClickUp attachment version. */
          version: string;
          /** The ClickUp attachment timestamp. */
          date: string | number;
          /** The ClickUp attachment file name. */
          title: string;
          /** The ClickUp attachment file extension. */
          extension: string;
          /** The ClickUp attachment small thumbnail URL. */
          thumbnail_small: string;
          /** The ClickUp attachment large thumbnail URL. */
          thumbnail_large: string;
          /** The ClickUp attachment URL. */
          url: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a comment on a ClickUp task. */
    "clickup.create_task_comment": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp comment text.
         * @minLength 1
         */
        commentText: string;
        /** The ClickUp assignee user ID. */
        assignee?: number;
        /** The ClickUp group assignee ID. */
        groupAssignee?: string | number;
        /** Whether to notify all ClickUp watchers. */
        notifyAll: boolean;
      };
      output: {
        /** The created ClickUp comment. */
        comment: {
          /** The ClickUp comment ID. */
          id?: string;
          /** The ClickUp comment history ID. */
          hist_id?: string;
          /** The ClickUp comment mutation timestamp. */
          date?: string | number;
          [key: string]: unknown;
        };
      };
    };
    /** Create a ClickUp task from a task template. */
    "clickup.create_task_from_template": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * The ClickUp template ID.
         * @minLength 1
         */
        templateId: string;
        /**
         * The ClickUp task name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether the ClickUp task was created from the template. */
        created: boolean;
        /** The created ClickUp task. */
        task?: {
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a threaded reply on a ClickUp comment. */
    "clickup.create_threaded_comment": {
      input: {
        /** The ClickUp comment ID. */
        commentId: string | number;
        /**
         * The ClickUp comment text.
         * @minLength 1
         */
        commentText: string;
        /** The ClickUp assignee user ID. */
        assignee?: number;
        /** The ClickUp group assignee ID. */
        groupAssignee?: string | number;
        /** Whether to notify all ClickUp watchers. */
        notifyAll: boolean;
      };
      output: {
        /** The created ClickUp threaded comment. */
        comment: {
          /** The ClickUp comment ID. */
          id?: string;
          /** The ClickUp comment history ID. */
          hist_id?: string;
          /** The ClickUp comment mutation timestamp. */
          date?: string | number;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a ClickUp checklist by checklist ID. */
    "clickup.delete_checklist": {
      input: {
        /**
         * The ClickUp checklist ID.
         * @minLength 1
         */
        checklistId: string;
      };
      output: {
        /** Whether the ClickUp checklist was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp checklist item by checklist item ID. */
    "clickup.delete_checklist_item": {
      input: {
        /**
         * The ClickUp checklist ID.
         * @minLength 1
         */
        checklistId: string;
        /**
         * The ClickUp checklist item ID.
         * @minLength 1
         */
        checklistItemId: string;
      };
      output: {
        /** Whether the ClickUp checklist item was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp comment by comment ID. */
    "clickup.delete_comment": {
      input: {
        /** The ClickUp comment ID. */
        commentId: string | number;
      };
      output: {
        /** Whether the ClickUp comment was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp dependency relationship from a task. */
    "clickup.delete_dependency": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /** The ClickUp task ID that the task depends on. */
        dependsOnTaskId?: string;
        /** The ClickUp task ID that depends on the task. */
        dependencyOfTaskId?: string;
      };
      output: {
        /** Whether the ClickUp dependency was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp folder by folder ID. */
    "clickup.delete_folder": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
      };
      output: {
        /** Whether the ClickUp folder was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp list by list ID. */
    "clickup.delete_list": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Whether the ClickUp list was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp space by space ID. */
    "clickup.delete_space": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** Whether the ClickUp space was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp task by task ID. */
    "clickup.delete_task": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the ClickUp task was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a ClickUp task link from a task. */
    "clickup.delete_task_link": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp task ID to link to.
         * @minLength 1
         */
        linksToTaskId: string;
      };
      output: {
        /** The ClickUp task after the link was deleted. */
        task: {
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the authenticated ClickUp user profile. */
    "clickup.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The ClickUp user. */
        user: {
          /** The ClickUp user ID. */
          id: string | number;
          /** The ClickUp username. */
          username?: string | null;
          /** The ClickUp user email address. */
          email?: string;
          /** The ClickUp user color. */
          color?: string | null;
          /** The ClickUp profile picture URL. */
          profilePicture?: string | null;
          /** The ClickUp user initials. */
          initials?: string;
          /** The ClickUp user timezone. */
          timezone?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the ClickUp custom task types available on a workspace. */
    "clickup.get_custom_task_types": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The ClickUp custom task types. */
        customTaskTypes: Array<{
          /** The ClickUp custom task type ID. */
          id: string | number;
          /** The ClickUp custom task type name. */
          name: string;
          /** The ClickUp custom task type plural name. */
          name_plural?: string | null;
          /** The ClickUp custom task type description. */
          description?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a ClickUp folder by folder ID. */
    "clickup.get_folder": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
      };
      output: {
        /** The ClickUp folder. */
        folder: {
          /** The ClickUp folder ID. */
          id: string;
          /** The ClickUp folder name. */
          name: string;
          /** The ClickUp folder order index. */
          orderindex?: string | number;
          /** Whether the ClickUp folder overrides statuses. */
          override_statuses?: boolean;
          /** Whether the ClickUp folder is hidden. */
          hidden?: boolean;
          /** The ClickUp folder task count. */
          task_count?: string;
          /** The ClickUp lists under the folder. */
          lists?: Array<string | Record<string, unknown>>;
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the ClickUp custom fields available on a folder. */
    "clickup.get_folder_custom_fields": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
      };
      output: {
        /** The ClickUp folder custom fields. */
        fields: Array<{
          /** The ClickUp custom field ID. */
          id: string;
          /** The ClickUp custom field name. */
          name: string;
          /** The ClickUp custom field type. */
          type: string;
          /** The ClickUp custom field type configuration. */
          type_config: Record<string, unknown>;
          /** The ClickUp custom field creation timestamp. */
          date_created: string;
          /** Whether the ClickUp custom field is hidden from guests. */
          hide_from_guests: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp views available on a folder. */
    "clickup.get_folder_views": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
      };
      output: {
        /** The ClickUp folder views. */
        views: Array<{
          /** The ClickUp view ID. */
          id: string;
          /** The ClickUp view name. */
          name: string;
          /** The ClickUp view type. */
          type: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a ClickUp list by list ID. */
    "clickup.get_list": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** The ClickUp list. */
        list: {
          /** The ClickUp list ID. */
          id: string;
          /** The ClickUp list name. */
          name: string;
          /** The ClickUp list order index. */
          orderindex?: string | number;
          /** The ClickUp list content. */
          content?: string;
          /** The ClickUp list status descriptor. */
          status?: Record<string, unknown>;
          /** The ClickUp list priority descriptor. */
          priority?: Record<string, unknown> | null;
          /** The ClickUp list assignee. */
          assignee?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          } | null;
          /** The ClickUp list task count. */
          task_count?: string | null;
          /** The ClickUp list due date timestamp. */
          due_date?: string | null;
          /** The ClickUp list start date timestamp. */
          start_date?: string | null;
          /** The ClickUp parent folder. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** Whether the ClickUp list is archived. */
          archived?: boolean;
          /** Whether the ClickUp list overrides statuses. */
          override_statuses?: boolean;
          /** The ClickUp list permission level. */
          permission_level?: string;
          /** The ClickUp list statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp inbound email address. */
          inbound_address?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the ClickUp custom fields available on a list. */
    "clickup.get_list_custom_fields": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** The ClickUp list custom fields. */
        fields: Array<{
          /** The ClickUp custom field ID. */
          id: string;
          /** The ClickUp custom field name. */
          name: string;
          /** The ClickUp custom field type. */
          type: string;
          /** The ClickUp custom field type configuration. */
          type_config: Record<string, unknown>;
          /** The ClickUp custom field creation timestamp. */
          date_created: string;
          /** Whether the ClickUp custom field is hidden from guests. */
          hide_from_guests: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp members with explicit access to a list. */
    "clickup.get_list_members": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** The ClickUp list members. */
        members: Array<{
          /** The ClickUp user ID. */
          id: string | number;
          /** The ClickUp username. */
          username: string;
          /** The ClickUp user email address. */
          email: string;
          /** The ClickUp user color. */
          color?: string | null;
          /** The ClickUp user initials. */
          initials: string;
          /** The ClickUp profile picture URL. */
          profilePicture?: string | null;
          /** The ClickUp user profile information block. */
          profileInfo?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp views available on a list. */
    "clickup.get_list_views": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** The ClickUp list views. */
        views: Array<{
          /** The ClickUp view ID. */
          id: string;
          /** The ClickUp view name. */
          name: string;
          /** The ClickUp view type. */
          type: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a ClickUp space by space ID. */
    "clickup.get_space": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The ClickUp space. */
        space: {
          /** The ClickUp space ID. */
          id: string;
          /** The ClickUp space name. */
          name: string;
          /** Whether the ClickUp space is private. */
          private: boolean;
          /** The ClickUp space color. */
          color?: string | null;
          /** The ClickUp space avatar URL. */
          avatar?: string | null;
          /** Whether the ClickUp space is archived. */
          archived?: boolean;
          /** The ClickUp space statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The members visible on the ClickUp space. */
          members?: Array<{
            /** The ClickUp user in the workspace member entry. */
            user: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Whether the ClickUp space allows multiple assignees. */
          multiple_assignees?: boolean;
          /** The ClickUp space features. */
          features?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the ClickUp custom fields available on a space. */
    "clickup.get_space_custom_fields": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The ClickUp space custom fields. */
        fields: Array<{
          /** The ClickUp custom field ID. */
          id: string;
          /** The ClickUp custom field name. */
          name: string;
          /** The ClickUp custom field type. */
          type: string;
          /** The ClickUp custom field type configuration. */
          type_config: Record<string, unknown>;
          /** The ClickUp custom field creation timestamp. */
          date_created: string;
          /** Whether the ClickUp custom field is hidden from guests. */
          hide_from_guests: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp tags available on a space. */
    "clickup.get_space_tags": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The ClickUp space tags. */
        tags: Array<{
          /** The ClickUp tag name. */
          name: string;
          /** The ClickUp tag foreground color. */
          tag_fg?: string;
          /** The ClickUp tag background color. */
          tag_bg?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp views available on a space. */
    "clickup.get_space_views": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The ClickUp space views. */
        views: Array<{
          /** The ClickUp view ID. */
          id: string;
          /** The ClickUp view name. */
          name: string;
          /** The ClickUp view type. */
          type: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a ClickUp task by task ID. */
    "clickup.get_task": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /** Whether to include ClickUp subtasks. */
        includeSubtasks?: boolean;
        /** Whether to request ClickUp Markdown task descriptions. */
        includeMarkdownDescription?: boolean;
      };
      output: {
        /** The ClickUp task. */
        task: {
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the comments on a ClickUp task. */
    "clickup.get_task_comments": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /** The ClickUp comment timestamp for pagination. */
        start?: number;
        /** The ClickUp comment ID for pagination. */
        startId?: string;
      };
      output: {
        /** The ClickUp task comments. */
        comments: Array<{
          /** The ClickUp comment ID. */
          id: string;
          /** The ClickUp comment segments. */
          comment: Array<{
            /** The ClickUp comment text segment. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp comment text. */
          comment_text: string;
          /** The ClickUp comment author. */
          user: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** Whether the ClickUp comment is resolved. */
          resolved: boolean;
          /** The ClickUp comment assignee. */
          assignee: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp user who assigned the comment. */
          assigned_by: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp comment reactions. */
          reactions: Array<Record<string, unknown>>;
          /** The ClickUp comment timestamp. */
          date: string;
          /** The number of replies on the ClickUp comment. */
          reply_count?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp members with explicit access to a task. */
    "clickup.get_task_members": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The ClickUp task members. */
        members: Array<{
          /** The ClickUp user ID. */
          id: string | number;
          /** The ClickUp username. */
          username: string;
          /** The ClickUp user email address. */
          email: string;
          /** The ClickUp user color. */
          color?: string | null;
          /** The ClickUp user initials. */
          initials: string;
          /** The ClickUp profile picture URL. */
          profilePicture?: string | null;
          /** The ClickUp user profile information block. */
          profileInfo?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp task templates available in a workspace. */
    "clickup.get_task_templates": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /** The zero-based ClickUp page index. */
        page: number;
      };
      output: {
        /** The ClickUp task templates. */
        templates: Array<{
          /** The ClickUp task template ID. */
          id: string;
          /** The ClickUp task template name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the threaded replies on a ClickUp comment. */
    "clickup.get_threaded_comments": {
      input: {
        /** The ClickUp comment ID. */
        commentId: string | number;
      };
      output: {
        /** The ClickUp threaded comments. */
        comments: Array<{
          /** The ClickUp comment ID. */
          id: string;
          /** The ClickUp comment segments. */
          comment: Array<{
            /** The ClickUp comment text segment. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp comment text. */
          comment_text: string;
          /** The ClickUp comment author. */
          user: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** Whether the ClickUp comment is resolved. */
          resolved: boolean;
          /** The ClickUp comment assignee. */
          assignee: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp user who assigned the comment. */
          assigned_by: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp comment reactions. */
          reactions: Array<Record<string, unknown>>;
          /** The ClickUp comment timestamp. */
          date: string;
          /** The number of replies on the ClickUp comment. */
          reply_count?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a ClickUp workspace user by user ID. */
    "clickup.get_user": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /** The ClickUp user ID. */
        userId: string | number;
        /** Whether to include items shared with the ClickUp user. */
        includeShared?: boolean;
      };
      output: {
        /** The ClickUp workspace user member. */
        member: {
          /** The ClickUp user details. */
          user: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp user who invited this member. */
          invited_by?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp items shared with this member. */
          shared?: {
            /** The shared ClickUp tasks. */
            tasks?: Array<string>;
            /** The shared ClickUp lists. */
            lists?: Array<string>;
            /** The shared ClickUp folders. */
            folders?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a ClickUp view by view ID. */
    "clickup.get_view": {
      input: {
        /**
         * The ClickUp view ID.
         * @minLength 1
         */
        viewId: string;
      };
      output: {
        /** The ClickUp view. */
        view: {
          /** The ClickUp view ID. */
          id: string;
          /** The ClickUp view name. */
          name: string;
          /** The ClickUp view type. */
          type: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the visible ClickUp tasks in a view. */
    "clickup.get_view_tasks": {
      input: {
        /**
         * The ClickUp view ID.
         * @minLength 1
         */
        viewId: string;
        /** The zero-based ClickUp view task page index. */
        page?: number;
      };
      output: {
        /** The ClickUp view tasks. */
        tasks: Array<{
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether the ClickUp response is the last page. */
        lastPage?: boolean;
      };
    };
    /** Get the ClickUp custom fields available on a workspace. */
    "clickup.get_workspace_custom_fields": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The ClickUp workspace custom fields. */
        fields: Array<{
          /** The ClickUp custom field ID. */
          id: string;
          /** The ClickUp custom field name. */
          name: string;
          /** The ClickUp custom field type. */
          type: string;
          /** The ClickUp custom field type configuration. */
          type_config: Record<string, unknown>;
          /** The ClickUp custom field creation timestamp. */
          date_created: string;
          /** Whether the ClickUp custom field is hidden from guests. */
          hide_from_guests: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the ClickUp everything-level views available on a workspace. */
    "clickup.get_workspace_everything_level_views": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The ClickUp everything-level workspace views. */
        views: Array<{
          /** The ClickUp view ID. */
          id: string;
          /** The ClickUp view name. */
          name: string;
          /** The ClickUp view type. */
          type: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the ClickUp folderless lists available in a space. */
    "clickup.list_folderless_lists": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
        /** Whether to include archived ClickUp folderless lists. */
        archived?: boolean;
      };
      output: {
        /** The ClickUp folderless lists. */
        lists: Array<{
          /** The ClickUp list ID. */
          id: string;
          /** The ClickUp list name. */
          name: string;
          /** The ClickUp list order index. */
          orderindex?: string | number;
          /** The ClickUp list content. */
          content?: string;
          /** The ClickUp list status descriptor. */
          status?: Record<string, unknown>;
          /** The ClickUp list priority descriptor. */
          priority?: Record<string, unknown> | null;
          /** The ClickUp list assignee. */
          assignee?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          } | null;
          /** The ClickUp list task count. */
          task_count?: string | null;
          /** The ClickUp list due date timestamp. */
          due_date?: string | null;
          /** The ClickUp list start date timestamp. */
          start_date?: string | null;
          /** The ClickUp parent folder. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** Whether the ClickUp list is archived. */
          archived?: boolean;
          /** Whether the ClickUp list overrides statuses. */
          override_statuses?: boolean;
          /** The ClickUp list permission level. */
          permission_level?: string;
          /** The ClickUp list statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp inbound email address. */
          inbound_address?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the ClickUp folders available in a space. */
    "clickup.list_folders": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
        /** Whether to include archived ClickUp folders. */
        archived?: boolean;
      };
      output: {
        /** The ClickUp folders. */
        folders: Array<{
          /** The ClickUp folder ID. */
          id: string;
          /** The ClickUp folder name. */
          name: string;
          /** The ClickUp folder order index. */
          orderindex?: string | number;
          /** Whether the ClickUp folder overrides statuses. */
          override_statuses?: boolean;
          /** Whether the ClickUp folder is hidden. */
          hidden?: boolean;
          /** The ClickUp folder task count. */
          task_count?: string;
          /** The ClickUp lists under the folder. */
          lists?: Array<string | Record<string, unknown>>;
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the ClickUp tasks in a list with optional filters. */
    "clickup.list_list_tasks": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
        /** The zero-based ClickUp page index. */
        page?: number;
        /** The ClickUp task ordering field. */
        orderBy?: "id" | "created" | "updated" | "due_date";
        /** Whether to reverse the ClickUp task ordering. */
        reverse?: boolean;
        /** Whether to include ClickUp subtasks. */
        subtasks?: boolean;
        /**
         * The ClickUp task statuses to filter by.
         * @minItems 1
         */
        statuses?: Array<string>;
        /** Whether to include closed ClickUp tasks. */
        includeClosed?: boolean;
        /**
         * The ClickUp assignee user IDs to filter by.
         * @minItems 1
         */
        assigneeIds?: Array<number>;
        /**
         * The ClickUp tag names to filter by.
         * @minItems 1
         */
        tags?: Array<string>;
        /** The minimum ClickUp due date timestamp in milliseconds. */
        dueDateGt?: number;
        /** The maximum ClickUp due date timestamp in milliseconds. */
        dueDateLt?: number;
        /** The minimum ClickUp creation timestamp in milliseconds. */
        dateCreatedGt?: number;
        /** The maximum ClickUp creation timestamp in milliseconds. */
        dateCreatedLt?: number;
        /** The minimum ClickUp update timestamp in milliseconds. */
        dateUpdatedGt?: number;
        /** The maximum ClickUp update timestamp in milliseconds. */
        dateUpdatedLt?: number;
        /** The minimum ClickUp done timestamp in milliseconds. */
        dateDoneGt?: number;
        /** The maximum ClickUp done timestamp in milliseconds. */
        dateDoneLt?: number;
        /** The ClickUp parent task ID to filter by. */
        parentTaskId?: string;
        /** Whether to request ClickUp Markdown task descriptions. */
        includeMarkdownDescription?: boolean;
        /** Whether to include ClickUp tasks that exist in multiple lists. */
        includeTiml?: boolean;
        /**
         * The ClickUp watcher user IDs to filter by.
         * @minItems 1
         */
        watchers?: Array<number>;
      };
      output: {
        /** The ClickUp tasks. */
        tasks: Array<{
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether the ClickUp response is the last page. */
        lastPage?: boolean;
      };
    };
    /** List the ClickUp lists available in a folder. */
    "clickup.list_lists": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
        /** Whether to include archived ClickUp lists. */
        archived?: boolean;
      };
      output: {
        /** The ClickUp lists. */
        lists: Array<{
          /** The ClickUp list ID. */
          id: string;
          /** The ClickUp list name. */
          name: string;
          /** The ClickUp list order index. */
          orderindex?: string | number;
          /** The ClickUp list content. */
          content?: string;
          /** The ClickUp list status descriptor. */
          status?: Record<string, unknown>;
          /** The ClickUp list priority descriptor. */
          priority?: Record<string, unknown> | null;
          /** The ClickUp list assignee. */
          assignee?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          } | null;
          /** The ClickUp list task count. */
          task_count?: string | null;
          /** The ClickUp list due date timestamp. */
          due_date?: string | null;
          /** The ClickUp list start date timestamp. */
          start_date?: string | null;
          /** The ClickUp parent folder. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** Whether the ClickUp list is archived. */
          archived?: boolean;
          /** Whether the ClickUp list overrides statuses. */
          override_statuses?: boolean;
          /** The ClickUp list permission level. */
          permission_level?: string;
          /** The ClickUp list statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp inbound email address. */
          inbound_address?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the ClickUp spaces available in a workspace. */
    "clickup.list_spaces": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /** Whether to include archived ClickUp spaces. */
        archived?: boolean;
      };
      output: {
        /** The ClickUp spaces. */
        spaces: Array<{
          /** The ClickUp space ID. */
          id: string;
          /** The ClickUp space name. */
          name: string;
          /** Whether the ClickUp space is private. */
          private: boolean;
          /** The ClickUp space color. */
          color?: string | null;
          /** The ClickUp space avatar URL. */
          avatar?: string | null;
          /** Whether the ClickUp space is archived. */
          archived?: boolean;
          /** The ClickUp space statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The members visible on the ClickUp space. */
          members?: Array<{
            /** The ClickUp user in the workspace member entry. */
            user: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Whether the ClickUp space allows multiple assignees. */
          multiple_assignees?: boolean;
          /** The ClickUp space features. */
          features?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the ClickUp tasks in a workspace with official filter parameters. */
    "clickup.list_workspace_tasks": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /** The zero-based ClickUp page index. */
        page?: number;
        /** The ClickUp task ordering field. */
        orderBy?: "id" | "created" | "updated" | "due_date";
        /** Whether to reverse the ClickUp task ordering. */
        reverse?: boolean;
        /** Whether to include ClickUp subtasks. */
        subtasks?: boolean;
        /**
         * The ClickUp task statuses to filter by.
         * @minItems 1
         */
        statuses?: Array<string>;
        /** Whether to include closed ClickUp tasks. */
        includeClosed?: boolean;
        /**
         * The ClickUp assignee user IDs to filter by.
         * @minItems 1
         */
        assigneeIds?: Array<number>;
        /**
         * The ClickUp tag names to filter by.
         * @minItems 1
         */
        tags?: Array<string>;
        /** The minimum ClickUp due date timestamp in milliseconds. */
        dueDateGt?: number;
        /** The maximum ClickUp due date timestamp in milliseconds. */
        dueDateLt?: number;
        /** The minimum ClickUp creation timestamp in milliseconds. */
        dateCreatedGt?: number;
        /** The maximum ClickUp creation timestamp in milliseconds. */
        dateCreatedLt?: number;
        /** The minimum ClickUp update timestamp in milliseconds. */
        dateUpdatedGt?: number;
        /** The maximum ClickUp update timestamp in milliseconds. */
        dateUpdatedLt?: number;
        /** The minimum ClickUp done timestamp in milliseconds. */
        dateDoneGt?: number;
        /** The maximum ClickUp done timestamp in milliseconds. */
        dateDoneLt?: number;
        /** The ClickUp parent task ID to filter by. */
        parentTaskId?: string;
        /** Whether to request ClickUp Markdown task descriptions. */
        includeMarkdownDescription?: boolean;
        /**
         * The ClickUp space IDs to filter by.
         * @minItems 1
         */
        spaceIds?: Array<string>;
        /**
         * The ClickUp folder IDs to filter by.
         * @minItems 1
         */
        folderIds?: Array<string>;
        /**
         * The ClickUp list IDs to filter by.
         * @minItems 1
         */
        listIds?: Array<string>;
      };
      output: {
        /** The ClickUp tasks. */
        tasks: Array<{
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether the ClickUp response is the last page. */
        lastPage?: boolean;
      };
    };
    /** List the members visible on a ClickUp workspace. */
    "clickup.list_workspace_users": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The ClickUp members visible on the workspace. */
        members: Array<{
          /** The ClickUp user in the workspace member entry. */
          user: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the ClickUp workspaces available to the authenticated user. */
    "clickup.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The ClickUp workspaces. */
        workspaces: Array<{
          /** The ClickUp workspace ID. */
          id: string;
          /** The ClickUp workspace name. */
          name: string;
          /** The ClickUp workspace color. */
          color?: string;
          /** The ClickUp workspace avatar URL. */
          avatar?: string | null;
          /** The members visible on the ClickUp workspace. */
          members?: Array<{
            /** The ClickUp user in the workspace member entry. */
            user: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Move a ClickUp task to a new home list. */
    "clickup.move_task_to_home_list": {
      input: {
        /**
         * The ClickUp workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
        /** Whether to move ClickUp custom fields to the destination home list. */
        moveCustomFields?: boolean;
        /**
         * The specific ClickUp custom field IDs to move.
         * @minItems 1
         */
        customFieldsToMove?: Array<string>;
        /**
         * The ClickUp status mappings to apply during the move.
         * @minItems 1
         */
        statusMappings?: Array<{
          /**
           * The source ClickUp status name.
           * @minLength 1
           */
          sourceStatus: string;
          /**
           * The destination ClickUp status name.
           * @minLength 1
           */
          destinationStatus: string;
        }>;
      };
      output: {
        /** The ClickUp task after moving to the new home list. */
        task: {
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Remove a ClickUp custom field value from a task. */
    "clickup.remove_custom_field_value": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp custom field ID.
         * @minLength 1
         */
        fieldId: string;
      };
      output: {
        /** Whether the ClickUp custom field value was removed. */
        removed: boolean;
      };
    };
    /** Remove a ClickUp tag from a task. */
    "clickup.remove_tag_from_task": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp tag name.
         * @minLength 1
         */
        tagName: string;
      };
      output: {
        /** Whether the ClickUp tag was removed from the task. */
        removed: boolean;
      };
    };
    /** Remove a ClickUp task from an additional list. */
    "clickup.remove_task_from_list": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the ClickUp task was removed from the list. */
        removed: boolean;
      };
    };
    /** Set a ClickUp custom field value on a task. */
    "clickup.set_custom_field_value": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The ClickUp custom field ID.
         * @minLength 1
         */
        fieldId: string;
        /** The ClickUp custom field value. */
        value: unknown;
        /** The ClickUp custom field value options. */
        valueOptions?: Record<string, unknown>;
      };
      output: {
        /** Whether the ClickUp custom field value was updated. */
        updated: boolean;
      };
    };
    /** Update a ClickUp checklist by checklist ID. */
    "clickup.update_checklist": {
      input: {
        /**
         * The ClickUp checklist ID.
         * @minLength 1
         */
        checklistId: string;
        /** The ClickUp checklist name. */
        name?: string;
        /** The ClickUp checklist position. */
        position?: number;
      };
      output: {
        /** Whether the ClickUp checklist was updated. */
        updated: boolean;
      };
    };
    /** Update a ClickUp checklist item by checklist item ID. */
    "clickup.update_checklist_item": {
      input: {
        /**
         * The ClickUp checklist ID.
         * @minLength 1
         */
        checklistId: string;
        /**
         * The ClickUp checklist item ID.
         * @minLength 1
         */
        checklistItemId: string;
        /** The ClickUp checklist item name. */
        name?: string;
        /** The ClickUp checklist item assignee. */
        assignee?: string | number | null;
        /** Whether the ClickUp checklist item is resolved. */
        resolved?: boolean;
        /** The parent ClickUp checklist item ID. */
        parent?: string | null;
      };
      output: {
        /** The ClickUp checklist after item update. */
        checklist: {
          /** The ClickUp checklist ID. */
          id: string;
          /** The ClickUp parent task ID. */
          task_id: string;
          /** The ClickUp checklist name. */
          name: string;
          /** The ClickUp checklist creation timestamp. */
          date_created?: string;
          /** The ClickUp checklist order index. */
          orderindex: string | number;
          /** The number of resolved ClickUp checklist items. */
          resolved: string | number;
          /** The number of unresolved ClickUp checklist items. */
          unresolved: string | number;
          /** The ClickUp checklist items. */
          items: Array<{
            /** The ClickUp checklist item ID. */
            id: string;
            /** The ClickUp checklist item name. */
            name: string;
            /** The ClickUp checklist item order index. */
            orderindex: string | number;
            /** The ClickUp checklist item assignee. */
            assignee?: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            } | string | number | null;
            /** Whether the ClickUp checklist item is resolved. */
            resolved: boolean;
            /** The parent ClickUp checklist item ID. */
            parent?: string | null;
            /** The ClickUp checklist item creation timestamp. */
            date_created: string;
            /** The child ClickUp checklist item IDs. */
            children: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a ClickUp comment by comment ID. */
    "clickup.update_comment": {
      input: {
        /** The ClickUp comment ID. */
        commentId: string | number;
        /**
         * The ClickUp comment text.
         * @minLength 1
         */
        commentText: string;
        /** The ClickUp assignee user ID. */
        assignee?: number;
        /** The ClickUp group assignee ID. */
        groupAssignee?: string | number;
        /** Whether the ClickUp comment is resolved. */
        resolved?: boolean;
      };
      output: {
        /** The updated ClickUp comment. */
        comment: {
          /** The ClickUp comment ID. */
          id?: string;
          /** The ClickUp comment history ID. */
          hist_id?: string;
          /** The ClickUp comment mutation timestamp. */
          date?: string | number;
          [key: string]: unknown;
        };
      };
    };
    /** Update a ClickUp folder by folder ID. */
    "clickup.update_folder": {
      input: {
        /**
         * The ClickUp folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * The ClickUp folder name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The updated ClickUp folder. */
        folder: {
          /** The ClickUp folder ID. */
          id: string;
          /** The ClickUp folder name. */
          name: string;
          /** The ClickUp folder order index. */
          orderindex?: string | number;
          /** Whether the ClickUp folder overrides statuses. */
          override_statuses?: boolean;
          /** Whether the ClickUp folder is hidden. */
          hidden?: boolean;
          /** The ClickUp folder task count. */
          task_count?: string;
          /** The ClickUp lists under the folder. */
          lists?: Array<string | Record<string, unknown>>;
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update a ClickUp list by list ID. */
    "clickup.update_list": {
      input: {
        /**
         * The ClickUp list ID.
         * @minLength 1
         */
        listId: string;
        /** The ClickUp list name. */
        name?: string;
        /** The ClickUp list content. */
        content?: string;
        /** The ClickUp Markdown list content. */
        markdownContent?: string;
        /** The ClickUp due date timestamp in milliseconds. */
        dueDate?: number;
        /** Whether the ClickUp due date includes time. */
        dueDateTime?: boolean;
        /** The ClickUp list priority. Use 1 for urgent, 2 for high, 3 for normal, and 4 for low. */
        priority?: 1 | 2 | 3 | 4;
        /** The ClickUp assignee value. Use "none" to clear the assignee. */
        assignee?: number | "none";
        /** The ClickUp list status name. */
        status?: string;
        /** Whether to clear the ClickUp list status. */
        unsetStatus?: boolean;
      };
      output: {
        /** The updated ClickUp list. */
        list: {
          /** The ClickUp list ID. */
          id: string;
          /** The ClickUp list name. */
          name: string;
          /** The ClickUp list order index. */
          orderindex?: string | number;
          /** The ClickUp list content. */
          content?: string;
          /** The ClickUp list status descriptor. */
          status?: Record<string, unknown>;
          /** The ClickUp list priority descriptor. */
          priority?: Record<string, unknown> | null;
          /** The ClickUp list assignee. */
          assignee?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          } | null;
          /** The ClickUp list task count. */
          task_count?: string | null;
          /** The ClickUp list due date timestamp. */
          due_date?: string | null;
          /** The ClickUp list start date timestamp. */
          start_date?: string | null;
          /** The ClickUp parent folder. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp parent space. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** Whether the ClickUp list is archived. */
          archived?: boolean;
          /** Whether the ClickUp list overrides statuses. */
          override_statuses?: boolean;
          /** The ClickUp list permission level. */
          permission_level?: string;
          /** The ClickUp list statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp inbound email address. */
          inbound_address?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a ClickUp space by space ID. */
    "clickup.update_space": {
      input: {
        /**
         * The ClickUp space ID.
         * @minLength 1
         */
        spaceId: string;
        /** The ClickUp space name. */
        name?: string;
        /** The ClickUp space color. */
        color?: string;
        /** Whether the ClickUp space is private. */
        private?: boolean;
        /** Whether ClickUp admins can manage members in the space. */
        adminCanManage?: boolean;
        /** Whether the ClickUp space allows multiple assignees. */
        multipleAssignees?: boolean;
        /** The ClickUp space feature configuration. */
        features?: Record<string, unknown>;
      };
      output: {
        /** The updated ClickUp space. */
        space: {
          /** The ClickUp space ID. */
          id: string;
          /** The ClickUp space name. */
          name: string;
          /** Whether the ClickUp space is private. */
          private: boolean;
          /** The ClickUp space color. */
          color?: string | null;
          /** The ClickUp space avatar URL. */
          avatar?: string | null;
          /** Whether the ClickUp space is archived. */
          archived?: boolean;
          /** The ClickUp space statuses. */
          statuses?: Array<{
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          }>;
          /** The members visible on the ClickUp space. */
          members?: Array<{
            /** The ClickUp user in the workspace member entry. */
            user: {
              /** The ClickUp user ID. */
              id: string | number;
              /** The ClickUp username. */
              username?: string | null;
              /** The ClickUp user email address. */
              email?: string;
              /** The ClickUp user color. */
              color?: string | null;
              /** The ClickUp profile picture URL. */
              profilePicture?: string | null;
              /** The ClickUp user initials. */
              initials?: string;
              /** The ClickUp user timezone. */
              timezone?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Whether the ClickUp space allows multiple assignees. */
          multiple_assignees?: boolean;
          /** The ClickUp space features. */
          features?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a ClickUp task by task ID. */
    "clickup.update_task": {
      input: {
        /**
         * The ClickUp task ID.
         * @minLength 1
         */
        taskId: string;
        /** The ClickUp task name. */
        name?: string;
        /** The ClickUp task description. Use " " to clear it. */
        description?: string;
        /** The ClickUp task Markdown description. */
        markdownContent?: string;
        /** The ClickUp task status name. */
        status?: string;
        /** The ClickUp task priority. Use 1 for urgent, 2 for high, 3 for normal, and 4 for low. */
        priority?: 1 | 2 | 3 | 4;
        /** The ClickUp due date timestamp in milliseconds. */
        dueDate?: number;
        /** Whether the ClickUp due date includes time. */
        dueDateTime?: boolean;
        /** The ClickUp start date timestamp in milliseconds. */
        startDate?: number;
        /** Whether the ClickUp start date includes time. */
        startDateTime?: boolean;
        /** Whether the ClickUp task is archived. */
        archived?: boolean;
        /** The ClickUp parent task ID. */
        parentTaskId?: string;
        /** The ClickUp time estimate in milliseconds. */
        timeEstimate?: number;
        /** The ClickUp points value. */
        points?: number;
        /**
         * The ClickUp assignee user IDs to add.
         * @minItems 1
         */
        assigneeIdsToAdd?: Array<number>;
        /**
         * The ClickUp assignee user IDs to remove.
         * @minItems 1
         */
        assigneeIdsToRemove?: Array<number>;
        /** The ClickUp custom item type ID. */
        customItemId?: number | null;
      };
      output: {
        /** The updated ClickUp task. */
        task: {
          /** The ClickUp task ID. */
          id: string;
          /** The ClickUp custom task ID. */
          custom_id?: string | null;
          /** The ClickUp custom item type ID. */
          custom_item_id?: number | string | null;
          /** The ClickUp task name. */
          name: string;
          /** The ClickUp plain text task content. */
          text_content?: string;
          /** The ClickUp task description. */
          description?: string;
          /** The ClickUp Markdown task description. */
          markdown_description?: string;
          /** The ClickUp task status. */
          status?: {
            /** The ClickUp status ID. */
            id?: string;
            /** The ClickUp status name. */
            status: string;
            /** The ClickUp status type. */
            type?: string;
            /** The ClickUp status order index. */
            orderindex: string | number;
            /** The ClickUp status color. */
            color: string;
            [key: string]: unknown;
          };
          /** The ClickUp task order index. */
          orderindex?: string | number;
          /** The ClickUp task creation timestamp. */
          date_created?: string;
          /** The ClickUp task update timestamp. */
          date_updated?: string;
          /** The ClickUp task close timestamp. */
          date_closed?: string | null;
          /** The ClickUp task done timestamp. */
          date_done?: string | null;
          /** Whether the ClickUp task is archived. */
          archived?: boolean;
          /** The ClickUp task creator. */
          creator?: {
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          };
          /** The ClickUp task assignees. */
          assignees?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task watchers. */
          watchers?: Array<{
            /** The ClickUp user ID. */
            id: string | number;
            /** The ClickUp username. */
            username?: string | null;
            /** The ClickUp user email address. */
            email?: string;
            /** The ClickUp user color. */
            color?: string | null;
            /** The ClickUp profile picture URL. */
            profilePicture?: string | null;
            /** The ClickUp user initials. */
            initials?: string;
            /** The ClickUp user timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp task checklists. */
          checklists?: Array<{
            /** The ClickUp checklist ID. */
            id: string;
            /** The ClickUp parent task ID. */
            task_id: string;
            /** The ClickUp checklist name. */
            name: string;
            /** The ClickUp checklist creation timestamp. */
            date_created?: string;
            /** The ClickUp checklist order index. */
            orderindex: string | number;
            /** The number of resolved ClickUp checklist items. */
            resolved: string | number;
            /** The number of unresolved ClickUp checklist items. */
            unresolved: string | number;
            /** The ClickUp checklist items. */
            items: Array<{
              /** The ClickUp checklist item ID. */
              id: string;
              /** The ClickUp checklist item name. */
              name: string;
              /** The ClickUp checklist item order index. */
              orderindex: string | number;
              /** The ClickUp checklist item assignee. */
              assignee?: {
                /** The ClickUp user ID. */
                id: string | number;
                /** The ClickUp username. */
                username?: string | null;
                /** The ClickUp user email address. */
                email?: string;
                /** The ClickUp user color. */
                color?: string | null;
                /** The ClickUp profile picture URL. */
                profilePicture?: string | null;
                /** The ClickUp user initials. */
                initials?: string;
                /** The ClickUp user timezone. */
                timezone?: string;
                [key: string]: unknown;
              } | string | number | null;
              /** Whether the ClickUp checklist item is resolved. */
              resolved: boolean;
              /** The parent ClickUp checklist item ID. */
              parent?: string | null;
              /** The ClickUp checklist item creation timestamp. */
              date_created: string;
              /** The child ClickUp checklist item IDs. */
              children: Array<string>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The ClickUp task tags. */
          tags?: Array<{
            /** The ClickUp tag name. */
            name: string;
            /** The ClickUp tag foreground color. */
            tag_fg?: string;
            /** The ClickUp tag background color. */
            tag_bg?: string;
            [key: string]: unknown;
          }>;
          /** The ClickUp parent task ID. */
          parent?: string | null;
          /** The ClickUp top-level parent task ID. */
          top_level_parent?: string | null;
          /** The ClickUp task priority. */
          priority?: {
            /** The ClickUp priority ID. */
            id?: string;
            /** The ClickUp priority name. */
            priority?: string;
            /** The ClickUp priority color. */
            color?: string;
            /** The ClickUp priority order index. */
            orderindex?: string | number;
            [key: string]: unknown;
          } | null;
          /** The ClickUp task due date timestamp. */
          due_date?: string | null;
          /** The ClickUp task start date timestamp. */
          start_date?: string | null;
          /** The ClickUp task points value. */
          points?: string | number | null;
          /** The ClickUp task time estimate. */
          time_estimate?: string | number | null;
          /** The ClickUp task time spent. */
          time_spent?: string | number | null;
          /** The ClickUp custom fields. */
          custom_fields?: Array<Record<string, unknown>>;
          /** The ClickUp task dependencies. */
          dependencies?: Array<Record<string, unknown>>;
          /** The ClickUp linked tasks. */
          linked_tasks?: Array<Record<string, unknown>>;
          /** The ClickUp secondary list locations for the task. */
          locations?: Array<{
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          }>;
          /** The ClickUp workspace ID. */
          team_id?: string;
          /** The ClickUp task URL. */
          url?: string;
          /** The ClickUp task permission level. */
          permission_level?: string;
          /** The ClickUp task list. */
          list?: {
            /** The ClickUp list ID. */
            id: string;
            /** The ClickUp list name. */
            name?: string;
            /** Whether the authenticated user can access the list. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder or project reference. */
          project?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp folder reference. */
          folder?: {
            /** The ClickUp resource ID. */
            id: string;
            /** The ClickUp resource name. */
            name?: string;
            /** Whether the ClickUp resource is hidden. */
            hidden?: boolean;
            /** Whether the authenticated user can access the resource. */
            access?: boolean;
            [key: string]: unknown;
          };
          /** The ClickUp space reference. */
          space?: {
            /** The ClickUp space ID. */
            id: string;
            /** The ClickUp space name. */
            name?: string;
            /** Whether the authenticated user can access the space. */
            access?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
