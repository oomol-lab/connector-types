import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze matching trade volume, prices, and amount shares by destination country. */
    "tendata.analyze_destinations": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Country or region code. */
            countryCode?: string | null;
            /** Total weight in kilograms. */
            weight?: number | null;
            /** Total quantity. */
            quantity?: number | null;
            /** Total value in USD. */
            sumOfUSD?: number | null;
            /** Average USD price per kilogram. */
            weightAvgPrice?: number | null;
            /** Average USD price per quantity unit. */
            quantityAvgPrice?: number | null;
            /** Number of trades. */
            tradeCount?: number | null;
            /** Share of the total trade amount as returned by Tendata. */
            amountSharePct?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Analyze matching trade volume, prices, and amount shares by HS code. */
    "tendata.analyze_hs_codes": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** HS code. */
            hsCode?: string | null;
            /** Chinese HS code description. */
            hsDescriptionCn?: string | null;
            /** English HS code description. */
            hsDescriptionEn?: string | null;
            /** Total weight in kilograms. */
            weight?: number | null;
            /** Total quantity. */
            quantity?: number | null;
            /** Total value in USD. */
            sumOfUSD?: number | null;
            /** Average USD price per kilogram. */
            weightAvgPrice?: number | null;
            /** Average USD price per quantity unit. */
            quantityAvgPrice?: number | null;
            /** Number of trades. */
            tradeCount?: number | null;
            /** Share of the total trade amount as returned by Tendata. */
            amountSharePct?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Analyze matching trade volume, prices, and amount shares by country of origin. */
    "tendata.analyze_origins": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Country or region code. */
            countryCode?: string | null;
            /** Total weight in kilograms. */
            weight?: number | null;
            /** Total quantity. */
            quantity?: number | null;
            /** Total value in USD. */
            sumOfUSD?: number | null;
            /** Average USD price per kilogram. */
            weightAvgPrice?: number | null;
            /** Average USD price per quantity unit. */
            quantityAvgPrice?: number | null;
            /** Number of trades. */
            tradeCount?: number | null;
            /** Share of the total trade amount as returned by Tendata. */
            amountSharePct?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Analyze matching trade activity by month, quarter, or year. */
    "tendata.analyze_trade_trends": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Time period identifier, such as 2025-01. */
            date?: string | null;
            /** Total weight in kilograms. */
            weight?: number | null;
            /** Total quantity. */
            quantity?: number | null;
            /** Total value in USD. */
            sumOfUSD?: number | null;
            /** Average USD price per kilogram. */
            weightAvgPrice?: number | null;
            /** Average USD price per quantity unit. */
            quantityAvgPrice?: number | null;
            /** Number of trades. */
            tradeCount?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Count matching trade records in specified authorized data sources without deducting points. */
    "tendata.count_specific_trades": {
      input: Record<string, unknown>;
      output: {
        /** Count of matching trade records. */
        data: {
          /** Total matching trade records. */
          total: number;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Count matching trade records before fetching paid details. This endpoint does not deduct points but consumes request quota. */
    "tendata.count_trades": {
      input: Record<string, unknown>;
      output: {
        /** Count of matching trade records. */
        data: {
          /** Total matching trade records. */
          total: number;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve account points balance and expiry. This endpoint does not report remaining daily request quota. */
    "tendata.get_account": {
      input: Record<string, never>;
      output: {
        /** Account balance and validity. */
        data: {
          /** Remaining account points. */
          balance: number;
          /** Account expiry date and time as returned by Tendata, not a duration. */
          expiresIn: string;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a company profile, contact methods, and trade statistics. Supply countryCode3 when known to disambiguate names. */
    "tendata.get_company": {
      input: {
        /**
         * Company name.
         * @minLength 1
         */
        name: string;
        /**
         * Company identifier, when available from company search.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Company country three-letter code; recommended to avoid cross-country matches.
         * @minLength 3
         * @maxLength 3
         */
        countryCode3?: string;
      };
      output: {
        /** Company profile. A null id indicates that no company profile was found; other fields can still contain supplemental information. */
        data: {
          /** Company identifier; null means no profile match. */
          id?: string | null;
          /** Company name. */
          name?: string | null;
          /** Company name in the local language. */
          localName?: string | null;
          /** Company overview. */
          overview?: string | null;
          /** Company website. */
          website?: string | null;
          /** Company country. */
          country?: string | null;
          /** Legal entity identifier. */
          lei?: string | null;
          /** Tax number. */
          taxNo?: string | null;
          /** European VAT number. */
          europeanVatNo?: string | null;
          /** Operating status. */
          status?: string | null;
          /** Incorporation date. */
          incorporationDate?: string | null;
          /** Logistics company indicator. */
          logistic?: string | null;
          /** Business description. */
          businessDesc?: string | null;
          /** Industry. */
          industry?: string | null;
          /** Industry description. */
          industryDesc?: string | null;
          /** Business address. */
          businessAddress?: string | null;
          /** Registered address. */
          registerAddress?: string | null;
          /** Primary business line. */
          businessLine?: string | null;
          /** Legal representative. */
          legalRepresentative?: string | null;
          /** Registered capital. */
          registeredCapital?: string | null;
          /** Paid-up capital. */
          paidUpCapital?: string | null;
          /** Company country three-letter code; verify it matches the intended country. */
          countryCode3?: string | null;
          /** Company registration codes. */
          companyCodes?: Array<string> | null;
          /** Company contact methods. */
          contactMethods?: Array<{
            /** Contact method type, such as TEL or MAIL. */
            type?: string | null;
            /** Contact method value. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Company trade statistics. */
          tradeStats?: Array<{
            /** Company role: importer or exporter. */
            type?: string | null;
            /** Average USD quantity unit price. */
            totalQtyUnitPriceAvg?: number | null;
            /** Total weight in kilograms. */
            totalWeightSum?: number | null;
            /** Total quantity. */
            totalQuantitySum?: number | null;
            /** Average USD price per kilogram. */
            totalWeightUnitPriceAvg?: number | null;
            /** Total number of trades. */
            totalTradesSum?: number | null;
            /** Total value in USD. */
            totalSumOfMoneySum?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve social profile links using the mailsouId returned by contact search. This endpoint does not deduct points. */
    "tendata.get_contact_social_links": {
      input: {
        /**
         * The mailsouId from a contact record, not its id field.
         * @minLength 1
         */
        mailsouId: string;
      };
      output: {
        /** Social profile links returned for the contact. */
        data: Array<{
          /** Social platform name. */
          type?: string | null;
          /** Social profile URL; may be empty when unavailable. */
          value?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Summarize exporter counts, trade volume, values, and average prices for a trade query. */
    "tendata.get_exporter_stats": {
      input: Record<string, unknown>;
      output: {
        /** Aggregate company counts, trade volume, and prices. */
        data: {
          /** Number of matching companies. */
          companyCount?: number | null;
          /** Total weight in kilograms. */
          weight?: number | null;
          /** Total quantity. */
          quantity?: number | null;
          /** Total value in USD. */
          sumOfUSD?: number | null;
          /** Average USD price per kilogram. */
          weightAvgPrice?: number | null;
          /** Average USD price per quantity unit. */
          quantityAvgPrice?: number | null;
          /** Number of trades. */
          tradeCount?: number | null;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Summarize importer counts, trade volume, values, and average prices for a trade query. */
    "tendata.get_importer_stats": {
      input: Record<string, unknown>;
      output: {
        /** Aggregate company counts, trade volume, and prices. */
        data: {
          /** Number of matching companies. */
          companyCount?: number | null;
          /** Total weight in kilograms. */
          weight?: number | null;
          /** Total quantity. */
          quantity?: number | null;
          /** Total value in USD. */
          sumOfUSD?: number | null;
          /** Average USD price per kilogram. */
          weightAvgPrice?: number | null;
          /** Average USD price per quantity unit. */
          quantityAvgPrice?: number | null;
          /** Number of trades. */
          tradeCount?: number | null;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Query one page of monthly charge records for reconciliation. Charges normally appear within five minutes; this query does not deduct points. */
    "tendata.list_charge_records": {
      input: {
        /**
         * Natural month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
        /**
         * Optional API path filter, such as /v2/trade.
         * @minLength 1
         */
        interfacePath?: string;
        /**
         * Maximum records to return, from 1 to 500.
         * @minimum 1
         * @maximum 500
         * @default 100
         */
        limit?: number;
        /**
         * Complete nextCursor from the previous response. Omit or use null for the first page.
         * @minLength 1
         */
        cursor?: string | null;
      };
      output: {
        /** One cursor-based page of monthly charge records. */
        data: {
          /** Requested billing month in YYYY-MM format. */
          billingMonth: string;
          /** Whether another page is available. */
          hasMore: boolean;
          /** Complete cursor to pass unchanged to the next call, or null on the final page. */
          nextCursor: string | null;
          /** Charge records returned on this page. */
          list: Array<{
            /** Charge recording time as a UTC ISO-8601 timestamp. */
            recordedAt?: string;
            /** API path; null for unresolved historical interfaces. */
            interfacePath?: string | null;
            /** Display name of the API; not a filter value. */
            interfaceName?: string | null;
            /** Whether the historical interface could be resolved. */
            interfaceResolved?: boolean;
            /** Points deducted by this request. */
            deductPoints?: number;
            /** Quantity used for billing; not a guaranteed count of returned results. */
            billingQuantity?: number | null;
            /** Original request trace identifier; may be absent in historical records. */
            requestTraceId?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Search one page of company names and country codes to identify the company to query. This endpoint does not deduct points. */
    "tendata.list_companies": {
      input: {
        /**
         * Company name keywords.
         * @minLength 1
         */
        name: string;
        /**
         * Three-letter country codes separated by commas, such as USA,TUR,ECU.
         * @minLength 1
         */
        countryCodes?: string;
        /**
         * One-based page number.
         * @minimum 1
         * @default 1
         */
        pageNo?: number;
        /**
         * Companies per page, at most 20.
         * @minimum 1
         * @maximum 20
         * @default 20
         */
        pageSize?: number;
      };
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Company identifier. */
            id?: string | null;
            /** Company name. */
            name?: string | null;
            /** Company country three-letter code. */
            country?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Search one page of contacts associated with a company name. Results are capped at 200 per query; verify each returned companyName. */
    "tendata.list_contacts": {
      input: {
        /**
         * Company name to search.
         * @minLength 1
         */
        companyName: string;
        /**
         * Country three-letter code from Tendata's country table.
         * @minLength 3
         * @maxLength 3
         */
        country?: string;
        /**
         * Position tags separated by commas: EXECUTIVE, SALE, PURCHASING, TECHNOLGY, FINANCE, PRODUCER, SHAREHOLDER, MANAGEMENT, or UNSPECIFIED. Multiple tags use OR; semicolons are not separators.
         * @minLength 1
         */
        positionTag?: string;
        /**
         * One-based page number.
         * @minimum 1
         * @default 1
         */
        pageNo?: number;
        /**
         * Contacts per page.
         * @minimum 1
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** One page of matching contacts. */
        data: {
          /** Matching count, capped at 200; a value of 200 is not the company's full contact count. */
          total: number;
          /** Current one-based page number. */
          pageNo: number;
          /** Page size. */
          pageSize: number;
          /** Contacts returned on this page. */
          list: Array<{
            /** Contact identifier. */
            id?: string | null;
            /** Contact identifier used to retrieve social links. */
            mailsouId?: string | null;
            /** Contact name. */
            name?: string | null;
            /** Contact email address. */
            email?: string | null;
            /** Job position. */
            position?: string | null;
            /** Position category. */
            positionTag?: string | null;
            /** Contact location. */
            location?: string | null;
            /** Matched company name. */
            companyName?: string | null;
            /** Industry. */
            industry?: string | null;
            /** Email-to-employee match confidence, or an empty string when unavailable. */
            status?: string | null;
            /** Available social platforms; URLs are null until social links are queried. */
            socials?: Array<{
              /** Social platform name. */
              type?: string | null;
              /** Social URL; this endpoint normally returns null. */
              url?: string | null;
              [key: string]: unknown;
            }> | null;
            /** Personal email addresses. */
            personalEmail?: Array<{
              /** Personal email address. */
              email?: string | null;
              /** Email verification status. */
              emailVerify?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** List one page of exporter names matching a trade query. */
    "tendata.list_exporter_names": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Company name. */
            name?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** List one page of exporters with trade volume and price metrics, optionally sorted by a metric. */
    "tendata.list_exporters": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Company name. */
            name?: string | null;
            /** Company country. */
            country?: string | null;
            /** Total weight in kilograms. */
            weight?: number | null;
            /** Total quantity. */
            quantity?: number | null;
            /** Total value in USD. */
            sumOfUSD?: number | null;
            /** Average USD price per kilogram. */
            weightAvgPrice?: number | null;
            /** Average USD price per quantity unit. */
            quantityAvgPrice?: number | null;
            /** Number of trades. */
            tradeCount?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** List one page of importer names matching a trade query. */
    "tendata.list_importer_names": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Company name. */
            name?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** List one page of importers with trade volume and price metrics, optionally sorted by a metric. */
    "tendata.list_importers": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Company name. */
            name?: string | null;
            /** Company country. */
            country?: string | null;
            /** Total weight in kilograms. */
            weight?: number | null;
            /** Total quantity. */
            quantity?: number | null;
            /** Total value in USD. */
            sumOfUSD?: number | null;
            /** Average USD price per kilogram. */
            weightAvgPrice?: number | null;
            /** Average USD price per quantity unit. */
            quantityAvgPrice?: number | null;
            /** Number of trades. */
            tradeCount?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one page of trade records from specified authorized data sources. Use data source codes, not country codes. */
    "tendata.list_specific_trades": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Trade record identifier. */
            id?: string | null;
            /** Trade date; records are ordered by descending date. */
            date?: string | null;
            /** Trade direction for this record. */
            catalog?: string | null;
            /** Importer name. */
            importer?: string | null;
            /** Exporter name. */
            exporter?: string | null;
            /** Producer name. */
            producer?: string | null;
            /** Origin country name. */
            countryOfOrigin?: string | null;
            /** Origin country three-letter code. */
            countryOfOriginCode?: string | null;
            /** Destination country name. */
            countryOfDestination?: string | null;
            /** Destination country three-letter code. */
            countryOfDestinationCode?: string | null;
            /** Departure port. */
            portOfDeparture?: string | null;
            /** Arrival port. */
            portOfArrival?: string | null;
            /** Transport mode. */
            transportType?: string | null;
            /** Quantity unit. */
            quantityUnit?: string | null;
            /** Customs declaration number. */
            declarationNo?: string | null;
            /** Bill of lading number. */
            billNo?: string | null;
            /** Data source code. */
            database?: string | null;
            /** Importer name in its original script. */
            importerOriginal?: string | null;
            /** Exporter name in its original script. */
            exporterOriginal?: string | null;
            /** Secondary quantity unit, available for Chinese data sources. */
            qtyUnit2?: string | null;
            /** Importer location, available for Chinese data sources. */
            placeOfDestinationCn?: string | null;
            /** Exporter location, available for Chinese data sources. */
            placeOfOriginCn?: string | null;
            /** Customs regime, available for Chinese data sources. */
            customsRegime?: string | null;
            /** Quantity. */
            quantity?: number | null;
            /** USD price per quantity unit. */
            quantityUnitPriceUsd?: number | null;
            /** Weight in kilograms. */
            weight?: number | null;
            /** USD price per kilogram. */
            weightUnitPriceUsd?: number | null;
            /** Total value in USD. */
            sumOfUsd?: number | null;
            /** Secondary quantity, available for Chinese data sources. */
            qty2?: number | null;
            /** Secondary quantity unit price, available for Chinese data sources. */
            qtyUnitPrice2?: number | null;
            /** Product descriptions; the final entry can be shipping marks. */
            goodsDesc?: Array<string> | null;
            /** HS codes. */
            hsCode?: Array<string> | null;
            /** Product tags. */
            productTag?: Array<string> | null;
            [key: string]: unknown;
          }>;
          /** Reserved statistics field; currently null. */
          stats?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one page of trade records matching regular filters or advanced condition groups. Returned records may deduct account points. */
    "tendata.list_trades": {
      input: Record<string, unknown>;
      output: {
        /** One page of matching records. */
        data: {
          /** Current one-based page number. */
          page: number;
          /** Page size. */
          size: number;
          /** Total matching records reported by Tendata. */
          total: number;
          /** Records returned on this page. */
          content: Array<{
            /** Trade record identifier. */
            id?: string | null;
            /** Trade date; records are ordered by descending date. */
            date?: string | null;
            /** Trade direction for this record. */
            catalog?: string | null;
            /** Importer name. */
            importer?: string | null;
            /** Exporter name. */
            exporter?: string | null;
            /** Producer name. */
            producer?: string | null;
            /** Origin country name. */
            countryOfOrigin?: string | null;
            /** Origin country three-letter code. */
            countryOfOriginCode?: string | null;
            /** Destination country name. */
            countryOfDestination?: string | null;
            /** Destination country three-letter code. */
            countryOfDestinationCode?: string | null;
            /** Departure port. */
            portOfDeparture?: string | null;
            /** Arrival port. */
            portOfArrival?: string | null;
            /** Transport mode. */
            transportType?: string | null;
            /** Quantity unit. */
            quantityUnit?: string | null;
            /** Customs declaration number. */
            declarationNo?: string | null;
            /** Bill of lading number. */
            billNo?: string | null;
            /** Data source code. */
            database?: string | null;
            /** Importer name in its original script. */
            importerOriginal?: string | null;
            /** Exporter name in its original script. */
            exporterOriginal?: string | null;
            /** Secondary quantity unit, available for Chinese data sources. */
            qtyUnit2?: string | null;
            /** Importer location, available for Chinese data sources. */
            placeOfDestinationCn?: string | null;
            /** Exporter location, available for Chinese data sources. */
            placeOfOriginCn?: string | null;
            /** Customs regime, available for Chinese data sources. */
            customsRegime?: string | null;
            /** Quantity. */
            quantity?: number | null;
            /** USD price per quantity unit. */
            quantityUnitPriceUsd?: number | null;
            /** Weight in kilograms. */
            weight?: number | null;
            /** USD price per kilogram. */
            weightUnitPriceUsd?: number | null;
            /** Total value in USD. */
            sumOfUsd?: number | null;
            /** Secondary quantity, available for Chinese data sources. */
            qty2?: number | null;
            /** Secondary quantity unit price, available for Chinese data sources. */
            qtyUnitPrice2?: number | null;
            /** Product descriptions; the final entry can be shipping marks. */
            goodsDesc?: Array<string> | null;
            /** HS codes. */
            hsCode?: Array<string> | null;
            /** Product tags. */
            productTag?: Array<string> | null;
            [key: string]: unknown;
          }>;
          /** Reserved statistics field; currently null. */
          stats?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** Whether Tendata accepted the business request. */
        success: boolean;
        /** Upstream business code; documented responses may use text, numbers, or null. */
        code?: string | number | null;
        /** Upstream response message. */
        msg?: string | null;
        /** Request trace identifier for support and charge reconciliation. */
        traceId?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
