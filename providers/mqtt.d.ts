import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Publish one UTF-8 or base64-encoded message over MQTT WebSocket. */
    "mqtt.publish_message": {
      input: {
        /**
         * The exact MQTT topic. Wildcards are not allowed.
         * @minLength 1
         */
        topic: string;
        /** The message payload. */
        payload: string;
        /**
         * How the payload is encoded.
         * @default "utf8"
         */
        payloadEncoding?: "utf8" | "base64";
        /**
         * MQTT quality of service level.
         * @minimum 0
         * @maximum 2
         * @default 0
         */
        qos?: number;
        /**
         * Whether to set the PUBLISH retain flag.
         * @default false
         */
        retain?: boolean;
      };
      output: {
        /** The published topic. */
        topic: string;
        /**
         * MQTT quality of service level.
         * @minimum 0
         * @maximum 2
         */
        qos: number;
        /** Whether the PUBLISH retain flag was requested. */
        retain: boolean;
        /** MQTT protocol version used for the connection. */
        protocolVersion: "3.1.1" | "5.0";
        /** Whether the MQTT acknowledgement flow completed. */
        deliveryAcknowledged: boolean;
      };
    };
    /** Open a bounded MQTT subscription and collect newly received messages. */
    "mqtt.receive_messages": {
      input: {
        /**
         * The MQTT topic filter, including + or # wildcards.
         * @minLength 1
         */
        topicFilter: string;
        /**
         * MQTT quality of service level.
         * @minimum 0
         * @maximum 2
         * @default 0
         */
        qos?: number;
        /**
         * Maximum wait time in seconds.
         * @minimum 1
         * @maximum 30
         * @default 10
         */
        timeoutSeconds?: number;
        /**
         * Maximum messages to collect.
         * @minimum 1
         * @maximum 100
         * @default 1
         */
        maxMessages?: number;
        /**
         * How received payloads are returned.
         * @default "utf8"
         */
        payloadEncoding?: "utf8" | "base64";
      };
      output: {
        /**
         * The received MQTT messages.
         * @maxItems 100
         */
        messages: Array<{
          /** The exact topic. */
          topic: string;
          /** The encoded payload. */
          payload: string;
          /**
           * MQTT quality of service level.
           * @minimum 0
           * @maximum 2
           */
          qos: number;
          /** Whether the broker marked the message as retained. */
          retain: boolean;
          /** Whether the MQTT DUP flag was set. */
          duplicate: boolean;
        }>;
        /** Whether the collection ended at the timeout. */
        timedOut: boolean;
        /** MQTT protocol version used for the connection. */
        protocolVersion: "3.1.1" | "5.0";
      };
    };
  }
}
