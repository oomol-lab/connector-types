import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Ambivo CRM contact. */
    "ambivo.create_contact": {
      input: {
        /**
         * Full name for the Ambivo lead or contact.
         * @minLength 1
         */
        name: string;
        /**
         * Primary email address for the Ambivo lead or contact.
         * @maxLength 254
         */
        email?: string | null;
        /**
         * Primary phone number for the Ambivo lead or contact.
         * @maxLength 20
         */
        phone?: string | null;
        /**
         * Marketing source for the Ambivo lead or contact.
         * @maxLength 100
         */
        source?: string | null;
        /**
         * Status for the Ambivo lead or contact.
         * @maxLength 50
         */
        status?: string | null;
        /**
         * Initial or updated notes for the Ambivo lead or contact.
         * @maxLength 5000
         */
        comments?: string | null;
        /**
         * Tags to attach to the CRM record. Ambivo accepts up to 10 tags.
         * @maxItems 10
         */
        tags?: Array<string> | null;
        /**
         * Company name for the Ambivo lead or contact.
         * @maxLength 500
         */
        employerName?: string | null;
        /**
         * Occupation for the Ambivo lead or contact.
         * @maxLength 200
         */
        profession?: string | null;
        /**
         * Title indexed for Ambivo search.
         * @maxLength 200
         */
        title?: string | null;
        /**
         * Social security number in XXX-XX-XXXX or XXXXXXXXX format.
         * @maxLength 11
         */
        ssn?: string | null;
        /**
         * Website URL for the Ambivo lead or contact.
         * @maxLength 2048
         */
        website?: string | null;
        /** Four-digit birth year for the Ambivo lead or contact. */
        birthYear?: number | null;
        /**
         * Birth month number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 12
         */
        birthMonth?: number | null;
        /**
         * Birth day number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 31
         */
        birthDay?: number | null;
        /** Decision date as a Unix epoch timestamp in seconds. */
        decisionDate?: number | null;
        /**
         * Free-text business need for the Ambivo lead or contact.
         * @maxLength 10000
         */
        businessNeedDescription?: string | null;
        /** Social profile objects forwarded to Ambivo, such as a LinkedIn URL object. */
        socialProfiles?: Array<Record<string, unknown>> | null;
      };
      output: {
        /** The Ambivo CRM record returned by the API. */
        record: Record<string, unknown>;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a new Ambivo CRM lead. */
    "ambivo.create_lead": {
      input: {
        /**
         * Full name for the Ambivo lead or contact.
         * @minLength 1
         */
        name: string;
        /**
         * Primary email address for the Ambivo lead or contact.
         * @maxLength 254
         */
        email?: string | null;
        /**
         * Primary phone number for the Ambivo lead or contact.
         * @maxLength 20
         */
        phone?: string | null;
        /**
         * Marketing source for the Ambivo lead or contact.
         * @maxLength 100
         */
        source?: string | null;
        /**
         * Status for the Ambivo lead or contact.
         * @maxLength 50
         */
        status?: string | null;
        /**
         * Initial or updated notes for the Ambivo lead or contact.
         * @maxLength 5000
         */
        comments?: string | null;
        /**
         * Tags to attach to the CRM record. Ambivo accepts up to 10 tags.
         * @maxItems 10
         */
        tags?: Array<string> | null;
        /**
         * Company name for the Ambivo lead or contact.
         * @maxLength 500
         */
        employerName?: string | null;
        /**
         * Occupation for the Ambivo lead or contact.
         * @maxLength 200
         */
        profession?: string | null;
        /**
         * Title indexed for Ambivo search.
         * @maxLength 200
         */
        title?: string | null;
        /**
         * Social security number in XXX-XX-XXXX or XXXXXXXXX format.
         * @maxLength 11
         */
        ssn?: string | null;
        /**
         * Website URL for the Ambivo lead or contact.
         * @maxLength 2048
         */
        website?: string | null;
        /** Four-digit birth year for the Ambivo lead or contact. */
        birthYear?: number | null;
        /**
         * Birth month number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 12
         */
        birthMonth?: number | null;
        /**
         * Birth day number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 31
         */
        birthDay?: number | null;
        /** Decision date as a Unix epoch timestamp in seconds. */
        decisionDate?: number | null;
        /**
         * Free-text business need for the Ambivo lead or contact.
         * @maxLength 10000
         */
        businessNeedDescription?: string | null;
        /** Social profile objects forwarded to Ambivo, such as a LinkedIn URL object. */
        socialProfiles?: Array<Record<string, unknown>> | null;
      };
      output: {
        /** The Ambivo CRM record returned by the API. */
        record: Record<string, unknown>;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a new Ambivo CRM task. */
    "ambivo.create_task": {
      input: {
        /**
         * Task title.
         * @minLength 1
         */
        name: string;
        /**
         * Task details.
         * @maxLength 10000
         */
        description?: string | null;
        /**
         * Task status such as assigned, in-progress, or completed.
         * @maxLength 50
         */
        status?: string | null;
        /**
         * Task priority where 1 is highest and 4 is lowest.
         * @minimum 1
         * @maximum 4
         */
        priority?: number | null;
        /** Task due date as a Unix epoch timestamp in seconds. */
        dueDate?: number | null;
        /**
         * Entity type linked to the task.
         * @maxLength 100
         */
        subjectType?: string | null;
        /**
         * ObjectId of the entity linked to the task.
         * @maxLength 100
         */
        subject?: string | null;
        /**
         * Ambivo user ID assigned to the task.
         * @maxLength 100
         */
        userId?: string | null;
        /**
         * Task type such as general, call, email, or text.
         * @maxLength 50
         */
        action?: string | null;
        /** Action-specific details for the task. */
        actionData?: Record<string, unknown> | null;
        /**
         * Tags to attach to the CRM record. Ambivo accepts up to 10 tags.
         * @maxItems 10
         */
        tags?: Array<string> | null;
      };
      output: {
        /** The Ambivo CRM record returned by the API. */
        record: Record<string, unknown>;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete an Ambivo CRM task by ID. */
    "ambivo.delete_task": {
      input: {
        /**
         * The Ambivo task record ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether Ambivo reported the task as deleted. */
        deleted: boolean;
        /** The deleted Ambivo task IDs. */
        ids: Array<string>;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Ambivo CRM contacts with optional filters, sorting, and date range. */
    "ambivo.list_contacts": {
      input: {
        /** MongoDB-style filter object encoded into Ambivo's match_filter_dict query parameter. */
        matchFilter?: Record<string, unknown>;
        /** Whether Ambivo should evaluate ObjectId syntax in matchFilter. */
        evalObjectId?: boolean;
        /** Sort fields encoded into Ambivo's sort_dict query parameter. Use 1 for ascending and -1 for descending. */
        sort?: Record<string, number>;
        /**
         * The number of records to request from Ambivo.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * Start of the Ambivo created-date range in ISO 8601 format or YYYY-MM-DD.
         * @minLength 1
         */
        startDate?: string;
        /**
         * End of the Ambivo created-date range in ISO 8601 format or YYYY-MM-DD.
         * @minLength 1
         */
        endDate?: string;
      };
      output: {
        /** The Ambivo contact records returned by the API. */
        contacts: Array<Record<string, unknown>>;
        /** The raw Ambivo response payload. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** List Ambivo CRM leads with optional filters, sorting, pagination, and date range. */
    "ambivo.list_leads": {
      input: {
        /** MongoDB-style filter object encoded into Ambivo's match_filter_dict query parameter. */
        matchFilter?: Record<string, unknown>;
        /** Whether Ambivo should evaluate ObjectId syntax in matchFilter. */
        evalObjectId?: boolean;
        /** Sort fields encoded into Ambivo's sort_dict query parameter. Use 1 for ascending and -1 for descending. */
        sort?: Record<string, number>;
        /**
         * The number of records to request from Ambivo.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * The 1-indexed Ambivo page number to request.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * Start of the Ambivo created-date range in ISO 8601 format or YYYY-MM-DD.
         * @minLength 1
         */
        startDate?: string;
        /**
         * End of the Ambivo created-date range in ISO 8601 format or YYYY-MM-DD.
         * @minLength 1
         */
        endDate?: string;
      };
      output: {
        /** The Ambivo lead records returned by the API. */
        leads: Array<Record<string, unknown>>;
        /** The Ambivo page size returned by the API. */
        pageSize: number | null;
        /** The Ambivo page number returned by the API. */
        pageNum: number | null;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Ambivo CRM tasks with optional filters, sorting, and pagination. */
    "ambivo.list_tasks": {
      input: {
        /** MongoDB-style filter object encoded into Ambivo's match_filter_dict query parameter. */
        matchFilter?: Record<string, unknown>;
        /** Sort fields encoded into Ambivo's sort_dict query parameter. Use 1 for ascending and -1 for descending. */
        sort?: Record<string, number>;
        /**
         * The number of records to request from Ambivo.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * The 1-indexed Ambivo page number to request.
         * @minimum 1
         */
        pageNum?: number;
      };
      output: {
        /** The Ambivo task records returned by the API. */
        tasks: Array<Record<string, unknown>>;
        /** The Ambivo page size returned by the API. */
        pageSize: number | null;
        /** The Ambivo page number returned by the API. */
        pageNum: number | null;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update an existing Ambivo CRM contact by ID. */
    "ambivo.update_contact": {
      input: {
        /**
         * The Ambivo contact record ID.
         * @minLength 1
         */
        contactId: string;
        /**
         * Full name for the Ambivo lead or contact.
         * @minLength 1
         */
        name?: string;
        /**
         * Primary email address for the Ambivo lead or contact.
         * @maxLength 254
         */
        email?: string | null;
        /**
         * Primary phone number for the Ambivo lead or contact.
         * @maxLength 20
         */
        phone?: string | null;
        /**
         * Marketing source for the Ambivo lead or contact.
         * @maxLength 100
         */
        source?: string | null;
        /**
         * Status for the Ambivo lead or contact.
         * @maxLength 50
         */
        status?: string | null;
        /**
         * Initial or updated notes for the Ambivo lead or contact.
         * @maxLength 5000
         */
        comments?: string | null;
        /**
         * Tags to attach to the CRM record. Ambivo accepts up to 10 tags.
         * @maxItems 10
         */
        tags?: Array<string> | null;
        /**
         * Company name for the Ambivo lead or contact.
         * @maxLength 500
         */
        employerName?: string | null;
        /**
         * Occupation for the Ambivo lead or contact.
         * @maxLength 200
         */
        profession?: string | null;
        /**
         * Title indexed for Ambivo search.
         * @maxLength 200
         */
        title?: string | null;
        /**
         * Social security number in XXX-XX-XXXX or XXXXXXXXX format.
         * @maxLength 11
         */
        ssn?: string | null;
        /**
         * Website URL for the Ambivo lead or contact.
         * @maxLength 2048
         */
        website?: string | null;
        /** Four-digit birth year for the Ambivo lead or contact. */
        birthYear?: number | null;
        /**
         * Birth month number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 12
         */
        birthMonth?: number | null;
        /**
         * Birth day number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 31
         */
        birthDay?: number | null;
        /** Decision date as a Unix epoch timestamp in seconds. */
        decisionDate?: number | null;
        /**
         * Free-text business need for the Ambivo lead or contact.
         * @maxLength 10000
         */
        businessNeedDescription?: string | null;
        /** Social profile objects forwarded to Ambivo, such as a LinkedIn URL object. */
        socialProfiles?: Array<Record<string, unknown>> | null;
      };
      output: {
        /** The Ambivo CRM record returned by the API. */
        record: Record<string, unknown>;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update an existing Ambivo CRM lead by ID. */
    "ambivo.update_lead": {
      input: {
        /**
         * The Ambivo lead record ID.
         * @minLength 1
         */
        leadId: string;
        /**
         * Full name for the Ambivo lead or contact.
         * @minLength 1
         */
        name?: string;
        /**
         * Primary email address for the Ambivo lead or contact.
         * @maxLength 254
         */
        email?: string | null;
        /**
         * Primary phone number for the Ambivo lead or contact.
         * @maxLength 20
         */
        phone?: string | null;
        /**
         * Marketing source for the Ambivo lead or contact.
         * @maxLength 100
         */
        source?: string | null;
        /**
         * Status for the Ambivo lead or contact.
         * @maxLength 50
         */
        status?: string | null;
        /**
         * Initial or updated notes for the Ambivo lead or contact.
         * @maxLength 5000
         */
        comments?: string | null;
        /**
         * Tags to attach to the CRM record. Ambivo accepts up to 10 tags.
         * @maxItems 10
         */
        tags?: Array<string> | null;
        /**
         * Company name for the Ambivo lead or contact.
         * @maxLength 500
         */
        employerName?: string | null;
        /**
         * Occupation for the Ambivo lead or contact.
         * @maxLength 200
         */
        profession?: string | null;
        /**
         * Title indexed for Ambivo search.
         * @maxLength 200
         */
        title?: string | null;
        /**
         * Social security number in XXX-XX-XXXX or XXXXXXXXX format.
         * @maxLength 11
         */
        ssn?: string | null;
        /**
         * Website URL for the Ambivo lead or contact.
         * @maxLength 2048
         */
        website?: string | null;
        /** Four-digit birth year for the Ambivo lead or contact. */
        birthYear?: number | null;
        /**
         * Birth month number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 12
         */
        birthMonth?: number | null;
        /**
         * Birth day number for the Ambivo lead or contact.
         * @minimum 1
         * @maximum 31
         */
        birthDay?: number | null;
        /** Decision date as a Unix epoch timestamp in seconds. */
        decisionDate?: number | null;
        /**
         * Free-text business need for the Ambivo lead or contact.
         * @maxLength 10000
         */
        businessNeedDescription?: string | null;
        /** Social profile objects forwarded to Ambivo, such as a LinkedIn URL object. */
        socialProfiles?: Array<Record<string, unknown>> | null;
      };
      output: {
        /** The Ambivo CRM record returned by the API. */
        record: Record<string, unknown>;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update an existing Ambivo CRM task by ID. */
    "ambivo.update_task": {
      input: {
        /**
         * The Ambivo task record ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Task title.
         * @minLength 1
         */
        name?: string;
        /**
         * Task details.
         * @maxLength 10000
         */
        description?: string | null;
        /**
         * Task status such as assigned, in-progress, or completed.
         * @maxLength 50
         */
        status?: string | null;
        /**
         * Task priority where 1 is highest and 4 is lowest.
         * @minimum 1
         * @maximum 4
         */
        priority?: number | null;
        /** Task due date as a Unix epoch timestamp in seconds. */
        dueDate?: number | null;
        /**
         * Entity type linked to the task.
         * @maxLength 100
         */
        subjectType?: string | null;
        /**
         * ObjectId of the entity linked to the task.
         * @maxLength 100
         */
        subject?: string | null;
        /**
         * Ambivo user ID assigned to the task.
         * @maxLength 100
         */
        userId?: string | null;
        /**
         * Task type such as general, call, email, or text.
         * @maxLength 50
         */
        action?: string | null;
        /** Action-specific details for the task. */
        actionData?: Record<string, unknown> | null;
        /**
         * Tags to attach to the CRM record. Ambivo accepts up to 10 tags.
         * @maxItems 10
         */
        tags?: Array<string> | null;
        /** Whether the task is completed. */
        isCompleted?: boolean | null;
        /** Task completion date as a Unix epoch timestamp in seconds. */
        completedDate?: number | null;
      };
      output: {
        /** The Ambivo CRM record returned by the API. */
        record: Record<string, unknown>;
        /** The raw Ambivo response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
