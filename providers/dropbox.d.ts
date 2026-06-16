import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Copy one file or folder to another Dropbox path. */
    "dropbox.copy": {
      input: {
        /** The Dropbox source path or ID. */
        fromPath: string;
        /** The Dropbox destination path or ID. */
        toPath: string;
        /** Whether Dropbox should autorename on conflict. */
        autorename?: boolean;
        /** Whether ownership transfer is allowed when Dropbox supports it. */
        allowOwnershipTransfer?: boolean;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Create one folder in Dropbox. */
    "dropbox.create_folder": {
      input: {
        /** A Dropbox path, file ID, revision ID, or namespace-relative path. */
        path: string;
        /** Whether Dropbox should autorename on conflict. */
        autorename?: boolean;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Create one Dropbox shared link with optional custom settings. */
    "dropbox.create_shared_link": {
      input: {
        /** The Dropbox path, file ID, or revision ID to share. */
        path: string;
        /** The requested visibility for the shared link. */
        requestedVisibility?: "public" | "team_only" | "password";
        /** The requested audience for the shared link. */
        audience?: "public" | "team" | "no_one";
        /** The requested access level for the shared link. */
        access?: "viewer" | "editor" | "max";
        /** Whether the shared link should allow downloads when supported. */
        allowDownload?: boolean;
        /** Optional password to apply when password visibility is used. */
        password?: string;
        /**
         * Optional shared-link expiration timestamp in ISO 8601 format.
         * @format date-time
         */
        expiresAt?: string;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        link: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Delete one file or folder from Dropbox. */
    "dropbox.delete": {
      input: {
        /** The Dropbox path or ID to delete. */
        path: string;
        /** Optional parent revision that must match when deleting a file. */
        parentRev?: string;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Download one Dropbox file and upload it to transit storage. */
    "dropbox.download_file": {
      input: {
        /** The Dropbox file path, file ID, or revision ID to download. */
        path: string;
        /** Optional file name to use for the uploaded transit file. */
        fileName?: string;
      };
      output: {
        /** The unique identifier of the downloaded Dropbox file. */
        fileId: string;
        /** The name of the downloaded Dropbox file. */
        name: string;
        /** The MIME type used for the transit upload. */
        mimeType: string;
        /** The size of the downloaded file content in bytes. */
        sizeBytes: number | null;
        /** The transit URL where the downloaded file content was stored. */
        transitUrl: string;
      };
    };
    /** Get basic profile information for the current Dropbox account. */
    "dropbox.get_current_account": {
      input: Record<string, never>;
      output: {
        /** The Dropbox account ID. */
        accountId: string;
        /** The full display name of the current user. */
        displayName: string;
        /** The abbreviated display name when available. */
        abbreviatedName: string | null;
        /** The given name when available. */
        givenName: string | null;
        /** The surname when available. */
        surname: string | null;
        /** The email address when available. */
        email: string | null;
        /** Whether the Dropbox account email is verified. */
        emailVerified: boolean | null;
        /** Whether the Dropbox account is disabled. */
        disabled: boolean;
        /** The account locale when available. */
        locale: string | null;
        /** The account country when available. */
        country: string | null;
        /** The Dropbox account type tag when available. */
        accountType: string | null;
        /** The Dropbox team ID when available. */
        teamId: string | null;
        /** The Dropbox team name when available. */
        teamName: string | null;
      };
    };
    /** Get Dropbox metadata for one file or folder. */
    "dropbox.get_metadata": {
      input: {
        /** A Dropbox path, file ID, revision ID, or namespace-relative path. */
        path: string;
        /** Whether deleted metadata is allowed. */
        includeDeleted?: boolean;
        /** Whether Dropbox should include explicit shared-member flags when available. */
        includeHasExplicitSharedMembers?: boolean;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Download a Dropbox shared-link file and upload it to transit storage. */
    "dropbox.get_shared_link_file": {
      input: {
        /**
         * The Dropbox shared link URL.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Optional path inside the shared link when the link points to a folder. */
        path?: string;
        /** Optional file name to use for the uploaded transit file. */
        fileName?: string;
      };
      output: {
        /** The unique identifier of the downloaded Dropbox file. */
        fileId: string;
        /** The name of the downloaded Dropbox file. */
        name: string;
        /** The MIME type used for the transit upload. */
        mimeType: string;
        /** The size of the downloaded file content in bytes. */
        sizeBytes: number | null;
        /** The transit URL where the downloaded file content was stored. */
        transitUrl: string;
      };
    };
    /** Get metadata for a Dropbox shared link. */
    "dropbox.get_shared_link_metadata": {
      input: {
        /**
         * The Dropbox shared link URL.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Optional path inside the shared link when the link points to a folder. */
        path?: string;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        link: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Get user-generated Dropbox tags for one or more files or folders. */
    "dropbox.get_tags": {
      input: {
        /**
         * Dropbox file or folder paths to inspect.
         * @minItems 1
         */
        paths: Array<string>;
      };
      output: {
        /** Tags grouped by Dropbox path. */
        pathsToTags: Array<{
          /** The Dropbox path whose tags were returned. */
          path: string;
          /** The tags assigned to the path. */
          tags: Array<{
            /** The Dropbox tag union tag. */
            tag: string;
            /** The user-generated tag text when available. */
            tagText: string | null;
          }>;
        }>;
      };
    };
    /** Create a temporary direct-download Dropbox link for one file. */
    "dropbox.get_temporary_link": {
      input: {
        /** The Dropbox file path or ID to create a temporary link for. */
        path: string;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
        /** The temporary Dropbox link. */
        link: string;
      };
    };
    /** List files and folders inside one Dropbox folder. */
    "dropbox.list_folder": {
      input: {
        /** The folder path to list. Leave empty or omit it to list the root folder. */
        path?: string;
        /** Whether to list subfolders recursively. */
        recursive?: boolean;
        /** Whether deleted entries should be included. */
        includeDeleted?: boolean;
        /** Whether mounted folders should be included in the response. */
        includeMountedFolders?: boolean;
        /** Whether Dropbox should include explicit shared-member flags when available. */
        includeHasExplicitSharedMembers?: boolean;
        /**
         * The maximum number of entries to return per page.
         * @minimum 1
         * @maximum 2000
         */
        limit?: number;
      };
      output: {
        /** The Dropbox entries returned in this page. */
        entries: Array<{
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        }>;
        /** The cursor for continuing the listing. */
        cursor: string;
        /** Whether more entries are available. */
        hasMore: boolean;
      };
    };
    /** Continue a previous Dropbox folder listing with a cursor. */
    "dropbox.list_folder_continue": {
      input: {
        /**
         * The cursor returned by a previous Dropbox folder listing.
         * @minLength 1
         * @pattern \S
         */
        cursor: string;
      };
      output: {
        /** The Dropbox entries returned in this page. */
        entries: Array<{
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        }>;
        /** The cursor for continuing the listing. */
        cursor: string;
        /** Whether more entries are available. */
        hasMore: boolean;
      };
    };
    /** List revisions for one Dropbox file. */
    "dropbox.list_revisions": {
      input: {
        /** The Dropbox file path or ID whose revisions should be listed. */
        path: string;
        /** Whether Dropbox should list revisions by path or by file ID. */
        mode?: "path" | "id";
        /** Optional revision used to page older revisions when mode is path. */
        beforeRev?: string;
        /**
         * The maximum number of revisions to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Dropbox file revision metadata entries. */
        entries: Array<{
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        }>;
        /** Whether the latest file entry is deleted. */
        isDeleted: boolean;
        /** The deletion timestamp when Dropbox returns one. */
        serverDeleted: string | null;
        /** Whether more older revisions are available. */
        hasMore: boolean;
      };
    };
    /** List Dropbox shared links for the current user or a specific path. */
    "dropbox.list_shared_links": {
      input: {
        /** Optional Dropbox path, file ID, or revision ID used to filter shared links. */
        path?: string;
        /** Optional cursor returned by a previous shared-link listing. */
        cursor?: string;
        /** Whether parent-folder links should be excluded when path is provided. */
        directOnly?: boolean;
      };
      output: {
        /** The shared links returned by Dropbox. */
        links: Array<{
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        }>;
        /** The cursor for continuing the listing when Dropbox provides it. */
        cursor: string | null;
        /** Whether more shared links are available. */
        hasMore: boolean;
      };
    };
    /** Modify settings for an existing Dropbox shared link. */
    "dropbox.modify_shared_link": {
      input: {
        /**
         * The Dropbox shared link URL to modify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** The requested visibility for the shared link. */
        requestedVisibility?: "public" | "team_only" | "password";
        /** The requested audience for the shared link. */
        audience?: "public" | "team" | "no_one";
        /** The requested access level for the shared link. */
        access?: "viewer" | "editor" | "max";
        /** Whether the shared link should allow downloads when supported. */
        allowDownload?: boolean;
        /** Optional password to apply when password visibility is used. */
        password?: string;
        /**
         * Optional shared-link expiration timestamp in ISO 8601 format.
         * @format date-time
         */
        expiresAt?: string;
        /** Whether Dropbox should remove the existing shared-link expiration. */
        removeExpiration?: boolean;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        link: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Move one file or folder to another Dropbox path. */
    "dropbox.move": {
      input: {
        /** The Dropbox source path or ID. */
        fromPath: string;
        /** The Dropbox destination path or ID. */
        toPath: string;
        /** Whether Dropbox should autorename on conflict. */
        autorename?: boolean;
        /** Whether ownership transfer is allowed when Dropbox supports it. */
        allowOwnershipTransfer?: boolean;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Restore one Dropbox file to a previous revision. */
    "dropbox.restore": {
      input: {
        /** The Dropbox file path to restore. */
        path: string;
        /**
         * The Dropbox revision ID to restore.
         * @minLength 1
         * @pattern \S
         */
        rev: string;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
    /** Revoke an existing Dropbox shared link. */
    "dropbox.revoke_shared_link": {
      input: {
        /**
         * The Dropbox shared link URL to revoke.
         * @minLength 1
         * @pattern \S
         */
        url: string;
      };
      output: {
        /** Whether the shared link revoke call completed. */
        revoked: boolean;
      };
    };
    /** Ask Dropbox to save a public URL into a Dropbox file path. */
    "dropbox.save_url": {
      input: {
        /** The Dropbox destination path for the saved URL. */
        path: string;
        /**
         * The publicly reachable URL Dropbox should save.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The Dropbox save_url result tag. */
        tag: string;
        /** The async job ID when Dropbox continues in background. */
        asyncJobId: string | null;
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        } | null;
        /** Dropbox failure details when the job failed. */
        failure: Record<string, unknown> | null;
      };
    };
    /** Check the status of an asynchronous Dropbox save_url job. */
    "dropbox.save_url_check_job_status": {
      input: {
        /**
         * The Dropbox async job ID returned by save_url.
         * @minLength 1
         * @pattern \S
         */
        asyncJobId: string;
      };
      output: {
        /** The Dropbox save_url result tag. */
        tag: string;
        /** The async job ID when Dropbox continues in background. */
        asyncJobId: string | null;
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        } | null;
        /** Dropbox failure details when the job failed. */
        failure: Record<string, unknown> | null;
      };
    };
    /** Search Dropbox files and folders with the official search_v2 endpoint. */
    "dropbox.search_files": {
      input: {
        /**
         * The Dropbox search query.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** Optional folder path that limits where Dropbox searches. */
        path?: string;
        /**
         * The maximum number of search matches to return.
         * @minimum 1
         * @maximum 1000
         */
        maxResults?: number;
        /** Whether Dropbox should search active or deleted content. */
        fileStatus?: "active" | "deleted";
        /** Whether Dropbox should search only file and folder names. */
        filenameOnly?: boolean;
        /** Optional Dropbox file categories used to filter search results. */
        fileCategories?: Array<"image" | "document" | "pdf" | "spreadsheet" | "presentation" | "audio" | "video" | "folder" | "paper" | "others">;
        /** Optional file extensions used to filter search results. */
        fileExtensions?: Array<string>;
        /** How Dropbox should order search results. */
        orderBy?: "relevance" | "last_modified_time";
        /** Whether Dropbox should include match highlight spans when available. */
        includeHighlights?: boolean;
      };
      output: {
        /** The Dropbox search matches. */
        matches: Array<{
          /** The Dropbox match type tag. */
          matchType: string;
          /** A normalized Dropbox metadata or shared-link record. */
          metadata: {
            /** The Dropbox metadata tag such as file, folder, or deleted. */
            tag: string;
            /** The Dropbox item name. */
            name: string;
            /** The Dropbox item ID when available. */
            id: string | null;
            /** The user-facing cased path when available. */
            pathDisplay: string | null;
            /** The lower-cased full path when available. */
            pathLower: string | null;
            /** The client-provided modification timestamp in ISO 8601 format when available. */
            clientModified: string | null;
            /** The server-side modification timestamp in ISO 8601 format when available. */
            serverModified: string | null;
            /** The Dropbox file revision when available. */
            rev: string | null;
            /** The file size in bytes when available. */
            sizeBytes: number | null;
            /** Whether the file can be downloaded directly. */
            isDownloadable: boolean | null;
            /** The Dropbox content hash when available. */
            contentHash: string | null;
            /** The shared link URL when available. */
            url: string | null;
            /** The shared link expiration timestamp in ISO 8601 format when available. */
            expiresAt: string | null;
            /** A generic JSON object returned by Dropbox. */
            sharingInfo: Record<string, unknown> | null;
            /** Shared-link permission metadata when Dropbox includes it. */
            linkPermissions: Record<string, unknown> | null;
          };
          /** Dropbox highlight spans when requested and returned. */
          highlightSpans: Array<Record<string, unknown>> | null;
        }>;
        /** The cursor for continuing the search when available. */
        cursor: string | null;
        /** Whether more search matches are available. */
        hasMore: boolean;
      };
    };
    /** Continue a previous Dropbox file search with a cursor. */
    "dropbox.search_files_continue": {
      input: {
        /**
         * The cursor returned by a previous Dropbox search.
         * @minLength 1
         * @pattern \S
         */
        cursor: string;
      };
      output: {
        /** The Dropbox search matches. */
        matches: Array<{
          /** The Dropbox match type tag. */
          matchType: string;
          /** A normalized Dropbox metadata or shared-link record. */
          metadata: {
            /** The Dropbox metadata tag such as file, folder, or deleted. */
            tag: string;
            /** The Dropbox item name. */
            name: string;
            /** The Dropbox item ID when available. */
            id: string | null;
            /** The user-facing cased path when available. */
            pathDisplay: string | null;
            /** The lower-cased full path when available. */
            pathLower: string | null;
            /** The client-provided modification timestamp in ISO 8601 format when available. */
            clientModified: string | null;
            /** The server-side modification timestamp in ISO 8601 format when available. */
            serverModified: string | null;
            /** The Dropbox file revision when available. */
            rev: string | null;
            /** The file size in bytes when available. */
            sizeBytes: number | null;
            /** Whether the file can be downloaded directly. */
            isDownloadable: boolean | null;
            /** The Dropbox content hash when available. */
            contentHash: string | null;
            /** The shared link URL when available. */
            url: string | null;
            /** The shared link expiration timestamp in ISO 8601 format when available. */
            expiresAt: string | null;
            /** A generic JSON object returned by Dropbox. */
            sharingInfo: Record<string, unknown> | null;
            /** Shared-link permission metadata when Dropbox includes it. */
            linkPermissions: Record<string, unknown> | null;
          };
          /** Dropbox highlight spans when requested and returned. */
          highlightSpans: Array<Record<string, unknown>> | null;
        }>;
        /** The cursor for continuing the search when available. */
        cursor: string | null;
        /** Whether more search matches are available. */
        hasMore: boolean;
      };
    };
    /** Upload one file to Dropbox from inline text or base64 content. */
    "dropbox.upload_file": {
      input: {
        /** A Dropbox path, file ID, revision ID, or namespace-relative path. */
        path: string;
        /** Inline UTF-8 text content to upload. */
        text?: string;
        /** Base64-encoded binary content to upload. */
        contentBase64?: string;
        /** Optional MIME type override for inline text or base64 content. */
        mimeType?: string;
        /** How Dropbox should handle conflicts at the destination path. */
        mode?: "add" | "overwrite" | "update";
        /** The required file revision when mode is update. */
        updateRev?: string;
        /** Whether Dropbox should autorename on conflict when supported by the mode. */
        autorename?: boolean;
        /**
         * Optional client-side modification timestamp in ISO 8601 format.
         * @format date-time
         */
        clientModified?: string;
        /** Whether the upload should avoid client-side user notifications. */
        mute?: boolean;
        /** Whether Dropbox should use stricter conflict detection. */
        strictConflict?: boolean;
        /** Optional Dropbox content hash for integrity verification. */
        contentHash?: string;
      };
      output: {
        /** A normalized Dropbox metadata or shared-link record. */
        metadata: {
          /** The Dropbox metadata tag such as file, folder, or deleted. */
          tag: string;
          /** The Dropbox item name. */
          name: string;
          /** The Dropbox item ID when available. */
          id: string | null;
          /** The user-facing cased path when available. */
          pathDisplay: string | null;
          /** The lower-cased full path when available. */
          pathLower: string | null;
          /** The client-provided modification timestamp in ISO 8601 format when available. */
          clientModified: string | null;
          /** The server-side modification timestamp in ISO 8601 format when available. */
          serverModified: string | null;
          /** The Dropbox file revision when available. */
          rev: string | null;
          /** The file size in bytes when available. */
          sizeBytes: number | null;
          /** Whether the file can be downloaded directly. */
          isDownloadable: boolean | null;
          /** The Dropbox content hash when available. */
          contentHash: string | null;
          /** The shared link URL when available. */
          url: string | null;
          /** The shared link expiration timestamp in ISO 8601 format when available. */
          expiresAt: string | null;
          /** A generic JSON object returned by Dropbox. */
          sharingInfo: Record<string, unknown> | null;
          /** Shared-link permission metadata when Dropbox includes it. */
          linkPermissions: Record<string, unknown> | null;
        };
      };
    };
  }
}
