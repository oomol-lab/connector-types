import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich a company name, domain, or LinkedIn company URL with firmographic and contact data. */
    "cufinder.enrich_company": {
      input: {
        /**
         * A company name, domain, or LinkedIn company URL.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The company profile returned by CUFinder, including firmographic and contact fields when available. */
        company: Record<string, unknown>;
        /** Match and billing metadata returned by CUFinder. */
        meta: {
          /** The confidence score assigned to the result. */
          confidence: number;
          /** The normalized query processed by CUFinder. */
          query: Record<string, unknown>;
          /** Credit usage reported by CUFinder for the request. */
          credits: {
            /** The number of credits charged for the request. */
            charged: number;
            /** The number of credits remaining after the request. */
            remaining: number;
          };
        };
      };
    };
    /** Enrich a person's full name and company with professional and contact data. */
    "cufinder.enrich_person": {
      input: {
        /**
         * The person's full name.
         * @minLength 1
         */
        fullName: string;
        /**
         * The person's company name, domain, or LinkedIn company URL.
         * @minLength 1
         */
        company: string;
      };
      output: {
        /** The person profile returned by CUFinder, including job, company, contact, and professional fields when available. */
        person: Record<string, unknown>;
        /** Match and billing metadata returned by CUFinder. */
        meta: {
          /** The confidence score assigned to the result. */
          confidence: number;
          /** The normalized query processed by CUFinder. */
          query: Record<string, unknown>;
          /** Credit usage reported by CUFinder for the request. */
          credits: {
            /** The number of credits charged for the request. */
            charged: number;
            /** The number of credits remaining after the request. */
            remaining: number;
          };
        };
      };
    };
    /** Enrich an email address with professional, company, and contact data. */
    "cufinder.enrich_person_by_email": {
      input: {
        /**
         * The person's email address.
         * @format email
         */
        email: string;
      };
      output: {
        /** The person profile returned by CUFinder, including job, company, contact, and professional fields when available. */
        person: Record<string, unknown>;
        /** Match and billing metadata returned by CUFinder. */
        meta: {
          /** The confidence score assigned to the result. */
          confidence: number;
          /** The normalized query processed by CUFinder. */
          query: Record<string, unknown>;
          /** Credit usage reported by CUFinder for the request. */
          credits: {
            /** The number of credits charged for the request. */
            charged: number;
            /** The number of credits remaining after the request. */
            remaining: number;
          };
        };
      };
    };
    /** Find a company's official website domain from its name, with optional country and address hints. */
    "cufinder.find_company_domain": {
      input: {
        /**
         * The company name to resolve, such as Stripe.
         * @minLength 1
         */
        name: string;
        /**
         * An optional two-letter ISO country code used to disambiguate the company. CUFinder defaults to US.
         * @pattern ^\s*[A-Za-z]{2}\s*$
         */
        countryCode?: string;
        /**
         * An optional company address used as an additional disambiguation hint.
         * @minLength 1
         */
        address?: string;
      };
      output: {
        /** The company's official website domain. */
        domain: string;
        /** Match and billing metadata returned by CUFinder. */
        meta: {
          /** The confidence score assigned to the result. */
          confidence: number;
          /** The normalized query processed by CUFinder. */
          query: Record<string, unknown>;
          /** Credit usage reported by CUFinder for the request. */
          credits: {
            /** The number of credits charged for the request. */
            charged: number;
            /** The number of credits remaining after the request. */
            remaining: number;
          };
        };
      };
    };
    /** Find a company's registered name from its website domain. */
    "cufinder.find_company_name": {
      input: {
        /**
         * The company domain to resolve, such as stripe.com.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The company name associated with the domain. */
        name: string;
        /** Match and billing metadata returned by CUFinder. */
        meta: {
          /** The confidence score assigned to the result. */
          confidence: number;
          /** The normalized query processed by CUFinder. */
          query: Record<string, unknown>;
          /** Credit usage reported by CUFinder for the request. */
          credits: {
            /** The number of credits charged for the request. */
            charged: number;
            /** The number of credits remaining after the request. */
            remaining: number;
          };
        };
      };
    };
  }
}
