import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Markdown memo on the connected Memos instance. */
    "memos.create_memo": {
      input: {
        /**
         * The memo content in Markdown format.
         * @minLength 1
         */
        content: string;
        /** The memo visibility. */
        visibility?: "PRIVATE" | "PROTECTED" | "PUBLIC";
        /**
         * An optional caller-selected memo ID.
         * @minLength 1
         * @maxLength 36
         */
        memoId?: string;
        /**
         * An optional creation time for imported content.
         * @format date-time
         */
        createTime?: string;
        /** Whether the new memo should be pinned. */
        pinned?: boolean;
        /** A geographic location to attach to a memo. */
        location?: {
          /** The location label. */
          placeholder?: string;
          /** The latitude in decimal degrees. */
          latitude?: number;
          /** The longitude in decimal degrees. */
          longitude?: number;
        };
      };
      output: {
        /** A Memos memo resource. */
        memo: {
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          name?: string;
          /** The memo state returned by Memos. */
          state?: string;
          /**
           * The Memos user resource name in the format users/{user}.
           * @minLength 7
           */
          creator?: string;
          /**
           * The memo creation time.
           * @format date-time
           */
          createTime?: string;
          /**
           * The memo update time.
           * @format date-time
           */
          updateTime?: string;
          /** The memo Markdown content. */
          content?: string;
          /** The memo visibility returned by Memos. */
          visibility?: string;
          /** Tags extracted from the memo content. */
          tags?: Array<string>;
          /** Whether the memo is pinned. */
          pinned?: boolean;
          /** Attachments associated with the memo. */
          attachments?: Array<{
            /**
             * The Memos attachment resource name in the format attachments/{attachment}.
             * @minLength 13
             */
            name?: string;
            /**
             * The attachment creation time.
             * @format date-time
             */
            createTime?: string;
            /** The attachment filename. */
            filename?: string;
            /** The external storage URL when returned by Memos. */
            externalLink?: string;
            /** The attachment MIME type. */
            type?: string;
            /** The attachment size in bytes, encoded as a string by the Memos API. */
            size?: string;
            /**
             * The Memos memo resource name in the format memos/{memo}.
             * @minLength 7
             */
            memo?: string;
            [key: string]: unknown;
          }>;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          parent?: string;
          /** A plain-text preview of the memo content. */
          snippet?: string;
          /** A geographic location attached to a memo. */
          location?: {
            /** The location label. */
            placeholder?: string;
            /** The latitude in decimal degrees. */
            latitude?: number;
            /** The longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** Computed memo properties. */
          property?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one attachment by resource name. */
    "memos.delete_attachment": {
      input: {
        /**
         * The Memos attachment resource name in the format attachments/{attachment}.
         * @minLength 13
         */
        name: string;
      };
      output: {
        /** Whether Memos accepted the deletion. */
        deleted: boolean;
        /**
         * The Memos attachment resource name in the format attachments/{attachment}.
         * @minLength 13
         */
        name: string;
      };
    };
    /** Delete one memo, optionally forcing deletion when associated data exists. */
    "memos.delete_memo": {
      input: {
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        name: string;
        /** Whether to force deletion when the memo has associated data. */
        force?: boolean;
      };
      output: {
        /** Whether Memos accepted the deletion. */
        deleted: boolean;
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        name: string;
      };
    };
    /** Retrieve one attachment's metadata by resource name. */
    "memos.get_attachment": {
      input: {
        /**
         * The Memos attachment resource name in the format attachments/{attachment}.
         * @minLength 13
         */
        name: string;
      };
      output: {
        /** Memos attachment metadata. */
        attachment: {
          /**
           * The Memos attachment resource name in the format attachments/{attachment}.
           * @minLength 13
           */
          name?: string;
          /**
           * The attachment creation time.
           * @format date-time
           */
          createTime?: string;
          /** The attachment filename. */
          filename?: string;
          /** The external storage URL when returned by Memos. */
          externalLink?: string;
          /** The attachment MIME type. */
          type?: string;
          /** The attachment size in bytes, encoded as a string by the Memos API. */
          size?: string;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          memo?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Memos user associated with the connected personal access token. */
    "memos.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Memos user resource. */
        user: {
          /**
           * The Memos user resource name in the format users/{user}.
           * @minLength 7
           */
          name?: string;
          /** The user role returned by Memos. */
          role?: string;
          /** The unique Memos username. */
          username?: string;
          /** The user's email address. */
          email?: string;
          /** The user's display name. */
          displayName?: string;
          /** The user's avatar URL. */
          avatarUrl?: string;
          /** The user's profile description. */
          description?: string;
          /** The user state returned by Memos. */
          state?: string;
          /**
           * The user creation time.
           * @format date-time
           */
          createTime?: string;
          /**
           * The user update time.
           * @format date-time
           */
          updateTime?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one memo by its Memos resource name. */
    "memos.get_memo": {
      input: {
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        name: string;
      };
      output: {
        /** A Memos memo resource. */
        memo: {
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          name?: string;
          /** The memo state returned by Memos. */
          state?: string;
          /**
           * The Memos user resource name in the format users/{user}.
           * @minLength 7
           */
          creator?: string;
          /**
           * The memo creation time.
           * @format date-time
           */
          createTime?: string;
          /**
           * The memo update time.
           * @format date-time
           */
          updateTime?: string;
          /** The memo Markdown content. */
          content?: string;
          /** The memo visibility returned by Memos. */
          visibility?: string;
          /** Tags extracted from the memo content. */
          tags?: Array<string>;
          /** Whether the memo is pinned. */
          pinned?: boolean;
          /** Attachments associated with the memo. */
          attachments?: Array<{
            /**
             * The Memos attachment resource name in the format attachments/{attachment}.
             * @minLength 13
             */
            name?: string;
            /**
             * The attachment creation time.
             * @format date-time
             */
            createTime?: string;
            /** The attachment filename. */
            filename?: string;
            /** The external storage URL when returned by Memos. */
            externalLink?: string;
            /** The attachment MIME type. */
            type?: string;
            /** The attachment size in bytes, encoded as a string by the Memos API. */
            size?: string;
            /**
             * The Memos memo resource name in the format memos/{memo}.
             * @minLength 7
             */
            memo?: string;
            [key: string]: unknown;
          }>;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          parent?: string;
          /** A plain-text preview of the memo content. */
          snippet?: string;
          /** A geographic location attached to a memo. */
          location?: {
            /** The location label. */
            placeholder?: string;
            /** The latitude in decimal degrees. */
            latitude?: number;
            /** The longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** Computed memo properties. */
          property?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Memos user by resource name. */
    "memos.get_user": {
      input: {
        /**
         * The Memos user resource name in the format users/{user}.
         * @minLength 7
         */
        name: string;
        /**
         * An optional comma-separated field mask for the user response.
         * @minLength 1
         */
        readMask?: string;
      };
      output: {
        /** A Memos user resource. */
        user: {
          /**
           * The Memos user resource name in the format users/{user}.
           * @minLength 7
           */
          name?: string;
          /** The user role returned by Memos. */
          role?: string;
          /** The unique Memos username. */
          username?: string;
          /** The user's email address. */
          email?: string;
          /** The user's display name. */
          displayName?: string;
          /** The user's avatar URL. */
          avatarUrl?: string;
          /** The user's profile description. */
          description?: string;
          /** The user state returned by Memos. */
          state?: string;
          /**
           * The user creation time.
           * @format date-time
           */
          createTime?: string;
          /**
           * The user update time.
           * @format date-time
           */
          updateTime?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List attachment metadata with pagination, filtering, and ordering. */
    "memos.list_attachments": {
      input: {
        /**
         * The maximum number of resources to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The continuation token returned by a previous list action.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The Memos attachment filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * The attachment ordering expression, such as create_time desc.
         * @minLength 1
         */
        orderBy?: string;
      };
      output: {
        /** The attachments returned by Memos. */
        attachments: Array<{
          /**
           * The Memos attachment resource name in the format attachments/{attachment}.
           * @minLength 13
           */
          name?: string;
          /**
           * The attachment creation time.
           * @format date-time
           */
          createTime?: string;
          /** The attachment filename. */
          filename?: string;
          /** The external storage URL when returned by Memos. */
          externalLink?: string;
          /** The attachment MIME type. */
          type?: string;
          /** The attachment size in bytes, encoded as a string by the Memos API. */
          size?: string;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          memo?: string;
          [key: string]: unknown;
        }>;
        /** The continuation token for the next page, or null when no next page exists. */
        nextPageToken: string | null;
      };
    };
    /** List attachments associated with one memo. */
    "memos.list_memo_attachments": {
      input: {
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        name: string;
        /**
         * The maximum number of resources to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The continuation token returned by a previous list action.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The memo attachments returned by Memos. */
        attachments: Array<{
          /**
           * The Memos attachment resource name in the format attachments/{attachment}.
           * @minLength 13
           */
          name?: string;
          /**
           * The attachment creation time.
           * @format date-time
           */
          createTime?: string;
          /** The attachment filename. */
          filename?: string;
          /** The external storage URL when returned by Memos. */
          externalLink?: string;
          /** The attachment MIME type. */
          type?: string;
          /** The attachment size in bytes, encoded as a string by the Memos API. */
          size?: string;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          memo?: string;
          [key: string]: unknown;
        }>;
        /** The continuation token for the next page, or null when no next page exists. */
        nextPageToken: string | null;
      };
    };
    /** List memos with pagination, state selection, ordering, and CEL filtering. */
    "memos.list_memos": {
      input: {
        /**
         * The maximum number of resources to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The continuation token returned by a previous list action.
         * @minLength 1
         */
        pageToken?: string;
        /** The memo state. */
        state?: "NORMAL" | "ARCHIVED";
        /**
         * The AIP-132 ordering expression, such as pinned desc, create_time desc.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * The Memos CEL filter expression, including content, creator, visibility, tags, timestamps, and computed properties.
         * @minLength 1
         */
        filter?: string;
        /** Whether deleted memos should be included. */
        showDeleted?: boolean;
      };
      output: {
        /** The memos returned by the instance. */
        memos: Array<{
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          name?: string;
          /** The memo state returned by Memos. */
          state?: string;
          /**
           * The Memos user resource name in the format users/{user}.
           * @minLength 7
           */
          creator?: string;
          /**
           * The memo creation time.
           * @format date-time
           */
          createTime?: string;
          /**
           * The memo update time.
           * @format date-time
           */
          updateTime?: string;
          /** The memo Markdown content. */
          content?: string;
          /** The memo visibility returned by Memos. */
          visibility?: string;
          /** Tags extracted from the memo content. */
          tags?: Array<string>;
          /** Whether the memo is pinned. */
          pinned?: boolean;
          /** Attachments associated with the memo. */
          attachments?: Array<{
            /**
             * The Memos attachment resource name in the format attachments/{attachment}.
             * @minLength 13
             */
            name?: string;
            /**
             * The attachment creation time.
             * @format date-time
             */
            createTime?: string;
            /** The attachment filename. */
            filename?: string;
            /** The external storage URL when returned by Memos. */
            externalLink?: string;
            /** The attachment MIME type. */
            type?: string;
            /** The attachment size in bytes, encoded as a string by the Memos API. */
            size?: string;
            /**
             * The Memos memo resource name in the format memos/{memo}.
             * @minLength 7
             */
            memo?: string;
            [key: string]: unknown;
          }>;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          parent?: string;
          /** A plain-text preview of the memo content. */
          snippet?: string;
          /** A geographic location attached to a memo. */
          location?: {
            /** The location label. */
            placeholder?: string;
            /** The latitude in decimal degrees. */
            latitude?: number;
            /** The longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** Computed memo properties. */
          property?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The continuation token for the next page, or null when no next page exists. */
        nextPageToken: string | null;
      };
    };
    /** List users visible to the connected Memos account. */
    "memos.list_users": {
      input: {
        /**
         * The maximum number of resources to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The continuation token returned by a previous list action.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The user filter expression; Memos v0.29 supports username equality.
         * @minLength 1
         */
        filter?: string;
        /** Whether deleted users should be included. */
        showDeleted?: boolean;
      };
      output: {
        /** The users returned by Memos. */
        users: Array<{
          /**
           * The Memos user resource name in the format users/{user}.
           * @minLength 7
           */
          name?: string;
          /** The user role returned by Memos. */
          role?: string;
          /** The unique Memos username. */
          username?: string;
          /** The user's email address. */
          email?: string;
          /** The user's display name. */
          displayName?: string;
          /** The user's avatar URL. */
          avatarUrl?: string;
          /** The user's profile description. */
          description?: string;
          /** The user state returned by Memos. */
          state?: string;
          /**
           * The user creation time.
           * @format date-time
           */
          createTime?: string;
          /**
           * The user update time.
           * @format date-time
           */
          updateTime?: string;
          [key: string]: unknown;
        }>;
        /** The continuation token for the next page, or null when no next page exists. */
        nextPageToken: string | null;
      };
    };
    /** Replace the complete attachment set associated with one memo. */
    "memos.set_memo_attachments": {
      input: {
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        name: string;
        /** The complete desired list of attachment resource names; use an empty array to clear all attachments. */
        attachmentNames: Array<string>;
      };
      output: {
        /** Whether Memos accepted the attachment replacement. */
        updated: boolean;
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        name: string;
        /** The attachment resource names sent to Memos. */
        attachmentNames: Array<string>;
      };
    };
    /** Update selected content, visibility, pin, state, time, or location fields on a memo. */
    "memos.update_memo": {
      input: {
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        name: string;
        /** The replacement memo content in Markdown format. */
        content?: string;
        /** The memo visibility. */
        visibility?: "PRIVATE" | "PROTECTED" | "PUBLIC";
        /** Whether the memo should be pinned. */
        pinned?: boolean;
        /** The memo state. */
        state?: "NORMAL" | "ARCHIVED";
        /**
         * The replacement memo creation time.
         * @format date-time
         */
        createTime?: string;
        /** A geographic location to attach to a memo. */
        location?: {
          /** The location label. */
          placeholder?: string;
          /** The latitude in decimal degrees. */
          latitude?: number;
          /** The longitude in decimal degrees. */
          longitude?: number;
        } | null;
      };
      output: {
        /** A Memos memo resource. */
        memo: {
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          name?: string;
          /** The memo state returned by Memos. */
          state?: string;
          /**
           * The Memos user resource name in the format users/{user}.
           * @minLength 7
           */
          creator?: string;
          /**
           * The memo creation time.
           * @format date-time
           */
          createTime?: string;
          /**
           * The memo update time.
           * @format date-time
           */
          updateTime?: string;
          /** The memo Markdown content. */
          content?: string;
          /** The memo visibility returned by Memos. */
          visibility?: string;
          /** Tags extracted from the memo content. */
          tags?: Array<string>;
          /** Whether the memo is pinned. */
          pinned?: boolean;
          /** Attachments associated with the memo. */
          attachments?: Array<{
            /**
             * The Memos attachment resource name in the format attachments/{attachment}.
             * @minLength 13
             */
            name?: string;
            /**
             * The attachment creation time.
             * @format date-time
             */
            createTime?: string;
            /** The attachment filename. */
            filename?: string;
            /** The external storage URL when returned by Memos. */
            externalLink?: string;
            /** The attachment MIME type. */
            type?: string;
            /** The attachment size in bytes, encoded as a string by the Memos API. */
            size?: string;
            /**
             * The Memos memo resource name in the format memos/{memo}.
             * @minLength 7
             */
            memo?: string;
            [key: string]: unknown;
          }>;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          parent?: string;
          /** A plain-text preview of the memo content. */
          snippet?: string;
          /** A geographic location attached to a memo. */
          location?: {
            /** The location label. */
            placeholder?: string;
            /** The latitude in decimal degrees. */
            latitude?: number;
            /** The longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** Computed memo properties. */
          property?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Download a public file URL and upload its bytes to the connected Memos instance. */
    "memos.upload_attachment": {
      input: {
        /**
         * The public HTTP or HTTPS URL of the file to upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The filename to store in Memos.
         * @minLength 1
         */
        filename: string;
        /**
         * The MIME type; inferred from the download response when omitted.
         * @minLength 1
         */
        type?: string;
        /**
         * The Memos memo resource name in the format memos/{memo}.
         * @minLength 7
         */
        memo?: string;
        /**
         * An optional caller-selected attachment ID.
         * @minLength 1
         * @maxLength 36
         */
        attachmentId?: string;
      };
      output: {
        /** Memos attachment metadata. */
        attachment: {
          /**
           * The Memos attachment resource name in the format attachments/{attachment}.
           * @minLength 13
           */
          name?: string;
          /**
           * The attachment creation time.
           * @format date-time
           */
          createTime?: string;
          /** The attachment filename. */
          filename?: string;
          /** The external storage URL when returned by Memos. */
          externalLink?: string;
          /** The attachment MIME type. */
          type?: string;
          /** The attachment size in bytes, encoded as a string by the Memos API. */
          size?: string;
          /**
           * The Memos memo resource name in the format memos/{memo}.
           * @minLength 7
           */
          memo?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
