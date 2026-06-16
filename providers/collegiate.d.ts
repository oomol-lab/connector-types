import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up a word in the Merriam-Webster Collegiate Dictionary and return matching entries or spelling suggestions. */
    "collegiate.lookup_word": {
      input: {
        /**
         * The headword or stem query to send to the Merriam-Webster Collegiate Dictionary API.
         * @minLength 1
         */
        term: string;
      };
      output: {
        /** The original lookup term. */
        query: string;
        /** The Merriam-Webster entry objects returned for the lookup term. */
        entries: Array<{
          /** The Merriam-Webster entry metadata object. */
          meta?: {
            /** The Merriam-Webster entry identifier. */
            id?: string;
            /** The Merriam-Webster entry UUID. */
            uuid?: string;
            /** The sort key supplied by Merriam-Webster. */
            sort?: string;
            /** The Merriam-Webster source dictionary code. */
            src?: string;
            /** The Merriam-Webster section identifier. */
            section?: string;
            /** The entry stems returned by Merriam-Webster. */
            stems?: Array<string>;
            /** Whether Merriam-Webster marks the entry as offensive. */
            offensive?: boolean;
            [key: string]: unknown;
          };
          /** The homograph number. */
          hom?: number | string;
          /** The Merriam-Webster headword information object. */
          hwi?: {
            /** The headword in Merriam-Webster formatting. */
            hw?: string;
            /**
             * The Merriam-Webster pronunciation array for the entry.
             * @minItems 1
             */
            prs?: Array<{
              /** The written pronunciation in Merriam-Webster format. */
              mw?: string;
              /** The pronunciation label before the transcription. */
              l?: string;
              /** The pronunciation label after the transcription. */
              l2?: string;
              /** Punctuation separating pronunciation variants. */
              pun?: string;
              /** The Merriam-Webster sound object, with a derived audio_url helper when audio exists. */
              sound?: {
                /** The Merriam-Webster audio base filename. */
                audio?: string;
                /** The upstream Merriam-Webster pronunciation reference. */
                ref?: string;
                /** The upstream Merriam-Webster pronunciation status flag. */
                stat?: string;
                /** The derived Merriam-Webster pronunciation audio URL. */
                audio_url?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
            /** The parenthesized subject/status label. */
            psl?: string;
            [key: string]: unknown;
          };
          /**
           * The alternate headwords returned for the entry.
           * @minItems 1
           */
          ahws?: Array<{
            /** The alternate headword. */
            hw?: string;
            /**
             * Pronunciations for the alternate headword.
             * @minItems 1
             */
            prs?: Array<{
              /** The written pronunciation in Merriam-Webster format. */
              mw?: string;
              /** The pronunciation label before the transcription. */
              l?: string;
              /** The pronunciation label after the transcription. */
              l2?: string;
              /** Punctuation separating pronunciation variants. */
              pun?: string;
              /** The Merriam-Webster sound object, with a derived audio_url helper when audio exists. */
              sound?: {
                /** The Merriam-Webster audio base filename. */
                audio?: string;
                /** The upstream Merriam-Webster pronunciation reference. */
                ref?: string;
                /** The upstream Merriam-Webster pronunciation status flag. */
                stat?: string;
                /** The derived Merriam-Webster pronunciation audio URL. */
                audio_url?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
            /** The parenthesized subject/status label. */
            psl?: string;
            [key: string]: unknown;
          }> | null;
          /**
           * The variants returned for the entry.
           * @minItems 1
           */
          vrs?: Array<{
            /** The variant spelling or styling. */
            va?: string;
            /** The variant label such as 'or'. */
            vl?: string;
            /**
             * Pronunciations for the variant.
             * @minItems 1
             */
            prs?: Array<{
              /** The written pronunciation in Merriam-Webster format. */
              mw?: string;
              /** The pronunciation label before the transcription. */
              l?: string;
              /** The pronunciation label after the transcription. */
              l2?: string;
              /** Punctuation separating pronunciation variants. */
              pun?: string;
              /** The Merriam-Webster sound object, with a derived audio_url helper when audio exists. */
              sound?: {
                /** The Merriam-Webster audio base filename. */
                audio?: string;
                /** The upstream Merriam-Webster pronunciation reference. */
                ref?: string;
                /** The upstream Merriam-Webster pronunciation status flag. */
                stat?: string;
                /** The derived Merriam-Webster pronunciation audio URL. */
                audio_url?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
            /** The sense-specific inflection plural label. */
            spl?: string;
            [key: string]: unknown;
          }> | null;
          /** The functional label for the entry. */
          fl?: string;
          /**
           * The general labels attached to the entry.
           * @minItems 1
           */
          lbs?: Array<string>;
          /**
           * The subject/status labels attached to the entry.
           * @minItems 1
           */
          sls?: Array<string>;
          /**
           * The inflections returned for the entry.
           * @minItems 1
           */
          ins?: Array<{
            /** The fully spelled-out inflection. */
            if?: string;
            /** The inflection cutback. */
            ifc?: string;
            /** The inflection label. */
            il?: string;
            /**
             * Pronunciations for the inflection.
             * @minItems 1
             */
            prs?: Array<{
              /** The written pronunciation in Merriam-Webster format. */
              mw?: string;
              /** The pronunciation label before the transcription. */
              l?: string;
              /** The pronunciation label after the transcription. */
              l2?: string;
              /** Punctuation separating pronunciation variants. */
              pun?: string;
              /** The Merriam-Webster sound object, with a derived audio_url helper when audio exists. */
              sound?: {
                /** The Merriam-Webster audio base filename. */
                audio?: string;
                /** The upstream Merriam-Webster pronunciation reference. */
                ref?: string;
                /** The upstream Merriam-Webster pronunciation status flag. */
                stat?: string;
                /** The derived Merriam-Webster pronunciation audio URL. */
                audio_url?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
            /** The sense-specific inflection plural label. */
            spl?: string;
            [key: string]: unknown;
          }> | null;
          /**
           * The cognate cross-references returned for the entry.
           * @minItems 1
           */
          cxs?: Array<{
            /** The cognate cross-reference label. */
            cxl?: string;
            /**
             * The cognate cross-reference targets.
             * @minItems 1
             */
            cxtis?: Array<{
              /** The cognate cross-reference label. */
              cxl?: string;
              /** The cognate cross-reference target id. */
              cxr?: string;
              /** The cognate cross-reference display text. */
              cxt?: string;
              /** The sense number of the cross-reference target. */
              cxn?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }> | null;
          /**
           * The directional cross-references returned for the entry.
           * @minItems 1
           */
          dxnls?: Array<string> | null;
          /** The Merriam-Webster art object, with derived illustration URLs when artid exists. */
          art?: {
            /** The Merriam-Webster illustration identifier. */
            artid?: string;
            /** The illustration caption text. */
            capt?: string;
            /** The derived Merriam-Webster illustration image URL. */
            image_url?: string;
            /** The derived Merriam-Webster illustration page URL. */
            page_url?: string;
            [key: string]: unknown;
          } | null;
          /** The Merriam-Webster table object, with a derived page_url helper. */
          table?: {
            /** The Merriam-Webster table identifier. */
            tableid?: string;
            /** The display name for the referenced table. */
            displayname?: string;
            /** The derived Merriam-Webster table page URL. */
            page_url?: string;
            [key: string]: unknown;
          } | null;
          /**
           * The short definitions returned for the entry.
           * @minItems 1
           */
          shortdef?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The spelling suggestions returned for the lookup term. */
        suggestions: Array<string>;
      };
    };
  }
}
