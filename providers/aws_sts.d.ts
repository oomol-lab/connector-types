import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Use a connected AWS access key pair to call STS AssumeRole and return temporary credentials. */
    "aws_sts.assume_role": {
      input: {
        /**
         * The AWS IAM role ARN to assume. Required when the connection has no saved Role ARN; otherwise the saved Role ARN is used when this field is omitted.
         * @minLength 1
         */
        roleArn?: string;
        /**
         * The AWS STS role session name.
         * @minLength 2
         */
        roleSessionName?: string;
        /**
         * The temporary credential duration in seconds. AWS STS accepts 900 to 43200, limited by the role maximum session duration.
         * @minimum 900
         * @maximum 43200
         */
        durationSeconds?: number;
        /**
         * An optional inline session policy JSON string used only to narrow the temporary credential permissions.
         * @minLength 1
         */
        policy?: string;
        /**
         * Optional managed policy ARNs used only to narrow the temporary credential permissions.
         * @minItems 1
         * @maxItems 10
         */
        policyArns?: Array<{
          /**
           * The ARN of the managed session policy.
           * @minLength 1
           */
          arn: string;
        }>;
        /**
         * The external ID to pass when the target role requires one.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The MFA device serial number or ARN.
         * @minLength 1
         */
        serialNumber?: string;
        /**
         * The time-based MFA token code.
         * @minLength 1
         */
        tokenCode?: string;
        /**
         * The source identity to attach to the role session.
         * @minLength 1
         */
        sourceIdentity?: string;
        /**
         * Session tags to pass to the assumed role session.
         * @minItems 1
         * @maxItems 50
         */
        tags?: Array<{
          /**
           * The session tag key.
           * @minLength 1
           */
          key: string;
          /** The session tag value. */
          value: string;
        }>;
        /**
         * Session tag keys that AWS should mark as transitive for role chaining.
         * @minItems 1
         * @maxItems 50
         */
        transitiveTagKeys?: Array<string>;
      };
      output: {
        /** The temporary AWS access key ID. */
        accessKeyId: string;
        /** The temporary AWS secret access key. */
        secretAccessKey: string;
        /** The AWS STS session token used with the temporary access key pair. */
        sessionToken: string;
        /** The ISO timestamp when the temporary credential expires. */
        expiration: string;
        /** The AWS STS request ID. */
        requestId: string | null;
        /** The assumed role user identity returned by AWS STS. */
        assumedRoleUser: {
          /** The assumed role user ARN. */
          arn: string | null;
          /** The assumed role user ID. */
          assumedRoleId: string | null;
        } | null;
        /** The percentage of the packed policy and tag size quota used by the request. */
        packedPolicySize: number | null;
        /** The source identity associated with the role session. */
        sourceIdentity: string | null;
      };
    };
    /** Return AWS STS temporary credentials from the connected OOMOL OIDC federation configuration. */
    "aws_sts.get_federated_credentials": {
      input: {
        /**
         * The AWS IAM role ARN to assume. Required when the connection has no saved Role ARN; otherwise the saved Role ARN is used when this field is omitted.
         * @minLength 1
         */
        roleArn?: string;
        /**
         * The AWS STS role session name.
         * @minLength 2
         */
        roleSessionName?: string;
        /**
         * The temporary credential duration in seconds. AWS STS accepts 900 to 43200, limited by the role maximum session duration.
         * @minimum 900
         * @maximum 43200
         */
        durationSeconds?: number;
        /**
         * An optional inline session policy JSON string used only to narrow the temporary credential permissions.
         * @minLength 1
         */
        policy?: string;
      };
      output: {
        /** The temporary AWS access key ID. */
        accessKeyId: string;
        /** The temporary AWS secret access key. */
        secretAccessKey: string;
        /** The AWS STS session token used with the temporary access key pair. */
        sessionToken: string;
        /** The ISO timestamp when the temporary credential expires. */
        expiration: string;
        /** The AWS STS request ID. */
        requestId: string | null;
        /** The assumed role user identity returned by AWS STS. */
        assumedRoleUser: {
          /** The assumed role user ARN. */
          arn: string | null;
          /** The assumed role user ID. */
          assumedRoleId: string | null;
        } | null;
        /** The percentage of the packed policy and tag size quota used by the request. */
        packedPolicySize: number | null;
        /** The source identity associated with the role session. */
        sourceIdentity: string | null;
      };
    };
  }
}
