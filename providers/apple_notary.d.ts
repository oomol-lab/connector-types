import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a download URL for the notarization log of one submission. The log is a JSON file listing everything the notary service found, including warnings on a submission it accepted, so it is worth reading even after a successful notarization. This action returns the URL only and downloads nothing; the URL expires after a few hours, and calling this action again issues a fresh one. */
    "apple_notary.get_submission_log": {
      input: {
        /**
         * Identifier of the submission, as returned in submissionId by submit_software or in id by list_submissions.
         * @maxLength 36
         * @format uuid
         */
        submissionId: string;
      };
      output: {
        /** Identifier of the submission the log belongs to. */
        submissionId: string;
        /** Temporary URL that serves the JSON log file. It expires after a few hours. */
        developerLogUrl: string;
      };
    };
    /** Read the state of one notarization submission. In Progress means the notary service has not finished yet, or that the software was never uploaded to Amazon S3; Accepted, Invalid and Rejected are final. Read get_submission_log afterwards in every case, because an accepted submission can still carry warnings. */
    "apple_notary.get_submission_status": {
      input: {
        /**
         * Identifier of the submission, as returned in submissionId by submit_software or in id by list_submissions.
         * @maxLength 36
         * @format uuid
         */
        submissionId: string;
      };
      output: {
        /** Identifier of the submission that was read. */
        submissionId: string;
        /** One notarization submission. The notary service omits an attribute it has no value for. */
        submission: {
          /** Identifier the notary service assigned to the submission. */
          id: string;
          /** File name that was supplied as submissionName when the submission was created. */
          name?: string | null;
          /** State of the submission. In Progress means notarization has not finished yet. */
          status?: "Accepted" | "In Progress" | "Invalid" | "Rejected" | null;
          /** When the submission was created, as an ISO 8601 timestamp such as 2022-06-08T01:38:09.498Z. */
          createdDate?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List the notarization submissions of the team behind the connected key. The notary service returns at most the 100 most recent ones and offers no pagination and no filtering, so this is the way to recover a submission identifier that was lost, not a full history. */
    "apple_notary.list_submissions": {
      input: Record<string, never>;
      output: {
        /** The submissions the notary service returned, at most the 100 most recent ones. */
        submissions: Array<{
          /** Identifier the notary service assigned to the submission. */
          id: string;
          /** File name that was supplied as submissionName when the submission was created. */
          name?: string | null;
          /** State of the submission. In Progress means notarization has not finished yet. */
          status?: "Accepted" | "In Progress" | "Invalid" | "Rejected" | null;
          /** When the submission was created, as an ISO 8601 timestamp such as 2022-06-08T01:38:09.498Z. */
          createdDate?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Register a new notarization submission and get the temporary Amazon S3 credentials that upload the software. This action uploads nothing: it reserves the submission and returns the bucket, the object key and short-lived AWS credentials, and you then upload the exact file whose SHA-256 you passed here yourself. The credentials expire 12 hours after this call. The notary service only starts notarizing once that upload finishes, so a submission whose file was never uploaded stays In Progress; after uploading, poll get_submission_status until the status leaves In Progress. */
    "apple_notary.submit_software": {
      input: {
        /**
         * Name of the file you are going to upload, including its .zip, .dmg or .pkg extension. The notary service echoes it back in submission status and history responses. It does not have to be unique.
         * @minLength 1
         * @pattern \S
         */
        submissionName: string;
        /**
         * SHA-256 digest of the exact file you are going to upload, as 64 hexadecimal characters. The notary service checks the uploaded bytes against it.
         * @minLength 64
         * @maxLength 64
         * @pattern ^[0-9a-fA-F]+$
         */
        sha256: string;
        /**
         * URLs the notary service posts to once notarization finishes. Apple sends a signed JSON body carrying the submission identifier, the team identifier and the start and end times. Omit this to poll get_submission_status instead.
         * @minItems 1
         */
        notificationWebhookUrls?: Array<string>;
      };
      output: {
        /** Identifier the notary service assigned to this submission. Pass it to get_submission_status and get_submission_log. */
        submissionId: string;
        /** Everything needed to upload the software to Amazon S3. The credentials are temporary and expire 12 hours after this call. */
        upload: {
          /** Amazon S3 bucket the software has to be uploaded into. */
          bucket: string;
          /** Object key that identifies this upload inside the bucket. */
          object: string;
          /** Access key identifier of the temporary AWS credentials. */
          awsAccessKeyId: string;
          /** Secret access key of the temporary AWS credentials. */
          awsSecretAccessKey: string;
          /** Session token of the temporary AWS credentials. */
          awsSessionToken: string;
        };
      };
    };
  }
}
