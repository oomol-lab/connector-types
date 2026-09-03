import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a bookmark to a manual Karakeep list. The operation is idempotent, so adding a bookmark that is already in the list succeeds and changes nothing. */
    "karakeep.add_bookmark_to_list": {
      input: {
        /**
         * The id of the list.
         * @minLength 1
         */
        listId: string;
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
      };
      output: {
        /** Whether the bookmark is now a member of the list. */
        success: boolean;
        /** The id of the list the bookmark was added to. */
        listId: string;
        /** The id of the bookmark that was added. */
        bookmarkId: string;
      };
    };
    /** Trigger AI inference, either tagging or summarization, on bookmarks across the whole Karakeep instance. Filter by inference status and by how recently the bookmarks were modified. The inference jobs are queued and run asynchronously. Requires an API key owned by a Karakeep admin user; any other key fails with a 403 provider_error carrying the upstream message Forbidden - Admin access required. */
    "karakeep.admin_trigger_inference": {
      input: {
        /** The type of inference to run: tag for AI tagging, summarize for AI summarization. */
        type: "tag" | "summarize";
        /**
         * Filter bookmarks by their inference status. Use failure to retry only the failed ones.
         * @default "all"
         */
        status?: "success" | "failure" | "pending" | "all";
        /**
         * Only process bookmarks modified within this many seconds. Must be greater than zero. Omit to process all matching bookmarks.
         * @exclusiveMinimum 0
         */
        modifiedWithinSeconds?: number;
      };
      output: {
        /** Whether the job was triggered successfully. */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Trigger a recrawl of link bookmarks across the whole Karakeep instance. Filter by crawl status to target specific bookmarks, for example only the failed ones, and by how recently they were modified. The crawls are queued and run asynchronously. Requires an API key owned by a Karakeep admin user; any other key fails with a 403 provider_error carrying the upstream message Forbidden - Admin access required. */
    "karakeep.admin_trigger_recrawl": {
      input: {
        /**
         * Filter bookmarks by their crawl status. Use failure to retry only the failed crawls.
         * @default "all"
         */
        crawlStatus?: "success" | "failure" | "pending" | "all";
        /**
         * Whether to run AI inference after crawling.
         * @default false
         */
        runInference?: boolean;
        /**
         * Only process bookmarks modified within this many seconds. Must be greater than zero. Omit to process all matching bookmarks.
         * @exclusiveMinimum 0
         */
        modifiedWithinSeconds?: number;
      };
      output: {
        /** Whether the job was triggered successfully. */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Trigger a reindex of bookmarks in the Karakeep search engine. Without modifiedWithinSeconds Karakeep clears the whole search index first and then re-queues every bookmark, so search results across the instance stay incomplete until the queue drains; with it only the bookmarks modified inside that window are re-queued and the existing index is preserved. The reindex runs asynchronously. Requires an API key owned by a Karakeep admin user; any other key fails with a 403 provider_error carrying the upstream message Forbidden - Admin access required. */
    "karakeep.admin_trigger_reindex": {
      input: {
        /**
         * Only process bookmarks modified within this many seconds. Must be greater than zero. Omit to process all matching bookmarks.
         * @exclusiveMinimum 0
         */
        modifiedWithinSeconds?: number;
      };
      output: {
        /** Whether the job was triggered successfully. */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Update another Karakeep user's role, bookmark quota, storage quota or browser crawling setting. Only the provided fields are changed, and at least one of them must be present. Karakeep rejects updating the user that owns the API key with a 400. Requires an API key owned by a Karakeep admin user; any other key fails with a 403 provider_error carrying the upstream message Forbidden - Admin access required. */
    "karakeep.admin_update_user": {
      input: {
        /**
         * The id of the user to update.
         * @minLength 1
         */
        userId: string;
        /** The role to assign to the user. */
        role?: "user" | "admin";
        /**
         * The maximum number of bookmarks the user may keep, or null to remove the quota.
         * @minimum 0
         */
        bookmarkQuota?: number | null;
        /**
         * The maximum number of asset bytes the user may store, or null to remove the quota.
         * @minimum 0
         */
        storageQuota?: number | null;
        /** Whether the user may use browser based crawling, or null to fall back to the server default. */
        browserCrawlingEnabled?: boolean | null;
      };
      output: {
        /** Whether the update was successful. */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Attach an already uploaded asset to a bookmark, for example a screenshot or a PDF. Upload the file first to obtain an asset id. Only the screenshot, pdf, assetScreenshot, precrawledArchive, bannerImage, video and userUploaded roles can be attached; linkHtmlContent, bookmarkAsset, fullPageArchive, avatar and unknown assets are maintained by Karakeep itself and are rejected with a 400. */
    "karakeep.attach_asset_to_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /**
         * The id of an asset that was already uploaded to Karakeep. Sent to Karakeep as the body field id.
         * @minLength 1
         */
        assetId: string;
        /** The role the asset plays for the bookmark. Karakeep only accepts these roles for attachment; linkHtmlContent, bookmarkAsset, fullPageArchive, avatar and unknown assets are managed by Karakeep itself and cannot be attached. */
        assetType: "screenshot" | "pdf" | "assetScreenshot" | "precrawledArchive" | "bannerImage" | "video" | "userUploaded";
      };
      output: {
        /** The asset id. */
        id: string;
        /** The role the asset plays for the bookmark. */
        assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
        /** The original file name, or null when Karakeep has none. */
        fileName?: string | null;
        [key: string]: unknown;
      };
    };
    /** Attach tags to a bookmark. Reference each tag by tagId, or by tagName to let Karakeep create the tag when it does not exist yet. */
    "karakeep.attach_tags_to_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /** The tags to attach. Every entry must carry either tagId or tagName. */
        tags: Array<{
          /**
           * The id of an existing tag.
           * @minLength 1
           */
          tagId?: string;
          /**
           * The tag name; Karakeep creates the tag when it does not exist yet.
           * @minLength 1
           */
          tagName?: string;
          /** Who the attachment should be attributed to. */
          attachedBy?: "ai" | "human";
        }>;
      };
      output: {
        /** The ids of the tags that are now attached to the bookmark. */
        attached: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Check whether a URL is already bookmarked and return the id of the existing bookmark, or null when it is not. Useful before calling create_bookmark. */
    "karakeep.check_bookmark_url": {
      input: {
        /**
         * The HTTP or HTTPS URL to check against the existing bookmarks.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The id of the existing bookmark, or null when the URL is not bookmarked yet. */
        bookmarkId: string | null;
        [key: string]: unknown;
      };
    };
    /** Trigger a new full account backup for the connected Karakeep user. Karakeep records the request and answers immediately with a backup whose status is pending; the archive itself is produced asynchronously by the instance backup worker, and assetId, size and bookmarkCount stay empty until it finishes. Poll get_backup until status becomes success or failure. When the backup worker is disabled on that instance the record stays pending forever, so always give the polling loop a timeout of its own. Karakeep rate limits this to five backups per hour. */
    "karakeep.create_backup": {
      input: Record<string, never>;
      output: {
        /** The backup id. */
        id: string;
        /** The id of the user who owns the backup. */
        userId: string;
        /** The id of the generated archive asset, or null while the backup is still pending or has failed. */
        assetId: string | null;
        /** When the backup was requested, in ISO 8601 format. */
        createdAt: string;
        /** The archive size in bytes; zero while the backup is pending. */
        size: number;
        /** How many bookmarks the archive contains; zero while pending. */
        bookmarkCount: number;
        /** The backup job status. */
        status: "pending" | "success" | "failure";
        /** Why the backup failed, or null. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a bookmark from a link, a text note or an already uploaded asset. Set type to link and provide url, set type to text and provide text, or set type to asset and provide assetType and assetId. When the same URL is already bookmarked Karakeep does not create a duplicate: it returns the existing bookmark with alreadyExists set to true and re-saves it, which bumps createdAt to now, resets archived to false, and overwrites title, favourited, note and summary with whatever you supplied. Only source rss and source import skip that re-save. Call check_bookmark_url first when the existing bookmark must not be touched. */
    "karakeep.create_bookmark": {
      input: {
        /** The bookmark variant to create. Use link with url, text with text, or asset with assetType and assetId. */
        type: "link" | "text" | "asset";
        /**
         * The HTTP or HTTPS URL to bookmark. Required when type is link.
         * @format uri
         */
        url?: string;
        /**
         * The id of an already uploaded HTML archive asset that Karakeep should store instead of crawling the URL itself. Only used when type is link.
         * @minLength 1
         */
        precrawledArchiveId?: string;
        /** The note body to store. Required when type is text. */
        text?: string;
        /** The kind of the uploaded asset. Required when type is asset. */
        assetType?: "image" | "pdf";
        /**
         * The id of an asset that was already uploaded to Karakeep. Required when type is asset.
         * @minLength 1
         */
        assetId?: string;
        /** The original file name of the uploaded asset. Only used when type is asset. */
        fileName?: string;
        /** The URL the note or the uploaded file came from. Only used when type is text or asset. */
        sourceUrl?: string;
        /**
         * The user supplied title, or null to let Karakeep use the crawled title.
         * @maxLength 1000
         */
        title?: string | null;
        /** Whether the bookmark is archived right away. */
        archived?: boolean;
        /** Whether the bookmark is favourited right away. */
        favourited?: boolean;
        /** A free form note to store on the bookmark. */
        note?: string;
        /** A summary to store on the bookmark instead of generating one. */
        summary?: string;
        /**
         * The creation timestamp to record, in ISO 8601 format. Defaults to the current time.
         * @format date-time
         */
        createdAt?: string;
        /** The crawling queue priority for link bookmarks. Use low for bulk imports. */
        crawlPriority?: "low" | "normal";
        /** How the bookmark was captured. Defaults to api. */
        source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import";
      };
      output: {
        /** The bookmark id. */
        id: string;
        /** When the bookmark was first created, in ISO 8601 format. */
        firstCreatedAt?: string;
        /** When the bookmark was created, in ISO 8601 format. */
        createdAt: string;
        /** When the bookmark was last modified, in ISO 8601 format, or null. */
        modifiedAt: string | null;
        /** The user supplied title, or null when Karakeep uses the crawled title. */
        title?: string | null;
        /** Whether the bookmark is archived. */
        archived: boolean;
        /** Whether the bookmark is favourited. */
        favourited: boolean;
        /** The AI tagging job status, or null. */
        taggingStatus: "success" | "failure" | "pending" | null;
        /** The AI summarization job status, or null. */
        summarizationStatus: "success" | "failure" | "pending" | null;
        /** The embedding job status, or null. */
        embeddingStatus: "success" | "failure" | "pending" | null;
        /** The user note attached to the bookmark, or null. */
        note?: string | null;
        /** The AI generated summary, or null. */
        summary?: string | null;
        /** How the bookmark entered Karakeep. */
        source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
        /** The id of the user who owns the bookmark. */
        userId: string;
        /** The tags attached to the bookmark. */
        tags: Array<{
          /** The tag id. */
          id: string;
          /** The tag name. */
          name: string;
          /** Whether the tag was attached by a human or by AI tagging. */
          attachedBy: "ai" | "human";
          [key: string]: unknown;
        }>;
        /** The bookmark content. The type field discriminates link, text, asset and unknown bookmarks, and only the fields that belong to that variant are present. */
        content: {
          /** The content variant: link, text, asset, or unknown. */
          type: string;
          /** The bookmarked URL, for link bookmarks. */
          url?: string;
          /** The crawled page title, or null. */
          title?: string | null;
          /** The crawled page description, or null. */
          description?: string | null;
          /** The crawled preview image URL, or null. */
          imageUrl?: string | null;
          /** The stored preview image asset id, or null. */
          imageAssetId?: string | null;
          /** The stored screenshot asset id, or null. */
          screenshotAssetId?: string | null;
          /** The stored PDF asset id, or null. */
          pdfAssetId?: string | null;
          /** The stored full page archive asset id, or null. */
          fullPageArchiveAssetId?: string | null;
          /** The stored precrawled archive asset id, or null. */
          precrawledArchiveAssetId?: string | null;
          /** The stored video asset id, or null. */
          videoAssetId?: string | null;
          /** The crawled favicon URL, or null. */
          favicon?: string | null;
          /** The crawled HTML content, returned only when includeContent is true, or null. */
          htmlContent?: string | null;
          /** The stored extracted content asset id, or null. */
          contentAssetId?: string | null;
          /** Whether the page can be rendered in reader view. */
          readerViewStatus?: "readable" | "not_readable" | "uncertain" | "unavailable" | null;
          /** The reader view readability score from 0 to 100, or null. */
          readerViewScore?: number | null;
          /** The preview mode preferred for this bookmark. */
          preferredPreview?: "reader_view" | "screenshot" | "overview" | null;
          /** When the link was last crawled, in ISO 8601 format, or null. */
          crawledAt?: string | null;
          /** The crawl job status, or null. */
          crawlStatus?: "success" | "failure" | "pending" | null;
          /** The extracted author, or null. */
          author?: string | null;
          /** The extracted publisher, or null. */
          publisher?: string | null;
          /** The extracted publication date, or null. */
          datePublished?: string | null;
          /** The extracted modification date, or null. */
          dateModified?: string | null;
          /** The note body, for text bookmarks. */
          text?: string;
          /** The original source URL, for text and asset bookmarks, or null. */
          sourceUrl?: string | null;
          /** The uploaded asset kind, for asset bookmarks. */
          assetType?: "image" | "pdf";
          /** The uploaded asset id, for asset bookmarks. */
          assetId?: string;
          /** The uploaded file name, for asset bookmarks, or null. */
          fileName?: string | null;
          /** The uploaded file size in bytes, for asset bookmarks, or null. */
          size?: number | null;
          /** The text extracted from the uploaded asset, returned only when includeContent is true, or null. */
          content?: string | null;
          [key: string]: unknown;
        };
        /** The assets attached to the bookmark. */
        assets: Array<{
          /** The asset id. */
          id: string;
          /** The role the asset plays for the bookmark. */
          assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
          /** The original file name, or null when Karakeep has none. */
          fileName?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether the URL was already bookmarked, in which case Karakeep returned the existing bookmark instead of creating a duplicate. */
        alreadyExists: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a new RSS feed subscription. Karakeep periodically fetches the feed and imports matching items as bookmarks. Karakeep answers with 400 when the per user feed limit has already been reached. */
    "karakeep.create_feed": {
      input: {
        /**
         * The display name of the feed subscription.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /**
         * The RSS or Atom feed URL that the Karakeep server fetches on a schedule.
         * @maxLength 2000
         * @format uri
         */
        url: string;
        /** Whether Karakeep fetches the feed on its regular schedule. Set to false to keep the subscription without fetching it. */
        enabled: boolean;
        /**
         * Whether tags published by the feed are imported onto the bookmarks it creates.
         * @default false
         */
        importTags?: boolean;
      };
      output: {
        /** The feed id. */
        id: string;
        /** The feed name. */
        name: string;
        /** The feed URL. */
        url: string;
        /** Whether Karakeep fetches the feed on a schedule. */
        enabled: boolean;
        /** Whether tags published by the feed are imported onto new bookmarks. */
        importTags: boolean;
        /** The status of the last fetch attempt, or null. */
        lastFetchedStatus: "success" | "failure" | "pending" | null;
        /** When the feed was last fetched, in ISO 8601 format, or null when never fetched. */
        lastFetchedAt: string | null;
        /** When the feed was last fetched successfully, in ISO 8601 format, or null. */
        lastSuccessfulFetchAt: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a text highlight on a Karakeep bookmark. A highlight is defined by the character offsets it covers in the readable content of the bookmark and can carry a color and a note. */
    "karakeep.create_highlight": {
      input: {
        /**
         * The id of the bookmark to highlight.
         * @minLength 1
         */
        bookmarkId: string;
        /** The character offset in the readable content of the bookmark where the highlight starts. */
        startOffset: number;
        /** The character offset in the readable content of the bookmark where the highlight ends. */
        endOffset: number;
        /**
         * The highlight color.
         * @default "yellow"
         */
        color?: "yellow" | "red" | "green" | "blue";
        /** The highlighted text. Send null when the text is not known; Karakeep stores the highlight by its offsets either way. */
        text?: string | null;
        /** A note to attach to the highlight, or null for no note. */
        note?: string | null;
      };
      output: {
        /** The highlight id. */
        id: string;
        /** The id of the highlighted bookmark. */
        bookmarkId: string;
        /** The start offset of the highlight in the rendered content. */
        startOffset: number;
        /** The end offset of the highlight in the rendered content. */
        endOffset: number;
        /** The highlight color. */
        color?: "yellow" | "red" | "green" | "blue";
        /** The highlighted text, or null. */
        text: string | null;
        /** The note attached to the highlight, or null. */
        note: string | null;
        /** The id of the user who created the highlight. */
        userId: string;
        /** When the highlight was created, in ISO 8601 format. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Create a new bookmark list. Manual lists receive bookmarks that are added explicitly, while smart lists are populated automatically by a saved search query. */
    "karakeep.create_list": {
      input: {
        /**
         * The list name, between 1 and 100 characters.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /**
         * An optional list description, at most 500 characters.
         * @maxLength 500
         */
        description?: string;
        /**
         * The emoji shown as the list icon in the Karakeep UI, for example a single book or star emoji.
         * @minLength 1
         */
        icon: string;
        /**
         * Whether the list is curated manually or populated automatically by a saved query.
         * @default "manual"
         */
        type?: "manual" | "smart";
        /**
         * The Karakeep search query that populates the list. Required when type is smart and rejected when type is manual.
         * @minLength 1
         */
        query?: string;
        /** The id of the parent list, or null to create a top level list. */
        parentId?: string | null;
      };
      output: {
        /** The list id. */
        id: string;
        /** The list name. */
        name: string;
        /** The list description, or null. */
        description?: string | null;
        /** The emoji used as the list icon. */
        icon: string;
        /** The id of the parent list, or null for a top level list. */
        parentId: string | null;
        /** Whether the list is manually curated or driven by a saved query. */
        type?: "manual" | "smart";
        /** The saved search query for a smart list, or null. */
        query?: string | null;
        /** Whether the list is publicly shared. */
        public: boolean;
        /** Whether the list is shared with collaborators. */
        hasCollaborators: boolean;
        /** The role the connected user has on the list. */
        userRole: "owner" | "editor" | "viewer" | "public";
        [key: string]: unknown;
      };
    };
    /** Create a new Karakeep tag. The name is trimmed and normalized into the tag style configured for the account. */
    "karakeep.create_tag": {
      input: {
        /**
         * The tag name. Karakeep trims it and rewrites it into the tag style configured for the account.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The tag id. */
        id: string;
        /** The normalized tag name stored by Karakeep. */
        name: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a Karakeep backup record together with the archive file it produced. Karakeep answers with an empty body, so the action reports the deleted backup id instead. */
    "karakeep.delete_backup": {
      input: {
        /**
         * The id of the backup to delete.
         * @minLength 1
         */
        backupId: string;
      };
      output: {
        /** Always true; Karakeep answers a successful delete with an empty body. */
        success: boolean;
        /** The id of the backup that was deleted. */
        backupId: string;
      };
    };
    /** Permanently delete a bookmark together with its tags, highlights and attached assets. */
    "karakeep.delete_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
      };
      output: {
        /** Always true when Karakeep accepted the deletion. */
        success: boolean;
        /** The id of the deleted bookmark. */
        bookmarkId: string;
      };
    };
    /** Delete an RSS feed subscription. Bookmarks that the feed already imported are not affected. */
    "karakeep.delete_feed": {
      input: {
        /**
         * The unique identifier of the feed.
         * @minLength 1
         */
        feedId: string;
      };
      output: {
        /** Always true when Karakeep deleted the feed. */
        success: boolean;
        /** The id of the deleted feed. */
        feedId: string;
      };
    };
    /** Delete a Karakeep highlight and return the record that was removed. The bookmark the highlight belonged to is kept. */
    "karakeep.delete_highlight": {
      input: {
        /**
         * The id of the highlight.
         * @minLength 1
         */
        highlightId: string;
      };
      output: {
        /** The highlight id. */
        id: string;
        /** The id of the highlighted bookmark. */
        bookmarkId: string;
        /** The start offset of the highlight in the rendered content. */
        startOffset: number;
        /** The end offset of the highlight in the rendered content. */
        endOffset: number;
        /** The highlight color. */
        color?: "yellow" | "red" | "green" | "blue";
        /** The highlighted text, or null. */
        text: string | null;
        /** The note attached to the highlight, or null. */
        note: string | null;
        /** The id of the user who created the highlight. */
        userId: string;
        /** When the highlight was created, in ISO 8601 format. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Karakeep list. Only the list itself is removed; the bookmarks it contained are kept. */
    "karakeep.delete_list": {
      input: {
        /**
         * The id of the list.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Whether Karakeep accepted the delete request. */
        success: boolean;
        /** The id of the deleted list. */
        listId: string;
      };
    };
    /** Delete a Karakeep tag. The tag is detached from every bookmark that carried it; the bookmarks themselves are kept. */
    "karakeep.delete_tag": {
      input: {
        /**
         * The id of the tag.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether Karakeep accepted the delete request. */
        success: boolean;
        /** The id of the deleted tag. */
        tagId: string;
      };
    };
    /** Detach an asset from a bookmark. Karakeep deletes the asset record together with the stored file, so the asset id becomes unusable afterwards and the bytes are gone; the bookmark keeps its other assets. Only screenshot, pdf, assetScreenshot, fullPageArchive, precrawledArchive, bannerImage, video and userUploaded assets can be detached; linkHtmlContent, bookmarkAsset, avatar and unknown assets are maintained by Karakeep itself and are rejected with a 400. */
    "karakeep.detach_asset_from_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /**
         * The id of the asset to detach from the bookmark.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /** Always true when Karakeep accepted the detachment. */
        success: boolean;
        /** The id of the bookmark the asset was detached from. */
        bookmarkId: string;
        /** The id of the detached asset. */
        assetId: string;
      };
    };
    /** Detach tags from a bookmark. Reference each tag by tagId or by tagName. The tags themselves are kept, only the attachment to this bookmark is removed. */
    "karakeep.detach_tags_from_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /** The tags to detach. Every entry must carry either tagId or tagName. */
        tags: Array<{
          /**
           * The id of an existing tag.
           * @minLength 1
           */
          tagId?: string;
          /**
           * The tag name; Karakeep creates the tag when it does not exist yet.
           * @minLength 1
           */
          tagName?: string;
          /** Who the attachment should be attributed to. */
          attachedBy?: "ai" | "human";
        }>;
      };
      output: {
        /** The ids of the tags that were removed from the bookmark. */
        detached: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Download the archive of a finished Karakeep backup and hand it back as a temporary connector file URL. The action reads the backup record first: while the status is still pending it fails with an invalid input error asking you to poll get_backup, on a failed backup it fails with an invalid input error carrying the upstream failure message because that state is terminal and polling will not help, and a success record without an archive asset fails as a provider error. Only then does it stream the archive out of Karakeep into file transit. Karakeep's own download endpoint answers with a redirect to an authenticated relative path that most HTTP clients cannot follow, so the connector resolves the archive asset id itself instead of following the redirect. */
    "karakeep.download_backup": {
      input: {
        /**
         * The id of the backup to download.
         * @minLength 1
         */
        backupId: string;
      };
      output: {
        /** Temporary connector file URL holding the downloaded bytes. Fetch it directly; it is a connector file transit URL rather than a Karakeep URL, and it expires. */
        fileUrl: string;
        /** File name the downloaded bytes were stored under. */
        fileName: string;
        /** MIME type Karakeep reported for the downloaded bytes. */
        contentType: string;
        /** Number of bytes transferred to the connector file URL. */
        sizeBytes: number;
        /** The id of the backup the archive belongs to. */
        backupId: string;
        /** The id of the Karakeep asset holding the archive. */
        assetId: string;
        [key: string]: unknown;
      };
    };
    /** Trigger an immediate fetch of an RSS feed subscription. The fetch is only enqueued and runs asynchronously, so newly imported bookmarks appear later; poll get_feed and watch lastFetchedAt to see when it finished. */
    "karakeep.fetch_feed_now": {
      input: {
        /**
         * The unique identifier of the feed.
         * @minLength 1
         */
        feedId: string;
      };
      output: {
        /** Always true when Karakeep enqueued the fetch. */
        success: boolean;
        /** The id of the feed whose fetch was enqueued. */
        feedId: string;
      };
    };
    /** Download the binary content of a Karakeep asset and hand it back as a temporary connector file URL. The connector streams the bytes from Karakeep into file transit instead of returning them inline, so the action also works for large images, videos, PDFs and archives. Karakeep sends no Content-Disposition header, so the file name falls back to the asset id plus an extension guessed from the content type. */
    "karakeep.get_asset": {
      input: {
        /**
         * The id of the asset to download, as returned by upload_asset or by the assets array of a bookmark.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /** Temporary connector file URL holding the downloaded bytes. Fetch it directly; it is a connector file transit URL rather than a Karakeep URL, and it expires. */
        fileUrl: string;
        /** File name the downloaded bytes were stored under. */
        fileName: string;
        /** MIME type Karakeep reported for the downloaded bytes. */
        contentType: string;
        /** Number of bytes transferred to the connector file URL. */
        sizeBytes: number;
        [key: string]: unknown;
      };
    };
    /** Create a short lived signed download URL for a Karakeep asset. The URL carries its own token, so anyone holding it can fetch the asset without an API key, and it expires between 15 and 75 minutes after it was issued. Karakeep builds the URL from the public URL configured on the instance itself rather than from the instance URL stored on this connection, so a misconfigured self-hosted instance can return a host that is unreachable from the outside. */
    "karakeep.get_asset_signed_url": {
      input: {
        /**
         * The id of the asset to sign, as returned by upload_asset or by the assets array of a bookmark.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /** The unique identifier of the asset. */
        assetId: string;
        /** The temporary URL for downloading the asset without an API key. */
        signedUrl: string;
        /** When the signed URL expires, in ISO 8601 format. */
        expiresAt: string;
        [key: string]: unknown;
      };
    };
    /** Get one Karakeep backup by id, including its current status, archive size, bookmark count and failure message. This is the polling target for create_backup: keep reading it until status is success or failure, and treat a record that stays pending as a backup worker that is not running on that instance. */
    "karakeep.get_backup": {
      input: {
        /**
         * The id of the backup to read, as returned by create_backup or list_backups.
         * @minLength 1
         */
        backupId: string;
      };
      output: {
        /** The backup id. */
        id: string;
        /** The id of the user who owns the backup. */
        userId: string;
        /** The id of the generated archive asset, or null while the backup is still pending or has failed. */
        assetId: string | null;
        /** When the backup was requested, in ISO 8601 format. */
        createdAt: string;
        /** The archive size in bytes; zero while the backup is pending. */
        size: number;
        /** How many bookmarks the archive contains; zero while pending. */
        bookmarkCount: number;
        /** The backup job status. */
        status: "pending" | "success" | "failure";
        /** Why the backup failed, or null. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a single bookmark with its tags, content and attached assets. Keep includeContent false unless the extracted page content is really needed, because it can make the response very large; text bookmarks always carry content.text. Use get_bookmark_content to read long article text in chunks. */
    "karakeep.get_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /** Whether to include the large extracted content of each bookmark, meaning htmlContent on link bookmarks and the extracted text on asset bookmarks. Defaults to false because the payload can be very large. Text bookmarks always return content.text regardless of this flag. */
        includeContent?: boolean;
      };
      output: {
        /** The bookmark id. */
        id: string;
        /** When the bookmark was first created, in ISO 8601 format. */
        firstCreatedAt?: string;
        /** When the bookmark was created, in ISO 8601 format. */
        createdAt: string;
        /** When the bookmark was last modified, in ISO 8601 format, or null. */
        modifiedAt: string | null;
        /** The user supplied title, or null when Karakeep uses the crawled title. */
        title?: string | null;
        /** Whether the bookmark is archived. */
        archived: boolean;
        /** Whether the bookmark is favourited. */
        favourited: boolean;
        /** The AI tagging job status, or null. */
        taggingStatus: "success" | "failure" | "pending" | null;
        /** The AI summarization job status, or null. */
        summarizationStatus: "success" | "failure" | "pending" | null;
        /** The embedding job status, or null. */
        embeddingStatus: "success" | "failure" | "pending" | null;
        /** The user note attached to the bookmark, or null. */
        note?: string | null;
        /** The AI generated summary, or null. */
        summary?: string | null;
        /** How the bookmark entered Karakeep. */
        source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
        /** The id of the user who owns the bookmark. */
        userId: string;
        /** The tags attached to the bookmark. */
        tags: Array<{
          /** The tag id. */
          id: string;
          /** The tag name. */
          name: string;
          /** Whether the tag was attached by a human or by AI tagging. */
          attachedBy: "ai" | "human";
          [key: string]: unknown;
        }>;
        /** The bookmark content. The type field discriminates link, text, asset and unknown bookmarks, and only the fields that belong to that variant are present. */
        content: {
          /** The content variant: link, text, asset, or unknown. */
          type: string;
          /** The bookmarked URL, for link bookmarks. */
          url?: string;
          /** The crawled page title, or null. */
          title?: string | null;
          /** The crawled page description, or null. */
          description?: string | null;
          /** The crawled preview image URL, or null. */
          imageUrl?: string | null;
          /** The stored preview image asset id, or null. */
          imageAssetId?: string | null;
          /** The stored screenshot asset id, or null. */
          screenshotAssetId?: string | null;
          /** The stored PDF asset id, or null. */
          pdfAssetId?: string | null;
          /** The stored full page archive asset id, or null. */
          fullPageArchiveAssetId?: string | null;
          /** The stored precrawled archive asset id, or null. */
          precrawledArchiveAssetId?: string | null;
          /** The stored video asset id, or null. */
          videoAssetId?: string | null;
          /** The crawled favicon URL, or null. */
          favicon?: string | null;
          /** The crawled HTML content, returned only when includeContent is true, or null. */
          htmlContent?: string | null;
          /** The stored extracted content asset id, or null. */
          contentAssetId?: string | null;
          /** Whether the page can be rendered in reader view. */
          readerViewStatus?: "readable" | "not_readable" | "uncertain" | "unavailable" | null;
          /** The reader view readability score from 0 to 100, or null. */
          readerViewScore?: number | null;
          /** The preview mode preferred for this bookmark. */
          preferredPreview?: "reader_view" | "screenshot" | "overview" | null;
          /** When the link was last crawled, in ISO 8601 format, or null. */
          crawledAt?: string | null;
          /** The crawl job status, or null. */
          crawlStatus?: "success" | "failure" | "pending" | null;
          /** The extracted author, or null. */
          author?: string | null;
          /** The extracted publisher, or null. */
          publisher?: string | null;
          /** The extracted publication date, or null. */
          datePublished?: string | null;
          /** The extracted modification date, or null. */
          dateModified?: string | null;
          /** The note body, for text bookmarks. */
          text?: string;
          /** The original source URL, for text and asset bookmarks, or null. */
          sourceUrl?: string | null;
          /** The uploaded asset kind, for asset bookmarks. */
          assetType?: "image" | "pdf";
          /** The uploaded asset id, for asset bookmarks. */
          assetId?: string;
          /** The uploaded file name, for asset bookmarks, or null. */
          fileName?: string | null;
          /** The uploaded file size in bytes, for asset bookmarks, or null. */
          size?: number | null;
          /** The text extracted from the uploaded asset, returned only when includeContent is true, or null. */
          content?: string | null;
          [key: string]: unknown;
        };
        /** The assets attached to the bookmark. */
        assets: Array<{
          /** The asset id. */
          id: string;
          /** The role the asset plays for the bookmark. */
          assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
          /** The original file name, or null when Karakeep has none. */
          fileName?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read the readable content of a bookmark in chunks as markdown or plain text. This is the safe way to read long articles: pass nextCursor back to fetch the following chunk instead of asking for the whole content with includeContent. Karakeep rejects a cursor with CONTENT_CHANGED when the bookmark content changed while paging, in which case restart from the first chunk. */
    "karakeep.get_bookmark_content": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /** The readable representation to render. When omitted together with a cursor the format of the cursor is used, otherwise markdown. */
        format?: "markdown" | "text";
        /**
         * Maximum number of Unicode characters to return in this chunk. The chunk may end earlier at a paragraph or line boundary. Defaults to 12000.
         * @minimum 1
         * @maximum 50000
         */
        maxChars?: number;
        /**
         * Opaque pagination cursor. Pass the nextCursor returned by a previous get_bookmark_content response; cursor formats differ per Karakeep endpoint, so cursors from other endpoints are rejected. The cursor is bound to this bookmark, this format and the content version it was issued for.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The id of the bookmark the content was rendered from. */
        bookmarkId: string;
        /** The bookmark variant the content was rendered from. */
        bookmarkType: "link" | "text" | "asset";
        /** The format of the returned content. */
        format: "markdown" | "text";
        /** The content chunk. */
        content: string;
        /** A hash identifying the rendered content version this cursor belongs to. */
        contentVersion: string;
        /** The character range covered by this chunk. */
        range: {
          /** Zero-based start offset in Unicode characters, inclusive. */
          start: number;
          /** Zero-based end offset in Unicode characters, exclusive. */
          end: number;
          /** Total number of Unicode characters in the rendered content. */
          total: number;
          [key: string]: unknown;
        };
        /** Cursor for the next content chunk, or null when the content is exhausted. */
        nextCursor: string | null;
        /** Whether more content remains after this chunk. */
        truncated: boolean;
        [key: string]: unknown;
      };
    };
    /** List the highlights stored on a bookmark. */
    "karakeep.get_bookmark_highlights": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
      };
      output: {
        /** The highlights created on the bookmark. */
        highlights: Array<{
          /** The highlight id. */
          id: string;
          /** The id of the highlighted bookmark. */
          bookmarkId: string;
          /** The start offset of the highlight in the rendered content. */
          startOffset: number;
          /** The end offset of the highlight in the rendered content. */
          endOffset: number;
          /** The highlight color. */
          color?: "yellow" | "red" | "green" | "blue";
          /** The highlighted text, or null. */
          text: string | null;
          /** The note attached to the highlight, or null. */
          note: string | null;
          /** The id of the user who created the highlight. */
          userId: string;
          /** When the highlight was created, in ISO 8601 format. */
          createdAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the Karakeep lists that contain a bookmark. */
    "karakeep.get_bookmark_lists": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
      };
      output: {
        /** The lists the bookmark belongs to. */
        lists: Array<{
          /** The list id. */
          id: string;
          /** The list name. */
          name: string;
          /** The list description, or null. */
          description?: string | null;
          /** The emoji used as the list icon. */
          icon: string;
          /** The id of the parent list, or null for a top level list. */
          parentId: string | null;
          /** Whether the list is manually curated or driven by a saved query. */
          type?: "manual" | "smart";
          /** The saved search query for a smart list, or null. */
          query?: string | null;
          /** Whether the list is publicly shared. */
          public: boolean;
          /** Whether the list is shared with collaborators. */
          hasCollaborators: boolean;
          /** The role the connected user has on the list. */
          userRole: "owner" | "editor" | "viewer" | "public";
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the profile of the Karakeep user that owns the connected API key, including name, email and avatar. */
    "karakeep.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The user id. */
        id: string;
        /** The display name, or null when the account has none. */
        name: string | null;
        /** The email address, or null when the account has none. */
        email: string | null;
        /** The avatar image URL, or null when the account has none. */
        image: string | null;
        /** Whether the account is a local Karakeep account rather than an external identity provider account. */
        localUser: boolean;
        [key: string]: unknown;
      };
    };
    /** Get usage statistics for the Karakeep user that owns the connected API key, including bookmark, tag, list and asset counts. */
    "karakeep.get_current_user_stats": {
      input: Record<string, never>;
      output: {
        /** How many bookmarks the user owns. */
        numBookmarks: number;
        /** How many bookmarks are favourited. */
        numFavorites: number;
        /** How many bookmarks are archived. */
        numArchived: number;
        /** How many tags the user owns. */
        numTags: number;
        /** How many lists the user owns. */
        numLists: number;
        /** How many highlights the user owns. */
        numHighlights: number;
        /** How many bookmarks exist per bookmark variant. */
        bookmarksByType: {
          /** How many link bookmarks exist. */
          link: number;
          /** How many text bookmarks exist. */
          text: number;
          /** How many asset bookmarks exist. */
          asset: number;
          [key: string]: unknown;
        };
        /** The ten most bookmarked domains. */
        topDomains: Array<{
          /** The domain name. */
          domain: string;
          /** How many bookmarks point at the domain. */
          count: number;
          [key: string]: unknown;
        }>;
        /** Total stored asset size in bytes. */
        totalAssetSize: number;
        /** Stored asset counts and sizes per asset kind. */
        assetsByType: Array<{
          /** The asset kind. */
          type: string;
          /** How many assets of this kind are stored. */
          count: number;
          /** Total size in bytes of the assets of this kind. */
          totalSize: number;
          [key: string]: unknown;
        }>;
        /** How bookmarking activity is distributed in time. */
        bookmarkingActivity: {
          /** How many bookmarks were created this week. */
          thisWeek: number;
          /** How many bookmarks were created this month. */
          thisMonth: number;
          /** How many bookmarks were created this year. */
          thisYear: number;
          /** Bookmark counts per hour of the day. */
          byHour: Array<{
            /** The hour of the day, from 0 to 23. */
            hour: number;
            /** How many bookmarks were created in that hour. */
            count: number;
            [key: string]: unknown;
          }>;
          /** Bookmark counts per day of the week. */
          byDayOfWeek: Array<{
            /** The day of the week, from 0 for Sunday to 6 for Saturday. */
            day: number;
            /** How many bookmarks were created on that day. */
            count: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The ten most used tags. */
        tagUsage: Array<{
          /** The tag name. */
          name: string;
          /** How many bookmarks carry the tag. */
          count: number;
          [key: string]: unknown;
        }>;
        /** Bookmark counts per capture source. */
        bookmarksBySource: Array<{
          /** The capture source, or null when Karakeep did not record one. */
          source: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
          /** How many bookmarks came from that source. */
          count: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single RSS feed subscription by its id. */
    "karakeep.get_feed": {
      input: {
        /**
         * The unique identifier of the feed.
         * @minLength 1
         */
        feedId: string;
      };
      output: {
        /** The feed id. */
        id: string;
        /** The feed name. */
        name: string;
        /** The feed URL. */
        url: string;
        /** Whether Karakeep fetches the feed on a schedule. */
        enabled: boolean;
        /** Whether tags published by the feed are imported onto new bookmarks. */
        importTags: boolean;
        /** The status of the last fetch attempt, or null. */
        lastFetchedStatus: "success" | "failure" | "pending" | null;
        /** When the feed was last fetched, in ISO 8601 format, or null when never fetched. */
        lastFetchedAt: string | null;
        /** When the feed was last fetched successfully, in ISO 8601 format, or null. */
        lastSuccessfulFetchAt: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Karakeep highlight by its id. */
    "karakeep.get_highlight": {
      input: {
        /**
         * The id of the highlight.
         * @minLength 1
         */
        highlightId: string;
      };
      output: {
        /** The highlight id. */
        id: string;
        /** The id of the highlighted bookmark. */
        bookmarkId: string;
        /** The start offset of the highlight in the rendered content. */
        startOffset: number;
        /** The end offset of the highlight in the rendered content. */
        endOffset: number;
        /** The highlight color. */
        color?: "yellow" | "red" | "green" | "blue";
        /** The highlighted text, or null. */
        text: string | null;
        /** The note attached to the highlight, or null. */
        note: string | null;
        /** The id of the user who created the highlight. */
        userId: string;
        /** When the highlight was created, in ISO 8601 format. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Karakeep list by its id. */
    "karakeep.get_list": {
      input: {
        /**
         * The id of the list.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** The list id. */
        id: string;
        /** The list name. */
        name: string;
        /** The list description, or null. */
        description?: string | null;
        /** The emoji used as the list icon. */
        icon: string;
        /** The id of the parent list, or null for a top level list. */
        parentId: string | null;
        /** Whether the list is manually curated or driven by a saved query. */
        type?: "manual" | "smart";
        /** The saved search query for a smart list, or null. */
        query?: string | null;
        /** Whether the list is publicly shared. */
        public: boolean;
        /** Whether the list is shared with collaborators. */
        hasCollaborators: boolean;
        /** The role the connected user has on the list. */
        userRole: "owner" | "editor" | "viewer" | "public";
        [key: string]: unknown;
      };
    };
    /** Retrieve one page of the bookmarks inside a Karakeep list. For smart lists the bookmarks are computed from the saved query of the list. */
    "karakeep.get_list_bookmarks": {
      input: {
        /**
         * The id of the list.
         * @minLength 1
         */
        listId: string;
        /** Sort direction by bookmark creation date. */
        sortOrder?: "asc" | "desc";
        /**
         * Maximum number of items to return in one page, between 1 and 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor. Pass the nextCursor returned by a previous get_list_bookmarks response; cursor formats differ per Karakeep endpoint, so cursors from other endpoints are rejected.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to include the large extracted content fields on returned bookmarks. Defaults to false because the payload can be very large. */
        includeContent?: boolean;
      };
      output: {
        /** The bookmarks on this page. */
        bookmarks: Array<{
          /** The bookmark id. */
          id: string;
          /** When the bookmark was first created, in ISO 8601 format. */
          firstCreatedAt?: string;
          /** When the bookmark was created, in ISO 8601 format. */
          createdAt: string;
          /** When the bookmark was last modified, in ISO 8601 format, or null. */
          modifiedAt: string | null;
          /** The user supplied title, or null when Karakeep uses the crawled title. */
          title?: string | null;
          /** Whether the bookmark is archived. */
          archived: boolean;
          /** Whether the bookmark is favourited. */
          favourited: boolean;
          /** The AI tagging job status, or null. */
          taggingStatus: "success" | "failure" | "pending" | null;
          /** The AI summarization job status, or null. */
          summarizationStatus: "success" | "failure" | "pending" | null;
          /** The embedding job status, or null. */
          embeddingStatus: "success" | "failure" | "pending" | null;
          /** The user note attached to the bookmark, or null. */
          note?: string | null;
          /** The AI generated summary, or null. */
          summary?: string | null;
          /** How the bookmark entered Karakeep. */
          source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
          /** The id of the user who owns the bookmark. */
          userId: string;
          /** The tags attached to the bookmark. */
          tags: Array<{
            /** The tag id. */
            id: string;
            /** The tag name. */
            name: string;
            /** Whether the tag was attached by a human or by AI tagging. */
            attachedBy: "ai" | "human";
            [key: string]: unknown;
          }>;
          /** The bookmark content. The type field discriminates link, text, asset and unknown bookmarks, and only the fields that belong to that variant are present. */
          content: {
            /** The content variant: link, text, asset, or unknown. */
            type: string;
            /** The bookmarked URL, for link bookmarks. */
            url?: string;
            /** The crawled page title, or null. */
            title?: string | null;
            /** The crawled page description, or null. */
            description?: string | null;
            /** The crawled preview image URL, or null. */
            imageUrl?: string | null;
            /** The stored preview image asset id, or null. */
            imageAssetId?: string | null;
            /** The stored screenshot asset id, or null. */
            screenshotAssetId?: string | null;
            /** The stored PDF asset id, or null. */
            pdfAssetId?: string | null;
            /** The stored full page archive asset id, or null. */
            fullPageArchiveAssetId?: string | null;
            /** The stored precrawled archive asset id, or null. */
            precrawledArchiveAssetId?: string | null;
            /** The stored video asset id, or null. */
            videoAssetId?: string | null;
            /** The crawled favicon URL, or null. */
            favicon?: string | null;
            /** The crawled HTML content, returned only when includeContent is true, or null. */
            htmlContent?: string | null;
            /** The stored extracted content asset id, or null. */
            contentAssetId?: string | null;
            /** Whether the page can be rendered in reader view. */
            readerViewStatus?: "readable" | "not_readable" | "uncertain" | "unavailable" | null;
            /** The reader view readability score from 0 to 100, or null. */
            readerViewScore?: number | null;
            /** The preview mode preferred for this bookmark. */
            preferredPreview?: "reader_view" | "screenshot" | "overview" | null;
            /** When the link was last crawled, in ISO 8601 format, or null. */
            crawledAt?: string | null;
            /** The crawl job status, or null. */
            crawlStatus?: "success" | "failure" | "pending" | null;
            /** The extracted author, or null. */
            author?: string | null;
            /** The extracted publisher, or null. */
            publisher?: string | null;
            /** The extracted publication date, or null. */
            datePublished?: string | null;
            /** The extracted modification date, or null. */
            dateModified?: string | null;
            /** The note body, for text bookmarks. */
            text?: string;
            /** The original source URL, for text and asset bookmarks, or null. */
            sourceUrl?: string | null;
            /** The uploaded asset kind, for asset bookmarks. */
            assetType?: "image" | "pdf";
            /** The uploaded asset id, for asset bookmarks. */
            assetId?: string;
            /** The uploaded file name, for asset bookmarks, or null. */
            fileName?: string | null;
            /** The uploaded file size in bytes, for asset bookmarks, or null. */
            size?: number | null;
            /** The text extracted from the uploaded asset, returned only when includeContent is true, or null. */
            content?: string | null;
            [key: string]: unknown;
          };
          /** The assets attached to the bookmark. */
          assets: Array<{
            /** The asset id. */
            id: string;
            /** The role the asset plays for the bookmark. */
            assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
            /** The original file name, or null when Karakeep has none. */
            fileName?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next page, or null when there are no more items. */
        nextCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Karakeep tag by its id, including how many bookmarks carry it and who attached it. */
    "karakeep.get_tag": {
      input: {
        /**
         * The id of the tag.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** The tag id. */
        id: string;
        /** The tag name. */
        name: string;
        /** How many bookmarks carry the tag. */
        numBookmarks: number;
        /** How many bookmarks carry the tag, split by who attached it. */
        numBookmarksByAttachedType: {
          /** How many attachments were made by AI tagging. */
          ai?: number;
          /** How many attachments were made by a human. */
          human?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve one page of the bookmarks that carry a given Karakeep tag. */
    "karakeep.get_tag_bookmarks": {
      input: {
        /**
         * The id of the tag.
         * @minLength 1
         */
        tagId: string;
        /** Sort direction by bookmark creation date. */
        sortOrder?: "asc" | "desc";
        /**
         * Maximum number of items to return in one page, between 1 and 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor. Pass the nextCursor returned by a previous get_tag_bookmarks response; cursor formats differ per Karakeep endpoint, so cursors from other endpoints are rejected.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to include the large extracted content fields on returned bookmarks. Defaults to false because the payload can be very large. */
        includeContent?: boolean;
      };
      output: {
        /** The bookmarks on this page. */
        bookmarks: Array<{
          /** The bookmark id. */
          id: string;
          /** When the bookmark was first created, in ISO 8601 format. */
          firstCreatedAt?: string;
          /** When the bookmark was created, in ISO 8601 format. */
          createdAt: string;
          /** When the bookmark was last modified, in ISO 8601 format, or null. */
          modifiedAt: string | null;
          /** The user supplied title, or null when Karakeep uses the crawled title. */
          title?: string | null;
          /** Whether the bookmark is archived. */
          archived: boolean;
          /** Whether the bookmark is favourited. */
          favourited: boolean;
          /** The AI tagging job status, or null. */
          taggingStatus: "success" | "failure" | "pending" | null;
          /** The AI summarization job status, or null. */
          summarizationStatus: "success" | "failure" | "pending" | null;
          /** The embedding job status, or null. */
          embeddingStatus: "success" | "failure" | "pending" | null;
          /** The user note attached to the bookmark, or null. */
          note?: string | null;
          /** The AI generated summary, or null. */
          summary?: string | null;
          /** How the bookmark entered Karakeep. */
          source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
          /** The id of the user who owns the bookmark. */
          userId: string;
          /** The tags attached to the bookmark. */
          tags: Array<{
            /** The tag id. */
            id: string;
            /** The tag name. */
            name: string;
            /** Whether the tag was attached by a human or by AI tagging. */
            attachedBy: "ai" | "human";
            [key: string]: unknown;
          }>;
          /** The bookmark content. The type field discriminates link, text, asset and unknown bookmarks, and only the fields that belong to that variant are present. */
          content: {
            /** The content variant: link, text, asset, or unknown. */
            type: string;
            /** The bookmarked URL, for link bookmarks. */
            url?: string;
            /** The crawled page title, or null. */
            title?: string | null;
            /** The crawled page description, or null. */
            description?: string | null;
            /** The crawled preview image URL, or null. */
            imageUrl?: string | null;
            /** The stored preview image asset id, or null. */
            imageAssetId?: string | null;
            /** The stored screenshot asset id, or null. */
            screenshotAssetId?: string | null;
            /** The stored PDF asset id, or null. */
            pdfAssetId?: string | null;
            /** The stored full page archive asset id, or null. */
            fullPageArchiveAssetId?: string | null;
            /** The stored precrawled archive asset id, or null. */
            precrawledArchiveAssetId?: string | null;
            /** The stored video asset id, or null. */
            videoAssetId?: string | null;
            /** The crawled favicon URL, or null. */
            favicon?: string | null;
            /** The crawled HTML content, returned only when includeContent is true, or null. */
            htmlContent?: string | null;
            /** The stored extracted content asset id, or null. */
            contentAssetId?: string | null;
            /** Whether the page can be rendered in reader view. */
            readerViewStatus?: "readable" | "not_readable" | "uncertain" | "unavailable" | null;
            /** The reader view readability score from 0 to 100, or null. */
            readerViewScore?: number | null;
            /** The preview mode preferred for this bookmark. */
            preferredPreview?: "reader_view" | "screenshot" | "overview" | null;
            /** When the link was last crawled, in ISO 8601 format, or null. */
            crawledAt?: string | null;
            /** The crawl job status, or null. */
            crawlStatus?: "success" | "failure" | "pending" | null;
            /** The extracted author, or null. */
            author?: string | null;
            /** The extracted publisher, or null. */
            publisher?: string | null;
            /** The extracted publication date, or null. */
            datePublished?: string | null;
            /** The extracted modification date, or null. */
            dateModified?: string | null;
            /** The note body, for text bookmarks. */
            text?: string;
            /** The original source URL, for text and asset bookmarks, or null. */
            sourceUrl?: string | null;
            /** The uploaded asset kind, for asset bookmarks. */
            assetType?: "image" | "pdf";
            /** The uploaded asset id, for asset bookmarks. */
            assetId?: string;
            /** The uploaded file name, for asset bookmarks, or null. */
            fileName?: string | null;
            /** The uploaded file size in bytes, for asset bookmarks, or null. */
            size?: number | null;
            /** The text extracted from the uploaded asset, returned only when includeContent is true, or null. */
            content?: string | null;
            [key: string]: unknown;
          };
          /** The assets attached to the bookmark. */
          assets: Array<{
            /** The asset id. */
            id: string;
            /** The role the asset plays for the bookmark. */
            assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
            /** The original file name, or null when Karakeep has none. */
            fileName?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next page, or null when there are no more items. */
        nextCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List every account backup recorded for the connected Karakeep user, including the ones that are still pending and the ones that failed. */
    "karakeep.list_backups": {
      input: Record<string, never>;
      output: {
        /** The backup records, including pending and failed ones. */
        backups: Array<{
          /** The backup id. */
          id: string;
          /** The id of the user who owns the backup. */
          userId: string;
          /** The id of the generated archive asset, or null while the backup is still pending or has failed. */
          assetId: string | null;
          /** When the backup was requested, in ISO 8601 format. */
          createdAt: string;
          /** The archive size in bytes; zero while the backup is pending. */
          size: number;
          /** How many bookmarks the archive contains; zero while pending. */
          bookmarkCount: number;
          /** The backup job status. */
          status: "pending" | "success" | "failure";
          /** Why the backup failed, or null. */
          errorMessage?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the bookmarks of the connected Karakeep user, optionally filtered by archived or favourited status, sorted by creation date and paged with a cursor. Keep includeContent false unless the extracted page content is really needed, because it can make the response very large; text bookmarks always carry content.text. */
    "karakeep.list_bookmarks": {
      input: {
        /** Filter by archived status. */
        archived?: boolean;
        /** Filter by favourited status. */
        favourited?: boolean;
        /** Sort order by creation date. Defaults to desc, meaning newest first. */
        sortOrder?: "asc" | "desc";
        /**
         * Maximum number of items to return in one page, between 1 and 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor. Pass the nextCursor returned by a previous list_bookmarks response; cursor formats differ per Karakeep endpoint, so cursors from other endpoints are rejected. List cursors are not interchangeable with search_bookmarks cursors.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to include the large extracted content of each bookmark, meaning htmlContent on link bookmarks and the extracted text on asset bookmarks. Defaults to false because the payload can be very large. Text bookmarks always return content.text regardless of this flag. */
        includeContent?: boolean;
      };
      output: {
        /** The bookmarks on this page. */
        bookmarks: Array<{
          /** The bookmark id. */
          id: string;
          /** When the bookmark was first created, in ISO 8601 format. */
          firstCreatedAt?: string;
          /** When the bookmark was created, in ISO 8601 format. */
          createdAt: string;
          /** When the bookmark was last modified, in ISO 8601 format, or null. */
          modifiedAt: string | null;
          /** The user supplied title, or null when Karakeep uses the crawled title. */
          title?: string | null;
          /** Whether the bookmark is archived. */
          archived: boolean;
          /** Whether the bookmark is favourited. */
          favourited: boolean;
          /** The AI tagging job status, or null. */
          taggingStatus: "success" | "failure" | "pending" | null;
          /** The AI summarization job status, or null. */
          summarizationStatus: "success" | "failure" | "pending" | null;
          /** The embedding job status, or null. */
          embeddingStatus: "success" | "failure" | "pending" | null;
          /** The user note attached to the bookmark, or null. */
          note?: string | null;
          /** The AI generated summary, or null. */
          summary?: string | null;
          /** How the bookmark entered Karakeep. */
          source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
          /** The id of the user who owns the bookmark. */
          userId: string;
          /** The tags attached to the bookmark. */
          tags: Array<{
            /** The tag id. */
            id: string;
            /** The tag name. */
            name: string;
            /** Whether the tag was attached by a human or by AI tagging. */
            attachedBy: "ai" | "human";
            [key: string]: unknown;
          }>;
          /** The bookmark content. The type field discriminates link, text, asset and unknown bookmarks, and only the fields that belong to that variant are present. */
          content: {
            /** The content variant: link, text, asset, or unknown. */
            type: string;
            /** The bookmarked URL, for link bookmarks. */
            url?: string;
            /** The crawled page title, or null. */
            title?: string | null;
            /** The crawled page description, or null. */
            description?: string | null;
            /** The crawled preview image URL, or null. */
            imageUrl?: string | null;
            /** The stored preview image asset id, or null. */
            imageAssetId?: string | null;
            /** The stored screenshot asset id, or null. */
            screenshotAssetId?: string | null;
            /** The stored PDF asset id, or null. */
            pdfAssetId?: string | null;
            /** The stored full page archive asset id, or null. */
            fullPageArchiveAssetId?: string | null;
            /** The stored precrawled archive asset id, or null. */
            precrawledArchiveAssetId?: string | null;
            /** The stored video asset id, or null. */
            videoAssetId?: string | null;
            /** The crawled favicon URL, or null. */
            favicon?: string | null;
            /** The crawled HTML content, returned only when includeContent is true, or null. */
            htmlContent?: string | null;
            /** The stored extracted content asset id, or null. */
            contentAssetId?: string | null;
            /** Whether the page can be rendered in reader view. */
            readerViewStatus?: "readable" | "not_readable" | "uncertain" | "unavailable" | null;
            /** The reader view readability score from 0 to 100, or null. */
            readerViewScore?: number | null;
            /** The preview mode preferred for this bookmark. */
            preferredPreview?: "reader_view" | "screenshot" | "overview" | null;
            /** When the link was last crawled, in ISO 8601 format, or null. */
            crawledAt?: string | null;
            /** The crawl job status, or null. */
            crawlStatus?: "success" | "failure" | "pending" | null;
            /** The extracted author, or null. */
            author?: string | null;
            /** The extracted publisher, or null. */
            publisher?: string | null;
            /** The extracted publication date, or null. */
            datePublished?: string | null;
            /** The extracted modification date, or null. */
            dateModified?: string | null;
            /** The note body, for text bookmarks. */
            text?: string;
            /** The original source URL, for text and asset bookmarks, or null. */
            sourceUrl?: string | null;
            /** The uploaded asset kind, for asset bookmarks. */
            assetType?: "image" | "pdf";
            /** The uploaded asset id, for asset bookmarks. */
            assetId?: string;
            /** The uploaded file name, for asset bookmarks, or null. */
            fileName?: string | null;
            /** The uploaded file size in bytes, for asset bookmarks, or null. */
            size?: number | null;
            /** The text extracted from the uploaded asset, returned only when includeContent is true, or null. */
            content?: string | null;
            [key: string]: unknown;
          };
          /** The assets attached to the bookmark. */
          assets: Array<{
            /** The asset id. */
            id: string;
            /** The role the asset plays for the bookmark. */
            assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
            /** The original file name, or null when Karakeep has none. */
            fileName?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next page, or null when there are no more items. */
        nextCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve all RSS feed subscriptions for the authenticated Karakeep user. The response is not paginated and returns every feed at once. */
    "karakeep.list_feeds": {
      input: Record<string, never>;
      output: {
        /** The feed subscriptions. Karakeep applies no ordering to them. */
        feeds: Array<{
          /** The feed id. */
          id: string;
          /** The feed name. */
          name: string;
          /** The feed URL. */
          url: string;
          /** Whether Karakeep fetches the feed on a schedule. */
          enabled: boolean;
          /** Whether tags published by the feed are imported onto new bookmarks. */
          importTags: boolean;
          /** The status of the last fetch attempt, or null. */
          lastFetchedStatus: "success" | "failure" | "pending" | null;
          /** When the feed was last fetched, in ISO 8601 format, or null when never fetched. */
          lastFetchedAt: string | null;
          /** When the feed was last fetched successfully, in ISO 8601 format, or null. */
          lastSuccessfulFetchAt: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one page of the highlights the authenticated Karakeep user has made across all bookmarks. */
    "karakeep.list_highlights": {
      input: {
        /**
         * Maximum number of items to return in one page, between 1 and 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor. Pass the nextCursor returned by a previous list_highlights response; cursor formats differ per Karakeep endpoint, so cursors from other endpoints are rejected.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The highlights on this page. */
        highlights: Array<{
          /** The highlight id. */
          id: string;
          /** The id of the highlighted bookmark. */
          bookmarkId: string;
          /** The start offset of the highlight in the rendered content. */
          startOffset: number;
          /** The end offset of the highlight in the rendered content. */
          endOffset: number;
          /** The highlight color. */
          color?: "yellow" | "red" | "green" | "blue";
          /** The highlighted text, or null. */
          text: string | null;
          /** The note attached to the highlight, or null. */
          note: string | null;
          /** The id of the user who created the highlight. */
          userId: string;
          /** When the highlight was created, in ISO 8601 format. */
          createdAt: string;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next page, or null when there are no more items. */
        nextCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve all bookmark lists for the authenticated Karakeep user, including both manual and smart lists. This endpoint is not paginated and returns every list in one response. */
    "karakeep.list_lists": {
      input: Record<string, never>;
      output: {
        /** The lists returned by Karakeep. */
        lists: Array<{
          /** The list id. */
          id: string;
          /** The list name. */
          name: string;
          /** The list description, or null. */
          description?: string | null;
          /** The emoji used as the list icon. */
          icon: string;
          /** The id of the parent list, or null for a top level list. */
          parentId: string | null;
          /** Whether the list is manually curated or driven by a saved query. */
          type?: "manual" | "smart";
          /** The saved search query for a smart list, or null. */
          query?: string | null;
          /** Whether the list is publicly shared. */
          public: boolean;
          /** Whether the list is shared with collaborators. */
          hasCollaborators: boolean;
          /** The role the connected user has on the list. */
          userRole: "owner" | "editor" | "viewer" | "public";
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one page of Karakeep tags. Tags can be filtered by name fragment and by who attached them, and sorted by name, usage count or relevance. Pagination is only active when limit is given: omit limit and Karakeep returns every tag in one response with no cursor. */
    "karakeep.list_tags": {
      input: {
        /**
         * Only return tags whose name contains this text. Required when sort is relevance.
         * @minLength 1
         */
        nameContains?: string;
        /** How the tags are ordered. Defaults to usage, which returns the most used tags first. Relevance ranks the matches of nameContains and therefore requires it. */
        sort?: "name" | "usage" | "relevance";
        /** Filter tags by who attached them. ai returns tags that were attached only by AI tagging and never by a human, human returns tags a human attached on at least one bookmark, and none returns tags that are attached to no bookmark at all. */
        attachedBy?: "ai" | "human" | "none";
        /**
         * Opaque pagination cursor. Pass the nextCursor returned by a previous list_tags response; cursor formats differ per Karakeep endpoint, so cursors from other endpoints are rejected. Karakeep only paginates the tag list when limit is sent, so a cursor must be accompanied by the same limit that produced it.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of tags to return in one page, between 1 and 1000. Pagination is only active when limit is given: omit it and Karakeep returns every tag with no cursor, and the same limit has to be repeated on every page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The tags on this page. */
        tags: Array<{
          /** The tag id. */
          id: string;
          /** The tag name. */
          name: string;
          /** How many bookmarks carry the tag. */
          numBookmarks: number;
          /** How many bookmarks carry the tag, split by who attached it. */
          numBookmarksByAttachedType: {
            /** How many attachments were made by AI tagging. */
            ai?: number;
            /** How many attachments were made by a human. */
            human?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next page of tags, or null when there are no more tags. Tag cursors are only accepted by list_tags. */
        nextCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Remove a bookmark from a manual Karakeep list. The bookmark itself is kept. Karakeep rejects the request when the bookmark is not a member of the list. */
    "karakeep.remove_bookmark_from_list": {
      input: {
        /**
         * The id of the list.
         * @minLength 1
         */
        listId: string;
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
      };
      output: {
        /** Whether Karakeep accepted the removal request. */
        success: boolean;
        /** The id of the list the bookmark was removed from. */
        listId: string;
        /** The id of the bookmark that was removed. */
        bookmarkId: string;
      };
    };
    /** Replace an asset that is attached to a bookmark with another already uploaded asset. The replaced asset is deleted and the new asset takes over its role. The asset being replaced must hold an attachable role, meaning screenshot, pdf, assetScreenshot, precrawledArchive, bannerImage, video or userUploaded; assets Karakeep maintains itself, including linkHtmlContent, bookmarkAsset, fullPageArchive, avatar and unknown, are rejected with a 400. */
    "karakeep.replace_asset_on_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /**
         * The id of the asset that is currently attached and will be replaced.
         * @minLength 1
         */
        assetId: string;
        /**
         * The id of the already uploaded asset that takes over the role of the replaced asset.
         * @minLength 1
         */
        newAssetId: string;
      };
      output: {
        /** Always true when Karakeep accepted the replacement. */
        success: boolean;
        /** The id of the bookmark the asset belongs to. */
        bookmarkId: string;
        /** The id of the asset that was replaced. */
        assetId: string;
        /** The id of the asset that took its place. */
        newAssetId: string;
      };
    };
    /** Search the bookmarks of the connected Karakeep user with full text, semantic or hybrid search. Paging uses a search specific cursor that cannot be shared with list_bookmarks. Keep includeContent false unless the extracted page content is really needed, because it can make the response very large; text bookmarks always carry content.text. */
    "karakeep.search_bookmarks": {
      input: {
        /**
         * The search query string.
         * @minLength 1
         */
        q: string;
        /** Search strategy. fts uses full text search, semantic uses bookmark embeddings, and hybrid fuses both. Hybrid falls back to full text search when the query has no free text terms or when embeddings are unavailable. Defaults to fts. semantic and hybrid are only accepted on instances that have semantic search and automatic embedding indexing enabled; elsewhere Karakeep answers 400 Semantic search is not enabled. */
        searchMode?: "fts" | "semantic" | "hybrid";
        /** Sort order for results. Defaults to relevance. Use asc or desc for date based sorting; semantic and hybrid modes support relevance only. */
        sortOrder?: "asc" | "desc" | "relevance";
        /**
         * Maximum number of items to return in one page, between 1 and 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor. Pass the nextCursor returned by a previous search_bookmarks response; cursor formats differ per Karakeep endpoint, so cursors from other endpoints are rejected. Search cursors encode a result offset and must not be used with list_bookmarks.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to include the large extracted content of each bookmark, meaning htmlContent on link bookmarks and the extracted text on asset bookmarks. Defaults to false because the payload can be very large. Text bookmarks always return content.text regardless of this flag. */
        includeContent?: boolean;
      };
      output: {
        /** The bookmarks on this page. */
        bookmarks: Array<{
          /** The bookmark id. */
          id: string;
          /** When the bookmark was first created, in ISO 8601 format. */
          firstCreatedAt?: string;
          /** When the bookmark was created, in ISO 8601 format. */
          createdAt: string;
          /** When the bookmark was last modified, in ISO 8601 format, or null. */
          modifiedAt: string | null;
          /** The user supplied title, or null when Karakeep uses the crawled title. */
          title?: string | null;
          /** Whether the bookmark is archived. */
          archived: boolean;
          /** Whether the bookmark is favourited. */
          favourited: boolean;
          /** The AI tagging job status, or null. */
          taggingStatus: "success" | "failure" | "pending" | null;
          /** The AI summarization job status, or null. */
          summarizationStatus: "success" | "failure" | "pending" | null;
          /** The embedding job status, or null. */
          embeddingStatus: "success" | "failure" | "pending" | null;
          /** The user note attached to the bookmark, or null. */
          note?: string | null;
          /** The AI generated summary, or null. */
          summary?: string | null;
          /** How the bookmark entered Karakeep. */
          source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
          /** The id of the user who owns the bookmark. */
          userId: string;
          /** The tags attached to the bookmark. */
          tags: Array<{
            /** The tag id. */
            id: string;
            /** The tag name. */
            name: string;
            /** Whether the tag was attached by a human or by AI tagging. */
            attachedBy: "ai" | "human";
            [key: string]: unknown;
          }>;
          /** The bookmark content. The type field discriminates link, text, asset and unknown bookmarks, and only the fields that belong to that variant are present. */
          content: {
            /** The content variant: link, text, asset, or unknown. */
            type: string;
            /** The bookmarked URL, for link bookmarks. */
            url?: string;
            /** The crawled page title, or null. */
            title?: string | null;
            /** The crawled page description, or null. */
            description?: string | null;
            /** The crawled preview image URL, or null. */
            imageUrl?: string | null;
            /** The stored preview image asset id, or null. */
            imageAssetId?: string | null;
            /** The stored screenshot asset id, or null. */
            screenshotAssetId?: string | null;
            /** The stored PDF asset id, or null. */
            pdfAssetId?: string | null;
            /** The stored full page archive asset id, or null. */
            fullPageArchiveAssetId?: string | null;
            /** The stored precrawled archive asset id, or null. */
            precrawledArchiveAssetId?: string | null;
            /** The stored video asset id, or null. */
            videoAssetId?: string | null;
            /** The crawled favicon URL, or null. */
            favicon?: string | null;
            /** The crawled HTML content, returned only when includeContent is true, or null. */
            htmlContent?: string | null;
            /** The stored extracted content asset id, or null. */
            contentAssetId?: string | null;
            /** Whether the page can be rendered in reader view. */
            readerViewStatus?: "readable" | "not_readable" | "uncertain" | "unavailable" | null;
            /** The reader view readability score from 0 to 100, or null. */
            readerViewScore?: number | null;
            /** The preview mode preferred for this bookmark. */
            preferredPreview?: "reader_view" | "screenshot" | "overview" | null;
            /** When the link was last crawled, in ISO 8601 format, or null. */
            crawledAt?: string | null;
            /** The crawl job status, or null. */
            crawlStatus?: "success" | "failure" | "pending" | null;
            /** The extracted author, or null. */
            author?: string | null;
            /** The extracted publisher, or null. */
            publisher?: string | null;
            /** The extracted publication date, or null. */
            datePublished?: string | null;
            /** The extracted modification date, or null. */
            dateModified?: string | null;
            /** The note body, for text bookmarks. */
            text?: string;
            /** The original source URL, for text and asset bookmarks, or null. */
            sourceUrl?: string | null;
            /** The uploaded asset kind, for asset bookmarks. */
            assetType?: "image" | "pdf";
            /** The uploaded asset id, for asset bookmarks. */
            assetId?: string;
            /** The uploaded file name, for asset bookmarks, or null. */
            fileName?: string | null;
            /** The uploaded file size in bytes, for asset bookmarks, or null. */
            size?: number | null;
            /** The text extracted from the uploaded asset, returned only when includeContent is true, or null. */
            content?: string | null;
            [key: string]: unknown;
          };
          /** The assets attached to the bookmark. */
          assets: Array<{
            /** The asset id. */
            id: string;
            /** The role the asset plays for the bookmark. */
            assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
            /** The original file name, or null when Karakeep has none. */
            fileName?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Opaque cursor for the next page, or null when there are no more items. */
        nextCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Generate an AI summary for a link bookmark and return it. Karakeep saves the generated summary on the bookmark, replacing any summary it already had, and re-indexes the bookmark for search, so this is not a read-only preview. The call blocks while the configured model runs, so it can take a while, and it fails with an invalid input error when the Karakeep instance has no inference provider configured. The current server writes the summary before answering and returns it synchronously, so summary normally carries the finished text. The published OpenAPI spec instead documents the whole bookmark record, so an instance following that shape can answer with summary null; in that case read the bookmark again with get_bookmark until summarizationStatus is success and take the summary from there. */
    "karakeep.summarize_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
      };
      output: {
        /** The generated summary text, or null when the instance answered with the bookmark record before the summary was stored on it. */
        summary: string | null;
        /** The AI summarization job status, only returned by instances that answer with the whole bookmark record. */
        summarizationStatus?: "success" | "failure" | "pending" | null;
      };
    };
    /** Update a bookmark. Only the fields you send are changed, and sending null clears a nullable field, so existing values are overwritten. Fields that do not belong to the bookmark variant are not ignored: Karakeep rejects the whole request with a 400 such as Attempting to set link attributes for non-link type bookmark and writes nothing, so send only the fields that match the bookmark type. */
    "karakeep.update_bookmark": {
      input: {
        /**
         * The id of the bookmark.
         * @minLength 1
         */
        bookmarkId: string;
        /** Whether the bookmark is archived. */
        archived?: boolean;
        /** Whether the bookmark is favourited. */
        favourited?: boolean;
        /** The stored summary, or null to clear it. */
        summary?: string | null;
        /** The note attached to the bookmark. */
        note?: string;
        /**
         * The user supplied title, or null to fall back to the crawled title.
         * @maxLength 1000
         */
        title?: string | null;
        /**
         * The creation timestamp to record, in ISO 8601 format.
         * @format date-time
         */
        createdAt?: string;
        /**
         * The bookmarked URL. Only applies to link bookmarks.
         * @format uri
         */
        url?: string;
        /** The page description, or null to clear it. Only applies to link bookmarks. */
        description?: string | null;
        /** The page author, or null to clear it. Only applies to link bookmarks. */
        author?: string | null;
        /** The page publisher, or null to clear it. Only applies to link bookmarks. */
        publisher?: string | null;
        /** The publication date in ISO 8601 format, or null to clear it. Only applies to link bookmarks. */
        datePublished?: string | null;
        /** The modification date in ISO 8601 format, or null to clear it. Only applies to link bookmarks. */
        dateModified?: string | null;
        /**
         * The note body. Only applies to text bookmarks. Karakeep skips null and empty strings here, so the body of a text bookmark cannot be cleared through this action.
         * @minLength 1
         */
        text?: string;
        /** The text extracted from the uploaded file, or null to clear it. Only applies to asset bookmarks. */
        assetContent?: string | null;
      };
      output: {
        /** The bookmark id. */
        id: string;
        /** When the bookmark was first created, in ISO 8601 format. */
        firstCreatedAt?: string;
        /** When the bookmark was created, in ISO 8601 format. */
        createdAt: string;
        /** When the bookmark was last modified, in ISO 8601 format, or null. */
        modifiedAt: string | null;
        /** The user supplied title, or null when Karakeep uses the crawled title. */
        title?: string | null;
        /** Whether the bookmark is archived. */
        archived: boolean;
        /** Whether the bookmark is favourited. */
        favourited: boolean;
        /** The AI tagging job status, or null. */
        taggingStatus: "success" | "failure" | "pending" | null;
        /** The AI summarization job status, or null. */
        summarizationStatus: "success" | "failure" | "pending" | null;
        /** The embedding job status, or null. */
        embeddingStatus: "success" | "failure" | "pending" | null;
        /** The user note attached to the bookmark, or null. */
        note?: string | null;
        /** The AI generated summary, or null. */
        summary?: string | null;
        /** How the bookmark entered Karakeep. */
        source?: "api" | "web" | "cli" | "mobile" | "extension" | "singlefile" | "rss" | "import" | null;
        /** The id of the user who owns the bookmark. */
        userId: string;
        /** The tags attached to the bookmark. */
        tags?: Array<{
          /** The tag id. */
          id: string;
          /** The tag name. */
          name: string;
          /** Whether the tag was attached by a human or by AI tagging. */
          attachedBy: "ai" | "human";
          [key: string]: unknown;
        }>;
        /** The bookmark content. The type field discriminates link, text, asset and unknown bookmarks, and only the fields that belong to that variant are present. */
        content?: {
          /** The content variant: link, text, asset, or unknown. */
          type: string;
          /** The bookmarked URL, for link bookmarks. */
          url?: string;
          /** The crawled page title, or null. */
          title?: string | null;
          /** The crawled page description, or null. */
          description?: string | null;
          /** The crawled preview image URL, or null. */
          imageUrl?: string | null;
          /** The stored preview image asset id, or null. */
          imageAssetId?: string | null;
          /** The stored screenshot asset id, or null. */
          screenshotAssetId?: string | null;
          /** The stored PDF asset id, or null. */
          pdfAssetId?: string | null;
          /** The stored full page archive asset id, or null. */
          fullPageArchiveAssetId?: string | null;
          /** The stored precrawled archive asset id, or null. */
          precrawledArchiveAssetId?: string | null;
          /** The stored video asset id, or null. */
          videoAssetId?: string | null;
          /** The crawled favicon URL, or null. */
          favicon?: string | null;
          /** The crawled HTML content, returned only when includeContent is true, or null. */
          htmlContent?: string | null;
          /** The stored extracted content asset id, or null. */
          contentAssetId?: string | null;
          /** Whether the page can be rendered in reader view. */
          readerViewStatus?: "readable" | "not_readable" | "uncertain" | "unavailable" | null;
          /** The reader view readability score from 0 to 100, or null. */
          readerViewScore?: number | null;
          /** The preview mode preferred for this bookmark. */
          preferredPreview?: "reader_view" | "screenshot" | "overview" | null;
          /** When the link was last crawled, in ISO 8601 format, or null. */
          crawledAt?: string | null;
          /** The crawl job status, or null. */
          crawlStatus?: "success" | "failure" | "pending" | null;
          /** The extracted author, or null. */
          author?: string | null;
          /** The extracted publisher, or null. */
          publisher?: string | null;
          /** The extracted publication date, or null. */
          datePublished?: string | null;
          /** The extracted modification date, or null. */
          dateModified?: string | null;
          /** The note body, for text bookmarks. */
          text?: string;
          /** The original source URL, for text and asset bookmarks, or null. */
          sourceUrl?: string | null;
          /** The uploaded asset kind, for asset bookmarks. */
          assetType?: "image" | "pdf";
          /** The uploaded asset id, for asset bookmarks. */
          assetId?: string;
          /** The uploaded file name, for asset bookmarks, or null. */
          fileName?: string | null;
          /** The uploaded file size in bytes, for asset bookmarks, or null. */
          size?: number | null;
          /** The text extracted from the uploaded asset, returned only when includeContent is true, or null. */
          content?: string | null;
          [key: string]: unknown;
        };
        /** The assets attached to the bookmark. */
        assets?: Array<{
          /** The asset id. */
          id: string;
          /** The role the asset plays for the bookmark. */
          assetType: "linkHtmlContent" | "screenshot" | "pdf" | "assetScreenshot" | "bannerImage" | "fullPageArchive" | "video" | "bookmarkAsset" | "precrawledArchive" | "userUploaded" | "avatar" | "unknown";
          /** The original file name, or null when Karakeep has none. */
          fileName?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update an RSS feed subscription. Only the fields present in the input are changed; every omitted field keeps its current value. */
    "karakeep.update_feed": {
      input: {
        /**
         * The unique identifier of the feed.
         * @minLength 1
         */
        feedId: string;
        /**
         * The display name of the feed subscription.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /**
         * The RSS or Atom feed URL that the Karakeep server fetches on a schedule.
         * @maxLength 2000
         * @format uri
         */
        url?: string;
        /** Whether Karakeep fetches the feed on its regular schedule. Set to false to keep the subscription without fetching it. */
        enabled?: boolean;
        /** Whether tags published by the feed are imported onto the bookmarks it creates. */
        importTags?: boolean;
      };
      output: {
        /** The feed id. */
        id: string;
        /** The feed name. */
        name: string;
        /** The feed URL. */
        url: string;
        /** Whether Karakeep fetches the feed on a schedule. */
        enabled: boolean;
        /** Whether tags published by the feed are imported onto new bookmarks. */
        importTags: boolean;
        /** The status of the last fetch attempt, or null. */
        lastFetchedStatus: "success" | "failure" | "pending" | null;
        /** When the feed was last fetched, in ISO 8601 format, or null when never fetched. */
        lastFetchedAt: string | null;
        /** When the feed was last fetched successfully, in ISO 8601 format, or null. */
        lastSuccessfulFetchAt: string | null;
        [key: string]: unknown;
      };
    };
    /** Partially update a Karakeep highlight. Only the color and the note can be changed, and sending null for the note clears it. */
    "karakeep.update_highlight": {
      input: {
        /**
         * The id of the highlight.
         * @minLength 1
         */
        highlightId: string;
        /** The new highlight color. */
        color?: "yellow" | "red" | "green" | "blue";
        /** The new note for the highlight, or null to clear the existing note. */
        note?: string | null;
      };
      output: {
        /** The highlight id. */
        id: string;
        /** The id of the highlighted bookmark. */
        bookmarkId: string;
        /** The start offset of the highlight in the rendered content. */
        startOffset: number;
        /** The end offset of the highlight in the rendered content. */
        endOffset: number;
        /** The highlight color. */
        color?: "yellow" | "red" | "green" | "blue";
        /** The highlighted text, or null. */
        text: string | null;
        /** The note attached to the highlight, or null. */
        note: string | null;
        /** The id of the user who created the highlight. */
        userId: string;
        /** When the highlight was created, in ISO 8601 format. */
        createdAt: string;
        [key: string]: unknown;
      };
    };
    /** Partially update a Karakeep list. Only the fields present in the input are changed, and sending null for description or parentId clears the stored value. */
    "karakeep.update_list": {
      input: {
        /**
         * The id of the list.
         * @minLength 1
         */
        listId: string;
        /**
         * The list name, between 1 and 100 characters.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /**
         * A new list description of at most 500 characters, or null to clear it.
         * @maxLength 500
         */
        description?: string | null;
        /**
         * The emoji shown as the list icon in the Karakeep UI, for example a single book or star emoji.
         * @minLength 1
         */
        icon?: string;
        /** The id of the new parent list, or null to move the list to the top level. */
        parentId?: string | null;
        /**
         * The Karakeep search query that populates a smart list, for example is:fav or #reading. Only qualified search terms are accepted.
         * @minLength 1
         */
        query?: string;
        /** Whether the list is publicly shared through a public link. */
        public?: boolean;
      };
      output: {
        /** The list id. */
        id: string;
        /** The list name. */
        name: string;
        /** The list description, or null. */
        description?: string | null;
        /** The emoji used as the list icon. */
        icon: string;
        /** The id of the parent list, or null for a top level list. */
        parentId: string | null;
        /** Whether the list is manually curated or driven by a saved query. */
        type?: "manual" | "smart";
        /** The saved search query for a smart list, or null. */
        query?: string | null;
        /** Whether the list is publicly shared. */
        public: boolean;
        /** Whether the list is shared with collaborators. */
        hasCollaborators: boolean;
        /** The role the connected user has on the list. */
        userRole: "owner" | "editor" | "viewer" | "public";
        [key: string]: unknown;
      };
    };
    /** Rename a Karakeep tag. The name is the only field this endpoint can change, so it is required. The new name is trimmed and normalized, and every bookmark carrying the tag sees the new name. */
    "karakeep.update_tag": {
      input: {
        /**
         * The id of the tag.
         * @minLength 1
         */
        tagId: string;
        /**
         * The new tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The tag id. */
        id: string;
        /** The normalized tag name stored by Karakeep. */
        name: string;
        [key: string]: unknown;
      };
    };
    /** Upload a file to Karakeep as a new standalone asset. The connector downloads fileUrl server side and posts the bytes as multipart/form-data under the form field file. Karakeep accepts only image/gif, image/jpeg, image/png, image/webp, video/mp4, video/webm, video/x-matroska, text/html and application/pdf. It sniffs binary types from the bytes themselves and ignores the declared type for them, but HTML carries no signature, so an HTML upload is accepted only when the declared content type is exactly text/html. Anything above the instance asset size limit is rejected with an Asset is too big error; that limit is MAX_ASSET_SIZE_MB multiplied by 1024 * 1024, so it is 50 MiB by default. The asset is created detached from any bookmark, so follow up with attach_asset_to_bookmark when it belongs to one. */
    "karakeep.upload_asset": {
      input: {
        /**
         * Public HTTP or HTTPS URL of the file to upload. The connector downloads it server side and forwards the bytes to Karakeep, so it must be reachable from the connector and no larger than 50 MiB.
         * @format uri
         */
        fileUrl: string;
        /**
         * File name to store with the asset. Defaults to the last path segment of fileUrl, or upload when the URL has none. Karakeep replaces every non ASCII character in it with an underscore.
         * @minLength 1
         */
        fileName?: string;
        /**
         * MIME type to declare for the uploaded bytes. Defaults to the content type returned when downloading fileUrl. Any parameters such as charset are stripped before the value is sent, because Karakeep matches the declared type against its allowlist verbatim. Karakeep sniffs binary types such as images, video and PDF from the bytes and ignores this value for them, but HTML cannot be sniffed, so text/html uploads are accepted only when the declared type says so.
         * @minLength 1
         */
        contentType?: string;
      };
      output: {
        /** The unique identifier assigned to the uploaded asset. */
        assetId: string;
        /** The MIME type of the uploaded file. */
        contentType: string;
        /** The size of the uploaded file in bytes. */
        size: number;
        /** The original file name of the uploaded file. */
        fileName: string;
        [key: string]: unknown;
      };
    };
  }
}
