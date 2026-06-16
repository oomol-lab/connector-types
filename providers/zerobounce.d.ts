import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update one ZeroBounce custom allow/block filter rule. */
    "zerobounce.create_filter_rule": {
      input: {
        /** Whether the filter rule should allow or block matching addresses. */
        rule: "allow" | "block";
        /** The filter scope used by ZeroBounce for this rule. */
        target: "email" | "domain" | "mx" | "tld";
        /**
         * The filter value such as an email address, domain, MX record, or TLD.
         * @minLength 1
         */
        value: string;
      };
      output: {
        /** The confirmation message returned by ZeroBounce. */
        message: string;
      };
    };
    /** Get ZeroBounce email activity data for one email address. */
    "zerobounce.get_activity_data": {
      input: {
        /**
         * The email address used for this ZeroBounce request.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
      };
      output: {
        /** Whether ZeroBounce found activity data for the email address. */
        found: boolean;
        /** The recency window for the latest detected activity. */
        active_in_days?: "30" | "60" | "90" | "180" | "365" | "365+";
      };
    };
    /** Get ZeroBounce API usage metrics for a date range. */
    "zerobounce.get_api_usage": {
      input: {
        /**
         * The inclusive usage period start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        start_date: string;
        /**
         * The inclusive usage period end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        end_date: string;
      };
      output: {
        /** The total number of API validations in the time range. */
        total: number;
        /**
         * The inclusive usage period start date returned by ZeroBounce.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        start_date: string;
        /**
         * The inclusive usage period end date returned by ZeroBounce.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        end_date: string;
        /** The number of validations with status_valid. */
        status_valid?: number;
        /** The number of validations with status_invalid. */
        status_invalid?: number;
        /** The number of validations with status_catch_all. */
        status_catch_all?: number;
        /** The number of validations with status_do_not_mail. */
        status_do_not_mail?: number;
        /** The number of validations with status_spamtrap. */
        status_spamtrap?: number;
        /** The number of validations with status_unknown. */
        status_unknown?: number;
        /** The number of validations with sub_status_toxic. */
        sub_status_toxic?: number;
        /** The number of validations with sub_status_disposable. */
        sub_status_disposable?: number;
        /** The number of validations with sub_status_role_based. */
        sub_status_role_based?: number;
        /** The number of validations with sub_status_possible_trap. */
        sub_status_possible_trap?: number;
        /** The number of validations with sub_status_global_suppression. */
        sub_status_global_suppression?: number;
        /** The number of validations with sub_status_timeout_exceeded. */
        sub_status_timeout_exceeded?: number;
        /** The number of validations with sub_status_mail_server_temporary_error. */
        sub_status_mail_server_temporary_error?: number;
        /** The number of validations with sub_status_mail_server_did_not_respond. */
        sub_status_mail_server_did_not_respond?: number;
        /** The number of validations with sub_status_greylisted. */
        sub_status_greylisted?: number;
        /** The number of validations with sub_status_antispam_system. */
        sub_status_antispam_system?: number;
        /** The number of validations with sub_status_does_not_accept_mail. */
        sub_status_does_not_accept_mail?: number;
        /** The number of validations with sub_status_exception_occurred. */
        sub_status_exception_occurred?: number;
        /** The number of validations with sub_status_failed_syntax_check. */
        sub_status_failed_syntax_check?: number;
        /** The number of validations with sub_status_mailbox_not_found. */
        sub_status_mailbox_not_found?: number;
        /** The number of validations with sub_status_unroutable_ip_address. */
        sub_status_unroutable_ip_address?: number;
        /** The number of validations with sub_status_possible_typo. */
        sub_status_possible_typo?: number;
        /** The number of validations with sub_status_no_dns_entries. */
        sub_status_no_dns_entries?: number;
        /** The number of validations with sub_status_role_based_catch_all. */
        sub_status_role_based_catch_all?: number;
        /** The number of validations with sub_status_mailbox_quota_exceeded. */
        sub_status_mailbox_quota_exceeded?: number;
        /** The number of validations with sub_status_forcible_disconnect. */
        sub_status_forcible_disconnect?: number;
        /** The number of validations with sub_status_failed_smtp_connection. */
        sub_status_failed_smtp_connection?: number;
        /** The number of validations with sub_status_leading_period_removed. */
        sub_status_leading_period_removed?: number;
        /** The number of validations with sub_status_alias_address. */
        sub_status_alias_address?: number;
        /** The number of validations with sub_status_mx_forward. */
        sub_status_mx_forward?: number;
        /** The number of validations with sub_status_alternate. */
        sub_status_alternate?: number;
        /** The number of validations with sub_status_blocked. */
        sub_status_blocked?: number;
        /** The number of validations with sub_status_allowed. */
        sub_status_allowed?: number;
        [key: string]: unknown;
      };
    };
    /** Get the current ZeroBounce credit balance. */
    "zerobounce.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** The remaining ZeroBounce credits. */
        credits: number;
      };
    };
    /** List the current ZeroBounce custom allow/block filter rules. */
    "zerobounce.list_filter_rules": {
      input: Record<string, never>;
      output: {
        /** The custom allow/block rules currently configured in ZeroBounce. */
        filters: Array<{
          /** Whether the filter rule should allow or block matching addresses. */
          rule: "allow" | "block";
          /** The filter scope used by ZeroBounce for this rule. */
          target: "email" | "domain" | "mx" | "tld";
          /** The filter value returned by ZeroBounce. */
          value: string;
        }>;
      };
    };
    /** Validate a single email address with ZeroBounce in real time. */
    "zerobounce.validate_email": {
      input: {
        /**
         * The raw email address to validate with ZeroBounce.
         * @minLength 1
         */
        email: string;
        /** The optional client IP address used for geo enrichment. */
        ip_address?: string;
        /** Whether ZeroBounce should include remaining credits information in the response. */
        credits_info?: boolean;
      };
      output: {
        /** The validated email address returned by ZeroBounce. */
        address: string;
        /** The top-level validation status returned by ZeroBounce. */
        status: "valid" | "invalid" | "catch-all" | "unknown" | "spamtrap" | "abuse" | "do_not_mail";
        /** Whether the email belongs to a free email provider. */
        free_email: boolean;
        /** Whether ZeroBounce found MX records for the domain. */
        mx_found: boolean;
        /** The more specific ZeroBounce validation sub-status. */
        sub_status?: string;
        /** The MX record returned by ZeroBounce. */
        mx_record?: string;
        /** The correction suggestion returned by ZeroBounce, if any. */
        did_you_mean?: string | null;
        /** The domain portion of the validated email address. */
        domain?: string;
        /** The local-part portion of the validated email address. */
        account?: string;
        /** The last activity bucket returned by ZeroBounce, if available. */
        active_in_days?: "30" | "60" | "90" | "180" | "365" | "365+";
        /** The SMTP provider identified by ZeroBounce, or null when unavailable. */
        smtp_provider?: string | null;
        /** The first name inferred by ZeroBounce, or null when unavailable. */
        firstname?: string | null;
        /** The last name inferred by ZeroBounce, or null when unavailable. */
        lastname?: string | null;
        /** The gender inferred by ZeroBounce, or null when unavailable. */
        gender?: string | null;
        /** The country inferred by ZeroBounce, or null when unavailable. */
        country?: string | null;
        /** The region inferred by ZeroBounce, or null when unavailable. */
        region?: string | null;
        /** The city inferred by ZeroBounce, or null when unavailable. */
        city?: string | null;
        /** The postal code inferred by ZeroBounce, or null when unavailable. */
        zipcode?: string | null;
        /** The ZeroBounce processing timestamp, if any. */
        processed_at?: string;
        /** The age of the domain in days, or null when ZeroBounce does not provide it. */
        domain_age_days?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
