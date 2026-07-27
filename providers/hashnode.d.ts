import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a draft in a Hashnode publication with an active Pro plan. */
    "hashnode.create_draft": {
      input: {
        /**
         * The ID of the target Hashnode publication.
         * @minLength 1
         */
        publicationId: string;
        /** The optional draft title. */
        title?: string;
        /** The optional draft subtitle. */
        subtitle?: string;
        /** The optional draft content in Markdown format. */
        contentMarkdown?: string;
        /**
         * The optional custom slug for the resulting post.
         * @minLength 1
         */
        slug?: string;
        /**
         * The tags to attach, up to Hashnode's limit of 15.
         * @maxItems 15
         */
        tags?: Array<{
          /**
           * The tag slug used to find or create the tag.
           * @minLength 1
           */
          slug: string;
          /**
           * The tag display name; Hashnode defaults it to the slug.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The ID of a series in the target publication.
         * @minLength 1
         */
        seriesId?: string;
        /** Whether comments should be disabled on the resulting post. */
        disableComments?: boolean;
        /**
         * The canonical URL when the resulting post was originally published elsewhere.
         * @format uri
         */
        originalArticleURL?: string;
        /**
         * The timestamp to use when backdating the resulting post.
         * @format date-time
         */
        publishedAt?: string;
      };
      output: {
        /** A Hashnode draft. */
        draft: {
          /** The Hashnode draft ID. */
          id: string;
          /** The draft title when configured. */
          title: string | null;
          /** The draft subtitle when configured. */
          subtitle: string | null;
          /** The draft slug when configured. */
          slug: string | null;
          /** Hashnode post or draft content. */
          content: {
            /** The content in Markdown format. */
            markdown: string;
            /** The content rendered as HTML by Hashnode. */
            html: string;
          } | null;
          /** A Hashnode user summary. */
          author: {
            /** The Hashnode user ID. */
            id: string;
            /** The Hashnode username. */
            username: string;
            /** The user's display name. */
            name: string;
          };
          /** A Hashnode publication summary. */
          publication: {
            /** The Hashnode publication ID. */
            id: string;
            /** The publication title. */
            title: string;
            /** The publication URL when configured. */
            url: string | null;
            /** Whether the publication is a team publication. */
            isTeam: boolean;
          } | null;
          /** The tags attached to the draft. */
          tags: Array<{
            /** The Hashnode tag ID. */
            id: string;
            /** The tag name. */
            name: string;
            /** The tag slug. */
            slug: string;
          }> | null;
          /** The last draft update timestamp in ISO 8601 format. */
          updatedAt: string;
          /** The scheduled publication timestamp when configured. */
          scheduledDate: string | null;
          /** Whether the draft has been submitted for editorial review. */
          isSubmittedForReview: boolean | null;
        };
      };
    };
    /** Soft-delete an accessible Hashnode draft from a Pro publication. */
    "hashnode.delete_draft": {
      input: {
        /**
         * The ID of the Hashnode draft to delete.
         * @minLength 1
         */
        draftId: string;
      };
      output: {
        /** A Hashnode draft. */
        draft: {
          /** The Hashnode draft ID. */
          id: string;
          /** The draft title when configured. */
          title: string | null;
          /** The draft subtitle when configured. */
          subtitle: string | null;
          /** The draft slug when configured. */
          slug: string | null;
          /** Hashnode post or draft content. */
          content: {
            /** The content in Markdown format. */
            markdown: string;
            /** The content rendered as HTML by Hashnode. */
            html: string;
          } | null;
          /** A Hashnode user summary. */
          author: {
            /** The Hashnode user ID. */
            id: string;
            /** The Hashnode username. */
            username: string;
            /** The user's display name. */
            name: string;
          };
          /** A Hashnode publication summary. */
          publication: {
            /** The Hashnode publication ID. */
            id: string;
            /** The publication title. */
            title: string;
            /** The publication URL when configured. */
            url: string | null;
            /** Whether the publication is a team publication. */
            isTeam: boolean;
          } | null;
          /** The tags attached to the draft. */
          tags: Array<{
            /** The Hashnode tag ID. */
            id: string;
            /** The tag name. */
            name: string;
            /** The tag slug. */
            slug: string;
          }> | null;
          /** The last draft update timestamp in ISO 8601 format. */
          updatedAt: string;
          /** The scheduled publication timestamp when configured. */
          scheduledDate: string | null;
          /** Whether the draft has been submitted for editorial review. */
          isSubmittedForReview: boolean | null;
        } | null;
      };
    };
    /** Get the profile for the user authenticated by the connected Hashnode PAT. */
    "hashnode.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated Hashnode user's profile. */
        user: {
          /** The authenticated user's Hashnode ID. */
          id: string;
          /** The authenticated user's Hashnode username. */
          username: string;
          /** The authenticated user's display name. */
          name: string;
          /** The authenticated user's email address. */
          email: string;
          /** The user's profile picture URL when configured. */
          profilePicture: string | null;
          /** The user's profile tagline when configured. */
          tagline: string | null;
          /** The user's profile location when configured. */
          location: string | null;
          /** The user's join timestamp in ISO 8601 format when available. */
          dateJoined: string | null;
        };
      };
    };
    /** Get one accessible Hashnode draft by ID from a Pro publication. */
    "hashnode.get_draft": {
      input: {
        /**
         * The Hashnode draft ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Hashnode draft. */
        draft: {
          /** The Hashnode draft ID. */
          id: string;
          /** The draft title when configured. */
          title: string | null;
          /** The draft subtitle when configured. */
          subtitle: string | null;
          /** The draft slug when configured. */
          slug: string | null;
          /** Hashnode post or draft content. */
          content: {
            /** The content in Markdown format. */
            markdown: string;
            /** The content rendered as HTML by Hashnode. */
            html: string;
          } | null;
          /** A Hashnode user summary. */
          author: {
            /** The Hashnode user ID. */
            id: string;
            /** The Hashnode username. */
            username: string;
            /** The user's display name. */
            name: string;
          };
          /** A Hashnode publication summary. */
          publication: {
            /** The Hashnode publication ID. */
            id: string;
            /** The publication title. */
            title: string;
            /** The publication URL when configured. */
            url: string | null;
            /** Whether the publication is a team publication. */
            isTeam: boolean;
          } | null;
          /** The tags attached to the draft. */
          tags: Array<{
            /** The Hashnode tag ID. */
            id: string;
            /** The tag name. */
            name: string;
            /** The tag slug. */
            slug: string;
          }> | null;
          /** The last draft update timestamp in ISO 8601 format. */
          updatedAt: string;
          /** The scheduled publication timestamp when configured. */
          scheduledDate: string | null;
          /** Whether the draft has been submitted for editorial review. */
          isSubmittedForReview: boolean | null;
        } | null;
      };
    };
    /** Get one published Hashnode post by ID, including Markdown and rendered HTML. */
    "hashnode.get_post": {
      input: {
        /**
         * The Hashnode post ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A published Hashnode post. */
        post: {
          /** The Hashnode post ID. */
          id: string;
          /** The post title. */
          title: string;
          /** The post subtitle when configured. */
          subtitle: string | null;
          /** The post slug. */
          slug: string;
          /** The published post URL. */
          url: string;
          /** The post summary generated by Hashnode. */
          brief: string;
          /** The publication timestamp in ISO 8601 format. */
          publishedAt: string;
          /** The last update timestamp in ISO 8601 format. */
          updatedAt: string | null;
          /** Hashnode post or draft content. */
          content: {
            /** The content in Markdown format. */
            markdown: string;
            /** The content rendered as HTML by Hashnode. */
            html: string;
          };
          /** A Hashnode user summary. */
          author: {
            /** The Hashnode user ID. */
            id: string;
            /** The Hashnode username. */
            username: string;
            /** The user's display name. */
            name: string;
          };
          /** The tags attached to the post. */
          tags: Array<{
            /** The Hashnode tag ID. */
            id: string;
            /** The tag name. */
            name: string;
            /** The tag slug. */
            slug: string;
          }> | null;
          /** The estimated reading time in minutes. */
          readTimeInMinutes: number;
          /** The post view count when available. */
          views: number | null;
        } | null;
      };
    };
    /** List publications available to the authenticated Hashnode user. */
    "hashnode.list_my_publications": {
      input: {
        /**
         * The number of publications to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        first?: number;
        /**
         * The cursor returned by the previous page.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The publications on this page. */
        publications: Array<{
          /** The Hashnode publication ID. */
          id: string;
          /** The publication title. */
          title: string;
          /** The publication URL when configured. */
          url: string | null;
          /** Whether the publication is a team publication. */
          isTeam: boolean;
        }>;
        /** Hashnode cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** The cursor to pass as after for the next page. */
          endCursor: string | null;
        };
      };
    };
    /** List posts from a Hashnode publication with cursor pagination; the publication must have an active Pro plan. */
    "hashnode.list_publication_posts": {
      input: {
        /**
         * The publication ID; provide this or host, but not both.
         * @minLength 1
         */
        publicationId?: string;
        /**
         * The publication host; provide this or publicationId, but not both.
         * @minLength 1
         */
        host?: string;
        /**
         * The number of posts to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        first?: number;
        /**
         * The cursor returned by the previous page.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** A Hashnode publication summary. */
        publication: {
          /** The Hashnode publication ID. */
          id: string;
          /** The publication title. */
          title: string;
          /** The publication URL when configured. */
          url: string | null;
          /** Whether the publication is a team publication. */
          isTeam: boolean;
        };
        /** The posts on this page. */
        posts: Array<{
          /** The Hashnode post ID. */
          id: string;
          /** The post title. */
          title: string;
          /** The post subtitle when configured. */
          subtitle: string | null;
          /** The post slug. */
          slug: string;
          /** The published post URL. */
          url: string;
          /** The post summary generated by Hashnode. */
          brief: string;
          /** The publication timestamp in ISO 8601 format. */
          publishedAt: string;
          /** The last update timestamp in ISO 8601 format. */
          updatedAt: string | null;
        }>;
        /** Hashnode cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** The cursor to pass as after for the next page. */
          endCursor: string | null;
        };
      };
    };
    /** Publish an existing Hashnode draft from a Pro publication. */
    "hashnode.publish_draft": {
      input: {
        /**
         * The ID of the Hashnode draft to publish.
         * @minLength 1
         */
        draftId: string;
      };
      output: {
        /** A post returned by a Hashnode write mutation. */
        post: {
          /** The Hashnode post ID. */
          id: string;
          /** The post title. */
          title: string;
          /** The post slug. */
          slug: string;
          /** The published post URL. */
          url: string;
          /** The publication timestamp in ISO 8601 format. */
          publishedAt: string;
          /** The last update timestamp in ISO 8601 format. */
          updatedAt: string | null;
        };
      };
    };
    /** Publish a Markdown post to a Hashnode publication with an active Pro plan. */
    "hashnode.publish_post": {
      input: {
        /**
         * The ID of the target Hashnode publication.
         * @minLength 1
         */
        publicationId: string;
        /**
         * The post title.
         * @minLength 1
         */
        title: string;
        /**
         * The post content in Markdown format.
         * @minLength 1
         */
        contentMarkdown: string;
        /** The optional post subtitle. */
        subtitle?: string;
        /**
         * The public URL of the post cover image.
         * @format uri
         */
        coverImage?: string;
        /**
         * The custom post slug; Hashnode generates one when omitted.
         * @minLength 1
         */
        slug?: string;
        /**
         * The tags to attach, up to Hashnode's limit of 15.
         * @maxItems 15
         */
        tags?: Array<{
          /**
           * The tag slug used to find or create the tag.
           * @minLength 1
           */
          slug: string;
          /**
           * The tag display name; Hashnode defaults it to the slug.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The canonical URL when this post was originally published elsewhere.
         * @format uri
         */
        originalArticleURL?: string;
        /** The optional SEO title override. */
        metaTitle?: string;
        /** The optional SEO description override. */
        metaDescription?: string;
        /**
         * The public URL of the Open Graph image override.
         * @format uri
         */
        ogImage?: string;
        /** Whether comments should be disabled on the post. */
        disableComments?: boolean;
        /** Whether the post should be excluded from feeds. */
        isDelisted?: boolean;
        /** Whether Hashnode should expose a table of contents for the post. */
        enableToc?: boolean;
        /**
         * The ID of a series in the target publication.
         * @minLength 1
         */
        seriesId?: string;
        /**
         * The timestamp to use when backdating the post.
         * @format date-time
         */
        publishedAt?: string;
      };
      output: {
        /** A post returned by a Hashnode write mutation. */
        post: {
          /** The Hashnode post ID. */
          id: string;
          /** The post title. */
          title: string;
          /** The post slug. */
          slug: string;
          /** The published post URL. */
          url: string;
          /** The publication timestamp in ISO 8601 format. */
          publishedAt: string;
          /** The last update timestamp in ISO 8601 format. */
          updatedAt: string | null;
        };
      };
    };
    /** Update fields on an existing Hashnode draft in a Pro publication. */
    "hashnode.update_draft": {
      input: {
        /**
         * The ID of the Hashnode draft to update.
         * @minLength 1
         */
        draftId: string;
        /** The updated draft title. */
        title?: string | null;
        /** The updated draft subtitle. */
        subtitle?: string | null;
        /** The updated draft content in Markdown format. */
        contentMarkdown?: string | null;
        /**
         * The updated custom slug for the resulting post.
         * @minLength 1
         */
        slug?: string | null;
        /**
         * The tags to attach, up to Hashnode's limit of 15.
         * @maxItems 15
         */
        tags?: Array<{
          /**
           * The tag slug used to find or create the tag.
           * @minLength 1
           */
          slug: string;
          /**
           * The tag display name; Hashnode defaults it to the slug.
           * @minLength 1
           */
          name?: string;
        }> | null;
        /**
         * The updated series ID, or null to remove the draft from a series.
         * @minLength 1
         */
        seriesId?: string | null;
        /** Whether comments should be disabled on the resulting post. */
        disableComments?: boolean | null;
        /**
         * The updated canonical URL for the resulting post.
         * @format uri
         */
        originalArticleURL?: string | null;
        /**
         * The updated backdated timestamp for the resulting post.
         * @format date-time
         */
        publishedAt?: string | null;
      };
      output: {
        /** A Hashnode draft. */
        draft: {
          /** The Hashnode draft ID. */
          id: string;
          /** The draft title when configured. */
          title: string | null;
          /** The draft subtitle when configured. */
          subtitle: string | null;
          /** The draft slug when configured. */
          slug: string | null;
          /** Hashnode post or draft content. */
          content: {
            /** The content in Markdown format. */
            markdown: string;
            /** The content rendered as HTML by Hashnode. */
            html: string;
          } | null;
          /** A Hashnode user summary. */
          author: {
            /** The Hashnode user ID. */
            id: string;
            /** The Hashnode username. */
            username: string;
            /** The user's display name. */
            name: string;
          };
          /** A Hashnode publication summary. */
          publication: {
            /** The Hashnode publication ID. */
            id: string;
            /** The publication title. */
            title: string;
            /** The publication URL when configured. */
            url: string | null;
            /** Whether the publication is a team publication. */
            isTeam: boolean;
          } | null;
          /** The tags attached to the draft. */
          tags: Array<{
            /** The Hashnode tag ID. */
            id: string;
            /** The tag name. */
            name: string;
            /** The tag slug. */
            slug: string;
          }> | null;
          /** The last draft update timestamp in ISO 8601 format. */
          updatedAt: string;
          /** The scheduled publication timestamp when configured. */
          scheduledDate: string | null;
          /** Whether the draft has been submitted for editorial review. */
          isSubmittedForReview: boolean | null;
        };
      };
    };
    /** Update fields on an existing Hashnode post in a Pro publication. */
    "hashnode.update_post": {
      input: {
        /**
         * The ID of the Hashnode post to update.
         * @minLength 1
         */
        id: string;
        /** The updated post title. */
        title?: string | null;
        /** The updated post content in Markdown format. */
        contentMarkdown?: string | null;
        /** The updated post subtitle. */
        subtitle?: string | null;
        /**
         * The updated public URL of the post cover image.
         * @format uri
         */
        coverImage?: string | null;
        /**
         * The updated post slug.
         * @minLength 1
         */
        slug?: string | null;
        /**
         * The tags to attach, up to Hashnode's limit of 15.
         * @maxItems 15
         */
        tags?: Array<{
          /**
           * The tag slug used to find or create the tag.
           * @minLength 1
           */
          slug: string;
          /**
           * The tag display name; Hashnode defaults it to the slug.
           * @minLength 1
           */
          name?: string;
        }> | null;
        /**
         * The updated canonical URL when this post was originally published elsewhere.
         * @format uri
         */
        originalArticleURL?: string | null;
        /** The updated SEO title override. */
        metaTitle?: string | null;
        /** The updated SEO description override. */
        metaDescription?: string | null;
        /**
         * The updated public URL of the Open Graph image override.
         * @format uri
         */
        ogImage?: string | null;
        /** Whether comments should be disabled on the post. */
        disableComments?: boolean | null;
        /** Whether the post should be excluded from feeds. */
        isDelisted?: boolean | null;
        /** Whether Hashnode should expose a table of contents for the post. */
        enableToc?: boolean | null;
        /**
         * The updated series ID, or null to remove the series.
         * @minLength 1
         */
        seriesId?: string | null;
        /**
         * The updated backdated publication timestamp.
         * @format date-time
         */
        publishedAt?: string | null;
      };
      output: {
        /** A post returned by a Hashnode write mutation. */
        post: {
          /** The Hashnode post ID. */
          id: string;
          /** The post title. */
          title: string;
          /** The post slug. */
          slug: string;
          /** The published post URL. */
          url: string;
          /** The publication timestamp in ISO 8601 format. */
          publishedAt: string;
          /** The last update timestamp in ISO 8601 format. */
          updatedAt: string | null;
        };
      };
    };
  }
}
