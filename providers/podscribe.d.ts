import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Podscribe integration health, optionally filtered by advertiser and including pixel data. */
    "podscribe.get_integration_health": {
      input: {
        /**
         * Advertiser name used to filter integration health.
         * @minLength 1
         */
        advertiserName?: string;
        /** Whether to include pixel data for the advertiser. Podscribe requires advertiserName when this is true. */
        withPixels?: boolean;
      };
      output: Array<{
        /** The integration name. */
        name?: string;
        /** The integration lookup name. */
        lookupName?: string;
        /** Issues related to this integration. */
        issues?: Array<{
          /** The integration issue type. */
          type?: string;
          /**
           * The timestamp when Podscribe last reported the issue.
           * @format date-time
           */
          reported_at?: string;
          /** Pixel actions associated with the issue when Podscribe includes action details. */
          actions?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pixel data returned for this integration. */
        pixels?: Array<{
          /** The pixel action type. */
          action?: string;
          /** The last URL that triggered the pixel. */
          last_url?: string;
          /**
           * The timestamp when Podscribe last saw the pixel.
           * @format date-time
           */
          last_seen?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      }>;
    };
    /** Retrieve Podscribe show information by iTunes or YouTube identifier. */
    "podscribe.get_show_info": {
      input: {
        /**
         * iTunes ID, YouTube channel ID, or YouTube playlist ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The unique show identifier in Podscribe. */
        podscribeSeriesId?: number;
        /** The podcast or video series title. */
        title?: string;
        /** The platform associated with the show. */
        platform?: string;
        /** Estimated monthly listeners for the show. */
        monthlyListeners?: number;
        /** Estimated monthly downloads for the show. */
        monthlyDownloads?: number;
        /** Estimated average downloads per episode. */
        avgDownloadsPerEpisode?: number;
        /** Estimated average YouTube views per episode. */
        ytAvgDownloadsPerEpisode?: number;
        /** Estimated monthly YouTube views for the show. */
        ytMonthlyDownloads?: number;
        /** Estimated average Spotify downloads per episode. */
        spotifyAvgDownloadsPerEpisode?: number;
        /** Estimated monthly Spotify downloads for the show. */
        spotifyMonthlyDownloads?: number;
        /** Estimated average Rumble downloads per episode. */
        rumbleAvgDownloadsPerEpisode?: number;
        /** Estimated monthly Rumble downloads for the show. */
        rumbleMonthlyDownloads?: number;
        /** Estimated monthly podcast downloads for the show. */
        podcastDownloads?: number;
        /** Estimated average podcast downloads per episode. */
        podcastAvgDownloadsPerEpisode?: number;
        /** The percentage of ads classified as direct response. */
        directRes?: number;
        /** The percentage of ads read by the host. */
        hostRead?: number;
        /** The total number of ads Podscribe has found for the show. */
        countAds?: number;
        /** Top advertisers returned for the show. */
        topAdvertisers?: Array<string>;
        /** The advertiser renewal-rate proxy returned by Podscribe. */
        renewalRate?: number;
        /** The podcast ad load returned by Podscribe. */
        adLoad?: number;
        /** The YouTube ad load returned by Podscribe. */
        adLoadYT?: number;
        /** Whether the Podscribe prefix is placed on the show. */
        isPodscribePrefixPlaced?: boolean;
        /** Whether the show opted into Spotify video. */
        optedIntoSpotifyVideo?: boolean;
        [key: string]: unknown;
      };
    };
    /** Search Podscribe episodes by query string with optional time frame, media type, and show filters. */
    "podscribe.search_episodes": {
      input: {
        /**
         * Search query string.
         * @minLength 1
         */
        search: string;
        /**
         * Number of days to look back.
         * @minimum 1
         */
        timeFrame?: number;
        /** Whether to enable exact-match search. */
        exact?: boolean;
        /** Whether to search only in transcripts. */
        transcriptOnly?: boolean;
        /** Whether to exclude ads from search results. */
        excludeAds?: boolean;
        /**
         * Show IDs used to filter episode search results.
         * @minItems 1
         */
        showFilterIds?: Array<number>;
        /** The media type values used to filter episode search results. */
        mediaType?: "all" | "podcast" | "youtube" | "radio" | "rumble" | Array<"all" | "podcast" | "youtube" | "radio" | "rumble">;
      };
      output: {
        /** Episodes returned by Podscribe. */
        data: Array<{
          /** The unique episode identifier in Podscribe. */
          id?: number;
          /** The episode title. */
          title?: string;
          /** The episode description. */
          description?: string;
          /** The episode duration. */
          duration?: number;
          /**
           * The date and time when the episode was uploaded.
           * @format date-time
           */
          uploaded_at?: string;
          /** The episode media URL. */
          url?: string;
          /** The Podscribe series identifier. */
          series_id?: number;
          /** The episode artist. */
          artist?: string;
          /** The number of listens for the episode. */
          num_listens?: number;
          /** The number of ratings for the episode. */
          num_ratings?: number;
          /** The logo URL for the episode series. */
          series_logo_url?: string;
          /** The title of the episode series. */
          series_title?: string;
          /** Search highlights returned for the episode. */
          highlights?: {
            /** Transcript highlights returned for the episode. */
            transcript?: Array<{
              /** The highlighted phrase from the transcript. */
              phrase?: string;
              /** The start time of the matched phrase in seconds. */
              startTime?: number;
              /** The search term that matched. */
              term?: string;
              /** The timestamp of the matched phrase in seconds. */
              ts?: number;
              /** The context around the matched phrase. */
              context?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
  }
}
