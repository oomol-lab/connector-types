import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up iTunes Store and Apple Books Store records by identifier, and optionally return the content related to each record, such as the albums of an artist or the tracks of an album. Identifier lookups are faster than searching and produce no false positives. */
    "itunes_search.lookup_store": {
      input: Record<string, unknown>;
      output: {
        /** Number of records Apple reports in resultCount. The connector falls back to the length of results when Apple omits the field or reports a non-integer. */
        resultCount: number;
        /** Number of records actually present in results. Apple can report a resultCount that differs from the number of records it sends. */
        returnedCount: number;
        /** Records Apple returned for this request. */
        results: Array<{
          /** Kind of object this record wraps, such as track, collection, artist or audiobook. */
          wrapperType?: string;
          /** Kind of content this record describes, such as song, feature-movie, software, podcast, ebook or tv-episode. */
          kind?: string;
          /** iTunes identifier of the artist, developer or author. */
          artistId?: number;
          /** iTunes identifier of the album, TV season or other collection. */
          collectionId?: number;
          /** iTunes identifier of the track, movie, app or episode. */
          trackId?: number;
          /** Name of the artist, developer or author. */
          artistName?: string;
          /** Name of the album, TV season, audiobook or other collection. */
          collectionName?: string;
          /** Name of the track, movie, app or episode. */
          trackName?: string;
          /** Collection name with objectionable words masked. */
          collectionCensoredName?: string;
          /** Track name with objectionable words masked. */
          trackCensoredName?: string;
          /** Store page of the artist, developer or author. */
          artistViewUrl?: string;
          /** Store page of the collection. */
          collectionViewUrl?: string;
          /** Store page of the track, movie, app or episode. */
          trackViewUrl?: string;
          /** Preview asset for this record; Apple returns it only for track media. */
          previewUrl?: string;
          /** Artwork sized to 30 by 30 pixels, when artwork exists. */
          artworkUrl30?: string;
          /** Artwork sized to 60 by 60 pixels, when artwork exists. */
          artworkUrl60?: string;
          /** Artwork sized to 100 by 100 pixels, when artwork exists. */
          artworkUrl100?: string;
          /** Price of the collection in the storefront currency. */
          collectionPrice?: number;
          /** Price of the track in the storefront currency. */
          trackPrice?: number;
          /** ISO 4217 currency code the prices are expressed in. */
          currency?: string;
          /** Parental advisory for the collection: explicit, cleaned or notExplicit. */
          collectionExplicitness?: string;
          /** Parental advisory for the track: explicit, cleaned or notExplicit. */
          trackExplicitness?: string;
          /** Number of discs in the collection. */
          discCount?: number;
          /** Position of the disc this track belongs to. */
          discNumber?: number;
          /** Number of tracks in the collection. */
          trackCount?: number;
          /** Position of this track within its disc. */
          trackNumber?: number;
          /** Play time of the track in milliseconds. */
          trackTimeMillis?: number;
          /** Release timestamp Apple reports for this record. */
          releaseDate?: string;
          /** ISO 3166-1 alpha-3 code of the storefront the record came from. */
          country?: string;
          /** Primary genre Apple assigns to this record. */
          primaryGenreName?: string;
          /** Bundle identifier of an app record, which lookup also accepts as input. */
          bundleId?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search the iTunes Store and Apple Books Store for music, movies, podcasts, apps, audiobooks, TV shows and books, and return the matching store records. */
    "itunes_search.search_store": {
      input: {
        /**
         * Text to search for, such as an artist, album, app or book title. The connector URL-encodes it, so pass plain text rather than an already encoded string.
         * @minLength 1
         * @pattern \S
         */
        term: string;
        /**
         * Two-letter ISO 3166-1 alpha-2 code of the storefront to query, such as US or JP. Apple defaults to US when this is omitted.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Z]{2}$
         */
        country?: string;
        /** Media type to search. Apple defaults to all when this is omitted. */
        media?: "movie" | "podcast" | "music" | "musicVideo" | "audiobook" | "shortFilm" | "tvShow" | "software" | "ebook" | "all";
        /** Type of record to return. Apple accepts a different subset of entities per media type and rejects a pairing it does not support, so pick an entity that belongs to the media type being queried. Apple defaults to the track entity of that media type. */
        entity?: "album" | "allArtist" | "allTrack" | "audiobook" | "audiobookAuthor" | "desktopSoftware" | "ebook" | "iPadSoftware" | "mix" | "movie" | "movieArtist" | "musicArtist" | "musicTrack" | "musicVideo" | "podcast" | "podcastAuthor" | "podcastEpisode" | "shortFilm" | "shortFilmArtist" | "software" | "song" | "tvEpisode" | "tvSeason";
        /** Field within the media type that term should match. Apple accepts a different subset of attributes per media type and rejects a pairing it does not support. Apple searches all attributes of the media type when this is omitted. */
        attribute?: "actorTerm" | "albumTerm" | "allArtistTerm" | "allTrackTerm" | "artistTerm" | "authorTerm" | "composerTerm" | "descriptionTerm" | "directorTerm" | "featureFilmTerm" | "genreIndex" | "keywordsTerm" | "languageTerm" | "mixTerm" | "movieArtistTerm" | "movieTerm" | "producerTerm" | "ratingIndex" | "ratingTerm" | "releaseYearTerm" | "shortFilmTerm" | "showTerm" | "softwareDeveloper" | "songTerm" | "titleTerm" | "tvEpisodeTerm" | "tvSeasonTerm";
        /**
         * Maximum number of records Apple should return. Apple accepts 1 to 200 and defaults to 50.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Language Apple uses for localized text in the response. Apple defaults to en_us. */
        lang?: "en_us" | "ja_jp";
        /** Whether explicit content may appear in the results. Apple includes it by default. */
        explicit?: boolean;
        /**
         * Result key schema Apple should answer with. Version 1 is the legacy key set and version 2, the default, is the one the result fields below describe.
         * @minimum 1
         * @maximum 2
         */
        version?: number;
      };
      output: {
        /** Number of records Apple reports in resultCount. The connector falls back to the length of results when Apple omits the field or reports a non-integer. */
        resultCount: number;
        /** Number of records actually present in results. Apple can report a resultCount that differs from the number of records it sends. */
        returnedCount: number;
        /** Records Apple returned for this request. */
        results: Array<{
          /** Kind of object this record wraps, such as track, collection, artist or audiobook. */
          wrapperType?: string;
          /** Kind of content this record describes, such as song, feature-movie, software, podcast, ebook or tv-episode. */
          kind?: string;
          /** iTunes identifier of the artist, developer or author. */
          artistId?: number;
          /** iTunes identifier of the album, TV season or other collection. */
          collectionId?: number;
          /** iTunes identifier of the track, movie, app or episode. */
          trackId?: number;
          /** Name of the artist, developer or author. */
          artistName?: string;
          /** Name of the album, TV season, audiobook or other collection. */
          collectionName?: string;
          /** Name of the track, movie, app or episode. */
          trackName?: string;
          /** Collection name with objectionable words masked. */
          collectionCensoredName?: string;
          /** Track name with objectionable words masked. */
          trackCensoredName?: string;
          /** Store page of the artist, developer or author. */
          artistViewUrl?: string;
          /** Store page of the collection. */
          collectionViewUrl?: string;
          /** Store page of the track, movie, app or episode. */
          trackViewUrl?: string;
          /** Preview asset for this record; Apple returns it only for track media. */
          previewUrl?: string;
          /** Artwork sized to 30 by 30 pixels, when artwork exists. */
          artworkUrl30?: string;
          /** Artwork sized to 60 by 60 pixels, when artwork exists. */
          artworkUrl60?: string;
          /** Artwork sized to 100 by 100 pixels, when artwork exists. */
          artworkUrl100?: string;
          /** Price of the collection in the storefront currency. */
          collectionPrice?: number;
          /** Price of the track in the storefront currency. */
          trackPrice?: number;
          /** ISO 4217 currency code the prices are expressed in. */
          currency?: string;
          /** Parental advisory for the collection: explicit, cleaned or notExplicit. */
          collectionExplicitness?: string;
          /** Parental advisory for the track: explicit, cleaned or notExplicit. */
          trackExplicitness?: string;
          /** Number of discs in the collection. */
          discCount?: number;
          /** Position of the disc this track belongs to. */
          discNumber?: number;
          /** Number of tracks in the collection. */
          trackCount?: number;
          /** Position of this track within its disc. */
          trackNumber?: number;
          /** Play time of the track in milliseconds. */
          trackTimeMillis?: number;
          /** Release timestamp Apple reports for this record. */
          releaseDate?: string;
          /** ISO 3166-1 alpha-3 code of the storefront the record came from. */
          country?: string;
          /** Primary genre Apple assigns to this record. */
          primaryGenreName?: string;
          /** Bundle identifier of an app record, which lookup also accepts as input. */
          bundleId?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
