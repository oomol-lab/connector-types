import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the pending or completed contacts for a Dropcontact enrichment request. */
    "dropcontact.get_enrichment_result": {
      input: {
        /**
         * The request ID returned by submit_enrichment.
         * @minLength 1
         */
        request_id: string;
        /** Whether to return processed records immediately while unprocessed records remain unchanged. */
        forceResults?: boolean;
      };
      output: {
        /** Whether Dropcontact reported an error for the result request. */
        error: boolean;
        /** Whether Dropcontact has completed the enrichment request. */
        success: boolean;
        /** The connector lifecycle state derived from the Dropcontact response. */
        status: "running" | "succeeded" | "failed";
        /** The text returned by Dropcontact when present. */
        reason: string | null;
        /** The integer value returned by Dropcontact when present. */
        credits_left: number | null;
        /** Contacts returned by Dropcontact. */
        data: Array<Record<string, unknown>>;
        /** A raw object returned by Dropcontact. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit up to 250 contacts to Dropcontact for asynchronous email verification and enrichment. */
    "dropcontact.submit_enrichment": {
      input: {
        /**
         * Contacts to enrich in one Dropcontact batch.
         * @minItems 1
         * @maxItems 250
         */
        data: Array<{
          /**
           * The email address to verify or enrich.
           * @minLength 1
           */
          email?: string;
          /**
           * The contact's first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The contact's last name.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The contact's full name.
           * @minLength 1
           */
          full_name?: string;
          /**
           * The contact's phone number.
           * @minLength 1
           */
          phone?: string;
          /**
           * The contact's company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The company website or domain.
           * @minLength 1
           */
          website?: string;
          /**
           * The French company SIREN number.
           * @minLength 1
           */
          num_siren?: string;
          /**
           * The contact's LinkedIn URL or identifier.
           * @minLength 1
           */
          linkedin?: string;
          /**
           * The French company SIRET number.
           * @minLength 1
           */
          siret?: string;
          /**
           * The country code used to guide enrichment.
           * @minLength 1
           */
          country?: string;
          /**
           * The contact's job title.
           * @minLength 1
           */
          job?: string;
          /**
           * The company's LinkedIn URL or identifier.
           * @minLength 1
           */
          company_linkedin?: string;
          /** Custom string fields that Dropcontact returns unchanged. */
          custom_fields?: Record<string, string>;
        }>;
        /** Whether to request French company identifiers, address data, and company-leader information. */
        siren?: boolean;
        /** The language for enriched data. Dropcontact documents English. */
        language?: "en";
      };
      output: {
        /** Whether Dropcontact reported an error for the submission. */
        error: boolean;
        /** The text returned by Dropcontact when present. */
        request_id: string | null;
        /** Whether Dropcontact accepted the enrichment batch. */
        success: boolean;
        /** The integer value returned by Dropcontact when present. */
        credits_left: number | null;
        /** A raw object returned by Dropcontact. */
        raw: Record<string, unknown>;
      };
    };
  }
}
