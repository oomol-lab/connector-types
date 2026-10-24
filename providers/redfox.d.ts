import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the points balance associated with the connected RedFoxHub API key. */
    "redfox.get_account_balance": {
      input: Record<string, never>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the content and metadata of an Autohome article. */
    "redfox.get_autohome_article": {
      input: {
        /**
         * Work ID.
         * @minLength 1
         */
        workId: string;
        /**
         * Page number, starting at 0.
         * @minimum 0
         * @default 0
         */
        page?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of an Autohome video. */
    "redfox.get_autohome_video": {
      input: {
        /**
         * Video ID.
         * @minLength 1
         */
        videoId: string;
        /** Video type: 0 = original account, 4 = Chejiahao. */
        videoType: 0 | 4;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and results of a Baidu AI search task. */
    "redfox.get_baidu_search": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** AI search results, including content and source references. */
          result?: unknown;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the content and metadata of a Baijiahao article. */
    "redfox.get_baijiahao_article": {
      input: {
        /**
         * Article ID.
         * @minLength 1
         */
        articleId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of a Baijiahao account. */
    "redfox.get_baijiahao_user": {
      input: {
        /**
         * Baijiahao account uk identifier.
         * @minLength 1
         */
        uk: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of a Baijiahao video. */
    "redfox.get_baijiahao_video": {
      input: {
        /**
         * Baijiahao video ID.
         * @minLength 1
         */
        svId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Extract an audio download URL from a Bilibili video. */
    "redfox.get_bilibili_audio": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and transcript of a Bilibili transcription task. */
    "redfox.get_bilibili_transcription": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Extracted transcript text. */
          text?: string;
          /** Transcript segments with timestamps. */
          stampSents?: Array<unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get details about a Bilibili account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_bilibili_user": {
      input: {
        /**
         * Bilibili user MID.
         * @minLength 1
         */
        mid: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Resolve a Bilibili video URL into downloadable media links. */
    "redfox.get_bilibili_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Bilibili work by its BV ID or URL. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_bilibili_work": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and results of a DeepSeek AI search task. */
    "redfox.get_deepseek_search": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** AI search results, including content and source references. */
          result?: unknown;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List posts published by a Dongchedi account. */
    "redfox.get_dongchedi_user_works": {
      input: {
        /**
         * User ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of a Dongchedi post. */
    "redfox.get_dongchedi_work": {
      input: {
        /**
         * Work ID.
         * @minLength 1
         */
        workId: string;
        /** Work type: video or article. */
        workType: "video" | "article";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and results of a Doubao AI search task. */
    "redfox.get_doubao_search": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** AI search results, including content and source references. */
          result?: unknown;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and transcript of a Douyin transcription task. */
    "redfox.get_douyin_transcription": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Extracted transcript text. */
          text?: string;
          /** Transcript segments with timestamps. */
          stampSents?: Array<unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get details about a Douyin account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_douyin_user": {
      input: {
        /**
         * Platform account ID.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Resolve a Douyin video URL into downloadable media links. */
    "redfox.get_douyin_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Douyin work by its ID or URL. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_douyin_work": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Douyin post from the broad database. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_douyin_work_broad": {
      input: {
        /**
         * Video ID.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and output of a Gemini Banana 2.1 generation task. */
    "redfox.get_gemini_banana_2_1_generation": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Generated image URLs. */
          imageUrls?: Array<string> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and output of a GPT Image 2.5 generation task. */
    "redfox.get_gpt_image_2_5_generation": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Generated image URLs. */
          imageUrls?: Array<string> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and output of a GPT Image 2 generation task. */
    "redfox.get_gpt_image_2_generation": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Generated image URLs. */
          imageUrls?: Array<string> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an Instagram post by shortcode or URL. */
    "redfox.get_instagram_post": {
      input: {
        /**
         * Instagram shortcode or full post URL.
         * @minLength 1
         */
        codeOrUrl: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get an Instagram account by username or user ID. */
    "redfox.get_instagram_user": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Resolve an Instagram video URL into downloadable media links. */
    "redfox.get_instagram_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and results of a Kimi AI search task. */
    "redfox.get_kimi_search": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** AI search results, including content and source references. */
          result?: unknown;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and transcript of a Kuaishou transcription task. */
    "redfox.get_kuaishou_transcription": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Extracted transcript text. */
          text?: string;
          /** Transcript segments with timestamps. */
          stampSents?: Array<unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a Kuaishou video URL into downloadable media links. */
    "redfox.get_kuaishou_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details about a Kuaishou work. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_kuaishou_work": {
      input: {
        /**
         * Work ID returned by the account work list.
         * @minLength 1
         */
        photoId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and results of a Qwen AI search task. */
    "redfox.get_qwen_search": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** AI search results, including content and source references. */
          result?: unknown;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and output of a Seedance video generation task. */
    "redfox.get_seedance_video_generation": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Generated video URL. */
          videoUrl?: string | null;
          /** Generated last-frame image URL. */
          lastFrameUrl?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and output of a Seedream Lite generation task. */
    "redfox.get_seedream_lite_generation": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Generated image URLs. */
          imageUrls?: Array<string> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and output of a Seedream Pro generation task. */
    "redfox.get_seedream_pro_generation": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Generated image URLs. */
          imageUrls?: Array<string> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a TikTok video URL into downloadable media links. */
    "redfox.get_tiktok_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a TikTok video by its ID. */
    "redfox.get_tiktok_work": {
      input: {
        /**
         * TikTok work ID.
         * @minLength 1
         */
        awemeId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details about a Toutiao work. */
    "redfox.get_toutiao_work": {
      input: {
        /**
         * Work ID.
         * @minLength 1
         */
        opusId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details about a WeChat Official Account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_wechat_account": {
      input: {
        /**
         * WeChat account handle.
         * @minLength 1
         */
        account: string;
        /**
         * Account name to search for.
         * @minLength 1
         */
        accountName?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a WeChat Official Account from the broad database. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_wechat_account_broad": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a WeChat Official Account article by its UUID. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_wechat_article": {
      input: {
        /**
         * Work UUID.
         * @minLength 1
         */
        workUuid: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a WeChat Official Account article from the broad database. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_wechat_article_broad": {
      input: {
        /**
         * Work UUID.
         * @minLength 1
         */
        workUuid: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a WeChat Official Account article by its URL. */
    "redfox.get_wechat_article_by_url": {
      input: {
        /**
         * WeChat article URL.
         * @minLength 1
         */
        articleUrl: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and transcript of a WeChat channel transcription task. */
    "redfox.get_wechat_channel_transcription": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Extracted transcript text. */
          text?: string;
          /** Transcript segments with timestamps. */
          stampSents?: Array<unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a WeChat channel video URL into downloadable media links. */
    "redfox.get_wechat_channel_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details about a WeChat Channel work. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_wechat_channel_work": {
      input: {
        /**
         * Video ID.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a WeChat Channels post by its shared URL. */
    "redfox.get_wechat_channel_work_by_url": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of a Weibo account. */
    "redfox.get_weibo_user": {
      input: {
        /**
         * User ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of a Weibo post. */
    "redfox.get_weibo_work": {
      input: {
        /**
         * Work ID.
         * @minLength 1
         */
        opusId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get an X post by its ID. */
    "redfox.get_x_post": {
      input: {
        /**
         * X post ID.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get an X account by username or user ID. */
    "redfox.get_x_user": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Resolve an X video URL into downloadable media links. */
    "redfox.get_x_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and collected comments of a Xiaohongshu comment task. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_xiaohongshu_comments": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Collected comments. */
          commentList?: Array<unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and transcript of a Xiaohongshu transcription task. */
    "redfox.get_xiaohongshu_transcription": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** Extracted transcript text. */
          text?: string;
          /** Transcript segments with timestamps. */
          stampSents?: Array<unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get details about a Xiaohongshu account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_xiaohongshu_user": {
      input: {
        /**
         * Platform account ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * User ID.
         * @minLength 1
         */
        userId?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Resolve a Xiaohongshu video URL into downloadable media links. */
    "redfox.get_xiaohongshu_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Xiaohongshu work by its ID or link. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.get_xiaohongshu_work": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the content and metadata of a Yiche article. */
    "redfox.get_yiche_article": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of a Yiche video. */
    "redfox.get_yiche_video": {
      input: {
        /**
         * Work ID.
         * @minLength 1
         */
        workId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get subtitle tracks for a YouTube video. */
    "redfox.get_youtube_subtitles": {
      input: {
        /**
         * Video URL or YouTube video ID.
         * @minLength 1
         */
        videoUrl: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the transcript of a YouTube video. */
    "redfox.get_youtube_transcript": {
      input: {
        /**
         * Video URL or YouTube video ID.
         * @minLength 1
         */
        videoUrl: string;
        /** Transcript format: json or text; defaults to json. */
        format?: "json" | "text";
        /** Include timestamps; defaults to true. */
        includeTimestamp?: boolean;
        /** Include video metadata; defaults to false. */
        sendMetadata?: boolean;
        /**
         * Comma-separated language priorities, for example zh,en,asr.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get details of a YouTube video. */
    "redfox.get_youtube_video": {
      input: {
        /**
         * Video ID.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Resolve a YouTube video URL into downloadable media links. */
    "redfox.get_youtube_video_download": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the status and results of a Yuanbao AI search task. */
    "redfox.get_yuanbao_search": {
      input: {
        /**
         * Task ID returned by the corresponding submit action.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId?: string;
          /** Upstream task status; see the action polling lifecycle. */
          status: string;
          /** Reason the task failed. */
          failReason?: string | null;
          /** AI search results, including content and source references. */
          result?: unknown;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List trending topics aggregated across platforms for a time range. */
    "redfox.list_aggregated_hot_topics": {
      input: {
        /**
         * startDate formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startDate: string;
        /**
         * endDate formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List API consumption records associated with the connected RedFoxHub API key. */
    "redfox.list_api_usage": {
      input: {
        /**
         * Page number, starting at 1.
         * @minLength 1
         */
        pageNum?: string;
        /**
         * Number of results per page.
         * @minLength 1
         */
        pageSize?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List posts published by an Autohome account. */
    "redfox.list_autohome_user_works": {
      input: {
        /**
         * Author ID.
         * @minLength 1
         */
        authorId: string;
        /**
         * Page number, starting at 0.
         * @minimum 0
         * @default 0
         */
        page?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List works published by a Bilibili account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_bilibili_user_works": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List Douyin posts gaining popularity over a day. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_douyin_daily_rising_works": {
      input: {
        /** Content category. */
        type?: "小剧场" | "财富理财" | "二次元" | "身体锻炼" | "居家装修" | "数码科技" | "科学普及" | "旅行" | "美食" | "动物" | "明星娱乐" | "汽车" | "亲子" | "人文" | "三农" | "潮流风尚" | "游戏" | "生活记录" | "体育" | "舞蹈才艺" | "学习教育" | "休闲玩乐" | "影视" | "音乐" | "颜值造型" | "健康医学" | "综艺" | "个人成长" | "全部";
        /**
         * Ranking date in yyyy-MM-dd format. Omit for the upstream default of two days ago.
         * @minLength 1
         */
        startTime?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List ranked Douyin accounts by category. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_douyin_hot_users": {
      input: {
        /** Ranking period. */
        dateType: "days" | "weeks" | "months";
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate: string;
        /** Content category. */
        type: "全部" | "个人才艺" | "生活vlog" | "财富理财" | "二次元" | "居家装修" | "学习教育" | "小剧场" | "数码科技" | "旅行" | "美食" | "化妆美容" | "动物" | "亲子" | "汽车" | "情感" | "三农" | "健康医学" | "潮流风尚" | "舞蹈才艺" | "颜值造型" | "人文" | "音乐" | "影视" | "身体锻炼" | "体育" | "明星娱乐" | "游戏";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List popular Douyin posts by category and date. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_douyin_hot_works": {
      input: {
        /** Content category. */
        type?: "小剧场" | "财富理财" | "二次元" | "身体锻炼" | "居家装修" | "数码科技" | "科学普及" | "旅行" | "美食" | "动物" | "明星娱乐" | "汽车" | "亲子" | "人文" | "三农" | "潮流风尚" | "游戏" | "生活记录" | "体育" | "舞蹈才艺" | "学习教育" | "休闲玩乐" | "影视" | "音乐" | "颜值造型" | "健康医学" | "综艺" | "个人成长";
        /**
         * Ranking date in yyyy-MM-dd format. Omit for the upstream default of two days ago; yesterday is updated after 10:00.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Ranking date in yyyy-MM-dd format. Omit for the upstream default of two days ago; yesterday is updated after 10:00.
         * @minLength 1
         */
        endTime?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List works published by a Douyin account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_douyin_user_works": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List posts by a Douyin account in the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_douyin_user_works_broad": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List Douyin posts gaining popularity over a week. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_douyin_weekly_rising_works": {
      input: {
        /** Content category. */
        type?: "小剧场" | "财富理财" | "二次元" | "身体锻炼" | "居家装修" | "数码科技" | "科学普及" | "旅行" | "美食" | "动物" | "明星娱乐" | "汽车" | "亲子" | "人文" | "三农" | "潮流风尚" | "游戏" | "生活记录" | "体育" | "舞蹈才艺" | "学习教育" | "休闲玩乐" | "影视" | "音乐" | "颜值造型" | "健康医学" | "综艺" | "个人成长" | "全部";
        /**
         * Ranking date in yyyy-MM-dd format. Omit for the upstream default of two days ago.
         * @minLength 1
         */
        startTime?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List comments on an Instagram post. */
    "redfox.list_instagram_post_comments": {
      input: {
        /**
         * Instagram shortcode or full post URL.
         * @minLength 1
         */
        codeOrUrl: string;
        /**
         * Sort order.
         * @default "recent"
         */
        sortBy?: "recent" | "popular";
        /**
         * Pagination token returned by the previous response. Omit on the first page.
         * @minLength 1
         */
        paginationToken?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List works published by a Kuaishou account. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_kuaishou_user_works": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List trending topics on a selected platform for a date range. */
    "redfox.list_platform_hot_topics": {
      input: {
        /** Platform code. */
        platform: 1 | 2 | 6 | 5 | 7 | 8 | 9 | 10;
        /**
         * Start date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        startDate: string;
        /**
         * End date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List replies to a TikTok video comment. */
    "redfox.list_tiktok_comment_replies": {
      input: {
        /**
         * TikTok work ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Comment ID.
         * @minLength 1
         */
        commentId: string;
        /**
         * Pagination cursor. Start with 0; use the cursor returned by the previous response.
         * @minimum 0
         * @default 0
         */
        cursor?: number;
        /**
         * Number of results to request.
         * @minimum 1
         */
        count: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List TikTok videos associated with a topic. */
    "redfox.list_tiktok_topic_works": {
      input: {
        /** TikTok topic ID. */
        ch_id: number;
        /**
         * Pagination cursor. Start with 0; use the cursor returned by the previous response.
         * @minimum 0
         * @default 0
         */
        cursor?: number;
        /** Country code; defaults to US. */
        region?: "US" | "GB" | "FR" | "JP" | "VN" | "SG";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List accounts followed by a TikTok user. */
    "redfox.list_tiktok_user_following": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List videos liked by a TikTok user. */
    "redfox.list_tiktok_user_liked_works": {
      input: {
        /**
         * Encrypted TikTok user ID.
         * @minLength 1
         */
        sec_user_id: string;
        /**
         * Pagination cursor. Start with 0; use nextCursor from the previous response.
         * @minimum 0
         * @default 0
         */
        max_cursor?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List videos published by a TikTok account. */
    "redfox.list_tiktok_user_works": {
      input: {
        /**
         * Encrypted user ID.
         * @minLength 1
         */
        secUserId: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List comments on a TikTok video. */
    "redfox.list_tiktok_work_comments": {
      input: {
        /**
         * TikTok work ID.
         * @minLength 1
         */
        aweme_id: string;
        /**
         * Pagination cursor. Start with 0; use the cursor returned by the previous response.
         * @minimum 0
         * @default 0
         */
        cursor?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List works published by a Toutiao account. */
    "redfox.list_toutiao_user_works": {
      input: {
        /** Content category. */
        category: "profile_all" | "pc_profile_article" | "pc_profile_video" | "pc_profile_ugc" | "profile_wenda" | "pc_profile_short_video";
        /**
         * Public Toutiao web account identifier from the account profile URL; not an authentication token.
         * @minLength 1
         */
        token: string;
        /**
         * Pagination offset. Start with 0 and use the offset or next cursor returned by the previous response.
         * @minLength 1
         */
        offset: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List comments on a Toutiao work. */
    "redfox.list_toutiao_work_comments": {
      input: {
        /**
         * Work ID.
         * @minLength 1
         */
        opusId: string;
        /**
         * Pagination offset. Start with 0 and use the offset or next cursor returned by the previous response.
         * @minLength 1
         */
        offset?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List articles published by a WeChat Official Account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_wechat_account_articles": {
      input: {
        /**
         * WeChat account handle.
         * @minLength 1
         */
        account: string;
        /**
         * Account name to search for.
         * @minLength 1
         */
        accountName?: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /** Sort: _0 = relevance, _2 = newest, _4 = hottest. For account searches, newest refers to recent posts and hottest to the platform ranking. */
        sortType?: "_0" | "_2" | "_4";
        /**
         * Earliest publication time; not earlier than 2026-04-01.
         * @minLength 1
         */
        publishTimeStart?: string;
        /**
         * Latest publication time.
         * @minLength 1
         */
        publishTimeEnd?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List articles by a WeChat Official Account in the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_wechat_account_articles_broad": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List WeChat Official Account rankings. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_wechat_account_rankings": {
      input: {
        /** Ranking period: day, week or month. */
        rankType: "day" | "week" | "month";
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate: string;
        /** Content category. */
        category: "人文资讯" | "知识百科" | "健康养生" | "时尚潮流" | "美食餐饮" | "乐活生活" | "旅游出行" | "搞笑幽默" | "情感心理" | "体育娱乐" | "美容美体" | "文摘精选" | "民生资讯" | "财富理财" | "科技数码" | "创投商业" | "汽车交通" | "房产楼市" | "职场发展" | "教育考试" | "学术研究" | "企业品牌" | "时事新闻" | "总排名";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List works published by a WeChat Channel account. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_wechat_channel_user_works": {
      input: {
        /**
         * Exact account nickname.
         * @minLength 1
         */
        nickname: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List WeChat Official Account headline articles ranked by readership growth. */
    "redfox.list_wechat_headline_growth": {
      input: {
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @maximum 5
         */
        page: number;
        /**
         * Monday of the ranking week, formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        rank_date: string;
        /** Author category; omit to include all categories. */
        author_type?: "人文资讯" | "知识百科" | "健康养生" | "时尚潮流" | "美食餐饮" | "乐活生活" | "旅游出行" | "搞笑幽默" | "情感心理" | "体育娱乐" | "美容美体" | "文摘精选" | "民生资讯" | "财富理财" | "科技数码" | "创投商业" | "汽车交通" | "房产楼市" | "职场发展" | "教育考试" | "学术研究" | "企业品牌" | "时事新闻";
        /** Sort order. */
        sort?: "cur_read" | "prev_read" | "growth_val" | "growth_pct";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List WeChat Official Account articles with high readership. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_wechat_high_read_articles": {
      input: {
        /** Content category. */
        type: "人文资讯" | "知识百科" | "健康养生" | "时尚潮流" | "乐活生活" | "旅游出行" | "搞笑幽默" | "情感心理" | "体育娱乐" | "美容美体" | "文摘精选" | "财富理财" | "科技数码" | "创投商业" | "汽车交通" | "房产楼市" | "职场发展" | "教育考试" | "学术研究" | "企业品牌" | "总排名";
        /**
         * Start date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        startDate: string;
        /**
         * End date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List popular original articles from WeChat Official Accounts. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_wechat_original_viral_articles": {
      input: {
        /** Content category. */
        type: "人文资讯" | "知识百科" | "健康养生" | "时尚潮流" | "乐活生活" | "旅游出行" | "搞笑幽默" | "情感心理" | "体育娱乐" | "美容美体" | "文摘精选" | "财富理财" | "科技数码" | "创投商业" | "汽车交通" | "房产楼市" | "职场发展" | "教育考试" | "学术研究" | "企业品牌" | "总排名";
        /**
         * Start date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        startDate: string;
        /**
         * End date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List WeChat Official Account articles ranked by readership growth. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_wechat_reading_growth": {
      input: {
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List trending Weibo search terms. */
    "redfox.list_weibo_hot_searches": {
      input: Record<string, never>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List popular X accounts by category. Uses the curated database. */
    "redfox.list_x_hot_users": {
      input: {
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @maximum 10
         * @default 1
         */
        pageNum: number;
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate?: string;
        /** Gender filter: all, male, female; also accepts 全部, 男, 女. */
        gender: "all" | "male" | "female" | "全部" | "男" | "女";
        /** Content category. */
        category: "商业创业" | "全部行业" | "汽车出行" | "设计创意" | "航空领域" | "电商零售" | "教育培训" | "工程运营" | "娱乐文化" | "环境能源" | "家庭育儿" | "时尚美妆" | "金融投资" | "美食饮品" | "游戏电竞" | "健康医疗" | "牧场马术" | "宗教信仰" | "科学学术" | "体育健身" | "科技软件" | "旅行户外" | "视觉艺术" | "健康生活" | "居家手工" | "人力职场" | "公益平权" | "法律法务" | "市场营销" | "音乐领域" | "萌宠动物" | "政治新闻" | "all";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List replies to an X post. */
    "redfox.list_x_post_comments": {
      input: {
        /**
         * X post ID.
         * @minLength 1
         */
        tweetId: string;
        /** Pagination cursor. Start with 0; use the cursor returned by the previous response. */
        cursor?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List accounts followed by an X user. */
    "redfox.list_x_user_following": {
      input: {
        /**
         * X username without @.
         * @minLength 1
         */
        screenName: string;
        /** Pagination cursor. Start with 0; use the cursor returned by the previous response. */
        cursor?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List posts published by an X account. */
    "redfox.list_x_user_posts": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List Xiaohongshu notes that outperform their authors’ usual engagement. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_xiaohongshu_breakout_notes": {
      input: {
        /** Content category. */
        category: "综合全部" | "出行代步" | "医疗保健" | "休闲爱好" | "综合杂项" | "婚庆婚礼" | "居家装修" | "影视娱乐" | "星座情感" | "拍摄记录" | "学习教育" | "旅行度假" | "亲子育儿" | "日常生活" | "科学探索" | "数码科技" | "时尚穿搭" | "化妆美容" | "个人护理" | "美味佳肴" | "职业发展" | "宠物天地" | "新闻资讯" | "体育锻炼" | "潮流鞋包";
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List popular Xiaohongshu notes for a day. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_xiaohongshu_daily_viral_notes": {
      input: {
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate: string;
        /** Content category. */
        category: "综合全部" | "出行代步" | "医疗保健" | "休闲爱好" | "综合杂项" | "婚庆婚礼" | "居家装修" | "影视娱乐" | "星座情感" | "拍摄记录" | "学习教育" | "旅行度假" | "亲子育儿" | "日常生活" | "科学探索" | "数码科技" | "时尚穿搭" | "化妆美容" | "个人护理" | "美味佳肴" | "职业发展" | "宠物天地" | "新闻资讯" | "体育锻炼" | "潮流鞋包";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List ranked Xiaohongshu accounts by category. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_xiaohongshu_hot_users": {
      input: {
        /** Ranking period. */
        dateType?: 1 | 2 | 3;
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate?: string;
        /** Content category. */
        type?: "综合全部" | "出行代步" | "医疗保健" | "休闲爱好" | "综合杂项" | "婚庆婚礼" | "居家装修" | "影视娱乐" | "星座情感" | "拍摄记录" | "学习教育" | "旅行度假" | "亲子育儿" | "日常生活" | "科学探索" | "数码科技" | "时尚穿搭" | "化妆美容" | "个人护理" | "美味佳肴" | "职业发展" | "宠物天地" | "新闻资讯" | "体育锻炼" | "潮流鞋包";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List notes published by a Xiaohongshu account. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_xiaohongshu_user_works": {
      input: Record<string, unknown>;
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List popular Xiaohongshu notes for a week. Data is updated on a T+1 schedule, not in real time. */
    "redfox.list_xiaohongshu_weekly_viral_notes": {
      input: {
        /**
         * Ranking date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        rankDate?: string;
        /** Content category. */
        category?: "综合全部" | "出行代步" | "医疗保健" | "休闲爱好" | "综合杂项" | "婚庆婚礼" | "居家装修" | "影视娱乐" | "星座情感" | "拍摄记录" | "学习教育" | "旅行度假" | "亲子育儿" | "日常生活" | "科学探索" | "数码科技" | "时尚穿搭" | "化妆美容" | "个人护理" | "美味佳肴" | "职业发展" | "宠物天地" | "新闻资讯" | "体育锻炼" | "潮流鞋包";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List posts published by a Yiche account. */
    "redfox.list_yiche_user_works": {
      input: {
        /**
         * User ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Omit for the first page; use the last item publishTime from the previous response.
         * @minLength 1
         */
        timestamp?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** List comments on a YouTube video. */
    "redfox.list_youtube_video_comments": {
      input: {
        /**
         * Video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * Language code; defaults to zh-CN.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * Country code; defaults to US.
         * @minLength 1
         */
        countryCode?: string;
        /** Sort order. */
        sortBy?: "top" | "newest";
        /**
         * Continuation token returned by the previous response. Omit on the first page.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Resolve a shared video URL into media metadata and download links. */
    "redfox.parse_video": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Autohome posts by keyword. */
    "redfox.search_autohome_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 10.
         * @minLength 1
         */
        offset: string;
        /**
         * Page number, starting at 1.
         * @minLength 1
         */
        page: string;
        /** Content source type. */
        sourceType: "club" | "article" | "video";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Baijiahao accounts by keyword. */
    "redfox.search_baijiahao_users": {
      input: {
        /**
         * Page cursor encoded as a string. Start with 0, then use the page returned by the previous response.
         * @minLength 1
         */
        page: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Baijiahao posts by keyword. */
    "redfox.search_baijiahao_works": {
      input: {
        /**
         * Sort order.
         * @minLength 1
         */
        sort?: string;
        /**
         * Pagination offset. Start with 0 and increase by 10.
         * @minLength 1
         */
        pn: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        keyWord: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Bilibili accounts by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_bilibili_users": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @minLength 1
         */
        page: string;
        /**
         * Number of results per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Sort order. */
        order?: "follower" | "like";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Bilibili works by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_bilibili_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Require the entire keyword phrase in the title, summary, content or author instead of token matching. */
        exactMatch?: boolean;
        /**
         * Page number, starting at 1.
         * @minLength 1
         */
        page: string;
        /**
         * Number of results per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Sort order. */
        order?: "time" | "play" | "like" | "comment" | "favorite";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Dongchedi accounts by keyword. */
    "redfox.search_dongchedi_users": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and use the offset or next cursor returned by the previous response.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Dongchedi posts by keyword. */
    "redfox.search_dongchedi_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minLength 1
         */
        offset: string;
        /** Content source type. */
        sourceType: "1" | "2";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Douyin works related to AI creation. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_douyin_ai_creations": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNum?: number;
        /**
         * Number of results per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Time bound formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Time bound formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endTime?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Douyin accounts by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_douyin_users": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /** Sort: _0 = relevance, _2 = newest, _4 = hottest. For account searches, newest refers to recent posts and hottest to the platform ranking. */
        sortType?: "_0" | "_2" | "_4";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Douyin accounts by name in the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_douyin_users_broad": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * Number of results per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Douyin works by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_douyin_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Start date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        startDate?: string;
        /**
         * End date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        endDate?: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort: _0 = relevance, _2 = newest, _4 = hottest. For account searches, newest refers to recent posts and hottest to the platform ranking. The official examples also use default.
         * @minLength 1
         */
        sortType?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Douyin posts by keyword in the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_douyin_works_broad": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Require the entire keyword phrase in the title, summary, content or author instead of token matching. */
        exactMatch?: boolean;
        /**
         * Start date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        startDate?: string;
        /**
         * End date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        endDate?: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * Number of results per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search trending topics by keywords, platforms and date range. */
    "redfox.search_hot_topics": {
      input: {
        /** Platform codes. An empty list queries all platforms: 1 Kuaishou, 2 Douyin, 5 Weibo, 7 Baidu, 8 Bilibili, 9 Zhihu, 10 Toutiao. */
        platforms: Array<1 | 2 | 5 | 7 | 8 | 9 | 10>;
        /**
         * Search keywords.
         * @minItems 1
         */
        keywords: Array<string>;
        /**
         * Start date, yyyy-MM-dd. The range must not exceed 30 days. For today, use today as start and tomorrow as end.
         * @minLength 1
         */
        startDate: string;
        /**
         * End date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        endDate: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Instagram by keyword, with pagination. */
    "redfox.search_instagram": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination token returned by the previous response. Omit on the first page.
         * @minLength 1
         */
        paginationToken?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Kuaishou accounts by name. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_kuaishou_users": {
      input: {
        /**
         * Account name to search for.
         * @minLength 1
         */
        accountName: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of results per page.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        pageSize?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Kuaishou works by keyword. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_kuaishou_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Number of results per page, from 1 to 50.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        size?: number;
        /**
         * Sort order.
         * @default "综合"
         */
        sort?: "综合" | "最新" | "最多点赞" | "最多收藏";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search TikTok topics by keyword. */
    "redfox.search_tiktok_topics": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and use the offset or next cursor returned by the previous response.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search TikTok accounts by keyword. */
    "redfox.search_tiktok_users": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and use the offset or next cursor returned by the previous response.
         * @minLength 1
         * @default "0"
         */
        offset?: string;
        /**
         * Number of results to request.
         * @minLength 1
         * @default "20"
         */
        count?: string;
        /** Follower range: 1 = 0-1K, 2 = 1K-10K, 3 = 10K-100K, 4 = above 100K. Omit for all. */
        followerCountFilter?: 1 | 2 | 3 | 4;
        /** Set to 1 to restrict results to verified users. */
        profileTypeFilter?: 1;
        /** Set to 1 to rank by username relevance. */
        otherPrefFilter?: 1;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search TikTok videos by keyword. */
    "redfox.search_tiktok_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and use the offset or next cursor returned by the previous response.
         * @minLength 1
         */
        offset?: string;
        /**
         * Number of results to request.
         * @minLength 1
         */
        count?: string;
        /** Sort: 0 = relevance, 1 = most likes. */
        sortType?: "0" | "1";
        /**
         * Publication age in days: 0 = any, 1, 7, 30, 90 or 180.
         * @minLength 1
         */
        publishTime?: string;
        /**
         * Country code; defaults to US.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Toutiao accounts by keyword. */
    "redfox.search_toutiao_users": {
      input: {
        /**
         * Account name keyword.
         * @minLength 1
         */
        name: string;
        /**
         * Pagination offset. Start with 0 and use the offset or next cursor returned by the previous response.
         * @minLength 1
         */
        offset?: string;
        /**
         * Search ID returned by the previous response.
         * @minLength 1
         */
        searchId?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Toutiao works by keyword. */
    "redfox.search_toutiao_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset encoded as a string. Start with 0 and increase by 1.
         * @minLength 1
         */
        offset: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search WeChat Official Accounts by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_wechat_accounts": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /** Sort: _0 = relevance, _2 = newest, _4 = hottest. For account searches, newest refers to recent posts and hottest to the platform ranking. */
        sortType?: "_0" | "_2" | "_4";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search WeChat Official Accounts by keyword in the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_wechat_accounts_broad": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search WeChat Official Account articles related to AI creation. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_wechat_ai_creations": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * Number of results per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * Time bound formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Time bound formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endTime?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search WeChat Official Account articles by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_wechat_articles": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /** Sort: _0 = relevance, _2 = newest, _4 = hottest. For account searches, newest refers to recent posts and hottest to the platform ranking. */
        sortType?: "_0" | "_2" | "_4";
        /** Require the entire keyword phrase in the title, summary, content or author instead of token matching. */
        exactMatch?: boolean;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search WeChat Official Account articles in the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_wechat_articles_broad": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Require the entire keyword phrase in the title, summary, content or author instead of token matching. */
        exactMatch?: boolean;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /** Sort: 0 = default, 2 = newest, 4 = hottest. */
        sortType?: "0" | "2" | "4";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search WeChat Channel accounts by name. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_wechat_channel_users": {
      input: {
        /**
         * Account name to search for.
         * @minLength 1
         */
        accountName: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search WeChat Channel works by keyword. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_wechat_channel_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Sort order. */
        sort?: "综合" | "最新" | "最多点赞" | "最多收藏";
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /** Require the entire keyword phrase in the title, summary, content or author instead of token matching. */
        exactMatch?: boolean;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Weibo accounts by keyword. */
    "redfox.search_weibo_users": {
      input: {
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page: number;
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Weibo posts by keyword. */
    "redfox.search_weibo_works": {
      input: {
        /** Search category. */
        searchType: "1" | "3" | "60" | "61";
        /**
         * Page number, starting at 1.
         * @minLength 1
         */
        page: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Verification filter: 3 = organization, 2 = individual, 0 = ordinary user. */
        extParam?: "3" | "2" | "0";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search X posts by keyword. */
    "redfox.search_x_posts": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /** Search category. */
        searchType?: "Top" | "Latest" | "Media" | "People" | "Lists";
        /** Pagination cursor. Start with 0; use the cursor returned by the previous response. */
        cursor?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Xiaohongshu works related to AI creation. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_xiaohongshu_ai_creations": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNum?: number;
        /**
         * Number of results per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Time bound formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startTime: string;
        /**
         * Time bound formatted as yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endTime: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Xiaohongshu accounts by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_xiaohongshu_users": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /** Sort: _0 = relevance, _2 = newest, _4 = hottest. For account searches, newest refers to recent posts and hottest to the platform ranking. */
        sortType?: "_0" | "_2" | "_4";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search popular Xiaohongshu notes by keyword and date. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_xiaohongshu_viral_notes": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * Number of results per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * Start date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        startDate?: string;
        /**
         * End date, formatted as yyyy-MM-dd.
         * @minLength 1
         */
        endDate?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Xiaohongshu notes by keyword. Uses the curated database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.search_xiaohongshu_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minimum 0
         */
        offset?: number;
        /** Sort: _0 = relevance, _2 = newest, _4 = hottest. For account searches, newest refers to recent posts and hottest to the platform ranking. */
        sortType?: "_0" | "_2" | "_4";
        /** Require the entire keyword phrase in the title, summary, content or author instead of token matching. */
        exactMatch?: boolean;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Yiche accounts by keyword. */
    "redfox.search_yiche_users": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page: number;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Yiche posts by keyword. */
    "redfox.search_yiche_works": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page: number;
        /** Content source type. */
        sourceType: "club" | "shipin" | "xinwen";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search YouTube videos by keyword. */
    "redfox.search_youtube_videos": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        searchQuery: string;
        /**
         * Continuation token returned by the previous response. Omit on the first page.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Zhihu content by keyword. */
    "redfox.search_zhihu_works": {
      input: {
        /**
         * Pagination offset. Start with 0 and increase by 20.
         * @minLength 1
         * @default "0"
         */
        offset?: string;
        /** Sort order. */
        sort?: "upvoted_count" | "created_time";
        /** Publication age: a_day, a_week, a_month, three_months, half_a_year or a_year. */
        timeInterval?: "a_day" | "a_week" | "a_month" | "three_months" | "half_a_year" | "a_year";
        /** Content type: answer, article or zvide. */
        vertical?: "answer" | "article" | "zvide";
        /**
         * Search keyword; this spelling is required by the upstream API.
         * @minLength 1
         */
        keword: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** The upstream payload, including pagination and platform-specific fields. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Start an AI search with Baidu and return a task ID. */
    "redfox.submit_baidu_search": {
      input: {
        /**
         * Question or search text.
         * @minLength 1
         */
        inquiryText: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start transcribing a Bilibili video and return a task ID. */
    "redfox.submit_bilibili_transcription": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start an AI search with DeepSeek and return a task ID. */
    "redfox.submit_deepseek_search": {
      input: {
        /**
         * Question or search text.
         * @minLength 1
         */
        inquiryText: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start an AI search with Doubao and return a task ID. */
    "redfox.submit_doubao_search": {
      input: {
        /**
         * Question or search text.
         * @minLength 1
         */
        inquiryText: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start transcribing a Douyin video and return a task ID. */
    "redfox.submit_douyin_transcription": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start a Gemini Banana 2.1 generation task and return its task ID. */
    "redfox.submit_gemini_banana_2_1_generation": {
      input: {
        /**
         * Generation prompt. With reference images, describe what to preserve and what to change.
         * @minLength 1
         */
        prompt: string;
        /** Output image aspect ratio or dimensions. */
        size: "1:1" | "3:2" | "2:3" | "4:3" | "3:4" | "16:9" | "9:16" | "5:4" | "4:5" | "21:9" | "1:4" | "4:1" | "1:8" | "8:1";
        /**
         * Reference image URLs for image-to-image generation.
         * @default []
         */
        imageUrls?: Array<string>;
        /** Image generation options. */
        metadata: {
          /** Output resolution. */
          resolution: "1K" | "2K" | "4K";
        };
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start a GPT Image 2.5 generation task and return its task ID. */
    "redfox.submit_gpt_image_2_5_generation": {
      input: {
        /**
         * Generation prompt. With reference images, describe what to preserve and what to change.
         * @minLength 1
         */
        prompt: string;
        /**
         * Output resolution.
         * @default "1K"
         */
        resolution?: "1k" | "2k" | "4k" | "1K" | "2K" | "4K";
        /**
         * Output image aspect ratio or dimensions.
         * @default "1:1"
         */
        size?: "1:1" | "3:2" | "2:3" | "4:3" | "3:4" | "5:4" | "4:5" | "16:9" | "9:16" | "21:9";
        /**
         * Reference image URLs for image-to-image generation.
         * @default []
         */
        referenceImages?: Array<string>;
        /** Set to transparent for transparent output; omit for ordinary image generation. */
        background?: "transparent";
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start a GPT Image 2 generation task and return its task ID. */
    "redfox.submit_gpt_image_2_generation": {
      input: {
        /**
         * Generation prompt. With reference images, describe what to preserve and what to change.
         * @minLength 1
         */
        prompt: string;
        /** Output resolution. */
        resolution: "1k" | "2k" | "4k";
        /** Output image aspect ratio or dimensions. */
        size: "1:1" | "3:2" | "2:3" | "4:3" | "3:4" | "5:4" | "4:5" | "16:9" | "9:16" | "2:1" | "1:2" | "21:9" | "9:21";
        /**
         * Number of images to generate, from 1 to 4.
         * @minimum 1
         * @maximum 4
         * @default 1
         */
        n: number;
        /**
         * Reference image URLs for image-to-image generation.
         * @maxItems 2
         * @default []
         */
        referenceImages?: Array<string>;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start an AI search with Kimi and return a task ID. */
    "redfox.submit_kimi_search": {
      input: {
        /**
         * Question or search text.
         * @minLength 1
         */
        inquiryText: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start transcribing a Kuaishou video and return a task ID. */
    "redfox.submit_kuaishou_transcription": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start an AI search with Qwen and return a task ID. */
    "redfox.submit_qwen_search": {
      input: {
        /**
         * Question or search text.
         * @minLength 1
         */
        inquiryText: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start a Seedance video generation task and return its task ID. */
    "redfox.submit_seedance_video_generation": {
      input: {
        /**
         * Generation prompt. With reference images, describe what to preserve and what to change.
         * @minLength 1
         */
        prompt: string;
        /** Video aspect ratio; adaptive lets the upstream choose based on the input. */
        aspectRatio?: "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "adaptive";
        /**
         * Video duration in seconds, from 4 to 15.
         * @minimum 4
         * @maximum 15
         */
        duration: number;
        /** Output resolution. */
        resolution?: "480p" | "720p";
        /** Generate audio or background music. */
        generateAudio: boolean;
        /** Return the last video frame as an image. */
        returnLastFrame: boolean;
        /**
         * Reference images with frame roles. Use an empty list for text-to-video.
         * @default []
         */
        imageWithRoles?: Array<{
          /**
           * Public content URL or platform share text containing the URL.
           * @minLength 1
           */
          url: string;
          /** Image role: first_frame, last_frame or reference_image. */
          role: "first_frame" | "last_frame" | "reference_image";
        }>;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start a Seedream Lite generation task and return its task ID. */
    "redfox.submit_seedream_lite_generation": {
      input: {
        /**
         * Generation prompt. With reference images, describe what to preserve and what to change.
         * @minLength 1
         */
        prompt: string;
        /** Reference image URL or Base64 string, or a list of up to 4 reference images. Prefer URLs. */
        image?: string | Array<string>;
        /**
         * Image resolution: 2K, 3K or 4K, or WIDTHxHEIGHT. Total pixels from 3686400 to 16777216; aspect ratio from 1:16 to 16:1.
         * @minLength 1
         */
        size: string;
        /** Image series mode: auto or disabled. */
        sequentialImageGeneration?: "auto" | "disabled";
        /** Options used when sequentialImageGeneration is auto. */
        sequentialImageGenerationOptions?: {
          /**
           * Maximum number of images in the series, from 1 to 10.
           * @minimum 1
           * @maximum 10
           */
          maxImages?: number;
        };
        /** Image format: png or jpeg. */
        outputFormat?: "png" | "jpeg";
        /**
         * Output format: url (links valid for 24 hours) or b64_json. Defaults to url.
         * @default "url"
         */
        responseFormat?: "url" | "b64_json";
        /** Whether to add an AI-generated watermark. */
        watermark?: boolean;
        /** Prompt optimization options. */
        optimizePromptOptions?: {
          /** Prompt optimization mode: standard or fast. */
          mode?: "standard" | "fast";
        };
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start a Seedream Pro generation task and return its task ID. */
    "redfox.submit_seedream_pro_generation": {
      input: {
        /**
         * Generation prompt. With reference images, describe what to preserve and what to change.
         * @minLength 1
         */
        prompt: string;
        /** Reference image URL or Base64 string, or a list of up to 4 reference images. Prefer URLs. */
        image?: string | Array<string>;
        /**
         * Image resolution: 1K or 2K, or WIDTHxHEIGHT; aspect ratio from 1:16 to 16:1.
         * @minLength 1
         */
        size: string;
        /** Image format: png or jpeg. */
        outputFormat?: "png" | "jpeg";
        /**
         * Output format: url (links valid for 24 hours) or b64_json. Defaults to url.
         * @default "url"
         */
        responseFormat?: "url" | "b64_json";
        /** Whether to add an AI-generated watermark. */
        watermark?: boolean;
        /** Prompt optimization options. */
        optimizePromptOptions?: {
          /** Prompt optimization mode: standard or fast. */
          mode?: "standard" | "fast";
        };
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start transcribing a WeChat channel video and return a task ID. */
    "redfox.submit_wechat_channel_transcription": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start collecting comments on a Xiaohongshu note and return a task ID. Uses the broad database. Data is updated on a T+1 schedule, not in real time. */
    "redfox.submit_xiaohongshu_comments": {
      input: {
        /**
         * Work ID.
         * @minLength 1
         */
        opusId: string;
        /** Number of comments to collect. Use -1 for all comments. */
        dataNum: -1 | unknown;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start transcribing a Xiaohongshu video and return a task ID. */
    "redfox.submit_xiaohongshu_transcription": {
      input: {
        /**
         * Public content URL or platform share text containing the URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Start an AI search with Yuanbao and return a task ID. */
    "redfox.submit_yuanbao_search": {
      input: {
        /**
         * Question or search text.
         * @minLength 1
         */
        inquiryText: string;
      };
      output: {
        /** Upstream business status code; 2000 or an endpoint-specific 200 means success. */
        code: number;
        /** Upstream response message. */
        msg: string;
        /** Task metadata and results. Additional upstream fields are preserved. */
        data: {
          /** Task ID returned by the submit action. */
          taskId: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
