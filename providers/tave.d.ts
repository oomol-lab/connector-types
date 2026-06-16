import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Táve contact by its official ULID identifier. */
    "tave.get_contact": {
      input: {
        /**
         * The VSCO Workspace contact ULID returned by list_contacts or another upstream workflow.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A normalized Táve contact summary or detail record. */
        contact: {
          /** The contact ULID returned by Táve. */
          id: string | null;
          /** The Táve contact kind returned by the API. */
          kind: "company" | "employee" | "location" | "person" | null;
          /** The contact display name. */
          name: string | null;
          /** The first name for person-like contacts. */
          firstName: string | null;
          /** The last name for person-like contacts. */
          lastName: string | null;
          /** The company name associated with the contact. */
          companyName: string | null;
          /** The employee display alias when present. */
          displayAs: string | null;
          /** The primary email address. */
          email: string | null;
          /** The secondary email address. */
          secondaryEmail: string | null;
          /** The main phone value used by company or location contacts. */
          phone: string | null;
          /** The mobile phone number. */
          cellPhone: string | null;
          /** The home phone number. */
          homePhone: string | null;
          /** The work phone number. */
          workPhone: string | null;
          /** The UTC created timestamp. */
          created: string | null;
          /** The UTC modified timestamp. */
          modified: string | null;
          /** Whether the contact is hidden. */
          hidden: boolean | null;
          /** Whether the contact is pinned or favorited. */
          pinned: boolean | null;
          /** The website URL associated with the contact. */
          url: string | null;
          /** A normalized Táve address object when the upstream contact or studio includes one. */
          address: {
            /** The street address line. */
            streetAddress: string | null;
            /** The village or district name. */
            village: string | null;
            /** The city value. */
            city: string | null;
            /** The state, province, or region value. */
            state: string | null;
            /** The postal or ZIP code. */
            postalCode: string | null;
            /** The ISO alpha-2 country code when available. */
            country: string | null;
            /** The geocoded latitude value when available. */
            latitude: number | null;
            /** The geocoded longitude value when available. */
            longitude: number | null;
            /** The timezone name attached to the address when available. */
            timezone: string | null;
          } | null;
          /** A normalized Táve address object when the upstream contact or studio includes one. */
          mailingAddress: {
            /** The street address line. */
            streetAddress: string | null;
            /** The village or district name. */
            village: string | null;
            /** The city value. */
            city: string | null;
            /** The state, province, or region value. */
            state: string | null;
            /** The postal or ZIP code. */
            postalCode: string | null;
            /** The ISO alpha-2 country code when available. */
            country: string | null;
            /** The geocoded latitude value when available. */
            latitude: number | null;
            /** The geocoded longitude value when available. */
            longitude: number | null;
            /** The timezone name attached to the address when available. */
            timezone: string | null;
          } | null;
          /** Normalized links associated with one Táve resource. */
          links: {
            /** The API URL for this resource. */
            selfHref: string | null;
            /** The manager UI URL for this resource when returned. */
            managerHref: string | null;
            /** The client-facing URL for this resource when returned. */
            clientHref: string | null;
          };
          /** The raw upstream contact object returned by Táve. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch the current Táve studio profile for the connected API key. */
    "tave.get_my_studio": {
      input: Record<string, never>;
      output: {
        /** The current Táve studio profile returned by the API. */
        studio: {
          /** The studio ULID. */
          id: string | null;
          /** The studio name. */
          name: string | null;
          /** The contact email configured on the studio. */
          email: string | null;
          /** The three-letter currency code configured on the studio. */
          currencyCode: string | null;
          /** The date format configured on the studio. */
          dateFormat: string | null;
          /** The decimal separator configured on the studio. */
          decimalSeparator: string | null;
          /** The default brand ULID when configured. */
          defaultBrandId: string | null;
          /** The temperature unit configured on the studio. */
          temperature: string | null;
          /** The thousands separator configured on the studio. */
          thousandsSeparator: string | null;
          /** The time format configured on the studio. */
          timeFormat: string | null;
          /** The timezone ULID configured on the studio. */
          timezoneId: string | null;
          /** The day of week that starts the studio calendar. */
          weekStartsOn: string | null;
          /** Whether readonly mode is enabled on the studio. */
          readonlyEnabled: boolean | null;
          /** The UTC timestamp when readonly mode was enabled, when present. */
          readonlyEnabledAt: string | null;
          /** The UTC created timestamp. */
          created: string | null;
          /** The UTC modified timestamp. */
          modified: string | null;
          /** Whether the studio resource is marked hidden. */
          hidden: boolean | null;
          /** Normalized links associated with one Táve resource. */
          links: {
            /** The API URL for this resource. */
            selfHref: string | null;
            /** The manager UI URL for this resource when returned. */
            managerHref: string | null;
            /** The client-facing URL for this resource when returned. */
            clientHref: string | null;
          };
          /** The raw upstream studio object returned by Táve. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List contacts in the current Táve studio with official pagination, hidden, email, and sort filters. */
    "tave.list_contacts": {
      input: {
        /**
         * The page number of contact results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of contacts to return per page. VSCO Workspace accepts 10 through 100.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /** Whether hidden contacts should be included in the returned list. */
        includeHidden?: boolean;
        /**
         * Only return contacts matching this email address.
         * @format email
         */
        email?: string;
        /**
         * The official VSCO Workspace sort expression, such as id, modified desc, or name asc.
         * @minLength 1
         * @pattern \S
         */
        sortBy?: string;
      };
      output: {
        /** Pagination metadata returned by Táve contact listings. */
        pagination: {
          /** The current page number returned by Táve. */
          currentPage: number | null;
          /** The total number of pages available for this query. */
          totalPages: number | null;
          /** The total number of contacts matching this query. */
          totalItems: number | null;
          /** The number of contacts returned in the current page payload. */
          rows: number | null;
        };
        /** The normalized Táve contacts returned for this page. */
        contacts: Array<{
          /** The contact ULID returned by Táve. */
          id: string | null;
          /** The Táve contact kind returned by the API. */
          kind: "company" | "employee" | "location" | "person" | null;
          /** The contact display name. */
          name: string | null;
          /** The first name for person-like contacts. */
          firstName: string | null;
          /** The last name for person-like contacts. */
          lastName: string | null;
          /** The company name associated with the contact. */
          companyName: string | null;
          /** The employee display alias when present. */
          displayAs: string | null;
          /** The primary email address. */
          email: string | null;
          /** The secondary email address. */
          secondaryEmail: string | null;
          /** The main phone value used by company or location contacts. */
          phone: string | null;
          /** The mobile phone number. */
          cellPhone: string | null;
          /** The home phone number. */
          homePhone: string | null;
          /** The work phone number. */
          workPhone: string | null;
          /** The UTC created timestamp. */
          created: string | null;
          /** The UTC modified timestamp. */
          modified: string | null;
          /** Whether the contact is hidden. */
          hidden: boolean | null;
          /** Whether the contact is pinned or favorited. */
          pinned: boolean | null;
          /** The website URL associated with the contact. */
          url: string | null;
          /** A normalized Táve address object when the upstream contact or studio includes one. */
          address: {
            /** The street address line. */
            streetAddress: string | null;
            /** The village or district name. */
            village: string | null;
            /** The city value. */
            city: string | null;
            /** The state, province, or region value. */
            state: string | null;
            /** The postal or ZIP code. */
            postalCode: string | null;
            /** The ISO alpha-2 country code when available. */
            country: string | null;
            /** The geocoded latitude value when available. */
            latitude: number | null;
            /** The geocoded longitude value when available. */
            longitude: number | null;
            /** The timezone name attached to the address when available. */
            timezone: string | null;
          } | null;
          /** A normalized Táve address object when the upstream contact or studio includes one. */
          mailingAddress: {
            /** The street address line. */
            streetAddress: string | null;
            /** The village or district name. */
            village: string | null;
            /** The city value. */
            city: string | null;
            /** The state, province, or region value. */
            state: string | null;
            /** The postal or ZIP code. */
            postalCode: string | null;
            /** The ISO alpha-2 country code when available. */
            country: string | null;
            /** The geocoded latitude value when available. */
            latitude: number | null;
            /** The geocoded longitude value when available. */
            longitude: number | null;
            /** The timezone name attached to the address when available. */
            timezone: string | null;
          } | null;
          /** Normalized links associated with one Táve resource. */
          links: {
            /** The API URL for this resource. */
            selfHref: string | null;
            /** The manager UI URL for this resource when returned. */
            managerHref: string | null;
            /** The client-facing URL for this resource when returned. */
            clientHref: string | null;
          };
          /** The raw upstream contact object returned by Táve. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
