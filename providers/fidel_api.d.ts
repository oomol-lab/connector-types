import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Fidel brand by brand ID. */
    "fidel_api.get_brand": {
      input: {
        /**
         * The Fidel brand ID to fetch.
         * @minLength 1
         */
        brandId: string;
      };
      output: {
        /** A Fidel brand record normalized by the connector. */
        brand: {
          /** The Fidel brand ID. */
          id: string;
          /** The Fidel account ID that owns the brand. */
          accountId: string | null;
          /** The ISO timestamp when the brand was created. */
          created: string | null;
          /** The ISO timestamp when the brand was last updated. */
          updated: string | null;
          /** The brand display name. */
          name: string | null;
          /** The optional metadata object returned by Fidel. */
          metadata: Record<string, unknown> | null;
          /** The brand logo URL when Fidel returned one. */
          logoUrl: string | null;
          /** Whether the brand belongs to the live environment. */
          live: boolean | null;
          /** Whether the brand requires cardholder consent. */
          consent: boolean | null;
          /** The brand website URL when Fidel returned one. */
          websiteUrl: string | null;
        };
        /** The Fidel API resource path that handled the request. */
        resource: string;
        /** The upstream HTTP status code returned by Fidel. */
        status: number;
        /** The upstream execution time in milliseconds when Fidel returned it. */
        executionMs: number | null;
      };
    };
    /** Fetch one Fidel card by card ID. */
    "fidel_api.get_card": {
      input: {
        /**
         * The Fidel card ID to fetch.
         * @minLength 1
         */
        cardId: string;
      };
      output: {
        /** A Fidel card record normalized by the connector. */
        card: {
          /** The Fidel card ID. */
          id: string;
          /** The Fidel account ID that owns the card. */
          accountId: string | null;
          /** The ISO alpha-3 country code for the card. */
          countryCode: string | null;
          /** The ISO timestamp when the card was created. */
          created: string | null;
          /** The card expiration year. */
          expYear: number | null;
          /** The ISO date for the card expiration month. */
          expDate: string | null;
          /** Whether the card belongs to the live environment. */
          live: boolean | null;
          /** The last four card digits. */
          lastNumbers: string | null;
          /** The card expiration month. */
          expMonth: number | null;
          /** The ISO timestamp when the card was last updated. */
          updated: string | null;
          /** The Fidel program ID that owns the card. */
          programId: string | null;
          /** The first six card digits. */
          firstNumbers: string | null;
          /** The card network reported by Fidel. */
          scheme: string | null;
          /** The card type reported by Fidel. */
          type: string | null;
        };
        /** The Fidel API resource path that handled the request. */
        resource: string;
        /** The upstream HTTP status code returned by Fidel. */
        status: number;
        /** The upstream execution time in milliseconds when Fidel returned it. */
        executionMs: number | null;
      };
    };
    /** Fetch one Fidel transaction by transaction ID. */
    "fidel_api.get_transaction": {
      input: {
        /**
         * The Fidel transaction ID to fetch.
         * @minLength 1
         */
        transactionId: string;
      };
      output: {
        /** A Fidel transaction record normalized by the connector. */
        transaction: {
          /** The Fidel transaction ID. */
          id: string;
          /** The Fidel program ID that owns the transaction. */
          programId: string | null;
          /** The Fidel account ID that owns the transaction. */
          accountId: string | null;
          /** The ISO timestamp when the transaction was created. */
          created: string | null;
          /** The ISO timestamp when the transaction was last updated. */
          updated: string | null;
          /** The transaction amount. */
          amount: number | null;
          /** The ISO currency code for the transaction. */
          currency: string | null;
          /** The normalized authorization or approval code returned by Fidel. */
          authorizationCode: string | null;
          /** Whether Fidel classified the event as an authorization. */
          auth: boolean | null;
          /** Whether Fidel classified the event as cleared. */
          cleared: boolean | null;
          /** The optional wallet object returned by Fidel. */
          wallet: Record<string, unknown> | null;
          /** The optional offer object returned by Fidel. */
          offer: Record<string, unknown> | null;
          /** The upstream transaction datetime string returned by Fidel. */
          datetime: string | null;
          /** The card snapshot nested inside a Fidel transaction. */
          card: {
            /** The Fidel card ID. */
            id: string | null;
            /** The first six card digits. */
            firstNumbers: string | null;
            /** The last four card digits. */
            lastNumbers: string | null;
            /** The card network reported by Fidel. */
            scheme: string | null;
          };
          /** The location snapshot nested inside a Fidel transaction. */
          location: {
            /** The Fidel location ID. */
            id: string | null;
            /** The location street address. */
            address: string | null;
            /** The location city. */
            city: string | null;
            /** The ISO alpha-3 country code for the location. */
            countryCode: string | null;
            /** The optional latitude and longitude returned by Fidel for this location. */
            geolocation: {
              /** The latitude coordinate. */
              latitude: number | null;
              /** The longitude coordinate. */
              longitude: number | null;
            } | null;
            /** The location postal code. */
            postcode: string | null;
            /** The location state or region field returned by Fidel. */
            state: string | null;
            /** The IANA timezone for the location. */
            timezone: string | null;
            /** The optional metadata object returned by Fidel. */
            metadata: Record<string, unknown> | null;
          };
          /** The brand snapshot nested inside a Fidel transaction. */
          brand: {
            /** The Fidel brand ID. */
            id: string | null;
            /** The brand name. */
            name: string | null;
            /** The brand logo URL when Fidel returned one. */
            logoUrl: string | null;
            /** The optional metadata object returned by Fidel. */
            metadata: Record<string, unknown> | null;
          };
          /** Network-specific identifiers returned by Fidel for a transaction. */
          identifiers: {
            /** The American Express approval code when Fidel returned one. */
            amexApprovalCode: string | null;
            /** The Mastercard authorization code when Fidel returned one. */
            mastercardAuthCode: string | null;
            /** The Mastercard reference number when Fidel returned one. */
            mastercardRefNumber: string | null;
            /** The Mastercard transaction sequence number when Fidel returned one. */
            mastercardTransactionSequenceNumber: string | null;
            /** The merchant identifier returned by Fidel. */
            mid: string | null;
            /** The Visa authorization code when Fidel returned one. */
            visaAuthCode: string | null;
          };
          /** Whether Fidel marked the transaction as card present. */
          cardPresent: boolean | null;
        };
        /** The Fidel API resource path that handled the request. */
        resource: string;
        /** The upstream HTTP status code returned by Fidel. */
        status: number;
        /** The upstream execution time in milliseconds when Fidel returned it. */
        executionMs: number | null;
      };
    };
    /** List Fidel brands available to the connected secret API key. */
    "fidel_api.list_brands": {
      input: {
        /**
         * The maximum number of brands to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The opaque cursor string returned as nextCursor by a previous Fidel list action. Pass it back unchanged.
         * @minLength 1
         */
        start?: string;
        /** Sort order for the upstream created or datetime field. */
        order?: "asc" | "desc";
        /**
         * Filter brands by name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The number of brands returned by Fidel. */
        count: number;
        /** The brand records returned by Fidel. */
        brands: Array<{
          /** The Fidel brand ID. */
          id: string;
          /** The Fidel account ID that owns the brand. */
          accountId: string | null;
          /** The ISO timestamp when the brand was created. */
          created: string | null;
          /** The ISO timestamp when the brand was last updated. */
          updated: string | null;
          /** The brand display name. */
          name: string | null;
          /** The optional metadata object returned by Fidel. */
          metadata: Record<string, unknown> | null;
          /** The brand logo URL when Fidel returned one. */
          logoUrl: string | null;
          /** Whether the brand belongs to the live environment. */
          live: boolean | null;
          /** Whether the brand requires cardholder consent. */
          consent: boolean | null;
          /** The brand website URL when Fidel returned one. */
          websiteUrl: string | null;
        }>;
        /** The cursor string to pass back as start in the next list_brands call, or null when Fidel did not return one. */
        nextCursor: string | null;
        /** The Fidel API resource path that handled the request. */
        resource: string;
        /** The upstream HTTP status code returned by Fidel. */
        status: number;
        /** The upstream execution time in milliseconds when Fidel returned it. */
        executionMs: number | null;
      };
    };
    /** List Fidel cards for one program ID. */
    "fidel_api.list_cards": {
      input: {
        /**
         * The Fidel program ID whose cards you want to list.
         * @minLength 1
         */
        programId: string;
        /**
         * The maximum number of cards to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The opaque cursor string returned as nextCursor by a previous Fidel list action. Pass it back unchanged.
         * @minLength 1
         */
        start?: string;
        /** Sort order for the upstream created or datetime field. */
        order?: "asc" | "desc";
      };
      output: {
        /** The number of cards returned by Fidel. */
        count: number;
        /** The card records returned by Fidel. */
        cards: Array<{
          /** The Fidel card ID. */
          id: string;
          /** The Fidel account ID that owns the card. */
          accountId: string | null;
          /** The ISO alpha-3 country code for the card. */
          countryCode: string | null;
          /** The ISO timestamp when the card was created. */
          created: string | null;
          /** The card expiration year. */
          expYear: number | null;
          /** The ISO date for the card expiration month. */
          expDate: string | null;
          /** Whether the card belongs to the live environment. */
          live: boolean | null;
          /** The last four card digits. */
          lastNumbers: string | null;
          /** The card expiration month. */
          expMonth: number | null;
          /** The ISO timestamp when the card was last updated. */
          updated: string | null;
          /** The Fidel program ID that owns the card. */
          programId: string | null;
          /** The first six card digits. */
          firstNumbers: string | null;
          /** The card network reported by Fidel. */
          scheme: string | null;
          /** The card type reported by Fidel. */
          type: string | null;
        }>;
        /** The cursor string to pass back as start in the next list_cards call, or null when Fidel did not return one. */
        nextCursor: string | null;
        /** The Fidel API resource path that handled the request. */
        resource: string;
        /** The upstream HTTP status code returned by Fidel. */
        status: number;
        /** The upstream execution time in milliseconds when Fidel returned it. */
        executionMs: number | null;
      };
    };
    /** List Fidel transactions for one program ID. */
    "fidel_api.list_transactions": {
      input: {
        /**
         * The Fidel program ID whose transactions you want to list.
         * @minLength 1
         */
        programId: string;
        /**
         * The maximum number of transactions to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The opaque cursor string returned as nextCursor by a previous Fidel list action. Pass it back unchanged.
         * @minLength 1
         */
        start?: string;
        /** Sort order for the upstream created or datetime field. */
        order?: "asc" | "desc";
        /**
         * The inclusive starting ISO date-time filter.
         * @minLength 1
         * @format date-time
         */
        from?: string;
        /**
         * The inclusive ending ISO date-time filter.
         * @minLength 1
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** The number of transactions returned by Fidel. */
        count: number;
        /** The transaction records returned by Fidel. */
        transactions: Array<{
          /** The Fidel transaction ID. */
          id: string;
          /** The Fidel program ID that owns the transaction. */
          programId: string | null;
          /** The Fidel account ID that owns the transaction. */
          accountId: string | null;
          /** The ISO timestamp when the transaction was created. */
          created: string | null;
          /** The ISO timestamp when the transaction was last updated. */
          updated: string | null;
          /** The transaction amount. */
          amount: number | null;
          /** The ISO currency code for the transaction. */
          currency: string | null;
          /** The normalized authorization or approval code returned by Fidel. */
          authorizationCode: string | null;
          /** Whether Fidel classified the event as an authorization. */
          auth: boolean | null;
          /** Whether Fidel classified the event as cleared. */
          cleared: boolean | null;
          /** The optional wallet object returned by Fidel. */
          wallet: Record<string, unknown> | null;
          /** The optional offer object returned by Fidel. */
          offer: Record<string, unknown> | null;
          /** The upstream transaction datetime string returned by Fidel. */
          datetime: string | null;
          /** The card snapshot nested inside a Fidel transaction. */
          card: {
            /** The Fidel card ID. */
            id: string | null;
            /** The first six card digits. */
            firstNumbers: string | null;
            /** The last four card digits. */
            lastNumbers: string | null;
            /** The card network reported by Fidel. */
            scheme: string | null;
          };
          /** The location snapshot nested inside a Fidel transaction. */
          location: {
            /** The Fidel location ID. */
            id: string | null;
            /** The location street address. */
            address: string | null;
            /** The location city. */
            city: string | null;
            /** The ISO alpha-3 country code for the location. */
            countryCode: string | null;
            /** The optional latitude and longitude returned by Fidel for this location. */
            geolocation: {
              /** The latitude coordinate. */
              latitude: number | null;
              /** The longitude coordinate. */
              longitude: number | null;
            } | null;
            /** The location postal code. */
            postcode: string | null;
            /** The location state or region field returned by Fidel. */
            state: string | null;
            /** The IANA timezone for the location. */
            timezone: string | null;
            /** The optional metadata object returned by Fidel. */
            metadata: Record<string, unknown> | null;
          };
          /** The brand snapshot nested inside a Fidel transaction. */
          brand: {
            /** The Fidel brand ID. */
            id: string | null;
            /** The brand name. */
            name: string | null;
            /** The brand logo URL when Fidel returned one. */
            logoUrl: string | null;
            /** The optional metadata object returned by Fidel. */
            metadata: Record<string, unknown> | null;
          };
          /** Network-specific identifiers returned by Fidel for a transaction. */
          identifiers: {
            /** The American Express approval code when Fidel returned one. */
            amexApprovalCode: string | null;
            /** The Mastercard authorization code when Fidel returned one. */
            mastercardAuthCode: string | null;
            /** The Mastercard reference number when Fidel returned one. */
            mastercardRefNumber: string | null;
            /** The Mastercard transaction sequence number when Fidel returned one. */
            mastercardTransactionSequenceNumber: string | null;
            /** The merchant identifier returned by Fidel. */
            mid: string | null;
            /** The Visa authorization code when Fidel returned one. */
            visaAuthCode: string | null;
          };
          /** Whether Fidel marked the transaction as card present. */
          cardPresent: boolean | null;
        }>;
        /** The cursor string to pass back as start in the next list_transactions call, or null when Fidel did not return one. */
        nextCursor: string | null;
        /** The Fidel API resource path that handled the request. */
        resource: string;
        /** The upstream HTTP status code returned by Fidel. */
        status: number;
        /** The upstream execution time in milliseconds when Fidel returned it. */
        executionMs: number | null;
      };
    };
  }
}
