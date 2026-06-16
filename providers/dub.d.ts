import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the number of matching links in the authenticated Dub workspace. */
    "dub.count_links": {
      input: {
        /** Only count links for this domain. */
        domain?: string;
        /** Only count links with these tag IDs. */
        tagIds?: string | Array<string>;
        /** Only count links with these tag names. */
        tagNames?: string | Array<string>;
        /** Only count links in this folder. */
        folderId?: string;
        /** Search against link slugs and destination URLs. */
        search?: string;
        /** Only count links created by this Dub user ID. */
        userId?: string;
        /** Only count links for this tenant ID. */
        tenantId?: string;
        /** Whether archived links should be included. */
        showArchived?: boolean;
      };
      output: {
        /** The number of matching Dub links. */
        count: number;
        /** The raw Dub count response. */
        raw: unknown;
      };
    };
    /** Create a folder in the authenticated Dub workspace. */
    "dub.create_folder": {
      input: {
        /**
         * The folder name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A normalized Dub folder. */
        folder: {
          /** The unique ID of the folder. */
          id: string;
          /** The folder name. */
          name: string;
          /** The folder access level returned by Dub. */
          accessLevel: string | null;
          /** The raw Dub folder payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a short link in the authenticated Dub workspace. */
    "dub.create_link": {
      input: {
        /**
         * The destination URL of the short link.
         * @maxLength 32000
         * @format uri
         */
        url: string;
        /**
         * The short-link domain without protocol.
         * @maxLength 190
         */
        domain?: string;
        /**
         * The short-link slug.
         * @maxLength 190
         */
        key?: string;
        /**
         * The length of the generated short-link slug.
         * @minimum 3
         * @maximum 190
         */
        keyLength?: number;
        /**
         * The ID of the link in your database.
         * @maxLength 255
         */
        externalId?: string | null;
        /**
         * The tenant ID that created the link in your system.
         * @maxLength 255
         */
        tenantId?: string | null;
        /** The partner program ID associated with the link. */
        programId?: string | null;
        /** The partner ID associated with the link. */
        partnerId?: string | null;
        /** The prefix used for randomly generated slugs. */
        prefix?: string;
        /** Whether Dub should track conversions for this link. */
        trackConversion?: boolean;
        /** Whether the link should be archived. */
        archived?: boolean;
        /** The tag IDs assigned to the link. */
        tagIds?: string | Array<string>;
        /** The tag names assigned to the link. */
        tagNames?: string | Array<string>;
        /** The folder ID assigned to the link. */
        folderId?: string | null;
        /** Comments for the link. */
        comments?: string | null;
        /** The ISO-8601 timestamp when the link expires. */
        expiresAt?: string | null;
        /**
         * The URL used when the short link has expired.
         * @maxLength 32000
         * @format uri
         */
        expiredUrl?: string | null;
        /** The password required to access the destination URL. */
        password?: string | null;
        /** Whether the link uses Dub custom link previews. */
        proxy?: boolean;
        /** The custom link preview title. */
        title?: string | null;
        /** The custom link preview description. */
        description?: string | null;
        /** The custom link preview image URL. */
        image?: string | null;
        /** The custom link preview video URL. */
        video?: string | null;
        /** Whether the link uses link cloaking. */
        rewrite?: boolean;
        /**
         * The iOS destination URL for device targeting.
         * @maxLength 32000
         * @format uri
         */
        ios?: string | null;
        /**
         * The Android destination URL for device targeting.
         * @maxLength 32000
         * @format uri
         */
        android?: string | null;
        /** Geo targeting destinations keyed by country code. */
        geo?: Record<string, string> | null;
        /** Whether search engines may index the short link. */
        doIndex?: boolean;
        /** The UTM source to apply to the destination URL. */
        utm_source?: string | null;
        /** The UTM medium to apply to the destination URL. */
        utm_medium?: string | null;
        /** The UTM campaign to apply to the destination URL. */
        utm_campaign?: string | null;
        /** The UTM term to apply to the destination URL. */
        utm_term?: string | null;
        /** The UTM content to apply to the destination URL. */
        utm_content?: string | null;
        /** The referral query parameter to apply to the destination URL. */
        ref?: string | null;
        /** Webhook IDs to trigger when the link is clicked. */
        webhookIds?: Array<string> | null;
        /**
         * A/B test URL variants for the short link.
         * @minItems 2
         * @maxItems 4
         */
        testVariants?: Array<{
          /**
           * The variant destination URL.
           * @format uri
           */
          url: string;
          /**
           * The traffic percentage for this variant.
           * @minimum 10
           * @maximum 90
           */
          percentage: number;
        }> | null;
        /** The ISO-8601 timestamp when A/B testing started. */
        testStartedAt?: string | null;
        /** The ISO-8601 timestamp when A/B testing completes. */
        testCompletedAt?: string | null;
      };
      output: {
        /** A normalized Dub link returned by the connector. */
        link: {
          /** The unique ID of the Dub link. */
          id: string;
          /** The domain of the short link. */
          domain: string;
          /** The short-link slug. */
          key: string;
          /** The destination URL of the link. */
          url: string;
          /** The full short-link URL. */
          shortLink: string | null;
          /** The QR code URL for the short link. */
          qrCode: string | null;
          /** The custom link preview title. */
          title: string | null;
          /** Whether the link is archived. */
          archived: boolean | null;
          /** The number of recorded clicks. */
          clicks: number | null;
          /** The number of generated leads. */
          leads: number | null;
          /** The number of generated sales. */
          sales: number | null;
          /** The total sales amount in cents. */
          saleAmount: number | null;
          /** The timestamp when the link was created. */
          createdAt: string | null;
          /** The timestamp when the link was last updated. */
          updatedAt: string | null;
          /** The raw Dub link payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a tag in the authenticated Dub workspace. */
    "dub.create_tag": {
      input: {
        /**
         * The tag name.
         * @minLength 1
         */
        name: string;
        /** The Dub tag color. */
        color?: "red" | "yellow" | "green" | "blue" | "purple" | "brown" | "gray" | "pink";
      };
      output: {
        /** A normalized Dub tag. */
        tag: {
          /** The unique ID of the tag. */
          id: string;
          /** The tag name. */
          name: string;
          /** The tag color. */
          color: string | null;
          /** The raw Dub tag payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a folder from the authenticated Dub workspace. */
    "dub.delete_folder": {
      input: {
        /**
         * The Dub folder ID to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the connector completed the delete request. */
        deleted: boolean;
        /** The raw Dub deletion response, if any. */
        raw: unknown;
      };
    };
    /** Delete a short link from the authenticated Dub workspace. */
    "dub.delete_link": {
      input: {
        /**
         * The Dub link ID to delete.
         * @minLength 1
         */
        linkId: string;
      };
      output: {
        /** Whether the connector completed the delete request. */
        deleted: boolean;
        /** The raw Dub deletion response, if any. */
        raw: unknown;
      };
    };
    /** Delete a tag from the authenticated Dub workspace. */
    "dub.delete_tag": {
      input: {
        /**
         * The Dub tag ID to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the connector completed the delete request. */
        deleted: boolean;
        /** The raw Dub deletion response, if any. */
        raw: unknown;
      };
    };
    /** List folders in the authenticated Dub workspace. */
    "dub.list_folders": {
      input: {
        /**
         * The page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of folders to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Dub folders returned by the API. */
        folders: Array<{
          /** The unique ID of the folder. */
          id: string;
          /** The folder name. */
          name: string;
          /** The folder access level returned by Dub. */
          accessLevel: string | null;
          /** The raw Dub folder payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List short links in the authenticated Dub workspace. */
    "dub.list_links": {
      input: {
        /** Only return links for this domain. */
        domain?: string;
        /** Only return links with these tag IDs. */
        tagIds?: string | Array<string>;
        /** Only return links with these tag names. */
        tagNames?: string | Array<string>;
        /** Only return links in this folder. */
        folderId?: string;
        /** Search against link slugs and destination URLs. */
        search?: string;
        /** Only return links created by this Dub user ID. */
        userId?: string;
        /** Only return links for this tenant ID. */
        tenantId?: string;
        /** Whether archived links should be included. */
        showArchived?: boolean;
        /** The field used to sort links. */
        sortBy?: "createdAt" | "clicks" | "saleAmount" | "lastClicked";
        /** The sort direction. */
        sortOrder?: "asc" | "desc";
        /** Return links before this cursor. */
        endingBefore?: string;
        /** Return links after this cursor. */
        startingAfter?: string;
        /**
         * The number of links to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Dub links returned by the API. */
        links: Array<{
          /** The unique ID of the Dub link. */
          id: string;
          /** The domain of the short link. */
          domain: string;
          /** The short-link slug. */
          key: string;
          /** The destination URL of the link. */
          url: string;
          /** The full short-link URL. */
          shortLink: string | null;
          /** The QR code URL for the short link. */
          qrCode: string | null;
          /** The custom link preview title. */
          title: string | null;
          /** Whether the link is archived. */
          archived: boolean | null;
          /** The number of recorded clicks. */
          clicks: number | null;
          /** The number of generated leads. */
          leads: number | null;
          /** The number of generated sales. */
          sales: number | null;
          /** The total sales amount in cents. */
          saleAmount: number | null;
          /** The timestamp when the link was created. */
          createdAt: string | null;
          /** The timestamp when the link was last updated. */
          updatedAt: string | null;
          /** The raw Dub link payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List tags in the authenticated Dub workspace. */
    "dub.list_tags": {
      input: {
        /**
         * The page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of tags to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Dub tags returned by the API. */
        tags: Array<{
          /** The unique ID of the tag. */
          id: string;
          /** The tag name. */
          name: string;
          /** The tag color. */
          color: string | null;
          /** The raw Dub tag payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve analytics for a Dub link, domain, or workspace. */
    "dub.retrieve_analytics": {
      input: {
        /** The event metric to retrieve from Dub analytics. */
        event?: "clicks" | "leads" | "sales" | "composite";
        /** The dimension used to group Dub analytics. */
        groupBy?: "count" | "timeseries" | "continents" | "regions" | "countries" | "cities" | "devices" | "browsers" | "os" | "trigger" | "triggers" | "referers" | "referer_urls" | "top_folders" | "top_link_tags" | "top_domains" | "top_links" | "top_urls" | "top_base_urls" | "top_partners" | "top_groups" | "top_partner_tags" | "utm_sources" | "utm_mediums" | "utm_campaigns" | "utm_terms" | "utm_contents";
        /** The domain filter for analytics. */
        domain?: string;
        /** The link slug used with a domain filter. */
        key?: string;
        /** The Dub link ID filter. */
        linkId?: string;
        /** The external link ID filter. */
        externalId?: string;
        /** The tenant ID filter. */
        tenantId?: string;
        /** The tag ID filter. */
        tagId?: string;
        /** The folder ID filter. */
        folderId?: string;
        /** The partner tag ID filter. */
        partnerTagId?: string;
        /** The partner group ID filter. */
        groupId?: string;
        /** The partner ID filter. */
        partnerId?: string;
        /** The customer ID filter. */
        customerId?: string;
        /** The analytics date range shortcut. */
        interval?: "24h" | "7d" | "30d" | "90d" | "1y" | "mtd" | "qtd" | "ytd" | "all";
        /** The start timestamp for the analytics range. */
        start?: string;
        /** The end timestamp for the analytics range. */
        end?: string;
        /** The IANA time zone used to align timeseries buckets. */
        timezone?: string;
        /** The country filter using ISO 3166-1 alpha-2 codes. */
        country?: string;
        /** The city filter. */
        city?: string;
        /** The ISO 3166-2 region code filter. */
        region?: string;
        /** The continent filter. */
        continent?: string;
        /** The device filter. */
        device?: string;
        /** The browser filter. */
        browser?: string;
        /** The operating system filter. */
        os?: string;
        /** The trigger filter. */
        trigger?: string;
        /** The referer hostname filter. */
        referer?: string;
        /** The full referer URL filter. */
        refererUrl?: string;
        /** The destination URL filter. */
        url?: string;
        /** The UTM source filter. */
        utm_source?: string;
        /** The UTM medium filter. */
        utm_medium?: string;
        /** The UTM campaign filter. */
        utm_campaign?: string;
        /** The UTM term filter. */
        utm_term?: string;
        /** The UTM content filter. */
        utm_content?: string;
      };
      output: {
        /** The analytics data returned by Dub. */
        data: unknown;
      };
    };
    /** Retrieve a Dub short link by ID or by supported lookup fields. */
    "dub.retrieve_link": {
      input: {
        /** The Dub link ID to retrieve. */
        linkId?: string;
        /** The short-link domain used with key lookup. */
        domain?: string;
        /** The short-link slug used with domain lookup. */
        key?: string;
        /** The external ID for the link. Prefix with ext_ when required by Dub. */
        externalId?: string;
      };
      output: {
        /** A normalized Dub link returned by the connector. */
        link: {
          /** The unique ID of the Dub link. */
          id: string;
          /** The domain of the short link. */
          domain: string;
          /** The short-link slug. */
          key: string;
          /** The destination URL of the link. */
          url: string;
          /** The full short-link URL. */
          shortLink: string | null;
          /** The QR code URL for the short link. */
          qrCode: string | null;
          /** The custom link preview title. */
          title: string | null;
          /** Whether the link is archived. */
          archived: boolean | null;
          /** The number of recorded clicks. */
          clicks: number | null;
          /** The number of generated leads. */
          leads: number | null;
          /** The number of generated sales. */
          sales: number | null;
          /** The total sales amount in cents. */
          saleAmount: number | null;
          /** The timestamp when the link was created. */
          createdAt: string | null;
          /** The timestamp when the link was last updated. */
          updatedAt: string | null;
          /** The raw Dub link payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a folder in the authenticated Dub workspace. */
    "dub.update_folder": {
      input: {
        /**
         * The Dub folder ID to update.
         * @minLength 1
         */
        id: string;
        /**
         * The updated folder name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A normalized Dub folder. */
        folder: {
          /** The unique ID of the folder. */
          id: string;
          /** The folder name. */
          name: string;
          /** The folder access level returned by Dub. */
          accessLevel: string | null;
          /** The raw Dub folder payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a short link in the authenticated Dub workspace. */
    "dub.update_link": {
      input: {
        /**
         * The Dub link ID to update.
         * @minLength 1
         */
        linkId: string;
        /**
         * The destination URL of the short link.
         * @maxLength 32000
         * @format uri
         */
        url?: string;
        /**
         * The short-link domain without protocol.
         * @maxLength 190
         */
        domain?: string;
        /**
         * The short-link slug.
         * @maxLength 190
         */
        key?: string;
        /**
         * The length of the generated short-link slug.
         * @minimum 3
         * @maximum 190
         */
        keyLength?: number;
        /**
         * The ID of the link in your database.
         * @maxLength 255
         */
        externalId?: string | null;
        /**
         * The tenant ID that created the link in your system.
         * @maxLength 255
         */
        tenantId?: string | null;
        /** The partner program ID associated with the link. */
        programId?: string | null;
        /** The partner ID associated with the link. */
        partnerId?: string | null;
        /** The prefix used for randomly generated slugs. */
        prefix?: string;
        /** Whether Dub should track conversions for this link. */
        trackConversion?: boolean;
        /** Whether the link should be archived. */
        archived?: boolean;
        /** The tag IDs assigned to the link. */
        tagIds?: string | Array<string>;
        /** The tag names assigned to the link. */
        tagNames?: string | Array<string>;
        /** The folder ID assigned to the link. */
        folderId?: string | null;
        /** Comments for the link. */
        comments?: string | null;
        /** The ISO-8601 timestamp when the link expires. */
        expiresAt?: string | null;
        /**
         * The URL used when the short link has expired.
         * @maxLength 32000
         * @format uri
         */
        expiredUrl?: string | null;
        /** The password required to access the destination URL. */
        password?: string | null;
        /** Whether the link uses Dub custom link previews. */
        proxy?: boolean;
        /** The custom link preview title. */
        title?: string | null;
        /** The custom link preview description. */
        description?: string | null;
        /** The custom link preview image URL. */
        image?: string | null;
        /** The custom link preview video URL. */
        video?: string | null;
        /** Whether the link uses link cloaking. */
        rewrite?: boolean;
        /**
         * The iOS destination URL for device targeting.
         * @maxLength 32000
         * @format uri
         */
        ios?: string | null;
        /**
         * The Android destination URL for device targeting.
         * @maxLength 32000
         * @format uri
         */
        android?: string | null;
        /** Geo targeting destinations keyed by country code. */
        geo?: Record<string, string> | null;
        /** Whether search engines may index the short link. */
        doIndex?: boolean;
        /** The UTM source to apply to the destination URL. */
        utm_source?: string | null;
        /** The UTM medium to apply to the destination URL. */
        utm_medium?: string | null;
        /** The UTM campaign to apply to the destination URL. */
        utm_campaign?: string | null;
        /** The UTM term to apply to the destination URL. */
        utm_term?: string | null;
        /** The UTM content to apply to the destination URL. */
        utm_content?: string | null;
        /** The referral query parameter to apply to the destination URL. */
        ref?: string | null;
        /** Webhook IDs to trigger when the link is clicked. */
        webhookIds?: Array<string> | null;
        /**
         * A/B test URL variants for the short link.
         * @minItems 2
         * @maxItems 4
         */
        testVariants?: Array<{
          /**
           * The variant destination URL.
           * @format uri
           */
          url: string;
          /**
           * The traffic percentage for this variant.
           * @minimum 10
           * @maximum 90
           */
          percentage: number;
        }> | null;
        /** The ISO-8601 timestamp when A/B testing started. */
        testStartedAt?: string | null;
        /** The ISO-8601 timestamp when A/B testing completes. */
        testCompletedAt?: string | null;
      };
      output: {
        /** A normalized Dub link returned by the connector. */
        link: {
          /** The unique ID of the Dub link. */
          id: string;
          /** The domain of the short link. */
          domain: string;
          /** The short-link slug. */
          key: string;
          /** The destination URL of the link. */
          url: string;
          /** The full short-link URL. */
          shortLink: string | null;
          /** The QR code URL for the short link. */
          qrCode: string | null;
          /** The custom link preview title. */
          title: string | null;
          /** Whether the link is archived. */
          archived: boolean | null;
          /** The number of recorded clicks. */
          clicks: number | null;
          /** The number of generated leads. */
          leads: number | null;
          /** The number of generated sales. */
          sales: number | null;
          /** The total sales amount in cents. */
          saleAmount: number | null;
          /** The timestamp when the link was created. */
          createdAt: string | null;
          /** The timestamp when the link was last updated. */
          updatedAt: string | null;
          /** The raw Dub link payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a tag in the authenticated Dub workspace. */
    "dub.update_tag": {
      input: {
        /**
         * The Dub tag ID to update.
         * @minLength 1
         */
        id: string;
        /**
         * The updated tag name.
         * @minLength 1
         */
        name?: string;
        /** The Dub tag color. */
        color?: "red" | "yellow" | "green" | "blue" | "purple" | "brown" | "gray" | "pink";
      };
      output: {
        /** A normalized Dub tag. */
        tag: {
          /** The unique ID of the tag. */
          id: string;
          /** The tag name. */
          name: string;
          /** The tag color. */
          color: string | null;
          /** The raw Dub tag payload. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
