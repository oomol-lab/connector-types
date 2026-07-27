import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Autoblogging.ai article generation job and return the article ID plus credit metadata. */
    "autoblogger.create_article": {
      input: {
        /**
         * The meaningful and descriptive title for the article.
         * @minLength 1
         */
        title: string;
        /**
         * Optional Autoblogging.ai project name used for organization.
         * @minLength 1
         */
        project_name?: string;
        /** The language for the generated article. */
        language?: "English" | "EnglishUK" | "Arabic" | "Bulgarian" | "Chinese" | "Danish" | "Dutch" | "Estonian" | "Finnish" | "French" | "German" | "Greek" | "Hindi" | "Hungarian" | "Indonesian" | "Italian" | "Japanese" | "Korean" | "Latvian" | "Lithuanian" | "Norwegian" | "Polish" | "Portuguese" | "Portuguese_BR" | "Romanian" | "Russian" | "Slovak" | "Slovenian" | "Spanish" | "Swedish" | "Turkish" | "Vietnamese";
        /** Desired article length. */
        length?: "short" | "medium" | "long";
        /** Narrative perspective for the article. */
        tone_of_voice?: "first-person" | "second-person" | "third-person";
        /** Writing style to use for the article. */
        writing_style?: "premium_writing_style_1" | "conversational" | "professional" | "witty" | "snippet_optimizer" | "less_ai_words";
        /** Type of article to generate. */
        type_of_article?: "informative" | "listicle" | "places" | "service_pages";
        /** Whether this Autoblogging.ai option is enabled. */
        faqs?: "yes" | "no";
        /** Whether to generate images for the article. This costs one extra credit when enabled. */
        imagegeneration?: "yes" | "no";
        /** Whether to use enhanced article quality. This costs one extra credit when enabled. */
        godlikemode?: "yes" | "no";
        /**
         * Two-letter country code for SERP analysis, such as us, uk, or de.
         * @minLength 2
         * @maxLength 2
         */
        serp_location?: string;
        /** Whether this Autoblogging.ai option is enabled. */
        outlinefromcompetition?: "yes" | "no";
        /** Whether this Autoblogging.ai option is enabled. */
        keytakeaways?: "yes" | "no";
        /** Whether this Autoblogging.ai option is enabled. */
        externallinks?: "yes" | "no";
        /** Whether this Autoblogging.ai option is enabled. */
        videoembed?: "yes" | "no";
        /**
         * Additional context for article generation. Use na when no source context is needed.
         * @minLength 1
         * @maxLength 300
         */
        source_context?: string;
        /** Whether this Autoblogging.ai option is enabled. */
        wordpresspush?: "yes" | "no";
        /** WordPress site URL when wordpresspush is yes. */
        wp_siteurl?: string;
        /** WordPress username when wordpresspush is yes. */
        wp_username?: string;
        /** WordPress password when wordpresspush is yes. */
        wp_password?: string;
        /** WordPress category name when wordpresspush is yes. */
        wp_category?: string;
        /** WordPress post status when wordpresspush is yes. */
        wp_status?: "publish" | "draft";
        /** Custom WordPress text, or na when unused. */
        wp_customtext?: string;
        /** Whether this Autoblogging.ai option is enabled. */
        applyautogenerateslugs?: "yes" | "no";
        /** Whether this Autoblogging.ai option is enabled. */
        applyautogeneratetitles?: "yes" | "no";
        /** Whether this Autoblogging.ai option is enabled. */
        combotpush?: "yes" | "no";
        /** ComBot trigger ID, or na when unused. */
        combot_triggerid?: string;
        /** Whether this Autoblogging.ai option is enabled. */
        intense_optimize?: "yes" | "no";
        /** Whether to use AI proofreading. This costs one extra credit when enabled. */
        ai_proofreader?: "yes" | "no";
        /**
         * Proofreading guidelines when ai_proofreader is yes, or na when unused.
         * @minLength 1
         * @maxLength 3000
         */
        proofreading_guidelines?: string;
        /** Whether to generate infographics. This costs one extra credit when enabled. */
        infographics?: "yes" | "no";
      };
      output: {
        /** Autoblogging.ai creation status. */
        status: string;
        /** Article ID token to pass to fetch_article. */
        article_id: string;
        /** Credits consumed by the creation request. */
        credits_used?: number;
        /** Credits remaining after the creation request. */
        credits_remaining?: number;
      };
    };
    /** Fetch an Autoblogging.ai article generation job by article ID and return pending, completed, or failed status. */
    "autoblogger.fetch_article": {
      input: {
        /**
         * Article ID token returned by create_article.
         * @minLength 1
         */
        url_token: string;
      };
      output: {
        /** Current article generation status. */
        status: "pending" | "completed" | "failed";
        /** Status message when the article is still being generated. */
        message?: string;
        /** Final generated article title when the article is completed. */
        final_title?: string;
        /** Final generated article content when the article is completed. */
        final_article?: string;
        /** Failure reason when article generation failed. */
        error_message?: string;
      };
    };
  }
}
