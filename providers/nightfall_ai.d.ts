import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Scan text for sensitive data using saved policies or inline detection rules, optionally redact matches and send configured alerts. Submit at most 50,000 strings totaling 500 KB. Findings align with input indices; an empty redactedPayload entry means no redaction was applied, not that the original text was empty. */
    "nightfall_ai.scan_text": {
      input: Record<string, unknown>;
      output: {
        /** Findings grouped by the corresponding input payload index. */
        findings?: Array<Array<{
          /** Original matched text; may be omitted by removeFinding. */
          finding?: string;
          /** Redacted match when redaction was configured. */
          redactedFinding?: string;
          /** Requested context before the match. */
          beforeContext?: string;
          /** Requested context after the match. */
          afterContext?: string;
          /** Confidence of the detected match. */
          confidence?: string;
          /** Detector name, UUID, and optional subdetector metadata. */
          detector?: Record<string, unknown>;
          /** Original location with byteRange and codepointRange start/end offsets. */
          location?: Record<string, unknown>;
          /** Location in the redacted string with byteRange and codepointRange offsets. */
          redactedLocation?: Record<string, unknown>;
          [key: string]: unknown;
        }>>;
        /** Redacted text aligned with input indices; empty strings indicate no redaction was applied. */
        redactedPayload?: Array<string>;
        [key: string]: unknown;
      };
    };
  }
}
