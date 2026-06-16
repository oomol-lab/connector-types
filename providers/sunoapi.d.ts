import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a SunoAPI add instrumental task and return the task identifier. */
    "sunoapi.add_instrumental": {
      input: {
        /**
         * The uploaded music URL.
         * @format uri
         */
        uploadUrl: string;
        /**
         * The music title.
         * @minLength 1
         */
        title: string;
        /**
         * Music styles or traits to avoid.
         * @minLength 1
         */
        negativeTags: string;
        /**
         * The music style tags.
         * @minLength 1
         */
        tags: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
        /** The desired vocal gender. */
        vocalGender?: "m" | "f";
        /**
         * The style adherence weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        styleWeight?: number;
        /**
         * The creative weirdness constraint between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        weirdnessConstraint?: number;
        /**
         * The audio consistency weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        audioWeight?: number;
        /**
         * The add instrumental model.
         * @default "V4_5PLUS"
         */
        model: "V4_5PLUS" | "V5" | "V5_5";
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI add vocals task and return the task identifier. */
    "sunoapi.add_vocals": {
      input: {
        /**
         * The uploaded audio URL.
         * @format uri
         */
        uploadUrl: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
        /**
         * The vocal prompt.
         * @minLength 1
         */
        prompt: string;
        /**
         * The music title.
         * @minLength 1
         */
        title: string;
        /**
         * Music styles or traits to avoid.
         * @minLength 1
         */
        negativeTags: string;
        /**
         * The music and vocal style.
         * @minLength 1
         */
        style: string;
        /** The desired vocal gender. */
        vocalGender?: "m" | "f";
        /**
         * The style adherence weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        styleWeight?: number;
        /**
         * The creative weirdness constraint between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        weirdnessConstraint?: number;
        /**
         * The audio consistency weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        audioWeight?: number;
        /**
         * The add vocals model.
         * @default "V4_5PLUS"
         */
        model: "V4_5PLUS" | "V5" | "V5_5";
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Boost a SunoAPI style prompt and return the generated style text. */
    "sunoapi.boost_music_style": {
      input: {
        /**
         * The style description.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId?: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        param?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        result?: string | null;
        /** A number returned by SunoAPI, or null when unavailable. */
        creditsConsumed?: number | null;
        /** A number returned by SunoAPI, or null when unavailable. */
        creditsRemaining?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        successFlag?: string | null;
        /** A number returned by SunoAPI, or null when unavailable. */
        errorCode?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        createTime?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit a SunoAPI WAV conversion task and return the task identifier. */
    "sunoapi.convert_to_wav_format": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI music video task and return the task identifier. */
    "sunoapi.create_music_video": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
        /** The display author name. */
        author?: string;
        /** The display domain name. */
        domainName?: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI music extension task and return the task identifier. */
    "sunoapi.extend_music": {
      input: {
        /** Whether to use custom parameters. */
        defaultParamFlag: boolean;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId: string;
        /**
         * The extension prompt.
         * @minLength 1
         */
        prompt?: string;
        /** The music style or genre. */
        style?: string;
        /** The generated music title. */
        title?: string;
        /** The extension start point in seconds. */
        continueAt?: number;
        /** The persona identifier. */
        personaId?: string;
        /**
         * The SunoAPI persona model.
         * @default "style_persona"
         */
        personaModel?: "style_persona" | "voice_persona";
        /** The SunoAPI music generation model. */
        model: "V4" | "V4_5" | "V4_5PLUS" | "V4_5ALL" | "V5" | "V5_5";
        /** Music styles or traits to avoid. */
        negativeTags?: string;
        /** The desired vocal gender. */
        vocalGender?: "m" | "f";
        /**
         * The style guidance weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        styleWeight?: number;
        /**
         * The creative weirdness constraint between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        weirdnessConstraint?: number;
        /**
         * The input audio influence weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        audioWeight?: number;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI lyrics generation task and return the task identifier. */
    "sunoapi.generate_lyrics": {
      input: {
        /**
         * The lyrics prompt.
         * @minLength 1
         * @maxLength 200
         */
        prompt: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI mashup task and return the task identifier. */
    "sunoapi.generate_mashup": {
      input: {
        /**
         * The two audio URLs to mash up.
         * @minItems 2
         * @maxItems 2
         */
        uploadUrlList: Array<string>;
        /** Whether to use custom mode. */
        customMode: boolean;
        /** The mashup prompt. */
        prompt?: string;
        /** The music style. */
        style?: string;
        /** The music title. */
        title?: string;
        /** Whether the output should be instrumental. */
        instrumental?: boolean;
        /** The mashup model. */
        model: "V4" | "V4_5" | "V4_5PLUS" | "V4_5ALL" | "V5";
        /** The desired vocal gender. */
        vocalGender?: "m" | "f";
        /**
         * The style guidance weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        styleWeight?: number;
        /**
         * The creative weirdness constraint between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        weirdnessConstraint?: number;
        /**
         * The input audio influence weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        audioWeight?: number;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI MIDI task and return the task identifier. */
    "sunoapi.generate_midi": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId?: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI music generation task and return the task identifier. */
    "sunoapi.generate_music": {
      input: {
        /**
         * The music prompt, or exact lyrics when customMode is true and instrumental is false.
         * @minLength 1
         */
        prompt?: string;
        /**
         * The music style or genre used in custom mode.
         * @minLength 1
         */
        style?: string;
        /**
         * The generated music title used in custom mode.
         * @minLength 1
         */
        title?: string;
        /** Whether to use SunoAPI custom mode. */
        customMode: boolean;
        /** Whether the generated audio should be instrumental. */
        instrumental: boolean;
        /**
         * The optional SunoAPI persona identifier.
         * @minLength 1
         */
        personaId?: string;
        /**
         * The SunoAPI persona model.
         * @default "style_persona"
         */
        personaModel?: "style_persona" | "voice_persona";
        /** The SunoAPI music generation model. */
        model: "V4" | "V4_5" | "V4_5PLUS" | "V4_5ALL" | "V5" | "V5_5";
        /**
         * Music styles or traits to avoid.
         * @minLength 1
         */
        negativeTags?: string;
        /** The desired vocal gender. */
        vocalGender?: "m" | "f";
        /**
         * The style guidance weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        styleWeight?: number;
        /**
         * The creative weirdness constraint between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        weirdnessConstraint?: number;
        /**
         * The input audio influence weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        audioWeight?: number;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI music cover task and return the task identifier. */
    "sunoapi.generate_music_cover": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI persona generation task and return the generated persona details. */
    "sunoapi.generate_persona": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId: string;
        /**
         * The persona name.
         * @minLength 1
         */
        name: string;
        /**
         * The persona description.
         * @minLength 1
         */
        description: string;
        /** The audio segment start time in seconds. */
        vocalStart?: number;
        /** The audio segment end time in seconds. */
        vocalEnd?: number;
        /** The persona style label. */
        style?: string;
      };
      output: {
        /** The generated persona identifier. */
        personaId?: string;
        /** The persona name. */
        name?: string;
        /** The persona description. */
        description?: string;
        [key: string]: unknown;
      };
    };
    /** Submit a SunoAPI sounds task and return the task identifier. */
    "sunoapi.generate_sounds": {
      input: {
        /**
         * The sound prompt.
         * @minLength 1
         * @maxLength 500
         */
        prompt: string;
        /** The sound generation model. */
        model: "V5";
        /** Whether to enable loop playback. */
        soundLoop?: boolean;
        /** The sound tempo in BPM. */
        soundTempo?: number;
        /** The pitch key of the generated sound. */
        soundKey?: "Any" | "Cm" | "C#m" | "Dm" | "D#m" | "Em" | "Fm" | "F#m" | "Gm" | "G#m" | "Am" | "A#m" | "Bm" | "C" | "C#" | "D" | "D#" | "E" | "F" | "F#" | "G" | "G#" | "A" | "A#" | "B";
        /** Whether to fetch lyric subtitle data. */
        grabLyrics?: boolean;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Fetch SunoAPI lyrics generation details for a task. */
    "sunoapi.get_lyrics_generation_details": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        param?: string | null;
        /** The nested SunoAPI lyrics generation result. */
        response?: {
          /**
           * The SunoAPI task identifier.
           * @minLength 1
           */
          taskId?: string;
          /** The generated lyrics items. */
          data?: Array<{
            /** The lyrics content. */
            text?: string;
            /** A string returned by SunoAPI, or null when unavailable. */
            title?: string | null;
            /** The task status returned by SunoAPI. */
            status?: string;
            /** A string returned by SunoAPI, or null when unavailable. */
            errorMessage?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The task status returned by SunoAPI. */
        status?: string;
        /** The operation type returned by SunoAPI. */
        type?: string;
        /** A number returned by SunoAPI, or null when unavailable. */
        errorCode?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Fetch SunoAPI MIDI generation details for a task. */
    "sunoapi.get_midi_generation_details": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /** An integer returned by SunoAPI, or null when unavailable. */
        recordTaskId?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        audioId?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        callbackUrl?: string | null;
        /** A SunoAPI time value. */
        completeTime?: string | number;
        /** The generated MIDI data. */
        midiData?: {
          /** A string returned by SunoAPI, or null when unavailable. */
          state?: string | null;
          /** The detected MIDI instruments. */
          instruments?: Array<{
            /** A string returned by SunoAPI, or null when unavailable. */
            name?: string | null;
            /** The MIDI notes for the instrument. */
            notes?: Array<{
              /** The MIDI pitch number. */
              pitch?: number;
              /** The note start time in seconds. */
              start?: number;
              /** The note end time in seconds. */
              end?: number;
              /** The note velocity. */
              velocity?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** An integer returned by SunoAPI, or null when unavailable. */
        successFlag?: number | null;
        /** A SunoAPI time value. */
        createTime?: string | number;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorCode?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Fetch SunoAPI music cover details for a task. */
    "sunoapi.get_music_cover_details": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        parentTaskId?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        callbackUrl?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        completeTime?: string | null;
        /** The music cover generation result. */
        response?: {
          /** The generated cover image URLs. */
          images?: Array<string>;
          [key: string]: unknown;
        };
        /** An integer returned by SunoAPI, or null when unavailable. */
        successFlag?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        createTime?: string | null;
        /** An integer returned by SunoAPI, or null when unavailable. */
        errorCode?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Fetch SunoAPI music generation details for a task. */
    "sunoapi.get_music_generation_details": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        parentMusicId?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        param?: string | null;
        /** The nested SunoAPI music generation result. */
        response?: {
          /**
           * The SunoAPI task identifier.
           * @minLength 1
           */
          taskId?: string;
          /** The generated Suno audio items. */
          sunoData?: Array<{
            /**
             * The SunoAPI audio identifier.
             * @minLength 1
             */
            id?: string;
            /** A URL returned by SunoAPI, or null when unavailable. */
            audioUrl?: string | null;
            /** A URL returned by SunoAPI, or null when unavailable. */
            streamAudioUrl?: string | null;
            /** A URL returned by SunoAPI, or null when unavailable. */
            sourceAudioUrl?: string | null;
            /** A URL returned by SunoAPI, or null when unavailable. */
            sourceStreamAudioUrl?: string | null;
            /** A URL returned by SunoAPI, or null when unavailable. */
            imageUrl?: string | null;
            /** A URL returned by SunoAPI, or null when unavailable. */
            sourceImageUrl?: string | null;
            /** A string returned by SunoAPI, or null when unavailable. */
            prompt?: string | null;
            /** A string returned by SunoAPI, or null when unavailable. */
            modelName?: string | null;
            /** A string returned by SunoAPI, or null when unavailable. */
            title?: string | null;
            /** A string returned by SunoAPI, or null when unavailable. */
            tags?: string | null;
            /** A string returned by SunoAPI, or null when unavailable. */
            createTime?: string | null;
            /** A number returned by SunoAPI, or null when unavailable. */
            duration?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The task status returned by SunoAPI. */
        status?: string;
        /** The operation type returned by SunoAPI. */
        type?: string;
        /** The operation type returned by SunoAPI. */
        operationType?: string;
        /** A number returned by SunoAPI, or null when unavailable. */
        errorCode?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Fetch SunoAPI music video details for a task. */
    "sunoapi.get_music_video_details": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        musicId?: string | null;
        /** An integer returned by SunoAPI, or null when unavailable. */
        musicIndex?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        callbackUrl?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        completeTime?: string | null;
        /** The generated music video result. */
        response?: {
          /** A URL returned by SunoAPI, or null when unavailable. */
          videoUrl?: string | null;
          [key: string]: unknown;
        };
        /** The task status returned by SunoAPI. */
        successFlag?: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        createTime?: string | null;
        /** A number returned by SunoAPI, or null when unavailable. */
        errorCode?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Fetch the remaining SunoAPI credits for the authenticated account. */
    "sunoapi.get_remaining_credits": {
      input: Record<string, never>;
      output: {
        /** The current available SunoAPI credits. */
        credits: number;
      };
    };
    /** Fetch SunoAPI timestamped lyrics for a track. */
    "sunoapi.get_timestamped_lyrics": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId: string;
      };
      output: {
        /** The aligned lyrics words. */
        alignedWords?: Array<{
          /** The lyrics word. */
          word?: string;
          /** Whether the word was aligned successfully. */
          success?: boolean;
          /** The word start time in seconds. */
          startS?: number;
          /** The word end time in seconds. */
          endS?: number;
          /** The alignment parameter. */
          palign?: number;
          [key: string]: unknown;
        }>;
        /** The waveform data for audio visualization. */
        waveformData?: Array<number>;
        /** The lyrics alignment accuracy score. */
        hootCer?: number;
        /** Whether the track is streamed. */
        isStreamed?: boolean;
        [key: string]: unknown;
      };
    };
    /** Fetch SunoAPI vocal separation details for a task. */
    "sunoapi.get_vocal_separation_details": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        musicId?: string | null;
        /** A number returned by SunoAPI, or null when unavailable. */
        musicIndex?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        callbackUrl?: string | null;
        /** A SunoAPI time value. */
        completeTime?: string | number;
        /** The nested SunoAPI vocal removal result. */
        response?: {
          /** A string returned by SunoAPI, or null when unavailable. */
          id?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          originUrl?: string | null;
          /** The extracted stem metadata returned by SunoAPI. */
          originData?: Array<{
            /** The stem duration in seconds. */
            duration?: number;
            /**
             * The stem audio URL.
             * @format uri
             */
            audio_url?: string;
            /** The stem type group name. */
            stem_type_group_name?: string;
            /**
             * The stem identifier.
             * @minLength 1
             */
            id?: string;
            [key: string]: unknown;
          }>;
          /** A URL returned by SunoAPI, or null when unavailable. */
          instrumentalUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          vocalUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          backingVocalsUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          drumsUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          bassUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          guitarUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          keyboardUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          percussionUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          stringsUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          synthUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          fxUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          brassUrl?: string | null;
          /** A URL returned by SunoAPI, or null when unavailable. */
          woodwindsUrl?: string | null;
          [key: string]: unknown;
        };
        /** The task status returned by SunoAPI. */
        successFlag?: string;
        /** A SunoAPI time value. */
        createTime?: string | number;
        /** A number returned by SunoAPI, or null when unavailable. */
        errorCode?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Fetch SunoAPI WAV conversion details for a task. */
    "sunoapi.get_wav_conversion_details": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        musicId?: string | null;
        /** An integer returned by SunoAPI, or null when unavailable. */
        musicIndex?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        callbackUrl?: string | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        completeTime?: string | null;
        /** The WAV conversion result. */
        response?: {
          /** A URL returned by SunoAPI, or null when unavailable. */
          audioWavUrl?: string | null;
          [key: string]: unknown;
        };
        /** The task status returned by SunoAPI. */
        successFlag?: string;
        /** A string returned by SunoAPI, or null when unavailable. */
        createTime?: string | null;
        /** A number returned by SunoAPI, or null when unavailable. */
        errorCode?: number | null;
        /** A string returned by SunoAPI, or null when unavailable. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit a SunoAPI section replacement task and return the task identifier. */
    "sunoapi.replace_music_section": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId: string;
        /**
         * The replacement lyrics.
         * @minLength 1
         */
        prompt: string;
        /**
         * The music style tags.
         * @minLength 1
         */
        tags: string;
        /**
         * The music title.
         * @minLength 1
         */
        title: string;
        /** The replacement start time in seconds. */
        infillStartS: number;
        /** The replacement end time in seconds. */
        infillEndS: number;
        /** Music styles or traits to avoid. */
        negativeTags?: string;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl?: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Separate vocals from music and return the submitted SunoAPI task identifier. */
    "sunoapi.separate_vocals_from_music": {
      input: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
        /**
         * The SunoAPI audio identifier.
         * @minLength 1
         */
        audioId: string;
        /**
         * The vocal removal mode.
         * @default "separate_vocal"
         */
        type: "separate_vocal" | "split_stem";
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI upload and cover task and return the task identifier. */
    "sunoapi.upload_and_cover_audio": {
      input: {
        /**
         * The uploaded audio URL.
         * @format uri
         */
        uploadUrl?: string;
        /**
         * The local audio file path on the connector host.
         * @minLength 1
         */
        localFilePath?: string;
        /** The local audio file details used to upload a file from the connector host. */
        file?: {
          /**
           * The local audio file path on the connector host.
           * @minLength 1
           */
          path: string;
          /**
           * The file name sent to the SunoAPI upload endpoint.
           * @minLength 1
           */
          fileName?: string;
          /**
           * The MIME type sent to the SunoAPI upload endpoint.
           * @minLength 1
           */
          mimeType?: string;
        };
        /** Whether to use custom mode. */
        customMode: boolean;
        /** Whether the output should be instrumental. */
        instrumental: boolean;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
        /** The SunoAPI music generation model. */
        model: "V4" | "V4_5" | "V4_5PLUS" | "V4_5ALL" | "V5" | "V5_5";
        /** The generation prompt. */
        prompt?: string;
        /** The music style. */
        style?: string;
        /** The music title. */
        title?: string;
        /** The persona identifier. */
        personaId?: string;
        /**
         * The SunoAPI persona model.
         * @default "style_persona"
         */
        personaModel?: "style_persona" | "voice_persona";
        /** Music styles or traits to avoid. */
        negativeTags?: string;
        /** The desired vocal gender. */
        vocalGender?: "m" | "f";
        /**
         * The style guidance weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        styleWeight?: number;
        /**
         * The creative weirdness constraint between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        weirdnessConstraint?: number;
        /**
         * The input audio influence weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        audioWeight?: number;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a SunoAPI upload and extend task and return the task identifier. */
    "sunoapi.upload_and_extend_audio": {
      input: {
        /**
         * The uploaded audio URL.
         * @format uri
         */
        uploadUrl?: string;
        /**
         * The local audio file path on the connector host.
         * @minLength 1
         */
        localFilePath?: string;
        /** The local audio file details used to upload a file from the connector host. */
        file?: {
          /**
           * The local audio file path on the connector host.
           * @minLength 1
           */
          path: string;
          /**
           * The file name sent to the SunoAPI upload endpoint.
           * @minLength 1
           */
          fileName?: string;
          /**
           * The MIME type sent to the SunoAPI upload endpoint.
           * @minLength 1
           */
          mimeType?: string;
        };
        /** Whether to use custom parameters. */
        defaultParamFlag: boolean;
        /**
         * The callback URL used to receive completed results.
         * @format uri
         */
        callBackUrl: string;
        /** The SunoAPI music generation model. */
        model: "V4" | "V4_5" | "V4_5PLUS" | "V4_5ALL" | "V5" | "V5_5";
        /** Whether the output should be instrumental. */
        instrumental?: boolean;
        /** The extension prompt. */
        prompt?: string;
        /** The music style. */
        style?: string;
        /** The music title. */
        title?: string;
        /** The persona identifier. */
        personaId?: string;
        /**
         * The SunoAPI persona model.
         * @default "style_persona"
         */
        personaModel?: "style_persona" | "voice_persona";
        /** Music styles or traits to avoid. */
        negativeTags?: string;
        /** The desired vocal gender. */
        vocalGender?: "m" | "f";
        /**
         * The style guidance weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        styleWeight?: number;
        /**
         * The creative weirdness constraint between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        weirdnessConstraint?: number;
        /**
         * The input audio influence weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        audioWeight?: number;
      };
      output: {
        /**
         * The SunoAPI task identifier.
         * @minLength 1
         */
        taskId: string;
      };
    };
  }
}
