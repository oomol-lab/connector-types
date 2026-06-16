import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Klangio beat and downbeat tracking job from a URL or Base64 audio file. */
    "klangio.create_beat_tracking_job": {
      input: {
        /** The source audio file to process. */
        file: {
          /**
           * The filename sent in the multipart file field. Required when using contentBase64; optional for URL inputs.
           * @minLength 1
           */
          fileName?: string;
          /**
           * A public HTTP or HTTPS URL for the audio file. When both url and contentBase64 are provided, url is used.
           * @format uri
           */
          url?: string;
          /** Base64-encoded audio file bytes, used only when url is not provided. */
          contentBase64?: string;
          /**
           * The MIME type sent for the uploaded audio file.
           * @minLength 1
           */
          mimeType?: string;
        };
        /**
         * The webhook URL Klangio should call for job updates.
         * @format uri
         */
        webhookUrl?: string;
      };
      output: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /**
         * The date when Klangio created the job.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        creationDate: string;
        /**
         * The date until Klangio keeps the job data available.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        deletionDate: string;
        /** The Klangio endpoint URL for polling job status. */
        statusEndpointUrl: string;
        /** Generated output flags returned for a transcription job. */
        generatedOutputs?: {
          /** Whether Klangio accepted MusicXML generation. */
          mxml: boolean;
          /** Whether Klangio accepted unquantized MIDI generation. */
          midi: boolean;
          /** Whether Klangio accepted quantized MIDI generation. */
          midiQuant: boolean;
          /** Whether Klangio accepted GP5 generation. */
          gp5: boolean;
          /** Whether Klangio accepted PDF generation. */
          pdf: boolean;
        };
      };
    };
    /** Create a Klangio chord recognition job with extended key detection from a URL or Base64 audio file. */
    "klangio.create_chord_recognition_extended_job": {
      input: {
        /** The source audio file to process. */
        file: {
          /**
           * The filename sent in the multipart file field. Required when using contentBase64; optional for URL inputs.
           * @minLength 1
           */
          fileName?: string;
          /**
           * A public HTTP or HTTPS URL for the audio file. When both url and contentBase64 are provided, url is used.
           * @format uri
           */
          url?: string;
          /** Base64-encoded audio file bytes, used only when url is not provided. */
          contentBase64?: string;
          /**
           * The MIME type sent for the uploaded audio file.
           * @minLength 1
           */
          mimeType?: string;
        };
        /**
         * The webhook URL Klangio should call for job updates.
         * @format uri
         */
        webhookUrl?: string;
        /** The chord recognition vocabulary used by Klangio. */
        vocabulary: "major-minor" | "full";
      };
      output: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /**
         * The date when Klangio created the job.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        creationDate: string;
        /**
         * The date until Klangio keeps the job data available.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        deletionDate: string;
        /** The Klangio endpoint URL for polling job status. */
        statusEndpointUrl: string;
        /** Generated output flags returned for a transcription job. */
        generatedOutputs?: {
          /** Whether Klangio accepted MusicXML generation. */
          mxml: boolean;
          /** Whether Klangio accepted unquantized MIDI generation. */
          midi: boolean;
          /** Whether Klangio accepted quantized MIDI generation. */
          midiQuant: boolean;
          /** Whether Klangio accepted GP5 generation. */
          gp5: boolean;
          /** Whether Klangio accepted PDF generation. */
          pdf: boolean;
        };
      };
    };
    /** Create a Klangio chord recognition job from a URL or Base64 audio file. */
    "klangio.create_chord_recognition_job": {
      input: {
        /** The source audio file to process. */
        file: {
          /**
           * The filename sent in the multipart file field. Required when using contentBase64; optional for URL inputs.
           * @minLength 1
           */
          fileName?: string;
          /**
           * A public HTTP or HTTPS URL for the audio file. When both url and contentBase64 are provided, url is used.
           * @format uri
           */
          url?: string;
          /** Base64-encoded audio file bytes, used only when url is not provided. */
          contentBase64?: string;
          /**
           * The MIME type sent for the uploaded audio file.
           * @minLength 1
           */
          mimeType?: string;
        };
        /**
         * The webhook URL Klangio should call for job updates.
         * @format uri
         */
        webhookUrl?: string;
        /** The chord recognition vocabulary used by Klangio. */
        vocabulary: "major-minor" | "full";
      };
      output: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /**
         * The date when Klangio created the job.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        creationDate: string;
        /**
         * The date until Klangio keeps the job data available.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        deletionDate: string;
        /** The Klangio endpoint URL for polling job status. */
        statusEndpointUrl: string;
        /** Generated output flags returned for a transcription job. */
        generatedOutputs?: {
          /** Whether Klangio accepted MusicXML generation. */
          mxml: boolean;
          /** Whether Klangio accepted unquantized MIDI generation. */
          midi: boolean;
          /** Whether Klangio accepted quantized MIDI generation. */
          midiQuant: boolean;
          /** Whether Klangio accepted GP5 generation. */
          gp5: boolean;
          /** Whether Klangio accepted PDF generation. */
          pdf: boolean;
        };
      };
    };
    /** Create a Klangio source separation job from a URL or Base64 audio file. */
    "klangio.create_source_separation_job": {
      input: {
        /** The source audio file to process. */
        file: {
          /**
           * The filename sent in the multipart file field. Required when using contentBase64; optional for URL inputs.
           * @minLength 1
           */
          fileName?: string;
          /**
           * A public HTTP or HTTPS URL for the audio file. When both url and contentBase64 are provided, url is used.
           * @format uri
           */
          url?: string;
          /** Base64-encoded audio file bytes, used only when url is not provided. */
          contentBase64?: string;
          /**
           * The MIME type sent for the uploaded audio file.
           * @minLength 1
           */
          mimeType?: string;
        };
        /**
         * The webhook URL Klangio should call for job updates.
         * @format uri
         */
        webhookUrl?: string;
        /** The source separation model to use. */
        model?: "six-stems" | "four-stems";
        /** The source separation audio output format. */
        output?: "wav" | "mp3";
      };
      output: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /**
         * The date when Klangio created the job.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        creationDate: string;
        /**
         * The date until Klangio keeps the job data available.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        deletionDate: string;
        /** The Klangio endpoint URL for polling job status. */
        statusEndpointUrl: string;
        /** Generated output flags returned for a transcription job. */
        generatedOutputs?: {
          /** Whether Klangio accepted MusicXML generation. */
          mxml: boolean;
          /** Whether Klangio accepted unquantized MIDI generation. */
          midi: boolean;
          /** Whether Klangio accepted quantized MIDI generation. */
          midiQuant: boolean;
          /** Whether Klangio accepted GP5 generation. */
          gp5: boolean;
          /** Whether Klangio accepted PDF generation. */
          pdf: boolean;
        };
      };
    };
    /** Create a Klangio guitar strum recognition job from a URL or Base64 audio file. */
    "klangio.create_strum_recognition_job": {
      input: {
        /** The source audio file to process. */
        file: {
          /**
           * The filename sent in the multipart file field. Required when using contentBase64; optional for URL inputs.
           * @minLength 1
           */
          fileName?: string;
          /**
           * A public HTTP or HTTPS URL for the audio file. When both url and contentBase64 are provided, url is used.
           * @format uri
           */
          url?: string;
          /** Base64-encoded audio file bytes, used only when url is not provided. */
          contentBase64?: string;
          /**
           * The MIME type sent for the uploaded audio file.
           * @minLength 1
           */
          mimeType?: string;
        };
        /**
         * The webhook URL Klangio should call for job updates.
         * @format uri
         */
        webhookUrl?: string;
      };
      output: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /**
         * The date when Klangio created the job.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        creationDate: string;
        /**
         * The date until Klangio keeps the job data available.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        deletionDate: string;
        /** The Klangio endpoint URL for polling job status. */
        statusEndpointUrl: string;
        /** Generated output flags returned for a transcription job. */
        generatedOutputs?: {
          /** Whether Klangio accepted MusicXML generation. */
          mxml: boolean;
          /** Whether Klangio accepted unquantized MIDI generation. */
          midi: boolean;
          /** Whether Klangio accepted quantized MIDI generation. */
          midiQuant: boolean;
          /** Whether Klangio accepted GP5 generation. */
          gp5: boolean;
          /** Whether Klangio accepted PDF generation. */
          pdf: boolean;
        };
      };
    };
    /** Create a Klangio transcription job from a URL or Base64 audio file and requested score outputs. */
    "klangio.create_transcription_job": {
      input: {
        /** The source audio file to transcribe. */
        file: {
          /**
           * The filename sent in the multipart file field. Required when using contentBase64; optional for URL inputs.
           * @minLength 1
           */
          fileName?: string;
          /**
           * A public HTTP or HTTPS URL for the audio file. When both url and contentBase64 are provided, url is used.
           * @format uri
           */
          url?: string;
          /** Base64-encoded audio file bytes, used only when url is not provided. */
          contentBase64?: string;
          /**
           * The MIME type sent for the uploaded audio file.
           * @minLength 1
           */
          mimeType?: string;
        };
        /** The Klangio transcription model to use for the audio file. */
        model: "piano" | "guitar" | "bass" | "vocal" | "universal" | "lead" | "detect" | "drums" | "multi" | "wind" | "string" | "piano_arrangement";
        /**
         * Generated outputs to request from Klangio.
         * @minItems 1
         */
        outputs: Array<"mxml" | "midi" | "pdf" | "gp5" | "json" | "midi_quant">;
        /**
         * The optional score title for the transcription.
         * @minLength 1
         */
        title?: string;
        /**
         * The optional score composer for the transcription.
         * @minLength 1
         */
        composer?: string;
        /**
         * The webhook URL Klangio should call for job updates.
         * @format uri
         */
        webhookUrl?: string;
      };
      output: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /**
         * The date when Klangio created the job.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        creationDate: string;
        /**
         * The date until Klangio keeps the job data available.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        deletionDate: string;
        /** The Klangio endpoint URL for polling job status. */
        statusEndpointUrl: string;
        /** Generated output flags returned for a transcription job. */
        generatedOutputs?: {
          /** Whether Klangio accepted MusicXML generation. */
          mxml: boolean;
          /** Whether Klangio accepted unquantized MIDI generation. */
          midi: boolean;
          /** Whether Klangio accepted quantized MIDI generation. */
          midiQuant: boolean;
          /** Whether Klangio accepted GP5 generation. */
          gp5: boolean;
          /** Whether Klangio accepted PDF generation. */
          pdf: boolean;
        };
      };
    };
    /** Download a generated Klangio job result file and upload it to OOMOL OSS transit storage. */
    "klangio.download_job_result": {
      input: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /** The generated Klangio job result to download. */
        resultType: "mxml" | "midi" | "pdf" | "gp5" | "json" | "midi_quant";
      };
      output: {
        /** The downloaded result file in transit storage. */
        file: {
          /** The generated filename. */
          name: string;
          /** The MIME type of the generated file. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
        /** The MIME type of the downloaded result file. */
        contentType: string;
        /**
         * The result file size in bytes.
         * @minimum 0
         */
        contentLength: number;
      };
    };
    /** Download a Klangio source separation stem audio file and upload it to OOMOL OSS transit storage. */
    "klangio.download_source_separation_audio": {
      input: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
        /** The source separation stem to download. */
        stemType: "vocals" | "bass" | "drums" | "other" | "piano" | "guitar";
      };
      output: {
        /** The downloaded result file in transit storage. */
        file: {
          /** The generated filename. */
          name: string;
          /** The MIME type of the generated file. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
        /** The MIME type of the downloaded result file. */
        contentType: string;
        /**
         * The result file size in bytes.
         * @minimum 0
         */
        contentLength: number;
      };
    };
    /** Fetch the current processing status for a Klangio job. */
    "klangio.get_job_status": {
      input: {
        /**
         * The Klangio transcription job UUID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        jobId: string;
      };
      output: {
        /** The Klangio job status. */
        status: "IN_QUEUE" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELLED" | "TIMED_OUT";
        /** The provider error message associated with the job status, or null. */
        error?: string | null;
      };
    };
  }
}
