import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel one Netlify deploy by deploy ID. */
    "netlify.cancel_deploy": {
      input: {
        /**
         * The Netlify deploy ID.
         * @minLength 1
         */
        deployId: string;
      };
      output: {
        /** A Netlify deploy returned by the API. */
        deploy: {
          /** The Netlify deploy ID. */
          id?: string;
          /** The Netlify site ID for this deploy. */
          site_id?: string;
          /** The Netlify user ID that created the deploy. */
          user_id?: string;
          /** The Netlify build ID associated with the deploy. */
          build_id?: string;
          /** The deploy state reported by Netlify. */
          state?: string;
          /** The site name for this deploy. */
          name?: string;
          /** The primary URL for this deploy. */
          url?: string;
          /** The HTTPS URL for this deploy. */
          ssl_url?: string;
          /** The Netlify admin URL for this deploy. */
          admin_url?: string;
          /** The unique deploy URL. */
          deploy_url?: string;
          /** The unique HTTPS deploy URL. */
          deploy_ssl_url?: string;
          /** The screenshot URL for this deploy. */
          screenshot_url?: string;
          /** Whether this deploy is a draft deploy. */
          draft?: boolean;
          /** The Git branch used for this deploy. */
          branch?: string;
          /** The commit reference used for this deploy. */
          commit_ref?: string;
          /** The commit URL used for this deploy. */
          commit_url?: string;
          /** Whether Netlify skipped this deploy. */
          skipped?: boolean;
          /** The timestamp when the deploy was created. */
          created_at?: string;
          /** The timestamp when the deploy was last updated. */
          updated_at?: string;
          /** The timestamp when the deploy was published. */
          published_at?: string;
          /** The deploy title. */
          title?: string;
          /** The deploy context such as production or deploy-preview. */
          context?: string;
          /** Whether the deploy is locked. */
          locked?: boolean;
          /** The deploy review URL. */
          review_url?: string;
          /** The framework detected for this deploy. */
          framework?: string;
          /** The deploy error message when Netlify returns one. */
          error_message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Start a Netlify build for one site without uploading binary files. */
    "netlify.create_site_build": {
      input: {
        /**
         * The Netlify site ID or site name.
         * @minLength 1
         */
        siteId: string;
        /**
         * The branch to build. Omit this for a production deploy.
         * @minLength 1
         */
        branch?: string;
        /** Whether Netlify should clear the build cache before building. */
        clearCache?: boolean;
        /**
         * The Netlify build image tag to use.
         * @minLength 1
         */
        image?: string;
        /**
         * The Netlify build template ID to use.
         * @minLength 1
         */
        templateId?: string;
        /**
         * The title to attach to the build.
         * @minLength 1
         */
        title?: string;
      };
      output: {
        /** A Netlify build returned by the API. */
        build: {
          /** The Netlify build ID. */
          id?: string;
          /** The deploy ID associated with the build. */
          deploy_id?: string;
          /** The commit SHA associated with the build. */
          sha?: string;
          /** Whether the build is complete. */
          done?: boolean;
          /** The build error message when Netlify returns one. */
          error?: string;
          /** The timestamp when the build was created. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Netlify site deploy by downloading a public zip file URL and uploading it to Netlify. */
    "netlify.create_site_deploy_from_zip_url": {
      input: {
        /**
         * The Netlify site ID or site name.
         * @minLength 1
         */
        siteId: string;
        /**
         * The public HTTP or HTTPS URL of a zip file containing the site files. For local files, upload the file with oo file upload and pass its downloadUrl.
         * @format uri
         */
        zipUrl: string;
        /**
         * The title to attach to the deploy.
         * @minLength 1
         */
        title?: string;
      };
      output: {
        /** A Netlify deploy returned by the API. */
        deploy: {
          /** The Netlify deploy ID. */
          id?: string;
          /** The Netlify site ID for this deploy. */
          site_id?: string;
          /** The Netlify user ID that created the deploy. */
          user_id?: string;
          /** The Netlify build ID associated with the deploy. */
          build_id?: string;
          /** The deploy state reported by Netlify. */
          state?: string;
          /** The site name for this deploy. */
          name?: string;
          /** The primary URL for this deploy. */
          url?: string;
          /** The HTTPS URL for this deploy. */
          ssl_url?: string;
          /** The Netlify admin URL for this deploy. */
          admin_url?: string;
          /** The unique deploy URL. */
          deploy_url?: string;
          /** The unique HTTPS deploy URL. */
          deploy_ssl_url?: string;
          /** The screenshot URL for this deploy. */
          screenshot_url?: string;
          /** Whether this deploy is a draft deploy. */
          draft?: boolean;
          /** The Git branch used for this deploy. */
          branch?: string;
          /** The commit reference used for this deploy. */
          commit_ref?: string;
          /** The commit URL used for this deploy. */
          commit_url?: string;
          /** Whether Netlify skipped this deploy. */
          skipped?: boolean;
          /** The timestamp when the deploy was created. */
          created_at?: string;
          /** The timestamp when the deploy was last updated. */
          updated_at?: string;
          /** The timestamp when the deploy was published. */
          published_at?: string;
          /** The deploy title. */
          title?: string;
          /** The deploy context such as production or deploy-preview. */
          context?: string;
          /** Whether the deploy is locked. */
          locked?: boolean;
          /** The deploy review URL. */
          review_url?: string;
          /** The framework detected for this deploy. */
          framework?: string;
          /** The deploy error message when Netlify returns one. */
          error_message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Netlify form submission by submission ID. */
    "netlify.delete_submission": {
      input: {
        /**
         * The Netlify form submission ID.
         * @minLength 1
         */
        submissionId: string;
      };
      output: {
        /** Whether the Netlify request completed successfully. */
        success: boolean;
      };
    };
    /** Retrieve one Netlify account membership, including billing and capability fields returned by Netlify. */
    "netlify.get_account": {
      input: {
        /**
         * The Netlify account ID.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** A Netlify account membership returned by the API. */
        account: {
          /** The Netlify account ID. */
          id?: string;
          /** The Netlify account display name. */
          name?: string;
          /** The Netlify account slug. */
          slug?: string;
          /** The Netlify account type. */
          type?: string;
          /** The human-readable Netlify account type name. */
          type_name?: string;
          /** The billing email address for the account. */
          billing_email?: string;
          /** The Netlify user IDs that own the account. */
          owner_ids?: Array<string>;
          /** The timestamp when the account was created. */
          created_at?: string;
          /** The timestamp when the account was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Netlify build by build ID. */
    "netlify.get_build": {
      input: {
        /**
         * The Netlify build ID.
         * @minLength 1
         */
        buildId: string;
      };
      output: {
        /** A Netlify build returned by the API. */
        build: {
          /** The Netlify build ID. */
          id?: string;
          /** The deploy ID associated with the build. */
          deploy_id?: string;
          /** The commit SHA associated with the build. */
          sha?: string;
          /** Whether the build is complete. */
          done?: boolean;
          /** The build error message when Netlify returns one. */
          error?: string;
          /** The timestamp when the build was created. */
          created_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Netlify user associated with the connected credential. */
    "netlify.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Netlify user returned by the API. */
        user: {
          /** The Netlify user ID, or null when Netlify does not return one. */
          id?: string | null;
          /** The Netlify user UID, or null when Netlify does not return one. */
          uid?: string | null;
          /** The user's full name, or null when it is not set. */
          full_name?: string | null;
          /** The user's avatar URL, or null when it is not set. */
          avatar_url?: string | null;
          /** The user's email address, or null when it is not set. */
          email?: string | null;
          /** The number of sites associated with the user, or null when unknown. */
          site_count?: number | null;
          /** The timestamp when the user was created, or null. */
          created_at?: string | null;
          /** The timestamp when the user last logged in, or null. */
          last_login?: string | null;
          /** The login providers connected to the user, or null. */
          login_providers?: Array<string> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Netlify deploy by deploy ID. */
    "netlify.get_deploy": {
      input: {
        /**
         * The Netlify deploy ID.
         * @minLength 1
         */
        deployId: string;
      };
      output: {
        /** A Netlify deploy returned by the API. */
        deploy: {
          /** The Netlify deploy ID. */
          id?: string;
          /** The Netlify site ID for this deploy. */
          site_id?: string;
          /** The Netlify user ID that created the deploy. */
          user_id?: string;
          /** The Netlify build ID associated with the deploy. */
          build_id?: string;
          /** The deploy state reported by Netlify. */
          state?: string;
          /** The site name for this deploy. */
          name?: string;
          /** The primary URL for this deploy. */
          url?: string;
          /** The HTTPS URL for this deploy. */
          ssl_url?: string;
          /** The Netlify admin URL for this deploy. */
          admin_url?: string;
          /** The unique deploy URL. */
          deploy_url?: string;
          /** The unique HTTPS deploy URL. */
          deploy_ssl_url?: string;
          /** The screenshot URL for this deploy. */
          screenshot_url?: string;
          /** Whether this deploy is a draft deploy. */
          draft?: boolean;
          /** The Git branch used for this deploy. */
          branch?: string;
          /** The commit reference used for this deploy. */
          commit_ref?: string;
          /** The commit URL used for this deploy. */
          commit_url?: string;
          /** Whether Netlify skipped this deploy. */
          skipped?: boolean;
          /** The timestamp when the deploy was created. */
          created_at?: string;
          /** The timestamp when the deploy was last updated. */
          updated_at?: string;
          /** The timestamp when the deploy was published. */
          published_at?: string;
          /** The deploy title. */
          title?: string;
          /** The deploy context such as production or deploy-preview. */
          context?: string;
          /** Whether the deploy is locked. */
          locked?: boolean;
          /** The deploy review URL. */
          review_url?: string;
          /** The framework detected for this deploy. */
          framework?: string;
          /** The deploy error message when Netlify returns one. */
          error_message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Netlify site by site ID or name. */
    "netlify.get_site": {
      input: {
        /**
         * The Netlify site ID or site name.
         * @minLength 1
         */
        siteId: string;
      };
      output: {
        /** A Netlify site returned by the API. */
        site: {
          /** The Netlify site ID. */
          id?: string;
          /** The site state reported by Netlify. */
          state?: string;
          /** The site plan. */
          plan?: string;
          /** The Netlify site name. */
          name?: string;
          /** The custom domain configured for the site. */
          custom_domain?: string;
          /** The domain aliases configured for the site. */
          domain_aliases?: Array<string>;
          /** The primary site URL. */
          url?: string;
          /** The HTTPS site URL. */
          ssl_url?: string;
          /** The Netlify admin URL for the site. */
          admin_url?: string;
          /** The screenshot URL for the site. */
          screenshot_url?: string;
          /** The timestamp when the site was created. */
          created_at?: string;
          /** The timestamp when the site was last updated. */
          updated_at?: string;
          /** The Netlify user ID that owns the site. */
          user_id?: string;
          /** Whether SSL is enabled for the site. */
          ssl?: boolean;
          /** Whether HTTP requests are redirected to HTTPS. */
          force_ssl?: boolean;
          /** Whether Netlify manages DNS for the site. */
          managed_dns?: boolean;
          /** The latest unique deploy URL for the site. */
          deploy_url?: string;
          /** A Netlify deploy returned by the API. */
          published_deploy?: {
            /** The Netlify deploy ID. */
            id?: string;
            /** The Netlify site ID for this deploy. */
            site_id?: string;
            /** The Netlify user ID that created the deploy. */
            user_id?: string;
            /** The Netlify build ID associated with the deploy. */
            build_id?: string;
            /** The deploy state reported by Netlify. */
            state?: string;
            /** The site name for this deploy. */
            name?: string;
            /** The primary URL for this deploy. */
            url?: string;
            /** The HTTPS URL for this deploy. */
            ssl_url?: string;
            /** The Netlify admin URL for this deploy. */
            admin_url?: string;
            /** The unique deploy URL. */
            deploy_url?: string;
            /** The unique HTTPS deploy URL. */
            deploy_ssl_url?: string;
            /** The screenshot URL for this deploy. */
            screenshot_url?: string;
            /** Whether this deploy is a draft deploy. */
            draft?: boolean;
            /** The Git branch used for this deploy. */
            branch?: string;
            /** The commit reference used for this deploy. */
            commit_ref?: string;
            /** The commit URL used for this deploy. */
            commit_url?: string;
            /** Whether Netlify skipped this deploy. */
            skipped?: boolean;
            /** The timestamp when the deploy was created. */
            created_at?: string;
            /** The timestamp when the deploy was last updated. */
            updated_at?: string;
            /** The timestamp when the deploy was published. */
            published_at?: string;
            /** The deploy title. */
            title?: string;
            /** The deploy context such as production or deploy-preview. */
            context?: string;
            /** Whether the deploy is locked. */
            locked?: boolean;
            /** The deploy review URL. */
            review_url?: string;
            /** The framework detected for this deploy. */
            framework?: string;
            /** The deploy error message when Netlify returns one. */
            error_message?: string;
            [key: string]: unknown;
          };
          /** The Netlify account ID that owns the site. */
          account_id?: string;
          /** The Netlify account display name that owns the site. */
          account_name?: string;
          /** The Netlify account slug that owns the site. */
          account_slug?: string;
          /** The Git provider connected to the site. */
          git_provider?: string;
          /** The default deploy hook URL for the site. */
          deploy_hook?: string;
          /** The build image configured for the site. */
          build_image?: string;
          /** The functions region configured for the site. */
          functions_region?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Netlify accounts accessible to the connected credential. */
    "netlify.list_accounts": {
      input: Record<string, never>;
      output: {
        /** The Netlify accounts returned by the request. */
        accounts: Array<{
          /** The Netlify account ID. */
          id?: string;
          /** The Netlify account display name. */
          name?: string;
          /** The Netlify account slug. */
          slug?: string;
          /** The Netlify account type. */
          type?: string;
          /** The human-readable Netlify account type name. */
          type_name?: string;
          /** The billing email address for the account. */
          billing_email?: string;
          /** The Netlify user IDs that own the account. */
          owner_ids?: Array<string>;
          /** The timestamp when the account was created. */
          created_at?: string;
          /** The timestamp when the account was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of Netlify accounts returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List deploys for one Netlify site. */
    "netlify.list_site_deploys": {
      input: {
        /**
         * The Netlify site ID or site name.
         * @minLength 1
         */
        siteId: string;
        /**
         * The page of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * How many results to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The Netlify deploys returned by the request. */
        deploys: Array<{
          /** The Netlify deploy ID. */
          id?: string;
          /** The Netlify site ID for this deploy. */
          site_id?: string;
          /** The Netlify user ID that created the deploy. */
          user_id?: string;
          /** The Netlify build ID associated with the deploy. */
          build_id?: string;
          /** The deploy state reported by Netlify. */
          state?: string;
          /** The site name for this deploy. */
          name?: string;
          /** The primary URL for this deploy. */
          url?: string;
          /** The HTTPS URL for this deploy. */
          ssl_url?: string;
          /** The Netlify admin URL for this deploy. */
          admin_url?: string;
          /** The unique deploy URL. */
          deploy_url?: string;
          /** The unique HTTPS deploy URL. */
          deploy_ssl_url?: string;
          /** The screenshot URL for this deploy. */
          screenshot_url?: string;
          /** Whether this deploy is a draft deploy. */
          draft?: boolean;
          /** The Git branch used for this deploy. */
          branch?: string;
          /** The commit reference used for this deploy. */
          commit_ref?: string;
          /** The commit URL used for this deploy. */
          commit_url?: string;
          /** Whether Netlify skipped this deploy. */
          skipped?: boolean;
          /** The timestamp when the deploy was created. */
          created_at?: string;
          /** The timestamp when the deploy was last updated. */
          updated_at?: string;
          /** The timestamp when the deploy was published. */
          published_at?: string;
          /** The deploy title. */
          title?: string;
          /** The deploy context such as production or deploy-preview. */
          context?: string;
          /** Whether the deploy is locked. */
          locked?: boolean;
          /** The deploy review URL. */
          review_url?: string;
          /** The framework detected for this deploy. */
          framework?: string;
          /** The deploy error message when Netlify returns one. */
          error_message?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of Netlify deploys returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List forms detected for one Netlify site. */
    "netlify.list_site_forms": {
      input: {
        /**
         * The Netlify site ID or site name.
         * @minLength 1
         */
        siteId: string;
      };
      output: {
        /** The Netlify forms returned by the request. */
        forms: Array<{
          /** The Netlify form ID. */
          id?: string;
          /** The Netlify site ID that owns the form. */
          site_id?: string;
          /** The form name. */
          name?: string;
          /** The paths where the form appears. */
          paths?: Array<string>;
          /** The number of submissions Netlify reports for the form. */
          submission_count?: number;
          /** The form fields returned by Netlify. */
          fields?: Array<Record<string, unknown>>;
          /** The timestamp when the form was created. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of Netlify forms returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List Netlify sites accessible to the connected credential. */
    "netlify.list_sites": {
      input: {
        /**
         * The page of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * How many results to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * Only return sites whose name matches this value.
         * @minLength 1
         */
        name?: string;
        /** Which Netlify sites to include in the result. */
        filter?: "all" | "owner" | "guest";
      };
      output: {
        /** The Netlify sites returned by the request. */
        sites: Array<{
          /** The Netlify site ID. */
          id?: string;
          /** The site state reported by Netlify. */
          state?: string;
          /** The site plan. */
          plan?: string;
          /** The Netlify site name. */
          name?: string;
          /** The custom domain configured for the site. */
          custom_domain?: string;
          /** The domain aliases configured for the site. */
          domain_aliases?: Array<string>;
          /** The primary site URL. */
          url?: string;
          /** The HTTPS site URL. */
          ssl_url?: string;
          /** The Netlify admin URL for the site. */
          admin_url?: string;
          /** The screenshot URL for the site. */
          screenshot_url?: string;
          /** The timestamp when the site was created. */
          created_at?: string;
          /** The timestamp when the site was last updated. */
          updated_at?: string;
          /** The Netlify user ID that owns the site. */
          user_id?: string;
          /** Whether SSL is enabled for the site. */
          ssl?: boolean;
          /** Whether HTTP requests are redirected to HTTPS. */
          force_ssl?: boolean;
          /** Whether Netlify manages DNS for the site. */
          managed_dns?: boolean;
          /** The latest unique deploy URL for the site. */
          deploy_url?: string;
          /** A Netlify deploy returned by the API. */
          published_deploy?: {
            /** The Netlify deploy ID. */
            id?: string;
            /** The Netlify site ID for this deploy. */
            site_id?: string;
            /** The Netlify user ID that created the deploy. */
            user_id?: string;
            /** The Netlify build ID associated with the deploy. */
            build_id?: string;
            /** The deploy state reported by Netlify. */
            state?: string;
            /** The site name for this deploy. */
            name?: string;
            /** The primary URL for this deploy. */
            url?: string;
            /** The HTTPS URL for this deploy. */
            ssl_url?: string;
            /** The Netlify admin URL for this deploy. */
            admin_url?: string;
            /** The unique deploy URL. */
            deploy_url?: string;
            /** The unique HTTPS deploy URL. */
            deploy_ssl_url?: string;
            /** The screenshot URL for this deploy. */
            screenshot_url?: string;
            /** Whether this deploy is a draft deploy. */
            draft?: boolean;
            /** The Git branch used for this deploy. */
            branch?: string;
            /** The commit reference used for this deploy. */
            commit_ref?: string;
            /** The commit URL used for this deploy. */
            commit_url?: string;
            /** Whether Netlify skipped this deploy. */
            skipped?: boolean;
            /** The timestamp when the deploy was created. */
            created_at?: string;
            /** The timestamp when the deploy was last updated. */
            updated_at?: string;
            /** The timestamp when the deploy was published. */
            published_at?: string;
            /** The deploy title. */
            title?: string;
            /** The deploy context such as production or deploy-preview. */
            context?: string;
            /** Whether the deploy is locked. */
            locked?: boolean;
            /** The deploy review URL. */
            review_url?: string;
            /** The framework detected for this deploy. */
            framework?: string;
            /** The deploy error message when Netlify returns one. */
            error_message?: string;
            [key: string]: unknown;
          };
          /** The Netlify account ID that owns the site. */
          account_id?: string;
          /** The Netlify account display name that owns the site. */
          account_name?: string;
          /** The Netlify account slug that owns the site. */
          account_slug?: string;
          /** The Git provider connected to the site. */
          git_provider?: string;
          /** The default deploy hook URL for the site. */
          deploy_hook?: string;
          /** The build image configured for the site. */
          build_image?: string;
          /** The functions region configured for the site. */
          functions_region?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of Netlify sites returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List Netlify form submissions by site or by form. */
    "netlify.list_submissions": {
      input: {
        /**
         * The Netlify site ID or site name.
         * @minLength 1
         */
        siteId?: string;
        /**
         * The Netlify form ID.
         * @minLength 1
         */
        formId?: string;
        /**
         * The page of results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * How many results to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The Netlify form submissions returned by the request. */
        submissions: Array<{
          /** The Netlify submission ID. */
          id?: string;
          /** The form-local submission number. */
          number?: number;
          /** The submitter email address. */
          email?: string;
          /** The submitter name. */
          name?: string;
          /** The submitter first name. */
          first_name?: string;
          /** The submitter last name. */
          last_name?: string;
          /** The submitter company. */
          company?: string;
          /** The submission summary. */
          summary?: string;
          /** The submission body. */
          body?: string;
          /** The raw form field values submitted to Netlify. */
          data?: Record<string, unknown>;
          /** The timestamp when the submission was created. */
          created_at?: string;
          /** The site URL associated with the submission. */
          site_url?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of Netlify submissions returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Lock one Netlify deploy by deploy ID. */
    "netlify.lock_deploy": {
      input: {
        /**
         * The Netlify deploy ID.
         * @minLength 1
         */
        deployId: string;
      };
      output: {
        /** A Netlify deploy returned by the API. */
        deploy: {
          /** The Netlify deploy ID. */
          id?: string;
          /** The Netlify site ID for this deploy. */
          site_id?: string;
          /** The Netlify user ID that created the deploy. */
          user_id?: string;
          /** The Netlify build ID associated with the deploy. */
          build_id?: string;
          /** The deploy state reported by Netlify. */
          state?: string;
          /** The site name for this deploy. */
          name?: string;
          /** The primary URL for this deploy. */
          url?: string;
          /** The HTTPS URL for this deploy. */
          ssl_url?: string;
          /** The Netlify admin URL for this deploy. */
          admin_url?: string;
          /** The unique deploy URL. */
          deploy_url?: string;
          /** The unique HTTPS deploy URL. */
          deploy_ssl_url?: string;
          /** The screenshot URL for this deploy. */
          screenshot_url?: string;
          /** Whether this deploy is a draft deploy. */
          draft?: boolean;
          /** The Git branch used for this deploy. */
          branch?: string;
          /** The commit reference used for this deploy. */
          commit_ref?: string;
          /** The commit URL used for this deploy. */
          commit_url?: string;
          /** Whether Netlify skipped this deploy. */
          skipped?: boolean;
          /** The timestamp when the deploy was created. */
          created_at?: string;
          /** The timestamp when the deploy was last updated. */
          updated_at?: string;
          /** The timestamp when the deploy was published. */
          published_at?: string;
          /** The deploy title. */
          title?: string;
          /** The deploy context such as production or deploy-preview. */
          context?: string;
          /** Whether the deploy is locked. */
          locked?: boolean;
          /** The deploy review URL. */
          review_url?: string;
          /** The framework detected for this deploy. */
          framework?: string;
          /** The deploy error message when Netlify returns one. */
          error_message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Notify Netlify that one build has started. */
    "netlify.notify_build_start": {
      input: {
        /**
         * The Netlify build ID.
         * @minLength 1
         */
        buildId: string;
      };
      output: {
        /** Whether the Netlify request completed successfully. */
        success: boolean;
      };
    };
    /** Unlock one Netlify deploy by deploy ID. */
    "netlify.unlock_deploy": {
      input: {
        /**
         * The Netlify deploy ID.
         * @minLength 1
         */
        deployId: string;
      };
      output: {
        /** A Netlify deploy returned by the API. */
        deploy: {
          /** The Netlify deploy ID. */
          id?: string;
          /** The Netlify site ID for this deploy. */
          site_id?: string;
          /** The Netlify user ID that created the deploy. */
          user_id?: string;
          /** The Netlify build ID associated with the deploy. */
          build_id?: string;
          /** The deploy state reported by Netlify. */
          state?: string;
          /** The site name for this deploy. */
          name?: string;
          /** The primary URL for this deploy. */
          url?: string;
          /** The HTTPS URL for this deploy. */
          ssl_url?: string;
          /** The Netlify admin URL for this deploy. */
          admin_url?: string;
          /** The unique deploy URL. */
          deploy_url?: string;
          /** The unique HTTPS deploy URL. */
          deploy_ssl_url?: string;
          /** The screenshot URL for this deploy. */
          screenshot_url?: string;
          /** Whether this deploy is a draft deploy. */
          draft?: boolean;
          /** The Git branch used for this deploy. */
          branch?: string;
          /** The commit reference used for this deploy. */
          commit_ref?: string;
          /** The commit URL used for this deploy. */
          commit_url?: string;
          /** Whether Netlify skipped this deploy. */
          skipped?: boolean;
          /** The timestamp when the deploy was created. */
          created_at?: string;
          /** The timestamp when the deploy was last updated. */
          updated_at?: string;
          /** The timestamp when the deploy was published. */
          published_at?: string;
          /** The deploy title. */
          title?: string;
          /** The deploy context such as production or deploy-preview. */
          context?: string;
          /** Whether the deploy is locked. */
          locked?: boolean;
          /** The deploy review URL. */
          review_url?: string;
          /** The framework detected for this deploy. */
          framework?: string;
          /** The deploy error message when Netlify returns one. */
          error_message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload one file into an existing Netlify deploy by downloading a public file URL first. */
    "netlify.upload_deploy_file_from_url": {
      input: {
        /**
         * The Netlify deploy ID.
         * @minLength 1
         */
        deployId: string;
        /**
         * The deploy-relative file path to upload, such as index.html.
         * @minLength 1
         */
        path: string;
        /**
         * The public HTTP or HTTPS URL whose bytes should be uploaded. For local files, upload the file with oo file upload and pass its downloadUrl.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** A Netlify deploy file returned by the API. */
        file: {
          /** The Netlify file ID. */
          id?: string;
          /** The deploy-relative file path. */
          path?: string;
          /** The SHA digest Netlify reports for the file. */
          sha?: string;
          /** The MIME type Netlify reports for the file. */
          mime_type?: string;
          /** The file size in bytes. */
          size?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Upload one Netlify function bundle into an existing deploy by downloading a public zip file URL first. */
    "netlify.upload_deploy_function_from_zip_url": {
      input: {
        /**
         * The Netlify deploy ID.
         * @minLength 1
         */
        deployId: string;
        /**
         * The Netlify function name.
         * @minLength 1
         */
        name: string;
        /**
         * The public HTTP or HTTPS URL of the zipped function bundle. For local files, upload the file with oo file upload and pass its downloadUrl.
         * @format uri
         */
        zipUrl: string;
        /**
         * The Netlify function runtime.
         * @minLength 1
         */
        runtime?: string;
        /**
         * The Netlify function invocation mode.
         * @minLength 1
         */
        invocationMode?: string;
        /**
         * The function timeout in seconds.
         * @exclusiveMinimum 0
         */
        timeout?: number;
        /**
         * The Netlify retry count header value to send.
         * @minimum 0
         */
        retryCount?: number;
      };
      output: {
        /** A Netlify function returned by the API. */
        function: {
          /** The Netlify function ID. */
          id?: string;
          /** The Netlify function name. */
          name?: string;
          /** The SHA digest Netlify reports for the function bundle. */
          sha?: string;
          /** The Netlify function region. */
          region?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
