import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a task in a Chatwork room. */
    "chatwork.create_task": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The task body.
         * @minLength 1
         */
        body: string;
        /**
         * The assignee Chatwork account IDs.
         * @minItems 1
         */
        assigneeAccountIds: Array<number>;
        /**
         * The Unix timestamp deadline. Omit it to create a task without a deadline.
         * @exclusiveMinimum 0
         */
        limitTime?: number;
        /** The deadline type documented by Chatwork. */
        limitType?: "none" | "date" | "time";
      };
      output: {
        /** The created Chatwork task IDs. */
        taskIds: Array<number>;
      };
    };
    /** Delete one message in a Chatwork room. */
    "chatwork.delete_message": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The Chatwork message ID.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /**
         * The deleted Chatwork message ID.
         * @minLength 1
         */
        messageId: string;
      };
    };
    /** List Chatwork contacts visible to the authenticated account. */
    "chatwork.get_contacts": {
      input: Record<string, never>;
      output: {
        /** The Chatwork contacts. */
        contacts: Array<{
          /**
           * The Chatwork account ID.
           * @exclusiveMinimum 0
           */
          accountId: number;
          /**
           * The direct room ID.
           * @exclusiveMinimum 0
           */
          roomId: number;
          /**
           * The contact display name.
           * @minLength 1
           */
          name: string;
          /** The Chatwork ID. */
          chatworkId: string | null;
          /** The organization ID. */
          organizationId: number | null;
          /** The organization name. */
          organizationName: string | null;
          /** The department name. */
          department: string | null;
          /** The avatar image URL. */
          avatarImageUrl: string | null;
        }>;
      };
    };
    /** Get the authenticated Chatwork profile. */
    "chatwork.get_me": {
      input: Record<string, never>;
      output: {
        /** The authenticated Chatwork profile. */
        profile: {
          /**
           * The Chatwork account ID.
           * @exclusiveMinimum 0
           */
          accountId: number;
          /**
           * The direct room ID.
           * @exclusiveMinimum 0
           */
          roomId: number;
          /**
           * The display name.
           * @minLength 1
           */
          name: string;
          /** The Chatwork ID. */
          chatworkId: string | null;
          /** The organization ID. */
          organizationId: number | null;
          /** The organization name. */
          organizationName: string | null;
          /** The department name. */
          department: string | null;
          /** The job title. */
          title: string | null;
          /** The personal URL. */
          url: string | null;
          /** The self-introduction. */
          introduction: string | null;
          /** The public mail address. */
          mail: string | null;
          /** The organization phone number. */
          telOrganization: string | null;
          /** The extension phone number. */
          telExtension: string | null;
          /** The mobile phone number. */
          telMobile: string | null;
          /** The Skype account. */
          skype: string | null;
          /** The Facebook account. */
          facebook: string | null;
          /** The Twitter account. */
          twitter: string | null;
          /** The avatar image URL. */
          avatarImageUrl: string | null;
          /** The login mail address. */
          loginMail: string | null;
        };
      };
    };
    /** Get one message from a Chatwork room. */
    "chatwork.get_message": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The Chatwork message ID.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** The Chatwork message. */
        message: {
          /**
           * The Chatwork message ID.
           * @minLength 1
           */
          messageId: string;
          /** The author account. */
          account: {
            /**
             * The Chatwork account ID.
             * @exclusiveMinimum 0
             */
            accountId: number;
            /**
             * The Chatwork display name.
             * @minLength 1
             */
            name: string;
            /** The avatar image URL. */
            avatarImageUrl: string | null;
          };
          /**
           * The message body.
           * @minLength 1
           */
          body: string;
          /** The Unix timestamp when the message was sent. */
          sendTime: number;
          /** The Unix timestamp when the message was last updated. */
          updateTime: number;
        };
      };
    };
    /** Get metadata for one Chatwork room. */
    "chatwork.get_room": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** The Chatwork room. */
        room: {
          /**
           * The Chatwork room ID.
           * @exclusiveMinimum 0
           */
          roomId: number;
          /**
           * The room name.
           * @minLength 1
           */
          name: string;
          /** The room type. */
          type: "my" | "direct" | "group";
          /** The current user's role in the room. */
          role: "admin" | "member" | "readonly";
          /** Whether the room is pinned. */
          sticky: boolean;
          /** The unread message count. */
          unreadNum: number;
          /** The unread mention count. */
          mentionNum: number;
          /** The unfinished task count assigned to the current user. */
          mytaskNum: number;
          /** The total message count. */
          messageNum: number;
          /** The total file count. */
          fileNum: number;
          /** The total task count. */
          taskNum: number;
          /** The room icon URL. */
          iconPath: string | null;
          /** The Unix timestamp of the last room update. */
          lastUpdateTime: number;
          /** The room description. */
          description: string | null;
        };
      };
    };
    /** Get one task from a Chatwork room. */
    "chatwork.get_task": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The Chatwork task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
      };
      output: {
        /** The Chatwork task. */
        task: {
          /**
           * The Chatwork task ID.
           * @exclusiveMinimum 0
           */
          taskId: number;
          /** The assignee account. */
          account: {
            /**
             * The Chatwork account ID.
             * @exclusiveMinimum 0
             */
            accountId: number;
            /**
             * The Chatwork display name.
             * @minLength 1
             */
            name: string;
            /** The avatar image URL. */
            avatarImageUrl: string | null;
          };
          /** The assigner account. */
          assignedByAccount: {
            /**
             * The Chatwork account ID.
             * @exclusiveMinimum 0
             */
            accountId: number;
            /**
             * The Chatwork display name.
             * @minLength 1
             */
            name: string;
            /** The avatar image URL. */
            avatarImageUrl: string | null;
          };
          /**
           * The message ID associated with the task.
           * @minLength 1
           */
          messageId: string;
          /**
           * The task body.
           * @minLength 1
           */
          body: string;
          /** The Unix timestamp deadline. `0` means no deadline. */
          limitTime: number;
          /** The task completion status. */
          status: "open" | "done";
          /** The task deadline type. */
          limitType: "none" | "date" | "time";
        };
      };
    };
    /** List Chatwork tasks assigned to the authenticated account. */
    "chatwork.list_my_tasks": {
      input: {
        /**
         * The assigner account ID.
         * @exclusiveMinimum 0
         */
        assignedByAccountId?: number;
        /** The task completion status. */
        status?: "open" | "done";
      };
      output: {
        /** The Chatwork tasks assigned to the current account. */
        tasks: Array<{
          /**
           * The Chatwork task ID.
           * @exclusiveMinimum 0
           */
          taskId: number;
          /** The room that owns the task. */
          room: {
            /**
             * The Chatwork room ID.
             * @exclusiveMinimum 0
             */
            roomId: number;
            /**
             * The room name.
             * @minLength 1
             */
            name: string;
            /** The room icon URL. */
            iconPath: string | null;
          };
          /** The assigner account. */
          assignedByAccount: {
            /**
             * The Chatwork account ID.
             * @exclusiveMinimum 0
             */
            accountId: number;
            /**
             * The Chatwork display name.
             * @minLength 1
             */
            name: string;
            /** The avatar image URL. */
            avatarImageUrl: string | null;
          };
          /**
           * The message ID associated with the task.
           * @minLength 1
           */
          messageId: string;
          /**
           * The task body.
           * @minLength 1
           */
          body: string;
          /** The Unix timestamp deadline. */
          limitTime: number;
          /** The task completion status. */
          status: "open" | "done";
          /** The task deadline type. */
          limitType: "none" | "date" | "time";
        }>;
      };
    };
    /** List all members in one Chatwork room. */
    "chatwork.list_room_members": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
      };
      output: {
        /** The Chatwork room members. */
        members: Array<{
          /**
           * The Chatwork account ID.
           * @exclusiveMinimum 0
           */
          accountId: number;
          /** The member role in the room. */
          role: "admin" | "member" | "readonly";
          /**
           * The member display name.
           * @minLength 1
           */
          name: string;
          /** The Chatwork ID. */
          chatworkId: string | null;
          /** The organization ID. */
          organizationId: number | null;
          /** The organization name. */
          organizationName: string | null;
          /** The department name. */
          department: string | null;
          /** The avatar image URL. */
          avatarImageUrl: string | null;
        }>;
      };
    };
    /** List messages in one Chatwork room. */
    "chatwork.list_room_messages": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /** Whether to force returning the latest 100 messages instead of only unread ones. */
        force?: boolean;
      };
      output: {
        /** The Chatwork room messages. */
        messages: Array<{
          /**
           * The Chatwork message ID.
           * @minLength 1
           */
          messageId: string;
          /** The author account. */
          account: {
            /**
             * The Chatwork account ID.
             * @exclusiveMinimum 0
             */
            accountId: number;
            /**
             * The Chatwork display name.
             * @minLength 1
             */
            name: string;
            /** The avatar image URL. */
            avatarImageUrl: string | null;
          };
          /**
           * The message body.
           * @minLength 1
           */
          body: string;
          /** The Unix timestamp when the message was sent. */
          sendTime: number;
          /** The Unix timestamp when the message was last updated. */
          updateTime: number;
        }>;
      };
    };
    /** List tasks in one Chatwork room. */
    "chatwork.list_room_tasks": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The assignee account ID.
         * @exclusiveMinimum 0
         */
        accountId?: number;
        /**
         * The assigner account ID.
         * @exclusiveMinimum 0
         */
        assignedByAccountId?: number;
        /** The task completion status. */
        status?: "open" | "done";
      };
      output: {
        /** The Chatwork room tasks. */
        tasks: Array<{
          /**
           * The Chatwork task ID.
           * @exclusiveMinimum 0
           */
          taskId: number;
          /** The assignee account. */
          account: {
            /**
             * The Chatwork account ID.
             * @exclusiveMinimum 0
             */
            accountId: number;
            /**
             * The Chatwork display name.
             * @minLength 1
             */
            name: string;
            /** The avatar image URL. */
            avatarImageUrl: string | null;
          };
          /** The assigner account. */
          assignedByAccount: {
            /**
             * The Chatwork account ID.
             * @exclusiveMinimum 0
             */
            accountId: number;
            /**
             * The Chatwork display name.
             * @minLength 1
             */
            name: string;
            /** The avatar image URL. */
            avatarImageUrl: string | null;
          };
          /**
           * The message ID associated with the task.
           * @minLength 1
           */
          messageId: string;
          /**
           * The task body.
           * @minLength 1
           */
          body: string;
          /** The Unix timestamp deadline. `0` means no deadline. */
          limitTime: number;
          /** The task completion status. */
          status: "open" | "done";
          /** The task deadline type. */
          limitType: "none" | "date" | "time";
        }>;
      };
    };
    /** List Chatwork rooms visible to the authenticated account. */
    "chatwork.list_rooms": {
      input: Record<string, never>;
      output: {
        /** The Chatwork rooms. */
        rooms: Array<{
          /**
           * The Chatwork room ID.
           * @exclusiveMinimum 0
           */
          roomId: number;
          /**
           * The room name.
           * @minLength 1
           */
          name: string;
          /** The room type. */
          type: "my" | "direct" | "group";
          /** The current user's role in the room. */
          role: "admin" | "member" | "readonly";
          /** Whether the room is pinned. */
          sticky: boolean;
          /** The unread message count. */
          unreadNum: number;
          /** The unread mention count. */
          mentionNum: number;
          /** The unfinished task count assigned to the current user. */
          mytaskNum: number;
          /** The total message count. */
          messageNum: number;
          /** The total file count. */
          fileNum: number;
          /** The total task count. */
          taskNum: number;
          /** The room icon URL. */
          iconPath: string | null;
          /** The Unix timestamp of the last room update. */
          lastUpdateTime: number;
        }>;
      };
    };
    /** Post a message to a Chatwork room. */
    "chatwork.post_message": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The message body.
         * @minLength 1
         */
        body: string;
        /** Whether the posted message should remain unread for the sender. */
        selfUnread?: boolean;
      };
      output: {
        /**
         * The created Chatwork message ID.
         * @minLength 1
         */
        messageId: string;
      };
    };
    /** Update one message in a Chatwork room. */
    "chatwork.update_message": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The Chatwork message ID.
         * @minLength 1
         */
        messageId: string;
        /**
         * The updated message body.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /**
         * The updated Chatwork message ID.
         * @minLength 1
         */
        messageId: string;
      };
    };
    /** Update the completion status of one Chatwork task. */
    "chatwork.update_task_status": {
      input: {
        /**
         * The Chatwork room ID.
         * @exclusiveMinimum 0
         */
        roomId: number;
        /**
         * The Chatwork task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
        /** The target task completion status. */
        status: "open" | "done";
      };
      output: {
        /**
         * The updated Chatwork task ID.
         * @exclusiveMinimum 0
         */
        taskId: number;
      };
    };
  }
}
