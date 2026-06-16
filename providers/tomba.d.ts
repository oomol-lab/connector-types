import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search for email addresses and company intelligence for a domain. */
    "tomba.domain_search": {
      input: {
        /**
         * The domain name or website URL to search.
         * @minLength 1
         */
        domain: string;
        /**
         * Optional page number for paginated Tomba results.
         * @minimum 1
         */
        page?: number;
        /**
         * Optional maximum number of results to request from Tomba.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Count known email addresses and related breakdowns for a domain. */
    "tomba.email_count": {
      input: {
        /**
         * The domain name to count email addresses for.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Find the most likely professional email address for a person at a domain. */
    "tomba.email_finder": {
      input: {
        /**
         * The company domain to search.
         * @minLength 1
         */
        domain: string;
        /**
         * The person's first name.
         * @minLength 1
         */
        firstName: string;
        /**
         * The person's last name.
         * @minLength 1
         */
        lastName: string;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve public source URLs where Tomba found an email address. */
    "tomba.email_sources": {
      input: {
        /**
         * The email address whose sources should be returned.
         * @format email
         */
        email: string;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify deliverability and metadata for an email address. */
    "tomba.email_verifier": {
      input: {
        /**
         * The email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Enrich a known email address with person and company attributes. */
    "tomba.enrich": {
      input: {
        /**
         * The email address to enrich.
         * @format email
         */
        email: string;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve information about the authenticated Tomba account. */
    "tomba.get_account": {
      input: Record<string, never>;
      output: {
        /**
         * The authenticated account email address when returned by Tomba.
         * @format email
         */
        email: string | null;
        /** The authenticated Tomba user ID when returned by Tomba. */
        userId: number | null;
        /**
         * The authenticated account plan name when available.
         * @minLength 1
         */
        planName: string | null;
        /** The raw Tomba account payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find contact data associated with a public LinkedIn profile URL. */
    "tomba.linkedin": {
      input: {
        /**
         * The public LinkedIn profile URL to search.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Search companies with Tomba Reveal using a natural-language query or filters. */
    "tomba.search_companies": {
      input: {
        /**
         * Natural language company search query. Use this on the first request, then reuse filters from the response when needed.
         * @minLength 1
         */
        query?: string;
        /** Structured Tomba Reveal filters to apply instead of a query. */
        filters?: Record<string, unknown>;
        /**
         * Optional page number for paginated company search results.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
    /** Detect technologies and tools used by a company domain. */
    "tomba.technology": {
      input: {
        /**
         * The domain name to inspect for technologies.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The raw JSON payload returned by Tomba. */
        raw: Record<string, unknown>;
      };
    };
  }
}
