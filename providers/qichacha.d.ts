import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List a company's historical outbound investments and exit details from Qichacha. */
    "qichacha.list_company_historical_investments": {
      input: {
        /**
         * The exact company name or unified social credit code to query.
         * @minLength 1
         * @pattern \S
         */
        searchKey: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of records per page. Defaults to 10 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The historical outbound investment records. */
        historicalInvestments: Array<{
          /** The Qichacha identifier of the invested company. */
          keyNo: string | null;
          /** The invested company name. */
          companyName: string | null;
          /** The invested company's legal representative. */
          legalRepresentative: {
            /** The Qichacha person identifier. */
            keyNo: string | null;
            /** The legal representative name. */
            name: string | null;
          } | null;
          /** The formatted registered capital. */
          registeredCapital: string | null;
          /** The numeric portion of the registered capital. */
          registeredCapitalValue: string | null;
          /** The registered capital unit. */
          registeredCapitalUnit: string | null;
          /** The registered capital currency code. */
          registeredCapitalCurrency: string | null;
          /** The historical ownership percentage. */
          fundedRatio: string | null;
          /** The invested company's registration status. */
          status: string | null;
          /** The invested company's establishment date. */
          startDate: string | null;
          /** The formatted subscribed investment amount. */
          subscribedAmount: string | null;
          /** The numeric portion of the subscribed investment amount. */
          subscribedCapital: string | null;
          /** The subscribed investment amount unit. */
          subscribedCapitalUnit: string | null;
          /** The subscribed investment currency code. */
          subscribedCapitalCurrency: string | null;
          /** The date on which the investment ended. */
          exitDate: string | null;
        }>;
        /**
         * The one-based page number returned by Qichacha.
         * @exclusiveMinimum 0
         */
        pageIndex: number;
        /**
         * The page size returned by Qichacha.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of matching records.
         * @minimum 0
         */
        totalRecords: number;
        /**
         * Whether Qichacha found data for the company: 1 for found or 0 for not found.
         * @minimum 0
         * @maximum 1
         */
        verifyResult: number | null;
        /** The Qichacha request order number. */
        orderNumber: string | null;
      };
    };
    /** List a company's shareholders and subscribed contribution details from Qichacha business registration data. */
    "qichacha.list_company_shareholders": {
      input: {
        /**
         * The exact company name or unified social credit code to query.
         * @minLength 1
         * @pattern \S
         */
        searchKey: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of records per page. Defaults to 10 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The registered shareholder records. */
        shareholders: Array<{
          /** The Qichacha shareholder identifier. */
          keyNo: string | null;
          /** The shareholder or investor name. */
          name: string | null;
          /** The shareholder or investor type. */
          type: string | null;
          /** The registered ownership percentage. */
          stockPercent: string | null;
          /** The formatted subscribed capital amount. */
          subscribedAmount: string | null;
          /** The numeric portion of the subscribed capital amount. */
          subscribedCapital: string | null;
          /** The unit of the subscribed capital amount. */
          subscribedCapitalUnit: string | null;
          /** The currency code of the subscribed capital amount. */
          subscribedCapitalCurrency: string | null;
          /** The subscribed capital date. */
          subscribedDate: string | null;
          /** The first registered ownership date. */
          stakeDate: string | null;
          /** The shareholder's unified social credit code. */
          creditCode: string | null;
          /** The shareholder's nationality, region, or registration area. */
          area: string | null;
          /** The shareholder's individual subscribed contribution records. */
          subscriptions: Array<{
            /** The contribution method. */
            contributionType: string | null;
            /** The subscribed capital amount in the parent record's unit. */
            capital: string | null;
            /** The subscribed contribution date. */
            date: string | null;
          }>;
        }>;
        /**
         * The one-based page number returned by Qichacha.
         * @exclusiveMinimum 0
         */
        pageIndex: number;
        /**
         * The page size returned by Qichacha.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of matching records.
         * @minimum 0
         */
        totalRecords: number;
        /**
         * Whether Qichacha found data for the company: 1 for found or 0 for not found.
         * @minimum 0
         * @maximum 1
         */
        verifyResult: number | null;
        /** The Qichacha request order number. */
        orderNumber: string | null;
      };
    };
  }
}
