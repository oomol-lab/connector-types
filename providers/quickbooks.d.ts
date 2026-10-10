import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run up to 30 operations in one request. Each item is either a read-only query or a create, update or delete of one entity. Items do not roll back each other when one fails. */
    "quickbooks.batch": {
      input: {
        /**
         * The operations to run.
         * @minItems 1
         * @maxItems 30
         */
        items: Array<{
          /**
           * A caller-chosen ID, echoed back to match the result to the item.
           * @minLength 1
           */
          id: string;
          /** A read-only `select` statement. Use instead of operation, entity and body. */
          query?: string;
          /** Allowed values. */
          operation?: "create" | "update" | "delete";
          /** The entity name for a write, such as Customer. */
          entity?: string;
          /** The entity in its native shape. A delete needs Id and SyncToken. */
          body?: Record<string, unknown>;
        }>;
      };
      output: {
        /** One result per item. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Create a account. */
    "quickbooks.create_account": {
      input: {
        /** The Account fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Name and AccountType, or Name and AccountSubType. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Account record. */
        account: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a bill. */
    "quickbooks.create_bill": {
      input: {
        /** The Bill fields in QuickBooks' native PascalCase shape. Required by QuickBooks: VendorRef and Line (AccountBasedExpenseLineDetail or ItemBasedExpenseLineDetail lines). Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Bill record. */
        bill: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a bill payment. */
    "quickbooks.create_bill_payment": {
      input: {
        /** The BillPayment fields in QuickBooks' native PascalCase shape. Required by QuickBooks: VendorRef, PayType (Check or CreditCard), TotalAmt, Line with LinkedTxn bills, and CheckPayment or CreditCardPayment. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created BillPayment record. */
        bill_payment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a credit memo. */
    "quickbooks.create_credit_memo": {
      input: {
        /** The CreditMemo fields in QuickBooks' native PascalCase shape. Required by QuickBooks: CustomerRef and Line (SalesItemLineDetail lines). Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created CreditMemo record. */
        credit_memo: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a credit term. */
    "quickbooks.create_credit_term": {
      input: {
        /** The Term fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Name and either DueDays or DayOfMonthDue. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Term record. */
        credit_term: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a customer. */
    "quickbooks.create_customer": {
      input: {
        /**
         * The customer's display name, unique across customers, vendors and employees.
         * @minLength 1
         */
        display_name: string;
        /** First name. */
        given_name?: string;
        /** Last name. */
        family_name?: string;
        /** Company name. */
        company_name?: string;
        /**
         * Primary email address.
         * @format email
         */
        email?: string;
        /** Primary phone number. */
        phone?: string;
        /** Free-form notes. */
        notes?: string;
        /** Billing address. */
        billing_address?: {
          /** Street address line 1. */
          line1?: string;
          /** Street address line 2. */
          line2?: string;
          /** City. */
          city?: string;
          /** State or province code. */
          country_sub_division_code?: string;
          /** Postal or ZIP code. */
          postal_code?: string;
          /** Country. */
          country?: string;
        };
        /** Shipping address. */
        shipping_address?: {
          /** Street address line 1. */
          line1?: string;
          /** Street address line 2. */
          line2?: string;
          /** City. */
          city?: string;
          /** State or province code. */
          country_sub_division_code?: string;
          /** Postal or ZIP code. */
          postal_code?: string;
          /** Country. */
          country?: string;
        };
        /** Extra QuickBooks fields in their native PascalCase names, merged over the modelled fields. Use it for any field not listed here. */
        additional_fields?: Record<string, unknown>;
      };
      output: {
        /** The created Customer record. */
        customer: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a department. */
    "quickbooks.create_department": {
      input: {
        /** The Department fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Name. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Department record. */
        department: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a deposit. */
    "quickbooks.create_deposit": {
      input: {
        /** The Deposit fields in QuickBooks' native PascalCase shape. Required by QuickBooks: DepositToAccountRef and Line (DepositLineDetail lines). Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Deposit record. */
        deposit: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a employee. */
    "quickbooks.create_employee": {
      input: {
        /** The Employee fields in QuickBooks' native PascalCase shape. Required by QuickBooks: GivenName and FamilyName. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Employee record. */
        employee: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a estimate. */
    "quickbooks.create_estimate": {
      input: {
        /** The Estimate fields in QuickBooks' native PascalCase shape. Required by QuickBooks: CustomerRef and Line (SalesItemLineDetail lines). Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Estimate record. */
        estimate: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an invoice for a customer from one or more sales lines. */
    "quickbooks.create_invoice": {
      input: {
        /** The customer being invoiced (CustomerRef). */
        customer_ref: {
          /**
           * The ID of the referenced entity.
           * @minLength 1
           */
          value: string;
          /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
          name?: string;
        };
        /**
         * The invoice lines.
         * @minItems 1
         */
        lines: Array<{
          /** The line total, usually quantity times unit price. */
          amount: number;
          /** Line description. */
          description?: string;
          /** The product or service sold on this line (ItemRef). */
          item_ref: {
            /**
             * The ID of the referenced entity.
             * @minLength 1
             */
            value: string;
            /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
            name?: string;
          };
          /** Quantity sold. */
          quantity?: number;
          /** Price per unit. */
          unit_price?: number;
        }>;
        /**
         * The invoice date. Defaults to today in QuickBooks.
         * @format date
         */
        txn_date?: string;
        /**
         * The payment due date.
         * @format date
         */
        due_date?: string;
        /** The invoice number shown to the customer. QuickBooks assigns one when omitted. */
        doc_number?: string;
        /** A note visible only inside QuickBooks. */
        private_note?: string;
        /** A message printed on the invoice for the customer. */
        customer_memo?: string;
        /**
         * The email address the invoice is sent to.
         * @format email
         */
        bill_email?: string;
        /** The currency (CurrencyRef) when multicurrency is enabled. */
        currency_ref?: {
          /**
           * The ID of the referenced entity.
           * @minLength 1
           */
          value: string;
          /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
          name?: string;
        };
        /** Extra QuickBooks fields in their native PascalCase names, merged over the modelled fields. Use it for any field not listed here. */
        additional_fields?: Record<string, unknown>;
      };
      output: {
        /** The created Invoice record. */
        invoice: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a journal code. */
    "quickbooks.create_journal_code": {
      input: {
        /** The JournalCode fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Name and Type. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created JournalCode record. */
        journal_code: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a journal entry. */
    "quickbooks.create_journal_entry": {
      input: {
        /** The JournalEntry fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Line with balanced debit and credit JournalEntryLineDetail lines. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created JournalEntry record. */
        journal_entry: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Record a customer payment, optionally applying it to specific invoices. */
    "quickbooks.create_payment": {
      input: {
        /** The paying customer (CustomerRef). */
        customer_ref: {
          /**
           * The ID of the referenced entity.
           * @minLength 1
           */
          value: string;
          /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
          name?: string;
        };
        /** The total amount received. */
        total_amount: number;
        /**
         * The payment date. Defaults to today in QuickBooks.
         * @format date
         */
        txn_date?: string;
        /** The payment method (PaymentMethodRef). */
        payment_method_ref?: {
          /**
           * The ID of the referenced entity.
           * @minLength 1
           */
          value: string;
          /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
          name?: string;
        };
        /** The account the payment is deposited to (DepositToAccountRef). */
        deposit_to_account_ref?: {
          /**
           * The ID of the referenced entity.
           * @minLength 1
           */
          value: string;
          /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
          name?: string;
        };
        /** A reference number such as a check number. */
        payment_ref_num?: string;
        /** A note visible only inside QuickBooks. */
        private_note?: string;
        /** Invoices this payment settles. Leave empty to record an unapplied payment. */
        applied_to?: Array<{
          /**
           * The QuickBooks entity ID, as returned in the `Id` field.
           * @minLength 1
           */
          invoice_id: string;
          /** The amount applied to this invoice. */
          amount: number;
        }>;
        /** Extra QuickBooks fields in their native PascalCase names, merged over the modelled fields. Use it for any field not listed here. */
        additional_fields?: Record<string, unknown>;
      };
      output: {
        /** The created Payment record. */
        payment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a payment method. */
    "quickbooks.create_payment_method": {
      input: {
        /** The PaymentMethod fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Name. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created PaymentMethod record. */
        payment_method: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a product or service. */
    "quickbooks.create_product": {
      input: {
        /** The Item fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Name and Type (Service, Inventory or NonInventory), plus IncomeAccountRef for sellable items. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Item record. */
        product: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a purchase (expense, check or credit card charge). */
    "quickbooks.create_purchase": {
      input: {
        /** The Purchase fields in QuickBooks' native PascalCase shape. Required by QuickBooks: AccountRef, PaymentType (Cash, Check or CreditCard) and Line. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Purchase record. */
        purchase: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a purchase order. */
    "quickbooks.create_purchase_order": {
      input: {
        /** The PurchaseOrder fields in QuickBooks' native PascalCase shape. Required by QuickBooks: VendorRef, APAccountRef and Line (ItemBasedExpenseLineDetail or AccountBasedExpenseLineDetail lines). Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created PurchaseOrder record. */
        purchase_order: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a record of any supported entity by name. */
    "quickbooks.create_record": {
      input: {
        /** The QuickBooks entity name, such as Invoice or Bill. */
        object_name: "Bill" | "BillPayment" | "Budget" | "Class" | "CreditMemo" | "Term" | "CompanyCurrency" | "Customer" | "Department" | "Deposit" | "Employee" | "Estimate" | "Invoice" | "JournalCode" | "JournalEntry" | "Account" | "PaymentMethod" | "Payment" | "Item" | "PurchaseOrder" | "Purchase" | "RefundReceipt" | "SalesReceipt" | "TaxAgency" | "TaxCode" | "TaxRate" | "TimeActivity" | "Transfer" | "VendorCredit" | "Vendor";
        /** The record in QuickBooks' native shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The QuickBooks record. */
        record: Record<string, unknown>;
        /** Whether the record was deleted or deactivated. Only set by delete_record. */
        deleted?: boolean;
      };
    };
    /** Create a refund receipt. */
    "quickbooks.create_refund_receipt": {
      input: {
        /** The RefundReceipt fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Line (SalesItemLineDetail lines), DepositToAccountRef and optionally CustomerRef. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created RefundReceipt record. */
        refund_receipt: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a sales receipt. */
    "quickbooks.create_sales_receipt": {
      input: {
        /** The SalesReceipt fields in QuickBooks' native PascalCase shape. Required by QuickBooks: Line (SalesItemLineDetail lines) and optionally CustomerRef and DepositToAccountRef. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created SalesReceipt record. */
        sales_receipt: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a tax agency. */
    "quickbooks.create_tax_agency": {
      input: {
        /** The TaxAgency fields in QuickBooks' native PascalCase shape. Required by QuickBooks: DisplayName. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created TaxAgency record. */
        tax_agency: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a time activity. */
    "quickbooks.create_time_activity": {
      input: {
        /** The TimeActivity fields in QuickBooks' native PascalCase shape. Required by QuickBooks: NameOf (Employee or Vendor), the matching EmployeeRef or VendorRef, and Hours/Minutes or StartTime/EndTime. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created TimeActivity record. */
        time_activity: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a transfer. */
    "quickbooks.create_transfer": {
      input: {
        /** The Transfer fields in QuickBooks' native PascalCase shape. Required by QuickBooks: FromAccountRef, ToAccountRef and Amount. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Transfer record. */
        transfer: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a vendor. */
    "quickbooks.create_vendor": {
      input: {
        /** The Vendor fields in QuickBooks' native PascalCase shape. Required by QuickBooks: DisplayName, or at least one of GivenName, FamilyName and CompanyName. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created Vendor record. */
        vendor: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a vendor credit. */
    "quickbooks.create_vendor_credit": {
      input: {
        /** The VendorCredit fields in QuickBooks' native PascalCase shape. Required by QuickBooks: VendorRef and Line (AccountBasedExpenseLineDetail or ItemBasedExpenseLineDetail lines). Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The created VendorCredit record. */
        vendor_credit: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Deactivate a account by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_account": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Account record or deletion result. */
        account: Record<string, unknown>;
      };
    };
    /** Permanently delete an attachment. */
    "quickbooks.delete_attachment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** Whether QuickBooks reported the attachment as deleted. */
        deleted: boolean;
        /** An object with provider-defined fields. */
        attachment: Record<string, unknown>;
      };
    };
    /** Permanently delete a bill. This cannot be undone. */
    "quickbooks.delete_bill": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Bill record or deletion result. */
        bill: Record<string, unknown>;
      };
    };
    /** Permanently delete a bill payment. This cannot be undone. */
    "quickbooks.delete_bill_payment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The BillPayment record or deletion result. */
        bill_payment: Record<string, unknown>;
      };
    };
    /** Permanently delete a credit memo. This cannot be undone. */
    "quickbooks.delete_credit_memo": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The CreditMemo record or deletion result. */
        credit_memo: Record<string, unknown>;
      };
    };
    /** Deactivate a credit term by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_credit_term": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Term record or deletion result. */
        credit_term: Record<string, unknown>;
      };
    };
    /** Deactivate a customer by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_customer": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Customer record or deletion result. */
        customer: Record<string, unknown>;
      };
    };
    /** Deactivate a department by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_department": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Department record or deletion result. */
        department: Record<string, unknown>;
      };
    };
    /** Permanently delete a deposit. This cannot be undone. */
    "quickbooks.delete_deposit": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Deposit record or deletion result. */
        deposit: Record<string, unknown>;
      };
    };
    /** Deactivate a employee by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_employee": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Employee record or deletion result. */
        employee: Record<string, unknown>;
      };
    };
    /** Permanently delete a estimate. This cannot be undone. */
    "quickbooks.delete_estimate": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Estimate record or deletion result. */
        estimate: Record<string, unknown>;
      };
    };
    /** Permanently delete an invoice. This cannot be undone; void the invoice instead to keep a record. */
    "quickbooks.delete_invoice": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** Whether QuickBooks reported the invoice as deleted. */
        deleted: boolean;
        /** The deletion result returned by QuickBooks. */
        invoice: {
          /** The deleted invoice ID. */
          Id?: string;
          /** The status QuickBooks reported. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a journal entry. This cannot be undone. */
    "quickbooks.delete_journal_entry": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The JournalEntry record or deletion result. */
        journal_entry: Record<string, unknown>;
      };
    };
    /** Permanently delete a payment. This cannot be undone. */
    "quickbooks.delete_payment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Payment record or deletion result. */
        payment: Record<string, unknown>;
      };
    };
    /** Deactivate a payment method by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_payment_method": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The PaymentMethod record or deletion result. */
        payment_method: Record<string, unknown>;
      };
    };
    /** Deactivate a product or service by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_product": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Item record or deletion result. */
        product: Record<string, unknown>;
      };
    };
    /** Permanently delete a purchase (expense, check or credit card charge). This cannot be undone. */
    "quickbooks.delete_purchase": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Purchase record or deletion result. */
        purchase: Record<string, unknown>;
      };
    };
    /** Permanently delete a purchase order. This cannot be undone. */
    "quickbooks.delete_purchase_order": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The PurchaseOrder record or deletion result. */
        purchase_order: Record<string, unknown>;
      };
    };
    /** Delete a record of any supported entity by name. Entities QuickBooks cannot delete are deactivated instead. */
    "quickbooks.delete_record": {
      input: {
        /** The QuickBooks entity name, such as Invoice or Bill. */
        object_name: "Bill" | "BillPayment" | "Budget" | "Class" | "CreditMemo" | "Term" | "CompanyCurrency" | "Customer" | "Department" | "Deposit" | "Employee" | "Estimate" | "Invoice" | "JournalCode" | "JournalEntry" | "Account" | "PaymentMethod" | "Payment" | "Item" | "PurchaseOrder" | "Purchase" | "RefundReceipt" | "SalesReceipt" | "TaxAgency" | "TaxCode" | "TaxRate" | "TimeActivity" | "Transfer" | "VendorCredit" | "Vendor";
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The QuickBooks record. */
        record: Record<string, unknown>;
        /** Whether the record was deleted or deactivated. Only set by delete_record. */
        deleted?: boolean;
      };
    };
    /** Permanently delete a refund receipt. This cannot be undone. */
    "quickbooks.delete_refund_receipt": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The RefundReceipt record or deletion result. */
        refund_receipt: Record<string, unknown>;
      };
    };
    /** Permanently delete a sales receipt. This cannot be undone. */
    "quickbooks.delete_sales_receipt": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The SalesReceipt record or deletion result. */
        sales_receipt: Record<string, unknown>;
      };
    };
    /** Permanently delete a time activity. This cannot be undone. */
    "quickbooks.delete_time_activity": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The TimeActivity record or deletion result. */
        time_activity: Record<string, unknown>;
      };
    };
    /** Permanently delete a transfer. This cannot be undone. */
    "quickbooks.delete_transfer": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Transfer record or deletion result. */
        transfer: Record<string, unknown>;
      };
    };
    /** Deactivate a vendor by setting Active to false. QuickBooks does not delete this kind of record. */
    "quickbooks.delete_vendor": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The Vendor record or deletion result. */
        vendor: Record<string, unknown>;
      };
    };
    /** Permanently delete a vendor credit. This cannot be undone. */
    "quickbooks.delete_vendor_credit": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The field value. */
        deleted: boolean;
        /** The VendorCredit record or deletion result. */
        vendor_credit: Record<string, unknown>;
      };
    };
    /** Get one account by ID. */
    "quickbooks.get_account": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Account record. */
        account: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get an attachment's metadata by ID. */
    "quickbooks.get_attachment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Attachable record. */
        attachment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a temporary URL to download an attachment's file. */
    "quickbooks.get_attachment_download_url": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A short-lived download URL. */
        download_url: string | null;
      };
    };
    /** Get one bill by its ID. */
    "quickbooks.get_bill": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Bill record. */
        bill: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one bill payment by its ID. */
    "quickbooks.get_bill_payment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The BillPayment record. */
        bill_payment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** List records of the given entities that changed since a point in time (change data capture). QuickBooks looks back at most 30 days and returns at most 1000 records per call. */
    "quickbooks.get_changes": {
      input: {
        /**
         * Entities to check.
         * @minItems 1
         */
        entities: Array<string>;
        /**
         * Return records changed on or after this time.
         * @format date-time
         */
        changed_since: string;
      };
      output: {
        /** The CDCResponse in QuickBooks' native shape. */
        changes: Record<string, unknown>;
      };
    };
    /** Get the connected company's profile: name, legal name, address, fiscal year start and country. */
    "quickbooks.get_company_info": {
      input: Record<string, never>;
      output: {
        /** The CompanyInfo record. */
        company_info: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one credit memo by its ID. */
    "quickbooks.get_credit_memo": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The CreditMemo record. */
        credit_memo: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one credit term by its ID. */
    "quickbooks.get_credit_term": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Term record. */
        credit_term: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one customer by ID, including its current SyncToken. */
    "quickbooks.get_customer": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Customer record. */
        customer: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one department by its ID. */
    "quickbooks.get_department": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Department record. */
        department: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one deposit by its ID. */
    "quickbooks.get_deposit": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Deposit record. */
        deposit: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one employee by its ID. */
    "quickbooks.get_employee": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Employee record. */
        employee: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one estimate by its ID. */
    "quickbooks.get_estimate": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Estimate record. */
        estimate: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the exchange rate from a currency to the company's home currency. */
    "quickbooks.get_exchange_rate": {
      input: {
        /** The three-letter ISO 4217 source currency code, such as EUR. */
        currency_code: string;
        /**
         * The rate date. Defaults to today.
         * @format date
         */
        as_of_date?: string;
      };
      output: {
        /** The ExchangeRate record. */
        exchange_rate: Record<string, unknown>;
      };
    };
    /** Get one invoice by ID, including its lines, balance and current SyncToken. */
    "quickbooks.get_invoice": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Invoice record. */
        invoice: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one journal code by its ID. */
    "quickbooks.get_journal_code": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JournalCode record. */
        journal_code: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one journal entry by its ID. */
    "quickbooks.get_journal_entry": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The JournalEntry record. */
        journal_entry: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one payment by ID, including the invoices it was applied to. */
    "quickbooks.get_payment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Payment record. */
        payment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one payment method by its ID. */
    "quickbooks.get_payment_method": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The PaymentMethod record. */
        payment_method: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the company preferences: accounting, sales, tax, currency and other settings. */
    "quickbooks.get_preferences": {
      input: Record<string, never>;
      output: {
        /** The Preferences record. */
        preferences: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one product or service by its ID. */
    "quickbooks.get_product": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Item record. */
        product: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one purchase (expense, check or credit card charge) by its ID. */
    "quickbooks.get_purchase": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Purchase record. */
        purchase: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one purchase order by its ID. */
    "quickbooks.get_purchase_order": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The PurchaseOrder record. */
        purchase_order: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one record of any supported entity by name and ID. */
    "quickbooks.get_record": {
      input: {
        /** The QuickBooks entity name, such as Invoice or Bill. */
        object_name: "Bill" | "BillPayment" | "Budget" | "Class" | "CreditMemo" | "Term" | "CompanyCurrency" | "Customer" | "Department" | "Deposit" | "Employee" | "Estimate" | "Invoice" | "JournalCode" | "JournalEntry" | "Account" | "PaymentMethod" | "Payment" | "Item" | "PurchaseOrder" | "Purchase" | "RefundReceipt" | "SalesReceipt" | "TaxAgency" | "TaxCode" | "TaxRate" | "TimeActivity" | "Transfer" | "VendorCredit" | "Vendor";
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The QuickBooks record. */
        record: Record<string, unknown>;
        /** Whether the record was deleted or deactivated. Only set by delete_record. */
        deleted?: boolean;
      };
    };
    /** Get one refund receipt by its ID. */
    "quickbooks.get_refund_receipt": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The RefundReceipt record. */
        refund_receipt: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Run any QuickBooks report. Use `parameters` for report-specific options such as customer, vendor or account filters. */
    "quickbooks.get_report": {
      input: {
        /** The report to run. */
        report_name: "ProfitAndLoss" | "ProfitAndLossDetail" | "BalanceSheet" | "CashFlow" | "TrialBalance" | "GeneralLedger" | "JournalReport" | "TransactionList" | "AgedReceivables" | "AgedReceivableDetail" | "AgedPayables" | "AgedPayableDetail" | "CustomerSales" | "CustomerIncome" | "CustomerBalance" | "CustomerBalanceDetail" | "VendorExpenses" | "VendorBalance" | "VendorBalanceDetail" | "ItemSales" | "ClassSales" | "DepartmentSales" | "InventoryValuationSummary" | "TaxSummary" | "AccountListDetail";
        /**
         * First day of the report period.
         * @format date
         */
        start_date?: string;
        /**
         * Last day of the report period.
         * @format date
         */
        end_date?: string;
        /** Allowed values. */
        accounting_method?: "Cash" | "Accrual";
        /** How columns are broken out, such as Month or Customers. */
        summarize_column_by?: string;
        /** Extra report query parameters by name, such as `customer`. */
        parameters?: Record<string, unknown>;
      };
      output: {
        /** The report in QuickBooks' native shape. */
        report: Record<string, unknown>;
      };
    };
    /** Get one sales receipt by its ID. */
    "quickbooks.get_sales_receipt": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The SalesReceipt record. */
        sales_receipt: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one tax agency by its ID. */
    "quickbooks.get_tax_agency": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The TaxAgency record. */
        tax_agency: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one tax code by its ID. */
    "quickbooks.get_tax_code": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The TaxCode record. */
        tax_code: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one tax rate by its ID. */
    "quickbooks.get_tax_rate": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The TaxRate record. */
        tax_rate: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one time activity by its ID. */
    "quickbooks.get_time_activity": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The TimeActivity record. */
        time_activity: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one transfer by its ID. */
    "quickbooks.get_transfer": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Transfer record. */
        transfer: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one vendor by its ID. */
    "quickbooks.get_vendor": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Vendor record. */
        vendor: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one vendor credit by its ID. */
    "quickbooks.get_vendor_credit": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The VendorCredit record. */
        vendor_credit: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** List accounts from the chart of accounts, optionally filtered by type or name. */
    "quickbooks.list_accounts": {
      input: {
        /** Only accounts of this type. */
        account_type?: "Bank" | "Other Current Asset" | "Fixed Asset" | "Other Asset" | "Accounts Receivable" | "Equity" | "Expense" | "Other Expense" | "Cost of Goods Sold" | "Accounts Payable" | "Credit Card" | "Long Term Liability" | "Other Current Liability" | "Income" | "Other Income";
        /** Only accounts whose name contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /**
         * Allowed values.
         * @default "Name"
         */
        order_by?: "Name" | "MetaData.CreateTime" | "MetaData.LastUpdatedTime";
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching accounts. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List attachments, optionally only those linked to one record. */
    "quickbooks.list_attachments": {
      input: {
        /** The QuickBooks entity type of the linked record, such as Invoice. */
        entity_type?: string;
        /**
         * The linked record ID. Needs entity_type.
         * @minLength 1
         */
        entity_id?: string;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The Attachable records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List bill payments, optionally filtered. */
    "quickbooks.list_bill_payments": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A BillPayment column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching BillPayment records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List bills, optionally filtered. */
    "quickbooks.list_bills": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A Bill column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Bill records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List budgets, optionally filtered. */
    "quickbooks.list_budgets": {
      input: {
        /** A Budget column to sort by, such as `MetaData.LastUpdatedTime`. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Budget records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List classs, optionally filtered. */
    "quickbooks.list_classes": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A Class column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Class records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List credit memos, optionally filtered. */
    "quickbooks.list_credit_memos": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A CreditMemo column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching CreditMemo records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List credit terms, optionally filtered. */
    "quickbooks.list_credit_terms": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A Term column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Term records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List currencys, optionally filtered. */
    "quickbooks.list_currencies": {
      input: {
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A CompanyCurrency column to sort by, such as `MetaData.LastUpdatedTime`. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching CompanyCurrency records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List customers, optionally filtered by name or active status. */
    "quickbooks.list_customers": {
      input: {
        /** Return customers whose display name contains this text. */
        display_name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /**
         * Allowed values.
         * @default "DisplayName"
         */
        order_by?: "DisplayName" | "MetaData.CreateTime" | "MetaData.LastUpdatedTime";
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching customers. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List departments, optionally filtered. */
    "quickbooks.list_departments": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A Department column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Department records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List deposits, optionally filtered. */
    "quickbooks.list_deposits": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A Deposit column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Deposit records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List employees, optionally filtered. */
    "quickbooks.list_employees": {
      input: {
        /** Return records whose DisplayName contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A Employee column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to DisplayName. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Employee records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List estimates, optionally filtered. */
    "quickbooks.list_estimates": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A Estimate column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Estimate records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List invoices, optionally filtered by customer, number, date range or open balance. */
    "quickbooks.list_invoices": {
      input: {
        /**
         * Only invoices for this customer ID.
         * @minLength 1
         */
        customer_id?: string;
        /** Only the invoice with this number. */
        doc_number?: string;
        /**
         * Only invoices dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only invoices dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /**
         * Only invoices with an open balance.
         * @default false
         */
        unpaid_only?: boolean;
        /**
         * Allowed values.
         * @default "TxnDate"
         */
        order_by?: "TxnDate" | "DueDate" | "MetaData.CreateTime" | "MetaData.LastUpdatedTime";
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching invoices. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List journal codes, optionally filtered. */
    "quickbooks.list_journal_codes": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /** A JournalCode column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching JournalCode records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List journal entrys, optionally filtered. */
    "quickbooks.list_journal_entries": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A JournalEntry column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching JournalEntry records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List payment methods, optionally filtered. */
    "quickbooks.list_payment_methods": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A PaymentMethod column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching PaymentMethod records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List customer payments, optionally filtered by customer or date range. */
    "quickbooks.list_payments": {
      input: {
        /**
         * Only payments from this customer ID.
         * @minLength 1
         */
        customer_id?: string;
        /**
         * Only payments dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only payments dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /**
         * Allowed values.
         * @default "TxnDate"
         */
        order_by?: "TxnDate" | "MetaData.CreateTime" | "MetaData.LastUpdatedTime";
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching payments. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List product or services, optionally filtered. */
    "quickbooks.list_products": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A Item column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Item records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List purchase orders, optionally filtered. */
    "quickbooks.list_purchase_orders": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A PurchaseOrder column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching PurchaseOrder records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List purchase (expense, check or credit card charge)s, optionally filtered. */
    "quickbooks.list_purchases": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A Purchase column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Purchase records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List records of any supported entity by name. Prefer the entity-specific list actions. */
    "quickbooks.list_records": {
      input: {
        /** The QuickBooks entity name, such as Invoice or Bill. */
        object_name: "Bill" | "BillPayment" | "Budget" | "Class" | "CreditMemo" | "Term" | "CompanyCurrency" | "Customer" | "Department" | "Deposit" | "Employee" | "Estimate" | "Invoice" | "JournalCode" | "JournalEntry" | "Account" | "PaymentMethod" | "Payment" | "Item" | "PurchaseOrder" | "Purchase" | "RefundReceipt" | "SalesReceipt" | "TaxAgency" | "TaxCode" | "TaxRate" | "TimeActivity" | "Transfer" | "VendorCredit" | "Vendor";
        /** Match the entity's name column, where it has one. */
        name_contains?: string;
        /** Allowed values. */
        status?: "active" | "inactive" | "all";
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        txn_date_from?: string;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        txn_date_to?: string;
        /** A column to sort by. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List refund receipts, optionally filtered. */
    "quickbooks.list_refund_receipts": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A RefundReceipt column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching RefundReceipt records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List sales receipts, optionally filtered. */
    "quickbooks.list_sales_receipts": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A SalesReceipt column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching SalesReceipt records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List tax agencys, optionally filtered. */
    "quickbooks.list_tax_agencies": {
      input: {
        /** A TaxAgency column to sort by, such as `MetaData.LastUpdatedTime`. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching TaxAgency records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List tax codes, optionally filtered. */
    "quickbooks.list_tax_codes": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /** A TaxCode column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching TaxCode records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List tax rates, optionally filtered. */
    "quickbooks.list_tax_rates": {
      input: {
        /** Return records whose Name contains this text. */
        name_contains?: string;
        /** A TaxRate column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to Name. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching TaxRate records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List time activitys, optionally filtered. */
    "quickbooks.list_time_activities": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A TimeActivity column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching TimeActivity records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List transfers, optionally filtered. */
    "quickbooks.list_transfers": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A Transfer column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Transfer records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List vendor credits, optionally filtered. */
    "quickbooks.list_vendor_credits": {
      input: {
        /**
         * Only records dated on or after this day.
         * @format date
         */
        txn_date_from?: string;
        /**
         * Only records dated on or before this day.
         * @format date
         */
        txn_date_to?: string;
        /** A VendorCredit column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to TxnDate. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching VendorCredit records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** List vendors, optionally filtered. */
    "quickbooks.list_vendors": {
      input: {
        /** Return records whose DisplayName contains this text. */
        name_contains?: string;
        /**
         * Which records to return by their Active flag. QuickBooks hides inactive records unless asked.
         * @default "active"
         */
        status?: "active" | "inactive" | "all";
        /** A Vendor column to sort by, such as `MetaData.LastUpdatedTime`. Defaults to DisplayName. */
        order_by?: string;
        /**
         * Sort in descending order.
         * @default false
         */
        descending?: boolean;
        /**
         * 1-based index of the first row to return.
         * @exclusiveMinimum 0
         * @default 1
         */
        start_position?: number;
        /**
         * Maximum rows to return per page, up to 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        max_results?: number;
      };
      output: {
        /** The matching Vendor records. */
        items: Array<Record<string, unknown>>;
        /** The 1-based index of the first returned row. */
        start_position: number;
        /** The page size that was requested. */
        max_results: number;
        /** Pass this as start_position to fetch the next page. Null when this was the last page. */
        next_start_position: number | null;
        /** Whether another page may be available. */
        has_more: boolean;
      };
    };
    /** Check that the connection works by reading the company profile. */
    "quickbooks.ping": {
      input: Record<string, never>;
      output: {
        /** Always true when the call succeeds. */
        ok: boolean;
        /** The connected company ID. */
        realm_id: string;
        /** The company name. */
        company_name: string | null;
      };
    };
    /** Update an attachment's metadata, such as its note or file name. */
    "quickbooks.update_attachment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Attachable fields to change. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Attachable record. */
        attachment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a bill. With the default sparse update only the supplied fields change. */
    "quickbooks.update_bill": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Bill fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Bill record. */
        bill: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a bill payment. With the default sparse update only the supplied fields change. */
    "quickbooks.update_bill_payment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The BillPayment fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated BillPayment record. */
        bill_payment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a credit memo. With the default sparse update only the supplied fields change. */
    "quickbooks.update_credit_memo": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The CreditMemo fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated CreditMemo record. */
        credit_memo: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a credit term. With the default sparse update only the supplied fields change. */
    "quickbooks.update_credit_term": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Term fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Term record. */
        credit_term: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a customer. Customers cannot be deleted in QuickBooks; set `additional_fields.Active` to false to deactivate one. */
    "quickbooks.update_customer": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /**
         * The customer's new display name.
         * @minLength 1
         */
        display_name?: string;
        /** First name. */
        given_name?: string;
        /** Last name. */
        family_name?: string;
        /** Company name. */
        company_name?: string;
        /**
         * Primary email address.
         * @format email
         */
        email?: string;
        /** Primary phone number. */
        phone?: string;
        /** Free-form notes. */
        notes?: string;
        /** Billing address. */
        billing_address?: {
          /** Street address line 1. */
          line1?: string;
          /** Street address line 2. */
          line2?: string;
          /** City. */
          city?: string;
          /** State or province code. */
          country_sub_division_code?: string;
          /** Postal or ZIP code. */
          postal_code?: string;
          /** Country. */
          country?: string;
        };
        /** Shipping address. */
        shipping_address?: {
          /** Street address line 1. */
          line1?: string;
          /** Street address line 2. */
          line2?: string;
          /** City. */
          city?: string;
          /** State or province code. */
          country_sub_division_code?: string;
          /** Postal or ZIP code. */
          postal_code?: string;
          /** Country. */
          country?: string;
        };
        /** Extra QuickBooks fields in their native PascalCase names, merged over the modelled fields. Use it for any field not listed here. */
        additional_fields?: Record<string, unknown>;
      };
      output: {
        /** The updated Customer record. */
        customer: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a department. With the default sparse update only the supplied fields change. */
    "quickbooks.update_department": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Department fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Department record. */
        department: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a deposit. With the default sparse update only the supplied fields change. */
    "quickbooks.update_deposit": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Deposit fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Deposit record. */
        deposit: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a employee. With the default sparse update only the supplied fields change. */
    "quickbooks.update_employee": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Employee fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Employee record. */
        employee: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a estimate. With the default sparse update only the supplied fields change. */
    "quickbooks.update_estimate": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Estimate fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Estimate record. */
        estimate: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update an invoice. With the default sparse update only the supplied fields change; a supplied `lines` array replaces the invoice's lines. */
    "quickbooks.update_invoice": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The customer being invoiced (CustomerRef). */
        customer_ref?: {
          /**
           * The ID of the referenced entity.
           * @minLength 1
           */
          value: string;
          /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
          name?: string;
        };
        /**
         * The complete replacement set of invoice lines.
         * @minItems 1
         */
        lines?: Array<{
          /** The line total, usually quantity times unit price. */
          amount: number;
          /** Line description. */
          description?: string;
          /** The product or service sold on this line (ItemRef). */
          item_ref: {
            /**
             * The ID of the referenced entity.
             * @minLength 1
             */
            value: string;
            /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
            name?: string;
          };
          /** Quantity sold. */
          quantity?: number;
          /** Price per unit. */
          unit_price?: number;
        }>;
        /**
         * The invoice date. Defaults to today in QuickBooks.
         * @format date
         */
        txn_date?: string;
        /**
         * The payment due date.
         * @format date
         */
        due_date?: string;
        /** The invoice number shown to the customer. QuickBooks assigns one when omitted. */
        doc_number?: string;
        /** A note visible only inside QuickBooks. */
        private_note?: string;
        /** A message printed on the invoice for the customer. */
        customer_memo?: string;
        /**
         * The email address the invoice is sent to.
         * @format email
         */
        bill_email?: string;
        /** The currency (CurrencyRef) when multicurrency is enabled. */
        currency_ref?: {
          /**
           * The ID of the referenced entity.
           * @minLength 1
           */
          value: string;
          /** Optional display name of the referenced entity. QuickBooks ignores it on input. */
          name?: string;
        };
        /** Extra QuickBooks fields in their native PascalCase names, merged over the modelled fields. Use it for any field not listed here. */
        additional_fields?: Record<string, unknown>;
      };
      output: {
        /** The updated Invoice record. */
        invoice: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a journal code. With the default sparse update only the supplied fields change. */
    "quickbooks.update_journal_code": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The JournalCode fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated JournalCode record. */
        journal_code: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a journal entry. With the default sparse update only the supplied fields change. */
    "quickbooks.update_journal_entry": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The JournalEntry fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated JournalEntry record. */
        journal_entry: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a payment. With the default sparse update only the supplied fields change. */
    "quickbooks.update_payment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Payment fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Payment record. */
        payment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a product or service. With the default sparse update only the supplied fields change. */
    "quickbooks.update_product": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Item fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Item record. */
        product: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a purchase (expense, check or credit card charge). With the default sparse update only the supplied fields change. */
    "quickbooks.update_purchase": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Purchase fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Purchase record. */
        purchase: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a purchase order. With the default sparse update only the supplied fields change. */
    "quickbooks.update_purchase_order": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The PurchaseOrder fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated PurchaseOrder record. */
        purchase_order: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a record of any supported entity by name. */
    "quickbooks.update_record": {
      input: {
        /** The QuickBooks entity name, such as Invoice or Bill. */
        object_name: "Bill" | "BillPayment" | "Budget" | "Class" | "CreditMemo" | "Term" | "CompanyCurrency" | "Customer" | "Department" | "Deposit" | "Employee" | "Estimate" | "Invoice" | "JournalCode" | "JournalEntry" | "Account" | "PaymentMethod" | "Payment" | "Item" | "PurchaseOrder" | "Purchase" | "RefundReceipt" | "SalesReceipt" | "TaxAgency" | "TaxCode" | "TaxRate" | "TimeActivity" | "Transfer" | "VendorCredit" | "Vendor";
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The fields to change in native shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The QuickBooks record. */
        record: Record<string, unknown>;
        /** Whether the record was deleted or deactivated. Only set by delete_record. */
        deleted?: boolean;
      };
    };
    /** Update a refund receipt. With the default sparse update only the supplied fields change. */
    "quickbooks.update_refund_receipt": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The RefundReceipt fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated RefundReceipt record. */
        refund_receipt: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a sales receipt. With the default sparse update only the supplied fields change. */
    "quickbooks.update_sales_receipt": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The SalesReceipt fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated SalesReceipt record. */
        sales_receipt: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a time activity. With the default sparse update only the supplied fields change. */
    "quickbooks.update_time_activity": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The TimeActivity fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated TimeActivity record. */
        time_activity: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a transfer. With the default sparse update only the supplied fields change. */
    "quickbooks.update_transfer": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Transfer fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Transfer record. */
        transfer: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a vendor. With the default sparse update only the supplied fields change. */
    "quickbooks.update_vendor": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The Vendor fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated Vendor record. */
        vendor: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a vendor credit. With the default sparse update only the supplied fields change. */
    "quickbooks.update_vendor_credit": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
        /**
         * When true (default), only the supplied fields change and the rest of the entity is kept. When false QuickBooks replaces the whole entity, so every field you want to keep must be supplied.
         * @default true
         */
        sparse?: boolean;
        /** The VendorCredit fields in QuickBooks' native PascalCase shape. Use the get action on an existing record to see the full shape. */
        body: Record<string, unknown>;
      };
      output: {
        /** The updated VendorCredit record. */
        vendor_credit: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload a file to QuickBooks, optionally attached to a transaction or other record. */
    "quickbooks.upload_attachment": {
      input: {
        /**
         * The file name including its extension.
         * @minLength 1
         */
        file_name: string;
        /**
         * The MIME type, such as application/pdf.
         * @minLength 1
         */
        content_type: string;
        /**
         * Public URL of the file to upload as a QuickBooks attachment (maximum 100 MiB).
         * @format uri
         */
        fileUrl: string;
        /** A note stored with the attachment. */
        note?: string;
        /** The QuickBooks entity type of the linked record, such as Invoice. */
        entity_type?: string;
        /**
         * The ID of the record to attach the file to. Needs entity_type.
         * @minLength 1
         */
        entity_id?: string;
        /** Whether to include the file when the record is emailed. */
        include_on_send?: boolean;
      };
      output: {
        /** The created Attachable record. */
        attachment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Void an invoice. QuickBooks keeps the record but zeroes its amounts, so the invoice no longer counts toward balances. */
    "quickbooks.void_invoice": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The voided Invoice record. */
        invoice: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
    /** Void a payment. QuickBooks keeps the record but zeroes its amounts. */
    "quickbooks.void_payment": {
      input: {
        /**
         * The QuickBooks entity ID, as returned in the `Id` field.
         * @minLength 1
         */
        id: string;
        /**
         * The entity's current SyncToken. QuickBooks rejects an update, void or delete whose SyncToken is stale. When omitted, the current SyncToken is fetched first.
         * @minLength 1
         */
        sync_token?: string;
      };
      output: {
        /** The voided Payment record. */
        payment: {
          /** The entity ID. */
          Id: string;
          /** The version token required for updates, voids and deletes. */
          SyncToken: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
