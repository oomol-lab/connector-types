import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Documenso envelope by envelope ID. */
    "documenso.get_envelope": {
      input: {
        /**
         * The Documenso envelope ID.
         * @minLength 1
         */
        envelopeId: string;
      };
      output: {
        /** A compact Documenso envelope summary. */
        envelope: {
          /** The envelope ID. */
          id: string;
          /** The envelope type. */
          type: "DOCUMENT" | "TEMPLATE";
          /** The current envelope status. */
          status: "DRAFT" | "PENDING" | "COMPLETED" | "REJECTED" | "CANCELLED";
          /** How the envelope was created. */
          source: "DOCUMENT" | "TEMPLATE" | "TEMPLATE_DIRECT_LINK";
          /** The envelope title. */
          title: string;
          /** The string value returned by Documenso. */
          externalId: string | null;
          /** The timestamp when the envelope was created. */
          createdAt: string;
          /** The timestamp when the envelope was last updated. */
          updatedAt: string;
          /** The string value returned by Documenso. */
          completedAt: string | null;
          /** The string value returned by Documenso. */
          deletedAt: string | null;
          /** The integer value returned by Documenso. */
          templateId: number | null;
          /** The Documenso team ID that owns the envelope. */
          teamId: number;
          /** The Documenso user ID that owns the envelope. */
          userId: number;
          /** The string value returned by Documenso. */
          folderId: string | null;
          /** The number of recipients included in the upstream payload. */
          recipientCount: number;
        };
        /** The raw Documenso object payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Documenso template by template ID. */
    "documenso.get_template": {
      input: {
        /**
         * The Documenso template ID.
         * @minimum 1
         */
        templateId: number;
      };
      output: {
        /** A compact Documenso template summary. */
        template: {
          /** The template ID. */
          id: number;
          /** The envelope ID backing this template. */
          envelopeId: string;
          /** The template title. */
          title: string;
          /** The template type. */
          type: "PUBLIC" | "PRIVATE" | "ORGANISATION";
          /** Who can see the template. */
          visibility: "EVERYONE" | "MANAGER_AND_ABOVE" | "ADMIN";
          /** The string value returned by Documenso. */
          externalId: string | null;
          /** The timestamp when the template was created. */
          createdAt: string;
          /** The timestamp when the template was last updated. */
          updatedAt: string;
          /** The string value returned by Documenso. */
          folderId: string | null;
          /** The Documenso team ID that owns the template. */
          teamId: number;
          /** The Documenso user ID that owns the template. */
          userId: number;
          /** The number of recipients included in the upstream payload. */
          recipientCount: number;
          /** The number of fields included in the upstream payload. */
          fieldCount: number;
          /** Whether direct links are enabled for the template. */
          directLinkEnabled: boolean | null;
        };
        /** The raw Documenso object payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find Documenso envelopes by query, status, type, source, template, folder, and pagination filters. */
    "documenso.list_envelopes": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query?: string;
        /**
         * The pagination page number. Documenso pages start at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of envelopes to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Filter envelopes by type. */
        type?: "DOCUMENT" | "TEMPLATE";
        /**
         * Filter envelopes by the template ID used to create them.
         * @minimum 1
         */
        templateId?: number;
        /** Filter envelopes by how they were created. */
        source?: "DOCUMENT" | "TEMPLATE" | "TEMPLATE_DIRECT_LINK";
        /** Filter envelopes by the current status. */
        status?: "DRAFT" | "PENDING" | "COMPLETED" | "REJECTED" | "CANCELLED";
        /**
         * Filter envelopes by folder ID.
         * @minLength 1
         */
        folderId?: string;
        /** The envelope column to sort by. */
        orderByColumn?: "createdAt";
        /** The envelope sort direction. */
        orderByDirection?: "asc" | "desc";
      };
      output: {
        /** The envelopes returned by Documenso. */
        envelopes: Array<{
          /** The envelope ID. */
          id: string;
          /** The envelope type. */
          type: "DOCUMENT" | "TEMPLATE";
          /** The current envelope status. */
          status: "DRAFT" | "PENDING" | "COMPLETED" | "REJECTED" | "CANCELLED";
          /** How the envelope was created. */
          source: "DOCUMENT" | "TEMPLATE" | "TEMPLATE_DIRECT_LINK";
          /** The envelope title. */
          title: string;
          /** The string value returned by Documenso. */
          externalId: string | null;
          /** The timestamp when the envelope was created. */
          createdAt: string;
          /** The timestamp when the envelope was last updated. */
          updatedAt: string;
          /** The string value returned by Documenso. */
          completedAt: string | null;
          /** The string value returned by Documenso. */
          deletedAt: string | null;
          /** The integer value returned by Documenso. */
          templateId: number | null;
          /** The Documenso team ID that owns the envelope. */
          teamId: number;
          /** The Documenso user ID that owns the envelope. */
          userId: number;
          /** The string value returned by Documenso. */
          folderId: string | null;
          /** The number of recipients included in the upstream payload. */
          recipientCount: number;
        }>;
        /** Documenso pagination metadata. */
        pagination: {
          /** The total number of matching records. */
          count: number;
          /** The current page number returned by Documenso. */
          currentPage: number;
          /** The number of records requested for each page. */
          perPage: number;
          /** The total number of pages returned by Documenso. */
          totalPages: number;
        };
        /** The raw Documenso object payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find Documenso templates by query, type, folder, and pagination filters. */
    "documenso.list_templates": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query?: string;
        /**
         * The pagination page number. Documenso pages start at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of templates to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Filter templates by type. */
        type?: "PUBLIC" | "PRIVATE" | "ORGANISATION";
        /**
         * Filter templates by folder ID.
         * @minLength 1
         */
        folderId?: string;
      };
      output: {
        /** The templates returned by Documenso. */
        templates: Array<{
          /** The template ID. */
          id: number;
          /** The envelope ID backing this template. */
          envelopeId: string;
          /** The template title. */
          title: string;
          /** The template type. */
          type: "PUBLIC" | "PRIVATE" | "ORGANISATION";
          /** Who can see the template. */
          visibility: "EVERYONE" | "MANAGER_AND_ABOVE" | "ADMIN";
          /** The string value returned by Documenso. */
          externalId: string | null;
          /** The timestamp when the template was created. */
          createdAt: string;
          /** The timestamp when the template was last updated. */
          updatedAt: string;
          /** The string value returned by Documenso. */
          folderId: string | null;
          /** The Documenso team ID that owns the template. */
          teamId: number;
          /** The Documenso user ID that owns the template. */
          userId: number;
          /** The number of recipients included in the upstream payload. */
          recipientCount: number;
          /** The number of fields included in the upstream payload. */
          fieldCount: number;
          /** Whether direct links are enabled for the template. */
          directLinkEnabled: boolean | null;
        }>;
        /** Documenso pagination metadata. */
        pagination: {
          /** The total number of matching records. */
          count: number;
          /** The current page number returned by Documenso. */
          currentPage: number;
          /** The number of records requested for each page. */
          perPage: number;
          /** The total number of pages returned by Documenso. */
          totalPages: number;
        };
        /** The raw Documenso object payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
