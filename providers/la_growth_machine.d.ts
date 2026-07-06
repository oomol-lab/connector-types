import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an empty La Growth Machine audience. */
    "la_growth_machine.create_audience": {
      input: {
        /**
         * Audience name to create.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
      };
      output: {
        /** A La Growth Machine audience. */
        audience: {
          /** The La Growth Machine audience ID. */
          id?: string;
          /** The audience name. */
          name?: string;
          /** The number of leads in the audience. */
          leadsCount?: number;
          [key: string]: unknown;
        };
        /** A raw La Growth Machine object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a La Growth Machine lead or update it when it already exists. */
    "la_growth_machine.create_or_update_lead": {
      input: {
        /**
         * Audience name where the lead should be created or updated.
         * @minLength 1
         */
        audience?: string;
        /**
         * Existing La Growth Machine lead ID to update.
         * @minLength 1
         * @maxLength 255
         */
        leadId?: string;
        /**
         * Lead first name.
         * @minLength 1
         * @maxLength 255
         */
        firstname?: string;
        /**
         * Lead last name.
         * @minLength 1
         * @maxLength 255
         */
        lastname?: string;
        /** Lead gender. */
        gender?: "man" | "woman";
        /**
         * Lead biography.
         * @minLength 1
         * @maxLength 255
         */
        bio?: string;
        /**
         * Lead professional email address.
         * @minLength 1
         * @maxLength 255
         */
        proEmail?: string;
        /**
         * Lead personal email address.
         * @minLength 1
         * @maxLength 255
         */
        persoEmail?: string;
        /**
         * Lead company name.
         * @minLength 1
         * @maxLength 255
         */
        companyName?: string;
        /**
         * Lead company URL.
         * @minLength 1
         * @maxLength 255
         */
        companyUrl?: string;
        /**
         * Lead LinkedIn profile URL.
         * @minLength 1
         * @maxLength 255
         */
        linkedinUrl?: string;
        /**
         * Lead job title.
         * @minLength 1
         * @maxLength 255
         */
        jobTitle?: string;
        /**
         * Lead profile picture URL.
         * @minLength 1
         * @maxLength 255
         */
        profilePicture?: string;
        /**
         * Lead phone number.
         * @minLength 1
         * @maxLength 255
         */
        phone?: string;
        /**
         * Lead location.
         * @minLength 1
         * @maxLength 255
         */
        location?: string;
        /**
         * Lead industry.
         * @minLength 1
         * @maxLength 255
         */
        industry?: string;
        /**
         * External CRM ID for the lead.
         * @minLength 1
         * @maxLength 255
         */
        crm_id?: string;
        /** Lead relationship count. */
        relationsCount?: number;
        /**
         * Lead Twitter or X profile.
         * @minLength 1
         * @maxLength 255
         */
        twitter?: string;
        /**
         * Custom lead attribute 1.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute1?: string;
        /**
         * Custom lead attribute 2.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute2?: string;
        /**
         * Custom lead attribute 3.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute3?: string;
        /**
         * Custom lead attribute 4.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute4?: string;
        /**
         * Custom lead attribute 5.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute5?: string;
        /**
         * Custom lead attribute 6.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute6?: string;
        /**
         * Custom lead attribute 7.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute7?: string;
        /**
         * Custom lead attribute 8.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute8?: string;
        /**
         * Custom lead attribute 9.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute9?: string;
        /**
         * Custom lead attribute 10.
         * @minLength 1
         * @maxLength 1000
         */
        customAttribute10?: string;
        /** Whether La Growth Machine should skip leads that were already contacted. */
        excludeContactedLeads?: boolean;
        /** Caller-provided enrichment data for the lead. */
        enrichData?: Record<string, unknown>;
        /**
         * Caller-provided enrichment status.
         * @minLength 1
         */
        enrichStatus?: string;
      };
      output: {
        /** A La Growth Machine lead. */
        lead: {
          /** The La Growth Machine lead ID. */
          id?: string;
          /** The lead first name. */
          firstname?: string;
          /** The lead last name. */
          lastname?: string;
          /** The lead professional email address. */
          proEmail?: string;
          /** The lead personal email address. */
          persoEmail?: string;
          /** The lead company name. */
          companyName?: string;
          /** The lead company URL. */
          companyUrl?: string;
          /** The lead LinkedIn profile URL. */
          linkedinUrl?: string;
          /** The lead status in La Growth Machine. */
          status?: string;
          [key: string]: unknown;
        };
        /** A raw La Growth Machine object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get detailed information about one La Growth Machine audience. */
    "la_growth_machine.get_audience_detail": {
      input: {
        /**
         * La Growth Machine audience MongoDB ObjectId.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-fA-F]{24}$
         */
        audienceId: string;
      };
      output: {
        /** A La Growth Machine audience. */
        audience: {
          /** The La Growth Machine audience ID. */
          id?: string;
          /** The audience name. */
          name?: string;
          /** The number of leads in the audience. */
          leadsCount?: number;
          [key: string]: unknown;
        };
        /** A raw La Growth Machine object. */
        raw: Record<string, unknown>;
      };
    };
    /** List leads belonging to a La Growth Machine audience. */
    "la_growth_machine.get_audience_leads": {
      input: {
        /**
         * La Growth Machine audience MongoDB ObjectId.
         * @minLength 24
         * @maxLength 24
         * @pattern ^[0-9a-fA-F]{24}$
         */
        audienceId: string;
        /**
         * Number of records to skip before returning the page.
         * @minimum 0
         */
        skip?: number;
        /**
         * Maximum number of records to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Leads in the audience. */
        leads: Array<{
          /** The La Growth Machine lead ID. */
          id?: string;
          /** The lead first name. */
          firstname?: string;
          /** The lead last name. */
          lastname?: string;
          /** The lead professional email address. */
          proEmail?: string;
          /** The lead personal email address. */
          persoEmail?: string;
          /** The lead company name. */
          companyName?: string;
          /** The lead company URL. */
          companyUrl?: string;
          /** The lead LinkedIn profile URL. */
          linkedinUrl?: string;
          /** The lead status in La Growth Machine. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** Total number of matching audience leads, if returned. */
        total: number | null;
        /** A raw La Growth Machine object. */
        raw: Record<string, unknown>;
      };
    };
    /** List audiences in the authenticated La Growth Machine account. */
    "la_growth_machine.list_audiences": {
      input: Record<string, never>;
      output: {
        /** La Growth Machine audiences. */
        audiences: Array<{
          /** The La Growth Machine audience ID. */
          id?: string;
          /** The audience name. */
          name?: string;
          /** The number of leads in the audience. */
          leadsCount?: number;
          [key: string]: unknown;
        }>;
        /** A raw La Growth Machine object. */
        raw: Record<string, unknown>;
      };
    };
    /** List members in the authenticated La Growth Machine account. */
    "la_growth_machine.list_members": {
      input: Record<string, never>;
      output: {
        /** La Growth Machine members. */
        members: Array<{
          /** The La Growth Machine member ID. */
          id?: string;
          /** The member name. */
          name?: string;
          /** The member display label. */
          label?: string;
          [key: string]: unknown;
        }>;
        /** Raw La Growth Machine members response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** Search La Growth Machine leads by one or more documented criteria. */
    "la_growth_machine.search_leads": {
      input: {
        /**
         * La Growth Machine lead ID to search for.
         * @minLength 1
         */
        leadId?: string;
        /**
         * Lead first name to search for.
         * @minLength 1
         */
        firstname?: string;
        /**
         * Lead last name to search for.
         * @minLength 1
         */
        lastname?: string;
        /**
         * Lead company name to search for.
         * @minLength 1
         */
        companyName?: string;
        /**
         * Lead company URL to search for.
         * @minLength 1
         */
        companyUrl?: string;
        /**
         * Lead LinkedIn profile URL to search for.
         * @minLength 1
         */
        linkedinUrl?: string;
        /**
         * Lead LinkedIn ID to search for.
         * @minLength 1
         */
        linkedinId?: string;
        /**
         * Lead public LinkedIn ID to search for.
         * @minLength 1
         */
        linkedinPublicId?: string;
        /**
         * Lead email address to search for.
         * @minLength 1
         */
        email?: string;
        /**
         * Lead location to search for.
         * @minLength 1
         */
        location?: string;
        /**
         * Lead industry to search for.
         * @minLength 1
         */
        industry?: string;
        /**
         * External CRM ID to search for.
         * @minLength 1
         */
        crmId?: string;
      };
      output: {
        /** Matching La Growth Machine leads. */
        leads: Array<{
          /** The La Growth Machine lead ID. */
          id?: string;
          /** The lead first name. */
          firstname?: string;
          /** The lead last name. */
          lastname?: string;
          /** The lead professional email address. */
          proEmail?: string;
          /** The lead personal email address. */
          persoEmail?: string;
          /** The lead company name. */
          companyName?: string;
          /** The lead company URL. */
          companyUrl?: string;
          /** The lead LinkedIn profile URL. */
          linkedinUrl?: string;
          /** The lead status in La Growth Machine. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** Whether La Growth Machine found too many matches and needs narrower search criteria. */
        tooManyResults: boolean;
        /** Raw La Growth Machine search response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
  }
}
