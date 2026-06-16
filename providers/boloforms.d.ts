import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List response records for a specific form so they can be used in follow-up automations. */
    "boloforms.get_form_responses": {
      input: {
        /**
         * The form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The form ID associated with this query. */
        formId?: string;
        /**
         * The page number returned in the current response.
         * @minimum 1
         */
        page?: number;
        /**
         * The page size used in the current response.
         * @minimum 1
         */
        limit?: number;
        /**
         * The total number of records that match the current query.
         * @minimum 0
         */
        total?: number;
        /** The list of form responses. */
        responses: Array<{
          /** The unique form response identifier. */
          responseId?: string;
          /** The respondent name. */
          name?: string;
          /** The respondent email address. */
          email?: string;
          /** The form response submission time. */
          submittedAt?: string;
          /** The form answer object. Field names and structure depend on the specific form. */
          answers?: Record<string, unknown>;
          /** The raw response fields returned by the upstream API. */
          raw?: Record<string, unknown>;
        }>;
      };
    };
    /** List documents and form statistics from the current BoloForms workspace. */
    "boloforms.list_documents": {
      input: {
        /**
         * The workspace ID to query. When provided, it is sent through the workspaceid header.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Filter the document list by document name or keywords.
         * @minLength 1
         */
        query?: string;
        /**
         * Filter results by a specific document ID.
         * @minLength 1
         */
        documentId?: string;
        /**
         * A filter value supported by the official API.
         * @minLength 1
         */
        filter?: string;
        /**
         * The field used for sorting.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * The sort direction, such as asc or desc.
         * @minLength 1
         */
        sortOrder?: string;
        /**
         * The lower bound of the document start time filter.
         * @minLength 1
         */
        dateFrom?: string;
        /**
         * The upper bound of the document end time filter.
         * @minLength 1
         */
        dateTo?: string;
        /**
         * The page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The informational message returned by the upstream API. */
        message?: string;
        /**
         * The total number of documents in the current workspace.
         * @minimum 0
         */
        documentsCount?: number;
        /**
         * The total number of forms in the current workspace.
         * @minimum 0
         */
        formCount?: number;
        /**
         * The page number returned in the current response.
         * @minimum 1
         */
        page?: number;
        /**
         * The page size used in the current response.
         * @minimum 1
         */
        limit?: number;
        /** The list of documents returned by this query. */
        documents: Array<{
          /** The unique document identifier, which can be reused to start signing or track status. */
          documentId: string;
          /** The document name. */
          documentName: string;
          /** The signing type, such as PDF_TEMPLATE or FORM_TEMPLATE. */
          signingType: string;
          /** The current document status. */
          status: string;
          /** The document creation time, usually as an ISO 8601 timestamp. */
          createdAt: string;
          /** The most recent document update time, usually as an ISO 8601 timestamp. */
          updatedAt: string;
        }>;
      };
    };
    /** List the current signing participants and their statuses for a specific template. */
    "boloforms.list_template_respondents": {
      input: {
        /**
         * The template ID.
         * @minLength 1
         */
        templateId: string;
        /**
         * The page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The template ID associated with this query. */
        templateId?: string;
        /**
         * The page number returned in the current response.
         * @minimum 1
         */
        page?: number;
        /**
         * The page size used in the current response.
         * @minimum 1
         */
        limit?: number;
        /**
         * The total number of records that match the current query.
         * @minimum 0
         */
        total?: number;
        /** The current list of signing participants for the template. */
        respondents: Array<{
          /** The unique signer identifier. */
          signerId?: string;
          /** The respondent document identifier associated with this signer. */
          respondentDocumentId?: string;
          /** The signer name. */
          name?: string;
          /** The signer email address. */
          email?: string;
          /** The current signer status. */
          status?: string;
          /** The signer role title. */
          roleTitle?: string;
          /** The signer role color. */
          roleColor?: string;
          /** Whether the signer has declined the request. */
          hasDeclined?: boolean;
          /** The signer order number. */
          signingOrderNo?: number;
          /** The raw signer fields returned by the upstream API. */
          raw?: Record<string, unknown>;
        }>;
      };
    };
    /** Start a signing request for a group of participants by using an existing template. */
    "boloforms.send_template_for_signing": {
      input: {
        /**
         * The template or document ID to use for the signing request.
         * @minLength 1
         */
        documentId: string;
        /** The signing type, which must match the template type configured in BoloForms. */
        signingType: "PDF_TEMPLATE" | "FORM_TEMPLATE";
        /**
         * The default email subject.
         * @minLength 1
         */
        mailSubject?: string;
        /**
         * The default email body.
         * @minLength 1
         */
        mailMessage?: string;
        /**
         * The list of participants who will receive the signing request.
         * @minItems 1
         */
        signers: Array<{
          /**
           * The signer name.
           * @minLength 1
           */
          name: string;
          /**
           * The signer email address.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email: string;
          /**
           * The email subject sent to this signer.
           * @minLength 1
           */
          subject?: string;
          /**
           * The email body sent to this signer.
           * @minLength 1
           */
          message?: string;
          /**
           * The signer role title.
           * @minLength 1
           */
          roleTitle?: string;
          /**
           * The signer role color.
           * @minLength 1
           */
          roleColor?: string;
        }>;
        /** The values for custom template variables, which are mapped to variablesData. */
        customVariables?: Record<string, unknown>;
        /** Extra PDF parameters used only for the PDF_TEMPLATE scenario. */
        pdfData?: Record<string, unknown>;
      };
      output: {
        /** Whether the connector successfully sent the request to the upstream API. */
        success: boolean;
        /** The result message returned by the upstream API. */
        message?: string;
        /** The document ID associated with this signing result. */
        documentId?: string;
        /** The document name associated with this signing result. */
        documentName?: string;
        /** The signing type returned by the upstream API. */
        signingType?: string;
        /** The signer summary returned by the upstream API. */
        signers?: Array<{
          /** The unique signer identifier. */
          signerId?: string;
          /** The respondent document identifier associated with this signer. */
          respondentDocumentId?: string;
          /** The signer name. */
          name?: string;
          /** The signer email address. */
          email?: string;
          /** The current signer status. */
          status?: string;
          /** The signer role title. */
          roleTitle?: string;
          /** The signer role color. */
          roleColor?: string;
          /** Whether the signer has declined the request. */
          hasDeclined?: boolean;
          /** The signer order number. */
          signingOrderNo?: number;
          /** The raw signer fields returned by the upstream API. */
          raw?: Record<string, unknown>;
        }>;
        /** The preserved raw result object returned by the upstream API. */
        raw?: Record<string, unknown>;
      };
    };
  }
}
