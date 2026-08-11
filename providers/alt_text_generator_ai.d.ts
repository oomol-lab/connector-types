import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate concise, accessibility-friendly alt text for a publicly reachable image URL. */
    "alt_text_generator_ai.generate_alt_text": {
      input: {
        /**
         * The publicly reachable HTTP or HTTPS URL of the image to describe.
         * @format uri
         */
        imageUrl: string;
      };
      output: {
        /**
         * The alt text generated for the image.
         * @minLength 1
         */
        altText: string;
      };
    };
  }
}
