import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get TMDB image base URLs, available image sizes, and change keys used to build media URLs. */
    "tmdb.get_configuration": {
      input: Record<string, never>;
      output: {
        /** Image configuration used to construct TMDB image URLs. */
        images: {
          /** HTTP image base URL. */
          base_url: string;
          /** HTTPS image base URL. */
          secure_base_url: string;
          /** Available backdrop size tokens. */
          backdrop_sizes: Array<string>;
          /** Available logo size tokens. */
          logo_sizes: Array<string>;
          /** Available poster size tokens. */
          poster_sizes: Array<string>;
          /** Available profile size tokens. */
          profile_sizes: Array<string>;
          /** Available still size tokens. */
          still_sizes: Array<string>;
          [key: string]: unknown;
        };
        /** Change-tracking keys used by TMDB change feeds. */
        change_keys?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get top-level TMDB details for one movie by its TMDB identifier. */
    "tmdb.get_movie": {
      input: {
        /**
         * TMDB movie identifier.
         * @exclusiveMinimum 0
         */
        movieId: number;
        /**
         * ISO-639-1 language code with an optional ISO-3166-1 region, such as en-US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** TMDB numeric identifier for this result. */
        id: number;
        /** Movie title. */
        title?: string;
        /** Original movie title. */
        original_title?: string;
        /** Plot summary. */
        overview?: string;
        /** Marketing tagline. */
        tagline?: string;
        /** Release status, such as Released. */
        status?: string;
        /** Release date in YYYY-MM-DD format. */
        release_date?: string;
        /** Runtime in minutes. */
        runtime?: number | null;
        /** Reported production budget. */
        budget?: number;
        /** Reported box office revenue. */
        revenue?: number;
        /** TMDB popularity score. */
        popularity?: number;
        /** Average user rating. */
        vote_average?: number;
        /** Number of user votes. */
        vote_count?: number;
        /** Whether TMDB marks the movie as adult content. */
        adult?: boolean;
        /** Whether TMDB marks the entry as a video rather than a feature film. */
        video?: boolean;
        /** IMDb identifier when TMDB provides one. */
        imdb_id?: string | null;
        /** Official homepage URL when TMDB provides one. */
        homepage?: string | null;
        /** Original language code. */
        original_language?: string;
        /** Poster image path relative to the configuration image base URL. */
        poster_path?: string | null;
        /** Backdrop image path relative to the configuration image base URL. */
        backdrop_path?: string | null;
        /** Genres associated with the movie. */
        genres?: Array<{
          /** TMDB numeric identifier for this result. */
          id: number;
          /** Display name returned by TMDB. */
          name: string;
          [key: string]: unknown;
        }>;
        /** ISO-3166-1 origin country codes. */
        origin_country?: Array<string>;
        /** Production companies associated with the movie. */
        production_companies?: Array<Record<string, unknown>>;
        /** Production countries associated with the movie. */
        production_countries?: Array<Record<string, unknown>>;
        /** Spoken languages associated with the movie. */
        spoken_languages?: Array<Record<string, unknown>>;
        /** Collection this movie belongs to, when TMDB provides one. */
        belongs_to_collection?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Get top-level TMDB details for one person by their TMDB identifier. */
    "tmdb.get_person": {
      input: {
        /**
         * TMDB person identifier.
         * @exclusiveMinimum 0
         */
        personId: number;
        /**
         * ISO-639-1 language code with an optional ISO-3166-1 region, such as en-US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** TMDB numeric identifier for this result. */
        id: number;
        /** Person name. */
        name?: string;
        /** Biography text returned by TMDB. */
        biography?: string;
        /** Birth date in YYYY-MM-DD format. */
        birthday?: string | null;
        /** Death date in YYYY-MM-DD format when applicable. */
        deathday?: string | null;
        /** Place of birth returned by TMDB. */
        place_of_birth?: string | null;
        /** TMDB gender code: 0 unspecified, 1 female, 2 male, 3 non-binary. */
        gender?: number;
        /** Official homepage URL when TMDB provides one. */
        homepage?: string | null;
        /** IMDb identifier when TMDB provides one. */
        imdb_id?: string | null;
        /** Primary department, such as Acting. */
        known_for_department?: string;
        /** TMDB popularity score. */
        popularity?: number;
        /** Whether TMDB marks the person as adult content. */
        adult?: boolean;
        /** Profile image path relative to the configuration image base URL. */
        profile_path?: string | null;
        /** Alternate names returned by TMDB. */
        also_known_as?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get top-level TMDB details for one TV series by its TMDB identifier. */
    "tmdb.get_tv": {
      input: {
        /**
         * TMDB TV series identifier.
         * @exclusiveMinimum 0
         */
        tvId: number;
        /**
         * ISO-639-1 language code with an optional ISO-3166-1 region, such as en-US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** TMDB numeric identifier for this result. */
        id: number;
        /** TV series name. */
        name?: string;
        /** Original TV series name. */
        original_name?: string;
        /** Series summary. */
        overview?: string;
        /** Marketing tagline. */
        tagline?: string;
        /** Series status, such as Ended or Returning Series. */
        status?: string;
        /** Series type returned by TMDB. */
        type?: string;
        /** First air date in YYYY-MM-DD format. */
        first_air_date?: string;
        /** Most recent air date in YYYY-MM-DD format. */
        last_air_date?: string | null;
        /** Number of seasons. */
        number_of_seasons?: number;
        /** Number of episodes. */
        number_of_episodes?: number;
        /** TMDB popularity score. */
        popularity?: number;
        /** Average user rating. */
        vote_average?: number;
        /** Number of user votes. */
        vote_count?: number;
        /** Whether TMDB marks the series as adult content. */
        adult?: boolean;
        /** Whether TMDB marks the series as still in production. */
        in_production?: boolean;
        /** Official homepage URL when TMDB provides one. */
        homepage?: string | null;
        /** Original language code. */
        original_language?: string;
        /** Poster image path relative to the configuration image base URL. */
        poster_path?: string | null;
        /** Backdrop image path relative to the configuration image base URL. */
        backdrop_path?: string | null;
        /** Genres associated with the series. */
        genres?: Array<{
          /** TMDB numeric identifier for this result. */
          id: number;
          /** Display name returned by TMDB. */
          name: string;
          [key: string]: unknown;
        }>;
        /** ISO-3166-1 origin country codes. */
        origin_country?: Array<string>;
        /** Language codes associated with the series. */
        languages?: Array<string>;
        /** Episode runtimes in minutes. */
        episode_run_time?: Array<number>;
        /** Creators associated with the series. */
        created_by?: Array<Record<string, unknown>>;
        /** Networks associated with the series. */
        networks?: Array<Record<string, unknown>>;
        /** Production companies associated with the series. */
        production_companies?: Array<Record<string, unknown>>;
        /** Season summaries returned with the series. */
        seasons?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List movies, TV shows, and people currently trending on TMDB for a day or week window. */
    "tmdb.list_trending": {
      input: {
        /**
         * Media type to include in the trending list.
         * @default "all"
         */
        mediaType?: "all" | "movie" | "tv" | "person";
        /**
         * Trending time window used by TMDB.
         * @default "day"
         */
        timeWindow?: "day" | "week";
        /**
         * ISO-639-1 language code with an optional ISO-3166-1 region, such as en-US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Current page number returned by TMDB. */
        page: number;
        /** Result items for this page. An empty array is valid when nothing matches. */
        results: Array<{
          /** TMDB numeric identifier for this result. */
          id: number;
          /** Media type for mixed lists such as trending, for example movie, tv, or person. */
          media_type?: string;
          /** Movie title when the result is a movie. */
          title?: string;
          /** TV show or person name when the result is not a movie. */
          name?: string;
          /** Plot summary for a movie or TV show. */
          overview?: string;
          /** Poster image path relative to the configuration image base URL. */
          poster_path?: string | null;
          /** Profile image path relative to the configuration image base URL. */
          profile_path?: string | null;
          /** Backdrop image path relative to the configuration image base URL. */
          backdrop_path?: string | null;
          /** Movie release date in YYYY-MM-DD format when TMDB provides one. */
          release_date?: string;
          /** TV first air date in YYYY-MM-DD format when TMDB provides one. */
          first_air_date?: string;
          /** Original language code returned by TMDB. */
          original_language?: string;
          /** Original movie title. */
          original_title?: string;
          /** Original TV show or person name. */
          original_name?: string;
          /** TMDB popularity score. */
          popularity?: number;
          /** Average user rating. */
          vote_average?: number;
          /** Number of user votes. */
          vote_count?: number;
          /** Whether TMDB marks the result as adult content. */
          adult?: boolean;
          /** TMDB genre identifiers associated with this result. */
          genre_ids?: Array<number>;
          [key: string]: unknown;
        }>;
        /** Total number of pages returned by TMDB. */
        total_pages: number;
        /** Total number of matching results returned by TMDB. */
        total_results: number;
        [key: string]: unknown;
      };
    };
    /** Search TMDB movies by title and return a paginated list of matching results. */
    "tmdb.search_movie": {
      input: {
        /**
         * Movie title query sent to TMDB search.
         * @minLength 1
         */
        query: string;
        /**
         * ISO-639-1 language code with an optional ISO-3166-1 region, such as en-US.
         * @minLength 1
         */
        language?: string;
        /**
         * One-based TMDB results page. TMDB accepts values from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        page?: number;
        /** Whether adult-rated titles should be included in search results. */
        includeAdult?: boolean;
        /**
         * Four-digit calendar year used as a TMDB search filter. TMDB accepts values from 1000 to 9999.
         * @minimum 1000
         * @maximum 9999
         */
        year?: number;
        /**
         * Four-digit calendar year used as a TMDB search filter. TMDB accepts values from 1000 to 9999.
         * @minimum 1000
         * @maximum 9999
         */
        primaryReleaseYear?: number;
        /**
         * ISO-3166-1 region used to bias movie search results, such as US.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** Current page number returned by TMDB. */
        page: number;
        /** Result items for this page. An empty array is valid when nothing matches. */
        results: Array<{
          /** TMDB numeric identifier for this result. */
          id: number;
          /** Media type for mixed lists such as trending, for example movie, tv, or person. */
          media_type?: string;
          /** Movie title when the result is a movie. */
          title?: string;
          /** TV show or person name when the result is not a movie. */
          name?: string;
          /** Plot summary for a movie or TV show. */
          overview?: string;
          /** Poster image path relative to the configuration image base URL. */
          poster_path?: string | null;
          /** Profile image path relative to the configuration image base URL. */
          profile_path?: string | null;
          /** Backdrop image path relative to the configuration image base URL. */
          backdrop_path?: string | null;
          /** Movie release date in YYYY-MM-DD format when TMDB provides one. */
          release_date?: string;
          /** TV first air date in YYYY-MM-DD format when TMDB provides one. */
          first_air_date?: string;
          /** Original language code returned by TMDB. */
          original_language?: string;
          /** Original movie title. */
          original_title?: string;
          /** Original TV show or person name. */
          original_name?: string;
          /** TMDB popularity score. */
          popularity?: number;
          /** Average user rating. */
          vote_average?: number;
          /** Number of user votes. */
          vote_count?: number;
          /** Whether TMDB marks the result as adult content. */
          adult?: boolean;
          /** TMDB genre identifiers associated with this result. */
          genre_ids?: Array<number>;
          [key: string]: unknown;
        }>;
        /** Total number of pages returned by TMDB. */
        total_pages: number;
        /** Total number of matching results returned by TMDB. */
        total_results: number;
        [key: string]: unknown;
      };
    };
    /** Search TMDB TV shows by name and return a paginated list of matching results. */
    "tmdb.search_tv": {
      input: {
        /**
         * TV show name query sent to TMDB search.
         * @minLength 1
         */
        query: string;
        /**
         * ISO-639-1 language code with an optional ISO-3166-1 region, such as en-US.
         * @minLength 1
         */
        language?: string;
        /**
         * One-based TMDB results page. TMDB accepts values from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        page?: number;
        /** Whether adult-rated titles should be included in search results. */
        includeAdult?: boolean;
        /**
         * Four-digit calendar year used as a TMDB search filter. TMDB accepts values from 1000 to 9999.
         * @minimum 1000
         * @maximum 9999
         */
        year?: number;
        /**
         * Four-digit calendar year used as a TMDB search filter. TMDB accepts values from 1000 to 9999.
         * @minimum 1000
         * @maximum 9999
         */
        firstAirDateYear?: number;
      };
      output: {
        /** Current page number returned by TMDB. */
        page: number;
        /** Result items for this page. An empty array is valid when nothing matches. */
        results: Array<{
          /** TMDB numeric identifier for this result. */
          id: number;
          /** Media type for mixed lists such as trending, for example movie, tv, or person. */
          media_type?: string;
          /** Movie title when the result is a movie. */
          title?: string;
          /** TV show or person name when the result is not a movie. */
          name?: string;
          /** Plot summary for a movie or TV show. */
          overview?: string;
          /** Poster image path relative to the configuration image base URL. */
          poster_path?: string | null;
          /** Profile image path relative to the configuration image base URL. */
          profile_path?: string | null;
          /** Backdrop image path relative to the configuration image base URL. */
          backdrop_path?: string | null;
          /** Movie release date in YYYY-MM-DD format when TMDB provides one. */
          release_date?: string;
          /** TV first air date in YYYY-MM-DD format when TMDB provides one. */
          first_air_date?: string;
          /** Original language code returned by TMDB. */
          original_language?: string;
          /** Original movie title. */
          original_title?: string;
          /** Original TV show or person name. */
          original_name?: string;
          /** TMDB popularity score. */
          popularity?: number;
          /** Average user rating. */
          vote_average?: number;
          /** Number of user votes. */
          vote_count?: number;
          /** Whether TMDB marks the result as adult content. */
          adult?: boolean;
          /** TMDB genre identifiers associated with this result. */
          genre_ids?: Array<number>;
          [key: string]: unknown;
        }>;
        /** Total number of pages returned by TMDB. */
        total_pages: number;
        /** Total number of matching results returned by TMDB. */
        total_results: number;
        [key: string]: unknown;
      };
    };
  }
}
