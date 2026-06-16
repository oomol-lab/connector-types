import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Lexoffice article with a NET or GROSS leading price payload. */
    "lexoffice.create_article": {
      input: {
        /** The Lexoffice article payload used for creating or updating an article. */
        data: {
          /**
           * The title of the article.
           * @minLength 1
           */
          title: string;
          /** The article description. */
          description?: string;
          /** The Lexoffice article type. */
          type: "PRODUCT" | "SERVICE";
          /** The article number. */
          articleNumber?: string;
          /** The Global Trade Item Number of the article. */
          gtin?: string;
          /** The internal article note. */
          note?: string;
          /**
           * The unit name of the article.
           * @minLength 1
           */
          unitName: string;
          /** The Lexoffice article price object. */
          price: {
            /** The net price of the article. */
            netPrice?: number;
            /** The gross price of the article. */
            grossPrice?: number;
            /** The leading article price type. */
            leadingPrice: "NET" | "GROSS";
            /** The article tax rate accepted by Lexoffice. */
            taxRate: number;
          };
          /**
           * The article version used for optimistic locking.
           * @minimum 0
           */
          version?: number;
        };
      };
      output: {
        /** The Lexoffice action result envelope. */
        result: {
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The canonical Lexoffice resource URI.
           * @minLength 1
           */
          resourceUri: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          createdDate: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          updatedDate: string;
          /**
           * The latest version returned by Lexoffice.
           * @minimum 0
           */
          version: number;
        };
      };
    };
    /** Create one Lexoffice contact using either a company or person payload. */
    "lexoffice.create_contact": {
      input: {
        /** The Lexoffice contact payload used for creating or updating a contact. */
        data: {
          /**
           * The optimistic-locking version. Use 0 for POST and the latest value for PUT.
           * @minimum 0
           */
          version: number;
          /** The Lexoffice role payload used when creating or updating a contact. */
          roles: {
            /** An empty role object expected by Lexoffice. */
            customer?: Record<string, never>;
            /** An empty role object expected by Lexoffice. */
            vendor?: Record<string, never>;
          };
          /** The Lexoffice company object used for company contacts. */
          company?: {
            /** Whether tax-free invoices are allowed for this company. */
            allowTaxFreeInvoices?: boolean;
            /**
             * The company name.
             * @minLength 1
             */
            name: string;
            /** The tax number of the company. */
            taxNumber?: string;
            /** The VAT registration ID of the company. */
            vatRegistrationId?: string;
            /** The contact persons attached to the company. */
            contactPersons?: Array<{
              /** The salutation of the contact person. */
              salutation?: string;
              /** The first name of the contact person. */
              firstName?: string;
              /**
               * The last name of the contact person.
               * @minLength 1
               */
              lastName: string;
              /** Whether the contact person is the primary contact. */
              primary?: boolean;
              /** The email address of the contact person. */
              emailAddress?: string;
              /** The phone number of the contact person. */
              phoneNumber?: string;
            }>;
          };
          /** The Lexoffice person object used for private-person contacts. */
          person?: {
            /** The salutation of the person. */
            salutation?: string;
            /** The first name of the person. */
            firstName?: string;
            /**
             * The last name of the person.
             * @minLength 1
             */
            lastName: string;
          };
          /** The address collections attached to the contact. */
          addresses?: {
            /** The billing addresses. */
            billing?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
            /** The shipping addresses. */
            shipping?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
          };
          /** The XRechnung attributes attached to the contact. */
          xRechnung?: {
            /** The Leitweg-ID of the customer. */
            buyerReference?: string;
            /** Your vendor number as used by the customer. */
            vendorNumberAtCustomer?: string;
          };
          /** The categorized contact values grouped by Lexoffice field name. */
          emailAddresses?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /** The categorized phone numbers grouped by Lexoffice field name. */
          phoneNumbers?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            mobile?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            fax?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /**
           * The optional contact note with a maximum length of 1000 characters.
           * @maxLength 1000
           */
          note?: string;
        };
      };
      output: {
        /** The Lexoffice action result envelope. */
        result: {
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The canonical Lexoffice resource URI.
           * @minLength 1
           */
          resourceUri: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          createdDate: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          updatedDate: string;
          /**
           * The latest version returned by Lexoffice.
           * @minimum 0
           */
          version: number;
        };
      };
    };
    /** Retrieve one Lexoffice article by ID. */
    "lexoffice.get_article": {
      input: {
        /**
         * The Lexoffice resource identifier.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Lexoffice article object. */
        article: {
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The title of the article.
           * @minLength 1
           */
          title: string;
          /** The article description. */
          description?: string;
          /** The Lexoffice article type. */
          type: "PRODUCT" | "SERVICE";
          /** The article number. */
          articleNumber?: string;
          /** The Global Trade Item Number of the article. */
          gtin?: string;
          /** The internal article note. */
          note?: string;
          /**
           * The unit name of the article.
           * @minLength 1
           */
          unitName: string;
          /** The Lexoffice article price object. */
          price: {
            /** The net price of the article. */
            netPrice?: number;
            /** The gross price of the article. */
            grossPrice?: number;
            /** The leading article price type. */
            leadingPrice: "NET" | "GROSS";
            /** The article tax rate accepted by Lexoffice. */
            taxRate: number;
          };
          /** The article version used for optimistic locking. */
          version: number;
        };
      };
    };
    /** Retrieve one Lexoffice contact by ID. */
    "lexoffice.get_contact": {
      input: {
        /**
         * The Lexoffice resource identifier.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Lexoffice contact object. */
        contact: {
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          organizationId: string;
          /** The contact version used for optimistic locking. */
          version: number;
          /** The Lexoffice roles object. Each present key activates the corresponding role. */
          roles: {
            /** The customer role details returned by Lexoffice. */
            customer?: {
              /** The generated customer number. */
              number: number;
            };
            /** The vendor role details returned by Lexoffice. */
            vendor?: {
              /** The generated vendor number. */
              number: number;
            };
          };
          /** The Lexoffice company object used for company contacts. */
          company?: {
            /** Whether tax-free invoices are allowed for this company. */
            allowTaxFreeInvoices?: boolean;
            /**
             * The company name.
             * @minLength 1
             */
            name: string;
            /** The tax number of the company. */
            taxNumber?: string;
            /** The VAT registration ID of the company. */
            vatRegistrationId?: string;
            /** The contact persons attached to the company. */
            contactPersons?: Array<{
              /** The salutation of the contact person. */
              salutation?: string;
              /** The first name of the contact person. */
              firstName?: string;
              /**
               * The last name of the contact person.
               * @minLength 1
               */
              lastName: string;
              /** Whether the contact person is the primary contact. */
              primary?: boolean;
              /** The email address of the contact person. */
              emailAddress?: string;
              /** The phone number of the contact person. */
              phoneNumber?: string;
            }>;
          };
          /** The Lexoffice person object used for private-person contacts. */
          person?: {
            /** The salutation of the person. */
            salutation?: string;
            /** The first name of the person. */
            firstName?: string;
            /**
             * The last name of the person.
             * @minLength 1
             */
            lastName: string;
          };
          /** The address collections attached to the contact. */
          addresses?: {
            /** The billing addresses. */
            billing?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
            /** The shipping addresses. */
            shipping?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
          };
          /** The XRechnung attributes attached to the contact. */
          xRechnung?: {
            /** The Leitweg-ID of the customer. */
            buyerReference?: string;
            /** Your vendor number as used by the customer. */
            vendorNumberAtCustomer?: string;
          };
          /** The categorized contact values grouped by Lexoffice field name. */
          emailAddresses?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /** The categorized phone numbers grouped by Lexoffice field name. */
          phoneNumbers?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            mobile?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            fax?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /** The optional contact note. */
          note?: string;
          /** Whether the contact is archived. */
          archived?: boolean;
        };
      };
    };
    /** Retrieve the current Lexoffice connection profile and organization metadata. */
    "lexoffice.get_profile": {
      input: Record<string, never>;
      output: {
        /**
         * The Lexoffice resource identifier.
         * @format uuid
         */
        organizationId: string;
        /**
         * The organization name registered at Lexoffice.
         * @minLength 1
         */
        companyName: string;
        /** The metadata about the established Lexoffice connection. */
        created: {
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          userId: string;
          /**
           * The Lexoffice user who created the connection.
           * @minLength 1
           */
          userName: string;
          /**
           * The email address of the Lexoffice user.
           * @minLength 1
           */
          userEmail: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          date: string;
        };
        /**
         * The Lexoffice resource identifier.
         * @format uuid
         */
        connectionId: string;
        /** The product features returned by Lexoffice. */
        features?: Array<string>;
        /** The business features returned by Lexoffice. */
        businessFeatures?: Array<string>;
        /** The subscription status returned by Lexoffice. */
        subscriptionStatus?: string;
        /** The configured tax type of the organization. */
        taxType?: string;
        /** The configured distance sales principle. */
        distanceSalesPrinciple?: string;
        /** Whether the organization is marked as a small business. */
        smallBusiness?: boolean;
      };
    };
    /** List Lexoffice articles with optional articleNumber, GTIN, or type filters. */
    "lexoffice.list_articles": {
      input: {
        /**
         * Filter articles by article number.
         * @minLength 1
         */
        articleNumber?: string;
        /**
         * Filter articles by GTIN.
         * @minLength 1
         */
        gtin?: string;
        /** The Lexoffice article type. */
        type?: "PRODUCT" | "SERVICE";
        /**
         * The 0-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The page size to request. Lexoffice allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        size?: number;
      };
      output: {
        /** The articles returned by the current page. */
        content: Array<{
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The title of the article.
           * @minLength 1
           */
          title: string;
          /** The article description. */
          description?: string;
          /** The Lexoffice article type. */
          type: "PRODUCT" | "SERVICE";
          /** The article number. */
          articleNumber?: string;
          /** The Global Trade Item Number of the article. */
          gtin?: string;
          /** The internal article note. */
          note?: string;
          /**
           * The unit name of the article.
           * @minLength 1
           */
          unitName: string;
          /** The Lexoffice article price object. */
          price: {
            /** The net price of the article. */
            netPrice?: number;
            /** The gross price of the article. */
            grossPrice?: number;
            /** The leading article price type. */
            leadingPrice: "NET" | "GROSS";
            /** The article tax rate accepted by Lexoffice. */
            taxRate: number;
          };
          /** The article version used for optimistic locking. */
          version: number;
        }>;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        totalPages: number;
        /**
         * The total number of matching articles.
         * @minimum 0
         */
        totalElements: number;
        /** Whether this is the last page. */
        last: boolean;
        /** The sort specification returned by Lexoffice. */
        sort: Array<{
          /**
           * The property used for sorting.
           * @minLength 1
           */
          property: string;
          /**
           * The sort direction returned by Lexoffice.
           * @minLength 1
           */
          direction: string;
          /** Whether the sort ignores case. */
          ignoreCase: boolean;
          /**
           * The null-handling strategy.
           * @minLength 1
           */
          nullHandling: string;
          /** Whether the sort order is ascending. */
          ascending: boolean;
        }>;
        /**
         * The page size returned by Lexoffice.
         * @minimum 0
         */
        size: number;
        /**
         * The current 0-based page index.
         * @minimum 0
         */
        number: number;
        /** Whether this is the first page. */
        first: boolean;
        /**
         * The number of elements in the current page.
         * @minimum 0
         */
        numberOfElements: number;
      };
    };
    /** List Lexoffice contacts with optional filters and page navigation. */
    "lexoffice.list_contacts": {
      input: {
        /**
         * Filter contacts by email with Lexoffice substring semantics.
         * @minLength 3
         */
        email?: string;
        /**
         * Filter contacts by name with Lexoffice substring semantics.
         * @minLength 3
         */
        name?: string;
        /** Filter contacts by customer or vendor number. */
        number?: number;
        /** Whether the filter should be applied. */
        customer?: boolean;
        /** Whether the filter should be applied. */
        vendor?: boolean;
        /**
         * The 0-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The page size to request. Lexoffice allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        size?: number;
      };
      output: {
        /** The contacts returned by the current page. */
        content: Array<{
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          organizationId: string;
          /** The contact version used for optimistic locking. */
          version: number;
          /** The Lexoffice roles object. Each present key activates the corresponding role. */
          roles: {
            /** The customer role details returned by Lexoffice. */
            customer?: {
              /** The generated customer number. */
              number: number;
            };
            /** The vendor role details returned by Lexoffice. */
            vendor?: {
              /** The generated vendor number. */
              number: number;
            };
          };
          /** The Lexoffice company object used for company contacts. */
          company?: {
            /** Whether tax-free invoices are allowed for this company. */
            allowTaxFreeInvoices?: boolean;
            /**
             * The company name.
             * @minLength 1
             */
            name: string;
            /** The tax number of the company. */
            taxNumber?: string;
            /** The VAT registration ID of the company. */
            vatRegistrationId?: string;
            /** The contact persons attached to the company. */
            contactPersons?: Array<{
              /** The salutation of the contact person. */
              salutation?: string;
              /** The first name of the contact person. */
              firstName?: string;
              /**
               * The last name of the contact person.
               * @minLength 1
               */
              lastName: string;
              /** Whether the contact person is the primary contact. */
              primary?: boolean;
              /** The email address of the contact person. */
              emailAddress?: string;
              /** The phone number of the contact person. */
              phoneNumber?: string;
            }>;
          };
          /** The Lexoffice person object used for private-person contacts. */
          person?: {
            /** The salutation of the person. */
            salutation?: string;
            /** The first name of the person. */
            firstName?: string;
            /**
             * The last name of the person.
             * @minLength 1
             */
            lastName: string;
          };
          /** The address collections attached to the contact. */
          addresses?: {
            /** The billing addresses. */
            billing?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
            /** The shipping addresses. */
            shipping?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
          };
          /** The XRechnung attributes attached to the contact. */
          xRechnung?: {
            /** The Leitweg-ID of the customer. */
            buyerReference?: string;
            /** Your vendor number as used by the customer. */
            vendorNumberAtCustomer?: string;
          };
          /** The categorized contact values grouped by Lexoffice field name. */
          emailAddresses?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /** The categorized phone numbers grouped by Lexoffice field name. */
          phoneNumbers?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            mobile?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            fax?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /** The optional contact note. */
          note?: string;
          /** Whether the contact is archived. */
          archived?: boolean;
        }>;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        totalPages: number;
        /**
         * The total number of matching contacts.
         * @minimum 0
         */
        totalElements: number;
        /** Whether this is the last page. */
        last: boolean;
        /** The sort specification returned by Lexoffice. */
        sort: Array<{
          /**
           * The property used for sorting.
           * @minLength 1
           */
          property: string;
          /**
           * The sort direction returned by Lexoffice.
           * @minLength 1
           */
          direction: string;
          /** Whether the sort ignores case. */
          ignoreCase: boolean;
          /**
           * The null-handling strategy.
           * @minLength 1
           */
          nullHandling: string;
          /** Whether the sort order is ascending. */
          ascending: boolean;
        }>;
        /**
         * The page size returned by Lexoffice.
         * @minimum 0
         */
        size: number;
        /**
         * The current 0-based page index.
         * @minimum 0
         */
        number: number;
        /** Whether this is the first page. */
        first: boolean;
        /**
         * The number of elements in the current page.
         * @minimum 0
         */
        numberOfElements: number;
      };
    };
    /** List Lexoffice voucher metadata using the official voucherlist filters and paging. */
    "lexoffice.list_voucherlist": {
      input: {
        /**
         * A comma-separated Lexoffice voucher type list, or the value any.
         * @minLength 1
         */
        voucherType: string;
        /**
         * A comma-separated Lexoffice voucher status list, or the value any.
         * @minLength 1
         */
        voucherStatus: string;
        /** Whether the filter should be applied. */
        archived?: boolean;
        /**
         * The Lexoffice resource identifier.
         * @format uuid
         */
        contactId?: string;
        /** The date value in YYYY-MM-DD format. */
        voucherDateFrom?: string;
        /** The date value in YYYY-MM-DD format. */
        voucherDateTo?: string;
        /** The date value in YYYY-MM-DD format. */
        createdDateFrom?: string;
        /** The date value in YYYY-MM-DD format. */
        createdDateTo?: string;
        /** The date value in YYYY-MM-DD format. */
        updatedDateFrom?: string;
        /** The date value in YYYY-MM-DD format. */
        updatedDateTo?: string;
        /**
         * Filter vouchers by voucher number.
         * @minLength 1
         */
        voucherNumber?: string;
        /**
         * The page size to request. Lexoffice allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        size?: number;
        /**
         * The 0-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The Lexoffice sort expression such as voucherDate,DESC or updatedDate,ASC.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The vouchers returned by the current page. */
        content: Array<{
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The voucher type identifier.
           * @minLength 1
           */
          voucherType: string;
          /**
           * The voucher status identifier.
           * @minLength 1
           */
          voucherStatus: string;
          /**
           * The voucher number.
           * @minLength 1
           */
          voucherNumber: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          voucherDate: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          createdDate: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          updatedDate: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          dueDate: string | null;
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          contactId: string | null;
          /** The human-readable contact name. */
          contactName: string | null;
          /** The total voucher amount. */
          totalAmount: number;
          /** The currently open amount of the voucher. */
          openAmount: number | null;
          /**
           * The voucher currency.
           * @minLength 1
           */
          currency: string;
          /** Whether the voucher is archived. */
          archived: boolean;
        }>;
        /** Whether this is the first page. */
        first: boolean;
        /** Whether this is the last page. */
        last: boolean;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        totalPages: number;
        /**
         * The total number of matching vouchers.
         * @minimum 0
         */
        totalElements: number;
        /**
         * The number of elements in the current page.
         * @minimum 0
         */
        numberOfElements: number;
        /**
         * The page size returned by Lexoffice.
         * @minimum 0
         */
        size: number;
        /**
         * The current 0-based page index.
         * @minimum 0
         */
        number: number;
        /** The sort specification returned by Lexoffice. */
        sort: Array<{
          /**
           * The property used for sorting.
           * @minLength 1
           */
          property: string;
          /**
           * The sort direction returned by Lexoffice.
           * @minLength 1
           */
          direction: string;
          /** Whether the sort ignores case. */
          ignoreCase: boolean;
          /**
           * The null-handling strategy.
           * @minLength 1
           */
          nullHandling: string;
          /** Whether the sort order is ascending. */
          ascending: boolean;
        }>;
      };
    };
    /** Update one Lexoffice article by ID using the latest optimistic-locking version. */
    "lexoffice.update_article": {
      input: {
        /**
         * The Lexoffice resource identifier.
         * @format uuid
         */
        id: string;
        /** The Lexoffice article payload used for creating or updating an article. */
        data: {
          /**
           * The title of the article.
           * @minLength 1
           */
          title: string;
          /** The article description. */
          description?: string;
          /** The Lexoffice article type. */
          type: "PRODUCT" | "SERVICE";
          /** The article number. */
          articleNumber?: string;
          /** The Global Trade Item Number of the article. */
          gtin?: string;
          /** The internal article note. */
          note?: string;
          /**
           * The unit name of the article.
           * @minLength 1
           */
          unitName: string;
          /** The Lexoffice article price object. */
          price: {
            /** The net price of the article. */
            netPrice?: number;
            /** The gross price of the article. */
            grossPrice?: number;
            /** The leading article price type. */
            leadingPrice: "NET" | "GROSS";
            /** The article tax rate accepted by Lexoffice. */
            taxRate: number;
          };
          /**
           * The article version used for optimistic locking.
           * @minimum 0
           */
          version?: number;
        };
      };
      output: {
        /** The Lexoffice action result envelope. */
        result: {
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The canonical Lexoffice resource URI.
           * @minLength 1
           */
          resourceUri: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          createdDate: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          updatedDate: string;
          /**
           * The latest version returned by Lexoffice.
           * @minimum 0
           */
          version: number;
        };
      };
    };
    /** Update one Lexoffice contact by ID using the latest optimistic-locking version. */
    "lexoffice.update_contact": {
      input: {
        /**
         * The Lexoffice resource identifier.
         * @format uuid
         */
        id: string;
        /** The Lexoffice contact payload used for creating or updating a contact. */
        data: {
          /**
           * The optimistic-locking version. Use 0 for POST and the latest value for PUT.
           * @minimum 0
           */
          version: number;
          /** The Lexoffice role payload used when creating or updating a contact. */
          roles: {
            /** An empty role object expected by Lexoffice. */
            customer?: Record<string, never>;
            /** An empty role object expected by Lexoffice. */
            vendor?: Record<string, never>;
          };
          /** The Lexoffice company object used for company contacts. */
          company?: {
            /** Whether tax-free invoices are allowed for this company. */
            allowTaxFreeInvoices?: boolean;
            /**
             * The company name.
             * @minLength 1
             */
            name: string;
            /** The tax number of the company. */
            taxNumber?: string;
            /** The VAT registration ID of the company. */
            vatRegistrationId?: string;
            /** The contact persons attached to the company. */
            contactPersons?: Array<{
              /** The salutation of the contact person. */
              salutation?: string;
              /** The first name of the contact person. */
              firstName?: string;
              /**
               * The last name of the contact person.
               * @minLength 1
               */
              lastName: string;
              /** Whether the contact person is the primary contact. */
              primary?: boolean;
              /** The email address of the contact person. */
              emailAddress?: string;
              /** The phone number of the contact person. */
              phoneNumber?: string;
            }>;
          };
          /** The Lexoffice person object used for private-person contacts. */
          person?: {
            /** The salutation of the person. */
            salutation?: string;
            /** The first name of the person. */
            firstName?: string;
            /**
             * The last name of the person.
             * @minLength 1
             */
            lastName: string;
          };
          /** The address collections attached to the contact. */
          addresses?: {
            /** The billing addresses. */
            billing?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
            /** The shipping addresses. */
            shipping?: Array<{
              /** Additional address information. */
              supplement?: string;
              /** Street and street number. */
              street?: string;
              /** ZIP or postal code. */
              zip?: string;
              /** City name. */
              city?: string;
              /**
               * The ISO 3166 alpha-2 country code.
               * @minLength 2
               * @maxLength 2
               */
              countryCode: string;
            }>;
          };
          /** The XRechnung attributes attached to the contact. */
          xRechnung?: {
            /** The Leitweg-ID of the customer. */
            buyerReference?: string;
            /** Your vendor number as used by the customer. */
            vendorNumberAtCustomer?: string;
          };
          /** The categorized contact values grouped by Lexoffice field name. */
          emailAddresses?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /** The categorized phone numbers grouped by Lexoffice field name. */
          phoneNumbers?: {
            /** A list of string values. */
            business?: Array<string>;
            /** A list of string values. */
            office?: Array<string>;
            /** A list of string values. */
            mobile?: Array<string>;
            /** A list of string values. */
            private?: Array<string>;
            /** A list of string values. */
            fax?: Array<string>;
            /** A list of string values. */
            other?: Array<string>;
          };
          /**
           * The optional contact note with a maximum length of 1000 characters.
           * @maxLength 1000
           */
          note?: string;
        };
      };
      output: {
        /** The Lexoffice action result envelope. */
        result: {
          /**
           * The Lexoffice resource identifier.
           * @format uuid
           */
          id: string;
          /**
           * The canonical Lexoffice resource URI.
           * @minLength 1
           */
          resourceUri: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          createdDate: string;
          /**
           * The RFC 3339 timestamp returned by Lexoffice.
           * @format date-time
           */
          updatedDate: string;
          /**
           * The latest version returned by Lexoffice.
           * @minimum 0
           */
          version: number;
        };
      };
    };
  }
}
