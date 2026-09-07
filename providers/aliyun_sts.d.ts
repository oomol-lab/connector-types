import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Use a connected Alibaba Cloud RAM AccessKey pair to call STS AssumeRole and return temporary credentials. */
    "aliyun_sts.assume_role": {
      input: {
        /**
         * The Alibaba Cloud RAM role ARN to assume. Required when the connection has no saved Role ARN; otherwise the saved Role ARN is used when this field is omitted.
         * @minLength 1
         */
        roleArn?: string;
        /**
         * The STS role session name.
         * @minLength 1
         */
        roleSessionName?: string;
        /**
         * The temporary credential duration in seconds. Alibaba Cloud STS accepts 900 to 43200, limited by the RAM role maximum session duration.
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
        /** The credential mode expected by Alibaba Cloud CLI tools. */
        mode: "StsToken";
        /** The temporary AccessKey ID. */
        access_key_id: string;
        /** The temporary AccessKey secret. */
        access_key_secret: string;
        /** The STS security token used with the temporary AccessKey pair. */
        sts_token: string;
        /** The ISO timestamp when the temporary credential expires. */
        expiration: string;
        /** The Alibaba Cloud STS request ID. */
        request_id: string | null;
        /** The assumed role user identity returned by Alibaba Cloud STS. */
        assumed_role_user: {
          /** The assumed role user ARN. */
          arn: string | null;
          /** The assumed role user ID. */
          assumed_role_id: string | null;
        } | null;
      };
    };
    /** Return Alibaba Cloud STS temporary credentials from the connected OOMOL OIDC federation configuration. */
    "aliyun_sts.get_federated_credentials": {
      input: {
        /**
         * The Alibaba Cloud RAM role ARN to assume. Required when the connection has no saved Role ARN; otherwise the saved Role ARN is used when this field is omitted.
         * @minLength 1
         */
        roleArn?: string;
        /**
         * The temporary credential duration in seconds. Alibaba Cloud STS accepts 900 to 43200, limited by the RAM role maximum session duration.
         * @minimum 900
         * @maximum 43200
         */
        durationSeconds?: number;
      };
      output: {
        /** The credential mode expected by Alibaba Cloud CLI tools. */
        mode: "StsToken";
        /** The temporary AccessKey ID. */
        access_key_id: string;
        /** The temporary AccessKey secret. */
        access_key_secret: string;
        /** The STS security token used with the temporary AccessKey pair. */
        sts_token: string;
        /** The ISO timestamp when the temporary credential expires. */
        expiration: string;
        /** The Alibaba Cloud STS request ID. */
        request_id: string | null;
        /** The assumed role user identity returned by Alibaba Cloud STS. */
        assumed_role_user: {
          /** The assumed role user ARN. */
          arn: string | null;
          /** The assumed role user ID. */
          assumed_role_id: string | null;
        } | null;
      };
    };
  }
}
