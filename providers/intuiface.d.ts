import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List running Intuiface experiences that can receive Web Trigger messages. */
    "intuiface.list_available_experiences": {
      input: {
        /** Experience names that must exactly match running Intuiface experiences. */
        experienceNames?: Array<string>;
        /** Experience IDs that must exactly match running Intuiface experiences. */
        experienceIDs?: Array<string>;
        /** Player device names that must exactly match Players running the experiences. */
        playerDeviceNames?: Array<string>;
        /** Player IDs that must exactly match Players running the experiences. */
        playerIDs?: Array<string>;
        /** Player tags used to select Players with one or more matching tags. */
        playerTags?: Array<string>;
      };
      output: {
        /** The Intuiface experience search status. */
        status?: "connectedExperiences" | "noConnectedExperience" | "noMatchingExperience";
        /**
         * The number of experiences in the result.
         * @minimum 0
         */
        experienceCount?: number;
        /** The matching running experiences. */
        experiences?: Array<{
          /** The experience ID. */
          id?: string;
          /** The experience name. */
          name?: string;
          /** The Intuiface Player running an experience. */
          runningOnPlayer?: {
            /** The Player device ID. */
            playerId?: string;
            /** The Player device name. */
            name?: string;
            /** The Player device nickname. */
            nickName?: string;
            /** The Player platform. */
            platform?: string;
            /** The Intuiface Player version. */
            version?: string;
            /** The tags assigned to the Player. */
            tags?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The UTC timestamp reported by Intuiface. */
        timestamp?: string;
        [key: string]: unknown;
      };
    };
    /** Send a Web Trigger message to selected running Intuiface experiences. */
    "intuiface.send_message": {
      input: {
        /** The message value sent to every selected experience. */
        message: string;
        /** The first optional value sent with the message. */
        parameter1?: string;
        /** The second optional value sent with the message. */
        parameter2?: string;
        /** The third optional value sent with the message. */
        parameter3?: string;
        /** Experience names that must exactly match running Intuiface experiences. */
        experienceNames?: Array<string>;
        /** Experience IDs that must exactly match running Intuiface experiences. */
        experienceIDs?: Array<string>;
        /** Player device names that must exactly match Players running the experiences. */
        playerDeviceNames?: Array<string>;
        /** Player IDs that must exactly match Players running the experiences. */
        playerIDs?: Array<string>;
        /** Player tags used to select Players with one or more matching tags. */
        playerTags?: Array<string>;
      };
      output: {
        /** The Intuiface message delivery status. */
        status?: "sent" | "noConnectedExperience" | "noMatchingExperience";
        /**
         * The number of experiences in the result.
         * @minimum 0
         */
        experienceCount?: number;
        /** The matching running experiences. */
        experiences?: Array<{
          /** The experience ID. */
          id?: string;
          /** The experience name. */
          name?: string;
          /** The Intuiface Player running an experience. */
          runningOnPlayer?: {
            /** The Player device ID. */
            playerId?: string;
            /** The Player device name. */
            name?: string;
            /** The Player device nickname. */
            nickName?: string;
            /** The Player platform. */
            platform?: string;
            /** The Intuiface Player version. */
            version?: string;
            /** The tags assigned to the Player. */
            tags?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The UTC timestamp reported by Intuiface. */
        timestamp?: string;
        [key: string]: unknown;
      };
    };
  }
}
