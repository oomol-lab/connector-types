import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an async Bouncer batch verification request for multiple email addresses. */
    "bouncer.create_batch_request": {
      input: {
        /**
         * The email addresses to verify with Bouncer.
         * @minItems 1
         */
        emails: Array<string>;
        /**
         * The callback URL Bouncer should notify after batch processing completes.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
        /** Whether the Bouncer batch request was accepted. */
        created: boolean;
      };
    };
    /** Create a Bouncer toxicity list job for multiple email addresses. */
    "bouncer.create_toxicity_list_job": {
      input: {
        /**
         * The email addresses to verify with Bouncer.
         * @minItems 1
         */
        emails: Array<string>;
      };
      output: {
        /**
         * The toxicity list job identifier returned by Bouncer.
         * @minLength 1
         */
        id: string;
        /** The toxicity list job status returned by Bouncer. */
        status: string;
      };
    };
    /** Delete a Bouncer batch verification request and its stored results. */
    "bouncer.delete_batch_request": {
      input: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
      };
      output: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
        /** Whether the Bouncer batch verification request was deleted. */
        deleted: true;
      };
    };
    /** Delete a Bouncer toxicity list job and its stored results. */
    "bouncer.delete_toxicity_list_job": {
      input: {
        /**
         * The toxicity list job identifier returned by Bouncer.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The toxicity list job identifier returned by Bouncer.
         * @minLength 1
         */
        id: string;
        /** Whether the Bouncer toxicity list job was deleted. */
        deleted: true;
      };
    };
    /** Request early completion for a Bouncer batch verification request. */
    "bouncer.finish_batch": {
      input: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
      };
      output: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
        /** Whether the batch finish request was accepted by Bouncer. */
        finishRequested: true;
      };
    };
    /** Download normalized results from a completed Bouncer batch verification request. */
    "bouncer.get_batch_results": {
      input: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
        /** The batch download filter supported by Bouncer. */
        download?: "all" | "deliverable" | "risky" | "undeliverable" | "unknown";
      };
      output: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
        /** The batch result filter used for the Bouncer download. */
        download: "all" | "deliverable" | "risky" | "undeliverable" | "unknown";
        /** The email verification results returned by Bouncer batch download. */
        results: Array<{
          /**
           * The normalized email address returned by Bouncer.
           * @format email
           */
          email: string;
          /** The verification status returned by Bouncer. */
          status: "deliverable" | "risky" | "undeliverable" | "unknown";
          /** The provider reason returned by Bouncer. */
          reason: string;
          /**
           * The Bouncer quality score from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          score: number;
          /** Whether Bouncer considers the email toxic. */
          toxic: "yes" | "no" | "unknown";
          /** The domain details returned by Bouncer. */
          domain?: {
            /** The domain name returned by Bouncer. */
            name: string;
            /** Whether the domain behaves like a catch-all domain. */
            acceptAll: "yes" | "no" | "unknown";
            /** Whether the domain is disposable. */
            disposable: "yes" | "no" | "unknown";
            /** Whether the domain belongs to a free email provider. */
            free: "yes" | "no" | "unknown";
          };
          /** The mailbox details returned by Bouncer. */
          account?: {
            /** Whether the mailbox is a role address. */
            role: "yes" | "no" | "unknown";
            /** Whether the mailbox appears disabled. */
            disabled: "yes" | "no" | "unknown";
            /** Whether the mailbox appears full. */
            fullMailbox: "yes" | "no" | "unknown";
          };
          /** The DNS details returned by Bouncer. */
          dns?: {
            /** The DNS record type returned by Bouncer. */
            type: string;
            /** The DNS record value returned by Bouncer. */
            record?: string;
          };
          /** The provider name returned by Bouncer. */
          provider?: string;
          /**
           * The Bouncer toxicity score from 0 to 5.
           * @minimum 0
           * @maximum 5
           */
          toxicity?: number;
        }>;
      };
    };
    /** Get the current processing status of a Bouncer batch verification request. */
    "bouncer.get_batch_status": {
      input: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
        /** Whether Bouncer should include batch statistics in the status response. */
        includeStats?: boolean;
      };
      output: {
        /**
         * The batch identifier returned by Bouncer.
         * @minLength 1
         */
        batchId: string;
        /** The current batch status returned by Bouncer. */
        status: string;
        /**
         * The number of processed email addresses reported by Bouncer.
         * @minimum 0
         */
        processed?: number;
        /**
         * The number of credits consumed by the batch as reported by Bouncer.
         * @minimum 0
         */
        credits?: number;
        /** The batch verification counters returned by Bouncer. */
        stats?: {
          /**
           * The number of deliverable email addresses reported by Bouncer.
           * @minimum 0
           */
          deliverable: number;
          /**
           * The number of risky email addresses reported by Bouncer.
           * @minimum 0
           */
          risky: number;
          /**
           * The number of undeliverable email addresses reported by Bouncer.
           * @minimum 0
           */
          undeliverable: number;
          /**
           * The number of unknown email addresses reported by Bouncer.
           * @minimum 0
           */
          unknown: number;
        };
      };
    };
    /** Get the current Bouncer credit balance. */
    "bouncer.get_credits": {
      input: Record<string, never>;
      output: {
        /**
         * The available credits returned by Bouncer.
         * @minimum 0
         */
        credits: number;
      };
    };
    /** Get the current processing status of a Bouncer toxicity list job. */
    "bouncer.get_toxicity_list_job_status": {
      input: {
        /**
         * The toxicity list job identifier returned by Bouncer.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The toxicity list job identifier returned by Bouncer.
         * @minLength 1
         */
        id: string;
        /** The toxicity list job status returned by Bouncer. */
        status: string;
        /**
         * The number of processed emails reported by Bouncer for the toxicity list job.
         * @minimum 0
         */
        processed?: number;
      };
    };
    /** Download normalized results from a completed Bouncer toxicity list job. */
    "bouncer.get_toxicity_list_results": {
      input: {
        /**
         * The toxicity list job identifier returned by Bouncer.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The toxicity list job identifier returned by Bouncer.
         * @minLength 1
         */
        id: string;
        /** The toxicity list rows returned by Bouncer. */
        results: Array<{
          /**
           * The email address returned by Bouncer toxicity list results.
           * @format email
           */
          email: string;
          /**
           * The toxicity score returned by Bouncer for the email address.
           * @minimum 0
           */
          toxicity: number;
        }>;
      };
    };
    /** Verify one domain with Bouncer and inspect its DNS and catch-all signals. */
    "bouncer.verify_domain": {
      input: {
        /**
         * The domain name to verify with Bouncer.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The domain details returned by Bouncer. */
        domain: {
          /** The domain name returned by Bouncer. */
          name: string;
          /** Whether the domain behaves like a catch-all domain. */
          acceptAll: "yes" | "no" | "unknown";
          /** Whether the domain is disposable. */
          disposable: "yes" | "no" | "unknown";
          /** Whether the domain belongs to a free email provider. */
          free: "yes" | "no" | "unknown";
        };
        /** The DNS details returned by Bouncer. */
        dns: {
          /** The DNS record type returned by Bouncer. */
          type: string;
          /** The DNS record value returned by Bouncer. */
          record?: string;
        };
        /** The provider name returned by Bouncer. */
        provider: string;
        /** Whether Bouncer considers the domain toxic. */
        toxic: "yes" | "no" | "unknown";
      };
    };
    /** Verify a single email address with Bouncer in real time. */
    "bouncer.verify_email": {
      input: {
        /**
         * The email address to verify with Bouncer.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The normalized email address returned by Bouncer.
         * @format email
         */
        email: string;
        /** The verification status returned by Bouncer. */
        status: "deliverable" | "risky" | "undeliverable" | "unknown";
        /** The provider reason returned by Bouncer. */
        reason: string;
        /**
         * The Bouncer quality score from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        score: number;
        /** Whether Bouncer considers the email toxic. */
        toxic: "yes" | "no" | "unknown";
        /** The domain details returned by Bouncer. */
        domain?: {
          /** The domain name returned by Bouncer. */
          name: string;
          /** Whether the domain behaves like a catch-all domain. */
          acceptAll: "yes" | "no" | "unknown";
          /** Whether the domain is disposable. */
          disposable: "yes" | "no" | "unknown";
          /** Whether the domain belongs to a free email provider. */
          free: "yes" | "no" | "unknown";
        };
        /** The mailbox details returned by Bouncer. */
        account?: {
          /** Whether the mailbox is a role address. */
          role: "yes" | "no" | "unknown";
          /** Whether the mailbox appears disabled. */
          disabled: "yes" | "no" | "unknown";
          /** Whether the mailbox appears full. */
          fullMailbox: "yes" | "no" | "unknown";
        };
        /** The DNS details returned by Bouncer. */
        dns?: {
          /** The DNS record type returned by Bouncer. */
          type: string;
          /** The DNS record value returned by Bouncer. */
          record?: string;
        };
        /** The provider name returned by Bouncer. */
        provider?: string;
        /**
         * The Bouncer toxicity score from 0 to 5.
         * @minimum 0
         * @maximum 5
         */
        toxicity?: number;
      };
    };
    /** Verify multiple email addresses with Bouncer batch sync in a single request. */
    "bouncer.verify_emails_batch_sync": {
      input: {
        /**
         * The email addresses to verify with Bouncer.
         * @minItems 1
         */
        emails: Array<string>;
      };
      output: {
        /** The email verification results returned by Bouncer batch sync. */
        results: Array<{
          /**
           * The normalized email address returned by Bouncer.
           * @format email
           */
          email: string;
          /** The verification status returned by Bouncer. */
          status: "deliverable" | "risky" | "undeliverable" | "unknown";
          /** The provider reason returned by Bouncer. */
          reason: string;
          /**
           * The Bouncer quality score from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          score: number;
          /** Whether Bouncer considers the email toxic. */
          toxic: "yes" | "no" | "unknown";
          /** The domain details returned by Bouncer. */
          domain?: {
            /** The domain name returned by Bouncer. */
            name: string;
            /** Whether the domain behaves like a catch-all domain. */
            acceptAll: "yes" | "no" | "unknown";
            /** Whether the domain is disposable. */
            disposable: "yes" | "no" | "unknown";
            /** Whether the domain belongs to a free email provider. */
            free: "yes" | "no" | "unknown";
          };
          /** The mailbox details returned by Bouncer. */
          account?: {
            /** Whether the mailbox is a role address. */
            role: "yes" | "no" | "unknown";
            /** Whether the mailbox appears disabled. */
            disabled: "yes" | "no" | "unknown";
            /** Whether the mailbox appears full. */
            fullMailbox: "yes" | "no" | "unknown";
          };
          /** The DNS details returned by Bouncer. */
          dns?: {
            /** The DNS record type returned by Bouncer. */
            type: string;
            /** The DNS record value returned by Bouncer. */
            record?: string;
          };
          /** The provider name returned by Bouncer. */
          provider?: string;
          /**
           * The Bouncer toxicity score from 0 to 5.
           * @minimum 0
           * @maximum 5
           */
          toxicity?: number;
        }>;
      };
    };
  }
}
