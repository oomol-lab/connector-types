import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve details for a Digistore24 buyer. */
    "digistore24.get_buyer": {
      input: {
        /**
         * Numeric ID of the buyer to retrieve.
         * @minimum 1
         */
        buyerId: number;
      };
      output: {
        /** Digistore24 buyer record. */
        buyer: {
          /** Numeric buyer ID. */
          id: number | null;
          /** Numeric buyer address ID when returned. */
          addressId: number | null;
          /** Buyer creation timestamp returned by Digistore24. */
          createdAt: string | null;
          /** Buyer email address. */
          email: string | null;
          /** Buyer first name. */
          firstName: string | null;
          /** Buyer last name. */
          lastName: string | null;
          /** Buyer salutation. */
          salutation: string | null;
          /** Buyer title when returned. */
          title: string | null;
          /** Buyer company name when returned. */
          company: string | null;
          /** Buyer street address. */
          street: string | null;
          /** Buyer street name when returned. */
          streetName: string | null;
          /** Buyer street number when returned. */
          streetNumber: string | null;
          /** Buyer postal code. */
          zipcode: string | null;
          /** Buyer city. */
          city: string | null;
          /** Buyer state or province when returned. */
          state: string | null;
          /** Buyer country code. */
          country: string | null;
          /** Buyer phone number when returned. */
          phoneNo: string | null;
          /** The raw object returned by Digistore24. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve details for a Digistore24 product. */
    "digistore24.get_product": {
      input: {
        /**
         * Numeric ID of the product to retrieve.
         * @minimum 1
         */
        productId: number;
      };
      output: {
        /** The raw object returned by Digistore24. */
        product: Record<string, unknown>;
      };
    };
    /** Retrieve details for one or more Digistore24 purchases. */
    "digistore24.get_purchase": {
      input: {
        /**
         * Single purchase ID or comma-separated purchase IDs to retrieve.
         * @minLength 1
         */
        purchaseId: string;
      };
      output: {
        /** Purchase records returned by Digistore24. */
        purchases: Array<{
          /** Digistore24 purchase ID. */
          id: string | null;
          /** Purchase amount when returned. */
          amount: number | null;
          /** Purchase currency code. */
          currency: string | null;
          /** Purchase creation timestamp returned by Digistore24. */
          createdAt: string | null;
          /** Purchase billing type code. */
          billingType: string | null;
          /** Purchase billing status code. */
          billingStatus: string | null;
          /** Receipt URL when returned. */
          receiptUrl: string | null;
          /** Invoice URL when returned. */
          invoiceUrl: string | null;
          /** Digistore24 buyer record. */
          buyer: {
            /** Numeric buyer ID. */
            id: number | null;
            /** Numeric buyer address ID when returned. */
            addressId: number | null;
            /** Buyer creation timestamp returned by Digistore24. */
            createdAt: string | null;
            /** Buyer email address. */
            email: string | null;
            /** Buyer first name. */
            firstName: string | null;
            /** Buyer last name. */
            lastName: string | null;
            /** Buyer salutation. */
            salutation: string | null;
            /** Buyer title when returned. */
            title: string | null;
            /** Buyer company name when returned. */
            company: string | null;
            /** Buyer street address. */
            street: string | null;
            /** Buyer street name when returned. */
            streetName: string | null;
            /** Buyer street number when returned. */
            streetNumber: string | null;
            /** Buyer postal code. */
            zipcode: string | null;
            /** Buyer city. */
            city: string | null;
            /** Buyer state or province when returned. */
            state: string | null;
            /** Buyer country code. */
            country: string | null;
            /** Buyer phone number when returned. */
            phoneNo: string | null;
            /** The raw object returned by Digistore24. */
            raw: Record<string, unknown>;
          } | null;
          /** Purchase line items returned by Digistore24. */
          items: Array<Record<string, unknown>>;
          /** Purchase transactions returned by Digistore24. */
          transactions: Array<Record<string, unknown>>;
          /** The raw object returned by Digistore24. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Digistore24. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve information about the Digistore24 user that owns the API key. */
    "digistore24.get_user_info": {
      input: Record<string, never>;
      output: {
        /** Numeric ID of the API key owner. */
        userId: number | null;
        /** Digistore24 login name of the API key owner. */
        userName: string | null;
        /** Comma-separated role codes granted to the API key owner. */
        grantedRoles: string | null;
        /** Comma-separated role names granted to the API key owner. */
        grantedRolesMessage: string | null;
        /** The raw object returned by Digistore24. */
        raw: Record<string, unknown>;
      };
    };
    /** List buyers from the connected Digistore24 account. */
    "digistore24.list_buyers": {
      input: {
        /**
         * Page number to request. Digistore24 pages start at 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * Number of items to request per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** Current page number returned by Digistore24. */
        pageNo: number | null;
        /** Page size returned by Digistore24. */
        pageSize: number | null;
        /** Total buyer count returned by Digistore24. */
        itemCount: number | null;
        /** Total page count returned by Digistore24. */
        pageCount: number | null;
        /** Buyers returned by Digistore24. */
        buyers: Array<{
          /** Numeric buyer ID. */
          id: number | null;
          /** Numeric buyer address ID when returned. */
          addressId: number | null;
          /** Buyer creation timestamp returned by Digistore24. */
          createdAt: string | null;
          /** Buyer email address. */
          email: string | null;
          /** Buyer first name. */
          firstName: string | null;
          /** Buyer last name. */
          lastName: string | null;
          /** Buyer salutation. */
          salutation: string | null;
          /** Buyer title when returned. */
          title: string | null;
          /** Buyer company name when returned. */
          company: string | null;
          /** Buyer street address. */
          street: string | null;
          /** Buyer street name when returned. */
          streetName: string | null;
          /** Buyer street number when returned. */
          streetNumber: string | null;
          /** Buyer postal code. */
          zipcode: string | null;
          /** Buyer city. */
          city: string | null;
          /** Buyer state or province when returned. */
          state: string | null;
          /** Buyer country code. */
          country: string | null;
          /** Buyer phone number when returned. */
          phoneNo: string | null;
          /** The raw object returned by Digistore24. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Digistore24. */
        raw: Record<string, unknown>;
      };
    };
    /** List products from the connected Digistore24 account. */
    "digistore24.list_products": {
      input: {
        /** Product sort order. */
        sortBy?: "name" | "group";
      };
      output: {
        /** Products returned by Digistore24. */
        products: Array<{
          /** Numeric product ID. */
          id: number | null;
          /** Product name. */
          name: string | null;
          /** Product note when returned. */
          note: string | null;
          /** Product tag when returned. */
          tag: string | null;
          /** Product language code. */
          language: string | null;
          /** Numeric product group ID when returned. */
          productGroupId: number | null;
          /** Product group name when returned. */
          productGroupName: string | null;
          /** Remaining product units or infinite marker. */
          unitsLeft: string | null;
          /** Product creation timestamp returned by Digistore24. */
          createdAt: string | null;
          /** Product modification timestamp returned by Digistore24. */
          modifiedAt: string | null;
          /** The raw object returned by Digistore24. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List purchases and sales from the connected Digistore24 account. */
    "digistore24.list_purchases": {
      input: {
        /**
         * Start time for the purchase list, such as "2014-02-28 23:11:24", "now", "-3d", or "start".
         * @minLength 1
         */
        from?: string;
        /**
         * End time for the purchase list, such as now or a timestamp.
         * @minLength 1
         */
        to?: string;
        /** Purchase search filters accepted by Digistore24. */
        search?: {
          /** Comma-separated role filter such as vendor, affiliate, or other. */
          role?: string;
          /** Comma-separated product IDs to filter purchases by. */
          productId?: string;
          /** Buyer first name filter. */
          firstName?: string;
          /** Buyer last name filter. */
          lastName?: string;
          /** Buyer email filter. */
          email?: string;
          /** Whether to filter purchases by affiliate presence. */
          hasAffiliate?: boolean;
          /** Affiliate name filter. */
          affiliateName?: string;
          /** Order type filter. */
          orderType?: "live" | "test";
          /** Comma-separated payment method codes. */
          payMethod?: string;
          /** Comma-separated billing type codes. */
          billingType?: string;
          /** Comma-separated transaction type codes. */
          transactionType?: string;
          /** Currency code filter. */
          currency?: string;
          /** Comma-separated purchase IDs to filter purchases by. */
          purchaseId?: string;
        };
        /** Purchase sort criterion. */
        sortBy?: "date" | "earning" | "amount";
        /** Purchase sort order. */
        sortOrder?: "asc" | "desc";
        /** Whether to include transactions for each purchase. */
        loadTransactions?: boolean;
        /**
         * Page number to request. Digistore24 pages start at 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * Number of items to request per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** Purchases returned by Digistore24. */
        purchases: Array<{
          /** Digistore24 purchase ID. */
          id: string | null;
          /** Purchase amount when returned. */
          amount: number | null;
          /** Purchase currency code. */
          currency: string | null;
          /** Purchase creation timestamp returned by Digistore24. */
          createdAt: string | null;
          /** Purchase billing type code. */
          billingType: string | null;
          /** Purchase billing status code. */
          billingStatus: string | null;
          /** Receipt URL when returned. */
          receiptUrl: string | null;
          /** Invoice URL when returned. */
          invoiceUrl: string | null;
          /** Digistore24 buyer record. */
          buyer: {
            /** Numeric buyer ID. */
            id: number | null;
            /** Numeric buyer address ID when returned. */
            addressId: number | null;
            /** Buyer creation timestamp returned by Digistore24. */
            createdAt: string | null;
            /** Buyer email address. */
            email: string | null;
            /** Buyer first name. */
            firstName: string | null;
            /** Buyer last name. */
            lastName: string | null;
            /** Buyer salutation. */
            salutation: string | null;
            /** Buyer title when returned. */
            title: string | null;
            /** Buyer company name when returned. */
            company: string | null;
            /** Buyer street address. */
            street: string | null;
            /** Buyer street name when returned. */
            streetName: string | null;
            /** Buyer street number when returned. */
            streetNumber: string | null;
            /** Buyer postal code. */
            zipcode: string | null;
            /** Buyer city. */
            city: string | null;
            /** Buyer state or province when returned. */
            state: string | null;
            /** Buyer country code. */
            country: string | null;
            /** Buyer phone number when returned. */
            phoneNo: string | null;
            /** The raw object returned by Digistore24. */
            raw: Record<string, unknown>;
          } | null;
          /** Purchase line items returned by Digistore24. */
          items: Array<Record<string, unknown>>;
          /** Purchase transactions returned by Digistore24. */
          transactions: Array<Record<string, unknown>>;
          /** The raw object returned by Digistore24. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Digistore24. */
        raw: Record<string, unknown>;
      };
    };
  }
}
