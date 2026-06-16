import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current authenticated Zeplin user profile. */
    "zeplin.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A raw Zeplin object. */
        user: Record<string, unknown>;
      };
    };
    /** Get a Zeplin project by project ID. */
    "zeplin.get_project": {
      input: {
        /**
         * The project ID to retrieve.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The project detail with optional styleguide. */
        project: {
          /** The unique identifier of the project. */
          id: string;
          /** The name of the project. */
          name: string;
          /** The target platform of the project. */
          platform: string;
          /** The current status of the project. */
          status: string;
          /**
           * A Unix timestamp in seconds.
           * @minimum 0
           */
          created: number;
          /**
           * The timestamp when the project was last updated.
           * @minimum 0
           */
          updated?: number;
          /**
           * The number of project members.
           * @minimum 0
           */
          numberOfMembers: number;
          /**
           * The number of screens in the project.
           * @minimum 0
           */
          numberOfScreens: number;
          /**
           * The number of components in the project.
           * @minimum 0
           */
          numberOfComponents: number;
          /**
           * The number of connected components.
           * @minimum 0
           */
          numberOfConnectedComponents: number;
          /**
           * The number of text styles.
           * @minimum 0
           */
          numberOfTextStyles: number;
          /**
           * The number of color tokens.
           * @minimum 0
           */
          numberOfColors: number;
          /**
           * The number of spacing tokens.
           * @minimum 0
           */
          numberOfSpacingTokens: number;
          /** The description of the project. */
          description?: string;
          /** The scene URL of the project. */
          sceneUrl?: string;
          /** The thumbnail URL of the project. */
          thumbnail?: string;
          /** A raw Zeplin object. */
          organization?: Record<string, unknown>;
          /** A raw Zeplin object. */
          remPreferences?: Record<string, unknown>;
          /** A raw Zeplin object. */
          workflowStatus?: Record<string, unknown>;
          /** A raw Zeplin object. */
          styleguide?: Record<string, unknown>;
        };
      };
    };
    /** List projects in the current user's Zeplin personal workspace. */
    "zeplin.list_personal_projects": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The list of projects. */
        projects: Array<{
          /** The unique identifier of the project. */
          id: string;
          /** The name of the project. */
          name: string;
          /** The target platform of the project. */
          platform: string;
          /** The current status of the project. */
          status: string;
          /**
           * A Unix timestamp in seconds.
           * @minimum 0
           */
          created: number;
          /**
           * The timestamp when the project was last updated.
           * @minimum 0
           */
          updated?: number;
          /**
           * The number of project members.
           * @minimum 0
           */
          numberOfMembers: number;
          /**
           * The number of screens in the project.
           * @minimum 0
           */
          numberOfScreens: number;
          /**
           * The number of components in the project.
           * @minimum 0
           */
          numberOfComponents: number;
          /**
           * The number of connected components.
           * @minimum 0
           */
          numberOfConnectedComponents: number;
          /**
           * The number of text styles.
           * @minimum 0
           */
          numberOfTextStyles: number;
          /**
           * The number of color tokens.
           * @minimum 0
           */
          numberOfColors: number;
          /**
           * The number of spacing tokens.
           * @minimum 0
           */
          numberOfSpacingTokens: number;
          /** The description of the project. */
          description?: string;
          /** The scene URL of the project. */
          sceneUrl?: string;
          /** The thumbnail URL of the project. */
          thumbnail?: string;
          /** A raw Zeplin object. */
          organization?: Record<string, unknown>;
          /** A raw Zeplin object. */
          remPreferences?: Record<string, unknown>;
          /** A raw Zeplin object. */
          workflowStatus?: Record<string, unknown>;
        }>;
      };
    };
    /** List color tokens defined for a Zeplin project. */
    "zeplin.list_project_colors": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The list of color tokens. */
        colors: Array<{
          /** The unique identifier of the color. */
          id: string;
          /** The name of the color. */
          name: string;
          /** A raw Zeplin object. */
          source: Record<string, unknown>;
          /**
           * A Unix timestamp in seconds.
           * @minimum 0
           */
          created: number;
          /** The RGBA color values. */
          color: {
            /**
             * The red channel value.
             * @minimum 0
             * @maximum 255
             */
            r: number;
            /**
             * The green channel value.
             * @minimum 0
             * @maximum 255
             */
            g: number;
            /**
             * The blue channel value.
             * @minimum 0
             * @maximum 255
             */
            b: number;
            /**
             * The alpha channel value.
             * @minimum 0
             * @maximum 1
             */
            a: number;
          };
          /** The description of the color. */
          description?: string;
          /** The hex color code. */
          hex?: string;
        }>;
      };
    };
    /** List text styles defined for a Zeplin project. */
    "zeplin.list_project_text_styles": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The list of text styles. */
        textStyles: Array<{
          /** The unique identifier of the text style. */
          id: string;
          /** The name of the text style. */
          name: string;
          /** A raw Zeplin object. */
          source: Record<string, unknown>;
          /**
           * A Unix timestamp in seconds.
           * @minimum 0
           */
          created: number;
          /** The font family name. */
          fontFamily: string;
          /** The font size in points. */
          fontSize: number;
          /** The font weight value. */
          fontWeight: number;
          /** The font style. */
          fontStyle: string;
          /** The font stretch value. */
          fontStretch: number;
          /** The line height. */
          lineHeight?: number;
          /** The letter spacing. */
          letterSpacing?: number;
          /** The text alignment. */
          textAlign?: string;
          /** The RGBA color values. */
          color: {
            /**
             * The red channel value.
             * @minimum 0
             * @maximum 255
             */
            r: number;
            /**
             * The green channel value.
             * @minimum 0
             * @maximum 255
             */
            g: number;
            /**
             * The blue channel value.
             * @minimum 0
             * @maximum 255
             */
            b: number;
            /**
             * The alpha channel value.
             * @minimum 0
             * @maximum 1
             */
            a: number;
          };
          /** The description of the text style. */
          description?: string;
        }>;
      };
    };
    /** List versions of a Zeplin screen. Unlike the upstream toolkit, this action requires both projectId and screenId to match the official endpoint. */
    "zeplin.list_screen_versions": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The screen ID.
         * @minLength 1
         */
        screenId: string;
      };
      output: {
        /** The list of screen versions. */
        versions: Array<{
          /** The unique identifier of the screen version. */
          id: string;
          /**
           * A Unix timestamp in seconds.
           * @minimum 0
           */
          created?: number;
          /** The commit message for the version. */
          commitMessage?: string;
          /** The version number. */
          version?: number;
          /** A raw Zeplin object. */
          author?: Record<string, unknown>;
        }>;
      };
    };
  }
}
