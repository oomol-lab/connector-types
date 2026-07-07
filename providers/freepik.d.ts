import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Magnific stock resource download URL through the resources API. */
    "freepik.download_resource": {
      input: {
        /** The Freepik resource ID. */
        resourceId: string | number;
        /** The requested resource download format. */
        format?: "psd" | "ai" | "eps" | "atn" | "fonts" | "resources" | "png" | "jpg" | "3d-render" | "svg" | "mockup";
        /**
         * Optional photo resize value for the generic download endpoint, such as small, medium, large, original, or a pixel value like 2000px.
         * @minLength 1
         */
        imageSize?: string;
        /**
         * Optional Accept-Language value such as en-US, used by Magnific for localized search processing.
         * @minLength 1
         */
        acceptLanguage?: string;
      };
      output: {
        /**
         * The downloaded file name returned by Magnific.
         * @minLength 1
         */
        filename: string;
        /**
         * The CDN URL for downloading the resource.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * The signed preview URL returned by Magnific when available.
         * @minLength 1
         * @format uri
         */
        signedUrl: string | null;
        /** The prompt used to create the AI resource when returned by Magnific. */
        prompt: string | null;
        /** Raw object returned by the Magnific API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get detailed metadata for a Magnific stock resource by ID. */
    "freepik.get_resource": {
      input: {
        /** The Freepik resource ID. */
        resourceId: string | number;
        /**
         * Optional Accept-Language value such as en-US, used by Magnific for localized search processing.
         * @minLength 1
         */
        acceptLanguage?: string;
      };
      output: {
        /** Raw object returned by the Magnific API. */
        resource: Record<string, unknown>;
        /** Raw object returned by the Magnific API. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Magnific stock images and templates through the resources API. */
    "freepik.search_resources": {
      input: {
        /**
         * Page number. The official API requires 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Maximum number of resources to return. The official API requires > 0.
         * @minimum 1
         */
        limit?: number;
        /** Sort order for search results. */
        order?: "relevance" | "recent";
        /**
         * Search term used to find resources.
         * @minLength 1
         */
        term?: string;
        /**
         * Optional Accept-Language value such as en-US, used by Magnific for localized search processing.
         * @minLength 1
         */
        acceptLanguage?: string;
        /** Advanced Magnific resource filters mapped to the official filters deepObject query parameter. */
        filters?: {
          /** Resource orientation flags. Set a value to 1 to enable the filter. */
          orientation?: {
            /**
             * Whether to include only landscape resources.
             * @minimum 0
             * @maximum 1
             */
            landscape?: number;
            /**
             * Whether to include only portrait resources.
             * @minimum 0
             * @maximum 1
             */
            portrait?: number;
            /**
             * Whether to include only square resources.
             * @minimum 0
             * @maximum 1
             */
            square?: number;
            /**
             * Whether to include only panoramic resources.
             * @minimum 0
             * @maximum 1
             */
            panoramic?: number;
          };
          /** Resource content type flags. Set a value to 1 to enable the filter. */
          contentType?: {
            /**
             * Whether to include only photo resources.
             * @minimum 0
             * @maximum 1
             */
            photo?: number;
            /**
             * Whether to include only PSD resources.
             * @minimum 0
             * @maximum 1
             */
            psd?: number;
            /**
             * Whether to include only vector resources.
             * @minimum 0
             * @maximum 1
             */
            vector?: number;
          };
          /** Resource license flags. Set a value to 1 to enable the filter. */
          license?: {
            /**
             * Whether to include only freemium resources.
             * @minimum 0
             * @maximum 1
             */
            freemium?: number;
            /**
             * Whether to include only premium resources.
             * @minimum 0
             * @maximum 1
             */
            premium?: number;
          };
          /** People-related resource filters. */
          people?: {
            /**
             * Whether resources should include people.
             * @minimum 0
             * @maximum 1
             */
            include?: number;
            /**
             * Whether resources should exclude people.
             * @minimum 0
             * @maximum 1
             */
            exclude?: number;
            /** The number of people shown in the resource. */
            number?: "1" | "2" | "3" | "more_than_three";
            /** The age group of people shown in the resource. */
            age?: "infant" | "child" | "teen" | "young-adult" | "adult" | "senior" | "elder";
            /** The gender of people shown in the resource. */
            gender?: "male" | "female";
            /** The ethnicity of people shown in the resource. */
            ethnicity?: "south-asian" | "middle-eastern" | "east-asian" | "black" | "hispanic" | "indian" | "white" | "multiracial" | "southeast-asian";
          };
          /** Filter by the period in which resources were added. */
          period?: "last-month" | "last-quarter" | "last-semester" | "last-year";
          /** Filter by the predominant resource color. */
          color?: "black" | "blue" | "gray" | "green" | "orange" | "red" | "white" | "yellow" | "purple" | "cyan" | "pink";
          /** Filter resources by a specific author ID. */
          author?: number;
          /** AI-generated resource filters mapped to the upstream ai-generated filter. */
          aiGenerated?: {
            /**
             * Whether to exclude AI-generated resources.
             * @minimum 0
             * @maximum 1
             */
            excluded?: number;
            /**
             * Whether to include only AI-generated resources.
             * @minimum 0
             * @maximum 1
             */
            only?: number;
          };
          /** Vector-specific filters. */
          vector?: {
            /** Vector file type. */
            type?: "jpg" | "ai" | "eps" | "svg";
            /** Vector style type. */
            style?: "watercolor" | "flat" | "cartoon" | "geometric" | "gradient" | "isometric" | "3d" | "hand-drawn";
          };
          /** PSD-specific filters. */
          psd?: {
            /** PSD file type. */
            type?: "jpg" | "psd";
          };
          /**
           * Comma-separated resource IDs. This upstream filter is incompatible with other filters.
           * @minLength 1
           */
          ids?: string;
        };
      };
      output: {
        /** Resources returned by Magnific. */
        resources: Array<Record<string, unknown>>;
        /** Raw object returned by the Magnific API. */
        meta: Record<string, unknown>;
        /** Raw object returned by the Magnific API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
