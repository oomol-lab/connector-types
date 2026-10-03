import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** v1 only: accept an organization invitation. */
    "zerotier.accept_invitation": {
      input: {
        /**
         * The invitation ID.
         * @minLength 1
         */
        invitationId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: add roles for a principal on an org, network group, or network. */
    "zerotier.add_iam": {
      input: {
        /** The ZeroTier v2 resource kind the IAM assignment applies to. */
        resourceType: "org" | "network-group" | "network";
        /**
         * The resource ID.
         * @minLength 1
         */
        resourceId: string;
        /**
         * Email address of the user or service account.
         * @format email
         */
        principal: string;
        /** IAM roles to add. */
        roles: Array<"Owner" | "Admin" | "Editor" | "Viewer" | "NetworkGroupAdmin" | "NetworkGroupEditor" | "NetworkGroupViewer" | "NetworkAdmin" | "NetworkEditor" | "NetworkViewer">;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: add multiple members to a network in one call. */
    "zerotier.add_members": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /** Members to add. */
        members: Array<{
          /**
           * The member device ID (10-character hex string).
           * @minLength 10
           * @maxLength 10
           * @pattern ^[0-9a-fA-F]{10}$
           */
          deviceId: string;
          /** The display name to set. */
          name?: string;
          /** The description to set (may be an empty string). */
          description?: string;
          /** Whether this device acts as an active bridge. */
          activeBridge?: boolean;
          /** Disable automatic IP assignment. */
          noAutoAssignIps?: boolean;
          /** Static IPv4 assignments. */
          ipv4Assignments?: Array<string>;
          /** Static IPv6 assignments. */
          ipv6Assignments?: Array<string>;
        }>;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v1 only: register an API token for a user. The caller supplies the token value (get_random_token generates one); it cannot be retrieved after it is set. */
    "zerotier.add_user_token": {
      input: {
        /**
         * The user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * A name for the new token.
         * @minLength 1
         */
        tokenName: string;
        /**
         * The API token value to register, at least 32 characters.
         * @minLength 32
         */
        token: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Authorize one member on a ZeroTier network. */
    "zerotier.authorize_member": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /**
         * The member device/node ID (10-character hex string).
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: authorize multiple members on a network in one call. */
    "zerotier.authorize_members": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /** Member device IDs (10-character hex strings). */
        deviceIds: Array<string>;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: check whether the authenticated principal holds permissions on resources. */
    "zerotier.check_permissions": {
      input: {
        /** Permission checks to perform. */
        checks: Array<{
          /**
           * The permission name to check.
           * @minLength 1
           */
          permission: string;
          /** The type of resource to check permissions for. */
          resourceType: "org" | "network_group" | "network";
          /**
           * The resource ID.
           * @minLength 1
           */
          resourceId: string;
        }>;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v2 only: create an API key for a service account. The secret is returned only once. */
    "zerotier.create_api_key": {
      input: {
        /**
         * The service account ID.
         * @minLength 1
         */
        serviceAccountId: string;
        /**
         * The key expiration time (RFC 3339).
         * @format date-time
         */
        expires: string;
        /** The description to set (may be an empty string). */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v1 only: send an organization invitation to an email address. */
    "zerotier.create_invitation": {
      input: {
        /**
         * The email address to invite.
         * @format email
         */
        email: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Create a ZeroTier network. For v1 sends {config, description} and rejects networkGroupId; for v2 sends {name, description, config} and requires networkGroupId (the group the network is created under) and name. */
    "zerotier.create_network": {
      input: {
        /** v2 only, required on v2 and rejected on v1: the network group ID to create the network under. */
        networkGroupId?: string;
        /** The network name (required for v2). */
        name?: string;
        /** The description to set (may be an empty string). */
        description?: string;
        /** Network configuration. v1 accepts name/private/enableBroadcast/mtu/multicastLimit/routes/ipAssignmentPools/v4AssignMode/v6AssignMode/dns; v2 accepts private/enableBroadcast/mtu/multicastLimit/routes/v4Subnet/v4IpAssignmentPools/v4AssignmentMode/v6Subnet/v6IpAssignmentPools/v6AssignmentMode/dns. */
        config?: Record<string, unknown>;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: create a network group inside an organization. */
    "zerotier.create_network_group": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
        /**
         * The group name.
         * @minLength 1
         */
        name: string;
        /** The description to set (may be an empty string). */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: create a service account in an organization. */
    "zerotier.create_service_account": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
        /**
         * The service account ID.
         * @minLength 1
         */
        id: string;
        /**
         * The service account name.
         * @minLength 1
         */
        name: string;
        /** The description to set (may be an empty string). */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: create a webhook for an organization. */
    "zerotier.create_webhook": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
        /**
         * The HTTPS endpoint URL that receives webhook events (FQDN only, no raw IPs or private ranges).
         * @format uri
         */
        url: string;
        /**
         * ZeroTier event types to subscribe to.
         * @minItems 1
         */
        eventList: Array<string>;
        /**
         * The webhook description (at most 255 characters).
         * @maxLength 255
         */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Revoke authorization for one member on a ZeroTier network. */
    "zerotier.deauthorize_member": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /**
         * The member device/node ID (10-character hex string).
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: de-authorize multiple members on a network in one call. */
    "zerotier.deauthorize_members": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /** Member device IDs (10-character hex strings). */
        deviceIds: Array<string>;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v1 only: decline or cancel an organization invitation. */
    "zerotier.decline_invitation": {
      input: {
        /**
         * The invitation ID.
         * @minLength 1
         */
        invitationId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: delete an API key. */
    "zerotier.delete_api_key": {
      input: {
        /**
         * The API key ID.
         * @minLength 1
         */
        apiKeyId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: permanently delete the authenticated user account. */
    "zerotier.delete_current_user": {
      input: Record<string, never>;
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** Remove a member from a ZeroTier network. */
    "zerotier.delete_member": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /**
         * The member device/node ID (10-character hex string).
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** Permanently delete a ZeroTier network and all its members. */
    "zerotier.delete_network": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: permanently delete a network group. Upstream also deletes all networks in the group. */
    "zerotier.delete_network_group": {
      input: {
        /**
         * The network group ID.
         * @minLength 1
         */
        networkGroupId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: permanently delete a service account and all of its API keys. */
    "zerotier.delete_service_account": {
      input: {
        /**
         * The service account ID.
         * @minLength 1
         */
        serviceAccountId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v1 only: permanently delete a ZeroTier user account by ID. Upstream also deletes every network the user owns; this cannot be undone. */
    "zerotier.delete_user": {
      input: {
        /**
         * The user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v1 only: delete one of a user's API tokens by name. */
    "zerotier.delete_user_token": {
      input: {
        /**
         * The user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The token name to delete.
         * @minLength 1
         */
        tokenName: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: delete a webhook. */
    "zerotier.delete_webhook": {
      input: {
        /**
         * The webhook ID.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: revoke an overlap (previous) webhook secret by ID before its grace window ends. The active primary secret cannot be deleted (upstream returns 400); rotate first. */
    "zerotier.delete_webhook_secret": {
      input: {
        /**
         * The webhook secret ID.
         * @minLength 1
         */
        webhookSecretId: string;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: get one API key's metadata by ID. */
    "zerotier.get_api_key": {
      input: {
        /**
         * The API key ID.
         * @minLength 1
         */
        apiKeyId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only (beta): get a network's flow rules. */
    "zerotier.get_flow_rules": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: list IAM role assignments on an org, network group, or network. */
    "zerotier.get_iam": {
      input: {
        /** The ZeroTier v2 resource kind the IAM assignment applies to. */
        resourceType: "org" | "network-group" | "network";
        /**
         * The resource ID.
         * @minLength 1
         */
        resourceId: string;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v1 only: get one organization invitation by ID. */
    "zerotier.get_invitation": {
      input: {
        /**
         * The invitation ID.
         * @minLength 1
         */
        invitationId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Get one member of a ZeroTier network, including authorization and IP assignment state. */
    "zerotier.get_member": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /**
         * The member device/node ID (10-character hex string).
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Get one ZeroTier network by ID, including its config (v1 responses also include member counts). */
    "zerotier.get_network": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: get one network group by ID. */
    "zerotier.get_network_group": {
      input: {
        /**
         * The network group ID.
         * @minLength 1
         */
        networkGroupId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Get a ZeroTier organization. For v1, returns the current user's org when orgId is omitted, or /org/{orgId}. For v2, uses orgId or falls back to the connection's orgId; one of them is required. */
    "zerotier.get_org": {
      input: {
        /** The organization ID. v2 falls back to the connection's orgId when omitted; v1 does not. */
        orgId?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: get the IAM tree of an organization (groups, networks, principals, roles). */
    "zerotier.get_org_iam_tree": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: get an organization's subscription plan and entitlements. */
    "zerotier.get_org_subscription": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v1 only: get a server-generated random token value. */
    "zerotier.get_random_token": {
      input: Record<string, never>;
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: get one service account by ID, including its API keys. */
    "zerotier.get_service_account": {
      input: {
        /**
         * The service account ID.
         * @minLength 1
         */
        serviceAccountId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v1 only: get ZeroTier Legacy Central status, including the authenticated user, version, and uptime. */
    "zerotier.get_status": {
      input: Record<string, never>;
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v1 only: get a ZeroTier user by ID. */
    "zerotier.get_user": {
      input: {
        /**
         * The user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: get one webhook by ID. */
    "zerotier.get_webhook": {
      input: {
        /**
         * The webhook ID.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: invite email addresses to an organization. */
    "zerotier.invite_users": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
        /** Email addresses to invite. */
        emails: Array<string>;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v1 only: list organization invitations for the current user. */
    "zerotier.list_invitations": {
      input: Record<string, never>;
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** List all members (devices) joined to a ZeroTier network. */
    "zerotier.list_members": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v2 only: list networks inside one network group. */
    "zerotier.list_network_group_networks": {
      input: {
        /**
         * The network group ID.
         * @minLength 1
         */
        networkGroupId: string;
        /** Include device statistics. */
        stats?: boolean;
        /** Permission names to check on each network. */
        permissionCheck?: Array<string>;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v2 only: list network groups, optionally filtered by organization. */
    "zerotier.list_network_groups": {
      input: {
        /** Organization ID to filter by. Falls back to the connection's orgId when omitted. */
        orgId?: string;
        /** Include device and network statistics. */
        stats?: boolean;
        /** Permission names to check on each group. */
        permissionCheck?: Array<string>;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** List ZeroTier networks visible to the configured token. Works on both API versions; orgId, stats, and permissionCheck are v2 only and rejected on v1, which always lists every network the token can access. */
    "zerotier.list_networks": {
      input: {
        /** v2 only, rejected on v1: organization ID to filter by. Falls back to the connection's orgId field when omitted. */
        orgId?: string;
        /** v2 only, rejected on v1: include device statistics for each network. */
        stats?: boolean;
        /** v2 only, rejected on v1: permission names to check for each network; results include a permissions map. */
        permissionCheck?: Array<string>;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v1 only: list user members of an organization. */
    "zerotier.list_org_members": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v2 only: list organizations the service account can access. */
    "zerotier.list_orgs": {
      input: {
        /** Permission names to check on each organization. */
        permissionCheck?: Array<string>;
        /** Limit to recently active orgs plus the listed org IDs. */
        latest?: Array<string>;
        /** Include aggregate statistics. */
        stats?: boolean;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v2 only: list service accounts in an organization. */
    "zerotier.list_service_accounts": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v2 only: list webhooks in an organization. */
    "zerotier.list_webhooks": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v2 only: reject one member on a network. */
    "zerotier.reject_member": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /**
         * The member device/node ID (10-character hex string).
         * @minLength 1
         */
        memberId: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: reject multiple members on a network in one call. */
    "zerotier.reject_members": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /** Member device IDs (10-character hex strings). */
        deviceIds: Array<string>;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: remove roles from a principal on an org, network group, or network. */
    "zerotier.remove_iam": {
      input: {
        /** The ZeroTier v2 resource kind the IAM assignment applies to. */
        resourceType: "org" | "network-group" | "network";
        /**
         * The resource ID.
         * @minLength 1
         */
        resourceId: string;
        /**
         * Email address of the user or service account.
         * @format email
         */
        principal: string;
        /** IAM roles to remove. */
        roles: Array<"Owner" | "Admin" | "Editor" | "Viewer" | "NetworkGroupAdmin" | "NetworkGroupEditor" | "NetworkGroupViewer" | "NetworkAdmin" | "NetworkEditor" | "NetworkViewer">;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: remove multiple members from a network in one call. */
    "zerotier.remove_members": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /** Member device IDs (10-character hex strings). */
        deviceIds: Array<string>;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: replace all IAM assignments on an org, network group, or network. Existing assignments missing from the list are removed, so an empty list strips every role. */
    "zerotier.replace_iam": {
      input: {
        /** The ZeroTier v2 resource kind the IAM assignment applies to. */
        resourceType: "org" | "network-group" | "network";
        /**
         * The resource ID.
         * @minLength 1
         */
        resourceId: string;
        /** The complete principal–roles assignment list. */
        assignments: Array<{
          /**
           * Email address of the user or service account.
           * @format email
           */
          principal: string;
          /** One or more ZeroTier IAM roles. */
          roles: Array<"Owner" | "Admin" | "Editor" | "Viewer" | "NetworkGroupAdmin" | "NetworkGroupEditor" | "NetworkGroupViewer" | "NetworkAdmin" | "NetworkEditor" | "NetworkViewer">;
        }>;
      };
      output: {
        /** Whether the ZeroTier API operation completed successfully. */
        ok: boolean;
        /** The ZeroTier API response payload when one was returned. */
        result: unknown;
      };
    };
    /** v2 only: rotate a webhook's signing secret. */
    "zerotier.rotate_webhook_secret": {
      input: {
        /**
         * The webhook ID.
         * @minLength 1
         */
        webhookId: string;
        /**
         * Hours the previous secret stays valid after rotation (0 = immediate cutover, at most 720, default 24).
         * @minimum 0
         * @maximum 720
         */
        overlapHours?: number;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: search org users by email term. */
    "zerotier.search_principals": {
      input: {
        /**
         * The ZeroTier organization ID.
         * @minLength 1
         */
        orgId: string;
        /**
         * Search term matched against principal email addresses.
         * @minLength 1
         */
        search: string;
        /** Optional principal-type filters (upstream accepts only "user"). */
        principalType?: Array<"user">;
      };
      output: {
        /** The ZeroTier API resources returned for this request. */
        items: Array<unknown>;
        /** v2 only: aggregate statistics returned when stats was requested. */
        stats: unknown;
      };
    };
    /** v1 only: replace a user's permission set on a network. The call sets all four flags, so omitted flags are sent as false. */
    "zerotier.set_network_user_permissions": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /**
         * The user ID to set permissions for.
         * @minLength 1
         */
        userId: string;
        /** Read permission (r): view network settings. Omitted means false. */
        read?: boolean;
        /** Authorize permission (a): authorize new members. Omitted means false. */
        authorize?: boolean;
        /** Modify permission (m): change network settings. Omitted means false. */
        modify?: boolean;
        /** Delete permission (d): remove members. Omitted means false. */
        delete?: boolean;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: update an API key's description. */
    "zerotier.update_api_key": {
      input: {
        /**
         * The API key ID.
         * @minLength 1
         */
        apiKeyId: string;
        /** The description to set (may be an empty string). */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: update the authenticated user's profile. */
    "zerotier.update_current_user": {
      input: {
        /** The first name to set. */
        firstName?: string;
        /** The last name to set. */
        lastName?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only (beta): update a network's flow rules (custom rule source or isolation config). */
    "zerotier.update_flow_rules": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /** The flow rule kind. */
        kind: "custom" | "isolation";
        /** The flow rule config. For custom rules: {source: '<rules source>'}. For isolation: {allowedServices, blockNonIP, enableServiceFilter, excludedDeviceIds}. */
        config?: Record<string, unknown>;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Update a network member. v1 fields: name, description, authorized, activeBridge, noAutoAssignIps, ipAssignments. v2 fields: name, description, activeBridge, noAutoAssignIps, ipv4Assignments, ipv6Assignments. Fields from the other API version are rejected; on v2 change authorization with authorize_member or deauthorize_member. */
    "zerotier.update_member": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /**
         * The member device/node ID (10-character hex string).
         * @minLength 1
         */
        memberId: string;
        /** The display name to set. */
        name?: string;
        /** The description to set (may be an empty string). */
        description?: string;
        /** v1 only: whether the member is authorized on the network. */
        authorized?: boolean;
        /** Whether this device acts as an active bridge. */
        activeBridge?: boolean;
        /** Disable automatic IP assignment for this member. */
        noAutoAssignIps?: boolean;
        /** v1 only: static IP assignments replacing the current list. */
        ipAssignments?: Array<string>;
        /** v2 only: static IPv4 assignments. */
        ipv4Assignments?: Array<string>;
        /** v2 only: static IPv6 assignments. */
        ipv6Assignments?: Array<string>;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** Update a ZeroTier network's name, description, and/or configuration fields. */
    "zerotier.update_network": {
      input: {
        /**
         * The ZeroTier network ID (16-character hex string).
         * @minLength 1
         */
        networkId: string;
        /** The display name to set. */
        name?: string;
        /** The description to set (may be an empty string). */
        description?: string;
        /** Partial network configuration. v1 fields: name/private/enableBroadcast/mtu/multicastLimit/routes/ipAssignmentPools/v4AssignMode/v6AssignMode/dns; v2 fields: private/enableBroadcast/mtu/multicastLimit/routes/v4Subnet/v4IpAssignmentPools/v4AssignmentMode/v6Subnet/v6IpAssignmentPools/v6AssignmentMode/dns. */
        config?: Record<string, unknown>;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: rename or re-describe a network group. */
    "zerotier.update_network_group": {
      input: {
        /**
         * The network group ID.
         * @minLength 1
         */
        networkGroupId: string;
        /** The display name to set. */
        name?: string;
        /** The description to set (may be an empty string). */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: update a service account's name or description. */
    "zerotier.update_service_account": {
      input: {
        /**
         * The service account ID.
         * @minLength 1
         */
        serviceAccountId: string;
        /** The display name to set. */
        name?: string;
        /** The description to set (may be an empty string). */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v1 only: update a user's profile fields. */
    "zerotier.update_user": {
      input: {
        /**
         * The user ID.
         * @minLength 1
         */
        userId: string;
        /** The display name to set. */
        displayName?: string;
        /** The SMS number to set (deprecated by ZeroTier). */
        smsNumber?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
    /** v2 only: update a webhook's URL, event list, or description. */
    "zerotier.update_webhook": {
      input: {
        /**
         * The webhook ID.
         * @minLength 1
         */
        webhookId: string;
        /**
         * The HTTPS endpoint URL that receives webhook events.
         * @format uri
         */
        url?: string;
        /**
         * ZeroTier event types to subscribe to.
         * @minItems 1
         */
        eventList?: Array<string>;
        /**
         * The webhook description (at most 255 characters).
         * @maxLength 255
         */
        description?: string;
      };
      output: {
        /** The ZeroTier API response payload for the requested resource. */
        result: unknown;
      };
    };
  }
}
