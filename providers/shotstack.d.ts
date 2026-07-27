import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the status and output URL for one Shotstack render, optionally including its original edit JSON. */
    "shotstack.get_render": {
      input: {
        /**
         * The Shotstack render task UUID.
         * @format uuid
         */
        id: string;
        /** Whether to include the original edit data in the response. */
        data?: boolean;
        /** Whether returned edit data should include merged fields. */
        merged?: boolean;
      };
      output: {
        /** The current Shotstack render details. */
        render: {
          /** The Shotstack render identifier. */
          id: string;
          /** The current Shotstack render status. */
          status: string;
          /**
           * The temporary output URL when Shotstack has produced one.
           * @format uri
           */
          url?: string | null;
          /**
           * The poster image URL when Shotstack generated one.
           * @format uri
           */
          poster?: string | null;
          /**
           * The thumbnail image URL when Shotstack generated one.
           * @format uri
           */
          thumbnail?: string | null;
          /** The Shotstack account identifier that owns the render. */
          owner?: string;
          /** The Shotstack subscription plan used for the render. */
          plan?: string;
          /** The error message returned when Shotstack cannot render the edit. */
          error?: string;
          /** The rendered media duration in seconds. */
          duration?: number;
          /** The time Shotstack spent rendering the media in milliseconds. */
          renderTime?: number;
          /** The timestamp when Shotstack created the render. */
          created?: string;
          /** The timestamp when Shotstack last updated the render. */
          updated?: string;
          /** The original edit payload returned when requested. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Submit a Shotstack edit JSON payload for asynchronous video, image, or audio rendering and return its render ID. */
    "shotstack.render_edit": {
      input: {
        /** The Shotstack Edit JSON body, including a timeline and output configuration. */
        edit: {
          /** The Shotstack timeline containing the tracks to render. */
          timeline: {
            /** The ordered Shotstack tracks containing render clips. */
            tracks: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** The Shotstack output configuration. */
          output: {
            /** The output media format required by Shotstack. */
            format: "mp4" | "gif" | "jpg" | "png" | "bmp" | "mp3";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
      output: {
        /** The render job queued by Shotstack. */
        render: {
          /** The Shotstack render identifier used to retrieve the result. */
          id: string;
          /** The queue confirmation message returned by Shotstack. */
          message: string;
        };
      };
    };
  }
}
