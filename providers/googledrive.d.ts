import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Drive account information such as user details, quota, and supported capabilities. */
    "googledrive.about.get": {
      input: {
        /** The fields to include in the response. */
        fields?: string;
      };
      output: Record<string, unknown>;
    };
    /** List pending access proposals for a specific Drive file. */
    "googledrive.accessproposals.list": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** When true, includes files from shared drives. */
        includeSharedDrives?: boolean;
        /**
         * The maximum number of items to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The list of access proposals for the file. */
        accessProposals: Array<{
          /** The ID of the file to which this access proposal applies. */
          fileId: string;
          /** The unique identifier of the access proposal. */
          proposalId: string;
          /** The time when the access proposal was created (RFC 3339 date-time). */
          createTime: string | null;
          /** The message included with the access request. */
          requestMessage: string | null;
          /** The email address of the user who received the access proposal. */
          recipientEmailAddress: string | null;
          /** The email address of the user who requested access. */
          requesterEmailAddress: string | null;
          /** The roles and views requested in the access proposal. */
          rolesAndViews?: Array<{
            /** The role of the access proposal. */
            role: string | null;
            /** The view of the access proposal. */
            view: string | null;
          }>;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** List approvals associated with a specific Drive file. */
    "googledrive.approvals.list": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** When true, includes files from shared drives. */
        includeSharedDrives?: boolean;
        /**
         * The maximum number of items to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The list of approvals for the file. */
        approvals: Array<{
          /** The ID of the file to which this approval applies. */
          fileId: string;
          /** The unique identifier of the approval. */
          approvalId: string;
          /** The current status of the approval. */
          status: string | null;
          /** The time when the approval was created (RFC 3339 date-time). */
          createTime: string | null;
          /** The message included with the approval request. */
          requestMessage: string | null;
          /** The email address of the user who requested the approval. */
          requesterEmailAddress: string | null;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Get metadata for a specific Google Drive app by app ID. */
    "googledrive.apps.get": {
      input: {
        /**
         * The ID of the Google Drive app to retrieve.
         * @minLength 1
         */
        appId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the page token for monitoring future Drive changes. */
    "googledrive.changes.getStartPageToken": {
      input: {
        /**
         * The ID of the shared drive for which the starting page token is requested.
         * @minLength 1
         */
        driveId?: string;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /** Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean;
      };
      output: {
        /** The starting page token for listing future changes. */
        startPageToken: string;
        /** The type of the resource. */
        kind: string | null;
      };
    };
    /** List file and drive changes for incremental sync workflows. */
    "googledrive.changes.list": {
      input: {
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The maximum number of changes to return per page (1–1000).
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The shared drive from which changes are returned.
         * @minLength 1
         */
        driveId?: string;
        /**
         * A comma-separated list of spaces to query within the corpora (e.g. drive or appDataFolder).
         * @minLength 1
         */
        spaces?: string;
        /**
         * A comma-separated list of IDs of labels to include in the labelInfo part of the response.
         * @minLength 1
         */
        includeLabels?: string;
        /** Whether to include changes indicating that items have been removed from the list of changes. */
        includeRemoved?: boolean;
        /** Whether to restrict the results to changes inside the My Drive hierarchy. */
        restrictToMyDrive?: boolean;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /** Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes. */
        includeCorpusRemovals?: boolean;
        /** Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean;
        /**
         * Specifies which additional view's permissions to include in the response.
         * @minLength 1
         */
        includePermissionsForView?: string;
      };
      output: {
        /** The list of changes. */
        changes: Array<{
          /** The unique identifier of the change. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The type of the change (file or drive). */
          changeType: string | null;
          /** Whether the file or shared drive has been removed from this list of changes. */
          removed?: boolean;
          /** The time of this change (RFC 3339 date-time). */
          time: string | null;
          /** The ID of the file which changed. */
          fileId: string | null;
          /** The ID of the shared drive associated with this change. */
          driveId: string | null;
          /** The updated state of the file, if the change is for a file and the file still exists. */
          file?: {
            /** The unique identifier of the file. */
            id: string;
            /** The name of the file. */
            name: string;
            /** The MIME type of the file. */
            mimeType: string;
            /** A link for opening the file in a relevant Google editor or viewer in a browser. */
            webViewLink: string | null;
            /** The time at which the file was created (RFC 3339 date-time). */
            createdTime: string | null;
            /** The last time the file was modified by anyone (RFC 3339 date-time). */
            modifiedTime: string | null;
            /** The size of the file's content in bytes. */
            sizeBytes: number | null;
            /** The ID of the shared drive the file belongs to. */
            driveId: string | null;
            /** The IDs of the parent folders containing the file. */
            parents?: Array<string>;
            /** The owners of the file. */
            owners?: Array<{
              /** The display name of the owner. */
              displayName: string | null;
              /** The email address of the owner. */
              emailAddress: string | null;
              /** The permission ID of the owner. */
              permissionId: string | null;
              /** A link to the owner's profile photo. */
              photoLink: string | null;
            }>;
            /** Whether the file has been shared. */
            shared?: boolean;
            /** Whether the user has starred the file. */
            starred?: boolean;
            /** Whether the file has been trashed. */
            trashed?: boolean;
          };
        }>;
        /** The page token for the next page of changes. */
        nextPageToken: string | null;
        /** The starting page token for future changes, present only if this is the last page of changes. */
        newStartPageToken: string | null;
      };
    };
    /** Create a comment on a Drive file, optionally with anchor or quoted file content. */
    "googledrive.comments.create": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The plain text content of the comment.
         * @minLength 1
         */
        content: string;
        /** A region of the document to anchor the comment to, as a JSON string. */
        anchor?: string;
        /** The value of the quoted file content to include in the comment. */
        quoted_file_content_value?: string;
        /**
         * The MIME type of the quoted file content.
         * @minLength 1
         */
        quoted_file_content_mime_type?: string;
      };
      output: {
        /** The unique identifier of the comment. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** A region of the document represented as a JSON string. */
        anchor: string | null;
        /** The author of the comment. */
        author?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** The plain text content of the comment. */
        content: string | null;
        /** Whether the comment has been deleted. */
        deleted?: boolean;
        /** Whether the comment has been resolved by one of its replies. */
        resolved?: boolean;
        /** The time at which the comment was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The content of the comment with HTML formatting. */
        htmlContent: string | null;
        /** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The file content to which the comment refers. */
        quotedFileContent?: Record<string, unknown>;
        /** The full list of replies to the comment in order. */
        replies?: Array<{
          /** The unique identifier of the reply. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The action this reply performed on the parent comment. */
          action?: string | null;
          /** The author of the reply. */
          author?: {
            /** Whether this user is the current authenticated user. */
            me?: boolean;
            /** The type of the resource. */
            kind?: string | null;
            /** The display name of the user. */
            displayName: string | null;
            /** The email address of the user. */
            emailAddress: string | null;
            /** The permission ID of the user. */
            permissionId: string | null;
            /** A link to the user's profile photo. */
            photoLink: string | null;
          };
          /** The plain text content of the reply. */
          content: string | null;
          /** Whether the reply has been deleted. */
          deleted?: boolean;
          /** The time at which the reply was created (RFC 3339 date-time). */
          createdTime: string | null;
          /** The content of the reply with HTML formatting. */
          htmlContent: string | null;
          /** The last time the reply was modified (RFC 3339 date-time). */
          modifiedTime: string | null;
        }>;
      };
    };
    /** Permanently delete a comment thread from a Drive file. */
    "googledrive.comments.delete": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
      };
      output: {
        /** The ID of the file from which the comment was deleted. */
        fileId: string;
        /** The ID of the deleted comment. */
        commentId: string;
        /** Indicates that the comment was successfully deleted. */
        deleted: true;
      };
    };
    /** Get a specific comment on a Drive file by comment ID. */
    "googledrive.comments.get": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
        /** Whether to return deleted comments. */
        includeDeleted?: boolean;
      };
      output: {
        /** The unique identifier of the comment. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** A region of the document represented as a JSON string. */
        anchor: string | null;
        /** The author of the comment. */
        author?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** The plain text content of the comment. */
        content: string | null;
        /** Whether the comment has been deleted. */
        deleted?: boolean;
        /** Whether the comment has been resolved by one of its replies. */
        resolved?: boolean;
        /** The time at which the comment was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The content of the comment with HTML formatting. */
        htmlContent: string | null;
        /** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The file content to which the comment refers. */
        quotedFileContent?: Record<string, unknown>;
        /** The full list of replies to the comment in order. */
        replies?: Array<{
          /** The unique identifier of the reply. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The action this reply performed on the parent comment. */
          action?: string | null;
          /** The author of the reply. */
          author?: {
            /** Whether this user is the current authenticated user. */
            me?: boolean;
            /** The type of the resource. */
            kind?: string | null;
            /** The display name of the user. */
            displayName: string | null;
            /** The email address of the user. */
            emailAddress: string | null;
            /** The permission ID of the user. */
            permissionId: string | null;
            /** A link to the user's profile photo. */
            photoLink: string | null;
          };
          /** The plain text content of the reply. */
          content: string | null;
          /** Whether the reply has been deleted. */
          deleted?: boolean;
          /** The time at which the reply was created (RFC 3339 date-time). */
          createdTime: string | null;
          /** The content of the reply with HTML formatting. */
          htmlContent: string | null;
          /** The last time the reply was modified (RFC 3339 date-time). */
          modifiedTime: string | null;
        }>;
      };
    };
    /** List comments on a Drive file with pagination. */
    "googledrive.comments.list": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** The fields to include in the response. */
        fields?: string;
        /**
         * The maximum number of comments to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
        /** Whether to include deleted comments in the results. */
        includeDeleted?: boolean;
        /**
         * Restricts results to comments modified after this RFC 3339 date-time.
         * @minLength 1
         */
        startModifiedTime?: string;
      };
      output: {
        /** The list of comments on the file. */
        comments: Array<{
          /** The unique identifier of the comment. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** A region of the document represented as a JSON string. */
          anchor: string | null;
          /** The author of the comment. */
          author?: {
            /** Whether this user is the current authenticated user. */
            me?: boolean;
            /** The type of the resource. */
            kind?: string | null;
            /** The display name of the user. */
            displayName: string | null;
            /** The email address of the user. */
            emailAddress: string | null;
            /** The permission ID of the user. */
            permissionId: string | null;
            /** A link to the user's profile photo. */
            photoLink: string | null;
          };
          /** The plain text content of the comment. */
          content: string | null;
          /** Whether the comment has been deleted. */
          deleted?: boolean;
          /** Whether the comment has been resolved by one of its replies. */
          resolved?: boolean;
          /** The time at which the comment was created (RFC 3339 date-time). */
          createdTime: string | null;
          /** The content of the comment with HTML formatting. */
          htmlContent: string | null;
          /** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
          modifiedTime: string | null;
          /** The file content to which the comment refers. */
          quotedFileContent?: Record<string, unknown>;
          /** The full list of replies to the comment in order. */
          replies?: Array<{
            /** The unique identifier of the reply. */
            id: string;
            /** The type of the resource. */
            kind: string | null;
            /** The action this reply performed on the parent comment. */
            action?: string | null;
            /** The author of the reply. */
            author?: {
              /** Whether this user is the current authenticated user. */
              me?: boolean;
              /** The type of the resource. */
              kind?: string | null;
              /** The display name of the user. */
              displayName: string | null;
              /** The email address of the user. */
              emailAddress: string | null;
              /** The permission ID of the user. */
              permissionId: string | null;
              /** A link to the user's profile photo. */
              photoLink: string | null;
            };
            /** The plain text content of the reply. */
            content: string | null;
            /** Whether the reply has been deleted. */
            deleted?: boolean;
            /** The time at which the reply was created (RFC 3339 date-time). */
            createdTime: string | null;
            /** The content of the reply with HTML formatting. */
            htmlContent: string | null;
            /** The last time the reply was modified (RFC 3339 date-time). */
            modifiedTime: string | null;
          }>;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Update the content of an existing Drive file comment. */
    "googledrive.comments.update": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
        /** The fields to include in the response. */
        fields?: string;
        /**
         * The new plain text content of the comment.
         * @minLength 1
         */
        content?: string;
        /** Whether the comment should be marked as resolved. */
        resolved?: boolean;
      };
      output: {
        /** The unique identifier of the comment. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** A region of the document represented as a JSON string. */
        anchor: string | null;
        /** The author of the comment. */
        author?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** The plain text content of the comment. */
        content: string | null;
        /** Whether the comment has been deleted. */
        deleted?: boolean;
        /** Whether the comment has been resolved by one of its replies. */
        resolved?: boolean;
        /** The time at which the comment was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The content of the comment with HTML formatting. */
        htmlContent: string | null;
        /** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The file content to which the comment refers. */
        quotedFileContent?: Record<string, unknown>;
        /** The full list of replies to the comment in order. */
        replies?: Array<{
          /** The unique identifier of the reply. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The action this reply performed on the parent comment. */
          action?: string | null;
          /** The author of the reply. */
          author?: {
            /** Whether this user is the current authenticated user. */
            me?: boolean;
            /** The type of the resource. */
            kind?: string | null;
            /** The display name of the user. */
            displayName: string | null;
            /** The email address of the user. */
            emailAddress: string | null;
            /** The permission ID of the user. */
            permissionId: string | null;
            /** A link to the user's profile photo. */
            photoLink: string | null;
          };
          /** The plain text content of the reply. */
          content: string | null;
          /** Whether the reply has been deleted. */
          deleted?: boolean;
          /** The time at which the reply was created (RFC 3339 date-time). */
          createdTime: string | null;
          /** The content of the reply with HTML formatting. */
          htmlContent: string | null;
          /** The last time the reply was modified (RFC 3339 date-time). */
          modifiedTime: string | null;
        }>;
      };
    };
    /** Create a new shared drive. */
    "googledrive.drives.create": {
      input: {
        /**
         * The name of the shared drive to create.
         * @minLength 1
         */
        name: string;
        /**
         * A unique ID for this request, generated by the client.
         * @minLength 1
         */
        requestId?: string;
        /** Whether to hide the shared drive from the default view. */
        hidden?: boolean;
        /**
         * The ID of the theme to use for the shared drive.
         * @minLength 1
         */
        themeId?: string;
        /**
         * The color of the shared drive as an RGB hex string.
         * @minLength 1
         */
        colorRgb?: string;
        /** An image file and cropping parameters for the background image of the shared drive. */
        backgroundImageFile?: {
          /**
           * The ID of an image file in Google Drive to use for the background image.
           * @minLength 1
           */
          id: string;
          /**
           * The width of the cropped image in the closed range [0, 1].
           * @minimum 0
           * @maximum 1
           */
          width: number;
          /**
           * The X coordinate of the upper left corner of the cropping area in the closed range [0, 1].
           * @minimum 0
           * @maximum 1
           */
          xCoordinate: number;
          /**
           * The Y coordinate of the upper left corner of the cropping area in the closed range [0, 1].
           * @minimum 0
           * @maximum 1
           */
          yCoordinate: number;
        };
      };
      output: {
        /** The unique identifier of the shared drive. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The name of the shared drive. */
        name: string;
        /** Whether the shared drive is hidden from the default view. */
        hidden?: boolean;
        /** The color of the shared drive as an RGB hex string. */
        colorRgb: string | null;
        /** The time at which the shared drive was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The organizational unit ID of the shared drive. */
        orgUnitId: string | null;
        /** The ID of the theme from which the background image and color are set. */
        themeId: string | null;
        /** A short-lived link to this shared drive's background image. */
        backgroundImageLink: string | null;
        /** Capabilities the current user has on this shared drive. */
        capabilities?: Record<string, unknown>;
        /** A set of restrictions that apply to this shared drive or items inside this shared drive. */
        restrictions?: Record<string, unknown>;
      };
    };
    /** Permanently delete a shared drive. */
    "googledrive.drives.delete": {
      input: {
        /**
         * The ID of the shared drive.
         * @minLength 1
         */
        driveId?: string;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
        /** Whether any items inside the shared drive should also be deleted. Only supported when useDomainAdminAccess is true. */
        allowItemDeletion?: boolean;
      };
      output: {
        /** The unique identifier of the deleted shared drive. */
        driveId: string;
        /** Indicates that the shared drive was successfully deleted. */
        deleted: true;
      };
    };
    /** Get a shared drive by drive ID. */
    "googledrive.drives.get": {
      input: {
        /**
         * The ID of the shared drive.
         * @minLength 1
         */
        driveId?: string;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
      };
      output: {
        /** The unique identifier of the shared drive. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The name of the shared drive. */
        name: string;
        /** Whether the shared drive is hidden from the default view. */
        hidden?: boolean;
        /** The color of the shared drive as an RGB hex string. */
        colorRgb: string | null;
        /** The time at which the shared drive was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The organizational unit ID of the shared drive. */
        orgUnitId: string | null;
        /** The ID of the theme from which the background image and color are set. */
        themeId: string | null;
        /** A short-lived link to this shared drive's background image. */
        backgroundImageLink: string | null;
        /** Capabilities the current user has on this shared drive. */
        capabilities?: Record<string, unknown>;
        /** A set of restrictions that apply to this shared drive or items inside this shared drive. */
        restrictions?: Record<string, unknown>;
      };
    };
    /** Hide a shared drive from the default Drive view. */
    "googledrive.drives.hide": {
      input: {
        /**
         * The ID of the shared drive.
         * @minLength 1
         */
        driveId?: string;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
      };
      output: {
        /** The unique identifier of the shared drive. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The name of the shared drive. */
        name: string;
        /** Whether the shared drive is hidden from the default view. */
        hidden?: boolean;
        /** The color of the shared drive as an RGB hex string. */
        colorRgb: string | null;
        /** The time at which the shared drive was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The organizational unit ID of the shared drive. */
        orgUnitId: string | null;
        /** The ID of the theme from which the background image and color are set. */
        themeId: string | null;
        /** A short-lived link to this shared drive's background image. */
        backgroundImageLink: string | null;
        /** Capabilities the current user has on this shared drive. */
        capabilities?: Record<string, unknown>;
        /** A set of restrictions that apply to this shared drive or items inside this shared drive. */
        restrictions?: Record<string, unknown>;
      };
    };
    /** List shared drives accessible to the connected account. */
    "googledrive.drives.list": {
      input: {
        /** A query string to filter the shared drives. */
        q?: string;
        /**
         * The maximum number of shared drives to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
      };
      output: {
        /** The list of shared drives. */
        drives: Array<{
          /** The unique identifier of the shared drive. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The name of the shared drive. */
          name: string;
          /** Whether the shared drive is hidden from the default view. */
          hidden?: boolean;
          /** The color of the shared drive as an RGB hex string. */
          colorRgb: string | null;
          /** The time at which the shared drive was created (RFC 3339 date-time). */
          createdTime: string | null;
          /** The organizational unit ID of the shared drive. */
          orgUnitId: string | null;
          /** The ID of the theme from which the background image and color are set. */
          themeId: string | null;
          /** A short-lived link to this shared drive's background image. */
          backgroundImageLink: string | null;
          /** Capabilities the current user has on this shared drive. */
          capabilities?: Record<string, unknown>;
          /** A set of restrictions that apply to this shared drive or items inside this shared drive. */
          restrictions?: Record<string, unknown>;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Unhide a shared drive and restore it to the default Drive view. */
    "googledrive.drives.unhide": {
      input: {
        /**
         * The ID of the shared drive.
         * @minLength 1
         */
        driveId?: string;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
      };
      output: {
        /** The unique identifier of the shared drive. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The name of the shared drive. */
        name: string;
        /** Whether the shared drive is hidden from the default view. */
        hidden?: boolean;
        /** The color of the shared drive as an RGB hex string. */
        colorRgb: string | null;
        /** The time at which the shared drive was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The organizational unit ID of the shared drive. */
        orgUnitId: string | null;
        /** The ID of the theme from which the background image and color are set. */
        themeId: string | null;
        /** A short-lived link to this shared drive's background image. */
        backgroundImageLink: string | null;
        /** Capabilities the current user has on this shared drive. */
        capabilities?: Record<string, unknown>;
        /** A set of restrictions that apply to this shared drive or items inside this shared drive. */
        restrictions?: Record<string, unknown>;
      };
    };
    /** Update metadata or restrictions on a shared drive. */
    "googledrive.drives.update": {
      input: {
        /**
         * The ID of the shared drive.
         * @minLength 1
         */
        driveId?: string;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
        /**
         * The new name for the shared drive.
         * @minLength 1
         */
        name?: string;
        /** Whether to hide the shared drive from the default view. */
        hidden?: boolean;
        /**
         * The ID of the theme to apply to the shared drive.
         * @minLength 1
         */
        themeId?: string;
        /**
         * The new color of the shared drive as an RGB hex string.
         * @minLength 1
         */
        colorRgb?: string;
        /** A set of restrictions to apply to this shared drive. */
        restrictions?: {
          /** Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. */
          domainUsersOnly?: boolean;
          /** Whether access to items inside this shared drive is restricted to its members. */
          driveMembersOnly?: boolean;
          /** Whether administrative privileges on this shared drive are required to modify restrictions. */
          adminManagedRestrictions?: boolean;
          /** Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. */
          copyRequiresWriterPermission?: boolean;
          /** Whether the ability to share files, folders, or a shared drive is restricted to users with the organizer role. */
          sharingFoldersRequiresOrganizerPermission?: boolean;
        };
        /** An image file and cropping parameters for the background image of the shared drive. */
        backgroundImageFile?: {
          /**
           * The ID of an image file in Google Drive to use for the background image.
           * @minLength 1
           */
          id: string;
          /**
           * The width of the cropped image in the closed range [0, 1].
           * @minimum 0
           * @maximum 1
           */
          width: number;
          /**
           * The X coordinate of the upper left corner of the cropping area in the closed range [0, 1].
           * @minimum 0
           * @maximum 1
           */
          xCoordinate: number;
          /**
           * The Y coordinate of the upper left corner of the cropping area in the closed range [0, 1].
           * @minimum 0
           * @maximum 1
           */
          yCoordinate: number;
        };
      };
      output: {
        /** The unique identifier of the shared drive. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The name of the shared drive. */
        name: string;
        /** Whether the shared drive is hidden from the default view. */
        hidden?: boolean;
        /** The color of the shared drive as an RGB hex string. */
        colorRgb: string | null;
        /** The time at which the shared drive was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The organizational unit ID of the shared drive. */
        orgUnitId: string | null;
        /** The ID of the theme from which the background image and color are set. */
        themeId: string | null;
        /** A short-lived link to this shared drive's background image. */
        backgroundImageLink: string | null;
        /** Capabilities the current user has on this shared drive. */
        capabilities?: Record<string, unknown>;
        /** A set of restrictions that apply to this shared drive or items inside this shared drive. */
        restrictions?: Record<string, unknown>;
      };
    };
    /** Copy a Drive file and optionally override official File metadata. */
    "googledrive.files.copy": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The name for the copied file.
         * @minLength 1
         */
        name?: string;
        /**
         * A list of parent folder IDs for the copied file.
         * @minItems 1
         */
        parents?: Array<string>;
        /**
         * A short description for the copied file.
         * @minLength 1
         */
        description?: string;
        /**
         * The MIME type of the copied file.
         * @minLength 1
         */
        mimeType?: string;
        /** Whether to star the copied file. */
        starred?: boolean;
        /** A collection of arbitrary key-value pairs private to the requesting app. */
        appProperties?: Record<string, string>;
        /** A collection of arbitrary key-value pairs visible to all apps. */
        properties?: Record<string, string>;
      };
      output: {
        /** The unique identifier of the file. */
        id: string;
        /** The name of the file. */
        name: string;
        /** The MIME type of the file. */
        mimeType: string;
        /** A link for opening the file in a relevant Google editor or viewer in a browser. */
        webViewLink: string | null;
        /** The time at which the file was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The last time the file was modified by anyone (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The size of the file's content in bytes. */
        sizeBytes: number | null;
        /** The ID of the shared drive the file belongs to. */
        driveId: string | null;
        /** The IDs of the parent folders containing the file. */
        parents?: Array<string>;
        /** The owners of the file. */
        owners?: Array<{
          /** The display name of the owner. */
          displayName: string | null;
          /** The email address of the owner. */
          emailAddress: string | null;
          /** The permission ID of the owner. */
          permissionId: string | null;
          /** A link to the owner's profile photo. */
          photoLink: string | null;
        }>;
        /** Whether the file has been shared. */
        shared?: boolean;
        /** Whether the user has starred the file. */
        starred?: boolean;
        /** Whether the file has been trashed. */
        trashed?: boolean;
      };
    };
    /** Create a Drive file with official File metadata and optional connector media upload content. */
    "googledrive.files.create": {
      input: {
        /**
         * The name of the file.
         * @minLength 1
         */
        name?: string;
        /**
         * The MIME type of the file.
         * @minLength 1
         */
        mimeType?: string;
        /**
         * A short description of the file.
         * @minLength 1
         */
        description?: string;
        /**
         * A list of parent folder IDs to place the file in.
         * @minItems 1
         */
        parents?: Array<string>;
        /** Whether the user has starred the file. */
        starred?: boolean;
        /** Whether to move the file to the trash. */
        trashed?: boolean;
        /** A collection of arbitrary key-value pairs which are private to the requesting app. */
        appProperties?: Record<string, string>;
        /** A collection of arbitrary key-value pairs which are visible to all apps. */
        properties?: Record<string, string>;
        /**
         * Connector media upload content encoded as a Base64 string.
         * @minLength 1
         */
        contentBase64?: string;
        /** Connector text media upload content. */
        text?: string;
      };
      output: {
        /** The unique identifier of the file. */
        id: string;
        /** The name of the file. */
        name: string;
        /** The MIME type of the file. */
        mimeType: string;
        /** A link for opening the file in a relevant Google editor or viewer in a browser. */
        webViewLink: string | null;
        /** The time at which the file was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The last time the file was modified by anyone (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The size of the file's content in bytes. */
        sizeBytes: number | null;
        /** The ID of the shared drive the file belongs to. */
        driveId: string | null;
        /** The IDs of the parent folders containing the file. */
        parents?: Array<string>;
        /** The owners of the file. */
        owners?: Array<{
          /** The display name of the owner. */
          displayName: string | null;
          /** The email address of the owner. */
          emailAddress: string | null;
          /** The permission ID of the owner. */
          permissionId: string | null;
          /** A link to the owner's profile photo. */
          photoLink: string | null;
        }>;
        /** Whether the file has been shared. */
        shared?: boolean;
        /** Whether the user has starred the file. */
        starred?: boolean;
        /** Whether the file has been trashed. */
        trashed?: boolean;
      };
    };
    /** Permanently delete a Drive file or folder by ID. */
    "googledrive.files.delete": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** When true, includes files from shared drives. */
        includeSharedDrives?: boolean;
      };
      output: {
        /** The unique identifier of the deleted file. */
        fileId: string;
        /** Indicates that the file was successfully deleted. */
        deleted: true;
      };
    };
    /** Permanently empty the user's trash or a shared drive's trash. */
    "googledrive.files.emptyTrash": {
      input: {
        /**
         * The ID of the shared drive whose trash to empty.
         * @minLength 1
         */
        driveId?: string;
      };
      output: {
        /** Indicates that the trash was successfully emptied. */
        success: true;
      };
    };
    /** Export a Google Workspace file to the requested MIME type and return a transit URL for the exported content. */
    "googledrive.files.export": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** When true, includes files from shared drives. */
        includeSharedDrives?: boolean;
        /**
         * The MIME type to export the file to (required for Google Workspace files).
         * @minLength 1
         */
        mimeType?: string;
      };
      output: {
        /** The unique identifier of the downloaded file. */
        fileId: string;
        /** The name of the downloaded file. */
        name: string;
        /** The MIME type of the downloaded file content. */
        mimeType: string;
        /** The size of the downloaded file content in bytes. */
        sizeBytes: number | null;
        /** A temporary transit URL from which the file content can be retrieved. */
        transitUrl: string;
      };
    };
    /** Generate one or more Drive file IDs for later create or copy requests. */
    "googledrive.files.generateIds": {
      input: {
        /**
         * The number of IDs to generate (1–1000).
         * @minimum 1
         * @maximum 1000
         */
        count?: number;
        /** The space in which the IDs can be used to create new files (drive or appDataFolder). */
        space?: "drive" | "appDataFolder";
        /**
         * The type of items which the IDs can be used for.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** The list of generated file IDs. */
        ids: Array<string>;
        /** The type of space for which the IDs can be used. */
        space: string;
        /** The type of resource that the IDs can be used to create. */
        kind: string;
      };
    };
    /** Get metadata for a Drive file by ID. */
    "googledrive.files.get": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** When true, includes files from shared drives. */
        includeSharedDrives?: boolean;
      };
      output: {
        /** The unique identifier of the file. */
        id: string;
        /** The name of the file. */
        name: string;
        /** The MIME type of the file. */
        mimeType: string;
        /** A link for opening the file in a relevant Google editor or viewer in a browser. */
        webViewLink: string | null;
        /** The time at which the file was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The last time the file was modified by anyone (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The size of the file's content in bytes. */
        sizeBytes: number | null;
        /** The ID of the shared drive the file belongs to. */
        driveId: string | null;
        /** The IDs of the parent folders containing the file. */
        parents?: Array<string>;
        /** The owners of the file. */
        owners?: Array<{
          /** The display name of the owner. */
          displayName: string | null;
          /** The email address of the owner. */
          emailAddress: string | null;
          /** The permission ID of the owner. */
          permissionId: string | null;
          /** A link to the owner's profile photo. */
          photoLink: string | null;
        }>;
        /** Whether the file has been shared. */
        shared?: boolean;
        /** Whether the user has starred the file. */
        starred?: boolean;
        /** Whether the file has been trashed. */
        trashed?: boolean;
      };
    };
    /** List Google Drive files using the official Drive query and pagination parameters. */
    "googledrive.files.list": {
      input: {
        /** Bodies of items to which the query applies. */
        corpora?: string;
        /** The source of files to list. */
        corpus?: string;
        /**
         * ID of the shared drive to search.
         * @minLength 1
         */
        driveId?: string;
        /** Whether both My Drive and shared drive items should be included in results. */
        includeItemsFromAllDrives?: boolean;
        /** A comma-separated list of label IDs to include in labelInfo. */
        includeLabels?: string;
        /** Specifies which additional view's permissions to include in the response. */
        includePermissionsForView?: string;
        /** A comma-separated list of sort keys. */
        orderBy?: string;
        /**
         * The maximum number of files to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request.
         * @minLength 1
         */
        pageToken?: string;
        /** A Google Drive query string for filtering files. */
        q?: string;
        /** A comma-separated list of spaces to query. */
        spaces?: string;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /**
         * Deprecated Team Drive ID.
         * @minLength 1
         */
        teamDriveId?: string;
      };
      output: {
        /** The list of files matching the search query. */
        files: Array<{
          /** The unique identifier of the file. */
          id: string;
          /** The name of the file. */
          name: string;
          /** The MIME type of the file. */
          mimeType: string;
          /** A link for opening the file in a relevant Google editor or viewer in a browser. */
          webViewLink: string | null;
          /** The time at which the file was created (RFC 3339 date-time). */
          createdTime: string | null;
          /** The last time the file was modified by anyone (RFC 3339 date-time). */
          modifiedTime: string | null;
          /** The size of the file's content in bytes. */
          sizeBytes: number | null;
          /** The ID of the shared drive the file belongs to. */
          driveId: string | null;
          /** The IDs of the parent folders containing the file. */
          parents?: Array<string>;
          /** The owners of the file. */
          owners?: Array<{
            /** The display name of the owner. */
            displayName: string | null;
            /** The email address of the owner. */
            emailAddress: string | null;
            /** The permission ID of the owner. */
            permissionId: string | null;
            /** A link to the owner's profile photo. */
            photoLink: string | null;
          }>;
          /** Whether the file has been shared. */
          shared?: boolean;
          /** Whether the user has starred the file. */
          starred?: boolean;
          /** Whether the file has been trashed. */
          trashed?: boolean;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** List the Drive labels currently applied to a file. */
    "googledrive.files.listLabels": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The maximum number of labels to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
      };
      output: {
        /** The list of labels applied to the file. */
        labels: Array<{
          /** The unique identifier of the label. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The revision ID of the label. */
          revisionId: string;
          /** A map of the label's fields, keyed by field ID. */
          fields: Record<string, {
              /** The type of the label field value. */
              valueType: string;
              /** The text values of the field. */
              text?: Array<string>;
              /** The integer values of the field. */
              integer?: Array<number>;
              /** The selection option IDs of the field. */
              selection?: Array<string>;
              /** The date values of the field as RFC 3339 date strings. */
              dateString?: Array<string>;
              /** The user values of the field. */
              user?: Array<{
                /** Whether this user is the current authenticated user. */
                me?: boolean;
                /** The type of the resource. */
                kind?: string | null;
                /** The display name of the user. */
                displayName: string | null;
                /** The email address of the user. */
                emailAddress: string | null;
                /** The permission ID of the user. */
                permissionId: string | null;
                /** A link to the user's profile photo. */
                photoLink: string | null;
              }>;
            }>;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Add, update, or remove Drive labels on a file. */
    "googledrive.files.modifyLabels": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The type of the resource for this labels modification request.
         * @minLength 1
         */
        kind?: string;
        /**
         * The list of label modifications to apply to the file.
         * @minItems 1
         */
        labelModifications: Array<{
          /**
           * The type of the resource for this label modification.
           * @minLength 1
           */
          kind?: string;
          /**
           * The ID of the label to modify.
           * @minLength 1
           */
          labelId: string;
          /** When true, removes this label from the file. */
          removeLabel?: boolean;
          /**
           * The list of field modifications to apply to this label.
           * @minItems 1
           */
          fieldModifications?: Array<{
            /**
             * The type of the resource for this field modification.
             * @minLength 1
             */
            kind?: string;
            /**
             * The ID of the label field to modify.
             * @minLength 1
             */
            fieldId: string;
            /** When true, clears all values from the label field. */
            unsetValues?: boolean;
            /**
             * The date values to set on the label field (RFC 3339 date strings).
             * @minItems 1
             */
            setDateValues?: Array<string>;
            /**
             * The text values to set on the label field.
             * @minItems 1
             */
            setTextValues?: Array<string>;
            /**
             * The user email addresses to set as user values on the label field.
             * @minItems 1
             */
            setUserValues?: Array<string>;
            /**
             * The integer values to set on the label field.
             * @minItems 1
             */
            setIntegerValues?: Array<string>;
            /**
             * The selection option IDs to set on the label field.
             * @minItems 1
             */
            setSelectionValues?: Array<string>;
          }>;
        }>;
      };
      output: {
        /** The list of labels that were modified on the file. */
        modifiedLabels: Array<{
          /** The unique identifier of the label. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The revision ID of the label. */
          revisionId: string;
          /** A map of the label's fields, keyed by field ID. */
          fields: Record<string, {
              /** The type of the label field value. */
              valueType: string;
              /** The text values of the field. */
              text?: Array<string>;
              /** The integer values of the field. */
              integer?: Array<number>;
              /** The selection option IDs of the field. */
              selection?: Array<string>;
              /** The date values of the field as RFC 3339 date strings. */
              dateString?: Array<string>;
              /** The user values of the field. */
              user?: Array<{
                /** Whether this user is the current authenticated user. */
                me?: boolean;
                /** The type of the resource. */
                kind?: string | null;
                /** The display name of the user. */
                displayName: string | null;
                /** The email address of the user. */
                emailAddress: string | null;
                /** The permission ID of the user. */
                permissionId: string | null;
                /** A link to the user's profile photo. */
                photoLink: string | null;
              }>;
            }>;
        }>;
      };
    };
    /** Patch a Drive file with official metadata, parent query parameters, and optional connector media upload content. */
    "googledrive.files.update": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The new name for the file.
         * @minLength 1
         */
        name?: string;
        /**
         * The new MIME type of the file.
         * @minLength 1
         */
        mimeType?: string;
        /**
         * A new short description of the file.
         * @minLength 1
         */
        description?: string;
        /**
         * A comma-separated list of parent folder IDs to add.
         * @minLength 1
         */
        addParents?: string;
        /**
         * A comma-separated list of parent folder IDs to remove.
         * @minLength 1
         */
        removeParents?: string;
        /** Whether the user has starred the file. */
        starred?: boolean;
        /** Whether the file is in the trash. */
        trashed?: boolean;
        /** A collection of arbitrary key-value pairs private to the requesting app. */
        appProperties?: Record<string, string>;
        /** A collection of arbitrary key-value pairs visible to all apps. */
        properties?: Record<string, string>;
        /**
         * The new file content encoded as a Base64 string.
         * @minLength 1
         */
        contentBase64?: string;
        /** The new text content to replace the file body. */
        text?: string;
      };
      output: {
        /** The unique identifier of the file. */
        id: string;
        /** The name of the file. */
        name: string;
        /** The MIME type of the file. */
        mimeType: string;
        /** A link for opening the file in a relevant Google editor or viewer in a browser. */
        webViewLink: string | null;
        /** The time at which the file was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The last time the file was modified by anyone (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The size of the file's content in bytes. */
        sizeBytes: number | null;
        /** The ID of the shared drive the file belongs to. */
        driveId: string | null;
        /** The IDs of the parent folders containing the file. */
        parents?: Array<string>;
        /** The owners of the file. */
        owners?: Array<{
          /** The display name of the owner. */
          displayName: string | null;
          /** The email address of the owner. */
          emailAddress: string | null;
          /** The permission ID of the owner. */
          permissionId: string | null;
          /** A link to the owner's profile photo. */
          photoLink: string | null;
        }>;
        /** Whether the file has been shared. */
        shared?: boolean;
        /** Whether the user has starred the file. */
        starred?: boolean;
        /** Whether the file has been trashed. */
        trashed?: boolean;
      };
    };
    /** Create a permission on a Drive file or shared drive. */
    "googledrive.permissions.create": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** The role granted by this permission. */
        role: "owner" | "organizer" | "fileOrganizer" | "writer" | "commenter" | "reader";
        /** The type of the grantee (user, group, domain, or anyone). */
        type: "user" | "group" | "domain" | "anyone";
        /**
         * The domain to which this permission refers (required for domain type).
         * @minLength 1
         */
        domain?: string;
        /**
         * The email address of the user or group (required for user or group type).
         * @minLength 1
         */
        emailAddress?: string;
        /** A custom message to include in the notification email. */
        email_message?: string;
        /**
         * The time at which this permission will expire (RFC 3339 date-time).
         * @minLength 1
         */
        expiration_time?: string;
        /** Whether to transfer ownership to the specified user (for owner role only). */
        transfer_ownership?: boolean;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /** Whether the permission allows the file to be discovered through search. */
        allow_file_discovery?: boolean;
        /** Whether to move the file to the new owner's My Drive root folder. */
        move_to_new_owners_root?: boolean;
        /** Whether to send a notification email when sharing to users or groups. */
        send_notification_email?: boolean;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
      };
      output: {
        /** The unique identifier of the permission. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The role granted by this permission (e.g. owner, writer, reader). */
        role: string | null;
        /** The type of grantee (user, group, domain, or anyone). */
        type: string | null;
        /** The domain to which this permission refers. */
        domain: string | null;
        /** Whether the account associated with this permission has been deleted. */
        deleted?: boolean;
        /** A link to the user's profile photo. */
        photoLink: string | null;
        /** The display name of the user or group granted this permission. */
        displayName: string | null;
        /** The email address of the user or group granted this permission. */
        emailAddress: string | null;
        /** Whether the account associated with this permission is a pending owner. */
        pendingOwner?: boolean;
        /** The time at which this permission will expire (RFC 3339 date-time). */
        expirationTime: string | null;
        /** Whether the permission allows the file to be discovered through search. */
        allowFileDiscovery?: boolean;
        /** Details of whether the permission on the shared drive item is inherited or directly set. */
        permissionDetails?: Array<{
          /** The primary role for this user. */
          role: string | null;
          /** Whether this permission is inherited from a parent folder. */
          inherited?: boolean;
          /** The ID of the item from which this permission is inherited. */
          inheritedFrom: string | null;
          /** The permission type for this user. */
          permissionType: string | null;
        }>;
      };
    };
    /** Delete a permission from a Drive file or shared drive. */
    "googledrive.permissions.delete": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the permission.
         * @minLength 1
         */
        permissionId?: string;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
      };
      output: {
        /** The ID of the file from which the permission was deleted. */
        fileId: string;
        /** The ID of the deleted permission. */
        permissionId: string;
        /** Indicates that the permission was successfully deleted. */
        deleted: true;
      };
    };
    /** Get a specific permission on a Drive file or shared drive by permission ID. */
    "googledrive.permissions.get": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the permission.
         * @minLength 1
         */
        permissionId?: string;
        /** The fields to include in the response. */
        fields?: string;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
      };
      output: {
        /** The unique identifier of the permission. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The role granted by this permission (e.g. owner, writer, reader). */
        role: string | null;
        /** The type of grantee (user, group, domain, or anyone). */
        type: string | null;
        /** The domain to which this permission refers. */
        domain: string | null;
        /** Whether the account associated with this permission has been deleted. */
        deleted?: boolean;
        /** A link to the user's profile photo. */
        photoLink: string | null;
        /** The display name of the user or group granted this permission. */
        displayName: string | null;
        /** The email address of the user or group granted this permission. */
        emailAddress: string | null;
        /** Whether the account associated with this permission is a pending owner. */
        pendingOwner?: boolean;
        /** The time at which this permission will expire (RFC 3339 date-time). */
        expirationTime: string | null;
        /** Whether the permission allows the file to be discovered through search. */
        allowFileDiscovery?: boolean;
        /** Details of whether the permission on the shared drive item is inherited or directly set. */
        permissionDetails?: Array<{
          /** The primary role for this user. */
          role: string | null;
          /** Whether this permission is inherited from a parent folder. */
          inherited?: boolean;
          /** The ID of the item from which this permission is inherited. */
          inheritedFrom: string | null;
          /** The permission type for this user. */
          permissionType: string | null;
        }>;
      };
    };
    /** List permissions on a Drive file or shared drive. */
    "googledrive.permissions.list": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /** The fields to include in the response. */
        fields?: string;
        /**
         * The maximum number of permissions to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
        /** Specifies which additional view's permissions to include in the response. */
        includePermissionsForView?: "published";
      };
      output: {
        /** The list of permissions for the file or shared drive. */
        permissions: Array<{
          /** The unique identifier of the permission. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The role granted by this permission (e.g. owner, writer, reader). */
          role: string | null;
          /** The type of grantee (user, group, domain, or anyone). */
          type: string | null;
          /** The domain to which this permission refers. */
          domain: string | null;
          /** Whether the account associated with this permission has been deleted. */
          deleted?: boolean;
          /** A link to the user's profile photo. */
          photoLink: string | null;
          /** The display name of the user or group granted this permission. */
          displayName: string | null;
          /** The email address of the user or group granted this permission. */
          emailAddress: string | null;
          /** Whether the account associated with this permission is a pending owner. */
          pendingOwner?: boolean;
          /** The time at which this permission will expire (RFC 3339 date-time). */
          expirationTime: string | null;
          /** Whether the permission allows the file to be discovered through search. */
          allowFileDiscovery?: boolean;
          /** Details of whether the permission on the shared drive item is inherited or directly set. */
          permissionDetails?: Array<{
            /** The primary role for this user. */
            role: string | null;
            /** Whether this permission is inherited from a parent folder. */
            inherited?: boolean;
            /** The ID of the item from which this permission is inherited. */
            inheritedFrom: string | null;
            /** The permission type for this user. */
            permissionType: string | null;
          }>;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Update an existing Drive permission using Google Drive v3 patch semantics. */
    "googledrive.permissions.update": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the permission.
         * @minLength 1
         */
        permissionId?: string;
        /** The updated permission fields to apply. */
        permission?: {
          /** The new role to grant with this permission. */
          role?: "owner" | "organizer" | "fileOrganizer" | "writer" | "commenter" | "reader";
          /**
           * The new expiration time for this permission (RFC 3339 date-time).
           * @minLength 1
           */
          expirationTime?: string;
        };
        /** When true, removes the expiration date from the permission. */
        removeExpiration?: boolean;
        /** Whether to transfer ownership to the specified user (for owner role only). */
        transferOwnership?: boolean;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
        /** Issue the request as a domain administrator. */
        useDomainAdminAccess?: boolean;
        /** Whether to enforce expansive access requirements. */
        enforceExpansiveAccess?: boolean;
      };
      output: {
        /** The unique identifier of the permission. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The role granted by this permission (e.g. owner, writer, reader). */
        role: string | null;
        /** The type of grantee (user, group, domain, or anyone). */
        type: string | null;
        /** The domain to which this permission refers. */
        domain: string | null;
        /** Whether the account associated with this permission has been deleted. */
        deleted?: boolean;
        /** A link to the user's profile photo. */
        photoLink: string | null;
        /** The display name of the user or group granted this permission. */
        displayName: string | null;
        /** The email address of the user or group granted this permission. */
        emailAddress: string | null;
        /** Whether the account associated with this permission is a pending owner. */
        pendingOwner?: boolean;
        /** The time at which this permission will expire (RFC 3339 date-time). */
        expirationTime: string | null;
        /** Whether the permission allows the file to be discovered through search. */
        allowFileDiscovery?: boolean;
        /** Details of whether the permission on the shared drive item is inherited or directly set. */
        permissionDetails?: Array<{
          /** The primary role for this user. */
          role: string | null;
          /** Whether this permission is inherited from a parent folder. */
          inherited?: boolean;
          /** The ID of the item from which this permission is inherited. */
          inheritedFrom: string | null;
          /** The permission type for this user. */
          permissionType: string | null;
        }>;
      };
    };
    /** Create a reply under an existing Drive file comment. */
    "googledrive.replies.create": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
        /** The fields to include in the response. */
        fields?: string;
        /**
         * The plain text content of the reply.
         * @minLength 1
         */
        content?: string;
        /** The action to perform on the comment (resolve or reopen). */
        action?: "resolve" | "reopen";
      };
      output: {
        /** The unique identifier of the reply. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The action this reply performed on the parent comment. */
        action?: string | null;
        /** The author of the reply. */
        author?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** The plain text content of the reply. */
        content: string | null;
        /** Whether the reply has been deleted. */
        deleted?: boolean;
        /** The time at which the reply was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The content of the reply with HTML formatting. */
        htmlContent: string | null;
        /** The last time the reply was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
      };
    };
    /** Permanently delete a specific reply from a Drive file comment thread. */
    "googledrive.replies.delete": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
        /**
         * The ID of the reply.
         * @minLength 1
         */
        replyId?: string;
      };
      output: {
        /** The ID of the file from which the reply was deleted. */
        fileId: string;
        /** The ID of the comment from which the reply was deleted. */
        commentId: string;
        /** The ID of the deleted reply. */
        replyId: string;
        /** Indicates that the reply was successfully deleted. */
        deleted: true;
      };
    };
    /** Get a specific reply under a Drive file comment. */
    "googledrive.replies.get": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
        /**
         * The ID of the reply.
         * @minLength 1
         */
        replyId?: string;
        /** Whether to return deleted replies. */
        includeDeleted?: boolean;
      };
      output: {
        /** The unique identifier of the reply. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The action this reply performed on the parent comment. */
        action?: string | null;
        /** The author of the reply. */
        author?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** The plain text content of the reply. */
        content: string | null;
        /** Whether the reply has been deleted. */
        deleted?: boolean;
        /** The time at which the reply was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The content of the reply with HTML formatting. */
        htmlContent: string | null;
        /** The last time the reply was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
      };
    };
    /** List replies under a Drive file comment with pagination. */
    "googledrive.replies.list": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
        /** The fields to include in the response. */
        fields?: string;
        /**
         * The maximum number of replies to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
        /** Whether to include deleted replies in the results. */
        includeDeleted?: boolean;
      };
      output: {
        /** The list of replies to the comment. */
        replies: Array<{
          /** The unique identifier of the reply. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The action this reply performed on the parent comment. */
          action?: string | null;
          /** The author of the reply. */
          author?: {
            /** Whether this user is the current authenticated user. */
            me?: boolean;
            /** The type of the resource. */
            kind?: string | null;
            /** The display name of the user. */
            displayName: string | null;
            /** The email address of the user. */
            emailAddress: string | null;
            /** The permission ID of the user. */
            permissionId: string | null;
            /** A link to the user's profile photo. */
            photoLink: string | null;
          };
          /** The plain text content of the reply. */
          content: string | null;
          /** Whether the reply has been deleted. */
          deleted?: boolean;
          /** The time at which the reply was created (RFC 3339 date-time). */
          createdTime: string | null;
          /** The content of the reply with HTML formatting. */
          htmlContent: string | null;
          /** The last time the reply was modified (RFC 3339 date-time). */
          modifiedTime: string | null;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Update the content of an existing reply on a Drive file comment. */
    "googledrive.replies.update": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the comment.
         * @minLength 1
         */
        commentId?: string;
        /**
         * The ID of the reply.
         * @minLength 1
         */
        replyId?: string;
        /** The fields to include in the response. */
        fields?: string;
        /**
         * The new plain text content of the reply.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The unique identifier of the reply. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The action this reply performed on the parent comment. */
        action?: string | null;
        /** The author of the reply. */
        author?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** The plain text content of the reply. */
        content: string | null;
        /** Whether the reply has been deleted. */
        deleted?: boolean;
        /** The time at which the reply was created (RFC 3339 date-time). */
        createdTime: string | null;
        /** The content of the reply with HTML formatting. */
        htmlContent: string | null;
        /** The last time the reply was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
      };
    };
    /** Permanently delete a specific revision from a Drive file. */
    "googledrive.revisions.delete": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the revision.
         * @minLength 1
         */
        revisionId?: string;
      };
      output: {
        /** The ID of the file from which the revision was deleted. */
        fileId: string;
        /** The ID of the deleted revision. */
        revisionId: string;
        /** Indicates that the revision was successfully deleted. */
        deleted: true;
      };
    };
    /** Get metadata for a specific Drive file revision. */
    "googledrive.revisions.get": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the revision.
         * @minLength 1
         */
        revisionId?: string;
        /** Whether to acknowledge the risk of downloading known malware or other abusive files. */
        acknowledgeAbuse?: boolean;
      };
      output: {
        /** The unique identifier of the revision. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The MIME type of the revision. */
        mimeType: string | null;
        /** The last time the revision was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The size of the revision's content in bytes. */
        sizeBytes: number | null;
        /** Whether this revision is published. */
        published?: boolean;
        /** Whether to keep this revision forever, even if it is no longer the head revision. */
        keepForever?: boolean;
        /** Whether subsequent revisions will be automatically republished. */
        publishAuto?: boolean;
        /** Whether this revision is published outside the domain. */
        publishedOutsideDomain?: boolean;
        /** A link to the published revision. */
        publishedLink: string | null;
        /** The original filename used to create this revision. */
        originalFilename: string | null;
        /** The MD5 checksum of the revision's content. */
        md5Checksum: string | null;
        /** The last user to modify this revision. */
        lastModifyingUser?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** Links for exporting Docs Editors files to specific formats. */
        exportLinks?: Record<string, string>;
      };
    };
    /** List revision metadata for a Drive file. */
    "googledrive.revisions.list": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The maximum number of revisions to return per page (1–1000).
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page.
         * @minLength 1
         */
        pageToken?: string;
        /** Whether the request supports both My Drives and shared drives. */
        supportsAllDrives?: boolean;
      };
      output: {
        /** The list of revisions for the file. */
        revisions: Array<{
          /** The unique identifier of the revision. */
          id: string;
          /** The type of the resource. */
          kind: string | null;
          /** The MIME type of the revision. */
          mimeType: string | null;
          /** The last time the revision was modified (RFC 3339 date-time). */
          modifiedTime: string | null;
          /** The size of the revision's content in bytes. */
          sizeBytes: number | null;
          /** Whether this revision is published. */
          published?: boolean;
          /** Whether to keep this revision forever, even if it is no longer the head revision. */
          keepForever?: boolean;
          /** Whether subsequent revisions will be automatically republished. */
          publishAuto?: boolean;
          /** Whether this revision is published outside the domain. */
          publishedOutsideDomain?: boolean;
          /** A link to the published revision. */
          publishedLink: string | null;
          /** The original filename used to create this revision. */
          originalFilename: string | null;
          /** The MD5 checksum of the revision's content. */
          md5Checksum: string | null;
          /** The last user to modify this revision. */
          lastModifyingUser?: {
            /** Whether this user is the current authenticated user. */
            me?: boolean;
            /** The type of the resource. */
            kind?: string | null;
            /** The display name of the user. */
            displayName: string | null;
            /** The email address of the user. */
            emailAddress: string | null;
            /** The permission ID of the user. */
            permissionId: string | null;
            /** A link to the user's profile photo. */
            photoLink: string | null;
          };
          /** Links for exporting Docs Editors files to specific formats. */
          exportLinks?: Record<string, string>;
        }>;
        /** The page token for the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Update revision metadata flags on a specific Drive file revision. */
    "googledrive.revisions.update": {
      input: {
        /**
         * The ID of the file.
         * @minLength 1
         */
        fileId?: string;
        /**
         * The ID of the revision.
         * @minLength 1
         */
        revisionId?: string;
        /** Whether this revision is published. */
        published?: boolean;
        /** Whether subsequent revisions will be automatically republished. */
        publishAuto?: boolean;
        /** Whether to keep this revision forever, even if it is no longer the head revision. */
        keepForever?: boolean;
        /** Whether this revision is published outside the domain. */
        publishedOutsideDomain?: boolean;
      };
      output: {
        /** The unique identifier of the revision. */
        id: string;
        /** The type of the resource. */
        kind: string | null;
        /** The MIME type of the revision. */
        mimeType: string | null;
        /** The last time the revision was modified (RFC 3339 date-time). */
        modifiedTime: string | null;
        /** The size of the revision's content in bytes. */
        sizeBytes: number | null;
        /** Whether this revision is published. */
        published?: boolean;
        /** Whether to keep this revision forever, even if it is no longer the head revision. */
        keepForever?: boolean;
        /** Whether subsequent revisions will be automatically republished. */
        publishAuto?: boolean;
        /** Whether this revision is published outside the domain. */
        publishedOutsideDomain?: boolean;
        /** A link to the published revision. */
        publishedLink: string | null;
        /** The original filename used to create this revision. */
        originalFilename: string | null;
        /** The MD5 checksum of the revision's content. */
        md5Checksum: string | null;
        /** The last user to modify this revision. */
        lastModifyingUser?: {
          /** Whether this user is the current authenticated user. */
          me?: boolean;
          /** The type of the resource. */
          kind?: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** The email address of the user. */
          emailAddress: string | null;
          /** The permission ID of the user. */
          permissionId: string | null;
          /** A link to the user's profile photo. */
          photoLink: string | null;
        };
        /** Links for exporting Docs Editors files to specific formats. */
        exportLinks?: Record<string, string>;
      };
    };
  }
}
