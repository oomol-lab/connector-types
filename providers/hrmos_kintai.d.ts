import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create business partner. */
    "hrmos_kintai.create_business_partner": {
      input: {
        /** Business partner data. HRMOS validates required fields according to corporation or individual status; retain all applicable document settings. */
        data: {
          /** Record ID. */
          id?: number;
          /** Individual partner or contact family name. */
          last_name?: string;
          /** Individual partner or contact given name. */
          first_name?: string;
          /** Individual partner family name in Katakana. */
          last_name_kana?: string;
          /** Individual partner given name in Katakana. */
          first_name_kana?: string;
          /** Workplace ID. */
          lodgment_id?: number;
          /** Position of the legal entity designation: 0 none, 1 before the name, 2 after the name. */
          configuration?: number;
          /** Legal entity designation ID: 1 stock company, 2 limited company, 3 religious corporation, 4 foundation, 5 association, 6 social welfare, 7 school, 8 medical, 9 public-interest corporation, 10 NPO, 11 LLC, 12 general partnership, 13 limited partnership, 14 general association, 15 public-interest association, 16 special association, 17 general foundation, 18 public-interest foundation, 19 special foundation, 20 legal professional, 21 tax accountant, 22 labor/social security attorney, 23 judicial scrivener corporation. */
          configuration_label?: number;
          /** Consolidated billing email subject. */
          deal_report_mail_subject?: string;
          /** Consolidated billing email body. */
          deal_report_mail_body?: string;
          /** Business partner name; required fields depend on whether the partner is a corporation or an individual. */
          name?: string;
          /** Business partner name in Katakana. */
          name_kana?: string;
          /** Business partner number. */
          partner_number?: string;
          /** Qualified invoice issuer registration number. */
          invoice_code?: string;
          /** Postal code. */
          postal_code?: string;
          /** Prefecture ID. */
          prefectural_id?: number;
          /** City, district and street address. */
          city?: string;
          /** Building name. */
          building?: string;
          /** Department. */
          branch?: string;
          /** Job title. */
          appointment?: string;
          /** Billing or payment contact person. */
          person?: string;
          /** Telephone number. */
          tel?: string;
          /** Email address. */
          email?: string;
          /** CC email address. */
          cc_email?: string;
          /** Daily total working-time rounding: 0 none, 1 up, 2 down. */
          fractional_total?: number;
          /** Rounding interval in minutes for daily total working time. */
          fractional_minute_total?: number;
          /** Clock-in rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_start_at?: number;
          /** Clock-in rounding interval in minutes. */
          fractional_minute_start_at?: number;
          /** Clock-out rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_end_at?: number;
          /** Clock-out rounding interval in minutes. */
          fractional_minute_end_at?: number;
          /** Whether to create sales invoices: 0 no, 1 yes. */
          invoice_create?: number;
          /** Settlement rounding mode. */
          fractional?: number;
          /** Settlement rounding interval in minutes. */
          fractional_minute?: number;
          /** Billing cutoff day. */
          cutoff_date?: number;
          /** Payment cycle: 0 current month, 1 next month, 2 two months later, 3 three months later. */
          pay_cycle?: number;
          /** Payment day; 31 means month-end. */
          pay_date?: number;
          /** Payment-notice attachments: purchase, work or expense. */
          deal_document_purchases?: Array<"purchase" | "work" | "expense">;
          /** Payment notice tax treatment: included or excluded. */
          purchase_tax_type?: "included" | "excluded";
          /** Payment notice withholding tax flag. */
          purchase_withholding?: boolean;
          /** Payment notice subject. */
          purchase_subject?: string;
          /** Payment notice show year and month. */
          purchase_show_year_month?: boolean;
          /** Payment notice show working time. */
          purchase_show_work_time?: boolean;
          /** Payment notice monthly base-work item label. */
          purchase_main?: string;
          /** Payment notice monthly deduction item label. */
          purchase_deduction?: string;
          /** Payment notice monthly excess-hours item label. */
          purchase_surplus?: string;
          /** Payment notice show employee name on monthly items. */
          purchase_username_view?: boolean;
          /** Payment notice single monthly rate item label. */
          purchase_monthly_only_one?: string;
          /** Payment notice show employee name on single monthly rate items. */
          purchase_monthly_only_one_username_view?: boolean;
          /** Payment notice regular hourly item label. */
          purchase_hourly_main?: string;
          /** Payment notice regular late-night item label. */
          purchase_late_night?: string;
          /** Payment notice overtime item label. */
          purchase_overtime?: string;
          /** Payment notice late-night overtime item label. */
          purchase_overtime_late_night?: string;
          /** Payment notice overtime beyond 60 hours item label. */
          purchase_over_60_hour?: string;
          /** Payment notice late-night overtime beyond 60 hours item label. */
          purchase_over_60_hour_late_night?: string;
          /** Payment notice non-statutory holiday item label. */
          purchase_holiday_1?: string;
          /** Payment notice non-statutory holiday late-night item label. */
          purchase_holiday_1_late_night?: string;
          /** Payment notice statutory holiday item label. */
          purchase_holiday_2?: string;
          /** Payment notice statutory holiday late-night item label. */
          purchase_holiday_2_late_night?: string;
          /** Payment notice show employee name on hourly items. */
          purchase_hourly_username_view?: boolean;
          /** Payment notice single hourly rate item label. */
          purchase_hourly_only_one?: string;
          /** Payment notice show employee name on single hourly rate items. */
          purchase_hourly_only_one_username_view?: boolean;
          /** Document bank account for payment. */
          bank_account?: string;
          /** Payment notice notes. */
          purchase_notes?: string;
          /** Payment notice memo. */
          purchase_memo?: string;
          /** Payment notice email subject. */
          purchase_mail_subject?: string;
          /** Payment notice email body. */
          purchase_mail_body?: string;
          /** Sales-invoice attachments: invoice, work or expense. */
          deal_document_invoices?: Array<"invoice" | "work" | "expense">;
          /** Consolidated billing attachments: invoice, work or expense. */
          deal_document_totals?: Array<"invoice" | "work" | "expense">;
          /** Document subject. */
          subject?: string;
          /** Document show year and month. */
          show_year_month?: boolean;
          /** Document show working time. */
          show_work_time?: boolean;
          /** Sales invoice monthly base-work item label. */
          invoice_main?: string;
          /** Sales invoice monthly deduction item label. */
          invoice_deduction?: string;
          /** Sales invoice monthly excess-hours item label. */
          invoice_surplus?: string;
          /** Sales invoice show employee name on monthly items. */
          invoice_username_view?: boolean;
          /** Sales invoice single monthly rate item label. */
          invoice_monthly_only_one?: string;
          /** Sales invoice show employee name on single monthly rate items. */
          invoice_monthly_only_one_username_view?: boolean;
          /** Sales invoice regular hourly item label. */
          invoice_hourly_main?: string;
          /** Sales invoice regular late-night item label. */
          invoice_late_night?: string;
          /** Sales invoice overtime item label. */
          invoice_overtime?: string;
          /** Sales invoice late-night overtime item label. */
          invoice_overtime_late_night?: string;
          /** Sales invoice overtime beyond 60 hours item label. */
          invoice_over_60_hour?: string;
          /** Sales invoice late-night overtime beyond 60 hours item label. */
          invoice_over_60_hour_late_night?: string;
          /** Sales invoice non-statutory holiday item label. */
          invoice_holiday_1?: string;
          /** Sales invoice non-statutory holiday late-night item label. */
          invoice_holiday_1_late_night?: string;
          /** Sales invoice statutory holiday item label. */
          invoice_holiday_2?: string;
          /** Sales invoice statutory holiday late-night item label. */
          invoice_holiday_2_late_night?: string;
          /** Sales invoice show employee name on hourly items. */
          invoice_hourly_username_view?: boolean;
          /** Sales invoice single hourly rate item label. */
          invoice_hourly_only_one?: string;
          /** Sales invoice show employee name on single hourly rate items. */
          invoice_hourly_only_one_username_view?: boolean;
          /** Sales invoice bank account for payment. */
          invoice_bank_account?: string;
          /** Sales invoice notes. */
          invoice_notes?: string;
          /** Sales invoice memo. */
          invoice_memo?: string;
          /** Document email subject. */
          mail_subject?: string;
          /** Document email body. */
          mail_body?: string;
          /** Document to issue to the supplier. */
          purchase_issue_document?: "purchase" | "purchase_invoice";
          /** Purchase-invoice attachments: purchase_invoice, work or expense. */
          deal_document_purchase_invoices?: Array<"purchase_invoice" | "work" | "expense">;
          /** Purchase invoice tax treatment: included or excluded. */
          purchase_invoice_tax_type?: "included" | "excluded";
          /** Purchase invoice withholding tax flag. */
          purchase_invoice_withholding?: boolean;
          /** Purchase invoice subject. */
          purchase_invoice_subject?: string;
          /** Purchase invoice show year and month. */
          purchase_invoice_show_year_month?: boolean;
          /** Purchase invoice show working time. */
          purchase_invoice_show_work_time?: boolean;
          /** Purchase invoice monthly base-work item label. */
          purchase_invoice_main?: string;
          /** Purchase invoice monthly deduction item label. */
          purchase_invoice_deduction?: string;
          /** Purchase invoice monthly excess-hours item label. */
          purchase_invoice_surplus?: string;
          /** Purchase invoice show employee name on monthly items. */
          purchase_invoice_username_view?: boolean;
          /** Purchase invoice single monthly rate item label. */
          purchase_invoice_monthly_only_one?: string;
          /** Purchase invoice show employee name on single monthly rate items. */
          purchase_invoice_monthly_only_one_username_view?: boolean;
          /** Purchase invoice regular hourly item label. */
          purchase_invoice_hourly_main?: string;
          /** Purchase invoice regular late-night item label. */
          purchase_invoice_late_night?: string;
          /** Purchase invoice overtime item label. */
          purchase_invoice_overtime?: string;
          /** Purchase invoice late-night overtime item label. */
          purchase_invoice_overtime_late_night?: string;
          /** Purchase invoice overtime beyond 60 hours item label. */
          purchase_invoice_over_60_hour?: string;
          /** Purchase invoice late-night overtime beyond 60 hours item label. */
          purchase_invoice_over_60_hour_late_night?: string;
          /** Purchase invoice non-statutory holiday item label. */
          purchase_invoice_holiday_1?: string;
          /** Purchase invoice non-statutory holiday late-night item label. */
          purchase_invoice_holiday_1_late_night?: string;
          /** Purchase invoice statutory holiday item label. */
          purchase_invoice_holiday_2?: string;
          /** Purchase invoice statutory holiday late-night item label. */
          purchase_invoice_holiday_2_late_night?: string;
          /** Purchase invoice show employee name on hourly items. */
          purchase_invoice_hourly_username_view?: boolean;
          /** Purchase invoice single hourly rate item label. */
          purchase_invoice_hourly_only_one?: string;
          /** Purchase invoice show employee name on single hourly rate items. */
          purchase_invoice_hourly_only_one_username_view?: boolean;
          /** Purchase invoice bank account for payment. */
          purchase_invoice_bank_account?: string;
          /** Purchase invoice notes. */
          purchase_invoice_notes?: string;
          /** Purchase invoice memo. */
          purchase_invoice_memo?: string;
          /** Purchase invoice email subject. */
          purchase_invoice_mail_subject?: string;
          /** Purchase invoice email body. */
          purchase_invoice_mail_body?: string;
          /** Trading status: 0 active, 1 trading ended. */
          close_out?: number;
          /** Notes. */
          notes?: string;
        };
      };
      output: {
        /** Returned business partner with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Create contract. */
    "hrmos_kintai.create_contract": {
      input: {
        /** Contract data, including rates, settlement, supplier documents and approvers. */
        data: {
          /** Record ID. */
          id?: number;
          /** Business partner ID. */
          business_partner_id?: number;
          /** Employee ID. */
          user_id?: number;
          /** Contract number. */
          contract_number?: string;
          /** Contract category: contract, delegation, semi_delegation, regular_use_type_temping, registration_type_temping, introduction_plan_temping, maintenance or other. */
          contract_category?: string;
          /** Business partner number. */
          partner_number?: string;
          /** Postal code. */
          postal_code?: string;
          /** Prefecture ID. */
          prefectural_id?: number;
          /** City, district and street address. */
          city?: string;
          /** Building name. */
          building?: string;
          /** Department. */
          branch?: string;
          /** Job title. */
          appointment?: string;
          /** Billing or payment contact person. */
          person?: string;
          /** Contract notes. */
          contract_notes?: string;
          /**
           * Contract start date.
           * @format date
           */
          start_at?: string;
          /**
           * Contract end date.
           * @format date
           */
          end_at?: string;
          /** Work report mode: 0 daily arrival/departure times, 1 monthly working hours only. */
          work_type?: number;
          /** Rate type: 0 hourly with adjustments, 10 single hourly rate, 1 monthly with adjustments, 11 single monthly rate. */
          pay_type?: number;
          /** Regular hourly rate. */
          hourly_price?: number | null;
          /** Monthly rate. */
          monthly_price?: number;
          /** Regular late-night hourly rate. */
          late_night_price?: number | null;
          /** Overtime hourly rate. */
          overtime_price?: number | null;
          /** Late-night overtime hourly rate. */
          overtime_late_night_price?: number | null;
          /** Hourly rate for overtime beyond 60 hours. */
          over_60_hour_price?: number | null;
          /** Late-night hourly rate for overtime beyond 60 hours. */
          over_60_hour_late_night_price?: number | null;
          /** Non-statutory holiday hourly rate. */
          holiday_1_price?: number | null;
          /** Non-statutory holiday late-night hourly rate. */
          holiday_1_late_night_price?: number | null;
          /** Statutory holiday hourly rate. */
          holiday_2_price?: number | null;
          /** Statutory holiday late-night hourly rate. */
          holiday_2_late_night_price?: number | null;
          /** Lower bound of base working hours. */
          min_hour?: number;
          /** Upper bound of base working hours. */
          max_hour?: number;
          /** Excess-hours rate. */
          surplus?: number;
          /** Amount used to round the excess-hours rate. */
          surplus_fractional_price?: number;
          /** Excess-rate rounding: 1 up, 2 down, 3 nearest. */
          surplus_fractional?: number;
          /** Deduction amount or rate in the contract settlement settings. */
          deduction?: number;
          /** Amount used to round deductions. */
          deduction_fractional_price?: number;
          /** Deduction rounding: 1 up, 2 down, 3 nearest. */
          deduction_fractional?: number;
          /** Billing cutoff day. */
          cutoff_date?: number;
          /** Payment cycle: 0 current month, 1 next month, 2 two months later, 3 three months later. */
          pay_cycle?: number;
          /** Payment day; 31 means month-end. */
          pay_date?: number;
          /** Daily total working-time rounding: 0 none, 2 down. */
          fractional_total?: number;
          /** Rounding interval in minutes for daily total working time. */
          fractional_minute_total?: number;
          /** Clock-in rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_start_at?: number;
          /** Clock-in rounding interval in minutes. */
          fractional_minute_start_at?: number;
          /** Clock-out rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_end_at?: number;
          /** Clock-out rounding interval in minutes. */
          fractional_minute_end_at?: number;
          /** Contract settlement rounding mode. */
          fractional?: number;
          /** Contract settlement rounding interval in minutes. */
          fractional_minute?: number;
          /** Document subject. */
          subject?: string;
          /** Document show year and month. */
          show_year_month?: boolean;
          /** Document show working time. */
          show_work_time?: boolean;
          /** Document memo. */
          memo?: string;
          /** Supplier payment-notice settings. */
          deal_purchase?: {
            /** Record ID. */
            id?: number;
            /** Business partner ID. */
            business_partner_id?: number;
            /** Business partner number. */
            partner_number?: string;
            /** Postal code. */
            postal_code?: string;
            /** Prefecture ID. */
            prefectural_id?: number;
            /** City, district and street address. */
            city?: string;
            /** Building name. */
            building?: string;
            /** Department. */
            branch?: string;
            /** Job title. */
            appointment?: string;
            /** Billing or payment contact person. */
            person?: string;
            /** Rate type: 0 hourly with adjustments, 10 single hourly rate, 1 monthly with adjustments, 11 single monthly rate. */
            pay_type?: number;
            /** Monthly rate. */
            monthly_price?: number;
            /** Lower bound of base working hours. */
            min_hour?: number;
            /** Upper bound of base working hours. */
            max_hour?: number;
            /** Excess-hours rate. */
            surplus?: number;
            /** Amount used to round the excess-hours rate. */
            surplus_fractional_price?: number;
            /** Excess-rate rounding: 1 up, 2 down, 3 nearest. */
            surplus_fractional?: number;
            /** Deduction amount or rate in the contract settlement settings. */
            deduction?: number;
            /** Amount used to round deductions. */
            deduction_fractional_price?: number;
            /** Deduction rounding: 1 up, 2 down, 3 nearest. */
            deduction_fractional?: number;
            /** Daily total working-time rounding: 0 none, 1 up, 2 down. */
            fractional_total?: number;
            /** Rounding interval in minutes for daily total working time. */
            fractional_minute_total?: number;
            /** Clock-in rounding mode. 0 none, 1 up, 2 down. */
            fractional_start_at?: number;
            /** Clock-in rounding interval in minutes. */
            fractional_minute_start_at?: number;
            /** Clock-out rounding mode. 0 none, 1 up, 2 down. */
            fractional_end_at?: number;
            /** Clock-out rounding interval in minutes. */
            fractional_minute_end_at?: number;
            /** Settlement rounding mode. */
            fractional?: number;
            /** Settlement rounding interval in minutes. */
            fractional_minute?: number;
            /** Document subject. */
            subject?: string;
            /** Document show year and month. */
            show_year_month?: boolean;
            /** Document show working time. */
            show_work_time?: boolean;
            /** Document memo. */
            memo?: string;
            /** Regular hourly rate. */
            hourly_price?: number;
            /** Regular late-night hourly rate. */
            late_night_price?: number;
            /** Overtime hourly rate. */
            overtime_price?: number;
            /** Late-night overtime hourly rate. */
            overtime_late_night_price?: number;
            /** Hourly rate for overtime beyond 60 hours. */
            over_60_hour_price?: number;
            /** Late-night hourly rate for overtime beyond 60 hours. */
            over_60_hour_late_night_price?: number;
            /** Non-statutory holiday hourly rate. */
            holiday_1_price?: number;
            /** Non-statutory holiday late-night hourly rate. */
            holiday_1_late_night_price?: number;
            /** Statutory holiday hourly rate. */
            holiday_2_price?: number;
            /** Statutory holiday late-night hourly rate. */
            holiday_2_late_night_price?: number;
          };
          /** Supplier purchase-invoice settings. */
          deal_purchase_invoice?: {
            /** Record ID. */
            id?: number;
            /** Business partner ID. */
            business_partner_id?: number;
            /** Business partner number. */
            partner_number?: string;
            /** Postal code. */
            postal_code?: string;
            /** Prefecture ID. */
            prefectural_id?: number;
            /** City, district and street address. */
            city?: string;
            /** Building name. */
            building?: string;
            /** Department. */
            branch?: string;
            /** Job title. */
            appointment?: string;
            /** Billing or payment contact person. */
            person?: string;
            /** Rate type: 0 hourly with adjustments, 10 single hourly rate, 1 monthly with adjustments, 11 single monthly rate. */
            pay_type?: number;
            /** Monthly rate. */
            monthly_price?: number;
            /** Lower bound of base working hours. */
            min_hour?: number;
            /** Upper bound of base working hours. */
            max_hour?: number;
            /** Excess-hours rate. */
            surplus?: number;
            /** Amount used to round the excess-hours rate. */
            surplus_fractional_price?: number;
            /** Excess-rate rounding: 1 up, 2 down, 3 nearest. */
            surplus_fractional?: number;
            /** Deduction amount or rate in the contract settlement settings. */
            deduction?: number;
            /** Amount used to round deductions. */
            deduction_fractional_price?: number;
            /** Deduction rounding: 1 up, 2 down, 3 nearest. */
            deduction_fractional?: number;
            /** Daily total working-time rounding: 0 none, 1 up, 2 down. */
            fractional_total?: number;
            /** Rounding interval in minutes for daily total working time. */
            fractional_minute_total?: number;
            /** Clock-in rounding mode. 0 none, 1 up, 2 down. */
            fractional_start_at?: number;
            /** Clock-in rounding interval in minutes. */
            fractional_minute_start_at?: number;
            /** Clock-out rounding mode. 0 none, 1 up, 2 down. */
            fractional_end_at?: number;
            /** Clock-out rounding interval in minutes. */
            fractional_minute_end_at?: number;
            /** Settlement rounding mode. */
            fractional?: number;
            /** Settlement rounding interval in minutes. */
            fractional_minute?: number;
            /** Document subject. */
            subject?: string;
            /** Document show year and month. */
            show_year_month?: boolean;
            /** Document show working time. */
            show_work_time?: boolean;
            /** Document memo. */
            memo?: string;
            /** Regular hourly rate. */
            hourly_price?: number;
            /** Regular late-night hourly rate. */
            late_night_price?: number;
            /** Overtime hourly rate. */
            overtime_price?: number;
            /** Late-night overtime hourly rate. */
            overtime_late_night_price?: number;
            /** Hourly rate for overtime beyond 60 hours. */
            over_60_hour_price?: number;
            /** Late-night hourly rate for overtime beyond 60 hours. */
            over_60_hour_late_night_price?: number;
            /** Non-statutory holiday hourly rate. */
            holiday_1_price?: number;
            /** Non-statutory holiday late-night hourly rate. */
            holiday_1_late_night_price?: number;
            /** Statutory holiday hourly rate. */
            holiday_2_price?: number;
            /** Statutory holiday late-night hourly rate. */
            holiday_2_late_night_price?: number;
          };
          /** Contract approver assignments. */
          deal_contract_user_approvers?: Array<{
            /** Record ID. */
            id?: number;
            /** Contract ID. */
            deal_contract_id?: number;
            /** Employee ID. */
            user_id?: number;
            /** Whether this contract approver is enabled. */
            deal_enabled?: boolean;
          }>;
        };
      };
      output: {
        /** Returned contract with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Create business partner approval contacts. */
    "hrmos_kintai.create_partner_contact": {
      input: {
        /** Business partner ID. */
        partnerId: number;
        /** Business partner approval contact data. */
        data: {
          /** Record ID. */
          id?: number;
          /** Individual partner or contact given name. */
          first_name: string;
          /** Individual partner or contact family name. */
          last_name: string;
          /** Email address. */
          email: string;
          /** Department. */
          branch?: string;
          /** Job title. */
          appointment?: string;
        };
      };
      output: {
        /** Returned partner contact with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Record a clock-in, clock-out or break punch, with optional location and night-shift information. */
    "hrmos_kintai.create_stamp": {
      input: {
        /** Input for create_stamp. */
        data: {
          /** Employee ID. */
          user_id: number;
          /** Punch type: 1 clock-in, 2 clock-out, 7 break start, 8 break end. */
          stamp_type: 1 | 2 | 7 | 8;
          /** Punch timestamp in the HRMOS-supported date and time representation. */
          datetime?: string;
          /** Punch latitude. */
          latitude?: number;
          /** Punch longitude. */
          longitude?: number;
          /** Punch location address. */
          address?: string;
          /** Count this punch toward the previous working day when true. */
          night_shift?: boolean;
        };
      };
      output: {
        /** HRMOS record with all upstream fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Delete business partner. */
    "hrmos_kintai.delete_business_partner": {
      input: {
        /** Business partner ID. */
        partnerId: number;
      };
      output: {
        /** Returned business partner with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Delete contract. */
    "hrmos_kintai.delete_contract": {
      input: {
        /** Contract ID. */
        contractId: number;
      };
      output: {
        /** Returned contract with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Delete business partner approval contacts. */
    "hrmos_kintai.delete_partner_contact": {
      input: {
        /** Business partner ID. */
        partnerId: number;
        /** Partner contact ID. */
        contactId: number;
      };
      output: {
        /** Returned partner contact with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Export dependent declaration as a downloadable CSV file for the specified year. */
    "hrmos_kintai.export_dependent_declaration": {
      input: {
        /**
         * Four-digit target year.
         * @minimum 1000
         * @maximum 9999
         */
        year: number;
      };
      output: {
        /** Downloadable CSV artifact. */
        file: {
          /** CSV file name. */
          name: string;
          /** Original CSV media type and character encoding when supplied. */
          mimeType: string;
          /** File-transit download URL. */
          downloadUrl: string;
          /** File size in bytes. */
          sizeBytes: number;
        };
      };
    };
    /** Export housing loan declaration as a downloadable CSV file for the specified year. */
    "hrmos_kintai.export_housing_loan_declaration": {
      input: {
        /**
         * Four-digit target year.
         * @minimum 1000
         * @maximum 9999
         */
        year: number;
      };
      output: {
        /** Downloadable CSV artifact. */
        file: {
          /** CSV file name. */
          name: string;
          /** Original CSV media type and character encoding when supplied. */
          mimeType: string;
          /** File-transit download URL. */
          downloadUrl: string;
          /** File size in bytes. */
          sizeBytes: number;
        };
      };
    };
    /** Export income deduction declaration as a downloadable CSV file for the specified year. */
    "hrmos_kintai.export_income_deduction_declaration": {
      input: {
        /**
         * Four-digit target year.
         * @minimum 1000
         * @maximum 9999
         */
        year: number;
      };
      output: {
        /** Downloadable CSV artifact. */
        file: {
          /** CSV file name. */
          name: string;
          /** Original CSV media type and character encoding when supplied. */
          mimeType: string;
          /** File-transit download URL. */
          downloadUrl: string;
          /** File size in bytes. */
          sizeBytes: number;
        };
      };
    };
    /** Export insurance deduction declaration as a downloadable CSV file for the specified year. */
    "hrmos_kintai.export_insurance_deduction_declaration": {
      input: {
        /**
         * Four-digit target year.
         * @minimum 1000
         * @maximum 9999
         */
        year: number;
      };
      output: {
        /** Downloadable CSV artifact. */
        file: {
          /** CSV file name. */
          name: string;
          /** Original CSV media type and character encoding when supplied. */
          mimeType: string;
          /** File-transit download URL. */
          downloadUrl: string;
          /** File size in bytes. */
          sizeBytes: number;
        };
      };
    };
    /** Export next year dependent declaration as a downloadable CSV file for the specified year. */
    "hrmos_kintai.export_next_year_dependent_declaration": {
      input: {
        /**
         * Four-digit target year.
         * @minimum 1000
         * @maximum 9999
         */
        year: number;
      };
      output: {
        /** Downloadable CSV artifact. */
        file: {
          /** CSV file name. */
          name: string;
          /** Original CSV media type and character encoding when supplied. */
          mimeType: string;
          /** File-transit download URL. */
          downloadUrl: string;
          /** File size in bytes. */
          sizeBytes: number;
        };
      };
    };
    /** Export previous employment withholding as a downloadable CSV file for the specified year. */
    "hrmos_kintai.export_previous_employment_withholding": {
      input: {
        /**
         * Four-digit target year.
         * @minimum 1000
         * @maximum 9999
         */
        year: number;
      };
      output: {
        /** Downloadable CSV artifact. */
        file: {
          /** CSV file name. */
          name: string;
          /** Original CSV media type and character encoding when supplied. */
          mimeType: string;
          /** File-transit download URL. */
          downloadUrl: string;
          /** File size in bytes. */
          sizeBytes: number;
        };
      };
    };
    /** Get field definitions for monthly report. */
    "hrmos_kintai.get_monthly_report_definitions": {
      input: Record<string, never>;
      output: {
        /** Available report field definitions. */
        items: Array<{
          /** Report field key. */
          key?: string;
          /** Report field label. */
          name?: string;
          /** Fixed or company-defined category. */
          item_type?: string;
          /** Value type: string, number, days or time. */
          value_type?: string;
          /** Whether the report field is active. */
          active?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get field definitions for time band report. */
    "hrmos_kintai.get_time_band_report_definitions": {
      input: Record<string, never>;
      output: {
        /** Available report field definitions. */
        items: Array<{
          /** Report field key. */
          key?: string;
          /** Report field label. */
          name?: string;
          /** Fixed or company-defined category. */
          item_type?: string;
          /** Value type: string, number, days or time. */
          value_type?: string;
          /** Whether the report field is active. */
          active?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List business partners. */
    "hrmos_kintai.list_business_partners": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /** Filter by business partner ID. */
        partnerId?: number;
        /** Trading status: 0 active, 1 trading ended. */
        closeOut?: 0 | 1;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<Record<string, unknown>>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List contracts. */
    "hrmos_kintai.list_contracts": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /** Filter contracts by employee ID. */
        employeeId?: number;
        /** Filter contracts by business partner ID. */
        partnerId?: number;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<Record<string, unknown>>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List attendance records for all employees on a specified day. */
    "hrmos_kintai.list_daily_attendance": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target date in YYYY-MM-DD format.
         * @format date
         */
        day: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Employee ID. */
          user_id?: number | null;
          /** Employee number. */
          number?: string | null;
          /** Employee full name. */
          full_name?: string | null;
          /** Attendance month as returned by HRMOS. */
          month?: string | null;
          /** Attendance date. */
          day?: string | null;
          /** Actual working duration in the HRMOS representation. */
          actual_working_hours?: string | null;
          /** Total working duration in the HRMOS representation. */
          total_working_hours?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List daily attendance time differences. */
    "hrmos_kintai.list_daily_attendance_differences": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target attendance date.
         * @format date
         */
        day: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** First source start time. */
          first_start_at?: string | null;
          /** Second source start time. */
          second_start_at?: string | null;
          /** Start time difference. */
          start_at_diff?: string | null;
          /** End time difference. */
          end_at_diff?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List clock-in, clock-out and break punch history for a specified day. */
    "hrmos_kintai.list_daily_stamp_logs": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target date in YYYY-MM-DD format.
         * @format date
         */
        day: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Employee ID. */
          user_id?: number | null;
          /** Punch type: 1 clock-in, 2 clock-out, 7 break start, 8 break end. */
          stamp_type?: number | null;
          /** Record creation timestamp. */
          created_at?: string | null;
          /** Workplace ID. */
          lodgment_id?: number | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List daily working-time totals for custom time bands within the requested month. */
    "hrmos_kintai.list_daily_time_band_totals": {
      input: Record<string, unknown>;
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<Record<string, unknown>>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List departments in the connected company. */
    "hrmos_kintai.list_departments": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Record ID. */
          id?: number | null;
          /** Display name. */
          name?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List an employee's leave grants, usage, adjustments and remaining balances for a leave setting and year. */
    "hrmos_kintai.list_employee_leave_history": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /** Leave setting ID returned by list_leave_types. */
        leaveTypeId: number;
        /** HRMOS employee ID. */
        employeeId: number;
        /** Target leave year. */
        year: number;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Employee ID. */
          user_id?: number | null;
          /** Leave history date. */
          date?: string | null;
          /** Remaining leave days. */
          remaining_days?: number | null;
          /** Remaining leave hours. */
          remaining_hours?: number | null;
          /** Leave days taken. */
          taken_days?: number | null;
          /** Leave days granted. */
          received_days?: number | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List an employee's punch history, optionally filtered by punch type and update time. */
    "hrmos_kintai.list_employee_stamp_logs": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /** HRMOS employee ID. */
        employeeId: number;
        /** Punch type: 1 clock-in, 2 clock-out, 7 break start, 8 break end. */
        stampType?: 1 | 2 | 7 | 8;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Employee ID. */
          user_id?: number | null;
          /** Punch type: 1 clock-in, 2 clock-out, 7 break start, 8 break end. */
          stamp_type?: number | null;
          /** Record creation timestamp. */
          created_at?: string | null;
          /** Workplace ID. */
          lodgment_id?: number | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List employees in the connected HRMOS Kintai company. */
    "hrmos_kintai.list_employees": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Record ID. */
          id?: number | null;
          /** Employee number. */
          number?: string | null;
          /** Employee given name. */
          first_name?: string | null;
          /** Employee family name. */
          last_name?: string | null;
          /** Department ID. */
          department_id?: number | null;
          /** Employment type ID. */
          employment_id?: number | null;
          /** Workplace ID. */
          lodgment_id?: number | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List employment types in the connected company. */
    "hrmos_kintai.list_employment_types": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Record ID. */
          id?: number | null;
          /** Display name. */
          name?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List leave settings used to query employee leave balances and history. */
    "hrmos_kintai.list_leave_types": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Record ID. */
          id?: number | null;
          /** Display name. */
          name?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List daily attendance records for a month, respecting each employee's cutoff date. Optionally filter by employee ID. */
    "hrmos_kintai.list_monthly_attendance": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target month in YYYY-MM format. Attendance detail respects employee cutoff dates.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
        /** HRMOS employee ID. */
        employeeId?: number;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Employee ID. */
          user_id?: number | null;
          /** Employee number. */
          number?: string | null;
          /** Employee full name. */
          full_name?: string | null;
          /** Attendance month as returned by HRMOS. */
          month?: string | null;
          /** Attendance date. */
          day?: string | null;
          /** Actual working duration in the HRMOS representation. */
          actual_working_hours?: string | null;
          /** Total working duration in the HRMOS representation. */
          total_working_hours?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List monthly attendance time differences. */
    "hrmos_kintai.list_monthly_attendance_differences": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target month in YYYY-MM format, respecting employee cutoff dates.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
        /** HRMOS employee ID. */
        employeeId?: number;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** First source start time. */
          first_start_at?: string | null;
          /** Second source start time. */
          second_start_at?: string | null;
          /** Start time difference. */
          start_at_diff?: string | null;
          /** End time difference. */
          end_at_diff?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List monthly report values including company-defined fields. */
    "hrmos_kintai.list_monthly_report_values": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target month in YYYY-MM format, respecting employee cutoff dates.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
        /**
         * Employee numbers to include.
         * @minItems 1
         */
        employeeNumbers?: Array<string>;
        /**
         * Month-closing statuses: 0 not submitted, 1 ready, 2 pending, 3 approved, 99 forcibly approved.
         * @minItems 1
         */
        statuses?: Array<0 | 1 | 2 | 3 | 99>;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<Record<string, unknown>>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List monthly attendance summaries, optionally filtered by employee numbers and month-closing statuses. */
    "hrmos_kintai.list_monthly_reports": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target month in YYYY-MM format. Attendance detail respects employee cutoff dates.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
        /**
         * Employee numbers to include; omit to include all employees.
         * @minItems 1
         */
        employeeNumbers?: Array<string>;
        /**
         * Month-closing statuses: 0 not submitted, 1 ready, 2 pending, 3 approved, 99 forcibly approved.
         * @minItems 1
         */
        statuses?: Array<0 | 1 | 2 | 3 | 99>;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Employee ID. */
          user_id?: number | null;
          /** Employee number. */
          number?: string | null;
          /** Attendance month as returned by HRMOS. */
          month?: string | null;
          /** Actual working duration in the HRMOS representation. */
          actual_working_hours?: string | null;
          /** Total working duration in the HRMOS representation. */
          total_working_hours?: string | null;
          /** Overtime duration in the HRMOS representation. */
          over_work_time?: string | null;
          /** Remaining paid leave days as reported in the monthly summary. */
          remain_paid_holidays?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List monthly working-time totals for custom time bands within the requested month. */
    "hrmos_kintai.list_monthly_time_band_totals": {
      input: Record<string, unknown>;
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<Record<string, unknown>>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List business partner approval contacts. */
    "hrmos_kintai.list_partner_contacts": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /** Business partner ID. */
        partnerId: number;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<Record<string, unknown>>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List Japanese prefectures for workplace and partner address selection. */
    "hrmos_kintai.list_prefectures": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Record ID. */
          id?: number | null;
          /** Display name. */
          name?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List time band report values including company-defined fields. */
    "hrmos_kintai.list_time_band_report_values": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /**
         * Target month in YYYY-MM format, respecting employee cutoff dates.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<Record<string, unknown>>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List work classifications and their configured working hours. */
    "hrmos_kintai.list_work_segments": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Work classification title. */
          title?: string | null;
          /** Work classification display title. */
          display_title?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** List workplaces, optionally filtered by prefecture. */
    "hrmos_kintai.list_workplaces": {
      input: {
        /**
         * Maximum records per page (1–100); defaults to 25.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Include records updated at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Include records updated at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /** Filter workplaces by prefecture ID. */
        prefectureId?: number;
      };
      output: {
        /** Records with original HRMOS field names and additional upstream fields preserved. */
        items: Array<{
          /** Record ID. */
          id?: number | null;
          /** Display name. */
          name?: string | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Total records reported by HRMOS, or null when unavailable. */
        totalCount: number | null;
        /** Total pages reported by HRMOS, or null when unavailable. */
        totalPages: number | null;
        /** Next page number, or null when there is no known next page. */
        nextPage: number | null;
        /** Raw X-Use-Hour-Holiday value for leave history, or null when absent. */
        useHourHoliday: string | null;
      };
    };
    /** Update clock-in, clock-out and break times on an existing daily attendance record. */
    "hrmos_kintai.update_attendance": {
      input: {
        /** Input for update_attendance. */
        data: {
          /** Employee ID. */
          user_id: number;
          /**
           * Attendance date; the daily record must already exist.
           * @format date
           */
          day: string;
          /** Clock-in time. */
          start_at?: string;
          /** Day offset for start: -1 previous day, 0 same day, 1 next day. */
          next_day_start?: -1 | 0 | 1;
          /** Clock-out time. */
          end_at?: string;
          /** Day offset for end: -1 previous day, 0 same day, 1 next day. */
          next_day_end?: -1 | 0 | 1;
          /** Break 1 start time. */
          break_1_start_at?: string;
          /** Day offset for break 1 start: -1 previous day, 0 same day, 1 next day. */
          next_day_break_1_start?: -1 | 0 | 1;
          /** Break 1 end time. */
          break_1_end_at?: string;
          /** Day offset for break 1 end: -1 previous day, 0 same day, 1 next day. */
          next_day_break_1_end?: -1 | 0 | 1;
          /** Break 2 start time. */
          break_2_start_at?: string;
          /** Day offset for break 2 start: -1 previous day, 0 same day, 1 next day. */
          next_day_break_2_start?: -1 | 0 | 1;
          /** Break 2 end time. */
          break_2_end_at?: string;
          /** Day offset for break 2 end: -1 previous day, 0 same day, 1 next day. */
          next_day_break_2_end?: -1 | 0 | 1;
        };
      };
      output: {
        /** HRMOS record with all upstream fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Update business partner. May end the trading relationship when close_out is 1. */
    "hrmos_kintai.update_business_partner": {
      input: {
        /** Business partner ID. */
        partnerId: number;
        /** Business partner data. HRMOS validates required fields according to corporation or individual status; retain all applicable document settings. */
        data: {
          /** Record ID. */
          id?: number;
          /** Individual partner or contact family name. */
          last_name?: string;
          /** Individual partner or contact given name. */
          first_name?: string;
          /** Individual partner family name in Katakana. */
          last_name_kana?: string;
          /** Individual partner given name in Katakana. */
          first_name_kana?: string;
          /** Workplace ID. */
          lodgment_id?: number;
          /** Position of the legal entity designation: 0 none, 1 before the name, 2 after the name. */
          configuration?: number;
          /** Legal entity designation ID: 1 stock company, 2 limited company, 3 religious corporation, 4 foundation, 5 association, 6 social welfare, 7 school, 8 medical, 9 public-interest corporation, 10 NPO, 11 LLC, 12 general partnership, 13 limited partnership, 14 general association, 15 public-interest association, 16 special association, 17 general foundation, 18 public-interest foundation, 19 special foundation, 20 legal professional, 21 tax accountant, 22 labor/social security attorney, 23 judicial scrivener corporation. */
          configuration_label?: number;
          /** Consolidated billing email subject. */
          deal_report_mail_subject?: string;
          /** Consolidated billing email body. */
          deal_report_mail_body?: string;
          /** Business partner name; required fields depend on whether the partner is a corporation or an individual. */
          name?: string;
          /** Business partner name in Katakana. */
          name_kana?: string;
          /** Business partner number. */
          partner_number?: string;
          /** Qualified invoice issuer registration number. */
          invoice_code?: string;
          /** Postal code. */
          postal_code?: string;
          /** Prefecture ID. */
          prefectural_id?: number;
          /** City, district and street address. */
          city?: string;
          /** Building name. */
          building?: string;
          /** Department. */
          branch?: string;
          /** Job title. */
          appointment?: string;
          /** Billing or payment contact person. */
          person?: string;
          /** Telephone number. */
          tel?: string;
          /** Email address. */
          email?: string;
          /** CC email address. */
          cc_email?: string;
          /** Daily total working-time rounding: 0 none, 1 up, 2 down. */
          fractional_total?: number;
          /** Rounding interval in minutes for daily total working time. */
          fractional_minute_total?: number;
          /** Clock-in rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_start_at?: number;
          /** Clock-in rounding interval in minutes. */
          fractional_minute_start_at?: number;
          /** Clock-out rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_end_at?: number;
          /** Clock-out rounding interval in minutes. */
          fractional_minute_end_at?: number;
          /** Whether to create sales invoices: 0 no, 1 yes. */
          invoice_create?: number;
          /** Settlement rounding mode. */
          fractional?: number;
          /** Settlement rounding interval in minutes. */
          fractional_minute?: number;
          /** Billing cutoff day. */
          cutoff_date?: number;
          /** Payment cycle: 0 current month, 1 next month, 2 two months later, 3 three months later. */
          pay_cycle?: number;
          /** Payment day; 31 means month-end. */
          pay_date?: number;
          /** Payment-notice attachments: purchase, work or expense. */
          deal_document_purchases?: Array<"purchase" | "work" | "expense">;
          /** Payment notice tax treatment: included or excluded. */
          purchase_tax_type?: "included" | "excluded";
          /** Payment notice withholding tax flag. */
          purchase_withholding?: boolean;
          /** Payment notice subject. */
          purchase_subject?: string;
          /** Payment notice show year and month. */
          purchase_show_year_month?: boolean;
          /** Payment notice show working time. */
          purchase_show_work_time?: boolean;
          /** Payment notice monthly base-work item label. */
          purchase_main?: string;
          /** Payment notice monthly deduction item label. */
          purchase_deduction?: string;
          /** Payment notice monthly excess-hours item label. */
          purchase_surplus?: string;
          /** Payment notice show employee name on monthly items. */
          purchase_username_view?: boolean;
          /** Payment notice single monthly rate item label. */
          purchase_monthly_only_one?: string;
          /** Payment notice show employee name on single monthly rate items. */
          purchase_monthly_only_one_username_view?: boolean;
          /** Payment notice regular hourly item label. */
          purchase_hourly_main?: string;
          /** Payment notice regular late-night item label. */
          purchase_late_night?: string;
          /** Payment notice overtime item label. */
          purchase_overtime?: string;
          /** Payment notice late-night overtime item label. */
          purchase_overtime_late_night?: string;
          /** Payment notice overtime beyond 60 hours item label. */
          purchase_over_60_hour?: string;
          /** Payment notice late-night overtime beyond 60 hours item label. */
          purchase_over_60_hour_late_night?: string;
          /** Payment notice non-statutory holiday item label. */
          purchase_holiday_1?: string;
          /** Payment notice non-statutory holiday late-night item label. */
          purchase_holiday_1_late_night?: string;
          /** Payment notice statutory holiday item label. */
          purchase_holiday_2?: string;
          /** Payment notice statutory holiday late-night item label. */
          purchase_holiday_2_late_night?: string;
          /** Payment notice show employee name on hourly items. */
          purchase_hourly_username_view?: boolean;
          /** Payment notice single hourly rate item label. */
          purchase_hourly_only_one?: string;
          /** Payment notice show employee name on single hourly rate items. */
          purchase_hourly_only_one_username_view?: boolean;
          /** Document bank account for payment. */
          bank_account?: string;
          /** Payment notice notes. */
          purchase_notes?: string;
          /** Payment notice memo. */
          purchase_memo?: string;
          /** Payment notice email subject. */
          purchase_mail_subject?: string;
          /** Payment notice email body. */
          purchase_mail_body?: string;
          /** Sales-invoice attachments: invoice, work or expense. */
          deal_document_invoices?: Array<"invoice" | "work" | "expense">;
          /** Consolidated billing attachments: invoice, work or expense. */
          deal_document_totals?: Array<"invoice" | "work" | "expense">;
          /** Document subject. */
          subject?: string;
          /** Document show year and month. */
          show_year_month?: boolean;
          /** Document show working time. */
          show_work_time?: boolean;
          /** Sales invoice monthly base-work item label. */
          invoice_main?: string;
          /** Sales invoice monthly deduction item label. */
          invoice_deduction?: string;
          /** Sales invoice monthly excess-hours item label. */
          invoice_surplus?: string;
          /** Sales invoice show employee name on monthly items. */
          invoice_username_view?: boolean;
          /** Sales invoice single monthly rate item label. */
          invoice_monthly_only_one?: string;
          /** Sales invoice show employee name on single monthly rate items. */
          invoice_monthly_only_one_username_view?: boolean;
          /** Sales invoice regular hourly item label. */
          invoice_hourly_main?: string;
          /** Sales invoice regular late-night item label. */
          invoice_late_night?: string;
          /** Sales invoice overtime item label. */
          invoice_overtime?: string;
          /** Sales invoice late-night overtime item label. */
          invoice_overtime_late_night?: string;
          /** Sales invoice overtime beyond 60 hours item label. */
          invoice_over_60_hour?: string;
          /** Sales invoice late-night overtime beyond 60 hours item label. */
          invoice_over_60_hour_late_night?: string;
          /** Sales invoice non-statutory holiday item label. */
          invoice_holiday_1?: string;
          /** Sales invoice non-statutory holiday late-night item label. */
          invoice_holiday_1_late_night?: string;
          /** Sales invoice statutory holiday item label. */
          invoice_holiday_2?: string;
          /** Sales invoice statutory holiday late-night item label. */
          invoice_holiday_2_late_night?: string;
          /** Sales invoice show employee name on hourly items. */
          invoice_hourly_username_view?: boolean;
          /** Sales invoice single hourly rate item label. */
          invoice_hourly_only_one?: string;
          /** Sales invoice show employee name on single hourly rate items. */
          invoice_hourly_only_one_username_view?: boolean;
          /** Sales invoice bank account for payment. */
          invoice_bank_account?: string;
          /** Sales invoice notes. */
          invoice_notes?: string;
          /** Sales invoice memo. */
          invoice_memo?: string;
          /** Document email subject. */
          mail_subject?: string;
          /** Document email body. */
          mail_body?: string;
          /** Document to issue to the supplier. */
          purchase_issue_document?: "purchase" | "purchase_invoice";
          /** Purchase-invoice attachments: purchase_invoice, work or expense. */
          deal_document_purchase_invoices?: Array<"purchase_invoice" | "work" | "expense">;
          /** Purchase invoice tax treatment: included or excluded. */
          purchase_invoice_tax_type?: "included" | "excluded";
          /** Purchase invoice withholding tax flag. */
          purchase_invoice_withholding?: boolean;
          /** Purchase invoice subject. */
          purchase_invoice_subject?: string;
          /** Purchase invoice show year and month. */
          purchase_invoice_show_year_month?: boolean;
          /** Purchase invoice show working time. */
          purchase_invoice_show_work_time?: boolean;
          /** Purchase invoice monthly base-work item label. */
          purchase_invoice_main?: string;
          /** Purchase invoice monthly deduction item label. */
          purchase_invoice_deduction?: string;
          /** Purchase invoice monthly excess-hours item label. */
          purchase_invoice_surplus?: string;
          /** Purchase invoice show employee name on monthly items. */
          purchase_invoice_username_view?: boolean;
          /** Purchase invoice single monthly rate item label. */
          purchase_invoice_monthly_only_one?: string;
          /** Purchase invoice show employee name on single monthly rate items. */
          purchase_invoice_monthly_only_one_username_view?: boolean;
          /** Purchase invoice regular hourly item label. */
          purchase_invoice_hourly_main?: string;
          /** Purchase invoice regular late-night item label. */
          purchase_invoice_late_night?: string;
          /** Purchase invoice overtime item label. */
          purchase_invoice_overtime?: string;
          /** Purchase invoice late-night overtime item label. */
          purchase_invoice_overtime_late_night?: string;
          /** Purchase invoice overtime beyond 60 hours item label. */
          purchase_invoice_over_60_hour?: string;
          /** Purchase invoice late-night overtime beyond 60 hours item label. */
          purchase_invoice_over_60_hour_late_night?: string;
          /** Purchase invoice non-statutory holiday item label. */
          purchase_invoice_holiday_1?: string;
          /** Purchase invoice non-statutory holiday late-night item label. */
          purchase_invoice_holiday_1_late_night?: string;
          /** Purchase invoice statutory holiday item label. */
          purchase_invoice_holiday_2?: string;
          /** Purchase invoice statutory holiday late-night item label. */
          purchase_invoice_holiday_2_late_night?: string;
          /** Purchase invoice show employee name on hourly items. */
          purchase_invoice_hourly_username_view?: boolean;
          /** Purchase invoice single hourly rate item label. */
          purchase_invoice_hourly_only_one?: string;
          /** Purchase invoice show employee name on single hourly rate items. */
          purchase_invoice_hourly_only_one_username_view?: boolean;
          /** Purchase invoice bank account for payment. */
          purchase_invoice_bank_account?: string;
          /** Purchase invoice notes. */
          purchase_invoice_notes?: string;
          /** Purchase invoice memo. */
          purchase_invoice_memo?: string;
          /** Purchase invoice email subject. */
          purchase_invoice_mail_subject?: string;
          /** Purchase invoice email body. */
          purchase_invoice_mail_body?: string;
          /** Trading status: 0 active, 1 trading ended. */
          close_out?: number;
          /** Notes. */
          notes?: string;
        };
      };
      output: {
        /** Returned business partner with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Update contract. */
    "hrmos_kintai.update_contract": {
      input: {
        /** Contract ID. */
        contractId: number;
        /** Contract data, including rates, settlement, supplier documents and approvers. */
        data: {
          /** Record ID. */
          id?: number;
          /** Business partner ID. */
          business_partner_id?: number;
          /** Employee ID. */
          user_id?: number;
          /** Contract number. */
          contract_number?: string;
          /** Contract category: contract, delegation, semi_delegation, regular_use_type_temping, registration_type_temping, introduction_plan_temping, maintenance or other. */
          contract_category?: string;
          /** Business partner number. */
          partner_number?: string;
          /** Postal code. */
          postal_code?: string;
          /** Prefecture ID. */
          prefectural_id?: number;
          /** City, district and street address. */
          city?: string;
          /** Building name. */
          building?: string;
          /** Department. */
          branch?: string;
          /** Job title. */
          appointment?: string;
          /** Billing or payment contact person. */
          person?: string;
          /** Contract notes. */
          contract_notes?: string;
          /**
           * Contract start date.
           * @format date
           */
          start_at?: string;
          /**
           * Contract end date.
           * @format date
           */
          end_at?: string;
          /** Work report mode: 0 daily arrival/departure times, 1 monthly working hours only. */
          work_type?: number;
          /** Rate type: 0 hourly with adjustments, 10 single hourly rate, 1 monthly with adjustments, 11 single monthly rate. */
          pay_type?: number;
          /** Regular hourly rate. */
          hourly_price?: number | null;
          /** Monthly rate. */
          monthly_price?: number;
          /** Regular late-night hourly rate. */
          late_night_price?: number | null;
          /** Overtime hourly rate. */
          overtime_price?: number | null;
          /** Late-night overtime hourly rate. */
          overtime_late_night_price?: number | null;
          /** Hourly rate for overtime beyond 60 hours. */
          over_60_hour_price?: number | null;
          /** Late-night hourly rate for overtime beyond 60 hours. */
          over_60_hour_late_night_price?: number | null;
          /** Non-statutory holiday hourly rate. */
          holiday_1_price?: number | null;
          /** Non-statutory holiday late-night hourly rate. */
          holiday_1_late_night_price?: number | null;
          /** Statutory holiday hourly rate. */
          holiday_2_price?: number | null;
          /** Statutory holiday late-night hourly rate. */
          holiday_2_late_night_price?: number | null;
          /** Lower bound of base working hours. */
          min_hour?: number;
          /** Upper bound of base working hours. */
          max_hour?: number;
          /** Excess-hours rate. */
          surplus?: number;
          /** Amount used to round the excess-hours rate. */
          surplus_fractional_price?: number;
          /** Excess-rate rounding: 1 up, 2 down, 3 nearest. */
          surplus_fractional?: number;
          /** Deduction amount or rate in the contract settlement settings. */
          deduction?: number;
          /** Amount used to round deductions. */
          deduction_fractional_price?: number;
          /** Deduction rounding: 1 up, 2 down, 3 nearest. */
          deduction_fractional?: number;
          /** Billing cutoff day. */
          cutoff_date?: number;
          /** Payment cycle: 0 current month, 1 next month, 2 two months later, 3 three months later. */
          pay_cycle?: number;
          /** Payment day; 31 means month-end. */
          pay_date?: number;
          /** Daily total working-time rounding: 0 none, 2 down. */
          fractional_total?: number;
          /** Rounding interval in minutes for daily total working time. */
          fractional_minute_total?: number;
          /** Clock-in rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_start_at?: number;
          /** Clock-in rounding interval in minutes. */
          fractional_minute_start_at?: number;
          /** Clock-out rounding mode. 1 up, 2 down, 3 nearest. */
          fractional_end_at?: number;
          /** Clock-out rounding interval in minutes. */
          fractional_minute_end_at?: number;
          /** Contract settlement rounding mode. */
          fractional?: number;
          /** Contract settlement rounding interval in minutes. */
          fractional_minute?: number;
          /** Document subject. */
          subject?: string;
          /** Document show year and month. */
          show_year_month?: boolean;
          /** Document show working time. */
          show_work_time?: boolean;
          /** Document memo. */
          memo?: string;
          /** Supplier payment-notice settings. */
          deal_purchase?: {
            /** Record ID. */
            id?: number;
            /** Business partner ID. */
            business_partner_id?: number;
            /** Business partner number. */
            partner_number?: string;
            /** Postal code. */
            postal_code?: string;
            /** Prefecture ID. */
            prefectural_id?: number;
            /** City, district and street address. */
            city?: string;
            /** Building name. */
            building?: string;
            /** Department. */
            branch?: string;
            /** Job title. */
            appointment?: string;
            /** Billing or payment contact person. */
            person?: string;
            /** Rate type: 0 hourly with adjustments, 10 single hourly rate, 1 monthly with adjustments, 11 single monthly rate. */
            pay_type?: number;
            /** Monthly rate. */
            monthly_price?: number;
            /** Lower bound of base working hours. */
            min_hour?: number;
            /** Upper bound of base working hours. */
            max_hour?: number;
            /** Excess-hours rate. */
            surplus?: number;
            /** Amount used to round the excess-hours rate. */
            surplus_fractional_price?: number;
            /** Excess-rate rounding: 1 up, 2 down, 3 nearest. */
            surplus_fractional?: number;
            /** Deduction amount or rate in the contract settlement settings. */
            deduction?: number;
            /** Amount used to round deductions. */
            deduction_fractional_price?: number;
            /** Deduction rounding: 1 up, 2 down, 3 nearest. */
            deduction_fractional?: number;
            /** Daily total working-time rounding: 0 none, 1 up, 2 down. */
            fractional_total?: number;
            /** Rounding interval in minutes for daily total working time. */
            fractional_minute_total?: number;
            /** Clock-in rounding mode. 0 none, 1 up, 2 down. */
            fractional_start_at?: number;
            /** Clock-in rounding interval in minutes. */
            fractional_minute_start_at?: number;
            /** Clock-out rounding mode. 0 none, 1 up, 2 down. */
            fractional_end_at?: number;
            /** Clock-out rounding interval in minutes. */
            fractional_minute_end_at?: number;
            /** Settlement rounding mode. */
            fractional?: number;
            /** Settlement rounding interval in minutes. */
            fractional_minute?: number;
            /** Document subject. */
            subject?: string;
            /** Document show year and month. */
            show_year_month?: boolean;
            /** Document show working time. */
            show_work_time?: boolean;
            /** Document memo. */
            memo?: string;
            /** Regular hourly rate. */
            hourly_price?: number;
            /** Regular late-night hourly rate. */
            late_night_price?: number;
            /** Overtime hourly rate. */
            overtime_price?: number;
            /** Late-night overtime hourly rate. */
            overtime_late_night_price?: number;
            /** Hourly rate for overtime beyond 60 hours. */
            over_60_hour_price?: number;
            /** Late-night hourly rate for overtime beyond 60 hours. */
            over_60_hour_late_night_price?: number;
            /** Non-statutory holiday hourly rate. */
            holiday_1_price?: number;
            /** Non-statutory holiday late-night hourly rate. */
            holiday_1_late_night_price?: number;
            /** Statutory holiday hourly rate. */
            holiday_2_price?: number;
            /** Statutory holiday late-night hourly rate. */
            holiday_2_late_night_price?: number;
          };
          /** Supplier purchase-invoice settings. */
          deal_purchase_invoice?: {
            /** Record ID. */
            id?: number;
            /** Business partner ID. */
            business_partner_id?: number;
            /** Business partner number. */
            partner_number?: string;
            /** Postal code. */
            postal_code?: string;
            /** Prefecture ID. */
            prefectural_id?: number;
            /** City, district and street address. */
            city?: string;
            /** Building name. */
            building?: string;
            /** Department. */
            branch?: string;
            /** Job title. */
            appointment?: string;
            /** Billing or payment contact person. */
            person?: string;
            /** Rate type: 0 hourly with adjustments, 10 single hourly rate, 1 monthly with adjustments, 11 single monthly rate. */
            pay_type?: number;
            /** Monthly rate. */
            monthly_price?: number;
            /** Lower bound of base working hours. */
            min_hour?: number;
            /** Upper bound of base working hours. */
            max_hour?: number;
            /** Excess-hours rate. */
            surplus?: number;
            /** Amount used to round the excess-hours rate. */
            surplus_fractional_price?: number;
            /** Excess-rate rounding: 1 up, 2 down, 3 nearest. */
            surplus_fractional?: number;
            /** Deduction amount or rate in the contract settlement settings. */
            deduction?: number;
            /** Amount used to round deductions. */
            deduction_fractional_price?: number;
            /** Deduction rounding: 1 up, 2 down, 3 nearest. */
            deduction_fractional?: number;
            /** Daily total working-time rounding: 0 none, 1 up, 2 down. */
            fractional_total?: number;
            /** Rounding interval in minutes for daily total working time. */
            fractional_minute_total?: number;
            /** Clock-in rounding mode. 0 none, 1 up, 2 down. */
            fractional_start_at?: number;
            /** Clock-in rounding interval in minutes. */
            fractional_minute_start_at?: number;
            /** Clock-out rounding mode. 0 none, 1 up, 2 down. */
            fractional_end_at?: number;
            /** Clock-out rounding interval in minutes. */
            fractional_minute_end_at?: number;
            /** Settlement rounding mode. */
            fractional?: number;
            /** Settlement rounding interval in minutes. */
            fractional_minute?: number;
            /** Document subject. */
            subject?: string;
            /** Document show year and month. */
            show_year_month?: boolean;
            /** Document show working time. */
            show_work_time?: boolean;
            /** Document memo. */
            memo?: string;
            /** Regular hourly rate. */
            hourly_price?: number;
            /** Regular late-night hourly rate. */
            late_night_price?: number;
            /** Overtime hourly rate. */
            overtime_price?: number;
            /** Late-night overtime hourly rate. */
            overtime_late_night_price?: number;
            /** Hourly rate for overtime beyond 60 hours. */
            over_60_hour_price?: number;
            /** Late-night hourly rate for overtime beyond 60 hours. */
            over_60_hour_late_night_price?: number;
            /** Non-statutory holiday hourly rate. */
            holiday_1_price?: number;
            /** Non-statutory holiday late-night hourly rate. */
            holiday_1_late_night_price?: number;
            /** Statutory holiday hourly rate. */
            holiday_2_price?: number;
            /** Statutory holiday late-night hourly rate. */
            holiday_2_late_night_price?: number;
          };
          /** Contract approver assignments. */
          deal_contract_user_approvers?: Array<{
            /** Record ID. */
            id?: number;
            /** Contract ID. */
            deal_contract_id?: number;
            /** Employee ID. */
            user_id?: number;
            /** Whether this contract approver is enabled. */
            deal_enabled?: boolean;
          }>;
        };
      };
      output: {
        /** Returned contract with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Update business partner approval contacts. */
    "hrmos_kintai.update_partner_contact": {
      input: {
        /** Business partner ID. */
        partnerId: number;
        /** Partner contact ID. */
        contactId: number;
        /** Business partner approval contact data. */
        data: {
          /** Record ID. */
          id?: number;
          /** Individual partner or contact given name. */
          first_name: string;
          /** Individual partner or contact family name. */
          last_name: string;
          /** Email address. */
          email: string;
          /** Department. */
          branch?: string;
          /** Job title. */
          appointment?: string;
        };
      };
      output: {
        /** Returned partner contact with additional fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Register or update an employee matched by login ID, including calendars and approval groups. Login ID, password and cutoff day cannot be changed after registration. */
    "hrmos_kintai.upsert_employee": {
      input: {
        /** Input for upsert_employee. */
        data: {
          /** Login ID used to match an existing employee; cannot be changed after creation. */
          login_id: string;
          /** Initial password; required by the published contract and cannot be changed through this endpoint after creation. */
          password: string;
          /** Employee number. */
          number?: string;
          /** Family name. */
          last_name: string;
          /** Given name. */
          first_name: string;
          /** Family name in Katakana. */
          last_name_kana: string;
          /** Given name in Katakana. */
          first_name_kana: string;
          /** Email address. */
          email?: string;
          /** Cutoff day; 31 means month-end. Cannot be changed after employee creation. */
          cutoff_date?: number;
          /**
           * Employment start date.
           * @format date
           */
          start_date: string;
          /**
           * Employment end date.
           * @format date
           */
          end_date?: string;
          /** Employee notes. */
          comment?: string;
          /** Workplace ID. */
          lodgment_id?: number;
          /** Article 36 agreement ID; HRMOS selects the first configured agreement when omitted. */
          agreement36_id?: number;
          /** Department ID. */
          department_id?: number;
          /** Employment type ID. */
          employment_id?: number;
          /** Comma-separated work classification IDs; omission selects all classifications. */
          segment?: string;
          /** Default work classification ID. */
          default_segment_id?: number;
          /** Calendar category 1 for weekday/weekend/public-holiday calendars. */
          default_holiday_1_id?: number;
          /** Calendar category 2 for weekday/weekend/public-holiday calendars. */
          default_holiday_2_id?: number;
          /** Calendar category 3 for weekday/weekend/public-holiday calendars. */
          default_holiday_3_id?: number;
          /** Custom calendar category 1 ID. */
          default_calendar_1_id?: number;
          /** Custom calendar category 2 ID. */
          default_calendar_2_id?: number;
          /** Custom calendar category 3 ID. */
          default_calendar_3_id?: number;
          /** Custom calendar category 4 ID. */
          default_calendar_4_id?: number;
          /** Custom calendar category 5 ID. */
          default_calendar_5_id?: number;
          /** Custom calendar category 6 ID. */
          default_calendar_6_id?: number;
          /** Custom calendar category 7 ID. */
          default_calendar_7_id?: number;
          /** Custom calendar category 8 ID. */
          default_calendar_8_id?: number;
          /** Custom calendar IDs from the ninth calendar category onward. */
          user_original_calendars?: Array<number>;
          /** Employee IDs in approval group 1. */
          group1_approvers?: Array<number>;
          /** Employee IDs in approval group 2. */
          group2_approvers?: Array<number>;
          /** Employee IDs in approval group 3. */
          group3_approvers?: Array<number>;
          /** Employee IDs in approval group 4. */
          group4_approvers?: Array<number>;
          /** IC card ID for PC punching, supported by the official request example. */
          nfc_tag_pc?: string;
        };
      };
      output: {
        /** HRMOS record with all upstream fields preserved. */
        record: Record<string, unknown>;
      };
    };
    /** Register or update external attendance times on an existing daily attendance record. */
    "hrmos_kintai.upsert_external_attendance": {
      input: {
        /** Input for upsert_external_attendance. */
        data: {
          /** Employee ID. */
          user_id: number;
          /**
           * Attendance date; the daily record must already exist.
           * @format date
           */
          day: string;
          /** External system clock-in time. */
          other_start_at?: string;
          /** External system clock-out time. */
          other_end_at?: string;
        };
      };
      output: {
        /** HRMOS record with all upstream fields preserved. */
        record: Record<string, unknown>;
      };
    };
  }
}
