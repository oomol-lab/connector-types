import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Approve a pending Tailscale user for the tailnet. */
    "tailscale.approve_user": {
      input: {
        /**
         * The pending Tailscale user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: unknown | null;
    };
    /** Set or remove custom posture attributes across multiple Tailscale devices. */
    "tailscale.batch_update_device_posture_attributes": {
      input: {
        /** Device IDs mapped to custom: attribute keys and their {value, expiry} updates. JSON Merge Patch semantics: a null attribute deletes it. */
        nodes: Record<string, unknown>;
        /** Optional audit-log comment. */
        comment?: string;
      };
      output: unknown | null;
    };
    /** Create an auth key, OAuth client credential, or federated trust credential and return its secret. */
    "tailscale.create_key": {
      input: {
        /** The key type, capabilities, expiry, scopes, tags, and identity configuration. */
        key: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Create a Tailscale OAuth application and return its client secret. */
    "tailscale.create_oauth_app": {
      input: {
        /** The OAuth app name, redirect URIs, scopes, and allowed node attributes. */
        app: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Create a device posture integration using its external provider credentials. */
    "tailscale.create_posture_integration": {
      input: {
        /** The posture provider, tenant configuration, and client credentials. */
        integration: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Create a webhook endpoint and return its signing secret. */
    "tailscale.create_webhook": {
      input: {
        /** The endpoint URL, provider type, and event subscriptions. */
        webhook: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Permanently delete a device from its Tailscale tailnet. */
    "tailscale.delete_device": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device to delete.
         * @minLength 1
         */
        deviceId: string;
      };
      output: unknown | null;
    };
    /** Delete a Tailscale device share invite. */
    "tailscale.delete_device_invite": {
      input: {
        /**
         * The Tailscale device invite ID to delete.
         * @minLength 1
         */
        deviceInviteId: string;
      };
      output: unknown | null;
    };
    /** Permanently remove one custom posture attribute from a Tailscale device. */
    "tailscale.delete_device_posture_attribute": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /**
         * The custom posture attribute key to delete.
         * @minLength 1
         */
        attributeKey: string;
      };
      output: unknown | null;
    };
    /** Permanently revoke and delete a Tailscale trust credential or key. */
    "tailscale.delete_key": {
      input: {
        /**
         * The Tailscale key ID to revoke and delete.
         * @minLength 1
         */
        keyId: string;
      };
      output: unknown | null;
    };
    /** Permanently delete a Tailscale OAuth application and revoke its access. */
    "tailscale.delete_oauth_app": {
      input: {
        /**
         * The Tailscale OAuth app ID to delete.
         * @minLength 1
         */
        appId: string;
      };
      output: unknown | null;
    };
    /** Delete a device posture integration. */
    "tailscale.delete_posture_integration": {
      input: {
        /**
         * The Tailscale posture integration ID to delete.
         * @minLength 1
         */
        integrationId: string;
      };
      output: unknown | null;
    };
    /** Permanently delete a named Tailscale Service. */
    "tailscale.delete_service": {
      input: {
        /**
         * The Tailscale Service name to delete.
         * @minLength 1
         */
        serviceName: string;
      };
      output: unknown | null;
    };
    /** Permanently delete a Tailscale user from the tailnet. */
    "tailscale.delete_user": {
      input: {
        /**
         * The Tailscale user ID to permanently delete.
         * @minLength 1
         */
        userId: string;
      };
      output: unknown | null;
    };
    /** Permanently delete a Tailscale webhook endpoint. */
    "tailscale.delete_webhook": {
      input: {
        /**
         * The webhook endpoint ID to delete.
         * @minLength 1
         */
        endpointId: string;
      };
      output: unknown | null;
    };
    /** Disable and remove the destination configuration for a Tailscale log stream. */
    "tailscale.disable_log_streaming": {
      input: {
        /** The Tailscale log type. */
        logType: "configuration" | "network";
      };
      output: unknown | null;
    };
    /** Immediately expire a device key and require the device to authenticate again. */
    "tailscale.expire_device_key": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
      };
      output: unknown | null;
    };
    /** Create or retrieve the AWS external ID used by Tailscale log streaming. */
    "tailscale.get_aws_external_id": {
      input: {
        /** Whether later reusable calls may receive this same external ID, until it is linked with an AWS account. */
        reusable?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get the account, support, and security contacts for the tailnet. */
    "tailscale.get_contacts": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get one Tailscale device by its preferred node ID or legacy device ID. */
    "tailscale.get_device": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
      };
      output: {
        /** The legacy numeric device identifier. */
        id?: string;
        /** The preferred stable device identifier. */
        nodeId?: string;
        /** The user who registered the device. */
        user?: string;
        /** The device MagicDNS name. */
        name?: string;
        /** The device hostname shown in the admin console. */
        hostname?: string;
        /** Tailscale IPv4 and IPv6 addresses assigned to the device. */
        addresses?: Array<string>;
        /** The installed Tailscale client version. */
        clientVersion?: string;
        /** The operating system reported by the device. */
        os?: string;
        /** When the device joined the tailnet. */
        created?: string;
        /** Whether the device recently connected to the Tailscale control server. */
        connectedToControl?: boolean;
        /** When the device last connected to the Tailscale control server. */
        lastSeen?: string;
        /** When the device key expires. */
        expires?: string;
        /** Whether the device is authorized to join the tailnet. */
        authorized?: boolean;
        /** Whether the device is shared into the tailnet. */
        isExternal?: boolean;
        /** Whether the device is ephemeral. */
        isEphemeral?: boolean;
        /** Whether a newer Tailscale client is available. */
        updateAvailable?: boolean;
        /** Whether key expiry is disabled for the device. */
        keyExpiryDisabled?: boolean;
        /** Whether the device blocks incoming Tailscale connections. */
        blocksIncomingConnections?: boolean;
        /** Subnet routes enabled for the device. */
        enabledRoutes?: Array<string>;
        /** Subnet routes advertised by the device. */
        advertisedRoutes?: Array<string>;
        /** ACL tags assigned to the device. */
        tags?: Array<string>;
        /** Whether Tailscale SSH is enabled for the device. */
        sshEnabled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get one Tailscale device share invite. */
    "tailscale.get_device_invite": {
      input: {
        /**
         * The Tailscale device invite ID.
         * @minLength 1
         */
        deviceInviteId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the posture attributes currently reported for a Tailscale device. */
    "tailscale.get_device_posture_attributes": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the complete DNS configuration for the tailnet. */
    "tailscale.get_dns_configuration": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get the tailnet DNS preferences, including MagicDNS state. */
    "tailscale.get_dns_preferences": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get metadata for a Tailscale trust credential or key. */
    "tailscale.get_key": {
      input: {
        /**
         * The Tailscale key ID.
         * @minLength 1
         */
        keyId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the potentially sensitive destination configuration for a Tailscale log stream. */
    "tailscale.get_log_streaming_configuration": {
      input: {
        /** The Tailscale log type. */
        logType: "configuration" | "network";
      };
      output: Record<string, unknown>;
    };
    /** Get the current publishing status for configuration or network log streaming. */
    "tailscale.get_log_streaming_status": {
      input: {
        /** The Tailscale log type. */
        logType: "configuration" | "network";
      };
      output: Record<string, unknown>;
    };
    /** Get a Tailscale OAuth application by app ID. */
    "tailscale.get_oauth_app": {
      input: {
        /**
         * The Tailscale OAuth app ID.
         * @minLength 1
         */
        appId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the current Tailscale policy file as JSON, optionally with validation details. */
    "tailscale.get_policy_file": {
      input: {
        /** Whether to include the encoded policy, warnings, and errors. */
        details?: boolean;
      };
      output: {
        /** The current Tailscale policy file or detailed validation result. */
        policy: Record<string, unknown>;
        etag?: string | null;
      };
    };
    /** Get one device posture integration by ID. */
    "tailscale.get_posture_integration": {
      input: {
        /**
         * The Tailscale posture integration ID.
         * @minLength 1
         */
        integrationId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a Tailscale Service by name. */
    "tailscale.get_service": {
      input: {
        /**
         * The Tailscale Service name.
         * @minLength 1
         */
        serviceName: string;
      };
      output: Record<string, unknown>;
    };
    /** Get whether a Service is approved on a specific device. */
    "tailscale.get_service_device_approval": {
      input: {
        /**
         * The Tailscale Service name.
         * @minLength 1
         */
        serviceName: string;
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the split DNS nameserver mapping for the tailnet. */
    "tailscale.get_split_dns": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get the tailnet feature, logging, networking, and policy settings visible to the OAuth client. */
    "tailscale.get_tailnet_settings": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get a Tailscale user by user ID. */
    "tailscale.get_user": {
      input: {
        /**
         * The Tailscale user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a Tailscale webhook endpoint by ID. */
    "tailscale.get_webhook": {
      input: {
        /**
         * The Tailscale webhook endpoint ID.
         * @minLength 1
         */
        endpointId: string;
      };
      output: Record<string, unknown>;
    };
    /** List configuration audit logs for an RFC 3339 time window, with optional filters. */
    "tailscale.list_configuration_audit_logs": {
      input: {
        /**
         * The start of the log window in RFC 3339 format.
         * @minLength 1
         */
        start: string;
        /**
         * The end of the log window in RFC 3339 format.
         * @minLength 1
         */
        end: string;
        /** Actor IDs or wildcard actor searches. */
        actors?: Array<string>;
        /** Target filters. */
        targets?: Array<string>;
        /** Audit event type filters. */
        events?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** List all share invites for a Tailscale device. */
    "tailscale.list_device_invites": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List the subnet routes advertised and enabled for a Tailscale device. */
    "tailscale.list_device_routes": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
      };
      output: Record<string, unknown>;
    };
    /** List all devices in the configured Tailscale tailnet. */
    "tailscale.list_devices": {
      input: Record<string, never>;
      output: {
        /** Devices in the connected tailnet. */
        devices: Array<{
          /** The legacy numeric device identifier. */
          id?: string;
          /** The preferred stable device identifier. */
          nodeId?: string;
          /** The user who registered the device. */
          user?: string;
          /** The device MagicDNS name. */
          name?: string;
          /** The device hostname shown in the admin console. */
          hostname?: string;
          /** Tailscale IPv4 and IPv6 addresses assigned to the device. */
          addresses?: Array<string>;
          /** The installed Tailscale client version. */
          clientVersion?: string;
          /** The operating system reported by the device. */
          os?: string;
          /** When the device joined the tailnet. */
          created?: string;
          /** Whether the device recently connected to the Tailscale control server. */
          connectedToControl?: boolean;
          /** When the device last connected to the Tailscale control server. */
          lastSeen?: string;
          /** When the device key expires. */
          expires?: string;
          /** Whether the device is authorized to join the tailnet. */
          authorized?: boolean;
          /** Whether the device is shared into the tailnet. */
          isExternal?: boolean;
          /** Whether the device is ephemeral. */
          isEphemeral?: boolean;
          /** Whether a newer Tailscale client is available. */
          updateAvailable?: boolean;
          /** Whether key expiry is disabled for the device. */
          keyExpiryDisabled?: boolean;
          /** Whether the device blocks incoming Tailscale connections. */
          blocksIncomingConnections?: boolean;
          /** Subnet routes enabled for the device. */
          enabledRoutes?: Array<string>;
          /** Subnet routes advertised by the device. */
          advertisedRoutes?: Array<string>;
          /** ACL tags assigned to the device. */
          tags?: Array<string>;
          /** Whether Tailscale SSH is enabled for the device. */
          sshEnabled?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the global DNS nameservers configured for the tailnet. */
    "tailscale.list_dns_nameservers": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List the DNS search paths configured for the tailnet. */
    "tailscale.list_dns_search_paths": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List trust credentials and keys visible to the OAuth client. */
    "tailscale.list_keys": {
      input: {
        /** Whether to include expired and revoked keys. */
        all?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List network flow logs for an RFC 3339 time window. */
    "tailscale.list_network_flow_logs": {
      input: {
        /**
         * The start of the log window in RFC 3339 format.
         * @minLength 1
         */
        start: string;
        /**
         * The end of the log window in RFC 3339 format.
         * @minLength 1
         */
        end: string;
      };
      output: Record<string, unknown>;
    };
    /** List OAuth applications configured for the tailnet. */
    "tailscale.list_oauth_apps": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List the device posture integrations configured for the tailnet. */
    "tailscale.list_posture_integrations": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List devices currently hosting a named Tailscale Service. */
    "tailscale.list_service_hosts": {
      input: {
        /**
         * The Tailscale Service name.
         * @minLength 1
         */
        serviceName: string;
      };
      output: Record<string, unknown>;
    };
    /** List the Services configured in the tailnet. */
    "tailscale.list_services": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List tailnet users with optional user-type and role filters. */
    "tailscale.list_users": {
      input: {
        /** User type filter. Defaults to all users, including users shared into the tailnet. */
        type?: "member" | "shared" | "all";
        /** User role filter. */
        role?: "owner" | "member" | "admin" | "it-admin" | "network-admin" | "billing-admin" | "auditor" | "all";
      };
      output: Record<string, unknown>;
    };
    /** List webhook endpoints configured for the tailnet. */
    "tailscale.list_webhooks": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Preview which rules in a proposed policy match a user or IP address and port without saving it. */
    "tailscale.preview_policy_rule_matches": {
      input: {
        /** The resource type to preview. */
        type: "user" | "ipport";
        /**
         * A user email or an IP address and port, depending on type.
         * @minLength 1
         */
        previewFor: string;
        /** The proposed JSON policy document to evaluate. */
        policy: Record<string, unknown>;
      };
      output: {
        /** The proposed policy rules matching the requested resource. */
        matches: Array<{
          /** Source entities affected by the rule. */
          users?: Array<string>;
          /** Destinations that can be accessed. */
          ports?: Array<string>;
          /** The rule's location in the policy file. */
          lineNumber?: number;
          [key: string]: unknown;
        }>;
        /** Echoes the resource type provided in the request. */
        type?: string;
        /** Echoes the previewed user or IP address and port provided in the request. */
        previewFor?: string;
      };
    };
    /** Resend the verification email for a tailnet contact. */
    "tailscale.resend_contact_verification_email": {
      input: {
        /** The contact category whose verification should be resent. */
        contactType: "account" | "support" | "security";
      };
      output: unknown | null;
    };
    /** Restore a suspended Tailscale user. */
    "tailscale.restore_user": {
      input: {
        /**
         * The suspended Tailscale user ID to restore.
         * @minLength 1
         */
        userId: string;
      };
      output: unknown | null;
    };
    /** Rotate a webhook signing secret and return the new secret once. */
    "tailscale.rotate_webhook_secret": {
      input: {
        /**
         * The webhook endpoint ID whose secret should be rotated.
         * @minLength 1
         */
        endpointId: string;
      };
      output: Record<string, unknown>;
    };
    /** Authorize or deauthorize a Tailscale device. */
    "tailscale.set_device_authorized": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /** Whether the device should be authorized. */
        authorized: boolean;
      };
      output: unknown | null;
    };
    /** Set the Tailscale IPv4 address for a device. */
    "tailscale.set_device_ip": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /**
         * The new Tailscale IPv4 address.
         * @minLength 1
         */
        ipv4: string;
      };
      output: unknown | null;
    };
    /** Enable or disable key expiry for a Tailscale device. */
    "tailscale.set_device_key_expiry": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /** Whether device key expiry should be disabled. */
        keyExpiryDisabled: boolean;
      };
      output: unknown | null;
    };
    /** Set a Tailscale device name, or reset it from the OS hostname with an empty name. */
    "tailscale.set_device_name": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /** The new device name, or an empty string to reset it. */
        name: string;
      };
      output: unknown | null;
    };
    /** Set one custom posture attribute on a Tailscale device. */
    "tailscale.set_device_posture_attribute": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /**
         * A custom posture attribute key in the custom: namespace.
         * @minLength 1
         */
        attributeKey: string;
        /** The attribute value. Tailscale accepts only a string, number, or boolean. */
        value: string | number | boolean;
        /** Optional RFC 3339 expiry time. */
        expiry?: string;
        /** Optional audit-log comment. */
        comment?: string;
      };
      output: Record<string, unknown>;
    };
    /** Replace the enabled subnet routes for a Tailscale device. */
    "tailscale.set_device_routes": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /** The complete list of subnet routes to enable. */
        routes: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Replace all ACL tags assigned to a Tailscale device. */
    "tailscale.set_device_tags": {
      input: {
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /** The complete replacement list of ACL tags. */
        tags: Array<string>;
      };
      output: unknown | null;
    };
    /** Replace the entire tailnet DNS configuration, including nameservers, split DNS, search paths, and preferences. */
    "tailscale.set_dns_configuration": {
      input: {
        /** The complete replacement DNS configuration. This replaces rather than merges: any section left out is cleared, so send the full configuration. */
        configuration: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Replace the global DNS nameservers configured for the tailnet. */
    "tailscale.set_dns_nameservers": {
      input: {
        /** The complete replacement list of DNS nameserver addresses. */
        dns: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Enable or disable MagicDNS for the tailnet. */
    "tailscale.set_dns_preferences": {
      input: {
        /** Whether MagicDNS should be enabled. */
        magicDNS: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Replace the DNS search paths configured for the tailnet. */
    "tailscale.set_dns_search_paths": {
      input: {
        /** The complete replacement list of DNS search domains. */
        searchPaths: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Create or replace a Tailscale log streaming destination configuration. */
    "tailscale.set_log_streaming_configuration": {
      input: {
        /** The Tailscale log type. */
        logType: "configuration" | "network";
        /** The complete destination configuration, including any required credentials. */
        configuration: Record<string, unknown>;
      };
      output: unknown | null;
    };
    /** Replace the Tailscale policy file after its embedded tests pass. */
    "tailscale.set_policy_file": {
      input: {
        /** The complete replacement Tailscale policy document. */
        policy: Record<string, unknown>;
        /**
         * The etag returned by get_policy_file. Rejects the write with HTTP 412 if the policy changed since that read, instead of overwriting the change. Omit to overwrite unconditionally.
         * @minLength 1
         */
        ifMatch?: string;
      };
      output: Record<string, unknown>;
    };
    /** Replace the entire tailnet split DNS configuration. */
    "tailscale.set_split_dns": {
      input: {
        /** The complete domain-to-resolver mapping. */
        splitDns: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Suspend a Tailscale user and their access to the tailnet. */
    "tailscale.suspend_user": {
      input: {
        /**
         * The Tailscale user ID to suspend.
         * @minLength 1
         */
        userId: string;
      };
      output: unknown | null;
    };
    /** Send a test event to a Tailscale webhook endpoint. */
    "tailscale.test_webhook": {
      input: {
        /**
         * The webhook endpoint ID to test.
         * @minLength 1
         */
        endpointId: string;
      };
      output: unknown | null;
    };
    /** Change the account, support, or security contact email for the tailnet. */
    "tailscale.update_contact": {
      input: {
        /** The contact category to update. */
        contactType: "account" | "support" | "security";
        /**
         * The replacement contact email address.
         * @minLength 1
         */
        email: string;
      };
      output: unknown | null;
    };
    /** Replace the mutable configuration of an OAuth or federated Tailscale trust credential. */
    "tailscale.update_key": {
      input: {
        /**
         * The Tailscale key ID.
         * @minLength 1
         */
        keyId: string;
        /** The replacement key description, scopes, tags, and identity configuration. */
        key: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Replace the configuration of a Tailscale OAuth application. */
    "tailscale.update_oauth_app": {
      input: {
        /**
         * The Tailscale OAuth app ID.
         * @minLength 1
         */
        appId: string;
        /** The replacement OAuth app configuration. */
        app: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Update a device posture integration and optionally replace its client secret. */
    "tailscale.update_posture_integration": {
      input: {
        /**
         * The Tailscale posture integration ID.
         * @minLength 1
         */
        integrationId: string;
        /** The posture integration fields to update. */
        integration: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Create or replace a named Tailscale Service definition. */
    "tailscale.update_service": {
      input: {
        /**
         * The Tailscale Service name.
         * @minLength 1
         */
        serviceName: string;
        /** The Service addresses, ports, tags, and comment. */
        service: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Approve or revoke approval for a Service on a device. */
    "tailscale.update_service_device_approval": {
      input: {
        /**
         * The Tailscale Service name.
         * @minLength 1
         */
        serviceName: string;
        /**
         * The preferred nodeId or legacy id of the device.
         * @minLength 1
         */
        deviceId: string;
        /** Whether the Service should be approved on the device. */
        approved: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Merge domain-to-resolver entries into the tailnet split DNS configuration. */
    "tailscale.update_split_dns": {
      input: {
        /** Domain names mapped to resolver address lists. */
        splitDns: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Update reversible feature, logging, networking, or policy-link settings for the tailnet. */
    "tailscale.update_tailnet_settings": {
      input: {
        /** The tailnet settings fields to update. */
        settings: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Change a Tailscale user's administrative role. */
    "tailscale.update_user_role": {
      input: {
        /**
         * The Tailscale user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The new Tailscale user role.
         * @minLength 1
         */
        role: string;
      };
      output: unknown | null;
    };
    /** Replace the subscribed events for a Tailscale webhook endpoint. */
    "tailscale.update_webhook": {
      input: {
        /**
         * The Tailscale webhook endpoint ID.
         * @minLength 1
         */
        endpointId: string;
        /** The webhook fields to update. */
        webhook: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Validate an AWS IAM role trust policy against a Tailscale external ID. */
    "tailscale.validate_aws_external_id": {
      input: {
        /**
         * The Tailscale AWS external ID.
         * @minLength 1
         */
        externalId: string;
        /**
         * The AWS IAM role ARN to validate.
         * @minLength 1
         */
        roleArn: string;
      };
      output: unknown | null;
    };
    /** Validate a proposed policy file or run ACL tests without changing the tailnet policy. */
    "tailscale.validate_policy_file": {
      input: {
        /** A JSON policy document, its JSON string representation, or an array of ACL tests. */
        validation: unknown;
      };
      output: Record<string, unknown>;
    };
  }
}
