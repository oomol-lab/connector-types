import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get an Indiegogo creator by the URL name shown on their public creator page. */
    "indiegogo.get_creator": {
      input: {
        /**
         * The URL name from an Indiegogo creator or project page.
         * @minLength 1
         * @pattern \S
         */
        urlName: string;
      };
      output: {
        /** A creator returned by the Indiegogo Public API. */
        creator: {
          /** The creator's public description. */
          description: string;
          /** The creator's display name. */
          name: string;
          /** The creator's unique URL name. */
          urlName: string;
          /**
           * The URL of the creator's thumbnail image.
           * @format uri
           */
          thumbImageUrl: string;
          /**
           * The URL of the creator's public Indiegogo page.
           * @format uri
           */
          creatorPageUrl: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Indiegogo crowdfunding project by its URL name when it is in a public campaign or pledge-manager phase. */
    "indiegogo.get_crowdfunding_project": {
      input: {
        /**
         * The URL name from an Indiegogo creator or project page.
         * @minLength 1
         * @pattern \S
         */
        urlName: string;
      };
      output: {
        /** A crowdfunding project returned by the Indiegogo Public API. */
        project: {
          /**
           * The number of project backers.
           * @minimum 0
           */
          backerCount: number;
          /**
           * The number of project updates.
           * @minimum 0
           */
          updateCount: number;
          /**
           * The number of project rewards.
           * @minimum 0
           */
          rewardCount: number;
          /**
           * When the crowdfunding campaign started.
           * @format date-time
           */
          campaignStartDate: string;
          /**
           * When the crowdfunding campaign ends or ended.
           * @format date-time
           */
          campaignEndDate: string;
          /** The campaign funding goal, or null when Indiegogo does not publish one. */
          campaignGoal: number | null;
          /** The project creator's display name. */
          creatorName: string;
          /** The project creator's unique URL name. */
          creatorUrlName: string;
          /** The short currency code used by the project. */
          currencyShortName: string;
          /** The amount of funds gathered by the project. */
          fundsGathered: number;
          /** The public project name. */
          projectName: string;
          /** The project's unique URL name. */
          projectUrlName: string;
          /** The project's short public description. */
          shortDescription: string;
          /**
           * The number of project comments.
           * @minimum 0
           */
          commentCount: number;
          /**
           * The URL of the public project page.
           * @format uri
           */
          projectHomeUrl: string;
          /**
           * The URL of the project's public image.
           * @format uri
           */
          projectImageUrl: string;
          [key: string]: unknown;
        };
      };
    };
    /** List active Indiegogo crowdfunding projects ordered by campaign start date. */
    "indiegogo.list_active_crowdfunding_projects": {
      input: Record<string, never>;
      output: {
        /** The active crowdfunding projects returned by Indiegogo. */
        projects: Array<{
          /**
           * The number of project backers.
           * @minimum 0
           */
          backerCount: number;
          /**
           * The number of project updates.
           * @minimum 0
           */
          updateCount: number;
          /**
           * The number of project rewards.
           * @minimum 0
           */
          rewardCount: number;
          /**
           * When the crowdfunding campaign started.
           * @format date-time
           */
          campaignStartDate: string;
          /**
           * When the crowdfunding campaign ends or ended.
           * @format date-time
           */
          campaignEndDate: string;
          /** The campaign funding goal, or null when Indiegogo does not publish one. */
          campaignGoal: number | null;
          /** The project creator's display name. */
          creatorName: string;
          /** The project creator's unique URL name. */
          creatorUrlName: string;
          /** The short currency code used by the project. */
          currencyShortName: string;
          /** The amount of funds gathered by the project. */
          fundsGathered: number;
          /** The public project name. */
          projectName: string;
          /** The project's unique URL name. */
          projectUrlName: string;
          /** The project's short public description. */
          shortDescription: string;
          /**
           * The number of project comments.
           * @minimum 0
           */
          commentCount: number;
          /**
           * The URL of the public project page.
           * @format uri
           */
          projectHomeUrl: string;
          /**
           * The URL of the project's public image.
           * @format uri
           */
          projectImageUrl: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
