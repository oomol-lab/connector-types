import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a company in Streamtime for the authenticated organisation. */
    "streamtime.create_company": {
      input: {
        /**
         * The company name.
         * @minLength 1
         */
        name: string;
        /**
         * The tax, GST, or VAT number for the company.
         * @minLength 1
         */
        taxNumber?: string;
        /**
         * The primary phone number for the company.
         * @minLength 1
         */
        phone1?: string;
        /**
         * The secondary phone number for the company.
         * @minLength 1
         */
        phone2?: string;
        /**
         * The public website URL for the company.
         * @minLength 1
         */
        websiteAddress?: string;
      };
      output: {
        /** One Streamtime company object returned by the API. */
        company: Record<string, unknown>;
      };
    };
    /** Create a contact under a Streamtime company. */
    "streamtime.create_company_contact": {
      input: {
        /**
         * The Streamtime company ID.
         * @exclusiveMinimum 0
         */
        companyId: number;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstName: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact phone number.
         * @minLength 1
         */
        phoneNumber?: string;
        /**
         * The contact job title or position.
         * @minLength 1
         */
        position?: string;
      };
      output: {
        /** One Streamtime contact object returned by the API. */
        contact: Record<string, unknown>;
      };
    };
    /** Create a Streamtime job linked to a company, rate card, and optional contact. */
    "streamtime.create_job": {
      input: {
        /**
         * The Streamtime company ID that owns the job.
         * @exclusiveMinimum 0
         */
        companyId: number;
        /**
         * The Streamtime user ID to assign as the job lead.
         * @exclusiveMinimum 0
         */
        jobLeadUserId?: number;
        /**
         * The Streamtime rate card ID to apply to the job.
         * @exclusiveMinimum 0
         */
        rateCardId: number;
        /**
         * The Streamtime branch ID for the job.
         * @exclusiveMinimum 0
         */
        branchId?: number;
        /**
         * The job name.
         * @minLength 1
         */
        name: string;
        /**
         * The job number.
         * @minLength 1
         */
        number?: string;
        /**
         * The Streamtime contact ID the job is being done for.
         * @exclusiveMinimum 0
         */
        contactId?: number;
        /**
         * The client purchase order number.
         * @minLength 1
         */
        purchaseOrderNumber?: string;
      };
      output: {
        /** One Streamtime job object returned by the API. */
        job: Record<string, unknown>;
      };
    };
    /** Get a Streamtime company by ID. */
    "streamtime.get_company": {
      input: {
        /**
         * The Streamtime company ID.
         * @exclusiveMinimum 0
         */
        companyId: number;
      };
      output: {
        /** One Streamtime company object returned by the API. */
        company: Record<string, unknown>;
      };
    };
    /** Get a Streamtime contact by ID. */
    "streamtime.get_contact": {
      input: {
        /**
         * The Streamtime contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** One Streamtime contact object returned by the API. */
        contact: Record<string, unknown>;
      };
    };
    /** Get a Streamtime job by ID. */
    "streamtime.get_job": {
      input: {
        /**
         * The Streamtime job ID.
         * @exclusiveMinimum 0
         */
        jobId: number;
      };
      output: {
        /** One Streamtime job object returned by the API. */
        job: Record<string, unknown>;
      };
    };
    /** Get the authenticated Streamtime organisation details. */
    "streamtime.get_organisation": {
      input: Record<string, never>;
      output: {
        /** The Streamtime organisation object returned by the API. */
        organisation: Record<string, unknown>;
      };
    };
    /** List the Streamtime branches available to the authenticated organisation. */
    "streamtime.list_branches": {
      input: Record<string, never>;
      output: {
        /** The Streamtime branches returned by the API. */
        branches: Array<Record<string, unknown>>;
      };
    };
    /** List the contacts that belong to a Streamtime company. */
    "streamtime.list_company_contacts": {
      input: {
        /**
         * The Streamtime company ID.
         * @exclusiveMinimum 0
         */
        companyId: number;
      };
      output: {
        /** The Streamtime contacts returned by the API. */
        contacts: Array<Record<string, unknown>>;
      };
    };
    /** List the Streamtime rate cards available to the authenticated organisation. */
    "streamtime.list_rate_cards": {
      input: Record<string, never>;
      output: {
        /** The Streamtime rate cards returned by the API. */
        rateCards: Array<Record<string, unknown>>;
      };
    };
    /** List the Streamtime users available to the authenticated organisation. */
    "streamtime.list_users": {
      input: Record<string, never>;
      output: {
        /** The Streamtime users returned by the API. */
        users: Array<Record<string, unknown>>;
      };
    };
    /** Update a Streamtime company by ID. */
    "streamtime.update_company": {
      input: {
        /**
         * The Streamtime company ID.
         * @exclusiveMinimum 0
         */
        companyId: number;
        /**
         * The company name.
         * @minLength 1
         */
        name?: string;
        /**
         * The tax, GST, or VAT number for the company.
         * @minLength 1
         */
        taxNumber?: string;
        /**
         * The primary phone number for the company.
         * @minLength 1
         */
        phone1?: string;
        /**
         * The secondary phone number for the company.
         * @minLength 1
         */
        phone2?: string;
        /**
         * The public website URL for the company.
         * @minLength 1
         */
        websiteAddress?: string;
      };
      output: {
        /** One Streamtime company object returned by the API. */
        company: Record<string, unknown>;
      };
    };
    /** Update a Streamtime contact by ID. */
    "streamtime.update_contact": {
      input: {
        /**
         * The Streamtime contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact phone number.
         * @minLength 1
         */
        phoneNumber?: string;
        /**
         * The contact job title or position.
         * @minLength 1
         */
        position?: string;
      };
      output: {
        /** One Streamtime contact object returned by the API. */
        contact: Record<string, unknown>;
      };
    };
    /** Update a Streamtime job by ID. */
    "streamtime.update_job": {
      input: {
        /**
         * The Streamtime job ID.
         * @exclusiveMinimum 0
         */
        jobId: number;
        /**
         * The Streamtime company ID that owns the job.
         * @exclusiveMinimum 0
         */
        companyId?: number;
        /**
         * The Streamtime user ID to assign as the job lead.
         * @exclusiveMinimum 0
         */
        jobLeadUserId?: number;
        /**
         * The Streamtime rate card ID to apply to the job.
         * @exclusiveMinimum 0
         */
        rateCardId?: number;
        /**
         * The Streamtime branch ID for the job.
         * @exclusiveMinimum 0
         */
        branchId?: number;
        /**
         * The job name.
         * @minLength 1
         */
        name?: string;
        /**
         * The job number.
         * @minLength 1
         */
        number?: string;
        /**
         * The Streamtime contact ID the job is being done for.
         * @exclusiveMinimum 0
         */
        contactId?: number;
        /**
         * The client purchase order number.
         * @minLength 1
         */
        purchaseOrderNumber?: string;
      };
      output: {
        /** One Streamtime job object returned by the API. */
        job: Record<string, unknown>;
      };
    };
  }
}
