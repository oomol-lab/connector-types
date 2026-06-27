import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a reusable Viggle character from a publicly accessible image URL and return the preprocessing handle. */
    "viggle.create_character": {
      input: {
        /**
         * The display name for the character.
         * @minLength 1
         */
        name: string;
        /**
         * The publicly accessible character image URL.
         * @minLength 1
         * @format uri
         */
        image_url: string;
        /** The Viggle model to use for preprocessing or rendering. */
        model?: "V3_Preview" | "V4_Preview";
      };
      output: {
        /** The response returned after starting character creation. */
        character: {
          /** The character identifier. */
          id: string;
          /** The character preprocessing job identifier. */
          job_id?: string;
          /** The initial character status. */
          status: string;
          /** The number of credits reserved by Viggle. */
          credits_reserved?: number;
          /** The creation message returned by Viggle. */
          message?: string;
        };
      };
    };
    /** Create a Viggle render job from URL inputs or preprocessed character and scene IDs. */
    "viggle.create_render_job": {
      input: {
        /**
         * The public character image URL for on-demand rendering.
         * @minLength 1
         * @format uri
         */
        ref_image_url?: string;
        /**
         * The public driving video URL for on-demand rendering.
         * @minLength 1
         * @format uri
         */
        driving_video_url?: string;
        /**
         * The ready character ID for preprocessed rendering.
         * @minLength 1
         */
        character_id?: string;
        /**
         * The ready scene ID for preprocessed rendering.
         * @minLength 1
         */
        scene_id?: string;
        /** The Viggle model to use for preprocessing or rendering. */
        model?: "V3_Preview" | "V4_Preview";
        /** The background handling mode for the rendered video. */
        background_mode?: "original" | "solid" | "transparent";
        /**
         * The RGB string for solid backgrounds, such as "0,255,0".
         * @minLength 1
         */
        bg_color?: string;
      };
      output: {
        /** The response returned after creating a render job. */
        render: {
          /** The render job identifier. */
          job_id: string;
          /** The initial render job status. */
          status: string;
          /** The render mode selected by Viggle. */
          mode?: string;
          /**
           * The timestamp when the job was enqueued.
           * @format date-time
           */
          enqueued_at?: string;
          /** The relative URL for polling the job status. */
          poll_url?: string;
          /** The relative URL for retrieving the job status. */
          status_url?: string;
        };
      };
    };
    /** Soft-delete a Viggle character by ID. */
    "viggle.delete_character": {
      input: {
        /**
         * The character identifier to delete.
         * @minLength 1
         */
        character_id: string;
      };
      output: {
        /** Whether Viggle accepted the delete request. */
        success: boolean;
      };
    };
    /** Soft-delete a Viggle scene by ID. */
    "viggle.delete_scene": {
      input: {
        /**
         * The scene identifier to delete.
         * @minLength 1
         */
        scene_id: string;
      };
      output: {
        /** Whether Viggle accepted the delete request. */
        success: boolean;
      };
    };
    /** Get a Viggle character by ID, including preprocessing status. */
    "viggle.get_character": {
      input: {
        /**
         * The character identifier returned by Viggle.
         * @minLength 1
         */
        character_id: string;
      };
      output: {
        /** A Viggle character detail response. */
        character: {
          /** The character identifier. */
          id: string;
          /** The character display name. */
          name: string;
          /** The Viggle character processing status. */
          status: "pending" | "processing" | "ready" | "failed";
          /** Whether V3_Preview encoding is available for this character. */
          has_v3_encoding?: boolean;
          /** Whether V4_Preview encoding is available for this character. */
          has_v4_encoding?: boolean;
          /** The string value returned by Viggle. */
          job_id?: string | null;
          /** The string value returned by Viggle. */
          error?: string | null;
          /** The string value returned by Viggle. */
          error_message?: string | null;
          /** The string value returned by Viggle. */
          thumbnail_url?: string | null;
          /** The numeric value returned by Viggle. */
          credits_used?: number | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          completed_at?: string | null;
        };
      };
    };
    /** Get the current Viggle credit balance for the authenticated account. */
    "viggle.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** The Viggle credit balance response. */
        credit_balance: {
          /** The current credit balance. */
          balance: number;
          /** The credit balance alias returned by Viggle. */
          credits?: number;
          /** The total number of purchased credits. */
          total_purchased?: number;
          /** The total number of used credits. */
          total_used?: number;
          /**
           * The timestamp when the balance was last updated.
           * @format date-time
           */
          updated_at?: string;
        };
      };
    };
    /** Get a Viggle render job status and return the video URL when rendering is complete. */
    "viggle.get_render_job_status": {
      input: {
        /**
         * The render job identifier returned by Viggle.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** The current Viggle render job status response. */
        render: {
          /** The render job identifier. */
          job_id: string;
          /** The Viggle render job status. */
          status: "queued" | "processing" | "complete" | "failed" | "cancelled";
          /** The string value returned by Viggle. */
          mode?: string | null;
          /** The string value returned by Viggle. */
          checkpoint?: string | null;
          /** The numeric value returned by Viggle. */
          progress_pct?: number | null;
          /** The string value returned by Viggle. */
          cdn_url?: string | null;
          /** The string value returned by Viggle. */
          mask_cdn_url?: string | null;
          /** The string value returned by Viggle. */
          error?: string | null;
          /** The string value returned by Viggle. */
          error_code?: string | null;
          /** The string value returned by Viggle. */
          error_message?: string | null;
          /** The legacy progress object returned by Viggle. */
          progress?: {
            /** The number of completed chunks. */
            completed_chunks?: number;
            /** The total number of chunks. */
            total_chunks?: number;
            /** The completion percentage. */
            percent?: number;
          } | null;
          /** The string value returned by Viggle. */
          download_url?: string | null;
          /** The compatibility chunks array returned by Viggle. */
          chunks?: Array<Record<string, unknown>>;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          completed_at?: string | null;
        };
      };
    };
    /** Get a Viggle scene by ID, including preprocessing status. */
    "viggle.get_scene": {
      input: {
        /**
         * The scene identifier returned by Viggle.
         * @minLength 1
         */
        scene_id: string;
      };
      output: {
        /** A Viggle scene detail response. */
        scene: {
          /** The scene identifier. */
          id: string;
          /** The scene display name. */
          name: string;
          /** The Viggle scene processing status. */
          status: "pending" | "ready" | "failed";
          /** The numeric value returned by Viggle. */
          duration_seconds?: number | null;
          /** The numeric value returned by Viggle. */
          fps?: number | null;
          /** The integer value returned by Viggle. */
          total_frames?: number | null;
          /** The integer value returned by Viggle. */
          width?: number | null;
          /** The integer value returned by Viggle. */
          height?: number | null;
          /** The string value returned by Viggle. */
          job_id?: string | null;
          /** The string value returned by Viggle. */
          error_message?: string | null;
          /** The numeric value returned by Viggle. */
          credits_used?: number | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          completed_at?: string | null;
        };
      };
    };
    /** Import a Viggle template as a reusable scene. */
    "viggle.import_template": {
      input: {
        /**
         * The Viggle template UUID to import.
         * @minLength 1
         */
        template_uuid: string;
        /**
         * An optional display name for the imported scene.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The response returned after importing a Viggle template. */
        scene: {
          /** The imported scene identifier. */
          scene_id: string;
          /** The scene import job identifier. */
          job_id?: string;
          /** The initial scene import status. */
          status: string;
          /** The import message returned by Viggle. */
          message?: string;
          /** Tracked person identifiers returned for multi-person templates. */
          character_uuids?: Array<string>;
        };
      };
    };
    /** List Viggle characters for the authenticated account. */
    "viggle.list_characters": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based number of items to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The characters returned by Viggle. */
        characters: Array<{
          /** The character identifier. */
          id: string;
          /** The character display name. */
          name: string;
          /** The Viggle character processing status. */
          status: "pending" | "processing" | "ready" | "failed";
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          completed_at?: string | null;
        }>;
        /** The total number of characters returned. */
        total: number;
      };
    };
    /** List Viggle scenes for the authenticated account. */
    "viggle.list_scenes": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based number of items to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The scenes returned by Viggle. */
        scenes: Array<{
          /** The scene identifier. */
          id: string;
          /** The scene display name. */
          name: string;
          /** The Viggle scene processing status. */
          status: "pending" | "ready" | "failed";
          /** The numeric value returned by Viggle. */
          duration_seconds?: number | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          created_at?: string | null;
          /**
           * The timestamp returned by Viggle.
           * @format date-time
           */
          completed_at?: string | null;
        }>;
        /** The total number of scenes returned. */
        total: number;
      };
    };
  }
}
