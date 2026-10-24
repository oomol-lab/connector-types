import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Validate user and department import data without applying changes. System administrator only; returns a downloadable CSV report if errors exist. */
    "sansan.check_organization_import": {
      input: Record<string, unknown>;
      output: {
        /** Whether Sansan returned an empty validation response, indicating valid data. */
        valid: boolean;
        /** A downloadable file hosted by Connector file transit. */
        report: {
          /** The URL of the downloaded file. */
          transitUrl: string;
          /** The file name. */
          name: string;
          /** The file media type. */
          mimeType: string;
          /** File size in bytes. */
          sizeBytes: number;
        } | null;
      };
    };
    /** Create an access control pattern with department access rules. System administrator only. */
    "sansan.create_access_control_pattern": {
      input: {
        /**
         * Access control pattern name.
         * @minLength 1
         */
        aclPatternName: string;
        /** Access control pattern description. */
        description?: string;
        /** Department access rules. */
        details: Array<{
          /**
           * The department whose data this rule covers.
           * @minLength 1
           */
          objectDepartmentId: string;
          /**
           * The upstream accessible-fields setting name, such as ALL. Use values configured in Sansan; no complete enum is published.
           * @minLength 1
           */
          accessibleFieldsSettingsName: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /**
         * The access control pattern ID.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
    };
    /** Create a Sansan business card, optionally for another user through the administrator import API. */
    "sansan.create_business_card": {
      input: {
        /** @minLength 1 */
        companyName: string;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        firstName: string;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        lastName: string;
        [key: string]: unknown;
      };
      output: {
        /** The business card ID. */
        id?: string | null;
        /** The company ID. */
        companyId?: string | null;
        /** The person ID. */
        personId?: string | null;
        /** The first name. */
        firstName?: string | null;
        /** The last name. */
        lastName?: string | null;
        /** The company name. */
        companyName?: string | null;
        /** The department name. */
        departmentName?: string | null;
        /** The job title. */
        title?: string | null;
        /** The email address. */
        email?: string | null;
        /** The telephone number. */
        tel?: string | null;
        /** The mobile phone number. */
        mobile?: string | null;
        /** The business card exchange date. */
        exchangeDate?: string | null;
        /** The registration timestamp. */
        registeredTime?: string | null;
        /** The last update timestamp. */
        updatedTime?: string | null;
        /** The digitization status. */
        entryStatus?: string | null;
        /** The business card or tag owner. */
        owner?: {
          /** The owner user ID. */
          id?: string;
          /** The owner name. */
          name?: string;
          /** The owner email address. */
          email?: string;
          [key: string]: unknown;
        };
        /** Tags attached to the business card when requested. */
        tags?: Array<{
          /** The tag ID. */
          id?: string;
          /** The tag name. */
          name?: string;
          /** The tag visibility: private, public, or shared. */
          type?: string;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a Sansan contact report. External attendee details also create new business cards; optionally import for another owner as an administrator. */
    "sansan.create_contact_report": {
      input: {
        /**
         * Optional record owner user ID. When provided, use the system-administrator import API; the user must belong to the same company and contract. Omit to create for the connected user.
         * @minLength 1
         */
        ownerUserId?: string;
        /**
         * Start timestamp with timezone; seconds must be 00.
         * @format date-time
         */
        startTime: string;
        /**
         * End timestamp with timezone; seconds must be 00.
         * @format date-time
         */
        endTime: string;
        /** External attendees whose details create new business cards. */
        externalAttendees: Array<{
          /** @minLength 1 */
          companyName: unknown;
          [key: string]: unknown;
        } | {
          /** @minLength 1 */
          lastName: unknown;
          [key: string]: unknown;
        } | {
          /** @minLength 1 */
          firstName: unknown;
          [key: string]: unknown;
        }>;
        /** Internal attendee user IDs; omission defaults to the report owner. */
        internalAttendeeUserIds?: Array<string>;
        /** The contact interaction type. */
        type: "Meeting" | "Visit" | "MeetingAtOffice" | "Call" | "OutboundCall" | "InboundCall" | "Email" | "SentEmail" | "ReceivedEmail" | "OnlineMeeting";
        /** Contact report title. */
        title?: string;
        /** Contact location. */
        location?: string;
        /** Contact report memo. */
        memo?: string;
      };
      output: {
        /** Contact report ID. */
        id?: string;
        /** Contact report registration timestamp. */
        registeredTime?: string;
        /** Contact report update timestamp. */
        updatedTime?: string;
        /** Interaction start date. */
        startDate?: string;
        /** Interaction end date. */
        endDate?: string;
        /** Interaction start timestamp. */
        startTime?: string;
        /** Interaction end timestamp. */
        endTime?: string;
        /** Recorded interaction type. */
        type?: string;
        /** Contact report title. */
        title?: string;
        /** Contact location. */
        location?: string;
        /** Contact report memo. */
        memo?: string;
        /** The business card or tag owner. */
        owner?: {
          /** The owner user ID. */
          id?: string;
          /** The owner name. */
          name?: string;
          /** The owner email address. */
          email?: string;
          [key: string]: unknown;
        };
        /** External attendees and their business card and person IDs. */
        externalAttendees?: Array<Record<string, unknown>>;
        /** Internal attendees and their user details. */
        internalAttendees?: Array<Record<string, unknown>>;
        /** Categories assigned to the contact report. */
        categories?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Delete an access control pattern. System administrator only; Sansan may reject a pattern still in use. */
    "sansan.delete_access_control_pattern": {
      input: {
        /**
         * The access control pattern ID.
         * @minLength 1
         */
        patternId: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Any JSON payload returned by Sansan. */
        data: Record<string, unknown> | null;
      };
    };
    /** Export Sansan organization departments as a CSV download. System administrator only. */
    "sansan.export_organization_departments": {
      input: {
        /** CSV delimiter; defaults to comma. */
        delimiter?: "comma" | "semicolon" | "tab" | "space";
      };
      output: {
        /** The URL of the downloaded file. */
        transitUrl: string;
        /** The file name. */
        name: string;
        /** The file media type. */
        mimeType: string;
        /** File size in bytes. */
        sizeBytes: number;
      };
    };
    /** Export Sansan organization users as a CSV download. System administrator only. */
    "sansan.export_organization_users": {
      input: {
        /** CSV delimiter; defaults to comma. */
        delimiter?: "comma" | "semicolon" | "tab" | "space";
      };
      output: {
        /** The URL of the downloaded file. */
        transitUrl: string;
        /** The file name. */
        name: string;
        /** The file media type. */
        mimeType: string;
        /** File size in bytes. */
        sizeBytes: number;
      };
    };
    /** Get a business card by ID. Sansan may return the latest merged card with a different ID. */
    "sansan.get_business_card": {
      input: {
        /**
         * The Sansan business card ID.
         * @minLength 1
         */
        businessCardId: string;
        /** Include attached tags and treat tag changes as business card updates. */
        includeTags?: boolean;
      };
      output: {
        /** The business card ID. */
        id?: string | null;
        /** The company ID. */
        companyId?: string | null;
        /** The person ID. */
        personId?: string | null;
        /** The first name. */
        firstName?: string | null;
        /** The last name. */
        lastName?: string | null;
        /** The company name. */
        companyName?: string | null;
        /** The department name. */
        departmentName?: string | null;
        /** The job title. */
        title?: string | null;
        /** The email address. */
        email?: string | null;
        /** The telephone number. */
        tel?: string | null;
        /** The mobile phone number. */
        mobile?: string | null;
        /** The business card exchange date. */
        exchangeDate?: string | null;
        /** The registration timestamp. */
        registeredTime?: string | null;
        /** The last update timestamp. */
        updatedTime?: string | null;
        /** The digitization status. */
        entryStatus?: string | null;
        /** The business card or tag owner. */
        owner?: {
          /** The owner user ID. */
          id?: string;
          /** The owner name. */
          name?: string;
          /** The owner email address. */
          email?: string;
          [key: string]: unknown;
        };
        /** Tags attached to the business card when requested. */
        tags?: Array<{
          /** The tag ID. */
          id?: string;
          /** The tag name. */
          name?: string;
          /** The tag visibility: private, public, or shared. */
          type?: string;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Download the front or back of a Sansan business card as a JPEG file URL. */
    "sansan.get_business_card_image": {
      input: {
        /**
         * The Sansan business card ID.
         * @minLength 1
         */
        businessCardId: string;
        /** The card side; defaults to front. */
        side?: "front" | "back";
      };
      output: {
        /** The URL of the downloaded file. */
        transitUrl: string;
        /** The file name. */
        name: string;
        /** The file media type. */
        mimeType: string;
        /** File size in bytes. */
        sizeBytes: number;
      };
    };
    /** Get the Sansan user and permissions associated with the connected API key. */
    "sansan.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The user ID. */
        id?: string;
        /** The user name. */
        name?: string;
        /** The user role in Sansan. */
        userType?: string;
        /** Whether the user can update all data. */
        canUpdateData?: boolean;
        /** Departments the user belongs to. */
        departments?: Array<{
          /** The department name. */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the default email client settings for new users. System administrator only. */
    "sansan.get_default_email_client": {
      input: Record<string, never>;
      output: {
        /** Email client configuration. */
        settings: {
          /** Default email client for newly added users. */
          emailClient?: "clientSoftware" | "gmail" | "office365";
          /** Required only for clientSoftware. */
          encoding?: "sjis" | "utf8" | "iso2022jp";
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get the access control pattern assigned to a department. System administrator only. */
    "sansan.get_department_access_control": {
      input: {
        /**
         * The department ID.
         * @minLength 1
         */
        departmentId: string;
      };
      output: {
        /**
         * The department ID.
         * @minLength 1
         */
        departmentId?: string;
        /** A Sansan access control pattern, including upstream-defined fields. */
        accessControlPattern?: {
          /**
           * The access control pattern ID.
           * @minLength 1
           */
          aclPatternId?: string;
          /**
           * Access control pattern name.
           * @minLength 1
           */
          aclPatternName?: string;
          /** Access control pattern description. */
          description?: string;
          /** Department access rules. */
          details?: Array<{
            /**
             * The department whose data this rule covers.
             * @minLength 1
             */
            objectDepartmentId: string;
            /**
             * The upstream accessible-fields setting name, such as ALL. Use values configured in Sansan; no complete enum is published.
             * @minLength 1
             */
            accessibleFieldsSettingsName: string;
            [key: string]: unknown;
          }>;
          /** Whether this pattern is in use. */
          isInUse?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Check an organization import and return its result CSV when completed or failed. System administrator only. The report includes created IDs and row-level errors. */
    "sansan.get_organization_import_result": {
      input: {
        /**
         * The import ID returned when the job was submitted.
         * @minLength 1
         */
        importId: string;
      };
      output: {
        /**
         * The import ID.
         * @minLength 1
         */
        importId: string;
        /** Upstream import status: 0 queued, 1 running, 2 completed, 9 error. */
        importStatus: number;
        /** Normalized import status. */
        status: "queued" | "running" | "completed" | "failed";
        /** A downloadable file hosted by Connector file transit. */
        report: {
          /** The URL of the downloaded file. */
          transitUrl: string;
          /** The file name. */
          name: string;
          /** The file media type. */
          mimeType: string;
          /** File size in bytes. */
          sizeBytes: number;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get the current organization import status. System administrator only. */
    "sansan.get_organization_import_status": {
      input: {
        /**
         * The import ID returned when the job was submitted.
         * @minLength 1
         */
        importId: string;
      };
      output: {
        /** Upstream import status: 0 queued, 1 running, 2 completed, 9 error. */
        importStatus: number;
        /** Normalized import status. */
        status: "queued" | "running" | "completed" | "failed";
        [key: string]: unknown;
      };
    };
    /** Get the latest business card for a Sansan person, optionally including tags. */
    "sansan.get_person": {
      input: {
        /**
         * The Sansan person ID.
         * @minLength 1
         */
        personId: string;
        /** Include attached tags and treat tag changes as business card updates. */
        includeTags?: boolean;
      };
      output: {
        /** The business card ID. */
        id?: string | null;
        /** The company ID. */
        companyId?: string | null;
        /** The person ID. */
        personId?: string | null;
        /** The first name. */
        firstName?: string | null;
        /** The last name. */
        lastName?: string | null;
        /** The company name. */
        companyName?: string | null;
        /** The department name. */
        departmentName?: string | null;
        /** The job title. */
        title?: string | null;
        /** The email address. */
        email?: string | null;
        /** The telephone number. */
        tel?: string | null;
        /** The mobile phone number. */
        mobile?: string | null;
        /** The business card exchange date. */
        exchangeDate?: string | null;
        /** The registration timestamp. */
        registeredTime?: string | null;
        /** The last update timestamp. */
        updatedTime?: string | null;
        /** The digitization status. */
        entryStatus?: string | null;
        /** The business card or tag owner. */
        owner?: {
          /** The owner user ID. */
          id?: string;
          /** The owner name. */
          name?: string;
          /** The owner email address. */
          email?: string;
          [key: string]: unknown;
        };
        /** Tags attached to the business card when requested. */
        tags?: Array<{
          /** The tag ID. */
          id?: string;
          /** The tag name. */
          name?: string;
          /** The tag visibility: private, public, or shared. */
          type?: string;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List access control patterns, optionally filtering by a name substring. System administrator only. */
    "sansan.list_access_control_patterns": {
      input: {
        /**
         * Continue with the next page token; original filters are inherited.
         * @minLength 1
         */
        nextPageToken?: string;
        /** Pattern name substring. */
        name?: string;
      };
      output: {
        /** Records in this page. */
        data: Array<{
          /**
           * The access control pattern ID.
           * @minLength 1
           */
          aclPatternId?: string;
          /**
           * Access control pattern name.
           * @minLength 1
           */
          aclPatternName?: string;
          /** Access control pattern description. */
          description?: string;
          /** Department access rules. */
          details?: Array<{
            /**
             * The department whose data this rule covers.
             * @minLength 1
             */
            objectDepartmentId: string;
            /**
             * The upstream accessible-fields setting name, such as ALL. Use values configured in Sansan; no complete enum is published.
             * @minLength 1
             */
            accessibleFieldsSettingsName: string;
            [key: string]: unknown;
          }>;
          /** Whether this pattern is in use. */
          isInUse?: boolean;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page token, or null. */
        nextPageToken: string | null;
        [key: string]: unknown;
      };
    };
    /** List tags attached to a Sansan business card. */
    "sansan.list_business_card_tags": {
      input: {
        /**
         * The Sansan business card ID.
         * @minLength 1
         */
        businessCardId: string;
        /**
         * Continue a previous query using its nextPageToken; original query parameters are inherited.
         * @minLength 1
         */
        nextPageToken?: string;
        /**
         * Maximum records per page, from 1 to 300; defaults to 100.
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
      };
      output: {
        /** Records in this page. */
        data: Array<{
          /** The tag ID. */
          id?: string;
          /** The tag name. */
          name?: string;
          /** The tag visibility: private, public, or shared. */
          type?: string;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page token, or null when absent. Tokens expire six hours after the first request. */
        nextPageToken: string | null;
        [key: string]: unknown;
      };
    };
    /** List business cards updated within a time interval, with optional historical cards and tags. Use nextPageToken to continue. */
    "sansan.list_business_cards": {
      input: Record<string, unknown>;
      output: {
        /** Records in this page. */
        data: Array<{
          /** The business card ID. */
          id?: string | null;
          /** The company ID. */
          companyId?: string | null;
          /** The person ID. */
          personId?: string | null;
          /** The first name. */
          firstName?: string | null;
          /** The last name. */
          lastName?: string | null;
          /** The company name. */
          companyName?: string | null;
          /** The department name. */
          departmentName?: string | null;
          /** The job title. */
          title?: string | null;
          /** The email address. */
          email?: string | null;
          /** The telephone number. */
          tel?: string | null;
          /** The mobile phone number. */
          mobile?: string | null;
          /** The business card exchange date. */
          exchangeDate?: string | null;
          /** The registration timestamp. */
          registeredTime?: string | null;
          /** The last update timestamp. */
          updatedTime?: string | null;
          /** The digitization status. */
          entryStatus?: string | null;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** Tags attached to the business card when requested. */
          tags?: Array<{
            /** The tag ID. */
            id?: string;
            /** The tag name. */
            name?: string;
            /** The tag visibility: private, public, or shared. */
            type?: string;
            /** The business card or tag owner. */
            owner?: {
              /** The owner user ID. */
              id?: string;
              /** The owner name. */
              name?: string;
              /** The owner email address. */
              email?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page token, or null when absent. Tokens expire six hours after the first request. */
        nextPageToken: string | null;
        [key: string]: unknown;
      };
    };
    /** List Sansan contact reports updated within a time interval, including meetings, calls, emails, and business card exchanges. */
    "sansan.list_contact_reports": {
      input: Record<string, unknown>;
      output: {
        /** Records in this page. */
        data: Array<{
          /** Contact report ID. */
          id?: string;
          /** Contact report registration timestamp. */
          registeredTime?: string;
          /** Contact report update timestamp. */
          updatedTime?: string;
          /** Interaction start date. */
          startDate?: string;
          /** Interaction end date. */
          endDate?: string;
          /** Interaction start timestamp. */
          startTime?: string;
          /** Interaction end timestamp. */
          endTime?: string;
          /** Recorded interaction type. */
          type?: string;
          /** Contact report title. */
          title?: string;
          /** Contact location. */
          location?: string;
          /** Contact report memo. */
          memo?: string;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** External attendees and their business card and person IDs. */
          externalAttendees?: Array<Record<string, unknown>>;
          /** Internal attendees and their user details. */
          internalAttendees?: Array<Record<string, unknown>>;
          /** Categories assigned to the contact report. */
          categories?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page token, or null when absent. Tokens expire six hours after the first request. */
        nextPageToken: string | null;
        [key: string]: unknown;
      };
    };
    /** List administrative department IDs, names, and parents. System administrator only. */
    "sansan.list_departments": {
      input: {
        /**
         * Continue with the next page token; original filters are inherited.
         * @minLength 1
         */
        nextPageToken?: string;
      };
      output: {
        /** Records in this page. */
        data: Array<{
          /**
           * The department ID.
           * @minLength 1
           */
          id?: string;
          /** Department name. */
          name?: string;
          /** Parent department ID. */
          parentId?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page token, or null. */
        nextPageToken: string | null;
        [key: string]: unknown;
      };
    };
    /** List Sansan tags by ownership, visibility, owner user, and tag name. */
    "sansan.list_tags": {
      input: {
        /**
         * Continue a previous query using its nextPageToken; original query parameters are inherited.
         * @minLength 1
         */
        nextPageToken?: string;
        /**
         * Maximum records per page, from 1 to 300; defaults to 100.
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
        /** Record ownership scope: me or all accessible records; defaults to me. */
        range?: "me" | "all";
        /** Tag visibility types to include. */
        type?: Array<"private" | "public" | "shared">;
        /**
         * Tag owner user ID, effective only when range is all.
         * @maxLength 20
         */
        ownerUserId?: string;
        /**
         * Tag name substring.
         * @maxLength 50
         */
        tagName?: string;
      };
      output: {
        /** Records in this page. */
        data: Array<{
          /** The tag ID. */
          id?: string;
          /** The tag name. */
          name?: string;
          /** The tag visibility: private, public, or shared. */
          type?: string;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page token, or null when absent. Tokens expire six hours after the first request. */
        nextPageToken: string | null;
        [key: string]: unknown;
      };
    };
    /** Search accessible Sansan business cards by company, name, email, telephone, mobile, and tags. */
    "sansan.search_business_cards": {
      input: {
        /**
         * Continue a previous query using its nextPageToken; original query parameters are inherited.
         * @minLength 1
         */
        nextPageToken?: string;
        /**
         * Maximum records per page, from 1 to 300; defaults to 100.
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
        /** Record ownership scope: me or all accessible records; defaults to me. */
        range?: "me" | "all";
        /** Include attached tags and treat tag changes as business card updates. */
        includeTags?: boolean;
        /** Include older business cards for merged persons; defaults to false. */
        includePastBizCards?: boolean;
        /** Digitization statuses to include; defaults to completed. */
        entryStatus?: Array<"processing" | "completed" | "unreadable">;
        /** Sort field; defaults to updatedAt for listing and registeredAt for searching. */
        orderBy?: "registeredAt" | "completedAt" | "updatedAt";
        /** Sort direction; defaults to asc for listing and desc for searching. */
        orderDirection?: "asc" | "desc";
        /** Company name substring. */
        companyName?: string;
        /** Name prefix. */
        name?: string;
        /** Exact email address. */
        email?: string;
        /** Telephone number substring. */
        tel?: string;
        /** Mobile number substring. */
        mobile?: string;
        /** Filter by one or more Sansan tag IDs. */
        tagIds?: Array<string>;
      };
      output: {
        /** Records in this page. */
        data: Array<{
          /** The business card ID. */
          id?: string | null;
          /** The company ID. */
          companyId?: string | null;
          /** The person ID. */
          personId?: string | null;
          /** The first name. */
          firstName?: string | null;
          /** The last name. */
          lastName?: string | null;
          /** The company name. */
          companyName?: string | null;
          /** The department name. */
          departmentName?: string | null;
          /** The job title. */
          title?: string | null;
          /** The email address. */
          email?: string | null;
          /** The telephone number. */
          tel?: string | null;
          /** The mobile phone number. */
          mobile?: string | null;
          /** The business card exchange date. */
          exchangeDate?: string | null;
          /** The registration timestamp. */
          registeredTime?: string | null;
          /** The last update timestamp. */
          updatedTime?: string | null;
          /** The digitization status. */
          entryStatus?: string | null;
          /** The business card or tag owner. */
          owner?: {
            /** The owner user ID. */
            id?: string;
            /** The owner name. */
            name?: string;
            /** The owner email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** Tags attached to the business card when requested. */
          tags?: Array<{
            /** The tag ID. */
            id?: string;
            /** The tag name. */
            name?: string;
            /** The tag visibility: private, public, or shared. */
            type?: string;
            /** The business card or tag owner. */
            owner?: {
              /** The owner user ID. */
              id?: string;
              /** The owner name. */
              name?: string;
              /** The owner email address. */
              email?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** The next page token, or null when absent. Tokens expire six hours after the first request. */
        nextPageToken: string | null;
        [key: string]: unknown;
      };
    };
    /** Set the default email client for subsequently added users; users may change it later. System administrator only. */
    "sansan.set_default_email_client": {
      input: (unknown);
      output: {
        /** Email client configuration. */
        settings: {
          /** Default email client for newly added users. */
          emailClient?: "clientSoftware" | "gmail" | "office365";
          /** Required only for clientSoftware. */
          encoding?: "sjis" | "utf8" | "iso2022jp";
          [key: string]: unknown;
        } | null;
      };
    };
    /** Assign an access control pattern to a department. System administrator only. */
    "sansan.set_department_access_control": {
      input: {
        /**
         * The department ID.
         * @minLength 1
         */
        departmentId: string;
        /**
         * The access control pattern ID.
         * @minLength 1
         */
        aclPatternId: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Any JSON payload returned by Sansan. */
        data: Record<string, unknown> | null;
      };
    };
    /** Submit user and department additions, updates, or deletions. System administrator only. DeleteFlag can delete users or departments; preserve the import ID to retrieve results. */
    "sansan.submit_organization_import": {
      input: Record<string, unknown>;
      output: {
        /**
         * The submitted import job ID.
         * @minLength 1
         */
        importId: string;
        [key: string]: unknown;
      };
    };
    /** Update an access control pattern and its department rules. System administrator only. */
    "sansan.update_access_control_pattern": {
      input: {
        /**
         * The access control pattern ID.
         * @minLength 1
         */
        patternId: string;
        /**
         * Access control pattern name.
         * @minLength 1
         */
        aclPatternName?: string;
        /** Access control pattern description. */
        description?: string;
        /** Department access rules. */
        details?: Array<{
          /**
           * The department whose data this rule covers.
           * @minLength 1
           */
          objectDepartmentId: string;
          /**
           * The upstream accessible-fields setting name, such as ALL. Use values configured in Sansan; no complete enum is published.
           * @minLength 1
           */
          accessibleFieldsSettingsName: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Any JSON payload returned by Sansan. */
        data: Record<string, unknown> | null;
      };
    };
    /** Submit JPEG business card images for paid Sansan digitization. Optionally use administrator import for another owner. */
    "sansan.upload_business_card_image": {
      input: {
        /**
         * Optional record owner user ID. When provided, use the system-administrator import API; the user must belong to the same company and contract. Omit to create for the connected user.
         * @minLength 1
         */
        ownerUserId?: string;
        /**
         * Public URL of the front JPEG image, at most 5 MB.
         * @format uri
         */
        frontImageUrl: string;
        /**
         * Public URL of the optional back JPEG image, at most 5 MB.
         * @format uri
         */
        backImageUrl?: string;
        /**
         * Business card exchange date, YYYY-MM-DD.
         * @format date
         */
        exchangeDate?: string;
        /** Use a handwritten date on the image as the exchange date. */
        prioritizeHandWrittenDates?: boolean;
        /**
         * Memo attached to the imported card.
         * @maxLength 2000
         */
        memo?: string;
        /**
         * Requested digitization languages, at most two.
         * @maxItems 2
         */
        languages?: Array<"Japanese" | "English" | "Chinese" | "Korean" | "Spanish" | "Portuguese" | "German" | "French" | "Thai" | "Indonesian" | "Vietnamese">;
        /**
         * Existing tag IDs to attach, at most fifteen.
         * @maxItems 15
         */
        tagIds?: Array<string>;
      };
      output: {
        /** Created card identifiers for each requested language. */
        data: Array<{
          /** The created business card ID. */
          id?: string;
          /** The digitization language. */
          language?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
