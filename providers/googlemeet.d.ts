import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Google Meet space and return its join URL. */
    "googlemeet.create_space": {
      input: {
        /** Writable Google Meet space fields. */
        space?: {
          /** Configuration for a Google Meet space. */
          config?: {
            /** Who can join the meeting without knocking. */
            accessType?: "ACCESS_TYPE_UNSPECIFIED" | "OPEN" | "TRUSTED" | "RESTRICTED";
            /** Which entry points can join the meeting. */
            entryPointAccess?: "ENTRY_POINT_ACCESS_UNSPECIFIED" | "ALL" | "CREATOR_APP_ONLY";
            /** Whether meeting moderation is enabled. */
            moderation?: "MODERATION_UNSPECIFIED" | "OFF" | "ON";
            /** Feature restrictions applied while moderation is enabled. */
            moderationRestrictions?: {
              /** Who can use the moderated meeting feature. */
              chatRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
              /** Who can use the moderated meeting feature. */
              presentRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
              /** Who can use the moderated meeting feature. */
              reactionRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
              /** Whether participants join as viewers by default. */
              defaultJoinAsViewerType?: "DEFAULT_JOIN_AS_VIEWER_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Whether the meeting generates an attendance report. */
            attendanceReportGenerationType?: "ATTENDANCE_REPORT_GENERATION_TYPE_UNSPECIFIED" | "GENERATE_REPORT" | "DO_NOT_GENERATE";
            /** Automatic artifact generation settings for the meeting space. */
            artifactConfig?: {
              /** Automatic recording settings for the meeting space. */
              recordingConfig?: {
                /** Whether Google Meet should automatically generate the artifact. */
                autoRecordingGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
              };
              /** Automatic transcription settings for the meeting space. */
              transcriptionConfig?: {
                /** Whether Google Meet should automatically generate the artifact. */
                autoTranscriptionGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
              };
              /** Automatic smart-note settings for the meeting space. */
              smartNotesConfig?: {
                /** Whether Google Meet should automatically generate the artifact. */
                autoSmartNotesGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
              };
            };
          };
        };
      };
      output: {
        /**
         * The resource name, in the form spaces/{space}.
         * @minLength 1
         */
        name: string;
        /**
         * The URL participants use to join the meeting.
         * @format uri
         */
        meetingUri?: string;
        /** The human-readable meeting code. */
        meetingCode?: string;
        /** Configuration for a Google Meet space. */
        config?: {
          /** Who can join the meeting without knocking. */
          accessType?: "ACCESS_TYPE_UNSPECIFIED" | "OPEN" | "TRUSTED" | "RESTRICTED";
          /** Which entry points can join the meeting. */
          entryPointAccess?: "ENTRY_POINT_ACCESS_UNSPECIFIED" | "ALL" | "CREATOR_APP_ONLY";
          /** Whether meeting moderation is enabled. */
          moderation?: "MODERATION_UNSPECIFIED" | "OFF" | "ON";
          /** Feature restrictions applied while moderation is enabled. */
          moderationRestrictions?: {
            /** Who can use the moderated meeting feature. */
            chatRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Who can use the moderated meeting feature. */
            presentRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Who can use the moderated meeting feature. */
            reactionRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Whether participants join as viewers by default. */
            defaultJoinAsViewerType?: "DEFAULT_JOIN_AS_VIEWER_TYPE_UNSPECIFIED" | "ON" | "OFF";
          };
          /** Whether the meeting generates an attendance report. */
          attendanceReportGenerationType?: "ATTENDANCE_REPORT_GENERATION_TYPE_UNSPECIFIED" | "GENERATE_REPORT" | "DO_NOT_GENERATE";
          /** Automatic artifact generation settings for the meeting space. */
          artifactConfig?: {
            /** Automatic recording settings for the meeting space. */
            recordingConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoRecordingGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Automatic transcription settings for the meeting space. */
            transcriptionConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoTranscriptionGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Automatic smart-note settings for the meeting space. */
            smartNotesConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoSmartNotesGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
          };
        };
        /** The conference currently active in the meeting space. */
        activeConference?: {
          /**
           * The active conference record resource name.
           * @minLength 1
           */
          conferenceRecord?: string;
        };
        /** Regional phone dial-in options. */
        phoneAccess?: Array<{
          /** The regional country code. */
          regionCode?: string;
          /** The E.164 phone number used to dial in. */
          phoneNumber?: string;
          /** The numeric PIN entered after dialing. */
          pin?: string;
          /** The language code associated with the dial-in option. */
          languageCode?: string;
        }>;
        /** SIP gateway access options. */
        gatewaySipAccess?: Array<{
          /** The SIP or SIPS URI used to join. */
          uri?: string;
          /** The numeric SIP access code. */
          sipAccessCode?: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** End the active conference currently running in a Google Meet space. */
    "googlemeet.end_active_conference": {
      input: {
        /**
         * The canonical space resource name, in the form spaces/{space}; bare IDs and meeting-code aliases are not accepted.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether the request completed successfully. */
        success: true;
      };
    };
    /** Retrieve one Google Meet conference record. */
    "googlemeet.get_conference_record": {
      input: {
        /**
         * The conference record resource name, such as conferenceRecords/{conference_record}.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The conference record resource name.
         * @minLength 1
         */
        name: string;
        /** The meeting space resource name. */
        space?: string;
        /**
         * When the conference started.
         * @format date-time
         */
        startTime?: string;
        /**
         * When the conference ended, when finished.
         * @format date-time
         */
        endTime?: string;
        /**
         * When Google deletes the conference record resource.
         * @format date-time
         */
        expireTime?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one participant from a Google Meet conference record. */
    "googlemeet.get_participant": {
      input: {
        /**
         * The participant resource name, such as conferenceRecords/{conference_record}/participants/{participant}.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The participant resource name.
         * @minLength 1
         */
        name: string;
        /**
         * When the participant first joined.
         * @format date-time
         */
        earliestStartTime?: string;
        /**
         * When the participant most recently left.
         * @format date-time
         */
        latestEndTime?: string;
        /** A participant signed in with a Google account. */
        signedinUser?: {
          /** The Google user resource name. */
          user?: string;
          /** The participant display name. */
          displayName?: string;
        };
        /** A participant who joined without signing in. */
        anonymousUser?: {
          /** The name supplied when joining. */
          displayName?: string;
        };
        /** A participant who joined by phone. */
        phoneUser?: {
          /** The partially redacted phone number shown by Google Meet. */
          displayName?: string;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve one Google Meet participant session. */
    "googlemeet.get_participant_session": {
      input: {
        /**
         * The participant session resource name ending in participantSessions/{participant_session}.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The participant session resource name.
         * @minLength 1
         */
        name: string;
        /**
         * When the participant session started.
         * @format date-time
         */
        startTime?: string;
        /**
         * When the participant session ended.
         * @format date-time
         */
        endTime?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Google Meet recording. */
    "googlemeet.get_recording": {
      input: {
        /**
         * The recording resource name ending in recordings/{recording}.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The recording resource name.
         * @minLength 1
         */
        name: string;
        /** The current artifact generation state. */
        state?: "STATE_UNSPECIFIED" | "STARTED" | "ENDED" | "FILE_GENERATED";
        /**
         * When recording started.
         * @format date-time
         */
        startTime?: string;
        /**
         * When recording ended.
         * @format date-time
         */
        endTime?: string;
        /** The Google Drive destination of a recording. */
        driveDestination?: {
          /** The Google Drive file ID of the MP4 recording. */
          file?: string;
          /**
           * The browser URL for the recording.
           * @format uri
           */
          exportUri?: string;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve one Google Meet smart-note artifact. */
    "googlemeet.get_smart_note": {
      input: {
        /**
         * The smart-note resource name ending in smartNotes/{smart_note}.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The smart-note resource name.
         * @minLength 1
         */
        name: string;
        /** The current artifact generation state. */
        state?: "STATE_UNSPECIFIED" | "STARTED" | "ENDED" | "FILE_GENERATED";
        /**
         * When smart-note generation started.
         * @format date-time
         */
        startTime?: string;
        /**
         * When smart-note generation ended.
         * @format date-time
         */
        endTime?: string;
        /** The Google Docs destination of a generated artifact. */
        docsDestination?: {
          /** The Google Docs document ID. */
          document?: string;
          /**
           * The browser URL for the document.
           * @format uri
           */
          exportUri?: string;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a Google Meet space by resource name or meeting code. */
    "googlemeet.get_space": {
      input: {
        /**
         * The space name, such as spaces/{space}, or a bare space ID or meeting code.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The resource name, in the form spaces/{space}.
         * @minLength 1
         */
        name: string;
        /**
         * The URL participants use to join the meeting.
         * @format uri
         */
        meetingUri?: string;
        /** The human-readable meeting code. */
        meetingCode?: string;
        /** Configuration for a Google Meet space. */
        config?: {
          /** Who can join the meeting without knocking. */
          accessType?: "ACCESS_TYPE_UNSPECIFIED" | "OPEN" | "TRUSTED" | "RESTRICTED";
          /** Which entry points can join the meeting. */
          entryPointAccess?: "ENTRY_POINT_ACCESS_UNSPECIFIED" | "ALL" | "CREATOR_APP_ONLY";
          /** Whether meeting moderation is enabled. */
          moderation?: "MODERATION_UNSPECIFIED" | "OFF" | "ON";
          /** Feature restrictions applied while moderation is enabled. */
          moderationRestrictions?: {
            /** Who can use the moderated meeting feature. */
            chatRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Who can use the moderated meeting feature. */
            presentRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Who can use the moderated meeting feature. */
            reactionRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Whether participants join as viewers by default. */
            defaultJoinAsViewerType?: "DEFAULT_JOIN_AS_VIEWER_TYPE_UNSPECIFIED" | "ON" | "OFF";
          };
          /** Whether the meeting generates an attendance report. */
          attendanceReportGenerationType?: "ATTENDANCE_REPORT_GENERATION_TYPE_UNSPECIFIED" | "GENERATE_REPORT" | "DO_NOT_GENERATE";
          /** Automatic artifact generation settings for the meeting space. */
          artifactConfig?: {
            /** Automatic recording settings for the meeting space. */
            recordingConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoRecordingGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Automatic transcription settings for the meeting space. */
            transcriptionConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoTranscriptionGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Automatic smart-note settings for the meeting space. */
            smartNotesConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoSmartNotesGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
          };
        };
        /** The conference currently active in the meeting space. */
        activeConference?: {
          /**
           * The active conference record resource name.
           * @minLength 1
           */
          conferenceRecord?: string;
        };
        /** Regional phone dial-in options. */
        phoneAccess?: Array<{
          /** The regional country code. */
          regionCode?: string;
          /** The E.164 phone number used to dial in. */
          phoneNumber?: string;
          /** The numeric PIN entered after dialing. */
          pin?: string;
          /** The language code associated with the dial-in option. */
          languageCode?: string;
        }>;
        /** SIP gateway access options. */
        gatewaySipAccess?: Array<{
          /** The SIP or SIPS URI used to join. */
          uri?: string;
          /** The numeric SIP access code. */
          sipAccessCode?: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Google Meet transcript. */
    "googlemeet.get_transcript": {
      input: {
        /**
         * The transcript resource name ending in transcripts/{transcript}.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The transcript resource name.
         * @minLength 1
         */
        name: string;
        /** The current artifact generation state. */
        state?: "STATE_UNSPECIFIED" | "STARTED" | "ENDED" | "FILE_GENERATED";
        /**
         * When transcription started.
         * @format date-time
         */
        startTime?: string;
        /**
         * When transcription ended.
         * @format date-time
         */
        endTime?: string;
        /** The Google Docs destination of a generated artifact. */
        docsDestination?: {
          /** The Google Docs document ID. */
          document?: string;
          /**
           * The browser URL for the document.
           * @format uri
           */
          exportUri?: string;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve one speaker segment from a Google Meet transcript. */
    "googlemeet.get_transcript_entry": {
      input: {
        /**
         * The transcript entry resource name ending in entries/{entry}.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * The transcript entry resource name.
         * @minLength 1
         */
        name: string;
        /** The participant resource name for the speaker. */
        participant?: string;
        /** The transcribed speech. */
        text?: string;
        /** The BCP 47 language code of the speech. */
        languageCode?: string;
        /**
         * When the spoken segment started.
         * @format date-time
         */
        startTime?: string;
        /**
         * When the spoken segment ended.
         * @format date-time
         */
        endTime?: string;
        [key: string]: unknown;
      };
    };
    /** List accessible Google Meet conference records with optional filtering and pagination. */
    "googlemeet.list_conference_records": {
      input: {
        /**
         * A Google Meet API filter expression for this resource collection.
         * @minLength 1
         */
        filter?: string;
        /**
         * The maximum number of conference records to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Conference records in the requested page. */
        conferenceRecords: Array<{
          /**
           * The conference record resource name.
           * @minLength 1
           */
          name: string;
          /** The meeting space resource name. */
          space?: string;
          /**
           * When the conference started.
           * @format date-time
           */
          startTime?: string;
          /**
           * When the conference ended, when finished.
           * @format date-time
           */
          endTime?: string;
          /**
           * When Google deletes the conference record resource.
           * @format date-time
           */
          expireTime?: string;
          [key: string]: unknown;
        }>;
        /** A pagination token for the next page, or null when the page is final. */
        nextPageToken: string | null;
      };
    };
    /** List join-to-leave sessions for a Google Meet participant. */
    "googlemeet.list_participant_sessions": {
      input: {
        /**
         * The parent participant, such as conferenceRecords/{conference_record}/participants/{participant}.
         * @minLength 1
         */
        parent: string;
        /**
         * A Google Meet API filter expression for this resource collection.
         * @minLength 1
         */
        filter?: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 250
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Participant sessions in the requested page. */
        participantSessions: Array<{
          /**
           * The participant session resource name.
           * @minLength 1
           */
          name: string;
          /**
           * When the participant session started.
           * @format date-time
           */
          startTime?: string;
          /**
           * When the participant session ended.
           * @format date-time
           */
          endTime?: string;
          [key: string]: unknown;
        }>;
        /** A pagination token for the next page, or null when the page is final. */
        nextPageToken: string | null;
      };
    };
    /** List participants in a Google Meet conference record. */
    "googlemeet.list_participants": {
      input: {
        /**
         * The parent conference record, such as conferenceRecords/{conference_record}.
         * @minLength 1
         */
        parent: string;
        /**
         * A Google Meet API filter expression for this resource collection.
         * @minLength 1
         */
        filter?: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 250
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Participants in the requested page. */
        participants: Array<{
          /**
           * The participant resource name.
           * @minLength 1
           */
          name: string;
          /**
           * When the participant first joined.
           * @format date-time
           */
          earliestStartTime?: string;
          /**
           * When the participant most recently left.
           * @format date-time
           */
          latestEndTime?: string;
          /** A participant signed in with a Google account. */
          signedinUser?: {
            /** The Google user resource name. */
            user?: string;
            /** The participant display name. */
            displayName?: string;
          };
          /** A participant who joined without signing in. */
          anonymousUser?: {
            /** The name supplied when joining. */
            displayName?: string;
          };
          /** A participant who joined by phone. */
          phoneUser?: {
            /** The partially redacted phone number shown by Google Meet. */
            displayName?: string;
          };
          [key: string]: unknown;
        }>;
        /** A pagination token for the next page, or null when the page is final. */
        nextPageToken: string | null;
        /** The total participant count when requested through a field mask. */
        totalSize?: number;
      };
    };
    /** List recordings generated for a Google Meet conference record. */
    "googlemeet.list_recordings": {
      input: {
        /**
         * The parent conference record, such as conferenceRecords/{conference_record}.
         * @minLength 1
         */
        parent: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Recordings in the requested page. */
        recordings: Array<{
          /**
           * The recording resource name.
           * @minLength 1
           */
          name: string;
          /** The current artifact generation state. */
          state?: "STATE_UNSPECIFIED" | "STARTED" | "ENDED" | "FILE_GENERATED";
          /**
           * When recording started.
           * @format date-time
           */
          startTime?: string;
          /**
           * When recording ended.
           * @format date-time
           */
          endTime?: string;
          /** The Google Drive destination of a recording. */
          driveDestination?: {
            /** The Google Drive file ID of the MP4 recording. */
            file?: string;
            /**
             * The browser URL for the recording.
             * @format uri
             */
            exportUri?: string;
          };
          [key: string]: unknown;
        }>;
        /** A pagination token for the next page, or null when the page is final. */
        nextPageToken: string | null;
      };
    };
    /** List smart notes generated for a Google Meet conference record. */
    "googlemeet.list_smart_notes": {
      input: {
        /**
         * The parent conference record, such as conferenceRecords/{conference_record}.
         * @minLength 1
         */
        parent: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Smart notes in the requested page. */
        smartNotes: Array<{
          /**
           * The smart-note resource name.
           * @minLength 1
           */
          name: string;
          /** The current artifact generation state. */
          state?: "STATE_UNSPECIFIED" | "STARTED" | "ENDED" | "FILE_GENERATED";
          /**
           * When smart-note generation started.
           * @format date-time
           */
          startTime?: string;
          /**
           * When smart-note generation ended.
           * @format date-time
           */
          endTime?: string;
          /** The Google Docs destination of a generated artifact. */
          docsDestination?: {
            /** The Google Docs document ID. */
            document?: string;
            /**
             * The browser URL for the document.
             * @format uri
             */
            exportUri?: string;
          };
          [key: string]: unknown;
        }>;
        /** A pagination token for the next page, or null when the page is final. */
        nextPageToken: string | null;
      };
    };
    /** List speaker segments in a Google Meet transcript. */
    "googlemeet.list_transcript_entries": {
      input: {
        /**
         * The parent transcript, such as conferenceRecords/{conference_record}/transcripts/{transcript}.
         * @minLength 1
         */
        parent: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Transcript entries in the requested page. */
        transcriptEntries: Array<{
          /**
           * The transcript entry resource name.
           * @minLength 1
           */
          name: string;
          /** The participant resource name for the speaker. */
          participant?: string;
          /** The transcribed speech. */
          text?: string;
          /** The BCP 47 language code of the speech. */
          languageCode?: string;
          /**
           * When the spoken segment started.
           * @format date-time
           */
          startTime?: string;
          /**
           * When the spoken segment ended.
           * @format date-time
           */
          endTime?: string;
          [key: string]: unknown;
        }>;
        /** A pagination token for the next page, or null when the page is final. */
        nextPageToken: string | null;
      };
    };
    /** List transcripts generated for a Google Meet conference record. */
    "googlemeet.list_transcripts": {
      input: {
        /**
         * The parent conference record, such as conferenceRecords/{conference_record}.
         * @minLength 1
         */
        parent: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Transcripts in the requested page. */
        transcripts: Array<{
          /**
           * The transcript resource name.
           * @minLength 1
           */
          name: string;
          /** The current artifact generation state. */
          state?: "STATE_UNSPECIFIED" | "STARTED" | "ENDED" | "FILE_GENERATED";
          /**
           * When transcription started.
           * @format date-time
           */
          startTime?: string;
          /**
           * When transcription ended.
           * @format date-time
           */
          endTime?: string;
          /** The Google Docs destination of a generated artifact. */
          docsDestination?: {
            /** The Google Docs document ID. */
            document?: string;
            /**
             * The browser URL for the document.
             * @format uri
             */
            exportUri?: string;
          };
          [key: string]: unknown;
        }>;
        /** A pagination token for the next page, or null when the page is final. */
        nextPageToken: string | null;
      };
    };
    /** Update the configuration of a Google Meet space. */
    "googlemeet.update_space": {
      input: {
        /**
         * The space resource name, in the form spaces/{space}.
         * @minLength 1
         */
        name: string;
        /** Writable Google Meet space fields. */
        space: {
          /** Configuration for a Google Meet space. */
          config?: {
            /** Who can join the meeting without knocking. */
            accessType?: "ACCESS_TYPE_UNSPECIFIED" | "OPEN" | "TRUSTED" | "RESTRICTED";
            /** Which entry points can join the meeting. */
            entryPointAccess?: "ENTRY_POINT_ACCESS_UNSPECIFIED" | "ALL" | "CREATOR_APP_ONLY";
            /** Whether meeting moderation is enabled. */
            moderation?: "MODERATION_UNSPECIFIED" | "OFF" | "ON";
            /** Feature restrictions applied while moderation is enabled. */
            moderationRestrictions?: {
              /** Who can use the moderated meeting feature. */
              chatRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
              /** Who can use the moderated meeting feature. */
              presentRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
              /** Who can use the moderated meeting feature. */
              reactionRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
              /** Whether participants join as viewers by default. */
              defaultJoinAsViewerType?: "DEFAULT_JOIN_AS_VIEWER_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Whether the meeting generates an attendance report. */
            attendanceReportGenerationType?: "ATTENDANCE_REPORT_GENERATION_TYPE_UNSPECIFIED" | "GENERATE_REPORT" | "DO_NOT_GENERATE";
            /** Automatic artifact generation settings for the meeting space. */
            artifactConfig?: {
              /** Automatic recording settings for the meeting space. */
              recordingConfig?: {
                /** Whether Google Meet should automatically generate the artifact. */
                autoRecordingGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
              };
              /** Automatic transcription settings for the meeting space. */
              transcriptionConfig?: {
                /** Whether Google Meet should automatically generate the artifact. */
                autoTranscriptionGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
              };
              /** Automatic smart-note settings for the meeting space. */
              smartNotesConfig?: {
                /** Whether Google Meet should automatically generate the artifact. */
                autoSmartNotesGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
              };
            };
          };
        };
        /**
         * A comma-separated Google field mask, such as config.accessType.
         * @minLength 1
         */
        updateMask?: string;
      };
      output: {
        /**
         * The resource name, in the form spaces/{space}.
         * @minLength 1
         */
        name: string;
        /**
         * The URL participants use to join the meeting.
         * @format uri
         */
        meetingUri?: string;
        /** The human-readable meeting code. */
        meetingCode?: string;
        /** Configuration for a Google Meet space. */
        config?: {
          /** Who can join the meeting without knocking. */
          accessType?: "ACCESS_TYPE_UNSPECIFIED" | "OPEN" | "TRUSTED" | "RESTRICTED";
          /** Which entry points can join the meeting. */
          entryPointAccess?: "ENTRY_POINT_ACCESS_UNSPECIFIED" | "ALL" | "CREATOR_APP_ONLY";
          /** Whether meeting moderation is enabled. */
          moderation?: "MODERATION_UNSPECIFIED" | "OFF" | "ON";
          /** Feature restrictions applied while moderation is enabled. */
          moderationRestrictions?: {
            /** Who can use the moderated meeting feature. */
            chatRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Who can use the moderated meeting feature. */
            presentRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Who can use the moderated meeting feature. */
            reactionRestriction?: "RESTRICTION_TYPE_UNSPECIFIED" | "HOSTS_ONLY" | "NO_RESTRICTION";
            /** Whether participants join as viewers by default. */
            defaultJoinAsViewerType?: "DEFAULT_JOIN_AS_VIEWER_TYPE_UNSPECIFIED" | "ON" | "OFF";
          };
          /** Whether the meeting generates an attendance report. */
          attendanceReportGenerationType?: "ATTENDANCE_REPORT_GENERATION_TYPE_UNSPECIFIED" | "GENERATE_REPORT" | "DO_NOT_GENERATE";
          /** Automatic artifact generation settings for the meeting space. */
          artifactConfig?: {
            /** Automatic recording settings for the meeting space. */
            recordingConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoRecordingGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Automatic transcription settings for the meeting space. */
            transcriptionConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoTranscriptionGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
            /** Automatic smart-note settings for the meeting space. */
            smartNotesConfig?: {
              /** Whether Google Meet should automatically generate the artifact. */
              autoSmartNotesGeneration?: "AUTO_GENERATION_TYPE_UNSPECIFIED" | "ON" | "OFF";
            };
          };
        };
        /** The conference currently active in the meeting space. */
        activeConference?: {
          /**
           * The active conference record resource name.
           * @minLength 1
           */
          conferenceRecord?: string;
        };
        /** Regional phone dial-in options. */
        phoneAccess?: Array<{
          /** The regional country code. */
          regionCode?: string;
          /** The E.164 phone number used to dial in. */
          phoneNumber?: string;
          /** The numeric PIN entered after dialing. */
          pin?: string;
          /** The language code associated with the dial-in option. */
          languageCode?: string;
        }>;
        /** SIP gateway access options. */
        gatewaySipAccess?: Array<{
          /** The SIP or SIPS URI used to join. */
          uri?: string;
          /** The numeric SIP access code. */
          sipAccessCode?: string;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
