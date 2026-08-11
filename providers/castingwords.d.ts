import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current CastingWords prepay balance in US dollars. */
    "castingwords.get_prepay_balance": {
      input: Record<string, never>;
      output: {
        /** The current prepay balance in US dollars. */
        balance: string;
        /** The raw CastingWords balance response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a completed CastingWords transcript as plain text or HTML. */
    "castingwords.get_transcript": {
      input: {
        /**
         * The CastingWords audio file identifier.
         * @minimum 1
         */
        audiofileId: number;
        /** The requested text transcript format. Defaults to txt. */
        format?: "txt" | "html";
        /** Whether to request the official fake transcript response for supported test audio file IDs. */
        test?: boolean;
      };
      output: {
        /** The returned transcript format. */
        format: "txt" | "html";
        /** The transcript content as plain text or HTML. */
        transcript: string;
      };
    };
    /** Get the current CastingWords processing state and documented audio file details. */
    "castingwords.get_transcription_status": {
      input: {
        /**
         * The CastingWords audio file identifier.
         * @minimum 1
         */
        audiofileId: number;
      };
      output: {
        /**
         * The CastingWords audio file identifier.
         * @minimum 1
         */
        audiofileId: number;
        /** The normalized lifecycle state used for Connector polling. */
        status: "running" | "succeeded" | "failed" | "cancelled" | "refunded";
        /** The original CastingWords statename value. */
        providerStatus: string;
        /** The documented CastingWords audio file details. */
        details: Record<string, unknown>;
      };
    };
    /** Submit one publicly accessible audio or video URL for asynchronous human transcription. */
    "castingwords.submit_transcription": {
      input: {
        /**
         * A directly downloadable public audio or video URL that CastingWords should transcribe.
         * @minLength 1
         * @format uri
         */
        mediaUrl: string;
        /** The transcription tier: TRANS14 for Budget, TRANS2 for 1-Day, or TRANS6/TRANS7 for 7-Day service. */
        serviceTier: "TRANS14" | "TRANS2" | "TRANS6" | "TRANS7";
        /**
         * Optional add-on SKUs applied to the transcription.
         * @minItems 1
         */
        addons?: Array<"DIFFQ2" | "TSTMP1" | "VERBATIM1">;
        /**
         * Speaker names that help transcribers identify people in the recording.
         * @minItems 1
         */
        speakerNames?: Array<string>;
        /**
         * Instructions or context for the transcribers.
         * @minLength 1
         */
        notes?: string;
        /** Whether to create a no-charge test order that validates the media URL without producing a real transcript. */
        test?: boolean;
      };
      output: {
        /** The CastingWords order identifier. */
        orderId: string;
        /**
         * The CastingWords audio file identifier used for status and transcript requests.
         * @minimum 1
         */
        audiofileId: number;
        /** The order result message when CastingWords returned one. */
        message: string | null;
        /** The raw CastingWords order response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
