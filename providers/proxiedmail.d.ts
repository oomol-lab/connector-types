import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a ProxiedMail proxy email binding that forwards to real addresses. */
    "proxiedmail.create_proxy_binding": {
      input: {
        /**
         * Real email addresses that should receive mail forwarded from the proxy address.
         * @minItems 1
         */
        realAddresses: Array<string>;
        /**
         * The proxy email address ProxiedMail should issue.
         * @minLength 1
         * @format email
         */
        proxyAddress: string;
        /** The callback URL ProxiedMail should call when new mail arrives, or an empty string. */
        callbackUrl?: "" | string;
        /** Whether received emails should be listable through the API. */
        isBrowsable?: boolean;
      };
      output: {
        /** Metadata returned with proxy binding responses. */
        meta: {
          /** The number of proxy bindings used by the account. */
          usedProxyBindings?: number;
          /** The number of proxy bindings available to the account. */
          availableProxyBindings?: number;
          /** Whether ProxiedMail sent a verification email. */
          isVerificationEmailSend?: boolean;
          /** Whether this response is for the account's first proxy binding. */
          firstProxyBinding?: boolean;
          [key: string]: unknown;
        };
        /** A ProxiedMail proxy binding resource. */
        proxyBinding: {
          /** The JSON:API resource type, usually proxy_bindings. */
          type?: string;
          /** The ProxiedMail proxy binding ID. */
          id?: string;
          /** Attributes of a ProxiedMail proxy binding. */
          attributes?: {
            /** Real forwarding addresses keyed by email address. */
            real_addresses?: Record<string, {
                /** Whether forwarding to this real address is enabled. */
                is_enabled?: boolean;
                /** Whether this real address has been verified. */
                is_verified?: boolean;
                /** Whether ProxiedMail reports verification is still needed. */
                is_verification_needed?: boolean;
                [key: string]: unknown;
              }>;
            /** The ProxiedMail proxy email address. */
            proxy_address?: string;
            /** The number of received emails for this proxy binding. */
            received_emails?: number;
            /** The proxy binding description. */
            description?: string;
            /** The callback URL ProxiedMail calls when new mail arrives. */
            callback_url?: string;
            /** Whether received emails can be listed with the API. */
            is_browsable?: boolean;
            /** The date and time when ProxiedMail created this proxy binding. */
            created_at?: string;
            /** The date and time when ProxiedMail last updated this proxy binding. */
            updated_at?: string;
            /** The internal ProxiedMail binding type code. */
            type?: number;
            [key: string]: unknown;
          };
          /** The raw object returned by ProxiedMail. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw object returned by ProxiedMail. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the payload and metadata for one ProxiedMail received email. */
    "proxiedmail.get_received_email": {
      input: {
        /**
         * The ProxiedMail received email ID to fetch.
         * @minLength 1
         */
        receivedEmailId: string;
      };
      output: {
        /** A ProxiedMail received-email detail resource. */
        receivedEmail: {
          /** The JSON:API resource type, usually received_emails_details. */
          type?: string;
          /** The ProxiedMail received email ID. */
          id?: string;
          /** Attributes for one ProxiedMail email. */
          attributes?: {
            /** The proxy email address that received the message. */
            recipient_email?: string;
            /** The sender email address. */
            sender_email?: string;
            /** The message payload returned by ProxiedMail. */
            payload?: Record<string, unknown>;
            /** Attachments returned by ProxiedMail for this received email. */
            attachments?: Array<unknown>;
            /** Whether ProxiedMail has processed the received email. */
            is_processed?: boolean;
            /** The date and time when ProxiedMail created the received email record. */
            created_at?: string;
            /** The date and time when ProxiedMail last updated the received email record. */
            updated_at?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The raw object returned by ProxiedMail. */
        raw: Record<string, unknown>;
      };
    };
    /** List ProxiedMail proxy email bindings for the connected account. */
    "proxiedmail.list_proxy_bindings": {
      input: Record<string, never>;
      output: {
        /** Metadata returned with proxy binding responses. */
        meta: {
          /** The number of proxy bindings used by the account. */
          usedProxyBindings?: number;
          /** The number of proxy bindings available to the account. */
          availableProxyBindings?: number;
          /** Whether ProxiedMail sent a verification email. */
          isVerificationEmailSend?: boolean;
          /** Whether this response is for the account's first proxy binding. */
          firstProxyBinding?: boolean;
          [key: string]: unknown;
        };
        /** The proxy bindings returned by ProxiedMail. */
        proxyBindings: Array<{
          /** The JSON:API resource type, usually proxy_bindings. */
          type?: string;
          /** The ProxiedMail proxy binding ID. */
          id?: string;
          /** Attributes of a ProxiedMail proxy binding. */
          attributes?: {
            /** Real forwarding addresses keyed by email address. */
            real_addresses?: Record<string, {
                /** Whether forwarding to this real address is enabled. */
                is_enabled?: boolean;
                /** Whether this real address has been verified. */
                is_verified?: boolean;
                /** Whether ProxiedMail reports verification is still needed. */
                is_verification_needed?: boolean;
                [key: string]: unknown;
              }>;
            /** The ProxiedMail proxy email address. */
            proxy_address?: string;
            /** The number of received emails for this proxy binding. */
            received_emails?: number;
            /** The proxy binding description. */
            description?: string;
            /** The callback URL ProxiedMail calls when new mail arrives. */
            callback_url?: string;
            /** Whether received emails can be listed with the API. */
            is_browsable?: boolean;
            /** The date and time when ProxiedMail created this proxy binding. */
            created_at?: string;
            /** The date and time when ProxiedMail last updated this proxy binding. */
            updated_at?: string;
            /** The internal ProxiedMail binding type code. */
            type?: number;
            [key: string]: unknown;
          };
          /** The raw object returned by ProxiedMail. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw object returned by ProxiedMail. */
        raw: Record<string, unknown>;
      };
    };
    /** List received-email links for a browsable ProxiedMail proxy binding. */
    "proxiedmail.list_received_email_links": {
      input: {
        /**
         * The ProxiedMail proxy binding ID whose messages to list.
         * @minLength 1
         */
        proxyBindingId: string;
      };
      output: {
        /** The received-email links returned by ProxiedMail. */
        receivedEmailLinks: Array<{
          /** The JSON:API resource type, usually received_emails_link. */
          type?: string;
          /** The ProxiedMail received email ID. */
          id?: string;
          /** Attributes for a ProxiedMail received-email link. */
          attributes?: {
            /** The proxy email address that received the message. */
            recipient_email?: string;
            /** The sender email address. */
            sender_email?: string;
            /** The received email subject. */
            subject?: string;
            /** The number of attachments reported by ProxiedMail. */
            attachmentsCounter?: number;
            /** The API path for fetching the received email payload. */
            link?: string;
            /** Whether ProxiedMail has processed the received email. */
            is_processed?: boolean;
            /** The date and time when ProxiedMail created the received email record. */
            created_at?: string;
            /** The date and time when ProxiedMail last updated the received email record. */
            updated_at?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The raw object returned by ProxiedMail. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a ProxiedMail proxy email binding by ID. */
    "proxiedmail.update_proxy_binding": {
      input: {
        /**
         * The ProxiedMail proxy binding ID to update.
         * @minLength 1
         */
        proxyBindingId: string;
        /** Real forwarding addresses keyed by email address with true to enable and false to disable. */
        realAddresses?: Record<string, boolean>;
        /**
         * The proxy email address for this binding.
         * @minLength 1
         * @format email
         */
        proxyAddress?: string;
        /** The free-form description for this proxy binding. */
        description?: string;
        /** The callback URL ProxiedMail should call when new mail arrives, or an empty string to clear it. */
        callbackUrl?: "" | string;
        /** Whether received emails should be listable through the API. */
        isBrowsable?: boolean;
      };
      output: {
        /** Metadata returned with proxy binding responses. */
        meta: {
          /** The number of proxy bindings used by the account. */
          usedProxyBindings?: number;
          /** The number of proxy bindings available to the account. */
          availableProxyBindings?: number;
          /** Whether ProxiedMail sent a verification email. */
          isVerificationEmailSend?: boolean;
          /** Whether this response is for the account's first proxy binding. */
          firstProxyBinding?: boolean;
          [key: string]: unknown;
        };
        /** A ProxiedMail proxy binding resource. */
        proxyBinding: {
          /** The JSON:API resource type, usually proxy_bindings. */
          type?: string;
          /** The ProxiedMail proxy binding ID. */
          id?: string;
          /** Attributes of a ProxiedMail proxy binding. */
          attributes?: {
            /** Real forwarding addresses keyed by email address. */
            real_addresses?: Record<string, {
                /** Whether forwarding to this real address is enabled. */
                is_enabled?: boolean;
                /** Whether this real address has been verified. */
                is_verified?: boolean;
                /** Whether ProxiedMail reports verification is still needed. */
                is_verification_needed?: boolean;
                [key: string]: unknown;
              }>;
            /** The ProxiedMail proxy email address. */
            proxy_address?: string;
            /** The number of received emails for this proxy binding. */
            received_emails?: number;
            /** The proxy binding description. */
            description?: string;
            /** The callback URL ProxiedMail calls when new mail arrives. */
            callback_url?: string;
            /** Whether received emails can be listed with the API. */
            is_browsable?: boolean;
            /** The date and time when ProxiedMail created this proxy binding. */
            created_at?: string;
            /** The date and time when ProxiedMail last updated this proxy binding. */
            updated_at?: string;
            /** The internal ProxiedMail binding type code. */
            type?: number;
            [key: string]: unknown;
          };
          /** The raw object returned by ProxiedMail. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw object returned by ProxiedMail. */
        raw: Record<string, unknown>;
      };
    };
  }
}
