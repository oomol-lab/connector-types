import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one saved Campaign Cleaner campaign by campaign ID. */
    "campaign_cleaner.delete_campaign": {
      input: {
        /**
         * The Campaign Cleaner campaign identifier.
         * @minLength 1
         */
        campaign_id: string;
      };
      output: {
        /** Whether Campaign Cleaner deleted the campaign successfully. */
        status: "success" | "failure";
        /** The upstream failure reason when the delete request is unsuccessful. */
        error?: string;
      };
    };
    /** Retrieve the full Campaign Cleaner analysis payload for one saved campaign. */
    "campaign_cleaner.get_campaign": {
      input: {
        /**
         * The Campaign Cleaner campaign identifier.
         * @minLength 1
         */
        campaign_id: string;
        /** Whether the returned campaign HTML should be minimized. */
        minimize_html?: boolean;
      };
      output: {
        /** The full Campaign Cleaner campaign analysis object. */
        campaign: Record<string, unknown>;
      };
    };
    /** Download a Campaign Cleaner PDF analysis report and return it as a transit file. */
    "campaign_cleaner.get_campaign_pdf_analysis": {
      input: {
        /**
         * The Campaign Cleaner campaign identifier.
         * @minLength 1
         */
        campaign_id: string;
      };
      output: {
        /** The downloadable Campaign Cleaner PDF report. */
        content: {
          /** The filename of the downloaded PDF report. */
          name: string;
          /** The MIME type of the downloaded PDF report. */
          mimetype: string;
          /** The transit URL for downloading the PDF report. */
          s3url: string;
        };
      };
    };
    /** Fetch the current processing status of one submitted Campaign Cleaner campaign. */
    "campaign_cleaner.get_campaign_status": {
      input: {
        /**
         * The Campaign Cleaner campaign identifier.
         * @minLength 1
         */
        campaign_id: string;
      };
      output: {
        /** The current processing summary for the requested campaign. */
        campaign_status: {
          /** The Campaign Cleaner campaign identifier. */
          id: string;
          /** The saved campaign name. */
          campaign_name: string;
          /** The Campaign Cleaner campaign lifecycle status. */
          status: "processing" | "completed" | "paused";
          /** The timestamp when the campaign was saved or submitted. */
          date_added: string;
        };
      };
    };
    /** Get the remaining Campaign Cleaner credits available to the current API key. */
    "campaign_cleaner.get_credits": {
      input: Record<string, never>;
      output: {
        /** The remaining Campaign Cleaner credits. */
        credits: number;
      };
    };
    /** List saved Campaign Cleaner campaigns together with their current processing status. */
    "campaign_cleaner.list_campaigns": {
      input: Record<string, never>;
      output: {
        /** The saved campaigns visible to the current API key. */
        campaigns: Array<{
          /** The Campaign Cleaner campaign identifier. */
          id: string;
          /** The saved campaign name. */
          campaign_name: string;
          /** The Campaign Cleaner campaign lifecycle status. */
          status: "processing" | "completed" | "paused";
          /** The timestamp when the campaign was saved or submitted. */
          date_added: string;
        }>;
      };
    };
    /** Submit an email campaign HTML payload for Campaign Cleaner analysis and processing. */
    "campaign_cleaner.send_campaign": {
      input: {
        /**
         * The full HTML content of the email campaign.
         * @minLength 1
         */
        campaign_html: string;
        /**
         * The saved name of the email campaign.
         * @minLength 1
         */
        campaign_name: string;
        /** Whether Campaign Cleaner should normalize spam-triggering font colors. */
        adjust_font_colors?: boolean;
        /** Whether Campaign Cleaner should enforce the configured font size bounds. */
        adjust_font_size?: boolean;
        /** Whether header tags should be converted into paragraph tags. */
        convert_h_to_p_tags?: boolean;
        /**
         * Custom caller metadata returned later by `get_campaign`.
         * @maxLength 500
         */
        custom_info?: string;
        /** Whether extensionless images should be hosted when resize-and-host is enabled. */
        host_extensionless_images?: boolean;
        /** Whether CSS should be inlined into each HTML element. */
        inline_css?: boolean;
        /** Whether inlined CSS should include the `!important` flag. */
        inline_css_important?: boolean;
        /** Whether media query rules should be marked as `!important`. */
        media_queries_important?: boolean;
        /**
         * The maximum width in pixels applied to all images.
         * @minimum 1
         */
        image_max_width?: number;
        /**
         * The minimum allowed font size in pixels.
         * @minimum 1
         * @maximum 99
         */
        min_font_size_allowed?: number;
        /**
         * The maximum allowed font size in pixels.
         * @minimum 1
         * @maximum 99
         */
        max_font_size_allowed?: number;
        /** Whether media queries should be preserved in the returned HTML. */
        preserve_media_queries?: boolean;
        /**
         * The absolute base URL used to expand relative links in the campaign.
         * @format uri
         */
        relative_links_base_url?: string;
        /** Whether class and ID attributes should be removed after CSS inlining. */
        remove_classes_and_ids?: boolean;
        /** Whether HTML and CSS comments should be removed. */
        remove_comments?: boolean;
        /** Whether control and non-printable characters should be removed. */
        remove_control_non_printable?: boolean;
        /** Whether inherited CSS should be removed after inlining. */
        remove_css_inheritance?: boolean;
        /** Whether fixed image heights should be removed. */
        remove_image_height?: boolean;
        /** Whether repeated punctuation should be collapsed to a single character. */
        remove_successive_punctuation?: boolean;
        /** Whether diacritic characters should be replaced with ASCII equivalents. */
        replace_diacritics?: boolean;
        /** Whether non-ASCII characters should be replaced with ASCII equivalents. */
        replace_non_ascii_characters?: boolean;
        /** Whether eligible images should be resized, converted, and hosted by Campaign Cleaner. */
        resize_and_host?: boolean;
        /** Optional surrounding div defaults applied to the submitted HTML. */
        surrounding_div?: {
          /**
           * The surrounding div max width in pixels.
           * @minimum 1
           */
          max_width?: number;
          /** The text alignment applied inside the surrounding div. */
          text_align?: "left" | "center" | "right";
          /**
           * The default surrounding div font size in pixels.
           * @minimum 1
           */
          font_size?: number;
          /** Whether the surrounding div should be centered within its parent. */
          center_to_parent?: boolean;
        };
        /**
         * An absolute webhook URL that receives the finished campaign analysis.
         * @format uri
         */
        webhook_url?: string;
      };
      output: {
        /** The created campaign reference. */
        campaign: {
          /** The Campaign Cleaner campaign identifier. */
          id: string;
        };
      };
    };
  }
}
