import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one page of a chart. Increment page while hasMore is true. */
    "qqmusic.get_chart": {
      input: {
        /** Chart ID returned by list_charts. */
        topId: number;
        /**
         * Zero-based page number; defaults to 0.
         * @minimum 0
         * @default 0
         */
        page?: number;
      };
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** Chart ID returned by list_charts. */
        topId?: number;
        /** Chart name. */
        topName?: string;
        /** Listener count. */
        listenNum?: number;
        /** Total song count. */
        totalNum?: number;
        /** Chart type. */
        topType?: number;
        /** Chart description. */
        topDesc?: string;
        /** Chart header image URL. */
        topHeaderPic?: string;
        /** Chart banner image URL. */
        topBannerPic?: string;
        /** Chart update time. */
        updateTime?: string;
        /** Whether another page exists. */
        hasMore?: boolean;
        /** Songs on this page. */
        trackList?: Array<{
          /** Song MID. */
          songMid?: string;
          /** Song name. */
          songName?: string;
          /** Singer name. */
          singerName?: string;
          /** Song listening page URL. */
          songH5Url?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the daily personalized song recommendations. */
    "qqmusic.get_daily_mix": {
      input: Record<string, never>;
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** Recommended songs. */
        songlist?: Array<{
          /** Song MID. */
          songMid?: string;
          /** Song name. */
          songName?: string;
          /** Singer name. */
          singerName?: string;
          /** Song listening page URL. */
          songH5Url?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get personal daily, weekly, or monthly listening statistics. Only the selected time dimension is populated. */
    "qqmusic.get_listening_report": {
      input: {
        /**
         * Report period: d daily, w weekly, m or empty monthly; defaults to m.
         * @default "m"
         */
        timeKey?: "d" | "w" | "m" | "";
        /** Unix seconds at the target day midnight or target week Monday midnight. Omit for today or this week; ignored for monthly reports. */
        startTime?: number;
      };
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** Daily listening report. */
        dayData?: {
          /** Total listening time for this day in seconds. */
          listenTime?: number;
          /** Active hour of the day, 0 through 23. */
          activeHour?: number;
          /** Average listening time by time slot; slots are identified by array index. */
          averageTime?: Array<{
            /** An indexed time-slot value; identify the slot by its array index. */
            currentAverage?: {
              /** Listening duration in seconds. */
              sum?: number;
              [key: string]: unknown;
            };
            /** An indexed time-slot value; identify the slot by its array index. */
            nearAverage?: {
              /** Listening duration in seconds. */
              sum?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Top singers; sum is listening time in seconds. */
          singerListen?: Array<{
            /** Song MID. */
            songMid?: string;
            /** Song name. */
            songName?: string;
            /** Singer MID. */
            singerMid?: string;
            /** Singer name. */
            singerName?: string;
            /** Listening time in seconds. */
            sum?: number;
            [key: string]: unknown;
          }>;
          /** Top songs; sum is the play count. */
          songListen?: Array<{
            /** Song MID. */
            songMid?: string;
            /** Song name. */
            songName?: string;
            /** Singer MID. */
            singerMid?: string;
            /** Singer name. */
            singerName?: string;
            /** Number of plays. */
            sum?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        /** Weekly listening report. */
        weekData?: {
          /** Daily average listening time for this week in seconds. */
          listenTime?: number;
          /** Change ratio compared with last week; positive means an increase. */
          floatNumber?: number;
          /** Average listening time by time slot; slots are identified by array index. */
          averageTime?: Array<{
            /** An indexed time-slot value; identify the slot by its array index. */
            currentAverage?: {
              /** Listening duration in seconds. */
              sum?: number;
              [key: string]: unknown;
            };
            /** An indexed time-slot value; identify the slot by its array index. */
            nearAverage?: {
              /** Listening duration in seconds. */
              sum?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Top singers; sum is listening time in seconds. */
          singerListen?: Array<{
            /** Song MID. */
            songMid?: string;
            /** Song name. */
            songName?: string;
            /** Singer MID. */
            singerMid?: string;
            /** Singer name. */
            singerName?: string;
            /** Listening time in seconds. */
            sum?: number;
            [key: string]: unknown;
          }>;
          /** Top songs; sum is the play count. */
          songListen?: Array<{
            /** Song MID. */
            songMid?: string;
            /** Song name. */
            songName?: string;
            /** Singer MID. */
            singerMid?: string;
            /** Singer name. */
            singerName?: string;
            /** Number of plays. */
            sum?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        /** Monthly listening statistics and preferences. */
        monthData?: {
          /** Monthly listening details. */
          monthDetailList?: Array<{
            /** Total plays in the month. */
            listenCount?: number;
            /** Month of the data. */
            dataTime?: string;
            /** Data export time. */
            exportTime?: string;
            /** Songs in the monthly details. */
            songs?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Provider-defined song metric; units depend on the containing section. */
              sum?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Top statistics, one entry per month. */
          topDataList?: Array<{
            /** Provider data dimension type. */
            selectType?: number;
            /** Month represented by these statistics. */
            month?: string;
            /** Top singers; sum is listening time in seconds. */
            topSinger?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Listening time in seconds. */
              sum?: number;
              [key: string]: unknown;
            }>;
            /** Top songs; sum is the play count. */
            topSong?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Number of plays. */
              sum?: number;
              [key: string]: unknown;
            }>;
            /** Favorite song MID. */
            favSongMid?: string;
            /** Favorite song name. */
            favSongName?: string;
            /** Singer MID of the favorite song. */
            favSingerMid?: string;
            /** Singer name of the favorite song. */
            favSingerName?: string;
            /** Most repeated song. */
            repeatSong?: {
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Date of repeated listening. */
              listenDate?: string;
              /** Repeat count. */
              count?: number;
              [key: string]: unknown;
            };
            /** Late-night song. */
            midnightSong?: {
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Month number. */
              month?: number;
              /** Listening hour, 0 through 23. */
              hour?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Top singers; sum is listening time in seconds. */
          topSinger?: Array<{
            /** Song MID. */
            songMid?: string;
            /** Song name. */
            songName?: string;
            /** Singer MID. */
            singerMid?: string;
            /** Singer name. */
            singerName?: string;
            /** Listening time in seconds. */
            sum?: number;
            [key: string]: unknown;
          }>;
          /** Top songs; sum is the play count. */
          topSong?: Array<{
            /** Song MID. */
            songMid?: string;
            /** Song name. */
            songName?: string;
            /** Singer MID. */
            singerMid?: string;
            /** Singer name. */
            singerName?: string;
            /** Number of plays. */
            sum?: number;
            [key: string]: unknown;
          }>;
          /** Preferred listening hour. */
          preferHour?: {
            /** Preferred hour, 0 through 23. */
            preferHour?: number;
            /** Listening details indexed by time slot; only sum is populated. */
            preferInfo?: Array<{
              /** Listening duration in seconds. */
              sum?: number;
              [key: string]: unknown;
            }>;
            /** Favorite songs in this time slot. */
            songListen?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Provider-defined song metric; units depend on the containing section. */
              sum?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Consecutive listening statistics. */
          consDays?: {
            /** Consecutive listening days. */
            conDays?: number;
            /** Daily listening activity and representative songs. */
            conInfoList?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Activity flag: 1 means listened on this day, 0 means no listening. */
              sum?: number;
              [key: string]: unknown;
            }>;
            /** Maximum song count in one day. */
            topListen?: number;
            /** Singer with the longest listening streak. */
            singerDay?: {
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Consecutive days listening to this singer. */
              sum?: number;
              [key: string]: unknown;
            };
            /** Songs during the listening streak. */
            songListen?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Provider-defined song metric; units depend on the containing section. */
              sum?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Preferred genres. */
          topGenre?: {
            /** Preferred genre ID. */
            genreId?: number;
            /** Genre metrics over the past six months. */
            genre2Count?: Array<{
              /** Genre name. */
              name?: string;
              /** Genre occurrence count over the past six months. */
              sum?: number;
              [key: string]: unknown;
            }>;
            /** Representative songs for the genre. */
            genreSong?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Provider-defined song metric; units depend on the containing section. */
              sum?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Niche and popular music preferences. */
          nicheSongs?: {
            /** Niche song percentage, 0 through 100. */
            nichePercent?: number;
            /** Representative niche songs. */
            list?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Provider-defined song metric; units depend on the containing section. */
              sum?: number;
              [key: string]: unknown;
            }>;
            /** Popular song percentage, 0 through 100. */
            hotPercent?: number;
            [key: string]: unknown;
          };
          /** New music exploration. */
          newSongs?: {
            /** New songs explored this month. */
            newSongCount?: number;
            /** Change ratio compared with last month. */
            floatNumber?: number;
            /** New songs explored last month. */
            lastNewSongCount?: number;
            /** Representative newly explored songs. */
            list?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer MID. */
              singerMid?: string;
              /** Singer name. */
              singerName?: string;
              /** Provider-defined song metric; units depend on the containing section. */
              sum?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Listening cities ordered by unlock time. */
          listenCityInfo?: Array<{
            /** City ID. */
            cityId?: number;
            /** City name. */
            cityName?: string;
            /** Province ID. */
            provinceId?: number;
            /** Province name. */
            provinceName?: string;
            /** Country ID. */
            countryId?: number;
            /** Country name. */
            countryName?: string;
            /** City unlock Unix timestamp in seconds. */
            unlockTime?: number;
            /** City rank. */
            cityRank?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get one page of a playlist. Increment page while hasMore is true. */
    "qqmusic.get_playlist": {
      input: {
        /** Playlist ID. */
        dissId: number;
        /**
         * Zero-based page number; defaults to 0.
         * @minimum 0
         * @default 0
         */
        page?: number;
      };
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** Playlist ID. */
        dissId?: number;
        /** Playlist name. */
        dissName?: string;
        /** Playlist description. */
        desc?: string;
        /** Playlist cover image URL. */
        picUrl?: string;
        /** Total song count. */
        totalNum?: number;
        /** Whether another page exists. */
        hasMore?: boolean;
        /** Songs on this page. */
        trackList?: Array<{
          /** Song MID. */
          songMid?: string;
          /** Song name. */
          songName?: string;
          /** Singer name. */
          singerName?: string;
          /** Song listening page URL. */
          songH5Url?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get songs from the personalized radio. */
    "qqmusic.get_radio": {
      input: Record<string, never>;
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** Recommended songs. */
        songlist?: Array<{
          /** Song MID. */
          songMid?: string;
          /** Song name. */
          songName?: string;
          /** Singer name. */
          singerName?: string;
          /** Song listening page URL. */
          songH5Url?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List AI-recommended playlists. This endpoint does not accept a prompt or create a playlist. */
    "qqmusic.list_ai_playlists": {
      input: Record<string, never>;
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** AI-recommended playlists. */
        playlists?: Array<{
          /** Playlist ID. */
          dissId?: number;
          /** Playlist name. */
          dissName?: string;
          /** Playlist description. */
          dissDesc?: string;
          /** Creator name; may be empty for AI playlists. */
          creatorName?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List chart groups and chart previews. Use topId to retrieve a chart. */
    "qqmusic.list_charts": {
      input: Record<string, never>;
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** Chart groups. */
        groupList?: Array<{
          /** Group name. */
          groupName?: string;
          /** Charts in this group. */
          groupTopList?: Array<{
            /** Chart ID returned by list_charts. */
            topId?: number;
            /** Chart name. */
            topName?: string;
            /** Listener count. */
            listenNum?: number;
            /** Total song count. */
            totalNum?: number;
            /** Preview of ranked songs. */
            songList?: Array<{
              /** Song MID. */
              songMid?: string;
              /** Song name. */
              songName?: string;
              /** Singer name. */
              singerName?: string;
              /** Song listening page URL. */
              songH5Url?: string;
              /** Song rank. */
              rank?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search songs, albums, playlists, music videos, radios, or singers. Increment page while hasMore is true. */
    "qqmusic.search": {
      input: {
        /**
         * Search keywords.
         * @minLength 1
         */
        keyword: string;
        /**
         * Search type: 0 songs, 1 albums, 2 playlists, 3 music videos, 4 radios, 5 singers. Defaults to 0.
         * @default "0"
         */
        type?: "0" | "1" | "2" | "3" | "4" | "5";
        /**
         * Zero-based page number; defaults to 0.
         * @minimum 0
         * @default 0
         */
        page?: number;
      };
      output: {
        /** Request trace ID. */
        traceId?: string;
        /** Response timestamp in milliseconds. */
        ts?: number;
        /** Gateway result code; nonzero indicates failure. */
        ret?: number;
        /** Business result code; nonzero indicates failure. */
        sub_ret?: number;
        /** Provider message. */
        msg?: string;
        /** Matching songs; other result types may be null. */
        songs?: Array<{
          /** Song MID. */
          songMid?: string;
          /** Song name. */
          songName?: string;
          /** Singer name. */
          singerName?: string;
          /** Song listening page URL. */
          songH5Url?: string;
          [key: string]: unknown;
        }> | null;
        /** Matching albums. */
        albums?: Array<{
          /** Album or radio MID. */
          albumMid?: string;
          /** Album or radio name. */
          albumName?: string;
          /** Singer name. */
          singerName?: string;
          /** Publication date. */
          publicTime?: string;
          /** Listen count. */
          listenNum?: number;
          /** Album category. */
          category?: string;
          /** Album or radio description. */
          albumDesc?: string;
          [key: string]: unknown;
        }> | null;
        /** Matching playlists. */
        playlists?: Array<{
          /** Playlist ID. */
          dissId?: number;
          /** Playlist name. */
          dissName?: string;
          /** Playlist description. */
          dissDesc?: string;
          /** Creator name; may be empty for AI playlists. */
          creatorName?: string;
          [key: string]: unknown;
        }> | null;
        /** Matching music videos. */
        mvs?: Array<{
          /** Music video ID. */
          mvVid?: string;
          /** Music video name. */
          mvName?: string;
          /** Singer name. */
          singerName?: string;
          /** Play count. */
          playCount?: number;
          /** Publication date. */
          publicTime?: string;
          /** Music video page URL. */
          mvUrl?: string;
          [key: string]: unknown;
        }> | null;
        /** Matching radios. */
        radios?: Array<{
          /** Album or radio MID. */
          albumMid?: string;
          /** Album or radio name. */
          albumName?: string;
          /** Singer name. */
          singerName?: string;
          /** Publication date. */
          publicTime?: string;
          /** Listen count. */
          listenNum?: number;
          /** Album category. */
          category?: string;
          /** Album or radio description. */
          albumDesc?: string;
          [key: string]: unknown;
        }> | null;
        /** Matching singers. */
        singers?: Array<{
          /** Singer MID. */
          singerMid?: string;
          /** Singer name. */
          singerName?: string;
          /** Song count. */
          songNum?: number;
          /** Album count. */
          albumNum?: number;
          [key: string]: unknown;
        }> | null;
        /** Whether another page exists. */
        hasMore?: boolean;
        [key: string]: unknown;
      };
    };
  }
}
