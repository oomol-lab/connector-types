import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the remaining BoldSign API document credits for the connected account. */
    "boldsign.get_api_credits": {
      input: Record<string, never>;
      output: {
        /** The remaining number of BoldSign API document credits. */
        balanceCredits: number;
      };
    };
    /** Get the status, signers, and full JSON details for one BoldSign document. */
    "boldsign.get_document_details": {
      input: {
        /**
         * The BoldSign document identifier.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** Normalized details for one BoldSign document. */
        document: {
          /**
           * The BoldSign document identifier.
           * @minLength 1
           */
          documentId: string;
          /** The document title. */
          title: string | null;
          /** The document description. */
          description: string | null;
          /** The current BoldSign document status. */
          status: "InProgress" | "Completed" | "Declined" | "Expired" | "Revoked" | "Draft" | "Scheduled";
          /** The Unix timestamp when the document was created. */
          createdAt: number | null;
          /** The Unix timestamp when the document expires. */
          expiryAt: number | null;
          /** Labels attached to the document. */
          labels: Array<string>;
          /** Signer details returned by BoldSign. */
          signers: Array<Record<string, unknown>>;
          /** The raw object returned by the BoldSign API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get roles, files, and full JSON details for one BoldSign template. */
    "boldsign.get_template_details": {
      input: {
        /**
         * The BoldSign template identifier.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** Normalized details for one BoldSign template. */
        template: {
          /**
           * The BoldSign template identifier.
           * @minLength 1
           */
          templateId: string;
          /** The template title. */
          title: string | null;
          /** The template description. */
          description: string | null;
          /** The default title used for documents from this template. */
          documentTitle: string | null;
          /** The default recipient message used for documents from this template. */
          documentMessage: string | null;
          /** The Unix timestamp when the template was created. */
          createdAt: number | null;
          /** Labels attached to the template. */
          labels: Array<string>;
          /** Roles configured on the template. */
          roles: Array<Record<string, unknown>>;
          /** Files configured on the template. */
          files: Array<Record<string, unknown>>;
          /** The raw object returned by the BoldSign API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List BoldSign documents available to the connected account with filters and pagination. */
    "boldsign.list_documents": {
      input: {
        /**
         * The page number to return. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /** Sender email addresses to include. */
        sentBy?: Array<string>;
        /** Recipient email addresses to include. */
        recipients?: Array<string>;
        /** Whether to include sent, received, or both document sets. */
        transmitType?: "Sent" | "Received" | "Both";
        /** How the date range should be applied. */
        dateFilterType?: "SentBetween" | "Expiring";
        /**
         * The start of the document date range.
         * @format date-time
         */
        startDate?: string;
        /**
         * The end of the document date range.
         * @format date-time
         */
        endDate?: string;
        /** Document statuses to include. */
        statuses?: Array<"None" | "WaitingForMe" | "WaitingForOthers" | "NeedAttention" | "Completed" | "Declined" | "Revoked" | "Expired" | "Draft" | "Scheduled">;
        /**
         * Text matched against document titles, IDs, senders, and recipients.
         * @minLength 1
         */
        searchKey?: string;
        /** Document labels to include. */
        labels?: Array<string>;
        /**
         * The cursor for results beyond 10,000 records.
         * @minimum 0
         */
        nextCursor?: number;
        /** BoldSign brand IDs to include. */
        brandIds?: Array<string>;
      };
      output: {
        /** Documents returned by BoldSign. */
        documents: Array<{
          /**
           * The BoldSign document identifier.
           * @minLength 1
           */
          documentId: string;
          /** The document title. */
          title: string | null;
          /** The current BoldSign document status. */
          status: "InProgress" | "Completed" | "Declined" | "Expired" | "Revoked" | "Draft" | "Scheduled";
          /** The Unix timestamp when the document was created. */
          createdAt: number | null;
          /** The Unix timestamp of the latest document activity. */
          activityAt: number | null;
          /** The Unix timestamp when the document expires. */
          expiryAt: number | null;
          /** Labels attached to the document. */
          labels: Array<string>;
          /** The cursor used for pagination beyond 10,000 records. */
          cursor: number | null;
          /** The raw object returned by the BoldSign API. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized BoldSign pagination details. */
        pagination: {
          /** The current page number. */
          page: number | null;
          /** The number of records requested per page. */
          pageSize: number | null;
          /** The total number of matching records. */
          totalRecords: number | null;
          /** The total number of available pages. */
          totalPages: number | null;
        };
      };
    };
    /** List BoldSign templates available to the connected account with filters and pagination. */
    "boldsign.list_templates": {
      input: {
        /**
         * The page number to return. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /** The template ownership set to include. */
        templateType?: "mytemplates" | "sharedtemplate" | "all";
        /**
         * Text matched against available templates.
         * @minLength 1
         */
        searchKey?: string;
        /** Sender identity emails used to filter templates. */
        onBehalfOf?: Array<string>;
        /** Creator email addresses used to filter templates. */
        createdBy?: Array<string>;
        /** Template labels to include. */
        labels?: Array<string>;
        /**
         * The start of the template creation date range.
         * @format date-time
         */
        startDate?: string;
        /**
         * The end of the template creation date range.
         * @format date-time
         */
        endDate?: string;
        /** BoldSign brand IDs to include. */
        brandIds?: Array<string>;
        /** BoldSign team IDs used to filter shared templates. */
        sharedWithTeamIds?: Array<string>;
      };
      output: {
        /** Templates returned by BoldSign. */
        templates: Array<{
          /**
           * The BoldSign template identifier.
           * @minLength 1
           */
          templateId: string;
          /** The template name. */
          name: string | null;
          /** The template description. */
          description: string | null;
          /** The Unix timestamp when the template was created. */
          createdAt: number | null;
          /** The Unix timestamp of the latest template activity. */
          activityAt: number | null;
          /** Labels attached to the template. */
          labels: Array<string>;
          /** The connected account's access level for the template. */
          accessType: string | null;
          /** The raw object returned by the BoldSign API. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized BoldSign pagination details. */
        pagination: {
          /** The current page number. */
          page: number | null;
          /** The number of records requested per page. */
          pageSize: number | null;
          /** The total number of matching records. */
          totalRecords: number | null;
          /** The total number of available pages. */
          totalPages: number | null;
        };
      };
    };
    /** Send a BoldSign signature request from an existing template and return the new document ID. */
    "boldsign.send_document_from_template": {
      input: {
        /**
         * The existing BoldSign template identifier.
         * @minLength 1
         */
        templateId: string;
        /**
         * The title shown in BoldSign and signature request emails.
         * @maxLength 256
         */
        title?: string;
        /**
         * A message sent to all recipients.
         * @maxLength 5000
         */
        message?: string;
        /**
         * Template roles mapped to real signers.
         * @minItems 1
         * @maxItems 50
         */
        roles?: Array<{
          /**
           * The one-based role position from the template, from 1 through 50.
           * @minimum 1
           * @maximum 50
           */
          roleIndex: number;
          /**
           * The signer's display name.
           * @minLength 1
           */
          signerName?: string;
          /**
           * The signer's email address.
           * @format email
           */
          signerEmail?: string;
          /**
           * The signer's order when ordered signing is enabled.
           * @minimum 1
           */
          signerOrder?: number;
          /**
           * A private message displayed only to this signer.
           * @maxLength 5000
           */
          privateMessage?: string;
          /** The signer's role in the signing workflow. */
          signerType?: "Signer" | "Reviewer" | "InPersonSigner";
          /** The locale used for signer pages and emails. */
          locale?: "EN" | "NO" | "FR" | "DE" | "ES" | "BG" | "CS" | "DA" | "IT" | "NL" | "PL" | "PT" | "RO" | "RU" | "SV" | "JA" | "TH" | "ZH_CN" | "ZH_TW" | "KO";
        }>;
        /**
         * Public file URLs added when the template permits new files. BoldSign fetches these URLs.
         * @minItems 1
         * @maxItems 25
         */
        fileUrls?: Array<string>;
        /** Labels attached to the created document. */
        labels?: Array<string>;
        /** Email addresses copied on the signature request. */
        cc?: Array<string>;
        /** Whether to disable document-related emails. */
        disableEmails?: boolean;
        /** Whether to disable document-related SMS notifications. */
        disableSms?: boolean;
        /** Whether signers must complete the document in order. */
        enableSigningOrder?: boolean;
        /** Whether signers may reassign the signature request. */
        enableReassign?: boolean;
        /** Whether signers may print, sign, and upload the document. */
        enablePrintAndSign?: boolean;
        /** How the expiry value should be interpreted. */
        expiryDateType?: "Days" | "Hours" | "SpecificDateTime";
        /**
         * The expiry duration or Unix timestamp for the selected type.
         * @minimum 1
         */
        expiryValue?: number;
        /**
         * The BoldSign user email to send on behalf of.
         * @format email
         */
        onBehalfOf?: string;
        /** Whether to send the request in BoldSign sandbox mode. */
        isSandbox?: boolean;
        /** Custom string metadata attached to the document. */
        metadata?: Record<string, string>;
      };
      output: {
        /**
         * The new BoldSign document identifier used for status and details requests.
         * @minLength 1
         */
        documentId: string;
      };
    };
  }
}
