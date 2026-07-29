import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Vultr VPS instance from an OS, ISO, snapshot, application, or application image. */
    "vultr.create_instance": {
      input: {
        /**
         * The region ID where the instance will be deployed.
         * @minLength 1
         */
        region: string;
        /**
         * The VPS plan ID for the instance.
         * @minLength 1
         */
        plan: string;
        /** The operating system ID used to deploy the instance. */
        osId?: number;
        /**
         * The ISO ID used to deploy the instance.
         * @minLength 1
         */
        isoId?: string;
        /**
         * The snapshot ID used to deploy the instance.
         * @minLength 1
         */
        snapshotId?: string;
        /** The Marketplace application ID used to deploy the instance. */
        appId?: number;
        /**
         * The Marketplace application image ID used to deploy the instance.
         * @minLength 1
         */
        imageId?: string;
        /**
         * The user-supplied instance label.
         * @minLength 1
         */
        label?: string;
        /**
         * The hostname assigned during deployment.
         * @minLength 1
         */
        hostname?: string;
        /** Whether to enable IPv6. */
        enableIpv6?: boolean;
        /** Whether to omit public IPv4 when IPv6 is enabled. */
        disablePublicIpv4?: boolean;
        /** The automatic backup setting. */
        backups?: "enabled" | "disabled";
        /** Whether to enable paid DDoS protection. */
        ddosProtection?: boolean;
        /** Whether Vultr should email after deployment. */
        activationEmail?: boolean;
        /**
         * The firewall group ID to attach.
         * @minLength 1
         */
        firewallGroupId?: string;
        /**
         * The SSH key IDs to install.
         * @minItems 1
         */
        sshKeyIds?: Array<string>;
        /**
         * The VPC IDs to attach.
         * @minItems 1
         */
        vpcIds?: Array<string>;
        /**
         * The tags to apply to the instance.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The base64-encoded user data for the instance.
         * @minLength 1
         */
        userData?: string;
        /** The Linux login user scheme. */
        userScheme?: "root" | "limited";
      };
      output: {
        /** A Vultr VPS instance. */
        instance: {
          /**
           * The Vultr instance ID.
           * @format uuid
           */
          id?: string;
          /** The installed operating system name. */
          os?: string;
          /** The installed operating system ID. */
          os_id?: number;
          /**
           * The memory in MB.
           * @minimum 0
           */
          ram?: number;
          /**
           * The disk capacity in GB.
           * @minimum 0
           */
          disk?: number;
          /** The main IPv4 address. */
          main_ip?: string;
          /**
           * The number of virtual CPUs.
           * @minimum 0
           */
          vcpu_count?: number;
          /** The Vultr region ID. */
          region?: string;
          /** The Vultr plan ID. */
          plan?: string;
          /** The timestamp when Vultr created the instance. */
          date_created?: string;
          /** The current subscription or provisioning status. */
          status?: string;
          /** The current power state. */
          power_status?: string;
          /** The detailed server provisioning state. */
          server_status?: string;
          /** The instance hostname. */
          hostname?: string;
          /** The user-supplied instance label. */
          label?: string;
          /** The private IP address when a VPC is attached. */
          internal_ip?: string;
          /** The attached firewall group ID. */
          firewall_group_id?: string;
          /** The snapshot used to deploy this instance. */
          snapshot_id?: string;
          /** The enabled instance features. */
          features?: Array<string>;
          /** The tags applied to the instance. */
          tags?: Array<string>;
          /** The deployment password when Vultr still returns it. */
          default_password?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a Vultr VPS instance. */
    "vultr.delete_instance": {
      input: {
        /**
         * The Vultr instance ID.
         * @format uuid
         */
        instanceId: string;
      };
      output: {
        /** Whether Vultr accepted the deletion. */
        deleted: true;
        /**
         * The Vultr instance ID.
         * @format uuid
         */
        instanceId: string;
      };
    };
    /** Retrieve the connected Vultr account profile, ACL permissions, balance, and billing summary. */
    "vultr.get_account": {
      input: Record<string, never>;
      output: {
        /** The Vultr account and billing profile. */
        account: {
          /**
           * The account user name.
           * @minLength 1
           */
          name?: string;
          /**
           * The account email address.
           * @format email
           */
          email?: string;
          /** The ACL permissions granted to the connected user. */
          acls?: Array<string>;
          /** The current account balance. */
          balance?: number;
          /** The current month's unbilled charges. */
          pending_charges?: number;
          /** The date of the last payment. */
          last_payment_date?: string;
          /** The amount of the last payment. */
          last_payment_amount?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Vultr VPS instance by ID. */
    "vultr.get_instance": {
      input: {
        /**
         * The Vultr instance ID.
         * @format uuid
         */
        instanceId: string;
      };
      output: {
        /** A Vultr VPS instance. */
        instance: {
          /**
           * The Vultr instance ID.
           * @format uuid
           */
          id?: string;
          /** The installed operating system name. */
          os?: string;
          /** The installed operating system ID. */
          os_id?: number;
          /**
           * The memory in MB.
           * @minimum 0
           */
          ram?: number;
          /**
           * The disk capacity in GB.
           * @minimum 0
           */
          disk?: number;
          /** The main IPv4 address. */
          main_ip?: string;
          /**
           * The number of virtual CPUs.
           * @minimum 0
           */
          vcpu_count?: number;
          /** The Vultr region ID. */
          region?: string;
          /** The Vultr plan ID. */
          plan?: string;
          /** The timestamp when Vultr created the instance. */
          date_created?: string;
          /** The current subscription or provisioning status. */
          status?: string;
          /** The current power state. */
          power_status?: string;
          /** The detailed server provisioning state. */
          server_status?: string;
          /** The instance hostname. */
          hostname?: string;
          /** The user-supplied instance label. */
          label?: string;
          /** The private IP address when a VPC is attached. */
          internal_ip?: string;
          /** The attached firewall group ID. */
          firewall_group_id?: string;
          /** The snapshot used to deploy this instance. */
          snapshot_id?: string;
          /** The enabled instance features. */
          features?: Array<string>;
          /** The tags applied to the instance. */
          tags?: Array<string>;
          /** The deployment password when Vultr still returns it. */
          default_password?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List DNS records for one domain in the connected Vultr account. */
    "vultr.list_domain_records": {
      input: {
        /**
         * The registered domain whose records should be listed.
         * @minLength 1
         */
        domain: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Vultr DNS records in this page. */
        records: Array<{
          /**
           * The DNS record ID.
           * @format uuid
           */
          id?: string;
          /** The DNS record type. */
          type?: string;
          /** The record hostname. */
          name?: string;
          /** The record data. */
          data?: string;
          /**
           * The record priority when applicable.
           * @minimum 0
           */
          priority?: number;
          /**
           * The time to live in seconds.
           * @minimum 0
           */
          ttl?: number;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List DNS domains in the connected Vultr account. */
    "vultr.list_domains": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Vultr DNS domains in this page. */
        domains: Array<{
          /**
           * The registered domain name.
           * @minLength 1
           */
          domain?: string;
          /** The timestamp when Vultr created the DNS domain. */
          date_created?: string;
          /** The DNSSEC status. */
          dns_sec?: string;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List firewall groups in the connected Vultr account. */
    "vultr.list_firewall_groups": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Vultr firewall groups in this page. */
        firewallGroups: Array<{
          /**
           * The firewall group ID.
           * @format uuid
           */
          id?: string;
          /** The firewall group description. */
          description?: string;
          /** The timestamp when Vultr created the firewall group. */
          date_created?: string;
          /** The timestamp when Vultr last modified the firewall group. */
          date_modified?: string;
          /**
           * The number of attached instances.
           * @minimum 0
           */
          instance_count?: number;
          /**
           * The number of firewall rules.
           * @minimum 0
           */
          rule_count?: number;
          /**
           * The maximum number of firewall rules.
           * @minimum 0
           */
          max_rule_count?: number;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Vultr VPS instances with cursor pagination and common filters. */
    "vultr.list_instances": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Only return instances with this label.
         * @minLength 1
         */
        label?: string;
        /**
         * Only return the instance with this main IP.
         * @minLength 1
         */
        mainIp?: string;
        /**
         * Only return instances in this region ID.
         * @minLength 1
         */
        region?: string;
        /**
         * Only return instances attached to this firewall group ID.
         * @minLength 1
         */
        firewallGroupId?: string;
        /**
         * Only return instances with this hostname.
         * @minLength 1
         */
        hostname?: string;
        /** Whether to include pending charges for each instance. */
        showPendingCharges?: boolean;
      };
      output: {
        /** The Vultr instances in this page. */
        instances: Array<{
          /**
           * The Vultr instance ID.
           * @format uuid
           */
          id?: string;
          /** The installed operating system name. */
          os?: string;
          /** The installed operating system ID. */
          os_id?: number;
          /**
           * The memory in MB.
           * @minimum 0
           */
          ram?: number;
          /**
           * The disk capacity in GB.
           * @minimum 0
           */
          disk?: number;
          /** The main IPv4 address. */
          main_ip?: string;
          /**
           * The number of virtual CPUs.
           * @minimum 0
           */
          vcpu_count?: number;
          /** The Vultr region ID. */
          region?: string;
          /** The Vultr plan ID. */
          plan?: string;
          /** The timestamp when Vultr created the instance. */
          date_created?: string;
          /** The current subscription or provisioning status. */
          status?: string;
          /** The current power state. */
          power_status?: string;
          /** The detailed server provisioning state. */
          server_status?: string;
          /** The instance hostname. */
          hostname?: string;
          /** The user-supplied instance label. */
          label?: string;
          /** The private IP address when a VPC is attached. */
          internal_ip?: string;
          /** The attached firewall group ID. */
          firewall_group_id?: string;
          /** The snapshot used to deploy this instance. */
          snapshot_id?: string;
          /** The enabled instance features. */
          features?: Array<string>;
          /** The tags applied to the instance. */
          tags?: Array<string>;
          /** The deployment password when Vultr still returns it. */
          default_password?: string;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List operating system images available for Vultr instance deployment. */
    "vultr.list_operating_systems": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Vultr operating systems in this page. */
        operatingSystems: Array<{
          /** The operating system ID. */
          id?: number;
          /** The operating system name. */
          name?: string;
          /** The CPU architecture. */
          arch?: string;
          /** The operating system family. */
          family?: string;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Vultr VPS plans with plan-type and Windows compatibility filters. */
    "vultr.list_plans": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
        /** The Vultr plan type to return. */
        type?: "all" | "vc2" | "vdc" | "vhf" | "vhp" | "voc" | "voc-g" | "voc-c" | "voc-m" | "voc-s" | "vcg";
        /** Return only plans that support Windows. */
        operatingSystem?: "windows";
      };
      output: {
        /** The Vultr plans in this page. */
        plans: Array<{
          /**
           * The unique plan ID.
           * @minLength 1
           */
          id?: string;
          /** The plan name. */
          name?: string;
          /**
           * The number of virtual CPUs.
           * @minimum 0
           */
          vcpu_count?: number;
          /**
           * The memory in MB.
           * @minimum 0
           */
          ram?: number;
          /**
           * The disk capacity in GB.
           * @minimum 0
           */
          disk?: number;
          /**
           * The number of included disks.
           * @minimum 0
           */
          disk_count?: number;
          /**
           * The monthly bandwidth quota in GB.
           * @minimum 0
           */
          bandwidth?: number;
          /** The monthly price in US dollars. */
          monthly_cost?: number;
          /** The hourly price in US dollars. */
          hourly_cost?: number;
          /** The Vultr plan type. */
          type?: string;
          /** The region IDs where the plan is available. */
          locations?: Array<string>;
          /** Location-specific pricing keyed by region ID. */
          location_cost?: Record<string, Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Vultr deployment regions and the features available in each region. */
    "vultr.list_regions": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Vultr regions in this page. */
        regions: Array<{
          /**
           * The unique region ID.
           * @minLength 1
           */
          id?: string;
          /** The region city. */
          city?: string;
          /** The two-letter country code. */
          country?: string;
          /** The continent name. */
          continent?: string;
          /** The product features available in the region. */
          options?: Array<string>;
          /** The connectivity options available in the region. */
          connectivity?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List snapshots in the connected Vultr account. */
    "vultr.list_snapshots": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The next or previous cursor from Vultr pagination metadata.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Only return snapshots matching this description.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** The Vultr snapshots in this page. */
        snapshots: Array<{
          /**
           * The snapshot ID.
           * @format uuid
           */
          id?: string;
          /** The timestamp when Vultr created the snapshot. */
          date_created?: string;
          /** The user-supplied snapshot description. */
          description?: string;
          /**
           * The snapshot size in bytes.
           * @minimum 0
           */
          size?: number;
          /**
           * The compressed snapshot size in bytes.
           * @minimum 0
           */
          compressed_size?: number;
          /** The snapshot status. */
          status?: string;
          /** The operating system ID associated with the snapshot. */
          os_id?: number;
          /** The application ID associated with the snapshot. */
          app_id?: number;
          [key: string]: unknown;
        }>;
        /** Vultr cursor pagination metadata. */
        meta?: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          total?: number;
          /** The cursors for adjacent result pages. */
          links?: {
            /** The cursor for the next page, or an empty string. */
            next?: string;
            /** The cursor for the previous page, or an empty string. */
            prev?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Start, reboot, or halt a Vultr VPS instance. */
    "vultr.manage_instance_power": {
      input: {
        /**
         * The Vultr instance ID.
         * @format uuid
         */
        instanceId: string;
        /** The power operation to perform. */
        operation: "start" | "reboot" | "halt";
      };
      output: {
        /** Whether Vultr accepted the power operation. */
        accepted: true;
        /**
         * The Vultr instance ID.
         * @format uuid
         */
        instanceId: string;
        /** The accepted power operation. */
        operation: "start" | "reboot" | "halt";
      };
    };
    /** Update common settings on a Vultr VPS instance without reinstalling it. */
    "vultr.update_instance": {
      input: {
        /**
         * The Vultr instance ID.
         * @format uuid
         */
        instanceId: string;
        /**
         * The new user-supplied instance label.
         * @minLength 1
         */
        label?: string;
        /**
         * The plan ID to upgrade the instance to.
         * @minLength 1
         */
        plan?: string;
        /** The automatic backup setting. */
        backups?: "enabled" | "disabled";
        /**
         * The firewall group ID to attach.
         * @minLength 1
         */
        firewallGroupId?: string;
        /** Whether to enable IPv6. */
        enableIpv6?: boolean;
        /** Whether to enable paid DDoS protection. */
        ddosProtection?: boolean;
        /** The replacement tags for the instance. */
        tags?: Array<string>;
      };
      output: {
        /** A Vultr VPS instance. */
        instance: {
          /**
           * The Vultr instance ID.
           * @format uuid
           */
          id?: string;
          /** The installed operating system name. */
          os?: string;
          /** The installed operating system ID. */
          os_id?: number;
          /**
           * The memory in MB.
           * @minimum 0
           */
          ram?: number;
          /**
           * The disk capacity in GB.
           * @minimum 0
           */
          disk?: number;
          /** The main IPv4 address. */
          main_ip?: string;
          /**
           * The number of virtual CPUs.
           * @minimum 0
           */
          vcpu_count?: number;
          /** The Vultr region ID. */
          region?: string;
          /** The Vultr plan ID. */
          plan?: string;
          /** The timestamp when Vultr created the instance. */
          date_created?: string;
          /** The current subscription or provisioning status. */
          status?: string;
          /** The current power state. */
          power_status?: string;
          /** The detailed server provisioning state. */
          server_status?: string;
          /** The instance hostname. */
          hostname?: string;
          /** The user-supplied instance label. */
          label?: string;
          /** The private IP address when a VPC is attached. */
          internal_ip?: string;
          /** The attached firewall group ID. */
          firewall_group_id?: string;
          /** The snapshot used to deploy this instance. */
          snapshot_id?: string;
          /** The enabled instance features. */
          features?: Array<string>;
          /** The tags applied to the instance. */
          tags?: Array<string>;
          /** The deployment password when Vultr still returns it. */
          default_password?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
