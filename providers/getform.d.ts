import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List submissions from one protected Forminit form with pagination, keyword search, optional file metadata, and timezone formatting. */
    "getform.list_submissions": {
      input: {
        /**
         * The Forminit form ID whose submissions should be listed.
         * @minLength 1
         */
        formId: string;
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The page size to request. Forminit documents a range of 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Search keyword used to filter submissions.
         * @minLength 1
         */
        query?: string;
        /** Whether to include file attachment metadata in the response. */
        files?: boolean;
        /**
         * IANA timezone name used to format returned dates.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** The data envelope returned by the Forminit submissions API. */
        data: {
          /**
           * Form ID that owns the returned submissions.
           * @minLength 1
           */
          id: string;
          /** API version returned by Forminit. */
          apiVersion?: string;
          /** Submissions returned for the requested form. */
          submissions: Array<{
            /**
             * Unique submission identifier returned by Forminit.
             * @minLength 1
             */
            id: string;
            /**
             * Submission timestamp returned by Forminit.
             * @minLength 1
             */
            submissionDate: string;
            /** Boolean status flag returned for the submission. */
            status: boolean;
            /** Submission lifecycle status, such as open. */
            submissionStatus?: string;
            /** Dynamic blocks object returned by Forminit for one submission. */
            blocks: Record<string, string | number | boolean | Array<string> | {
                /** Submitter email address. */
                email?: string;
                /** Submitter first name. */
                firstName?: string;
                /** Submitter last name. */
                lastName?: string;
                /** Submitter full name. */
                fullName?: string;
                /** Submitter phone number. */
                phone?: string;
                /** Submitter title. */
                title?: string;
                /** Application-specific submitter identifier. */
                userId?: string;
                /** Submitter street address. */
                address?: string;
                /** Submitter city. */
                city?: string;
                /** Submitter country code. */
                country?: string;
                /** Submitter company. */
                company?: string;
                /** Submitter position. */
                position?: string;
                [key: string]: unknown;
              } | {
                /** Campaign traffic source. */
                utmSource?: string;
                /** Marketing medium. */
                utmMedium?: string;
                /** Campaign identifier. */
                utmCampaign?: string;
                /** Paid keyword or search term. */
                utmTerm?: string;
                /** Ad or content variant identifier. */
                utmContent?: string;
                /** Previous page URL or referrer label. */
                referrer?: string;
                /** Google Ads click identifier. */
                gclid?: string;
                /** Google Web to App conversion identifier. */
                wbraid?: string;
                /** Google App to Web conversion identifier. */
                gbraid?: string;
                /** Facebook click identifier. */
                fbclid?: string;
                /** Microsoft Ads click identifier. */
                msclkid?: string;
                /** TikTok click identifier. */
                ttclid?: string;
                /** Twitter/X click identifier. */
                twclid?: string;
                /** LinkedIn click identifier. */
                li_fat_id?: string;
                /** Amazon Ads click identifier. */
                amzclid?: string;
                /** Mailchimp campaign ID. */
                mc_cid?: string;
                /** Mailchimp subscriber ID. */
                mc_eid?: string;
                [key: string]: unknown;
              }>;
            /** Attached file metadata when requested. */
            files?: Array<{
              /**
               * File download URL.
               * @minLength 1
               */
              url: string;
              /** Uploaded file name. */
              name?: string;
              /** Field label or identifier for the file. */
              label?: string;
              /**
               * File size in bytes.
               * @minimum 0
               */
              size?: number;
              /** MIME type of the uploaded file. */
              type?: string;
              [key: string]: unknown;
            }>;
          }>;
          /** Pagination metadata returned by the Forminit submissions API. */
          pagination: {
            /**
             * Number of submissions in the current response.
             * @minimum 0
             */
            count: number;
            /**
             * Current page number.
             * @minimum 1
             */
            currentPage: number;
            /**
             * Total number of submissions.
             * @minimum 0
             */
            total: number;
            /**
             * First page number.
             * @minimum 1
             */
            firstPage: number;
            /**
             * Last page number.
             * @minimum 1
             */
            lastPage: number;
            /**
             * Page size used for the current response.
             * @minimum 1
             */
            size: number;
          };
        };
      };
    };
    /** Submit a protected Forminit form with JSON blocks using the documented sender, tracking, and field block types. */
    "getform.submit_form": {
      input: {
        /**
         * The Forminit form ID that will receive the submission.
         * @minLength 1
         */
        formId: string;
        /**
         * The JSON blocks payload submitted to Forminit.
         * @minItems 1
         */
        blocks: Array<{
          /** The sender block type. */
          type: "sender";
          /** Properties accepted by the Forminit sender block. */
          properties: {
            /**
             * Submitter email address.
             * @minLength 1
             */
            email?: string;
            /** Submitter first name. */
            firstName?: string;
            /** Submitter last name. */
            lastName?: string;
            /** Submitter full name. */
            fullName?: string;
            /** Submitter phone number in E.164 format when provided. */
            phone?: string;
            /** Submitter title, such as Mr, Mrs, Dr, or Prof. */
            title?: string;
            /** Application-specific submitter identifier. */
            userId?: string;
            /** Submitter street address. */
            address?: string;
            /** Submitter city. */
            city?: string;
            /** Submitter country as an ISO 3166-1 alpha-2 code. */
            country?: string;
            /** Submitter company or organization. */
            company?: string;
            /** Submitter job title or position. */
            position?: string;
          };
        } | {
          /** The tracking block type. */
          type: "tracking";
          /** Properties accepted by the Forminit tracking block. */
          properties: {
            /** Campaign traffic source, such as google or newsletter. */
            utmSource?: string;
            /** Marketing medium, such as cpc or email. */
            utmMedium?: string;
            /** Campaign name or identifier. */
            utmCampaign?: string;
            /** Paid keyword or search term. */
            utmTerm?: string;
            /** Ad or content variant identifier. */
            utmContent?: string;
            /** Previous page URL or referrer label. */
            referrer?: string;
            /** Google Ads click identifier. */
            gclid?: string;
            /** Google Web to App conversion identifier. */
            wbraid?: string;
            /** Google App to Web conversion identifier. */
            gbraid?: string;
            /** Facebook click identifier. */
            fbclid?: string;
            /** Microsoft Ads click identifier. */
            msclkid?: string;
            /** TikTok click identifier. */
            ttclid?: string;
            /** Twitter/X click identifier. */
            twclid?: string;
            /** LinkedIn click identifier. */
            li_fat_id?: string;
            /** Amazon Ads click identifier. */
            amzclid?: string;
            /** Mailchimp campaign ID. */
            mc_cid?: string;
            /** Mailchimp subscriber ID. */
            mc_eid?: string;
          };
        } | {
          /** Supported JSON field block type. */
          type: "text" | "number" | "email" | "phone" | "url" | "date" | "rating" | "select" | "radio" | "checkbox" | "country";
          /**
           * Unique identifier of the field block.
           * @minLength 1
           */
          name: string;
          /** Field block value sent to Forminit. */
          value: string | number | boolean | Array<string>;
        }>;
      };
      output: {
        /** Whether the submission was accepted by Forminit. */
        success: boolean;
        /** Thank-you page URL returned by Forminit. */
        redirectUrl?: string;
        /** The submission payload returned after a successful form submission. */
        submission: {
          /**
           * Unique submission hash identifier.
           * @minLength 1
           */
          hashId: string;
          /**
           * Submission timestamp in YYYY-MM-DD HH:mm:ss format.
           * @minLength 1
           */
          date: string;
          /** Dynamic blocks object returned by Forminit for one submission. */
          blocks: Record<string, string | number | boolean | Array<string> | {
              /** Submitter email address. */
              email?: string;
              /** Submitter first name. */
              firstName?: string;
              /** Submitter last name. */
              lastName?: string;
              /** Submitter full name. */
              fullName?: string;
              /** Submitter phone number. */
              phone?: string;
              /** Submitter title. */
              title?: string;
              /** Application-specific submitter identifier. */
              userId?: string;
              /** Submitter street address. */
              address?: string;
              /** Submitter city. */
              city?: string;
              /** Submitter country code. */
              country?: string;
              /** Submitter company. */
              company?: string;
              /** Submitter position. */
              position?: string;
              [key: string]: unknown;
            } | {
              /** Campaign traffic source. */
              utmSource?: string;
              /** Marketing medium. */
              utmMedium?: string;
              /** Campaign identifier. */
              utmCampaign?: string;
              /** Paid keyword or search term. */
              utmTerm?: string;
              /** Ad or content variant identifier. */
              utmContent?: string;
              /** Previous page URL or referrer label. */
              referrer?: string;
              /** Google Ads click identifier. */
              gclid?: string;
              /** Google Web to App conversion identifier. */
              wbraid?: string;
              /** Google App to Web conversion identifier. */
              gbraid?: string;
              /** Facebook click identifier. */
              fbclid?: string;
              /** Microsoft Ads click identifier. */
              msclkid?: string;
              /** TikTok click identifier. */
              ttclid?: string;
              /** Twitter/X click identifier. */
              twclid?: string;
              /** LinkedIn click identifier. */
              li_fat_id?: string;
              /** Amazon Ads click identifier. */
              amzclid?: string;
              /** Mailchimp campaign ID. */
              mc_cid?: string;
              /** Mailchimp subscriber ID. */
              mc_eid?: string;
              [key: string]: unknown;
            }>;
          /** Submission info metadata returned by Forminit. */
          submissionInfo: {
            /** Source IP address of the submission. */
            ip?: string;
            /** User agent captured for the submission. */
            user_agent?: string;
            /** Referrer captured for the submission. */
            referer?: string;
            /** Location metadata returned for a submission when available. */
            location?: {
              /** Country information returned inside submission location metadata. */
              country?: {
                /** Country name detected for the submission. */
                name?: string;
                /** Country ISO 3166-1 alpha-2 code detected for the submission. */
                iso?: string;
                [key: string]: unknown;
              };
              /** City information returned inside submission location metadata. */
              city?: {
                /** City name detected for the submission. */
                name?: string;
                [key: string]: unknown;
              };
              /** IANA timezone detected for the submission. */
              timezone?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
        };
      };
    };
  }
}
