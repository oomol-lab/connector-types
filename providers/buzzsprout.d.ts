import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Buzzsprout episode without uploading media. */
    "buzzsprout.create_episode": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
        /**
         * The episode title.
         * @minLength 1
         */
        title: string;
        /** The episode description. */
        description?: string;
        /** The episode artist. */
        artist?: string;
        /** Comma-separated episode tags. */
        tags?: string;
        /**
         * The publication timestamp including a timezone offset.
         * @format date-time
         */
        publishedAt?: string;
        /**
         * The season number.
         * @minimum 0
         */
        seasonNumber?: number;
        /**
         * The episode number.
         * @minimum 0
         */
        episodeNumber?: number;
        /** The episode type. */
        episodeType?: "full" | "trailer" | "bonus";
        /** Whether the episode contains explicit content. */
        explicit?: boolean;
        /** Whether the episode is unpublished and private. */
        private?: boolean;
        /** The custom episode URL slug. */
        customUrl?: string;
        /**
         * A publicly accessible artwork URL that Buzzsprout should fetch.
         * @format uri
         */
        artworkUrl?: string;
      };
      output: {
        /** An episode returned by Buzzsprout. */
        episode: {
          /**
           * The numeric Buzzsprout episode ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The episode title. */
          title: string;
          /** The processed episode audio URL. */
          audioUrl: string | null;
          /** The episode artwork URL. */
          artworkUrl: string | null;
          /** The episode description. */
          description: string | null;
          /** The episode artist. */
          artist: string | null;
          /** The comma-separated episode tags. */
          tags: string | null;
          /** The episode publication timestamp. */
          publishedAt: string | null;
          /** The episode duration in seconds, or -1 while processing. */
          duration: number | null;
          /** The episode GUID. */
          guid: string | null;
          /** The episode custom URL slug. */
          customUrl: string | null;
          /** The episode number. */
          episodeNumber: number | null;
          /** The season number. */
          seasonNumber: number | null;
          /** The episode type. */
          episodeType: string | null;
          /** Whether the episode is marked as explicit. */
          explicit: boolean;
          /** Whether the episode is unpublished and private. */
          private: boolean;
          /** The total episode play count. */
          totalPlays: number | null;
          /** The raw episode object returned by Buzzsprout. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one episode from a Buzzsprout podcast. */
    "buzzsprout.get_episode": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
        /**
         * The numeric Buzzsprout episode ID.
         * @exclusiveMinimum 0
         */
        episodeId: number;
      };
      output: {
        /** An episode returned by Buzzsprout. */
        episode: {
          /**
           * The numeric Buzzsprout episode ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The episode title. */
          title: string;
          /** The processed episode audio URL. */
          audioUrl: string | null;
          /** The episode artwork URL. */
          artworkUrl: string | null;
          /** The episode description. */
          description: string | null;
          /** The episode artist. */
          artist: string | null;
          /** The comma-separated episode tags. */
          tags: string | null;
          /** The episode publication timestamp. */
          publishedAt: string | null;
          /** The episode duration in seconds, or -1 while processing. */
          duration: number | null;
          /** The episode GUID. */
          guid: string | null;
          /** The episode custom URL slug. */
          customUrl: string | null;
          /** The episode number. */
          episodeNumber: number | null;
          /** The season number. */
          seasonNumber: number | null;
          /** The episode type. */
          episodeType: string | null;
          /** Whether the episode is marked as explicit. */
          explicit: boolean;
          /** Whether the episode is unpublished and private. */
          private: boolean;
          /** The total episode play count. */
          totalPlays: number | null;
          /** The raw episode object returned by Buzzsprout. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one podcast available to the authenticated Buzzsprout account. */
    "buzzsprout.get_podcast": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
      };
      output: {
        /** A podcast returned by Buzzsprout. */
        podcast: {
          /**
           * The numeric Buzzsprout podcast ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The podcast title. */
          title: string;
          /** The podcast author when configured. */
          author: string | null;
          /** The podcast description when configured. */
          description: string | null;
          /** The configured external website address. */
          websiteAddress: string | null;
          /** The effective podcast website URL. */
          websiteUrl: string | null;
          /** The podcast contact email when configured. */
          contactEmail: string | null;
          /** The comma-separated podcast keywords. */
          keywords: string | null;
          /** Whether the podcast is marked as explicit. */
          explicit: boolean;
          /** The primary podcast category. */
          mainCategory: string | null;
          /** The primary podcast subcategory. */
          subCategory: string | null;
          /** The second podcast category. */
          mainCategory2: string | null;
          /** The second podcast subcategory. */
          subCategory2: string | null;
          /** The third podcast category. */
          mainCategory3: string | null;
          /** The third podcast subcategory. */
          subCategory3: string | null;
          /** The podcast language code. */
          language: string | null;
          /** The podcast timezone. */
          timezone: string | null;
          /** The podcast artwork URL. */
          artworkUrl: string | null;
          /** The podcast background image URL. */
          backgroundUrl: string | null;
          /** The podcast RSS feed URL. */
          rssUrl: string | null;
          /** The raw podcast object returned by Buzzsprout. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List paginated download details for one episode and podcast-local date. */
    "buzzsprout.list_episode_downloads": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
        /**
         * The numeric Buzzsprout episode ID.
         * @exclusiveMinimum 0
         */
        episodeId: number;
        /**
         * The podcast-local date to query.
         * @format date
         */
        date: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum download records per page.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /**
         * The numeric Buzzsprout episode ID.
         * @exclusiveMinimum 0
         */
        episodeId: number;
        /** The normalized download details. */
        downloads: Array<{
          /** The podcast application name. */
          app: string;
          /** The device name. */
          device: string;
          /** The device category. */
          deviceType: string;
          /** The ISO country code when available. */
          countryCode: string | null;
          /** The region when available. */
          region: string | null;
          /** The city when available. */
          city: string | null;
          /** The continent when available. */
          continent: string | null;
          /** The media type downloaded. */
          mediaType: "audio" | "video";
        }>;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        perPage: number;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page number, or null when this is the last page. */
        nextPage: number | null;
      };
    };
    /** List episodes for a Buzzsprout podcast. */
    "buzzsprout.list_episodes": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
      };
      output: {
        /** The episodes returned by Buzzsprout. */
        episodes: Array<{
          /**
           * The numeric Buzzsprout episode ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The episode title. */
          title: string;
          /** The processed episode audio URL. */
          audioUrl: string | null;
          /** The episode artwork URL. */
          artworkUrl: string | null;
          /** The episode description. */
          description: string | null;
          /** The episode artist. */
          artist: string | null;
          /** The comma-separated episode tags. */
          tags: string | null;
          /** The episode publication timestamp. */
          publishedAt: string | null;
          /** The episode duration in seconds, or -1 while processing. */
          duration: number | null;
          /** The episode GUID. */
          guid: string | null;
          /** The episode custom URL slug. */
          customUrl: string | null;
          /** The episode number. */
          episodeNumber: number | null;
          /** The season number. */
          seasonNumber: number | null;
          /** The episode type. */
          episodeType: string | null;
          /** Whether the episode is marked as explicit. */
          explicit: boolean;
          /** Whether the episode is unpublished and private. */
          private: boolean;
          /** The total episode play count. */
          totalPlays: number | null;
          /** The raw episode object returned by Buzzsprout. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List per-episode download totals for one podcast-local date. */
    "buzzsprout.list_podcast_downloads": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
        /**
         * The podcast-local date to query.
         * @format date
         */
        date: string;
      };
      output: {
        /** The per-episode download totals. */
        downloads: Array<{
          /**
           * The numeric Buzzsprout episode ID.
           * @exclusiveMinimum 0
           */
          episodeId: number;
          /**
           * The number of downloads on the requested date.
           * @minimum 0
           */
          total: number;
        }>;
      };
    };
    /** List podcasts available to the authenticated Buzzsprout account. */
    "buzzsprout.list_podcasts": {
      input: Record<string, never>;
      output: {
        /** The available Buzzsprout podcasts. */
        podcasts: Array<{
          /**
           * The numeric Buzzsprout podcast ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The podcast title. */
          title: string;
          /** The podcast author when configured. */
          author: string | null;
          /** The podcast description when configured. */
          description: string | null;
          /** The configured external website address. */
          websiteAddress: string | null;
          /** The effective podcast website URL. */
          websiteUrl: string | null;
          /** The podcast contact email when configured. */
          contactEmail: string | null;
          /** The comma-separated podcast keywords. */
          keywords: string | null;
          /** Whether the podcast is marked as explicit. */
          explicit: boolean;
          /** The primary podcast category. */
          mainCategory: string | null;
          /** The primary podcast subcategory. */
          subCategory: string | null;
          /** The second podcast category. */
          mainCategory2: string | null;
          /** The second podcast subcategory. */
          subCategory2: string | null;
          /** The third podcast category. */
          mainCategory3: string | null;
          /** The third podcast subcategory. */
          subCategory3: string | null;
          /** The podcast language code. */
          language: string | null;
          /** The podcast timezone. */
          timezone: string | null;
          /** The podcast artwork URL. */
          artworkUrl: string | null;
          /** The podcast background image URL. */
          backgroundUrl: string | null;
          /** The podcast RSS feed URL. */
          rssUrl: string | null;
          /** The raw podcast object returned by Buzzsprout. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Update, publish, schedule, or unpublish a Buzzsprout episode. */
    "buzzsprout.update_episode": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
        /**
         * The numeric Buzzsprout episode ID.
         * @exclusiveMinimum 0
         */
        episodeId: number;
        /**
         * The episode title.
         * @minLength 1
         */
        title?: string;
        /** The episode description. */
        description?: string;
        /** The episode artist. */
        artist?: string;
        /** Comma-separated episode tags. */
        tags?: string;
        /**
         * The publication timestamp including a timezone offset.
         * @format date-time
         */
        publishedAt?: string;
        /**
         * The season number.
         * @minimum 0
         */
        seasonNumber?: number;
        /**
         * The episode number.
         * @minimum 0
         */
        episodeNumber?: number;
        /** The episode type. */
        episodeType?: "full" | "trailer" | "bonus";
        /** Whether the episode contains explicit content. */
        explicit?: boolean;
        /** Whether the episode is unpublished and private. */
        private?: boolean;
        /** The custom episode URL slug. */
        customUrl?: string;
        /**
         * A publicly accessible artwork URL that Buzzsprout should fetch.
         * @format uri
         */
        artworkUrl?: string;
      };
      output: {
        /** An episode returned by Buzzsprout. */
        episode: {
          /**
           * The numeric Buzzsprout episode ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The episode title. */
          title: string;
          /** The processed episode audio URL. */
          audioUrl: string | null;
          /** The episode artwork URL. */
          artworkUrl: string | null;
          /** The episode description. */
          description: string | null;
          /** The episode artist. */
          artist: string | null;
          /** The comma-separated episode tags. */
          tags: string | null;
          /** The episode publication timestamp. */
          publishedAt: string | null;
          /** The episode duration in seconds, or -1 while processing. */
          duration: number | null;
          /** The episode GUID. */
          guid: string | null;
          /** The episode custom URL slug. */
          customUrl: string | null;
          /** The episode number. */
          episodeNumber: number | null;
          /** The season number. */
          seasonNumber: number | null;
          /** The episode type. */
          episodeType: string | null;
          /** Whether the episode is marked as explicit. */
          explicit: boolean;
          /** Whether the episode is unpublished and private. */
          private: boolean;
          /** The total episode play count. */
          totalPlays: number | null;
          /** The raw episode object returned by Buzzsprout. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update editable metadata for a Buzzsprout podcast. */
    "buzzsprout.update_podcast": {
      input: {
        /**
         * The numeric Buzzsprout podcast ID.
         * @exclusiveMinimum 0
         */
        podcastId: number;
        /**
         * The podcast title.
         * @minLength 1
         */
        title?: string;
        /** The podcast description. */
        description?: string;
        /** Comma-separated podcast keywords. */
        keywords?: string;
        /** The podcast author. */
        author?: string;
        /** Whether the podcast contains explicit content. */
        explicit?: boolean;
        /** The podcast language code. */
        language?: string;
        /** The podcast timezone name. */
        timezone?: string;
        /**
         * The podcast's external website URL.
         * @format uri
         */
        websiteAddress?: string;
        /**
         * The podcast contact email.
         * @format email
         */
        contactEmail?: string;
        /** The primary category in Main :: Sub format, or null. */
        category?: string | null;
        /** The second category in Main :: Sub format, or null. */
        category2?: string | null;
        /** The third category in Main :: Sub format, or null. */
        category3?: string | null;
        /**
         * A publicly accessible artwork URL that Buzzsprout should fetch.
         * @format uri
         */
        artworkUrl?: string;
      };
      output: {
        /** A podcast returned by Buzzsprout. */
        podcast: {
          /**
           * The numeric Buzzsprout podcast ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The podcast title. */
          title: string;
          /** The podcast author when configured. */
          author: string | null;
          /** The podcast description when configured. */
          description: string | null;
          /** The configured external website address. */
          websiteAddress: string | null;
          /** The effective podcast website URL. */
          websiteUrl: string | null;
          /** The podcast contact email when configured. */
          contactEmail: string | null;
          /** The comma-separated podcast keywords. */
          keywords: string | null;
          /** Whether the podcast is marked as explicit. */
          explicit: boolean;
          /** The primary podcast category. */
          mainCategory: string | null;
          /** The primary podcast subcategory. */
          subCategory: string | null;
          /** The second podcast category. */
          mainCategory2: string | null;
          /** The second podcast subcategory. */
          subCategory2: string | null;
          /** The third podcast category. */
          mainCategory3: string | null;
          /** The third podcast subcategory. */
          subCategory3: string | null;
          /** The podcast language code. */
          language: string | null;
          /** The podcast timezone. */
          timezone: string | null;
          /** The podcast artwork URL. */
          artworkUrl: string | null;
          /** The podcast background image URL. */
          backgroundUrl: string | null;
          /** The podcast RSS feed URL. */
          rssUrl: string | null;
          /** The raw podcast object returned by Buzzsprout. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
