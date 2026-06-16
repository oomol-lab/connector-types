import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get OKSign credits balance, expiry, and account storage details. */
    "oksign.get_credits": {
      input: Record<string, never>;
      output: {
        /**
         * The current storage usage in bytes.
         * @minimum 0
         */
        accountSize: number;
        /**
         * The maximum storage capacity in bytes.
         * @minimum 0
         */
        maxAccountSize: number;
        /** Whether the account is on a paid plan. */
        paid: boolean;
        /**
         * The current credit balance quantity.
         * @minimum 0
         */
        quantity: number;
        /**
         * The current OKSign subscription tier code.
         * @minLength 1
         */
        subscription: string;
        /**
         * The ISO 8601 timestamp when the credit balance expires.
         * @minLength 1
         */
        validUntil: string;
      };
    };
    /** Get OKSign metadata v2 for a signed document by signed_docid. */
    "oksign.get_document_metadata": {
      input: {
        /**
         * The source_docid or signed_docid to send as x-oksign-docid.
         * @minLength 1
         */
        docId: string;
      };
      output: {
        /** The signed document metadata payload returned by OKSign metadata v2. */
        document: {
          /**
           * The filename of the signed document.
           * @minLength 1
           */
          filename: string;
          /**
           * The human-readable signed document size returned by OKSign.
           * @minLength 1
           */
          size: string;
          /**
           * The number of required signatures defined on the source document.
           * @minimum 0
           */
          nbrOfSigaturesRequired: number;
          /**
           * The number of signatures already placed on the signed document.
           * @minimum 0
           */
          nbrOfSigaturesValid: number;
          /** The field definitions and completion metadata. */
          fields: Array<{
            /**
             * The field type defined in the source form descriptor.
             * @minLength 1
             */
            inputtype: string;
            /**
             * The field name defined in the source form descriptor.
             * @minLength 1
             */
            name: string;
            /**
             * The zero-based page number that contains the field.
             * @minimum 0
             */
            pagenbr: number;
            /** Completion metadata for the field when the field has been completed. */
            metadata?: {
              /** The completed field value or signature metadata object returned by OKSign. */
              value: string | {
                /**
                 * The ISO 8601 timestamp when the signer completed the field.
                 * @minLength 1
                 */
                isodate?: string;
                /**
                 * The name of the signer shown by OKSign.
                 * @minLength 1
                 */
                signedby?: string;
                /**
                 * The role or qualification of the signer.
                 * @minLength 1
                 */
                actingas?: string;
                /**
                 * The signing method label returned by OKSign.
                 * @minLength 1
                 */
                authMethod?: string;
                /**
                 * The immutable signer identifier linked to this signature.
                 * @minLength 1
                 */
                signerid?: string;
                /**
                 * The certificate or identity provider name when available.
                 * @minLength 1
                 */
                provider?: string;
                /**
                 * The certificate serial number when OKSign provides one.
                 * @minLength 1
                 */
                serialnumber?: string;
                /**
                 * The mobile number used for TAN signing when present.
                 * @minLength 1
                 */
                msisdn?: string;
                /**
                 * The legacy non-ISO signature timestamp string when present.
                 * @minLength 1
                 */
                date?: string;
                /**
                 * The legacy Itsme approval subject identifier returned for older documents.
                 * @minLength 1
                 */
                "itsme-sub"?: string;
                [key: string]: unknown;
              };
            };
          }>;
          /** The signer information array defined on the source document. */
          signersinfo: Array<{
            /** The signer mobile number as stored in OKSign, possibly empty. */
            mobile: string;
            /**
             * The signer display name.
             * @minLength 1
             */
            name: string;
            /** The signer role or qualification, possibly empty. */
            actingas: string;
            /**
             * The immutable signer identifier used in form descriptors.
             * @minLength 1
             */
            id: string;
            /**
             * The signer email address.
             * @minLength 1
             */
            email: string;
          }>;
        };
      };
    };
    /** Resolve the corresponding source_docid and signed_docid pair for an OKSign document identifier. */
    "oksign.get_linked_document": {
      input: {
        /**
         * The source_docid or signed_docid to send as x-oksign-docid.
         * @minLength 1
         */
        docId: string;
      };
      output: {
        /** Linked source and signed document identifiers returned by OKSign. */
        document: {
          /**
           * The source document identifier tied to the lookup result.
           * @minLength 1
           */
          source_docid: string;
          /**
           * The signed document identifier when a signed copy exists for the source document.
           * @minLength 1
           */
          signed_docid?: string;
          /**
           * The timestamp when the document was first signed or uploaded when no signed copy exists yet.
           * @minLength 1
           */
          ts: string;
        } | null;
      };
    };
    /** List active OKSign documents visible in the current account. */
    "oksign.list_active_documents": {
      input: Record<string, never>;
      output: {
        /** The active documents visible in the account. */
        documents: Array<{
          /**
           * The ISO 8601 timestamp when the document was uploaded.
           * @minLength 1
           */
          createdate: string;
          /**
           * The email address or identifier of the document creator.
           * @minLength 1
           */
          creator: string;
          /**
           * The source document identifier returned by OKSign.
           * @minLength 1
           */
          docid: string;
          /**
           * The filename of the active document.
           * @minLength 1
           */
          filename: string;
          /**
           * The number of signatures required by the document workflow.
           * @minimum 0
           */
          nbrOfSigaturesRequired: number;
          /**
           * The number of valid signatures currently placed on the document.
           * @minimum 0
           */
          nbrOfSigaturesValid: number;
          /**
           * The organizational token used when the document was uploaded via the API.
           * @minLength 1
           */
          orgtoken?: string;
          /** Whether the document is marked as reusable. */
          reusable: boolean;
          /**
           * The signed document identifier when the document has a signed copy.
           * @minLength 1
           */
          signed_docid?: string;
          /**
           * The OKSign numeric status code for the document.
           * @minimum 0
           */
          status: number;
          /** Whether the document was uploaded via the REST API. */
          viaapi: boolean;
        }>;
      };
    };
    /** List the users configured in the current OKSign account. */
    "oksign.list_users": {
      input: Record<string, never>;
      output: {
        /** The users configured in the OKSign account. */
        users: Array<{
          /** The user role or qualification as stored in OKSign. */
          actingas: string;
          /**
           * The user email address.
           * @minLength 1
           */
          email: string;
          /**
           * The preferred language code configured for the user.
           * @minLength 1
           */
          language: string;
          /** The user mobile number, possibly empty. */
          mobile: string;
          /**
           * The user display name.
           * @minLength 1
           */
          name: string;
          /**
           * The account role assigned to the user.
           * @minLength 1
           */
          role: string;
          /**
           * The immutable signer identifier assigned to the user.
           * @minLength 1
           */
          signerid: string;
          /**
           * The current account status for the user.
           * @minLength 1
           */
          status: string;
          /**
           * The timestamp when the user was created or updated.
           * @minLength 1
           */
          ts: string;
        }>;
      };
    };
  }
}
