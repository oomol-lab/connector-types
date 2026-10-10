import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one office's name, type and accounting periods, newest first. */
    "moneyforward_mcp.current_office": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
      };
      output: unknown;
    };
    /** Get Money Forward's English-to-Japanese glossary of accounting terms, for matching English wording to the Japanese names the other tools return. */
    "moneyforward_mcp.en_ja_dictionary": {
      input: Record<string, never>;
      output: unknown;
    };
    /** List the offices this API key can use in Money Forward Cloud Accounting, with each office's number, name and accounting periods. Start here to find office_code; offices without Cloud Accounting are not listed. */
    "moneyforward_mcp.get_accessible_offices": {
      input: Record<string, never>;
      output: unknown;
    };
    /** List the office's account items (勘定科目). */
    "moneyforward_mcp.get_accounts": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** When true, return only entries that are currently enabled. */
        available?: boolean;
      };
      output: unknown;
    };
    /** List the bank, card and other services connected to the office, with their account IDs. */
    "moneyforward_mcp.get_connected_accounts": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
      };
      output: unknown;
    };
    /** List the office's departments (部門). */
    "moneyforward_mcp.get_departments": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
      };
      output: unknown;
    };
    /** Get one journal entry by its ID. */
    "moneyforward_mcp.get_journal_by_id": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * Journal entry ID.
         * @minLength 1
         */
        id: string;
      };
      output: unknown;
    };
    /** List journal entries (仕訳) in a date range. Give start_date, end_date or both; results are paginated. */
    "moneyforward_mcp.get_journals": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * First transaction date to include (YYYY-MM-DD).
         * @format date
         */
        start_date?: string;
        /**
         * Last transaction date to include (YYYY-MM-DD).
         * @format date
         */
        end_date?: string;
        /**
         * Only entries that use this account item on either side.
         * @minLength 1
         */
        account_id?: string;
        /** true for realized entries only, false for unrealized only. Omit for all. */
        is_realized?: boolean;
        /** Only entries created from these connected transactions. */
        transaction_ids?: Array<string>;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Entries per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
      };
      output: unknown;
    };
    /** Get the month-by-month transition (推移表) balance sheet of a fiscal year. Zero-balance items are omitted. */
    "moneyforward_mcp.get_reports_transition_balance_sheet": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** Fiscal year to report on. Defaults to the latest fiscal year. */
        fiscal_year?: number;
        /**
         * First month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        start_month?: number;
        /**
         * Last month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        end_month?: number;
        /** Report tax-inclusive amounts. Only allowed when the office records amounts tax-exclusive. */
        include_tax?: boolean;
        /** Include sub-account breakdowns under each account. */
        with_sub_accounts?: boolean;
        /** Aggregation unit. Only monthly is supported. */
        type: "monthly";
      };
      output: unknown;
    };
    /** Get the month-by-month transition (推移表) profit and loss statement of a fiscal year. Zero-balance items are omitted. */
    "moneyforward_mcp.get_reports_transition_profit_loss": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** Fiscal year to report on. Defaults to the latest fiscal year. */
        fiscal_year?: number;
        /**
         * First month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        start_month?: number;
        /**
         * Last month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        end_month?: number;
        /** Report tax-inclusive amounts. Only allowed when the office records amounts tax-exclusive. */
        include_tax?: boolean;
        /** Include sub-account breakdowns under each account. */
        with_sub_accounts?: boolean;
        /** Aggregation unit. Only monthly is supported. */
        type: "monthly";
      };
      output: unknown;
    };
    /** Get the trial balance (残高試算表) balance sheet for a fiscal year or a custom period. Zero-balance items are omitted. */
    "moneyforward_mcp.get_reports_trial_balance_balance_sheet": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** Fiscal year to report on. Defaults to the latest fiscal year. */
        fiscal_year?: number;
        /**
         * First month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        start_month?: number;
        /**
         * Last month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        end_month?: number;
        /** Report tax-inclusive amounts. Only allowed when the office records amounts tax-exclusive. */
        include_tax?: boolean;
        /** Include sub-account breakdowns under each account. */
        with_sub_accounts?: boolean;
        /**
         * Start of a custom period (YYYY-MM-DD).
         * @format date
         */
        start_date?: string;
        /**
         * End of a custom period (YYYY-MM-DD).
         * @format date
         */
        end_date?: string;
        /** Journal kinds to include. Defaults to both. */
        journal_types?: Array<"journal_entry" | "adjusting_entry">;
      };
      output: unknown;
    };
    /** Get the trial balance (残高試算表) profit and loss statement for a fiscal year or a custom period. Zero-balance items are omitted. */
    "moneyforward_mcp.get_reports_trial_balance_profit_loss": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** Fiscal year to report on. Defaults to the latest fiscal year. */
        fiscal_year?: number;
        /**
         * First month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        start_month?: number;
        /**
         * Last month of the fiscal year to include, used with fiscal_year.
         * @minimum 1
         * @maximum 12
         */
        end_month?: number;
        /** Report tax-inclusive amounts. Only allowed when the office records amounts tax-exclusive. */
        include_tax?: boolean;
        /** Include sub-account breakdowns under each account. */
        with_sub_accounts?: boolean;
        /**
         * Start of a custom period (YYYY-MM-DD).
         * @format date
         */
        start_date?: string;
        /**
         * End of a custom period (YYYY-MM-DD).
         * @format date
         */
        end_date?: string;
        /** Journal kinds to include. Defaults to both. */
        journal_types?: Array<"journal_entry" | "adjusting_entry">;
      };
      output: unknown;
    };
    /** List the office's sub-accounts (補助科目), optionally for one account item. */
    "moneyforward_mcp.get_sub_accounts": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * Account item ID (勘定科目), from get_accounts.
         * @minLength 1
         */
        account_id?: string;
      };
      output: unknown;
    };
    /** List the office's tax categories (税区分). */
    "moneyforward_mcp.get_taxes": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** When true, return only entries that are currently enabled. */
        available?: boolean;
      };
      output: unknown;
    };
    /** Get every fiscal-year setting of an office (dates, accounting and consumption-tax methods), newest first. */
    "moneyforward_mcp.get_term_settings": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
      };
      output: unknown;
    };
    /** List the office's business partners (取引先). */
    "moneyforward_mcp.get_trade_partners": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** When true, return only entries that are currently enabled. */
        available?: boolean;
      };
      output: unknown;
    };
    /** List bank, card and other transactions (明細) collected from connected services, within a date range of at most 366 days. */
    "moneyforward_mcp.get_transactions": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * First transaction date to include (YYYY-MM-DD).
         * @format date
         */
        start_date: string;
        /**
         * Last transaction date to include (YYYY-MM-DD), at most 366 days after start_date.
         * @format date
         */
        end_date: string;
        /**
         * Only transactions of this connected service. Do not combine with connected_sub_account_id.
         * @minLength 1
         */
        connected_account_id?: string;
        /**
         * Only transactions of this account within a connected service.
         * @minLength 1
         */
        connected_sub_account_id?: string;
        /** Filter on the transaction description. */
        content?: string;
        /** How content is matched. Ignored without content. */
        content_match_type?: "exact" | "partial" | "forward" | "backward";
        /** Only transactions in these journalizing states. Omit for all. */
        journalizing_statuses?: Array<"excluded" | "none" | "registered" | "modified" | "new_voucher_attached">;
        /** Only income or only expense. Required when value_min or value_max is given. */
        side?: "INCOME" | "EXPENSE";
        /** Smallest amount in yen. Requires side. */
        value_min?: number;
        /** Largest amount in yen. Requires side. */
        value_max?: number;
        /** Sort by transaction date. Defaults to desc. */
        order?: "asc" | "desc";
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Transactions per page, 10 to 500. Defaults to 50.
         * @minimum 10
         * @maximum 500
         */
        per_page?: number;
      };
      output: unknown;
    };
    /** List the tools the Money Forward Cloud Accounting MCP server exposes right now, with their live input schemas. Use it to spot server-side changes. */
    "moneyforward_mcp.list_tools": {
      input: Record<string, never>;
      output: unknown;
    };
    /** Create a journal entry (仕訳). Writes to the accounting ledger: confirm the office and content with the user first. Never retried automatically; when data.writeOutcome is outcome_unknown, check the ledger before trying again. */
    "moneyforward_mcp.post_journals": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /** The journal entry. */
        journal: {
          /**
           * Transaction date (YYYY-MM-DD).
           * @format date
           */
          transaction_date: string;
          /** journal_entry for an ordinary entry, adjusting_entry for a year-end adjusting entry. */
          journal_type: "journal_entry" | "adjusting_entry";
          /**
           * Journal lines. Each line has a debit side, a credit side, or both.
           * @minItems 1
           * @maxItems 300
           */
          branches: Array<{
            /** Debit side of a journal line. */
            debitor?: {
              /**
               * Account item ID (勘定科目), from get_accounts.
               * @minLength 1
               */
              account_id: string;
              /**
               * Sub-account ID (補助科目), from get_sub_accounts.
               * @minLength 1
               */
              sub_account_id?: string;
              /**
               * Department ID (部門), from get_departments.
               * @minLength 1
               */
              department_id?: string;
              /**
               * Tax category ID (税区分), from get_taxes.
               * @minLength 1
               */
              tax_id?: string;
              /**
               * Business partner code (取引先コード), from get_trade_partners.
               * @minLength 1
               */
              trade_partner_code?: string;
              /** Qualified-invoice category (インボイス区分) of the line. */
              invoice_kind?: "INVOICE_KIND_NOT_TARGET" | "INVOICE_KIND_QUALIFIED" | "INVOICE_KIND_UNQUALIFIED_80" | "INVOICE_KIND_UNQUALIFIED_70" | "INVOICE_KIND_UNQUALIFIED_50" | "INVOICE_KIND_UNQUALIFIED_30" | "INVOICE_KIND_UNQUALIFIED";
              /** Amount in yen. */
              value: number;
            };
            /** Credit side of a journal line. */
            creditor?: {
              /**
               * Account item ID (勘定科目), from get_accounts.
               * @minLength 1
               */
              account_id: string;
              /**
               * Sub-account ID (補助科目), from get_sub_accounts.
               * @minLength 1
               */
              sub_account_id?: string;
              /**
               * Department ID (部門), from get_departments.
               * @minLength 1
               */
              department_id?: string;
              /**
               * Tax category ID (税区分), from get_taxes.
               * @minLength 1
               */
              tax_id?: string;
              /**
               * Business partner code (取引先コード), from get_trade_partners.
               * @minLength 1
               */
              trade_partner_code?: string;
              /** Qualified-invoice category (インボイス区分) of the line. */
              invoice_kind?: "INVOICE_KIND_NOT_TARGET" | "INVOICE_KIND_QUALIFIED" | "INVOICE_KIND_UNQUALIFIED_80" | "INVOICE_KIND_UNQUALIFIED_70" | "INVOICE_KIND_UNQUALIFIED_50" | "INVOICE_KIND_UNQUALIFIED_30" | "INVOICE_KIND_UNQUALIFIED";
              /** Amount in yen. */
              value: number;
            };
            /** Line description (摘要). */
            remark?: string;
          }>;
          /** Memo for the whole entry. */
          memo?: string;
          /** Tags to attach. */
          tags?: Array<string>;
        };
        /**
         * Name of the office you intend to write to, as the user knows it. The write is refused unless it matches the name Money Forward returns for office_code; width, spacing and 株式会社/(株)-style abbreviations are ignored.
         * @minLength 1
         */
        expected_office_name: string;
      };
      output: unknown;
    };
    /** Create business partners (取引先). Writes to the accounting ledger: confirm the office and content with the user first. Never retried automatically; when data.writeOutcome is outcome_unknown, check the ledger before trying again. */
    "moneyforward_mcp.post_trade_partners": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * Business partners to create.
         * @minItems 1
         */
        trade_partners: Array<{
          /**
           * Partner name.
           * @minLength 1
           */
          name: string;
          /** Name used for searching. */
          search_key?: string;
          /** Corporate number (法人番号). */
          corporate_number?: string;
          /** Qualified invoice issuer registration number. */
          invoice_registration_number?: string;
          /** Whether the partner is enabled. */
          available?: boolean;
        }>;
        /**
         * Name of the office you intend to write to, as the user knows it. The write is refused unless it matches the name Money Forward returns for office_code; width, spacing and 株式会社/(株)-style abbreviations are ignored.
         * @minLength 1
         */
        expected_office_name: string;
      };
      output: unknown;
    };
    /** Create a journal entry from one connected transaction (明細), booking it to the given account. Writes to the accounting ledger: confirm the office and content with the user first. Never retried automatically; when data.writeOutcome is outcome_unknown, check the ledger before trying again. */
    "moneyforward_mcp.post_transaction_journalize": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * Transaction to journalize, from get_transactions.
         * @minLength 1
         */
        transaction_id: string;
        /**
         * Account item ID (勘定科目), from get_accounts.
         * @minLength 1
         */
        account_id: string;
        /**
         * Sub-account ID (補助科目), from get_sub_accounts.
         * @minLength 1
         */
        sub_account_id?: string;
        /**
         * Department ID (部門), from get_departments.
         * @minLength 1
         */
        department_id?: string;
        /**
         * Tax category ID (税区分), from get_taxes.
         * @minLength 1
         */
        tax_id?: string;
        /**
         * Business partner code (取引先コード), from get_trade_partners.
         * @minLength 1
         */
        trade_partner_code?: string;
        /** Qualified-invoice category (インボイス区分) of the line. */
        invoice_kind?: "INVOICE_KIND_NOT_TARGET" | "INVOICE_KIND_QUALIFIED" | "INVOICE_KIND_UNQUALIFIED_80" | "INVOICE_KIND_UNQUALIFIED_70" | "INVOICE_KIND_UNQUALIFIED_50" | "INVOICE_KIND_UNQUALIFIED_30" | "INVOICE_KIND_UNQUALIFIED";
        /**
         * Journal date (YYYY-MM-DD). Defaults to the transaction's date.
         * @format date
         */
        transaction_date?: string;
        /** Line description (摘要). */
        remark?: string;
        /** Memo for the entry. */
        memo?: string;
        /** Tags to attach. */
        tags?: Array<string>;
        /**
         * Name of the office you intend to write to, as the user knows it. The write is refused unless it matches the name Money Forward returns for office_code; width, spacing and 株式会社/(株)-style abbreviations are ignored.
         * @minLength 1
         */
        expected_office_name: string;
      };
      output: unknown;
    };
    /** Add transactions (明細) to a connected service by hand. Writes to the accounting ledger: confirm the office and content with the user first. Never retried automatically; when data.writeOutcome is outcome_unknown, check the ledger before trying again. */
    "moneyforward_mcp.post_transactions": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * Connected service to add the transactions to.
         * @minLength 1
         */
        connected_account_id: string;
        /**
         * Transactions to add.
         * @minItems 1
         */
        transactions: Array<{
          /**
           * Transaction date (YYYY-MM-DD).
           * @format date
           */
          date: string;
          /**
           * Transaction description.
           * @minLength 1
           */
          content: string;
          /** INCOME or EXPENSE. */
          side: "INCOME" | "EXPENSE";
          /** Amount in yen. */
          value: number;
          /** Memo, up to about 200 characters. */
          memo?: string;
        }>;
        /**
         * Name of the office you intend to write to, as the user knows it. The write is refused unless it matches the name Money Forward returns for office_code; width, spacing and 株式会社/(株)-style abbreviations are ignored.
         * @minLength 1
         */
        expected_office_name: string;
      };
      output: unknown;
    };
    /** Replace a journal entry by its ID. Fields left out are overwritten, so send the complete entry. Writes to the accounting ledger: confirm the office and content with the user first. Never retried automatically; when data.writeOutcome is outcome_unknown, check the ledger before trying again. */
    "moneyforward_mcp.put_journals": {
      input: {
        /**
         * Office number (事業者番号, XXXX-XXXX) of the office to act on. Required on every call; there is no default office. Find it with get_accessible_offices.
         * @pattern ^[0-9]{4}-[0-9]{4}$
         */
        office_code: string;
        /**
         * Journal entry ID.
         * @minLength 1
         */
        id: string;
        /** The journal entry. */
        journal: {
          /**
           * Transaction date (YYYY-MM-DD).
           * @format date
           */
          transaction_date: string;
          /** journal_entry for an ordinary entry, adjusting_entry for a year-end adjusting entry. */
          journal_type: "journal_entry" | "adjusting_entry";
          /**
           * Journal lines. Each line has a debit side, a credit side, or both.
           * @minItems 1
           * @maxItems 300
           */
          branches: Array<{
            /** Debit side of a journal line. */
            debitor?: {
              /**
               * Account item ID (勘定科目), from get_accounts.
               * @minLength 1
               */
              account_id: string;
              /**
               * Sub-account ID (補助科目), from get_sub_accounts.
               * @minLength 1
               */
              sub_account_id?: string;
              /**
               * Department ID (部門), from get_departments.
               * @minLength 1
               */
              department_id?: string;
              /**
               * Tax category ID (税区分), from get_taxes.
               * @minLength 1
               */
              tax_id?: string;
              /**
               * Business partner code (取引先コード), from get_trade_partners.
               * @minLength 1
               */
              trade_partner_code?: string;
              /** Qualified-invoice category (インボイス区分) of the line. */
              invoice_kind?: "INVOICE_KIND_NOT_TARGET" | "INVOICE_KIND_QUALIFIED" | "INVOICE_KIND_UNQUALIFIED_80" | "INVOICE_KIND_UNQUALIFIED_70" | "INVOICE_KIND_UNQUALIFIED_50" | "INVOICE_KIND_UNQUALIFIED_30" | "INVOICE_KIND_UNQUALIFIED";
              /** Amount in yen. */
              value: number;
            };
            /** Credit side of a journal line. */
            creditor?: {
              /**
               * Account item ID (勘定科目), from get_accounts.
               * @minLength 1
               */
              account_id: string;
              /**
               * Sub-account ID (補助科目), from get_sub_accounts.
               * @minLength 1
               */
              sub_account_id?: string;
              /**
               * Department ID (部門), from get_departments.
               * @minLength 1
               */
              department_id?: string;
              /**
               * Tax category ID (税区分), from get_taxes.
               * @minLength 1
               */
              tax_id?: string;
              /**
               * Business partner code (取引先コード), from get_trade_partners.
               * @minLength 1
               */
              trade_partner_code?: string;
              /** Qualified-invoice category (インボイス区分) of the line. */
              invoice_kind?: "INVOICE_KIND_NOT_TARGET" | "INVOICE_KIND_QUALIFIED" | "INVOICE_KIND_UNQUALIFIED_80" | "INVOICE_KIND_UNQUALIFIED_70" | "INVOICE_KIND_UNQUALIFIED_50" | "INVOICE_KIND_UNQUALIFIED_30" | "INVOICE_KIND_UNQUALIFIED";
              /** Amount in yen. */
              value: number;
            };
            /** Line description (摘要). */
            remark?: string;
          }>;
          /** Memo for the whole entry. */
          memo?: string;
          /** Tags to attach. */
          tags?: Array<string>;
        };
        /**
         * Name of the office you intend to write to, as the user knows it. The write is refused unless it matches the name Money Forward returns for office_code; width, spacing and 株式会社/(株)-style abbreviations are ignored.
         * @minLength 1
         */
        expected_office_name: string;
      };
      output: unknown;
    };
  }
}
