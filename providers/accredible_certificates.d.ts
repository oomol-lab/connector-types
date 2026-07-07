import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Accredible credential using JSON recipient and group fields. */
    "accredible_certificates.create_credential": {
      input: {
        /**
         * The issuer-defined credential ID.
         * @minLength 1
         * @pattern \S
         */
        id?: string;
        /**
         * The Accredible group ID.
         * @exclusiveMinimum 0
         */
        group_id: number;
        /**
         * The recipient name.
         * @minLength 1
         * @pattern \S
         */
        "recipient.name": string;
        /**
         * The recipient email address.
         * @format email
         */
        "recipient.email": string;
        /**
         * The recipient phone number.
         * @minLength 1
         * @pattern \S
         */
        "recipient.phone_number"?: string;
        /** An Accredible ID represented as either a number or string. */
        "recipient.id"?: number | string;
        /** Provider-defined metadata object passed through to Accredible. */
        "recipient.meta_data"?: Record<string, unknown>;
        /**
         * The credential name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * The credential description.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /** Provider-defined metadata object passed through to Accredible. */
        custom_attributes?: Record<string, unknown>;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        issued_on?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        expired_on?: string;
        /** Whether the credential should be marked complete. */
        complete?: boolean;
        /** Whether Accredible should create the credential as private. */
        private?: boolean;
        /** Whether Accredible should approve the credential. */
        approve?: boolean;
        /** Whether supplemental evidence is allowed for the credential. */
        allow_supplemental_evidence?: boolean;
        /** Whether supplemental references are allowed for the credential. */
        allow_supplemental_references?: boolean;
        /** Provider-defined metadata object passed through to Accredible. */
        meta_data?: Record<string, unknown>;
      };
      output: {
        /** Normalized Accredible credential details. */
        credential: {
          /** The credential ID as a string. */
          id: string;
          /** The credential name. */
          name: string | null;
          /** The credential description. */
          description: string | null;
          /** Whether Accredible marks the credential complete. */
          complete: boolean | null;
          /** The credential issue date returned by Accredible. */
          issuedOn: string | null;
          /** The credential expiry date returned by Accredible. */
          expiredOn: string | null;
          /** The Accredible group ID when returned. */
          groupId: number | null;
          /** The Accredible group name when returned. */
          groupName: string | null;
          /** The public credential URL when returned. */
          url: string | null;
          /** The encoded credential ID when returned. */
          encodedId: string | null;
          /** Whether the credential is private. */
          private: boolean | null;
          /** Normalized Accredible recipient details. */
          recipient: {
            /** The Accredible recipient ID when returned. */
            id: string | null;
            /** The recipient name. */
            name: string | null;
            /** The recipient email address. */
            email: string | null;
            /** The recipient metadata returned by Accredible. */
            metaData: Record<string, unknown> | null;
          } | null;
          /** The raw credential object returned by Accredible. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete one Accredible credential by credential ID. */
    "accredible_certificates.delete_credential": {
      input: {
        /**
         * The Accredible credential identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** Normalized Accredible credential details. */
        credential: {
          /** The credential ID as a string. */
          id: string;
          /** The credential name. */
          name: string | null;
          /** The credential description. */
          description: string | null;
          /** Whether Accredible marks the credential complete. */
          complete: boolean | null;
          /** The credential issue date returned by Accredible. */
          issuedOn: string | null;
          /** The credential expiry date returned by Accredible. */
          expiredOn: string | null;
          /** The Accredible group ID when returned. */
          groupId: number | null;
          /** The Accredible group name when returned. */
          groupName: string | null;
          /** The public credential URL when returned. */
          url: string | null;
          /** The encoded credential ID when returned. */
          encodedId: string | null;
          /** Whether the credential is private. */
          private: boolean | null;
          /** Normalized Accredible recipient details. */
          recipient: {
            /** The Accredible recipient ID when returned. */
            id: string | null;
            /** The recipient name. */
            name: string | null;
            /** The recipient email address. */
            email: string | null;
            /** The recipient metadata returned by Accredible. */
            metaData: Record<string, unknown> | null;
          } | null;
          /** The raw credential object returned by Accredible. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get one Accredible credential by credential ID. */
    "accredible_certificates.get_credential": {
      input: {
        /**
         * The Accredible credential identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Normalized Accredible credential details. */
        credential: {
          /** The credential ID as a string. */
          id: string;
          /** The credential name. */
          name: string | null;
          /** The credential description. */
          description: string | null;
          /** Whether Accredible marks the credential complete. */
          complete: boolean | null;
          /** The credential issue date returned by Accredible. */
          issuedOn: string | null;
          /** The credential expiry date returned by Accredible. */
          expiredOn: string | null;
          /** The Accredible group ID when returned. */
          groupId: number | null;
          /** The Accredible group name when returned. */
          groupName: string | null;
          /** The public credential URL when returned. */
          url: string | null;
          /** The encoded credential ID when returned. */
          encodedId: string | null;
          /** Whether the credential is private. */
          private: boolean | null;
          /** Normalized Accredible recipient details. */
          recipient: {
            /** The Accredible recipient ID when returned. */
            id: string | null;
            /** The recipient name. */
            name: string | null;
            /** The recipient email address. */
            email: string | null;
            /** The recipient metadata returned by Accredible. */
            metaData: Record<string, unknown> | null;
          } | null;
          /** The raw credential object returned by Accredible. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Accredible credential group by group ID. */
    "accredible_certificates.get_group": {
      input: {
        /**
         * The Accredible group ID.
         * @exclusiveMinimum 0
         */
        group_id: number;
      };
      output: {
        /** Normalized Accredible group details. */
        group: {
          /** The Accredible group ID. */
          id: number;
          /** The group name. */
          name: string | null;
          /** The group course name. */
          courseName: string | null;
          /** The group course description. */
          courseDescription: string | null;
          /** The group language code. */
          language: string | null;
          /** The associated design name. */
          designName: string | null;
          /** The Accredible department ID when returned. */
          departmentId: number | null;
          /** The raw group object returned by Accredible. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Accredible credentials with documented query filters. */
    "accredible_certificates.list_credentials": {
      input: {
        /** An Accredible ID represented as either a number or string. */
        group_id?: number | string;
        /**
         * The recipient email address to filter credentials by.
         * @format email
         */
        email?: string;
        /** An Accredible ID represented as either a number or string. */
        recipient_id?: number | string;
        /**
         * The Accredible license ID to filter credentials by.
         * @minLength 1
         * @pattern \S
         */
        license_id?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        start_date?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        end_date?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        start_updated_date?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        end_updated_date?: string;
        /**
         * The number of results to request from Accredible.
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /**
         * The page number to request from Accredible.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The credentials returned by Accredible. */
        credentials: Array<{
          /** The credential ID as a string. */
          id: string;
          /** The credential name. */
          name: string | null;
          /** The credential description. */
          description: string | null;
          /** Whether Accredible marks the credential complete. */
          complete: boolean | null;
          /** The credential issue date returned by Accredible. */
          issuedOn: string | null;
          /** The credential expiry date returned by Accredible. */
          expiredOn: string | null;
          /** The Accredible group ID when returned. */
          groupId: number | null;
          /** The Accredible group name when returned. */
          groupName: string | null;
          /** The public credential URL when returned. */
          url: string | null;
          /** The encoded credential ID when returned. */
          encodedId: string | null;
          /** Whether the credential is private. */
          private: boolean | null;
          /** Normalized Accredible recipient details. */
          recipient: {
            /** The Accredible recipient ID when returned. */
            id: string | null;
            /** The recipient name. */
            name: string | null;
            /** The recipient email address. */
            email: string | null;
            /** The recipient metadata returned by Accredible. */
            metaData: Record<string, unknown> | null;
          } | null;
          /** The raw credential object returned by Accredible. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized Accredible pagination metadata. */
        meta: {
          /** The current page reported by Accredible. */
          currentPage: number | null;
          /** The next page reported by Accredible. */
          nextPage: number | null;
          /** The previous page reported by Accredible. */
          prevPage: number | null;
          /** The total page count reported by Accredible. */
          totalPages: number | null;
          /** The total item count reported by Accredible. */
          totalCount: number | null;
          /** The raw pagination object returned by Accredible. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Accredible credential groups available to the API key. */
    "accredible_certificates.list_groups": {
      input: Record<string, never>;
      output: {
        /** The groups returned by Accredible. */
        groups: Array<{
          /** The Accredible group ID. */
          id: number;
          /** The group name. */
          name: string | null;
          /** The group course name. */
          courseName: string | null;
          /** The group course description. */
          courseDescription: string | null;
          /** The group language code. */
          language: string | null;
          /** The associated design name. */
          designName: string | null;
          /** The Accredible department ID when returned. */
          departmentId: number | null;
          /** The raw group object returned by Accredible. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized Accredible pagination metadata. */
        meta: {
          /** The current page reported by Accredible. */
          currentPage: number | null;
          /** The next page reported by Accredible. */
          nextPage: number | null;
          /** The previous page reported by Accredible. */
          prevPage: number | null;
          /** The total page count reported by Accredible. */
          totalPages: number | null;
          /** The total item count reported by Accredible. */
          totalCount: number | null;
          /** The raw pagination object returned by Accredible. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Accredible credentials with documented filters. */
    "accredible_certificates.search_credentials": {
      input: {
        /** An Accredible ID represented as either a number or string. */
        group_id?: number | string;
        /**
         * A recipient name substring used for matching.
         * @minLength 1
         * @pattern \S
         */
        "recipient.name"?: string;
        /**
         * The recipient email address to match.
         * @format email
         */
        "recipient.email"?: string;
        /** An Accredible ID represented as either a number or string. */
        "recipient.id"?: number | string;
        /** Provider-defined metadata object passed through to Accredible. */
        "recipient.meta_data"?: Record<string, unknown>;
        /**
         * The Accredible license ID to filter credentials by.
         * @minLength 1
         * @pattern \S
         */
        license_id?: string;
        /** Provider-defined metadata object passed through to Accredible. */
        meta_data?: Record<string, unknown>;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        start_date?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        end_date?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        start_updated_date?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        end_updated_date?: string;
        /**
         * The number of results to request from Accredible.
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /**
         * The page number to request from Accredible.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The credentials returned by Accredible. */
        credentials: Array<{
          /** The credential ID as a string. */
          id: string;
          /** The credential name. */
          name: string | null;
          /** The credential description. */
          description: string | null;
          /** Whether Accredible marks the credential complete. */
          complete: boolean | null;
          /** The credential issue date returned by Accredible. */
          issuedOn: string | null;
          /** The credential expiry date returned by Accredible. */
          expiredOn: string | null;
          /** The Accredible group ID when returned. */
          groupId: number | null;
          /** The Accredible group name when returned. */
          groupName: string | null;
          /** The public credential URL when returned. */
          url: string | null;
          /** The encoded credential ID when returned. */
          encodedId: string | null;
          /** Whether the credential is private. */
          private: boolean | null;
          /** Normalized Accredible recipient details. */
          recipient: {
            /** The Accredible recipient ID when returned. */
            id: string | null;
            /** The recipient name. */
            name: string | null;
            /** The recipient email address. */
            email: string | null;
            /** The recipient metadata returned by Accredible. */
            metaData: Record<string, unknown> | null;
          } | null;
          /** The raw credential object returned by Accredible. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized Accredible pagination metadata. */
        meta: {
          /** The current page reported by Accredible. */
          currentPage: number | null;
          /** The next page reported by Accredible. */
          nextPage: number | null;
          /** The previous page reported by Accredible. */
          prevPage: number | null;
          /** The total page count reported by Accredible. */
          totalPages: number | null;
          /** The total item count reported by Accredible. */
          totalCount: number | null;
          /** The raw pagination object returned by Accredible. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Accredible credential groups with documented filters. */
    "accredible_certificates.search_groups": {
      input: {
        /**
         * The Accredible group IDs to include.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * A group name substring used for partial matching.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * A course name substring used for partial matching.
         * @minLength 1
         * @pattern \S
         */
        course_name?: string;
        /**
         * The Accredible department ID to filter by.
         * @exclusiveMinimum 0
         */
        department_id?: number;
        /** String metadata key/value pairs passed through to Accredible. */
        meta_data?: Record<string, string>;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        start_updated_date?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        end_updated_date?: string;
        /**
         * The number of results to request from Accredible.
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /**
         * The page number to request from Accredible.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The groups returned by Accredible. */
        groups: Array<{
          /** The Accredible group ID. */
          id: number;
          /** The group name. */
          name: string | null;
          /** The group course name. */
          courseName: string | null;
          /** The group course description. */
          courseDescription: string | null;
          /** The group language code. */
          language: string | null;
          /** The associated design name. */
          designName: string | null;
          /** The Accredible department ID when returned. */
          departmentId: number | null;
          /** The raw group object returned by Accredible. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized Accredible pagination metadata. */
        meta: {
          /** The current page reported by Accredible. */
          currentPage: number | null;
          /** The next page reported by Accredible. */
          nextPage: number | null;
          /** The previous page reported by Accredible. */
          prevPage: number | null;
          /** The total page count reported by Accredible. */
          totalPages: number | null;
          /** The total item count reported by Accredible. */
          totalCount: number | null;
          /** The raw pagination object returned by Accredible. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
