import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve prospect details, emails, phone numbers, company, education, skills, and related profile data from a public LinkedIn profile URL using AeroLeads. */
    "aeroleads.get_details_from_linkedin_url": {
      input: {
        /**
         * Public LinkedIn profile URL for the prospect, such as https://www.linkedin.com/in/example.
         * @minLength 1
         */
        linkedin_url: string;
      };
      output: {
        /** The raw LinkedIn profile enrichment details returned by AeroLeads, including prospect, email, phone, company, education, experience, skill, and social fields when available. */
        data: Record<string, unknown>;
        /** Whether AeroLeads returned a successful enrichment result. */
        successful: boolean;
        /** A status or error message returned by AeroLeads. */
        message?: string;
      };
    };
  }
}
