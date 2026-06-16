import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Elorus contact in the selected organization. */
    "elorus.create_contact": {
      input: {
        /** Raw Elorus contact payload to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Elorus contact created by the request. */
        contact: {
          /** The Elorus contact identifier. */
          id: string;
          /** Custom identifier assigned to the contact. */
          custom_id?: string;
          /** Whether the contact is active. */
          active?: boolean;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
          /** The company represented by the contact. */
          company?: string;
          /** The generated display name of the contact. */
          display_name?: string;
          /** The contact profession. */
          profession?: string;
          /** The contact tax ID. */
          vat_number?: string;
          /** Whether the contact can be used as a client. */
          is_client?: boolean;
          /** Whether the contact can be used as a supplier. */
          is_supplier?: boolean;
          /** Default language code for the contact. */
          default_language?: string;
          /** Default template ID used for invoicing. */
          default_template?: string;
          /** Default tax identifiers applied when invoicing the contact. */
          default_taxes?: Array<string | number>;
          /** Default currency code for the contact. */
          default_currency_code?: string;
          /** Postal addresses attached to the contact. */
          addresses?: Array<unknown>;
          /** Email addresses attached to the contact. */
          email?: Array<unknown>;
          /** Phone numbers attached to the contact. */
          phones?: Array<unknown>;
          /** Tracking categories attached to the contact. */
          trackingcategories?: Array<unknown>;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Elorus invoice in the selected organization. */
    "elorus.create_invoice": {
      input: {
        /** Raw Elorus invoice payload to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Elorus invoice created by the request. */
        invoice: {
          /** The Elorus invoice identifier. */
          id: string;
          /** Custom identifier assigned to the invoice. */
          custom_id?: string;
          /** Human-readable invoice representation. */
          representation?: string;
          /** Invoice status returned by Elorus. */
          status?: string;
          /** Whether the invoice is still a draft. */
          draft?: boolean;
          /** Document type identifier. */
          documenttype?: string | number;
          /** Invoice sequence code. */
          sequence_flat?: string;
          /** Invoice number. */
          number?: string;
          /** Invoice issue date. */
          date?: string;
          /** Configured due days. */
          due_days?: number | null;
          /** Calculated due date returned by Elorus. */
          due_date?: string;
          /** Branch identifier. */
          branch?: string | number | null;
          /** Client contact identifier. */
          client?: string | number;
          /** Client display name shown on the invoice. */
          client_display_name?: string;
          /** Client profession shown on the invoice. */
          client_profession?: string;
          /** Client tax ID shown on the invoice. */
          client_vat_number?: string;
          /** Billing address payload. */
          billing_address?: Record<string, unknown>;
          /** Shipping address payload. */
          shipping_address?: Record<string, unknown>;
          /** Client contact person. */
          client_contact_person?: string;
          /** Client phone number. */
          client_phone_number?: string;
          /** Client email address. */
          client_email?: string;
          /** Loading address payload. */
          loading_address?: Record<string, unknown>;
          /** Dispatch date. */
          dispatch_date?: string;
          /** Dispatch time. */
          dispatch_time?: string;
          /** Vehicle number. */
          vehicle_number?: string;
          /** Declared move purpose value. */
          move_purpose?: string;
          /** Additional move-purpose description. */
          other_move_purpose_title?: string;
          /** Invoice currency code. */
          currency_code?: string;
          /** Exchange rate applied to the invoice. */
          exchange_rate?: string;
          /** Invoice calculator mode. */
          calculator_mode?: string;
          /** Invoice line items. */
          items?: Array<unknown>;
          /** Initial amount. */
          initial?: string;
          /** Net amount. */
          net?: string;
          /** Invoice-level taxes. */
          taxes?: Array<unknown>;
          /** Total amount. */
          total?: string;
          /** Invoice-level withholding taxes. */
          withholding_taxes?: Array<unknown>;
          /** Total payable amount. */
          payable?: string;
          /** Total paid amount. */
          paid?: string;
          /** Template identifier. */
          template?: string | number;
          /** Terms shown on the invoice. */
          terms?: string;
          /** Public notes shown on the invoice. */
          public_notes?: string;
          /** Payment gateway identifiers. */
          payment_gateways?: Array<unknown>;
          /** Related document identifiers. */
          related_documents?: Array<unknown>;
          /** Linked delivery note identifiers. */
          delivery_notes?: Array<unknown>;
          /** Additional transport entities. */
          related_entities?: Array<unknown>;
          /** Tracking categories attached to the invoice. */
          trackingcategories?: Array<unknown>;
          /** Public permalink for the invoice. */
          permalink?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Elorus product or service in the selected organization. */
    "elorus.create_product": {
      input: {
        /** Raw Elorus product or service payload to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Elorus product or service created by the request. */
        product: {
          /** The Elorus product or service identifier. */
          id: string;
          /** Custom identifier assigned to the product. */
          custom_id?: string;
          /** The product or service title. */
          title?: string;
          /** Optional product code. */
          code?: string;
          /** Product or service description. */
          description?: string;
          /** Whether the record is available for sales. */
          sales?: boolean;
          /** Default unit sale value. */
          sale_value?: string;
          /** Default tax identifiers used for sales. */
          sale_taxes?: Array<unknown>;
          /** Whether the record is available for purchases. */
          purchases?: boolean;
          /** Default unit purchase value. */
          purchase_value?: string;
          /** Default tax identifiers used for purchases. */
          purchase_taxes?: Array<unknown>;
          /** Whether Elorus manages the stock for this product. */
          manage?: boolean;
          /** Current total stock value returned by Elorus. */
          stock?: string;
          /** Unit-of-measure symbol. */
          unit_measure?: string;
          /** Tracking categories attached to the product. */
          trackingcategories?: Array<unknown>;
          /** Whether the product or service is active. */
          active?: boolean;
          /** Optional TARIC code. */
          taric_code?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          /** Warehouse stock breakdown returned by Elorus. */
          warehouses_stock?: Array<unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Elorus contact by ID. */
    "elorus.get_contact": {
      input: {
        /**
         * The Elorus object identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Elorus contact returned by the request. */
        contact: {
          /** The Elorus contact identifier. */
          id: string;
          /** Custom identifier assigned to the contact. */
          custom_id?: string;
          /** Whether the contact is active. */
          active?: boolean;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
          /** The company represented by the contact. */
          company?: string;
          /** The generated display name of the contact. */
          display_name?: string;
          /** The contact profession. */
          profession?: string;
          /** The contact tax ID. */
          vat_number?: string;
          /** Whether the contact can be used as a client. */
          is_client?: boolean;
          /** Whether the contact can be used as a supplier. */
          is_supplier?: boolean;
          /** Default language code for the contact. */
          default_language?: string;
          /** Default template ID used for invoicing. */
          default_template?: string;
          /** Default tax identifiers applied when invoicing the contact. */
          default_taxes?: Array<string | number>;
          /** Default currency code for the contact. */
          default_currency_code?: string;
          /** Postal addresses attached to the contact. */
          addresses?: Array<unknown>;
          /** Email addresses attached to the contact. */
          email?: Array<unknown>;
          /** Phone numbers attached to the contact. */
          phones?: Array<unknown>;
          /** Tracking categories attached to the contact. */
          trackingcategories?: Array<unknown>;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Elorus invoice by ID. */
    "elorus.get_invoice": {
      input: {
        /**
         * The Elorus object identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Elorus invoice returned by the request. */
        invoice: {
          /** The Elorus invoice identifier. */
          id: string;
          /** Custom identifier assigned to the invoice. */
          custom_id?: string;
          /** Human-readable invoice representation. */
          representation?: string;
          /** Invoice status returned by Elorus. */
          status?: string;
          /** Whether the invoice is still a draft. */
          draft?: boolean;
          /** Document type identifier. */
          documenttype?: string | number;
          /** Invoice sequence code. */
          sequence_flat?: string;
          /** Invoice number. */
          number?: string;
          /** Invoice issue date. */
          date?: string;
          /** Configured due days. */
          due_days?: number | null;
          /** Calculated due date returned by Elorus. */
          due_date?: string;
          /** Branch identifier. */
          branch?: string | number | null;
          /** Client contact identifier. */
          client?: string | number;
          /** Client display name shown on the invoice. */
          client_display_name?: string;
          /** Client profession shown on the invoice. */
          client_profession?: string;
          /** Client tax ID shown on the invoice. */
          client_vat_number?: string;
          /** Billing address payload. */
          billing_address?: Record<string, unknown>;
          /** Shipping address payload. */
          shipping_address?: Record<string, unknown>;
          /** Client contact person. */
          client_contact_person?: string;
          /** Client phone number. */
          client_phone_number?: string;
          /** Client email address. */
          client_email?: string;
          /** Loading address payload. */
          loading_address?: Record<string, unknown>;
          /** Dispatch date. */
          dispatch_date?: string;
          /** Dispatch time. */
          dispatch_time?: string;
          /** Vehicle number. */
          vehicle_number?: string;
          /** Declared move purpose value. */
          move_purpose?: string;
          /** Additional move-purpose description. */
          other_move_purpose_title?: string;
          /** Invoice currency code. */
          currency_code?: string;
          /** Exchange rate applied to the invoice. */
          exchange_rate?: string;
          /** Invoice calculator mode. */
          calculator_mode?: string;
          /** Invoice line items. */
          items?: Array<unknown>;
          /** Initial amount. */
          initial?: string;
          /** Net amount. */
          net?: string;
          /** Invoice-level taxes. */
          taxes?: Array<unknown>;
          /** Total amount. */
          total?: string;
          /** Invoice-level withholding taxes. */
          withholding_taxes?: Array<unknown>;
          /** Total payable amount. */
          payable?: string;
          /** Total paid amount. */
          paid?: string;
          /** Template identifier. */
          template?: string | number;
          /** Terms shown on the invoice. */
          terms?: string;
          /** Public notes shown on the invoice. */
          public_notes?: string;
          /** Payment gateway identifiers. */
          payment_gateways?: Array<unknown>;
          /** Related document identifiers. */
          related_documents?: Array<unknown>;
          /** Linked delivery note identifiers. */
          delivery_notes?: Array<unknown>;
          /** Additional transport entities. */
          related_entities?: Array<unknown>;
          /** Tracking categories attached to the invoice. */
          trackingcategories?: Array<unknown>;
          /** Public permalink for the invoice. */
          permalink?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Elorus product or service by ID. */
    "elorus.get_product": {
      input: {
        /**
         * The Elorus object identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Elorus product or service returned by the request. */
        product: {
          /** The Elorus product or service identifier. */
          id: string;
          /** Custom identifier assigned to the product. */
          custom_id?: string;
          /** The product or service title. */
          title?: string;
          /** Optional product code. */
          code?: string;
          /** Product or service description. */
          description?: string;
          /** Whether the record is available for sales. */
          sales?: boolean;
          /** Default unit sale value. */
          sale_value?: string;
          /** Default tax identifiers used for sales. */
          sale_taxes?: Array<unknown>;
          /** Whether the record is available for purchases. */
          purchases?: boolean;
          /** Default unit purchase value. */
          purchase_value?: string;
          /** Default tax identifiers used for purchases. */
          purchase_taxes?: Array<unknown>;
          /** Whether Elorus manages the stock for this product. */
          manage?: boolean;
          /** Current total stock value returned by Elorus. */
          stock?: string;
          /** Unit-of-measure symbol. */
          unit_measure?: string;
          /** Tracking categories attached to the product. */
          trackingcategories?: Array<unknown>;
          /** Whether the product or service is active. */
          active?: boolean;
          /** Optional TARIC code. */
          taric_code?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          /** Warehouse stock breakdown returned by Elorus. */
          warehouses_stock?: Array<unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Elorus contacts with optional search, filters, and pagination. */
    "elorus.list_contacts": {
      input: {
        /**
         * Official Elorus ordering expression such as modified or -modified.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Free-text search term forwarded to the official Elorus search parameter.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated Elorus search_fields value.
         * @minLength 1
         */
        search_fields?: string;
        /**
         * Initial letter filter applied by Elorus.
         * @minLength 1
         */
        letter?: string;
        /**
         * Official Elorus contact type filter.
         * @minLength 1
         */
        ctype?: string;
        /**
         * Profession filter.
         * @minLength 1
         */
        profession?: string;
        /** Whether to filter to company contacts. */
        company?: boolean;
        /** Whether to filter to active contacts. */
        active?: boolean;
        /**
         * Custom identifier filter.
         * @minLength 1
         */
        custom_id?: string;
        /**
         * Lower bound for the created timestamp filter.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Upper bound for the created timestamp filter.
         * @minLength 1
         */
        created_before?: string;
        /**
         * Lower bound for the modified timestamp filter.
         * @minLength 1
         */
        modified_after?: string;
        /**
         * Upper bound for the modified timestamp filter.
         * @minLength 1
         */
        modified_before?: string;
        /**
         * Relative modified period filter accepted by Elorus.
         * @minLength 1
         */
        modified_period?: string;
        /**
         * Relative created period filter accepted by Elorus.
         * @minLength 1
         */
        created_period?: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of results to return per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** Total number of records available. */
        count: number;
        /** URL for the next page, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page, or null when there is no previous page. */
        previous: string | null;
        /** Contacts returned by the current page. */
        results: Array<{
          /** The Elorus contact identifier. */
          id: string;
          /** Custom identifier assigned to the contact. */
          custom_id?: string;
          /** Whether the contact is active. */
          active?: boolean;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
          /** The company represented by the contact. */
          company?: string;
          /** The generated display name of the contact. */
          display_name?: string;
          /** The contact profession. */
          profession?: string;
          /** The contact tax ID. */
          vat_number?: string;
          /** Whether the contact can be used as a client. */
          is_client?: boolean;
          /** Whether the contact can be used as a supplier. */
          is_supplier?: boolean;
          /** Default language code for the contact. */
          default_language?: string;
          /** Default template ID used for invoicing. */
          default_template?: string;
          /** Default tax identifiers applied when invoicing the contact. */
          default_taxes?: Array<string | number>;
          /** Default currency code for the contact. */
          default_currency_code?: string;
          /** Postal addresses attached to the contact. */
          addresses?: Array<unknown>;
          /** Email addresses attached to the contact. */
          email?: Array<unknown>;
          /** Phone numbers attached to the contact. */
          phones?: Array<unknown>;
          /** Tracking categories attached to the contact. */
          trackingcategories?: Array<unknown>;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Elorus invoices with optional filters and pagination. */
    "elorus.list_invoices": {
      input: {
        /**
         * Official Elorus ordering expression such as modified or -modified.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Free-text search term forwarded to the official Elorus search parameter.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated Elorus search_fields value.
         * @minLength 1
         */
        search_fields?: string;
        /**
         * Lower bound of the invoice issue-date period filter.
         * @minLength 1
         */
        period_from?: string;
        /**
         * Upper bound of the invoice issue-date period filter.
         * @minLength 1
         */
        period_to?: string;
        /**
         * Relative period filter accepted by Elorus.
         * @minLength 1
         */
        period?: string;
        /**
         * Invoice status filter.
         * @minLength 1
         */
        status?: string;
        /** Whether to filter to draft invoices. */
        draft?: boolean;
        /** Whether to filter to pending-approval invoices. */
        pending_approval?: boolean;
        /** Whether to filter to fully paid invoices. */
        fpaid?: boolean;
        /** Whether to filter to void invoices. */
        is_void?: boolean;
        /** Whether to filter to overdue invoices. */
        overdue?: boolean;
        /**
         * Client contact identifier filter.
         * @minLength 1
         */
        client?: string;
        /**
         * Currency code filter.
         * @minLength 1
         */
        currency_code?: string;
        /**
         * Document type identifier filter.
         * @minLength 1
         */
        documenttype?: string;
        /**
         * Sequence filter.
         * @minLength 1
         */
        sequence?: string;
        /**
         * Custom identifier filter.
         * @minLength 1
         */
        custom_id?: string;
        /**
         * Lower bound for the created timestamp filter.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Upper bound for the created timestamp filter.
         * @minLength 1
         */
        created_before?: string;
        /**
         * Lower bound for the modified timestamp filter.
         * @minLength 1
         */
        modified_after?: string;
        /**
         * Upper bound for the modified timestamp filter.
         * @minLength 1
         */
        modified_before?: string;
        /**
         * Relative modified period filter accepted by Elorus.
         * @minLength 1
         */
        modified_period?: string;
        /**
         * Relative created period filter accepted by Elorus.
         * @minLength 1
         */
        created_period?: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of results to return per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** Total number of records available. */
        count: number;
        /** URL for the next page, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page, or null when there is no previous page. */
        previous: string | null;
        /** Invoices returned by the current page. */
        results: Array<{
          /** The Elorus invoice identifier. */
          id: string;
          /** Custom identifier assigned to the invoice. */
          custom_id?: string;
          /** Human-readable invoice representation. */
          representation?: string;
          /** Invoice status returned by Elorus. */
          status?: string;
          /** Whether the invoice is still a draft. */
          draft?: boolean;
          /** Document type identifier. */
          documenttype?: string | number;
          /** Invoice sequence code. */
          sequence_flat?: string;
          /** Invoice number. */
          number?: string;
          /** Invoice issue date. */
          date?: string;
          /** Configured due days. */
          due_days?: number | null;
          /** Calculated due date returned by Elorus. */
          due_date?: string;
          /** Branch identifier. */
          branch?: string | number | null;
          /** Client contact identifier. */
          client?: string | number;
          /** Client display name shown on the invoice. */
          client_display_name?: string;
          /** Client profession shown on the invoice. */
          client_profession?: string;
          /** Client tax ID shown on the invoice. */
          client_vat_number?: string;
          /** Billing address payload. */
          billing_address?: Record<string, unknown>;
          /** Shipping address payload. */
          shipping_address?: Record<string, unknown>;
          /** Client contact person. */
          client_contact_person?: string;
          /** Client phone number. */
          client_phone_number?: string;
          /** Client email address. */
          client_email?: string;
          /** Loading address payload. */
          loading_address?: Record<string, unknown>;
          /** Dispatch date. */
          dispatch_date?: string;
          /** Dispatch time. */
          dispatch_time?: string;
          /** Vehicle number. */
          vehicle_number?: string;
          /** Declared move purpose value. */
          move_purpose?: string;
          /** Additional move-purpose description. */
          other_move_purpose_title?: string;
          /** Invoice currency code. */
          currency_code?: string;
          /** Exchange rate applied to the invoice. */
          exchange_rate?: string;
          /** Invoice calculator mode. */
          calculator_mode?: string;
          /** Invoice line items. */
          items?: Array<unknown>;
          /** Initial amount. */
          initial?: string;
          /** Net amount. */
          net?: string;
          /** Invoice-level taxes. */
          taxes?: Array<unknown>;
          /** Total amount. */
          total?: string;
          /** Invoice-level withholding taxes. */
          withholding_taxes?: Array<unknown>;
          /** Total payable amount. */
          payable?: string;
          /** Total paid amount. */
          paid?: string;
          /** Template identifier. */
          template?: string | number;
          /** Terms shown on the invoice. */
          terms?: string;
          /** Public notes shown on the invoice. */
          public_notes?: string;
          /** Payment gateway identifiers. */
          payment_gateways?: Array<unknown>;
          /** Related document identifiers. */
          related_documents?: Array<unknown>;
          /** Linked delivery note identifiers. */
          delivery_notes?: Array<unknown>;
          /** Additional transport entities. */
          related_entities?: Array<unknown>;
          /** Tracking categories attached to the invoice. */
          trackingcategories?: Array<unknown>;
          /** Public permalink for the invoice. */
          permalink?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Elorus products or services with optional filters and pagination. */
    "elorus.list_products": {
      input: {
        /**
         * Free-text search term forwarded to the official Elorus search parameter.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated Elorus search_fields value.
         * @minLength 1
         */
        search_fields?: string;
        /** Whether to filter to sale-enabled products or services. */
        sales?: boolean;
        /** Whether to filter to purchase-enabled products or services. */
        purchases?: boolean;
        /** Whether to filter to active products or services. */
        active?: boolean;
        /**
         * Custom identifier filter.
         * @minLength 1
         */
        custom_id?: string;
        /**
         * Official Elorus ordering expression such as modified or -modified.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Lower bound for the created timestamp filter.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Upper bound for the created timestamp filter.
         * @minLength 1
         */
        created_before?: string;
        /**
         * Lower bound for the modified timestamp filter.
         * @minLength 1
         */
        modified_after?: string;
        /**
         * Upper bound for the modified timestamp filter.
         * @minLength 1
         */
        modified_before?: string;
        /**
         * Relative modified period filter accepted by Elorus.
         * @minLength 1
         */
        modified_period?: string;
        /**
         * Relative created period filter accepted by Elorus.
         * @minLength 1
         */
        created_period?: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of results to return per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** Total number of records available. */
        count: number;
        /** URL for the next page, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page, or null when there is no previous page. */
        previous: string | null;
        /** Products or services returned by the current page. */
        results: Array<{
          /** The Elorus product or service identifier. */
          id: string;
          /** Custom identifier assigned to the product. */
          custom_id?: string;
          /** The product or service title. */
          title?: string;
          /** Optional product code. */
          code?: string;
          /** Product or service description. */
          description?: string;
          /** Whether the record is available for sales. */
          sales?: boolean;
          /** Default unit sale value. */
          sale_value?: string;
          /** Default tax identifiers used for sales. */
          sale_taxes?: Array<unknown>;
          /** Whether the record is available for purchases. */
          purchases?: boolean;
          /** Default unit purchase value. */
          purchase_value?: string;
          /** Default tax identifiers used for purchases. */
          purchase_taxes?: Array<unknown>;
          /** Whether Elorus manages the stock for this product. */
          manage?: boolean;
          /** Current total stock value returned by Elorus. */
          stock?: string;
          /** Unit-of-measure symbol. */
          unit_measure?: string;
          /** Tracking categories attached to the product. */
          trackingcategories?: Array<unknown>;
          /** Whether the product or service is active. */
          active?: boolean;
          /** Optional TARIC code. */
          taric_code?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          /** Warehouse stock breakdown returned by Elorus. */
          warehouses_stock?: Array<unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update one Elorus contact by ID. */
    "elorus.update_contact": {
      input: {
        /**
         * The Elorus object identifier.
         * @minLength 1
         */
        id: string;
        /** Raw Elorus contact payload to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Elorus contact returned after the update. */
        contact: {
          /** The Elorus contact identifier. */
          id: string;
          /** Custom identifier assigned to the contact. */
          custom_id?: string;
          /** Whether the contact is active. */
          active?: boolean;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
          /** The company represented by the contact. */
          company?: string;
          /** The generated display name of the contact. */
          display_name?: string;
          /** The contact profession. */
          profession?: string;
          /** The contact tax ID. */
          vat_number?: string;
          /** Whether the contact can be used as a client. */
          is_client?: boolean;
          /** Whether the contact can be used as a supplier. */
          is_supplier?: boolean;
          /** Default language code for the contact. */
          default_language?: string;
          /** Default template ID used for invoicing. */
          default_template?: string;
          /** Default tax identifiers applied when invoicing the contact. */
          default_taxes?: Array<string | number>;
          /** Default currency code for the contact. */
          default_currency_code?: string;
          /** Postal addresses attached to the contact. */
          addresses?: Array<unknown>;
          /** Email addresses attached to the contact. */
          email?: Array<unknown>;
          /** Phone numbers attached to the contact. */
          phones?: Array<unknown>;
          /** Tracking categories attached to the contact. */
          trackingcategories?: Array<unknown>;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Elorus invoice by ID using the official full-update endpoint. */
    "elorus.update_invoice": {
      input: {
        /**
         * The Elorus object identifier.
         * @minLength 1
         */
        id: string;
        /** Raw Elorus invoice payload to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Elorus invoice returned after the update. */
        invoice: {
          /** The Elorus invoice identifier. */
          id: string;
          /** Custom identifier assigned to the invoice. */
          custom_id?: string;
          /** Human-readable invoice representation. */
          representation?: string;
          /** Invoice status returned by Elorus. */
          status?: string;
          /** Whether the invoice is still a draft. */
          draft?: boolean;
          /** Document type identifier. */
          documenttype?: string | number;
          /** Invoice sequence code. */
          sequence_flat?: string;
          /** Invoice number. */
          number?: string;
          /** Invoice issue date. */
          date?: string;
          /** Configured due days. */
          due_days?: number | null;
          /** Calculated due date returned by Elorus. */
          due_date?: string;
          /** Branch identifier. */
          branch?: string | number | null;
          /** Client contact identifier. */
          client?: string | number;
          /** Client display name shown on the invoice. */
          client_display_name?: string;
          /** Client profession shown on the invoice. */
          client_profession?: string;
          /** Client tax ID shown on the invoice. */
          client_vat_number?: string;
          /** Billing address payload. */
          billing_address?: Record<string, unknown>;
          /** Shipping address payload. */
          shipping_address?: Record<string, unknown>;
          /** Client contact person. */
          client_contact_person?: string;
          /** Client phone number. */
          client_phone_number?: string;
          /** Client email address. */
          client_email?: string;
          /** Loading address payload. */
          loading_address?: Record<string, unknown>;
          /** Dispatch date. */
          dispatch_date?: string;
          /** Dispatch time. */
          dispatch_time?: string;
          /** Vehicle number. */
          vehicle_number?: string;
          /** Declared move purpose value. */
          move_purpose?: string;
          /** Additional move-purpose description. */
          other_move_purpose_title?: string;
          /** Invoice currency code. */
          currency_code?: string;
          /** Exchange rate applied to the invoice. */
          exchange_rate?: string;
          /** Invoice calculator mode. */
          calculator_mode?: string;
          /** Invoice line items. */
          items?: Array<unknown>;
          /** Initial amount. */
          initial?: string;
          /** Net amount. */
          net?: string;
          /** Invoice-level taxes. */
          taxes?: Array<unknown>;
          /** Total amount. */
          total?: string;
          /** Invoice-level withholding taxes. */
          withholding_taxes?: Array<unknown>;
          /** Total payable amount. */
          payable?: string;
          /** Total paid amount. */
          paid?: string;
          /** Template identifier. */
          template?: string | number;
          /** Terms shown on the invoice. */
          terms?: string;
          /** Public notes shown on the invoice. */
          public_notes?: string;
          /** Payment gateway identifiers. */
          payment_gateways?: Array<unknown>;
          /** Related document identifiers. */
          related_documents?: Array<unknown>;
          /** Linked delivery note identifiers. */
          delivery_notes?: Array<unknown>;
          /** Additional transport entities. */
          related_entities?: Array<unknown>;
          /** Tracking categories attached to the invoice. */
          trackingcategories?: Array<unknown>;
          /** Public permalink for the invoice. */
          permalink?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Elorus product or service by ID. */
    "elorus.update_product": {
      input: {
        /**
         * The Elorus object identifier.
         * @minLength 1
         */
        id: string;
        /** Raw Elorus product or service payload to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Elorus product or service returned after the update. */
        product: {
          /** The Elorus product or service identifier. */
          id: string;
          /** Custom identifier assigned to the product. */
          custom_id?: string;
          /** The product or service title. */
          title?: string;
          /** Optional product code. */
          code?: string;
          /** Product or service description. */
          description?: string;
          /** Whether the record is available for sales. */
          sales?: boolean;
          /** Default unit sale value. */
          sale_value?: string;
          /** Default tax identifiers used for sales. */
          sale_taxes?: Array<unknown>;
          /** Whether the record is available for purchases. */
          purchases?: boolean;
          /** Default unit purchase value. */
          purchase_value?: string;
          /** Default tax identifiers used for purchases. */
          purchase_taxes?: Array<unknown>;
          /** Whether Elorus manages the stock for this product. */
          manage?: boolean;
          /** Current total stock value returned by Elorus. */
          stock?: string;
          /** Unit-of-measure symbol. */
          unit_measure?: string;
          /** Tracking categories attached to the product. */
          trackingcategories?: Array<unknown>;
          /** Whether the product or service is active. */
          active?: boolean;
          /** Optional TARIC code. */
          taric_code?: string;
          /** Owning organization identifier. */
          organization?: string | number;
          /** Creation timestamp returned by Elorus. */
          created?: string;
          /** Last modification timestamp returned by Elorus. */
          modified?: string;
          /** Warehouse stock breakdown returned by Elorus. */
          warehouses_stock?: Array<unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
