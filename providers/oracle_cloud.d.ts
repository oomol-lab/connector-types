import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a subnet in a VCN. */
    "oracle_cloud.create_subnet": {
      input: {
        /**
         * VCN OCID.
         * @minLength 1
         */
        vcnId: string;
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Subnet IPv4 CIDR block.
         * @minLength 1
         */
        cidrBlock: string;
        /**
         * Subnet display name.
         * @minLength 1
         */
        displayName: string;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        subnet?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a virtual cloud network. */
    "oracle_cloud.create_vcn": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * IPv4 CIDR block.
         * @minLength 1
         */
        cidrBlock: string;
        /**
         * VCN display name.
         * @minLength 1
         */
        displayName: string;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        vcn?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Permanently delete an empty VCN. This is destructive. */
    "oracle_cloud.delete_vcn": {
      input: {
        /**
         * VCN OCID.
         * @minLength 1
         */
        vcnId?: string;
        [key: string]: unknown;
      };
      output: {
        /** HTTP response status. */
        status?: number;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Find a direct child compartment by exact name. */
    "oracle_cloud.get_compartment_by_name": {
      input: {
        /**
         * Exact compartment name.
         * @minLength 1
         */
        name?: string;
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        parentCompartmentId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        compartment?: Record<string, unknown> | null;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the tenancy configured on this connection. */
    "oracle_cloud.get_current_tenancy": {
      input: Record<string, never>;
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        tenancy?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the IAM user configured on this connection. */
    "oracle_cloud.get_current_user": {
      input: Record<string, never>;
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        user?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a compute image by OCID. */
    "oracle_cloud.get_image": {
      input: {
        /**
         * Image OCID.
         * @minLength 1
         */
        imageId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        image?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a compute instance by OCID. */
    "oracle_cloud.get_instance": {
      input: {
        /**
         * Compute instance OCID.
         * @minLength 1
         */
        instanceId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        instance?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve aggregated OCI Monitoring metric data using an MQL expression. */
    "oracle_cloud.get_metrics_data": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Monitoring Query Language expression.
         * @minLength 1
         */
        query: string;
        /**
         * Metric namespace.
         * @minLength 1
         */
        namespace: string;
        /**
         * Inclusive RFC3339 start time; defaults to three hours ago.
         * @format date-time
         */
        startTime?: string;
        /**
         * Exclusive RFC3339 end time; defaults to now.
         * @format date-time
         */
        endTime?: string;
        /**
         * Metric resource group.
         * @minLength 1
         */
        resourceGroup?: string;
        /**
         * Aggregation resolution, such as 1m or 1h.
         * @minLength 1
         */
        resolution?: string;
        /** Search subcompartments. */
        compartmentIdInSubtree?: boolean;
      };
      output: {
        /** Returned metricData. */
        metricData?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a network security group by OCID. */
    "oracle_cloud.get_network_security_group": {
      input: {
        /**
         * Network security group OCID.
         * @minLength 1
         */
        networkSecurityGroupId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        networkSecurityGroup?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a security list by OCID. */
    "oracle_cloud.get_security_list": {
      input: {
        /**
         * Security list OCID.
         * @minLength 1
         */
        securityListId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        securityList?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a subnet by OCID. */
    "oracle_cloud.get_subnet": {
      input: {
        /**
         * Subnet OCID.
         * @minLength 1
         */
        subnetId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        subnet?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a tenancy by OCID. */
    "oracle_cloud.get_tenancy": {
      input: {
        /**
         * Tenancy OCID.
         * @minLength 1
         */
        tenancyId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        tenancy?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a virtual cloud network by OCID. */
    "oracle_cloud.get_vcn": {
      input: {
        /**
         * VCN OCID.
         * @minLength 1
         */
        vcnId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        vcn?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a VNIC and its assigned IP addresses by OCID. */
    "oracle_cloud.get_vnic": {
      input: {
        /**
         * VNIC OCID.
         * @minLength 1
         */
        vnicId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        vnic?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a VNIC attachment by OCID. */
    "oracle_cloud.get_vnic_attachment": {
      input: {
        /**
         * VNIC attachment OCID.
         * @minLength 1
         */
        vnicAttachmentId?: string;
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        vnicAttachment?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Perform one of the instance actions exposed by Oracle's official Compute MCP server. */
    "oracle_cloud.instance_action": {
      input: {
        /**
         * Compute instance OCID.
         * @minLength 1
         */
        instanceId?: string;
        /** Action to perform. */
        action?: "START" | "STOP" | "RESET" | "SOFTSTOP" | "SOFTRESET" | "SENDDIAGNOSTICINTERRUPT" | "DIAGNOSTICREBOOT" | "REBOOTMIGRATE";
        [key: string]: unknown;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        instance?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Launch a compute instance from an image in a subnet. */
    "oracle_cloud.launch_instance": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Instance display name.
         * @minLength 1
         */
        displayName: string;
        /**
         * Availability domain name.
         * @minLength 1
         */
        availabilityDomain: string;
        /**
         * Primary VNIC subnet OCID.
         * @minLength 1
         */
        subnetId: string;
        /**
         * Boot image OCID.
         * @minLength 1
         */
        imageId: string;
        /**
         * Compute shape name.
         * @minLength 1
         */
        shape?: string;
        /**
         * OCPU count for a flexible shape.
         * @exclusiveMinimum 0
         */
        ocpus?: number;
        /**
         * Memory in GB for a flexible shape.
         * @minimum 1
         */
        memoryInGBs?: number;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        instance?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** List Monitoring alarms in a compartment. */
    "oracle_cloud.list_alarms": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned alarms. */
        alarms?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List availability domains accessible from a compartment or tenancy. */
    "oracle_cloud.list_availability_domains": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
      };
      output: {
        /** Returned availabilityDomains. */
        availabilityDomains?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List child compartments, optionally traversing the tenancy subtree. */
    "oracle_cloud.list_compartments": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /** Traverse the entire tenancy subtree. */
        compartmentIdInSubtree?: boolean;
        /** Permission filtering mode. */
        accessLevel?: "ANY" | "ACCESSIBLE";
        /**
         * Include the tenancy root compartment on the first page. Applies only when listing the tenancy itself.
         * @default true
         */
        includeRoot?: boolean;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned compartments. */
        compartments?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List compute images, optionally filtered by operating system. */
    "oracle_cloud.list_images": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Operating system name.
         * @minLength 1
         */
        operatingSystem?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned images. */
        images?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List Oracle Cloud Agent command executions for a compute instance. */
    "oracle_cloud.list_instance_agent_command_executions": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Compute instance OCID.
         * @minLength 1
         */
        instanceId: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned commandExecutions. */
        commandExecutions?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List OCI compute instances in a compartment. */
    "oracle_cloud.list_instances": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /** Instance lifecycle state. */
        lifecycleState?: "MOVING" | "PROVISIONING" | "RUNNING" | "STARTING" | "STOPPING" | "STOPPED" | "CREATING_IMAGE" | "TERMINATING" | "TERMINATED";
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned instances. */
        instances?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List available OCI Monitoring metric definitions. */
    "oracle_cloud.list_metric_definitions": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /** Fields to group by. */
        groupBy?: Array<"namespace" | "name" | "resourceGroup">;
        /**
         * Metric name.
         * @minLength 1
         */
        metricName?: string;
        /**
         * Metric namespace.
         * @minLength 1
         */
        namespace?: string;
        /**
         * Metric resource group.
         * @minLength 1
         */
        resourceGroup?: string;
        /** Search subcompartments. */
        compartmentIdInSubtree?: boolean;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned metrics. */
        metrics?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List network security groups, optionally filtered by VCN or VLAN. */
    "oracle_cloud.list_network_security_groups": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * VCN OCID.
         * @minLength 1
         */
        vcnId?: string;
        /**
         * VLAN OCID.
         * @minLength 1
         */
        vlanId?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned networkSecurityGroups. */
        networkSecurityGroups?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List security lists in a compartment, optionally filtered by VCN. */
    "oracle_cloud.list_security_lists": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * VCN OCID.
         * @minLength 1
         */
        vcnId?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned securityLists. */
        securityLists?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List subnets in a compartment, optionally filtered by VCN. */
    "oracle_cloud.list_subnets": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * VCN OCID.
         * @minLength 1
         */
        vcnId?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned subnets. */
        subnets?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List regions to which a tenancy is subscribed. */
    "oracle_cloud.list_subscribed_regions": {
      input: {
        /**
         * Tenancy OCID.
         * @minLength 1
         */
        tenancyId?: string;
      };
      output: {
        /** Returned regions. */
        regions?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List virtual cloud networks in a compartment. */
    "oracle_cloud.list_vcns": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned vcns. */
        vcns?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** List VNIC attachments in a compartment, optionally for one instance. */
    "oracle_cloud.list_vnic_attachments": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Compute instance OCID.
         * @minLength 1
         */
        instanceId?: string;
        /**
         * Maximum resources to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque OCI pagination token.
         * @minLength 1
         */
        page?: string;
      };
      output: {
        /** Returned vnicAttachments. */
        vnicAttachments?: Array<Record<string, unknown>>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        /** Token for the next page, or null. */
        nextPage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Run a shell or batch script through Oracle Cloud Agent. The script executes on the target host with the agent service account's privileges. */
    "oracle_cloud.run_instance_agent_command": {
      input: {
        /**
         * Compartment or tenancy OCID. Defaults to the connection's default compartment.
         * @minLength 1
         */
        compartmentId?: string;
        /**
         * Compute instance OCID.
         * @minLength 1
         */
        instanceId: string;
        /**
         * Command display name.
         * @minLength 1
         */
        displayName: string;
        /**
         * Plain-text script to execute.
         * @minLength 1
         */
        script: string;
        /**
         * On-host command timeout in seconds. OOMOL Connector waits at most four minutes for completion.
         * @maximum 240
         * @exclusiveMinimum 0
         */
        executionTimeoutInSeconds?: number;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        commandExecution?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Permanently terminate a compute instance. This destructive operation cannot be undone. */
    "oracle_cloud.terminate_instance": {
      input: {
        /**
         * Compute instance OCID.
         * @minLength 1
         */
        instanceId?: string;
        [key: string]: unknown;
      };
      output: {
        /** HTTP response status. */
        status?: number;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
    /** Update flexible shape resources for an instance; OCI may restart the instance. */
    "oracle_cloud.update_instance": {
      input: {
        /**
         * Compute instance OCID.
         * @minLength 1
         */
        instanceId: string;
        /**
         * New OCPU count.
         * @exclusiveMinimum 0
         */
        ocpus?: number;
        /**
         * New memory in GB.
         * @minimum 1
         */
        memoryInGBs?: number;
      };
      output: {
        /** OCI resource. Additional official response fields are preserved. */
        instance?: Record<string, unknown>;
        /** Oracle request identifier. */
        opcRequestId?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
