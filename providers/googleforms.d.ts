import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Apply a batch of Google Forms update requests with optional revision controls and an optional updated form payload. */
    "googleforms.batch_update_form": {
      input: {
        /** The ID of the form to update. */
        formId: string;
        /** An array of JSON-like objects. */
        requests: Array<Record<string, unknown>>;
        /** The revision ID that must match before the update is applied. */
        requiredRevisionId?: string;
        /** The target revision ID used for transformed writes. */
        targetRevisionId?: string;
        /** Whether the full updated form should be returned in the response. */
        includeFormInResponse?: boolean;
      };
      output: {
        /** The ID of the form that was updated. */
        formId: string;
        /** The number of update requests submitted. */
        requestCount: number;
        /** An array of JSON-like objects. */
        replies: Array<Record<string, unknown>>;
        /** The resulting required revision ID after the update. */
        requiredRevisionId?: string;
        /** The resulting target revision ID after the update. */
        targetRevisionId?: string;
        /** The updated form payload when includeFormInResponse is true. */
        form?: Record<string, unknown>;
      };
    };
    /** Create a Google Form with a simple title-based input and optionally initialize the description and unpublished state. */
    "googleforms.create_form": {
      input: {
        /** The visible title of the new form. */
        title: string;
        /** The description shown below the form title. */
        description?: string;
        /** The Google Drive document title for the new form. */
        documentTitle?: string;
        /** Whether the form should start unpublished and not accept responses. */
        unpublished?: boolean;
      };
      output: {
        /** The ID of the Google Form. */
        formId: string;
        /** The visible title of the form. */
        title: string;
        /** The description shown below the title. */
        description?: string;
        /** The Google Drive document title for the form. */
        documentTitle?: string;
        /** The revision ID of the form. */
        revisionId?: string;
        /** The URI where respondents can open the form. */
        responderUri?: string;
        /** The linked Google Sheets spreadsheet ID, when present. */
        linkedSheetId?: string;
        /** Whether the form is published. */
        isPublished?: boolean;
        /** Whether the form is accepting responses. */
        isAcceptingResponses?: boolean;
      };
    };
    /** Retrieve the current structure, settings, publish state, and items of a Google Form. */
    "googleforms.get_form": {
      input: {
        /** The ID of the form to retrieve. */
        formId: string;
      };
      output: {
        /** The ID of the Google Form. */
        formId: string;
        /** The visible title of the form. */
        title: string;
        /** The description shown below the title. */
        description?: string;
        /** The Google Drive document title for the form. */
        documentTitle?: string;
        /** The revision ID of the form. */
        revisionId?: string;
        /** The URI where respondents can open the form. */
        responderUri?: string;
        /** The linked Google Sheets spreadsheet ID, when present. */
        linkedSheetId?: string;
        /** Simplified form settings. */
        settings?: {
          /** Quiz-related settings for the form. */
          quizSettings?: {
            /** Whether the form is configured as a quiz. */
            isQuiz?: boolean;
          };
        };
        /** The simplified publish settings returned by the connector. */
        publishSettings?: {
          /** Whether the form is published. */
          isPublished: boolean;
          /** Whether the form accepts responses. */
          isAcceptingResponses: boolean;
        };
        /** The items currently present in the form. */
        items: Array<{
          /** The unique ID of the form item. */
          itemId?: string;
          /** The title or question text of the item. */
          title?: string;
          /** Additional description for the item. */
          description?: string;
          /** Question-specific payload for the item. */
          questionItem?: Record<string, unknown>;
          /** Question-group-specific payload for the item. */
          questionGroupItem?: Record<string, unknown>;
          /** Page-break-specific payload for the item. */
          pageBreakItem?: Record<string, unknown>;
          /** Text-item-specific payload for the item. */
          textItem?: Record<string, unknown>;
          /** Image-item-specific payload for the item. */
          imageItem?: Record<string, unknown>;
          /** Video-item-specific payload for the item. */
          videoItem?: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve a single Google Forms response by its response ID. */
    "googleforms.get_response": {
      input: {
        /** The ID of the form that owns the response. */
        formId: string;
        /** The ID of the response to retrieve. */
        responseId: string;
      };
      output: {
        /** The unique ID of the form response. */
        responseId: string;
        /** The time when the response was created. */
        createTime?: string;
        /** The most recent submission time for the response. */
        lastSubmittedTime?: string;
        /** The respondent email when email collection is enabled. */
        respondentEmail?: string;
        /** The total score of the response for quiz forms. */
        totalScore?: number;
        /** A map from question IDs to normalized answer payloads. */
        answers: Record<string, {
            /** The question ID this answer belongs to. */
            questionId?: string;
            /** Grade information for an answer. */
            grade?: {
              /** The awarded score for the answer. */
              score?: number;
              /** Whether the answer was correct. */
              correct?: boolean;
              /** Feedback returned for the graded answer. */
              feedback?: Record<string, unknown>;
            };
            /** Text answers for the question. */
            textAnswers?: {
              /** The text answers submitted for the question. */
              answers: Array<{
                /** A text answer value. */
                value: string;
              }>;
            };
            /** File-upload answers for the question. */
            fileUploadAnswers?: {
              /** The uploaded files submitted for the question. */
              answers: Array<{
                /** The Google Drive file ID for the uploaded file. */
                fileId?: string;
                /** The filename of the uploaded file. */
                fileName?: string;
                /** The MIME type of the uploaded file. */
                mimeType?: string;
              }>;
            };
          }>;
      };
    };
    /** List responses for a Google Form with optional filtering and pagination. */
    "googleforms.list_responses": {
      input: {
        /** The ID of the form whose responses should be listed. */
        formId: string;
        /** A Google Forms filter expression used to filter responses. */
        filter?: string;
        /**
         * The maximum number of responses to return.
         * @minimum 1
         * @maximum 5000
         */
        pageSize?: number;
        /** A pagination token returned by a previous list_responses call. */
        pageToken?: string;
      };
      output: {
        /** The list of matching form responses. */
        responses: Array<{
          /** The unique ID of the form response. */
          responseId: string;
          /** The time when the response was created. */
          createTime?: string;
          /** The most recent submission time for the response. */
          lastSubmittedTime?: string;
          /** The respondent email when email collection is enabled. */
          respondentEmail?: string;
          /** The total score of the response for quiz forms. */
          totalScore?: number;
          /** A map from question IDs to normalized answer payloads. */
          answers: Record<string, {
              /** The question ID this answer belongs to. */
              questionId?: string;
              /** Grade information for an answer. */
              grade?: {
                /** The awarded score for the answer. */
                score?: number;
                /** Whether the answer was correct. */
                correct?: boolean;
                /** Feedback returned for the graded answer. */
                feedback?: Record<string, unknown>;
              };
              /** Text answers for the question. */
              textAnswers?: {
                /** The text answers submitted for the question. */
                answers: Array<{
                  /** A text answer value. */
                  value: string;
                }>;
              };
              /** File-upload answers for the question. */
              fileUploadAnswers?: {
                /** The uploaded files submitted for the question. */
                answers: Array<{
                  /** The Google Drive file ID for the uploaded file. */
                  fileId?: string;
                  /** The filename of the uploaded file. */
                  fileName?: string;
                  /** The MIME type of the uploaded file. */
                  mimeType?: string;
                }>;
              };
            }>;
        }>;
        /** A pagination token for fetching the next page of responses. */
        nextPageToken: string | null;
      };
    };
    /** List watches configured for a Google Form. */
    "googleforms.list_watches": {
      input: {
        /** The ID of the form whose watches should be listed. */
        formId: string;
      };
      output: {
        /** The watches configured for the form. */
        watches: Array<{
          /** The unique ID of the watch. */
          id: string;
          /** The event type monitored by the watch. */
          eventType: string;
          /** The state of the watch. */
          state?: string;
          /** The last error type reported for the watch. */
          errorType?: string;
          /** The creation time of the watch. */
          createTime?: string;
          /** The expiration time of the watch. */
          expireTime?: string;
          /** The watch delivery target. */
          target: {
            /** The Pub/Sub topic name used by the watch. */
            topicName: string;
          };
        }>;
      };
    };
    /** Update whether a Google Form is published and whether it is accepting responses. */
    "googleforms.set_publish_settings": {
      input: {
        /** The ID of the form to update. */
        formId: string;
        /** The Google Forms publish settings payload to write. */
        publishSettings: {
          /** The Google Forms publish state to write. */
          publishState: {
            /** Whether the form should be published. */
            isPublished: boolean;
            /** Whether the form should accept responses. */
            isAcceptingResponses: boolean;
          };
        };
        /** The publishSettings fields to update. */
        updateMask?: "publishState" | "*";
      };
      output: {
        /** The ID of the form that was updated. */
        formId: string;
        /** Whether the form is now published. */
        isPublished: boolean;
        /** Whether the form is now accepting responses. */
        isAcceptingResponses: boolean;
      };
    };
  }
}
