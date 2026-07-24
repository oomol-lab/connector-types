import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get ranked best podcasts from Listen Notes with optional directory filters. */
    "listennotes.get_best_podcasts": {
      input: {
        /**
         * The best podcasts page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The upstream ranking sort mode. */
        sort?: "listen_score" | "oldest_added_first" | "oldest_published_first" | "recent_added_first" | "recent_published_first";
        /** The region code used to rank best podcasts. */
        region?: string;
        /**
         * The genre identifier used to filter best podcasts.
         * @exclusiveMinimum 0
         */
        genreId?: number;
        /** The language label used to filter best podcasts. */
        language?: string;
        /** Whether to exclude explicit podcasts. */
        safeMode?: boolean;
        /** The publisher region code used to filter best podcasts. */
        publisherRegion?: string;
      };
      output: {
        /** The best podcasts genre identifier. */
        id?: number | null;
        /** The best podcasts genre name. */
        name?: string | null;
        /** The parent genre identifier. */
        parentId?: number | null;
        /** The total number of ranked podcasts. */
        total: number;
        /** The current page number. */
        pageNumber: number;
        /** Whether there is a next page. */
        hasNext: boolean;
        /** Whether there is a previous page. */
        hasPrevious: boolean;
        /** The next page number when available. */
        nextPageNumber?: number | null;
        /** The previous page number when available. */
        previousPageNumber?: number | null;
        /** The ranked podcasts returned by Listen Notes. */
        podcasts: Array<{
          /** The Listen Notes podcast identifier. */
          id: string;
          /** The podcast title. */
          title: string;
          /** The podcast publisher name. */
          publisher?: string;
          /** The podcast description text. */
          description?: string;
          /** The podcast artwork image URL. */
          image?: string;
          /** The podcast artwork thumbnail URL. */
          thumbnail?: string;
          /** The Listen Notes public podcast URL. */
          listennotesUrl?: string;
          /** The podcast language label. */
          language?: string;
          /** The podcast country label. */
          country?: string;
          /** The Listen Notes genre identifiers attached to the podcast. */
          genreIds?: Array<number>;
          /** The total number of podcast episodes. */
          totalEpisodes?: number;
          /** The latest episode publication timestamp in milliseconds. */
          latestPubDateMs?: number;
          /** Whether the podcast contains explicit content. */
          explicitContent?: boolean;
          /** The podcast RSS feed URL. */
          rss?: string;
          /** The podcast release format. */
          type?: "episodic" | "serial";
          /** The canonical podcast website URL. */
          website?: string;
          /** The raw Listen Notes podcast object. */
          raw: Record<string, unknown>;
          /** The fixed result kind for podcast items. */
          kind: "podcast";
        }>;
      };
    };
    /** Get Listen Notes episode details by episode ID. */
    "listennotes.get_episode": {
      input: {
        /** The Listen Notes episode identifier. */
        id: string;
      };
      output: {
        /** The normalized episode details. */
        episode: {
          /** The Listen Notes episode identifier. */
          id: string;
          /** The episode title. */
          title: string;
          /** The episode description text. */
          description?: string;
          /** The direct episode audio URL. */
          audio?: string;
          /** The episode artwork image URL. */
          image?: string;
          /** The episode artwork thumbnail URL. */
          thumbnail?: string;
          /** The Listen Notes public episode URL. */
          listennotesUrl?: string;
          /** Whether the episode contains explicit content. */
          explicitContent?: boolean;
          /** The audio duration in seconds. */
          audioLengthSec?: number;
          /** The episode publication timestamp in milliseconds. */
          pubDateMs?: number;
          /** The parent podcast reference when Listen Notes includes it. */
          podcast: {
            /** The Listen Notes podcast identifier. */
            id: string;
            /** The podcast title. */
            title?: string;
            /** The podcast publisher name. */
            publisher?: string;
            /** The podcast artwork image URL. */
            image?: string;
            /** The podcast artwork thumbnail URL. */
            thumbnail?: string;
            /** The Listen Notes public podcast URL. */
            listennotesUrl?: string;
          } | null;
          /** The raw Listen Notes episode object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the supported Listen Notes podcast genres. */
    "listennotes.get_genres": {
      input: {
        /** Whether to return only top-level genres. */
        topLevelOnly?: boolean;
      };
      output: {
        /** The normalized genre list. */
        genres: Array<{
          /** The Listen Notes genre identifier. */
          id: number;
          /** The genre display name. */
          name: string;
          /** The parent genre identifier. */
          parentId?: number | null;
        }>;
      };
    };
    /** Get the supported Listen Notes podcast languages. */
    "listennotes.get_languages": {
      input: Record<string, never>;
      output: {
        /** The supported Listen Notes languages. */
        languages: Array<string>;
      };
    };
    /** Get Listen Notes podcast details and one page of episodes by podcast ID. */
    "listennotes.get_podcast": {
      input: {
        /** The Listen Notes podcast identifier. */
        id: string;
        /** The episode sort order for this podcast. */
        sort?: "oldest_first" | "recent_first";
        /**
         * The episode pagination cursor returned by Listen Notes.
         * @exclusiveMinimum 0
         */
        nextEpisodePubDate?: number;
      };
      output: {
        /** The normalized podcast details. */
        podcast: {
          /** The Listen Notes podcast identifier. */
          id: string;
          /** The podcast title. */
          title: string;
          /** The podcast publisher name. */
          publisher?: string;
          /** The podcast description text. */
          description?: string;
          /** The podcast artwork image URL. */
          image?: string;
          /** The podcast artwork thumbnail URL. */
          thumbnail?: string;
          /** The Listen Notes public podcast URL. */
          listennotesUrl?: string;
          /** The podcast language label. */
          language?: string;
          /** The podcast country label. */
          country?: string;
          /** The Listen Notes genre identifiers attached to the podcast. */
          genreIds?: Array<number>;
          /** The total number of podcast episodes. */
          totalEpisodes?: number;
          /** The latest episode publication timestamp in milliseconds. */
          latestPubDateMs?: number;
          /** Whether the podcast contains explicit content. */
          explicitContent?: boolean;
          /** The podcast RSS feed URL. */
          rss?: string;
          /** The podcast release format. */
          type?: "episodic" | "serial";
          /** The canonical podcast website URL. */
          website?: string;
          /** The raw Listen Notes podcast object. */
          raw: Record<string, unknown>;
        };
        /** The normalized episode page for the podcast. */
        episodes: Array<{
          /** The Listen Notes episode identifier. */
          id: string;
          /** The episode title. */
          title: string;
          /** The episode description text. */
          description?: string;
          /** The direct episode audio URL. */
          audio?: string;
          /** The episode artwork image URL. */
          image?: string;
          /** The episode artwork thumbnail URL. */
          thumbnail?: string;
          /** The Listen Notes public episode URL. */
          listennotesUrl?: string;
          /** Whether the episode contains explicit content. */
          explicitContent?: boolean;
          /** The audio duration in seconds. */
          audioLengthSec?: number;
          /** The episode publication timestamp in milliseconds. */
          pubDateMs?: number;
          /** The parent podcast reference when Listen Notes includes it. */
          podcast: {
            /** The Listen Notes podcast identifier. */
            id: string;
            /** The podcast title. */
            title?: string;
            /** The podcast publisher name. */
            publisher?: string;
            /** The podcast artwork image URL. */
            image?: string;
            /** The podcast artwork thumbnail URL. */
            thumbnail?: string;
            /** The Listen Notes public podcast URL. */
            listennotesUrl?: string;
          } | null;
          /** The raw Listen Notes episode object. */
          raw: Record<string, unknown>;
        }>;
        /** The next episode pagination cursor when available. */
        nextEpisodePubDate?: number | null;
      };
    };
    /** Get the supported Listen Notes regions used by best podcasts. */
    "listennotes.get_regions": {
      input: Record<string, never>;
      output: {
        /** The normalized region list. */
        regions: Array<{
          /** The Listen Notes region code. */
          code: string;
          /** The human-readable region name. */
          name: string;
        }>;
      };
    };
    /** Get related podcast recommendations from Listen Notes by podcast ID. */
    "listennotes.get_related_podcasts": {
      input: {
        /** The Listen Notes podcast identifier. */
        id: string;
        /** Whether to exclude explicit recommendations. */
        safeMode?: boolean;
      };
      output: {
        /** The normalized related podcast recommendations. */
        recommendations: Array<{
          /** The Listen Notes podcast identifier. */
          id: string;
          /** The podcast title. */
          title: string;
          /** The podcast publisher name. */
          publisher?: string;
          /** The podcast description text. */
          description?: string;
          /** The podcast artwork image URL. */
          image?: string;
          /** The podcast artwork thumbnail URL. */
          thumbnail?: string;
          /** The Listen Notes public podcast URL. */
          listennotesUrl?: string;
          /** The podcast language label. */
          language?: string;
          /** The podcast country label. */
          country?: string;
          /** The Listen Notes genre identifiers attached to the podcast. */
          genreIds?: Array<number>;
          /** The total number of podcast episodes. */
          totalEpisodes?: number;
          /** The latest episode publication timestamp in milliseconds. */
          latestPubDateMs?: number;
          /** Whether the podcast contains explicit content. */
          explicitContent?: boolean;
          /** The podcast RSS feed URL. */
          rss?: string;
          /** The podcast release format. */
          type?: "episodic" | "serial";
          /** The canonical podcast website URL. */
          website?: string;
          /** The raw Listen Notes podcast object. */
          raw: Record<string, unknown>;
          /** The fixed result kind for podcast items. */
          kind: "podcast";
        }>;
      };
    };
    /** Search Listen Notes podcasts or episodes by keyword. */
    "listennotes.search": {
      input: {
        /** The search keywords to send to Listen Notes. */
        q: string;
        /**
         * Whether to search for episode results or podcast results.
         * @default "episode"
         */
        type?: "episode" | "podcast";
        /**
         * The search offset for pagination.
         * @minimum 0
         */
        offset?: number;
        /** The region code used to limit search results. */
        region?: string;
        /** The language label used to limit search results. */
        language?: string;
        /**
         * The Listen Notes genre identifiers used to filter results.
         * @minItems 1
         */
        genreIds?: Array<number>;
        /**
         * The number of search results to return per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** Whether to exclude explicit podcasts or episodes. */
        safeMode?: boolean;
        /** Whether to sort search results by publication date instead of relevance. */
        sortByDate?: boolean;
        /**
         * The specific upstream fields to search within.
         * @minItems 1
         */
        onlyIn?: Array<"title" | "description" | "author" | "audio">;
        /** Whether to keep only one episode per podcast for episode searches. */
        uniquePodcasts?: boolean;
      };
      output: {
        /** The normalized search result type for this response. */
        resultType: "episode" | "podcast";
        /** The upstream response time in seconds. */
        took?: number;
        /** The number of results returned in this page. */
        count: number;
        /** The total number of matching results. */
        total: number;
        /** The offset to use for the next search page when available. */
        nextOffset?: number | null;
        /** The normalized search result items. */
        results: Array<{
          /** The Listen Notes podcast identifier. */
          id: string;
          /** The podcast title. */
          title: string;
          /** The podcast publisher name. */
          publisher?: string;
          /** The podcast description text. */
          description?: string;
          /** The podcast artwork image URL. */
          image?: string;
          /** The podcast artwork thumbnail URL. */
          thumbnail?: string;
          /** The Listen Notes public podcast URL. */
          listennotesUrl?: string;
          /** The podcast language label. */
          language?: string;
          /** The podcast country label. */
          country?: string;
          /** The Listen Notes genre identifiers attached to the podcast. */
          genreIds?: Array<number>;
          /** The total number of podcast episodes. */
          totalEpisodes?: number;
          /** The latest episode publication timestamp in milliseconds. */
          latestPubDateMs?: number;
          /** Whether the podcast contains explicit content. */
          explicitContent?: boolean;
          /** The podcast RSS feed URL. */
          rss?: string;
          /** The podcast release format. */
          type?: "episodic" | "serial";
          /** The canonical podcast website URL. */
          website?: string;
          /** The raw Listen Notes podcast object. */
          raw: Record<string, unknown>;
          /** The fixed result kind for podcast items. */
          kind: "podcast";
        } | {
          /** The Listen Notes episode identifier. */
          id: string;
          /** The episode title. */
          title: string;
          /** The episode description text. */
          description?: string;
          /** The direct episode audio URL. */
          audio?: string;
          /** The episode artwork image URL. */
          image?: string;
          /** The episode artwork thumbnail URL. */
          thumbnail?: string;
          /** The Listen Notes public episode URL. */
          listennotesUrl?: string;
          /** Whether the episode contains explicit content. */
          explicitContent?: boolean;
          /** The audio duration in seconds. */
          audioLengthSec?: number;
          /** The episode publication timestamp in milliseconds. */
          pubDateMs?: number;
          /** The parent podcast reference when Listen Notes includes it. */
          podcast: {
            /** The Listen Notes podcast identifier. */
            id: string;
            /** The podcast title. */
            title?: string;
            /** The podcast publisher name. */
            publisher?: string;
            /** The podcast artwork image URL. */
            image?: string;
            /** The podcast artwork thumbnail URL. */
            thumbnail?: string;
            /** The Listen Notes public podcast URL. */
            listennotesUrl?: string;
          } | null;
          /** The raw Listen Notes episode object. */
          raw: Record<string, unknown>;
          /** The fixed result kind for episode items. */
          kind: "episode";
        }>;
      };
    };
    /** Get Listen Notes typeahead suggestions for terms, genres, and podcasts. */
    "listennotes.typeahead": {
      input: {
        /** The typeahead keywords to send to Listen Notes. */
        q: string;
        /** Whether to exclude explicit podcast suggestions. */
        safeMode?: boolean;
        /** Whether to include genre suggestions. */
        showGenres?: boolean;
        /** Whether to include podcast suggestions. */
        showPodcasts?: boolean;
      };
      output: {
        /** The suggested search terms. */
        terms: Array<string>;
        /** The suggested genres. */
        genres: Array<{
          /** The Listen Notes genre identifier. */
          id: number;
          /** The genre display name. */
          name: string;
          /** The parent genre identifier. */
          parentId?: number | null;
        }>;
        /** The suggested podcasts. */
        podcasts: Array<{
          /** The Listen Notes podcast identifier. */
          id: string;
          /** The suggested podcast title. */
          title: string;
          /** The suggested podcast publisher name. */
          publisher?: string;
          /** The suggested podcast artwork image URL. */
          image?: string;
          /** The suggested podcast artwork thumbnail URL. */
          thumbnail?: string;
          /** Whether the suggested podcast contains explicit content. */
          explicitContent?: boolean;
          /** The raw Listen Notes typeahead podcast object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
